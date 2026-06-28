export function formatLabel(value) {
  return String(value || "")
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

export function unique(items) {
  return [...new Set(items.filter(Boolean))];
}
