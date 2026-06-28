export function ImagePlaceholder({ label = "Property preview", src, compact = false }) {
  if (src) {
    return <img className="image-cover" src={src} alt={label} loading="lazy" />;
  }
  return (
    <div className={`image-placeholder ${compact ? "compact" : ""}`} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
