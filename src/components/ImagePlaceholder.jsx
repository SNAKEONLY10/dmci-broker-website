import { useState } from "react";

export function ImagePlaceholder({ label = "Property preview", src, compact = false, variant = "card" }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return <img className={`image-cover image-cover-${variant}`} src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />;
  }
  return (
    <div className={`image-placeholder image-placeholder-${variant} ${compact ? "compact" : ""}`} aria-label={label}>
      <div className="placeholder-skyline" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span>{label}</span>
      <small>{variant === "hero" ? "Official project visuals coming soon" : "Official gallery coming soon"}</small>
    </div>
  );
}
