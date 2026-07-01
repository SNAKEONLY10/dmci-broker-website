import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { publicStaticRoutes, resolveSeo } from "../src/data/seo.js";

const routes = dedupeRoutes(publicStaticRoutes());
const lines = [
  "# DMCI Broker Website Route Inventory",
  "",
  "Generated from `src/data/seo.js` and project data. Project details remain buyer guidance only; missing or changing details should stay as `To be confirmed` or `Request latest details`.",
  "",
  "| Path | Title | H1 | Canonical | Primary CTA | Notes |",
  "| --- | --- | --- | --- | --- | --- |"
];

for (const route of routes) {
  const seo = resolveSeo(route.path);
  const notes = route.project
    ? `${route.project.name}; ${route.project.status}; ${route.project.location}; details subject to confirmation`
    : route.projects
      ? `${route.name}; ${route.projects.length} project(s) listed`
      : seo.robots === "noindex,follow"
        ? "Internal/noindex route"
        : "Public route";
  lines.push(`| \`${route.path}\` | ${cell(seo.title)} | ${cell(seo.h1)} | ${cell(seo.canonical)} | \`${route.cta || seo.cta || "/contact"}\` | ${cell(notes)} |`);
}

await mkdir(path.resolve("docs"), { recursive: true });
await writeFile(path.resolve("docs", "route-inventory.md"), `${lines.join("\n")}\n`);
console.log(`Wrote docs/route-inventory.md with ${routes.length} routes.`);

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
