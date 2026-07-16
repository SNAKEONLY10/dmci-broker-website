export const promos = [
  {
    id: 1,
    type: "Dated references",
    title: "Review current project terms",
    summary: "See which approved project records include dated down payment or bank-linked references.",
    to: "/promos#current-references",
    cta: "Review References"
  },
  {
    id: 2,
    type: "Unit-specific review",
    title: "Request a complete computation",
    summary: "Compare the contract price, down payment, fees, balance, and due dates for one exact unit.",
    to: "/request-computation",
    cta: "Request Computation"
  },
  {
    id: 3,
    type: "Financing conditions",
    title: "Understand bank-linked offers",
    summary: "Check lender eligibility, approval requirements, and the remaining financing balance before deciding.",
    to: "/promos#program-types",
    cta: "Compare Program Types"
  },
  {
    id: 4,
    type: "RFO and re-opened units",
    title: "Confirm the unit before the offer",
    summary: "A payment term only matters when the preferred unit is still available and eligible.",
    to: "/availability",
    cta: "Check Availability"
  }
];

export const resaleUnits = [
  ["Mulberry Place", "Taguig", "2BR", "For verification", "Possible re-opened units may appear from time to time."],
  ["The Atherton", "Para\u00f1aque", "2BR", "For verification", "Availability and terms must be checked before discussion."],
  ["The Valeron Tower", "Pasig", "1BR", "For verification", "Request current details from Luisa before making plans."]
].map(([project, location, unitType, status, notes], id) => ({ id, project, location, unitType, status, notes }));
