import { useEffect, useState } from "react";
import { getResponsiveImage } from "../utils/responsiveImages";

export function ImagePlaceholder({ label = "Property preview", src, compact = false, variant = "card" }) {
  const [failed, setFailed] = useState(false);
  const revealProps = variant === "hero" ? {} : { "data-reveal": "image" };

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (src && !failed) {
    const responsive = getResponsiveImage(src, variant);
    const img = (
      <img
        className={`image-cover image-cover-${variant}`}
        src={src}
        alt={label}
        loading={variant === "hero" ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={variant === "hero" ? "high" : undefined}
        onLoad={() => setFailed(false)}
        onError={() => setFailed(true)}
        {...(!responsive ? revealProps : {})}
      />
    );

    if (responsive) {
      return (
        <picture className={`image-picture image-picture-${variant}`} {...revealProps}>
          <source type="image/webp" srcSet={responsive.srcSet} sizes={responsive.sizes} />
          {img}
        </picture>
      );
    }

    return img;
  }
  return (
    <div className={`image-placeholder image-placeholder-${variant} ${compact ? "compact" : ""}`} aria-label={label} {...revealProps}>
      <div className="placeholder-skyline" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span>{label}</span>
      <small>{variant === "hero" ? "Official visuals available upon request" : "Approved visual available upon request"}</small>
    </div>
  );
}
