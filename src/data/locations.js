export const locations = [
  "Baguio / Benguet",
  "Batangas",
  "Cavite",
  "Cebu",
  "Makati",
  "Mandaluyong",
  "Manila",
  "Paranaque",
  "Pasay",
  "Pasig",
  "Quezon City",
  "Taguig",
  "Other Locations"
].map((name, index) => ({
  id: index + 1,
  name,
  description: `Explore DMCI projects in ${name} and request the latest computation from Luisa.`
}));
