import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";
import { cityPages } from "../src/data/seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const allowedExactPaths = new Set([
  "/",
  "/projects",
  "/locations",
  "/availability",
  "/request-computation",
  "/book-viewing",
  "/buyers-guide",
  "/reservation-requirements",
  "/virtual-tours",
  "/promos",
  "/resale-units",
  "/about",
  "/contact",
  "/privacy",
  "/privacy-policy",
  "/disclaimer",
  ...projects.map((project) => `/projects/${project.slug}`),
  ...cityPages.map((city) => city.path)
]);
const allowedPrefixes = ["/projects/", "/locations/"];
const publicSourceFiles = collectSourceFiles(srcDir)
  .filter((file) => !file.endsWith(`${path.sep}Showcase.jsx`) && !file.endsWith(`${path.sep}seo.js`));
const failures = [];
let checkedLinks = 0;

for (const file of publicSourceFiles) {
  const source = readFileSync(file, "utf8");
  const linkMatches = [...source.matchAll(/\b(?:to|href)=["'](\/[^"']*)["']/g)];

  for (const match of linkMatches) {
    const original = match[1];
    const cleanPath = normalizeInternalPath(original);
    if (!cleanPath) continue;
    checkedLinks += 1;

    if (cleanPath === "/showcase") {
      failures.push(`${relative(file)} links to internal noindex route /showcase`);
      continue;
    }

    if (isDynamicRoute(cleanPath)) continue;
    if (allowedExactPaths.has(cleanPath)) continue;
    if (allowedPrefixes.some((prefix) => cleanPath.startsWith(prefix))) continue;

    failures.push(`${relative(file)} has unknown internal link: ${original}`);
  }
}

if (failures.length) {
  console.error("Internal link QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Internal link QA passed. Checked ${checkedLinks} static internal links.`);

function collectSourceFiles(directory, files = []) {
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      collectSourceFiles(fullPath, files);
    } else if (/\.(jsx?|tsx?)$/.test(entry)) {
      files.push(fullPath);
    }
  }
  return files;
}

function normalizeInternalPath(value) {
  if (!value || !value.startsWith("/")) return "";
  const [withoutHash] = value.split("#");
  const [withoutQuery] = withoutHash.split("?");
  return withoutQuery || "/";
}

function isDynamicRoute(value) {
  return value.includes(":") || value.includes("${") || value.includes("`");
}

function relative(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}
