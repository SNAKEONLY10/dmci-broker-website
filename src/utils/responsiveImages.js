const optimizedProjectSlugs = new Set([
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

const widthMap = {
  thumbnail: [480, 768, 960],
  hero: [640, 960, 1440],
  card: [480, 768, 960],
  gallery: [480, 960, 1280],
  masterPlan: [480, 960, 1280],
  siteProgress: [480, 960, 1280]
};

const sizesMap = {
  thumbnail: "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 360px",
  card: "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 360px",
  hero: "(max-width: 760px) 100vw, (max-width: 1100px) 92vw, 720px",
  gallery: "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 380px",
  masterPlan: "(max-width: 760px) 100vw, 520px",
  siteProgress: "(max-width: 760px) 100vw, 520px"
};

export function getResponsiveImage(src, variant = "card") {
  if (!src || typeof src !== "string") return null;

  const match = src.match(/^\/assets\/projects\/([^/]+)\/(.+)\.(jpe?g|png|webp)$/i);
  if (!match) return null;

  const [, slug, fileName] = match;
  if (!optimizedProjectSlugs.has(slug)) return null;
  if (/^(logo|brochure)$/i.test(fileName) || /-\d+$/.test(fileName)) return null;

  const normalizedVariant = normalizeResponsiveVariant(fileName, variant);
  const widths = widthMap[normalizedVariant] || widthMap.gallery;
  const sizes = sizesMap[variant] || sizesMap[normalizedVariant] || sizesMap.gallery;

  return {
    srcSet: widths.map((width) => `/assets/projects/${slug}/${fileName}-${width}.webp ${width}w`).join(", "),
    sizes
  };
}

function normalizeResponsiveVariant(fileName, variant) {
  const normalizedFileName = fileName.toLowerCase();
  if (variant === "card") {
    if (normalizedFileName === "thumbnail") return "thumbnail";
    if (normalizedFileName === "hero") return "hero";
    return "gallery";
  }

  if (variant === "hero" && normalizedFileName !== "hero") {
    return normalizedFileName === "thumbnail" ? "thumbnail" : "gallery";
  }

  return variant;
}
