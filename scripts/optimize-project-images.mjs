import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "public", "assets", "project-source");
const outputRoot = path.join(root, "public", "assets", "projects");
const sourceExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const roleConfig = {
  "thumbnail": { fallbackWidth: 900, widths: [480, 768, 960], quality: 78 },
  "hero": { fallbackWidth: 1680, widths: [640, 960, 1440], quality: 80 },
  "gallery-1": { fallbackWidth: 1280, widths: [480, 960, 1280], quality: 78 },
  "gallery-2": { fallbackWidth: 1280, widths: [480, 960, 1280], quality: 78 },
  "gallery-3": { fallbackWidth: 1280, widths: [480, 960, 1280], quality: 78 },
  "master-plan": { fallbackWidth: 1280, widths: [480, 960, 1280], quality: 78 },
  "site-progress": { fallbackWidth: 1280, widths: [480, 960, 1280], quality: 78 }
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findSource(slug, role) {
  const folder = path.join(sourceRoot, slug);
  for (const extension of sourceExtensions) {
    const filePath = path.join(folder, `${role}${extension}`);
    if (await exists(filePath)) return filePath;
  }
  return null;
}

async function optimizeRole(slug, role, config) {
  const sourcePath = await findSource(slug, role);
  if (!sourcePath) return null;

  const outputFolder = path.join(outputRoot, slug);
  await fs.mkdir(outputFolder, { recursive: true });

  const fallbackPath = path.join(outputFolder, `${role}.jpg`);
  await sharp(sourcePath)
    .rotate()
    .resize({ width: config.fallbackWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(fallbackPath);

  for (const width of config.widths) {
    await sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: config.quality })
      .toFile(path.join(outputFolder, `${role}-${width}.webp`));
  }

  const sourceStats = await fs.stat(sourcePath);
  const fallbackStats = await fs.stat(fallbackPath);
  return {
    slug,
    role,
    source: path.relative(root, sourcePath),
    fallback: path.relative(root, fallbackPath),
    sourceKb: Math.round(sourceStats.size / 1024),
    fallbackKb: Math.round(fallbackStats.size / 1024)
  };
}

async function main() {
  await fs.mkdir(sourceRoot, { recursive: true });
  await fs.mkdir(outputRoot, { recursive: true });

  const entries = await fs.readdir(sourceRoot, { withFileTypes: true }).catch(() => []);
  const slugs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const results = [];

  for (const slug of slugs) {
    for (const [role, config] of Object.entries(roleConfig)) {
      const result = await optimizeRole(slug, role, config);
      if (result) results.push(result);
    }
  }

  if (!results.length) {
    console.log("No source images found. Add files under public/assets/project-source/[project-slug]/ and run npm run assets:optimize.");
    return;
  }

  console.table(results.map(({ slug, role, sourceKb, fallbackKb }) => ({ slug, role, sourceKb, fallbackKb })));
  console.log(`Optimized ${results.length} project image source files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
