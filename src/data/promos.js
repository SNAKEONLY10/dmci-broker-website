export const promos = [
  {
    id: 1,
    type: "Latest promos",
    title: "Ask for current project promos",
    summary: "Promo details vary per project and must be verified before discussion."
  },
  {
    id: 2,
    type: "Payment term updates",
    title: "Compare available payment terms",
    summary: "Payment terms may change without prior notice and require confirmation."
  },
  {
    id: 3,
    type: "New project launches",
    title: "New launch inquiry assistance",
    summary: "Get guided recommendations when a new project fits your location and budget."
  },
  {
    id: 4,
    type: "RFO availability alerts",
    title: "Ready unit availability check",
    summary: "RFO and re-opened unit availability must be verified before reservation."
  }
];

export const resaleUnits = [
  ["Mulberry Place 2", "Paranaque", "2BR", "For verification", "Possible re-opened units may appear from time to time."],
  ["Brio Tower", "Makati", "1BR", "For verification", "Availability and terms must be checked before discussion."],
  ["Torre de Manila", "Manila", "Studio", "For verification", "Request current details from Luisa before making plans."]
].map(([project, location, unitType, status, notes], id) => ({ id, project, location, unitType, status, notes }));
