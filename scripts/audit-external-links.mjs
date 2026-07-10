import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { contact } from "../src/data/contact.js";
import { projects } from "../src/data/projects.js";
import { cityPages, SITE_URL } from "../src/data/seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const reportPath = path.join(docsDir, "external-link-audit.md");
const sourceRoots = ["src", "api", "index.html", "public/robots.txt"]
  .map((entry) => path.join(root, entry))
  .filter((entry) => exists(entry));

const links = new Map();
const failures = [];

collectUrlsFromValue({ projects, contact, cityPages, SITE_URL }, "data exports");
for (const file of collectFiles(sourceRoots)) {
  const source = readFileSync(file, "utf8");
  for (const url of extractUrls(source)) {
    addLink(url, relative(file));
  }
}

const rows = [...links.values()].sort((a, b) => a.category.localeCompare(b.category) || a.url.localeCompare(b.url));
const categories = groupBy(rows, (row) => row.category);

for (const row of rows) {
  if (row.category === "Malformed") {
    failures.push(`Malformed external link: ${row.url} (${row.sources.join(", ")})`);
  }
  if (row.url.startsWith("http://") && !row.url.includes("localhost") && !row.url.includes("127.0.0.1")) {
    failures.push(`Insecure external link should use https: ${row.url} (${row.sources.join(", ")})`);
  }
}

mkdirSync(docsDir, { recursive: true });
writeFileSync(reportPath, buildReport(rows, categories), "utf8");

if (failures.length) {
  console.error("External link QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  console.error(`Report written to ${relative(reportPath)}.`);
  process.exit(1);
}

console.log(`External link QA passed. Reported ${rows.length} unique links across ${categories.size} categories.`);
console.log(`Report written to ${relative(reportPath)}.`);

function collectUrlsFromValue(value, source, seen = new WeakSet()) {
  if (value == null) return;
  if (typeof value === "string") {
    for (const url of extractUrls(value)) addLink(url, source);
    return;
  }
  if (typeof value !== "object") return;
  if (seen.has(value)) return;
  seen.add(value);

  if (Array.isArray(value)) {
    value.forEach((item) => collectUrlsFromValue(item, source, seen));
    return;
  }

  for (const [key, nested] of Object.entries(value)) {
    collectUrlsFromValue(nested, `${source}.${key}`, seen);
  }
}

function extractUrls(source) {
  const matches = source.match(/\b(?:https?:\/\/|mailto:|tel:|sms:|viber:\/\/)[^\s"'`<>\\]+/gi) || [];
  return matches
    .map((url) => url.replace(/[),.;]+$/g, ""))
    .filter((url) => !url.includes("${"))
    .filter(Boolean);
}

function addLink(url, source) {
  const normalized = normalizeUrl(url);
  if (!links.has(normalized)) {
    links.set(normalized, {
      url: normalized,
      category: classify(normalized),
      sources: []
    });
  }

  const entry = links.get(normalized);
  if (!entry.sources.includes(source)) entry.sources.push(source);
}

function normalizeUrl(url) {
  return String(url || "").trim();
}

function classify(url) {
  const lower = url.toLowerCase();
  if (lower.startsWith("tel:")) return "Device link - telephone";
  if (lower.startsWith("mailto:")) return "Device link - email";
  if (lower.startsWith("sms:")) return "Device link - sms";
  if (lower.startsWith("viber://")) return "Device link - viber";

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return "Malformed";
  }

  const hostname = parsed.hostname.replace(/^www\./, "").toLowerCase();
  const full = `${hostname}${parsed.pathname}${parsed.search}`.toLowerCase();

  if (hostname === "dmcihomes.com" || hostname === "dmci-online.com") return "Official DMCI link";
  if (hostname.includes("google.com") && full.includes("/maps")) return "Google Maps";
  if (hostname === "maps.google.com") return "Google Maps";
  if (hostname === "youtube.com" || hostname === "youtu.be" || hostname === "youtube-nocookie.com") return "YouTube";
  if (hostname === "drive.google.com") return "Google Drive";
  if (hostname.includes("viewin360.co") || full.includes("virtual-community-tour") || hostname.includes("matterport.com")) return "Virtual tour";
  if (hostname === "fonts.googleapis.com" || hostname === "fonts.gstatic.com") return "Frontend dependency";
  if (hostname === "api.resend.com") return "Server delivery API";
  if (hostname === "dmci-broker-website.vercel.app") return "Production canonical";
  return "Other external link";
}

function collectFiles(entries) {
  const files = [];

  for (const entry of entries) {
    const stats = statSync(entry);
    if (stats.isDirectory()) {
      collectDirectory(entry, files);
    } else {
      files.push(entry);
    }
  }

  return files.filter((file) => /\.(jsx?|tsx?|css|html|txt)$/i.test(file));
}

function collectDirectory(directory, files) {
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      if (["node_modules", "dist"].includes(entry)) continue;
      collectDirectory(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
}

function groupBy(items, getKey) {
  const grouped = new Map();
  for (const item of items) {
    const key = getKey(item);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(item);
  }
  return grouped;
}

function buildReport(rows, categories) {
  const now = new Date().toISOString();
  const summaryRows = [...categories.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => `| ${category} | ${items.length} |`)
    .join("\n");

  const detailSections = [...categories.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => {
      const table = items
        .map((item) => `| ${escapeCell(item.url)} | ${escapeCell(item.sources.slice(0, 5).join(", "))}${item.sources.length > 5 ? " + more" : ""} |`)
        .join("\n");
      return `## ${category}\n\n| URL | Source references |\n| --- | --- |\n${table}`;
    })
    .join("\n\n");

  return `# External Link Audit

Generated: ${now}

Mode: static source/data scan. This report does not make network requests, so CI stays stable. Device links such as tel, mailto, sms, and viber are reported but not treated as failures.

Production canonical: ${SITE_URL}

## Summary

| Category | Unique links |
| --- | ---: |
${summaryRows}

## Notes

- Official DMCI, Google Maps, YouTube, Google Drive, and virtual-tour links are categorized for manual browser checks.
- Tel, mailto, sms, and Viber links depend on the buyer's device and installed apps.
- This audit fails only for malformed links or insecure non-local http links.

${detailSections}
`;
}

function escapeCell(value) {
  return String(value || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function exists(entry) {
  try {
    statSync(entry);
    return true;
  } catch {
    return false;
  }
}

function relative(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}
