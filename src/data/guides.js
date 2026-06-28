export const guideCards = [
  ["How to reserve a unit", "Understand the usual flow from project selection to reservation."],
  ["Requirements checklist", "Prepare IDs, forms, computation sheets, and buyer documents."],
  ["Cash payment process", "Review timelines and payment steps before committing."],
  ["In-house financing", "Compare sample terms after requesting updated computation."],
  ["Bank financing", "Prepare for bank evaluation, approvals, and documentation."],
  ["OFW buyer guide", "Know SPA, document, and remote coordination reminders."],
  ["FAQs", "Answers to common buyer questions before reservation."]
].map(([title, summary], id) => ({ id, title, summary }));

export const buyerGuideSections = [
  {
    title: "Before choosing a project",
    body: "Compare location, unit type, turnover schedule, payment preference, purpose, and budget range before narrowing options."
  },
  {
    title: "How to request computation",
    body: "Submit your preferred project, unit type, buyer profile, and budget range. Updated computation should be confirmed before reservation."
  },
  {
    title: "How to reserve a unit",
    body: "Confirm availability, review requirements, verify payment instructions, and reserve only through official or approved channels."
  },
  {
    title: "Payment options overview",
    body: "Cash, in-house, and bank financing options may vary depending on project, buyer profile, and current terms."
  },
  {
    title: "OFW buyer notes",
    body: "OFW buyers may need additional identification, SPA, proof of income, and remote document coordination."
  }
];
