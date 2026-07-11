import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";
import { getResponsiveImage } from "../src/utils/responsiveImages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const optimizedSlugs = new Set([
  "the-oriana",
  "one-delta-terraces",
  "the-erin-heights",
  "cameron-residences",
  "the-valeron-tower",
  "allegra-garden-place",
  "prisma-residences",
  "sage-residences",
  "kai-garden-residences",
  "mulberry-place",
  "mulberry-place-2",
  "alder-residences",
  "the-aston-place",
  "the-camden-place",
  "the-atherton",
  "calathea-place",
  "sonora-garden-residences",
  "moncello-crest",
  "solmera-coast"
]);

const requiredCoreFiles = ["hero.jpg", "thumbnail.jpg"];
const failures = [];
const checkedPaths = new Set();
let checkedAssets = 0;
let checkedResponsiveVariants = 0;
const checkedGeneratedVariants = new Set();

for (const project of projects) {
  if (project.assetStatus === "complete") {
    const assetSlug = project.assetSlug || project.slug;
    for (const file of requiredCoreFiles) {
      checkPublicPath(`/assets/projects/${assetSlug}/${file}`, `${project.name} core asset`);
    }
  }

  for (const assetPath of collectAssetPaths(project)) {
    checkPublicPath(assetPath, project.name);
    checkResponsiveVariants(assetPath, project.name);
    checkGeneratedCardVariants(assetPath, project.name);
  }
}

if (failures.length) {
  console.error("Image QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Image QA passed for ${projects.length} projects.`);
console.log(`Checked ${checkedAssets} unique asset files and ${checkedResponsiveVariants} responsive WebP variants.`);
console.log(`Verified ${checkedGeneratedVariants.size} runtime-generated card image URLs.`);

function collectAssetPaths(value, paths = new Set()) {
  if (!value) return paths;
  if (typeof value === "string") {
    if (value.startsWith("/assets/projects/") || value.startsWith("/assets/img/")) {
      paths.add(value.split(/[?#]/)[0]);
    }
    return paths;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectAssetPaths(item, paths));
    return paths;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => collectAssetPaths(item, paths));
  }
  return paths;
}

function checkPublicPath(assetPath, context) {
  if (checkedPaths.has(assetPath)) return;
  checkedPaths.add(assetPath);
  checkedAssets += 1;

  const diskPath = path.join(publicDir, assetPath.replace(/^\//, ""));
  if (!existsSync(diskPath)) {
    failures.push(`${context}: missing ${assetPath}`);
  }
}

function checkResponsiveVariants(assetPath, context) {
  const match = assetPath.match(/^\/assets\/projects\/([^/]+)\/(.+)\.(jpe?g|png)$/i);
  if (!match) return;

  const [, slug, fileName] = match;
  if (!optimizedSlugs.has(slug)) return;
  if (/^(logo|brochure)$/i.test(fileName)) return;
  if (/-\d+$/.test(fileName)) return;

  const widths = responsiveWidths(fileName);
  for (const width of widths) {
    const variantPath = `/assets/projects/${slug}/${fileName}-${width}.webp`;
    const diskPath = path.join(publicDir, variantPath.replace(/^\//, ""));
    checkedResponsiveVariants += 1;
    if (!existsSync(diskPath)) {
      failures.push(`${context}: missing responsive variant ${variantPath}`);
    }
  }
}

function checkGeneratedCardVariants(assetPath, context) {
  const responsive = getResponsiveImage(assetPath, "card");
  if (!responsive?.srcSet) return;

  for (const candidate of responsive.srcSet.split(",")) {
    const variantPath = candidate.trim().split(/\s+/)[0];
    if (!variantPath || checkedGeneratedVariants.has(variantPath)) continue;
    checkedGeneratedVariants.add(variantPath);

    const diskPath = path.join(publicDir, variantPath.replace(/^\//, ""));
    if (!existsSync(diskPath)) {
      failures.push(`${context}: card srcSet generates missing ${variantPath}`);
    }
  }
}

function responsiveWidths(fileName) {
  const normalized = fileName.toLowerCase();
  if (normalized === "hero") return [640, 960, 1440];
  if (normalized === "thumbnail") return [480, 768, 960];
  return [480, 960, 1280];
}
