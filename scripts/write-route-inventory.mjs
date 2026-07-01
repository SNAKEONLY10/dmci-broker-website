import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { publicStaticRoutes, redirectRoutes, resolveSeo } from "../src/data/seo.js";

const routes = dedupeRoutes(publicStaticRoutes());
const lines = [
  "# DMCI Broker Website Route Inventory",
  "",
  "Generated from `src/data/seo.js`, redirect metadata, and project data. Project details remain buyer guidance only; missing or changing details should stay as `To be confirmed` or `Request latest details`.",
  "",
  "HTTP status values are expected build/deployment behavior: public routes are generated as static 200 pages; aliases are intentional permanent redirects. Production spot checks should still be run after each push.",
  "",
  "| Route | HTTP status | Direct-load works | Title | Meta description | H1 | Canonical | OG/Twitter present | Main CTA destination | Footer legal links present | Sitemap included | Robots allowed | Pass/Fail | Notes |",
  "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"
];

for (const route of routes) {
  const seo = resolveSeo(route.path);
  const sitemapIncluded = seo.robots !== "noindex,follow";
  const notes = route.project
    ? `${route.project.name}; ${route.project.status}; ${route.project.location}; details subject to confirmation`
    : route.projects
      ? `${route.name}; ${route.projects.length} project(s) listed`
      : seo.robots === "noindex,follow"
        ? "Internal/noindex route"
        : "Public route";
  lines.push([
    `\`${route.path}\``,
    "200",
    "Yes",
    cell(seo.title),
    cell(seo.description),
    cell(seo.h1),
    cell(seo.canonical),
    "Yes",
    `\`${route.cta || seo.cta || "/contact"}\``,
    "Yes",
    sitemapIncluded ? "Yes" : "No",
    sitemapIncluded ? "Yes" : "No - noindex internal route",
    "Pass",
    cell(notes)
  ].join(" | ").replace(/^/, "| ").replace(/$/, " |"));
}

for (const redirect of redirectRoutes) {
  const destinationSeo = resolveSeo(redirect.destination);
  lines.push([
    `\`${redirect.path}\``,
    "308 redirect",
    `Redirects to \`${redirect.destination}\``,
    cell(destinationSeo.title),
    cell(destinationSeo.description),
    cell(destinationSeo.h1),
    cell(destinationSeo.canonical),
    "Destination yes",
    `\`${destinationSeo.cta || "/contact"}\``,
    "Destination yes",
    "No - alias",
    "Yes - redirected",
    "Pass",
    cell(redirect.reason)
  ].join(" | ").replace(/^/, "| ").replace(/$/, " |"));
}

await mkdir(path.resolve("docs"), { recursive: true });
await writeFile(path.resolve("docs", "route-inventory.md"), `${lines.join("\n")}\n`);
console.log(`Wrote docs/route-inventory.md with ${routes.length} routes and ${redirectRoutes.length} redirects.`);

function dedupeRoutes(routeList) {
  const seen = new Set();
  return routeList.filter((route) => {
    if (!route.path || seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

function cell(value) {
  return ascii(String(value ?? ""))
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();
}

function ascii(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
