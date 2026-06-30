const optimizedProjectSlugs = new Set([
  "alea-residences",
  "anissa-heights",
  "brio-tower",
  "bristle-ridge",
  "fortis-residences",
  "kalea-heights",
  "maricielo-villas",
  "moncello-crest",
  "mulberry-place-2",
  "one-delta-terraces",
  "rhapsody-residences",
  "sage-residences",
  "solmera-coast",
  "the-calinea-tower",
  "torre-de-manila",
  "valeron-tower",
  "verdon-parc",
  "willow-park-homes"
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

  const normalizedVariant = variant === "card" ? "thumbnail" : variant;
  const widths = widthMap[normalizedVariant] || widthMap.gallery;
  const sizes = sizesMap[variant] || sizesMap[normalizedVariant] || sizesMap.gallery;

  return {
    srcSet: widths.map((width) => `/assets/projects/${slug}/${fileName}-${width}.webp ${width}w`).join(", "),
    sizes
  };
}
