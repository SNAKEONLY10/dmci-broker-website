export const locations = [
  "Quezon City",
  "Pasig",
  "Mandaluyong",
  "Taguig",
  "Pasay",
  "Manila",
  "Para\u00f1aque",
  "Las Pi\u00f1as",
  "Baguio City / Benguet",
  "San Juan Batangas"
].map((name, index) => ({
  id: index + 1,
  name,
  description: `Explore DMCI projects in ${name} and request the latest computation from Luisa.`
}));
