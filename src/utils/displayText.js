export function formatPriceGuide(label) {
  if (!label) return "Request latest computation";

  const cleaned = String(label)
    .replace(/â‚±/g, "PHP")
    .replace(/₱/g, "PHP ")
    .replace(/\s+reference\s+range/gi, "")
    .replace(/\s+guide\s+range/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*/g, " - ")
    .replace(/PHP\s*/gi, "PHP ")
    .trim();

  if (/request latest computation/i.test(cleaned)) return "Request latest computation";
  if (/PHP|\d/.test(cleaned)) return `Guide: ${cleaned}`;
  return cleaned;
}

export function formatInlineGuide(label) {
  return formatPriceGuide(label).replace(/^Guide:\s*/i, "");
}

export function buyerSafePriceNote(note) {
  if (!note) return "Ask Luisa for updated pricing and availability.";
  return "For buyer guidance only. Confirm the latest pricing, promos, terms, and availability with Luisa.";
}
