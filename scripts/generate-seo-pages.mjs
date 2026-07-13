import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { contact } from "../src/data/contact.js";
import { locations } from "../src/data/locations.js";
import { projects } from "../src/data/projects.js";
import { absoluteUrl, cityPages, publicStaticRoutes, resolveSeo, SITE_URL } from "../src/data/seo.js";

const distDir = path.resolve("dist");
const routeDate = "2026-07-01";
const routes = dedupeRoutes(publicStaticRoutes());

const templatePath = path.join(distDir, "index.html");
const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const html = renderRouteHtml(template, route);
  const outFile = route.path === "/"
    ? templatePath
    : path.join(distDir, ...route.path.replace(/^\/+/, "").split("/"), "index.html");
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
}

const notFoundRoute = {
  path: "/404",
  h1: "Page not found",
  title: "Page Not Found | My DMCI Broker",
  description: "The requested page could not be found. Browse the current DMCI project directory or contact Luisa Corral for buyer assistance."
};
await writeFile(path.join(distDir, "404.html"), renderRouteHtml(template, notFoundRoute));

await writeFile(path.join(distDir, "sitemap.xml"), renderSitemap(routes));
await writeFile(path.join(distDir, "robots.txt"), renderRobots());

console.log(`Generated ${routes.length} static SEO route pages, sitemap.xml, and robots.txt.`);

function renderRouteHtml(baseHtml, route) {
  const seo = resolveSeo(route.path);
  const fallback = renderFallback(route, seo);
  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = upsertMeta(html, "name", "description", seo.description);
  html = upsertMeta(html, "name", "robots", seo.robots);
  html = upsertMeta(html, "property", "og:title", seo.title);
  html = upsertMeta(html, "property", "og:description", seo.description);
  html = upsertMeta(html, "property", "og:type", "website");
  html = upsertMeta(html, "property", "og:url", seo.canonical);
  html = upsertMeta(html, "property", "og:image", seo.ogImage);
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:title", seo.title);
  html = upsertMeta(html, "name", "twitter:description", seo.description);
  html = upsertMeta(html, "name", "twitter:image", seo.ogImage);
  html = upsertLink(html, "canonical", seo.canonical);
  html = html.replace(
    /<!-- seo-fallback:start -->[\s\S]*?<!-- seo-fallback:end -->/,
    `<!-- seo-fallback:start -->${fallback}<!-- seo-fallback:end -->`
  );
  return html;
}

function renderFallback(route, seo) {
  if (route.project) return renderProjectFallback(route.project, seo);
  if (route.projects) return renderCityFallback(route, seo);
  return renderPageFallback(route, seo);
}

function renderPageFallback(route, seo) {
  const featuredProjects = projects.slice(0, 8);
  return wrapFallback({
    eyebrow: "DMCI Homes Buyer Assistance",
    h1: seo.h1,
    description: seo.description,
    body: [
      renderNav(),
      section("Buyer Actions", [
        actionLink("/request-computation", "Request latest computation"),
        actionLink("/availability", "Check current availability"),
        actionLink("/book-viewing", "Book site viewing"),
        actionLink("/contact", "Contact Luisa")
      ]),
      section("Featured Project Pages", featuredProjects.map((project) => actionLink(`/projects/${project.slug}`, project.name))),
      section("Browse by City", cityPages.map((city) => actionLink(city.path, city.name))),
      trustBlock()
    ]
  });
}

function renderCityFallback(city, seo) {
  const projectLinks = city.projects.length
    ? city.projects.map((project) => actionLink(`/projects/${project.slug}`, `${project.name} - ${project.status}`))
    : ["<li>Project list to be confirmed. Request latest location options from Luisa.</li>"];

  return wrapFallback({
    eyebrow: "Location Guide",
    h1: seo.h1,
    description: seo.description,
    body: [
      renderNav(),
      section(`DMCI Projects in ${city.name}`, projectLinks),
      section("Buyer Reminders", [
        "<li>Prices, promos, payment terms, and availability must be confirmed before presenting options.</li>",
        "<li>Map pins, nearby landmarks, and travel times should be checked against current official references.</li>",
        "<li>Use this location page for shortlisting, not as live inventory.</li>"
      ]),
      section("Next Steps", [
        actionLink(`/request-computation?location=${encodeURIComponent(city.name)}`, "Request computation for this location"),
        actionLink("/contact", "Ask Luisa for recommendations")
      ]),
      trustBlock()
    ]
  });
}

