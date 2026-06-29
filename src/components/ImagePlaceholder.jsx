import { useState } from "react";

export function ImagePlaceholder({ label = "Property preview", src, compact = false }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return <img className="image-cover" src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />;
  }
  return (
    <div className={`image-placeholder ${compact ? "compact" : ""}`} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
