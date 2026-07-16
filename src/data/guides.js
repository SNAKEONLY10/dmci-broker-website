export const guideCards = [
  {
    id: "reservation",
    title: "Reservation process",
    summary: "See the checks to complete before signing forms or paying a reservation fee.",
    to: "/buyers-guide#reservation-process"
  },
  {
    id: "documents",
    title: "Document checklist",
    summary: "Prepare the usual buyer documents for local, overseas, or financing applications.",
    to: "/buyers-guide#documents"
  },
  {
    id: "payment",
    title: "Payment options",
    summary: "Compare cash, bank financing, and in-house financing at a practical level.",
    to: "/buyers-guide#payment-options"
  },
  {
    id: "ofw",
    title: "Overseas buyer planning",
    summary: "Review representative, document, payment, and Philippine-time coordination needs.",
    to: "/buyers-guide#documents"
  },
  {
    id: "shortlist",
    title: "Project comparison",
    summary: "Compare location, unit fit, turnover timing, and total cash requirements.",
    to: "/buyers-guide#compare"
  },
  {
    id: "faq",
    title: "Buyer questions",
    summary: "Get clear answers about prices, availability, viewings, and reservations.",
    to: "/buyers-guide#questions"
  }
];

export const buyerJourneySteps = [
  {
    title: "Define your priorities",
    text: "Set your preferred location, unit size, purpose, budget, and target move-in timeline."
  },
  {
    title: "Build a focused shortlist",
    text: "Compare only the projects that fit your daily needs and financial plan."
  },
  {
    title: "Request current figures",
    text: "Review a unit-specific computation, payment schedule, fees, and available terms."
  },
  {
    title: "Verify the exact unit",
    text: "Confirm availability, floor, orientation, layout, parking needs, and target turnover."
  },
  {
    title: "Use verified reservation instructions",
    text: "Review the forms and DMCI Homes payment instructions with Luisa, then keep the receipt and complete copies."
  }
];

export const buyerDecisionPoints = [
  {
    icon: "map",
    title: "Location and daily fit",
    text: "Consider commute, schools, work, family access, and the community around the project."
  },
  {
    icon: "home",
    title: "Unit and household fit",
    text: "Check usable space, layout, orientation, floor level, parking, and future household needs."
  },
  {
    icon: "calendar",
    title: "Turnover and timing",
    text: "Match the target turnover with your move-in, rental, or investment timeline."
  },
  {
    icon: "wallet",
    title: "Full cash requirement",
    text: "Review the reservation fee, down payment schedule, balance, closing fees, and financing costs."
  }
];

export const documentProfiles = [
  {
    id: "local",
    label: "Local buyer",
    title: "Typical documents for a local buyer",
    intro: "Prepare clear, current copies. The final list depends on the selected unit and payment term.",
    items: [
      "Valid government-issued ID with signature",
      "Tax Identification Number or applicable BIR document",
      "Signed computation and reservation documents",
      "Recent proof of billing or address",
      "Civil-status or co-buyer documents, when applicable"
    ]
  },
  {
    id: "overseas",
    label: "Overseas / OFW",
    title: "Typical documents for an overseas buyer",
    intro: "Confirm early whether a representative or Special Power of Attorney will be needed.",
    items: [
      "Valid passport or government-issued IDs",
      "Tax Identification Number or applicable BIR document",
      "Proof of billing and current overseas contact details",
      "SPA or representative documents, when applicable",
      "Income, employment, or remittance records if financing is requested"
    ]
  },
  {
    id: "financing",
    label: "Financing applicant",
    title: "Typical documents for financing review",
    intro: "Banks and in-house credit teams may request additional documents after evaluation.",
    items: [
      "Valid buyer IDs and Tax Identification Number",
      "Certificate of employment or proof of business",
      "Income tax return or equivalent income records",
      "Bank statements or proof of regular income, when requested",
      "Completed lender forms and property documents"
    ]
  }
];

export const paymentOptions = [
  {
    id: "cash",
    title: "Cash payment",
    bestFor: "Buyers who can settle within the approved cash schedule.",
    review: ["Cash due dates", "Discounts, if currently offered", "Closing and transfer-related fees"],
    confirm: "Ask for the current net computation and exact payment milestones."
  },
  {
    id: "bank",
    title: "Bank financing",
    bestFor: "Buyers who want a longer repayment term through an accredited or preferred bank.",
    review: ["Down payment and loanable balance", "Bank eligibility and interest assumptions", "Appraisal and documentary requirements"],
    confirm: "Loan approval, rates, and monthly amortization come from the bank."
  },
  {
    id: "in-house",
    title: "In-house financing",
    bestFor: "Buyers comparing current DMCI Homes terms available for the selected unit.",
    review: ["Required down payment", "Term and interest assumptions", "Post-dated check or payment requirements"],
    confirm: "Availability and terms vary by project, unit, and buyer evaluation."
  }
];

export const buyerFaqs = [
  {
    question: "Are the prices and promos on the website guaranteed?",
    answer: "No. Published figures are planning references. Luisa will request the current unit-specific price, promo, availability, and payment schedule before you decide."
  },
  {
    question: "Can I reserve before viewing the property?",
    answer: "A viewing is not always required, but you should understand the exact unit, layout, orientation, project status, computation, and reservation terms before paying."
  },
  {
    question: "What should I compare in a computation?",
    answer: "Review the total contract price, discounts, reservation fee, down payment schedule, remaining balance, closing fees, financing assumptions, and due dates."
  },
  {
    question: "Can an overseas buyer complete the process remotely?",
    answer: "Remote coordination may be possible. Document formats, signing, representative authority, and payment instructions must be confirmed for the buyer's specific case."
  },
  {
    question: "Where should I pay a reservation fee?",
    answer: "Use only the payment instructions Luisa confirms for the selected reservation. Check the beneficiary details, then keep the official receipt and submitted forms."
  },
  {
    question: "Does this website replace DMCI Homes Customer Care?",
    answer: "No. This is Maria Luisa Corral's personal broker website for sales and buyer guidance. Luisa can review an existing account, billing, turnover, warranty, or after-sales concern and help route it to the appropriate DMCI Homes team."
  }
];
