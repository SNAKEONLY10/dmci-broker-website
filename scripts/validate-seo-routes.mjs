import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { cityPages, publicStaticRoutes, redirectRoutes, resolveSeo } from "../src/data/seo.js";
import { projects } from "../src/data/projects.js";

const distDir = path.resolve("dist");
const routes = dedupeRoutes(publicStaticRoutes());
const failures = [];
const titleOwners = new Map();
const descriptionOwners = new Map();
let sitemap = "";
let robots = "";

await assertFile(path.join(distDir, "sitemap.xml"), "Missing dist/sitemap.xml");
await assertFile(path.join(distDir, "robots.txt"), "Missing dist/robots.txt");
await assertFile(path.join(distDir, "404.html"), "Missing dist/404.html");
assert(projects.length === 18, `Project directory should contain exactly 18 approved projects; found ${projects.length}`);

try {
  sitemap = await readFile(path.join(distDir, "sitemap.xml"), "utf8");
  robots = await readFile(path.join(distDir, "robots.txt"), "utf8");
} catch {
  // File presence errors are already collected above.
}

if (sitemap) {
  assert(/<urlset[\s>]/.test(sitemap), "sitemap.xml should be valid-looking XML with a urlset root");
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
  const expectedSitemapRoutes = routes
    .map((route) => resolveSeo(route.path))
    .filter((seo) => seo.robots !== "noindex,follow");
  for (const seo of expectedSitemapRoutes) {
    assert(sitemapUrls.has(seo.canonical), `sitemap.xml missing ${seo.canonical}`);
  }
  for (const project of projects) {
    assert(sitemapUrls.has(`https://dmci-broker-website.vercel.app/projects/${project.slug}`), `sitemap.xml missing project ${project.slug}`);
  }
  for (const city of cityPages) {
    assert(sitemapUrls.has(`https://dmci-broker-website.vercel.app${city.path}`), `sitemap.xml missing city ${city.path}`);
  }
  for (const redirect of redirectRoutes) {
    assert(!sitemapUrls.has(`https://dmci-broker-website.vercel.app${redirect.path}`), `sitemap.xml should not include alias ${redirect.path}`);
  }
  assert(!sitemapUrls.has("https://dmci-broker-website.vercel.app/showcase"), "sitemap.xml should not include noindex showcase route");
}

if (robots) {
  assert(/User-agent:\s*\*/i.test(robots), "robots.txt missing user-agent rule");
  assert(/Allow:\s*\//i.test(robots), "robots.txt should allow public crawling");
  assert(/Sitemap:\s*https:\/\/dmci-broker-website\.vercel\.app\/sitemap\.xml/i.test(robots), "robots.txt missing sitemap URL");
  assert(!/Disallow:\s*\//i.test(robots), "robots.txt should not disallow the whole site");
}

try {
  const notFoundHtml = await readFile(path.join(distDir, "404.html"), "utf8");
  const notFoundSeo = resolveSeo("/404");
  assert(notFoundSeo.robots === "noindex,follow", "404 metadata should be noindex,follow");
  assert(notFoundHtml.includes(`<title>${escapeHtml(notFoundSeo.title)}</title>`), "404 title mismatch/missing");
  assert(/<meta\s+name="robots"\s+content="noindex,follow"/i.test(notFoundHtml), "404 page should include noindex,follow");
  assert((notFoundHtml.match(/<h1\b/gi) || []).length === 1, "404 page should have exactly one crawlable h1");
} catch {
  // File presence errors are already collected above.
}

await assertRedirectConfig();

for (const route of routes) {
  const file = route.path === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, ...route.path.replace(/^\/+/, "").split("/"), "index.html");
  let html = "";
  try {
    html = await readFile(file, "utf8");
  } catch {
    failures.push(`${route.path}: missing static HTML at ${path.relative(process.cwd(), file)}`);
    continue;
  }

  const seo = resolveSeo(route.path);
  assert(html.includes(`<title>${escapeHtml(seo.title)}</title>`), `${route.path}: title mismatch/missing`);
  assert(/<meta\s+name="description"\s+content="[^"]{30,}"/i.test(html), `${route.path}: meta description missing/too short`);
  assert(new RegExp(`<link\\s+rel="canonical"\\s+href="${escapeRegExp(escapeHtml(seo.canonical))}"`, "i").test(html), `${route.path}: canonical missing`);
  assert(new RegExp(`<meta\\s+property="og:title"\\s+content="${escapeRegExp(escapeHtml(seo.title))}"`, "i").test(html), `${route.path}: og:title missing`);
  assert(/<meta\s+property="og:description"\s+content="[^"]{30,}"/i.test(html), `${route.path}: og:description missing/too short`);
  assert(/<meta\s+property="og:image"\s+content="https:\/\/dmci-broker-website\.vercel\.app\/[^"]+"/i.test(html), `${route.path}: og:image missing`);
  assert(/<meta\s+name="twitter:card"\s+content="summary_large_image"/i.test(html), `${route.path}: twitter:card missing`);
  assert(/<meta\s+name="twitter:title"\s+content="[^"]+"/i.test(html), `${route.path}: twitter:title missing`);
  assert(/<meta\s+name="twitter:description"\s+content="[^"]{30,}"/i.test(html), `${route.path}: twitter:description missing/too short`);
  assert((html.match(/<h1\b/gi) || []).length === 1, `${route.path}: should have exactly one crawlable h1`);
  assert(/<!-- seo-fallback:start -->[\s\S]*?<main class="static-seo-fallback">/i.test(html), `${route.path}: static fallback missing`);
  assert(!/id="root"\s*>\s*<\/div>/i.test(html), `${route.path}: empty root detected`);
  assert(!/href="#"/i.test(html), `${route.path}: placeholder # link detected`);
  assert(seo.robots === "noindex,follow" || !/<meta\s+name="robots"\s+content="noindex/i.test(html), `${route.path}: public route should not be noindex`);

  if (seo.robots !== "noindex,follow") {
    trackUnique(titleOwners, seo.title, route.path, "title");
    trackUnique(descriptionOwners, seo.description, route.path, "meta description");
  }
}

if (failures.length) {
  console.error("SEO route validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO route validation passed for ${routes.length} routes.`);

async function assertFile(file, message) {
  try {
    await access(file);
  } catch {
    failures.push(message);
  }
}

async function assertRedirectConfig() {
  let config = {};
  try {
    config = JSON.parse(await readFile(path.resolve("vercel.json"), "utf8"));
  } catch {
    failures.push("vercel.json missing or invalid JSON");
    return;
  }
  const redirects = config.redirects || [];
  for (const redirect of redirectRoutes) {
    const match = redirects.find((item) => item.source === redirect.path && item.destination === redirect.destination);
    assert(Boolean(match), `vercel.json missing redirect ${redirect.path} -> ${redirect.destination}`);
  }
  const catchAllRewrite = (config.rewrites || []).find((item) => item.destination === "/index.html");
  assert(!catchAllRewrite, "vercel.json should not rewrite unknown routes to index.html; generated routes and 404.html handle static routing");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function dedupeRoutes(routeList) {
  const seen = new Set();
  return routeList.filter((route) => {
    if (!route.path || seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

function trackUnique(map, value, routePath, label) {
  const existing = map.get(value);
  if (existing) {
    failures.push(`${routePath}: duplicate ${label} also used by ${existing}`);
    return;
  }
  map.set(value, routePath);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
