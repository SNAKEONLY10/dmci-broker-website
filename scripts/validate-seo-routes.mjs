import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { publicStaticRoutes, resolveSeo } from "../src/data/seo.js";

const distDir = path.resolve("dist");
const routes = dedupeRoutes(publicStaticRoutes());
const failures = [];

await assertFile(path.join(distDir, "sitemap.xml"), "Missing dist/sitemap.xml");
await assertFile(path.join(distDir, "robots.txt"), "Missing dist/robots.txt");

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
  assert(/<h1\b/i.test(html), `${route.path}: missing crawlable h1`);
  assert(/<!-- seo-fallback:start -->[\s\S]*?<main class="static-seo-fallback">/i.test(html), `${route.path}: static fallback missing`);
  assert(!/id="root"\s*>\s*<\/div>/i.test(html), `${route.path}: empty root detected`);
  assert(!/href="#"/i.test(html), `${route.path}: placeholder # link detected`);
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
