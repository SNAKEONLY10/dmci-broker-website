import { useState } from "react";
import { getResponsiveImage } from "../utils/responsiveImages";

export function ImagePlaceholder({ label = "Property preview", src, compact = false, variant = "card" }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    const responsive = getResponsiveImage(src, variant);
    const img = (
      <img
        className={`image-cover image-cover-${variant}`}
        src={src}
        alt={label}
        loading={variant === "hero" ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={variant === "hero" ? "high" : undefined}
        onError={() => setFailed(true)}
      />
    );

    if (responsive) {
      return (
        <picture className={`image-picture image-picture-${variant}`}>
          <source type="image/webp" srcSet={responsive.srcSet} sizes={responsive.sizes} />
          {img}
        </picture>
      );
    }

    return img;
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