function renderProjectFallback(project, seo) {
  const facts = [
    ["Location", project.city || project.location],
    ["Address", project.address],
    ["Status", project.status],
    ["Turnover", project.turnoverYear || "To be confirmed"],
    ["Development", project.developmentType],
    ["Unit Types", project.unitTypes?.join(", ") || "Request latest details"],
    ["Price Guide", project.priceRangeLabel || "Request latest computation"]
  ].filter(([, value]) => isUseful(value));

  return wrapFallback({
    eyebrow: "Project Detail",
    h1: seo.h1,
    description: project.overview || seo.description,
    body: [
      renderNav(),
      section("Project Facts", facts.map(([label, value]) => `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</li>`)),
      section("Highlights", (project.highlights?.length ? project.highlights : ["Request latest project presentation from Luisa."]).map((item) => `<li>${escapeHtml(item)}</li>`)),
      section("Buyer Actions", [
        actionLink(`/request-computation?project=${encodeURIComponent(project.name)}`, "Request latest computation"),
        actionLink(`/availability?project=${encodeURIComponent(project.name)}`, "Check availability"),
        actionLink(`/book-viewing?project=${encodeURIComponent(project.name)}`, "Book site viewing"),
        actionLink("/contact", "Message Luisa")
      ]),
      section("Important Confirmation", [
        "<li>Displayed project details are buyer guidance only.</li>",
        "<li>Confirm prices, promos, unit availability, payment terms, turnover, and official requirements before reservation.</li>",
        `<li>Source reference: ${project.sourceUrl ? `<a href="${escapeAttribute(project.sourceUrl)}">official project reference</a>` : "Request latest official materials"}</li>`
      ]),
      trustBlock()
    ]
  });
}

function wrapFallback({ eyebrow, h1, description, body }) {
  return `<main class="static-seo-fallback"><header><p>${escapeHtml(eyebrow)}</p><h1>${escapeHtml(h1)}</h1><p>${escapeHtml(description)}</p></header>${body.join("")}</main>`;
}

function renderNav() {
  return `<nav aria-label="Important pages"><ul>${[
    actionLink("/", "Home"),
    actionLink("/projects", "Projects"),
    actionLink("/locations", "Locations"),
    actionLink("/buyers-guide", "Buyer Guide"),
    actionLink("/privacy-policy", "Privacy"),
    actionLink("/disclaimer", "Disclaimer")
  ].join("")}</ul></nav>`;
}

function section(title, items) {
  return `<section><h2>${escapeHtml(title)}</h2><ul>${items.join("")}</ul></section>`;
}

function actionLink(href, label) {
  return `<li><a href="${escapeAttribute(href)}">${escapeHtml(label)}</a></li>`;
}

function trustBlock() {
  return `<section><h2>Trust and Disclaimer</h2><p>${escapeHtml(contact.brokerName)} - ${escapeHtml(contact.role)}. ${escapeHtml(contact.license)}.</p><p>${escapeHtml(contact.disclaimer)}</p></section>`;
}

function renderSitemap(routeList) {
  const urls = routeList
    .map((route) => resolveSeo(route.path))
    .filter((seo) => seo.robots !== "noindex,follow")
    .map((seo) => `  <url><loc>${escapeHtml(seo.canonical)}</loc><lastmod>${routeDate}</lastmod><changefreq>${changeFreq(seo.path)}</changefreq><priority>${priority(seo.path)}</priority></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function renderRobots() {
  return `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`;
}

function upsertMeta(html, attr, key, content) {
  const escaped = escapeAttribute(content);
  const pattern = new RegExp(`<meta\\s+${attr}=["']${escapeRegExp(key)}["'][^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${escaped}" />`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertLink(html, rel, href) {
  const tag = `<link rel="${rel}" href="${escapeAttribute(href)}" />`;
  const pattern = new RegExp(`<link\\s+rel=["']${escapeRegExp(rel)}["'][^>]*>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function dedupeRoutes(routeList) {
  const seen = new Set();
  return routeList.filter((route) => {
    if (!route.path || seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

function changeFreq(pathname) {
  if (pathname === "/") return "weekly";
  if (pathname.startsWith("/projects/")) return "monthly";
  return "monthly";
}

function priority(pathname) {
  if (pathname === "/") return "1.0";
  if (pathname === "/projects" || pathname === "/locations") return "0.9";
  if (pathname.startsWith("/projects/") || pathname.startsWith("/locations/")) return "0.8";
  return "0.6";
}

function isUseful(value) {
  if (value == null) return false;
  const normalized = String(value).trim().toLowerCase();
  return normalized && normalized !== "undefined" && normalized !== "null";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
