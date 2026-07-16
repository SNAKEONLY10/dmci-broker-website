const pricingDisclaimer =
  "Prices, promos, availability, payment terms, unit details, turnover schedules, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.";

const metroAsset = (slug, file) => `/assets/projects/${slug}/${file}`;

const commonReservationRequirements = [
  "Online Client Registration",
  "Valid government-issued IDs",
  "Philippine TIN Number",
  "Online Reservation Agreement Form",
  "Reservation Fee: PHP 30,000 for the unit",
  "Parking Reservation Fee: PHP 10,000, if applicable",
  "Proof of Billing Address after reservation",
  "Preferred mode of payment for down payment",
  "PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks",
  "International bills payment or remittance options subject to confirmation"
];

const unitHoldingNotes = [
  "Philippine-based clients can hold units for 24 hours.",
  "International clients can hold units for 72 hours.",
  "Holding is not a reservation and must be confirmed through the current official process."
];

const bankList = [
  "Bank of Commerce",
  "BDO",
  "BPI",
  "Chinabank",
  "EastWest Bank",
  "Metrobank",
  "PNB",
  "Robinsons Bank",
  "Security Bank",
  "UnionBank"
];

export const theCamdenPlaceDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "The Camden Place DMCI Manila",
  heroHeadline: "The Camden Place by DMCI Homes",
  tagline: "Modern contemporary city living on Dominga Street in Malate, Manila",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: metroAsset("the-camden-place", "logo.png"),
  image: metroAsset("the-camden-place", "hero.jpg"),
  thumbnail: metroAsset("the-camden-place", "thumbnail.jpg"),
  masterPlanImage: metroAsset("the-camden-place", "master-plan.jpg"),
  siteProgressImage: metroAsset("the-camden-place", "site-progress.jpg"),
  gallery: [
    metroAsset("the-camden-place", "gallery-1.jpg"),
    metroAsset("the-camden-place", "gallery-2.jpg"),
    metroAsset("the-camden-place", "gallery-3.jpg"),
    metroAsset("the-camden-place", "location-map.jpg"),
    metroAsset("the-camden-place", "master-plan.jpg"),
    metroAsset("the-camden-place", "sky-deck-pool.jpg"),
    metroAsset("the-camden-place", "sky-deck.jpg"),
    metroAsset("the-camden-place", "sky-promenade.jpg"),
    metroAsset("the-camden-place", "rfid-access.jpg"),
    metroAsset("the-camden-place", "open-lounge.jpg"),
    metroAsset("the-camden-place", "lobby.jpg"),
    metroAsset("the-camden-place", "ground-lounge.jpg"),
    metroAsset("the-camden-place", "game-room.jpg"),
    metroAsset("the-camden-place", "elevators.jpg")
  ],
  galleryLabels: [
    "The Camden Place Sky Deck Pool",
    "The Camden Place Sky Deck",
    "The Camden Place Lounge",
    "The Camden Place Location Map",
    "The Camden Place Site Development Visual",
    "The Camden Place Rooftop Pool",
    "The Camden Place Sky Lounge",
    "The Camden Place Sky Promenade",
    "The Camden Place RFID Access",
    "The Camden Place Open Lounge",
    "The Camden Place Reception Lobby",
    "The Camden Place Ground Floor Lounge",
    "The Camden Place Game Area",
    "The Camden Place Elevator Lobby"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "2025",
  targetRfo: "March 2025",
  unitTypes: ["Studio", "1BR", "2BR"],
  landArea: "2,382 sqm",
  address: "Dominga Street, Malate, Manila",
  developmentType: "One-Tower High-Rise Condominium",
  propertyType: "High-Rise Condominium",
  architecturalTheme: "Modern Contemporary",
  priceRangeLabel: "Studio from 5.2M to 5.7M; 1BR and 2BR sold out / waitlist",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "The Camden Place by DMCI Homes is a one-tower modern contemporary condominium on Dominga Street in Malate, Manila. The project is positioned for buyers who want a compact city address near De La Salle University, College of St. Benilde, LRT Vito Cruz, Roxas Boulevard, Makati, and Bay Area routes.",
  introParagraphs: [
    "The Camden Place brings DMCI's high-rise living format into a compact Manila setting with a 27-residential-floor tower, rooftop lifestyle spaces, studio-to-two-bedroom unit references, and city conveniences within short travel distance.",
    "Current guide materials show studio inventory as the active reference, while 1BR and 2BR cuts are marked sold out and should be handled through waitlist or reopening checks with Luisa."
  ],
  highlights: [
    "One-tower high-rise condominium with 756 units and 196 parking slots",
    "Studio, 1BR, and 2BR unit mix with March 2025 turnover reference",
    "Near LRT Vito Cruz, De La Salle schools, University Mall, Robinsons Manila, Roxas Boulevard, Makati CBD, and Bay Area"
  ],
  whyInvest: [
    "Malate location gives quick access to schools, transport, malls, hospitals, and business districts that matter for students, professionals, and rental-driven buyers.",
    "Compact unit cuts and rent-to-own guide references make it suitable for investors looking for manageable city inventory, subject to final availability.",
    "Amenity program includes rooftop pool, sky deck, sky lounge, game area, lounges, co-working, convenience facilities, and managed building services.",
    "Review the project visuals, AVP, map, unit layouts, and payment examples in one place."
  ],
  projectFacts: [
    { label: "Location", value: "Dominga Street, Malate, Manila" },
    { label: "Lot Area", value: "2,382 sqm" },
    { label: "Development Type", value: "One-tower high-rise condominium" },
    { label: "Floors", value: "27 residential floors" },
    { label: "Units / Parking", value: "756 units / 196 parking slots" },
    { label: "Unit Mix", value: "Studio, 1BR, and 2BR" },
    { label: "Architectural Theme", value: "Modern Contemporary" },
    { label: "Turnover Date", value: "March 2025" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "24.00 - 26.00 sqm", range: "5.2M - 5.7M", monthlyDp: "5% DP: 19.1k - 21.2k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" },
    { type: "2BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" }
  ],
  summaryPricingNote:
    "Use these ranges only for shortlisting. Ask Luisa for current availability and a unit-specific computation before deciding or reserving.",
  locationDetails: {
    title: "Prime Location of The Camden Place",
    text:
      "The Camden Place is located on Dominga Street in Malate, Manila, close to De La Salle schools, LRT Vito Cruz, University Mall, Robinsons Place Manila, Roxas Boulevard, Makati CBD, and Bay Area routes.",
    exactAddress: "Dominga Street, Malate, Manila",
    image: metroAsset("the-camden-place", "location-map.jpg"),
    imageLabel: "The Camden Place location map",
    note: "Travel times and distances are reference points only and should be checked with live traffic before site viewing.",
    mapTitle: "The Camden Place on Google Maps",
    mapText: "Open Google Maps for live routes to The Camden Place in Malate, Manila.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.65688281535!2d120.99486561404646!3d14.561603489827304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a28af8ff7%3A0xcdd2ecbeae448c1e!2sThe%20Camden%20Place!5e0!3m2!1sen!2sph!4v1606455279946!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Business Districts", items: ["Roxas Boulevard - 1.9 km", "Makati CBD - 3.8 km", "Bay Area - 4.6 km"] },
    { group: "Malls and Retail", items: ["University Mall - 450 m", "Cash & Carry - 1.8 km", "SM Hypermarket Makati - 2.0 km", "Robinsons Place Manila - 2.3 km", "Mall of Asia - 4.8 km"] },
    { group: "Schools", items: ["DLS-CSB School of Design - 270 m", "St. Scholastica's College - 300 m", "DLS-CSB Manila - 400 m", "De La Salle University Manila - 500 m", "Arellano University School of Law - 650 m", "UP Manila - 2.5 km"] },
    { group: "Hospitals and Transport", items: ["Adventist Medical Center - 1.2 km", "St. Clare's Medical Center - 1.4 km", "Ospital ng Maynila - 1.8 km", "Philippine General Hospital - 2.4 km", "LRT Line 1 Vito Cruz Station - 400 m", "Major bus terminals - about 900 m to 1.1 km"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of The Camden Place",
    paragraphs: [
      "The Camden Place is planned as a one-tower high-rise development with amenities arranged for compact urban living.",
      "The project visuals highlight a rooftop pool and leisure deck, sky lounge areas, ground-floor lounges, and practical building services for residents."
    ],
    keyStats: [
      { label: "Tower", value: "1 high-rise tower" },
      { label: "Floors", value: "27 residential floors" },
      { label: "Units", value: "756 units" },
      { label: "Parking", value: "196 parking slots" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official embedded AVP as a guided visual introduction to The Camden Place." },
    { title: "Project Visuals", text: "Review the location, amenities, site development plan, and floor plans in one place." }
  ],
  videoTourTitle: "Audio Visual Presentation",
  videoTourCopy: "Watch the official The Camden Place AVP preview, then request the latest approved presentation and computation from Luisa.",
  videoTourImage: metroAsset("the-camden-place", "gallery-1.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=C4M2T9cc5tI",
  videoTourEmbedUrl: "https://www.youtube.com/embed/C4M2T9cc5tI",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=C4M2T9cc5tI", variant: "secondary" }
  ],
  videoTourNote: "Choose Play when you are ready to view the project presentation.",
  amenityGroups: [
    { group: "Roof Deck and Leisure", items: ["Sky Deck Pool", "Sky Lounge", "Sky Promenade", "Rooftop leisure deck"] },
    { group: "Indoor Lifestyle", items: ["Entertainment Room", "Game Area", "Fitness Gym", "Open Lounge", "Ground Floor Lounge", "Snack Bar"] },
    { group: "Convenience", items: ["Co-working Space", "Convenience Store", "Water Station", "Card-operated Laundry", "High-speed internet in common areas"] },
    { group: "Building and PMO Services", items: ["Pedestrian RFID proximity access", "Guarded gate and entrance", "24-hour roving personnel", "Taxi call-in service", "Utilities application and payment assistance"] }
  ],
  amenityNote: "Ask Luisa to confirm current amenity operations, schedules, and access rules.",
  unitIntro:
    "The Camden Place offers studio, 1BR, and 2BR layout references. Studios are currently shown in the guide inventory, while 1BR and 2BR are marked sold out subject to re-opening or waitlist confirmation.",
  unitSections: [
    { title: "Studio Units", description: "Compact city layouts for singles, couples, students, and investors who want a Malate address.", layouts: ["24.00 sqm", "25.00 sqm", "26.00 sqm"], rows: [
      { layout: "Studio", floorArea: "24.00 sqm", priceRange: "5.2M - 5.3M", status: "Few left", monthlyDp: "19.1k - 19.4k /mo" },
      { layout: "Studio", floorArea: "25.00 sqm", priceRange: "5.4M - 5.5M", status: "Available", monthlyDp: "19.9k - 20.4k /mo" },
      { layout: "Studio", floorArea: "26.00 sqm", priceRange: "5.6M - 5.7M", status: "Limited", monthlyDp: "20.9k - 21.2k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "One-bedroom references are currently marked sold out.", layouts: ["1BR A", "1BR B", "1BR C"], rows: [
      { layout: "1BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom references are currently marked sold out.", layouts: ["2BR A", "2BR B"], rows: [
      { layout: "2BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "The Camden Place Floor Plans",
  floorPlansDescription: "Use these layouts for shortlisting, then ask Luisa for the current sheet for the exact unit.",
  floorPlans: [
    { title: "Studio Layout A", text: "Studio unit layout reference.", src: metroAsset("the-camden-place", "floorplan-studio-a.jpg") },
    { title: "Studio Layout B", text: "Studio unit layout reference.", src: metroAsset("the-camden-place", "floorplan-studio-b.jpg") },
    { title: "Studio Layout C", text: "Studio unit layout reference.", src: metroAsset("the-camden-place", "floorplan-studio-c.jpg") },
    { title: "Studio Layout D", text: "Studio unit layout reference.", src: metroAsset("the-camden-place", "floorplan-studio-d.jpg") },
    { title: "1BR Layout A", text: "One-bedroom layout reference for waitlist/reopening checks.", src: metroAsset("the-camden-place", "floorplan-1br-a.jpg") },
    { title: "1BR Layout B", text: "One-bedroom layout reference for waitlist/reopening checks.", src: metroAsset("the-camden-place", "floorplan-1br-b.jpg") },
    { title: "1BR Layout C", text: "One-bedroom layout reference for waitlist/reopening checks.", src: metroAsset("the-camden-place", "floorplan-1br-c.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: metroAsset("the-camden-place", "floorplan-2br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: metroAsset("the-camden-place", "floorplan-2br-b.jpg") },
    { title: "Camden Building Floor Plan", text: "Building floor plan reference.", src: metroAsset("the-camden-place", "floorplan-building.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The current references include a 5% Chinabank-linked option and a 12% down payment option. Ask Luisa to confirm promo eligibility, inventory, and financing approval.",
    sampleComputation: [
      { label: "Sample Unit", value: "C-Camden 1702" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "24.00 sqm" },
      { label: "List Price", value: "5,179,500.00" },
      { label: "RFO Date", value: "Mar-2025" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 62,177.08 monthly" },
      { label: "15 years", value: "7.0% rate / 48,133.02 monthly" },
      { label: "20 years", value: "7.0% rate / 41,517.92 monthly" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "5,075,910.00" },
      { label: "Closing Fee", value: "10.5% / 532,970.55" },
      { label: "Total with Closing Fee", value: "5,608,880.55" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 253,795.50" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "223,795.50" },
      { label: "Monthly DP", value: "12 months / 18,649.63 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 4,822,114.50" },
      { label: "Closing Fee", value: "532,970.55" },
      { label: "Total Balance + Closing Fee", value: "5,355,085.05" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and availability can change without prior notice.", `Accredited banks include ${bankList.join(", ")} and others subject to confirmation.`],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "Down payment over 40 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "Studio", size: "24.00 sqm", price: "5,241,500", rfo: "Mar-2025", note: "Rent-to-Own PHP 20,000 / mo" },
      { type: "Studio", size: "25.00 sqm", price: "5,373,900", rfo: "Mar-2025", note: "Rent-to-Own PHP 20,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for The Camden Place",
    text: "The Camden Place uses a unit holding portal so prospective buyers can register, review current inventory, and temporarily hold a selected unit before final reservation.",
    steps: ["Register online", "Review current availability and computation", "Temporarily hold a selected unit", "Proceed after Luisa confirms the reservation requirements"],
    notes: unitHoldingNotes
  },
  reservationRequirements: [
    ...commonReservationRequirements,
    "Signed computation sheet",
    "Marriage Certificate, if applicable"
  ],
  reservationNote: "Ask Luisa to confirm the computation, remaining studio inventory, 1BR/2BR waitlist status, payment method, promo coverage, and reservation requirements."
};

export const theAstonPlaceDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "The Aston Place DMCI Pasay",
  heroHeadline: "The Aston Place by DMCI Homes",
  tagline: "Sophisticated RFO city living on Dominga Street in Pasay",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: metroAsset("the-aston-place", "logo.png"),
  image: metroAsset("the-aston-place", "hero.jpg"),
  thumbnail: metroAsset("the-aston-place", "thumbnail.jpg"),
  masterPlanImage: metroAsset("the-aston-place", "master-plan.jpg"),
  siteProgressImage: metroAsset("the-aston-place", "site-progress.jpg"),
  gallery: [
    metroAsset("the-aston-place", "gallery-1.jpg"),
    metroAsset("the-aston-place", "gallery-2.jpg"),
    metroAsset("the-aston-place", "gallery-3.jpg"),
    metroAsset("the-aston-place", "location-map.jpg"),
    metroAsset("the-aston-place", "master-plan.jpg"),
    metroAsset("the-aston-place", "kiddie-pool.jpg"),
    metroAsset("the-aston-place", "sky-promenade.jpg"),
    metroAsset("the-aston-place", "landscaped-atrium.jpg"),
    metroAsset("the-aston-place", "drop-off.jpg"),
    metroAsset("the-aston-place", "amenity-core.jpg"),
    metroAsset("the-aston-place", "sky-patio.jpg"),
    metroAsset("the-aston-place", "lounge-area.jpg"),
    metroAsset("the-aston-place", "leisure-pool.jpg"),
    metroAsset("the-aston-place", "lap-pool.jpg")
  ],
  galleryLabels: [
    "The Aston Place Leisure Pool",
    "The Aston Place Amenity Core",
    "The Aston Place Landscaped Atrium",
    "The Aston Place Location Map",
    "The Aston Place Site Development Plan",
    "The Aston Place Kiddie Pool",
    "The Aston Place Sky Promenade",
    "The Aston Place Landscaped Atrium",
    "The Aston Place Drop-off Area",
    "The Aston Place Amenity Area",
    "The Aston Place Sky Patio",
    "The Aston Place Lounge Area",
    "The Aston Place Leisure Pool",
    "The Aston Place Lap Pool"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready",
  targetRfo: "Staged turnover from March 2024 to July 2025",
  unitTypes: ["1BR", "2BR", "3BR"],
  landArea: "5,993 sqm",
  address: "Brgy. 45, Dominga Street, Pasay City",
  developmentType: "High-Rise Condominium",
  propertyType: "High-Rise Condominium",
  architecturalTheme: "Modern",
  priceRangeLabel: "1BR from 8.1M; 2BR and 3BR sold out / waitlist",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "The Aston Place by DMCI Homes is a high-rise residential condominium on Dominga Street in Pasay City. It is positioned for buyers who want an RFO/staged-turnover address near LRT Gil Puyat, De La Salle and Benilde campuses, Makati CBD, MOA, Bay City, and key medical institutions.",
  introParagraphs: [
    "The Aston Place features one high-rise building with 45 floors, 38 residential floors, six podium floors, six elevators, and 1,292 unit references.",
    "Current guide material shows limited 1BR inventory, while 2BR and 3BR units are marked sold out and should be handled through waitlist or reopening checks."
  ],
  highlights: [
    "45-floor high-rise with 38 residential floors and six podium floors",
    "1,292 units and 570 parking slots reference",
    "Near LRT Gil Puyat, DLSU/CSB, University Mall, Cash & Carry, MOA, Makati CBD, and Bay City"
  ],
  whyInvest: [
    "RFO/staged-turnover Pasay option with quick access to Manila, Makati, Bay City, MOA, transport terminals, schools, and hospitals.",
    "Limited guide inventory focuses on 1BR units, useful for investors and end-users who want a move-in-timed city address.",
    "Amenity plan includes lap pool, leisure pool, kiddie pool, landscaped atrium, sky promenade, fitness gym, entertainment room, snack bar, and reception lounge.",
    "Project visuals and the location map are available here. Ask Luisa for the latest Aston Place video presentation if you would like one."
  ],
  projectFacts: [
    { label: "Location", value: "Brgy. 45, Dominga Street, Pasay City" },
    { label: "Lot Area", value: "5,993 sqm" },
    { label: "Development Type", value: "High-rise condominium" },
    { label: "Buildings / Elevators", value: "1 building / 6 elevators" },
    { label: "Floors", value: "45 floors, 38 residential floors, 6 podium floors" },
    { label: "Units / Parking", value: "1,292 units / 570 parking slots" },
    { label: "Unit Mix", value: "1BR, 2BR, and 3BR" },
    { label: "Turnover", value: "March 2024 to July 2025 by floor level" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "41.50 sqm", range: "8.1M", monthlyDp: "5% DP: 31.2k /mo", status: "Few left", note: "Reference only" },
    { type: "2BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" },
    { type: "3BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" }
  ],
  summaryPricingNote:
    "Ask Luisa for current remaining inventory and a unit-specific computation. A sold-out unit type may return if inventory reopens.",
  locationDetails: {
    title: "Prime Location of The Aston Place",
    text:
      "The Aston Place is located on Dominga Street in Pasay City, giving residents access to LRT Gil Puyat, Vito Cruz, DLSU/Benilde, Makati CBD, Bay City, MOA, and everyday retail routes.",
    exactAddress: "Brgy. 45, Dominga Street, Pasay City",
    image: metroAsset("the-aston-place", "location-map.jpg"),
    imageLabel: "The Aston Place location map",
    note: "Travel times are reference only and should be checked with live traffic before site viewing.",
    mapTitle: "The Aston Place on Google Maps",
    mapText: "Open Google Maps for live routes to The Aston Place in Pasay.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The%20Aston%20Place%20Dominga%20Street%20Pasay",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Aston%20Place%20Dominga%20Street%20Pasay",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.716708564559!2d120.99833949472877!3d14.558186007121835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a9aa46b3f%3A0x17eafb9720942b59!2sAston+Residences!5e0!3m2!1sen!2sph!4v1536517359082"
  },
  nearbyDestinations: [
    { group: "Business and Commercial Hubs", items: ["University Mall - 0.8 km / 9 mins", "Cash and Carry - 1.3 km / 11 mins", "Robinsons Manila - 2.9 km / 25 mins", "SM Mall of Asia - 4.1 km / 14 mins"] },
    { group: "Schools", items: ["DLS-CSB School of Design and Arts - 0.65 km / 5 mins", "Arellano University College of Law - 0.65 km / 8 mins", "St. Scholastica's College - 0.7 km / 5 mins", "DLS-CSB Main Campus - 0.85 km / 10 mins", "De La Salle University - 1.0 km / 13 mins"] },
    { group: "Medical Institutions", items: ["Adventist Medical Center - 0.65 km / 7 mins", "St. Clare's Medical Center - 1.0 km / 7 mins", "Ospital ng Maynila - 2.1 km / 14 mins", "Makati Medical Center - 2.2 km / 16 mins", "Manila Doctors Hospital - 3.4 km / 18 mins"] },
    { group: "Transport and Districts", items: ["LRT Line 1 Gil Puyat Station - 0.5 km / 6 mins", "BBL Bus Terminal - 0.6 km / 7 mins", "Roxas Boulevard - 1.9 km / 9 mins", "Makati CBD - 2.6 km / 18 mins", "Bay City - 3.5 km / 12 mins"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of The Aston Place",
    paragraphs: [
      "The Aston Place is planned around a single high-rise tower with podium parking and a dedicated amenity level.",
      "The site development visual highlights the lap pool, kiddie pool, pool deck, sky promenade, landscaped atrium, entrance drop-off, and shared leisure areas."
    ],
    keyStats: [
      { label: "Tower", value: "1 high-rise building" },
      { label: "Floors", value: "45 floors" },
      { label: "Residential Floors", value: "38 floors" },
      { label: "Parking", value: "570 parking slots" }
    ]
  },
  viewHighlights: [
    { title: "Project Visuals", text: "Review the renderings, site plan, amenity images, and layout references in one place." },
    { title: "Video Presentation", text: "Ask Luisa for the latest Aston Place AVP or guided walkthrough link when you want a video review." }
  ],
  videoTourTitle: "Approved Visual Presentation on Request",
  videoTourCopy: "Review the project visuals here, then ask Luisa for the latest Aston Place AVP or walkthrough link if you would like a video presentation.",
  videoTourImage: metroAsset("the-aston-place", "amenity-core.jpg"),
  videoTourUrl: "",
  videoTourLinks: [],
  videoTourNote: "A random third-party walkthrough was intentionally not embedded as an official AVP.",
  amenityGroups: [
    { group: "Outdoor Amenities", items: ["Pool Deck", "Lap Pool", "Kiddie Pool", "Leisure Pool", "Outdoor Fitness Area", "Children's Play Area", "Sky Promenade", "Landscaped Atrium"] },
    { group: "Indoor Amenities", items: ["Fitness Gym", "Entertainment Room", "Reception Lounge", "Snack Bar", "Lounge Area"] },
    { group: "Convenience and Building Services", items: ["Convenience Store", "Laundry Station", "Water Refilling Station", "Provision for CCTV in strategic areas", "24-hour security"] }
  ],
  amenityNote: "Ask Luisa to confirm current amenity availability, operations, and access rules.",
  unitIntro:
    "The Aston Place offers 1BR, 2BR, and 3BR references. Current guide inventory shows limited 1BR options, while 2BR and 3BR are marked sold out.",
  unitSections: [
    { title: "1 Bedroom Units", description: "One-bedroom guide references for buyers looking for a Pasay RFO/staged-turnover option.", layouts: ["1BR A", "1BR B", "1BR C"], rows: [
      { layout: "1BR", floorArea: "41.50 sqm", priceRange: "8.1M", status: "Few left", monthlyDp: "31.2k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom references are currently marked sold out.", layouts: ["2BR D", "2BR E", "2BR F", "2BR G", "2BR H", "2BR I"], rows: [
      { layout: "2BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] },
    { title: "3 Bedroom Units", description: "Three-bedroom references are currently marked sold out.", layouts: ["3BR J"], rows: [
      { layout: "3BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "The Aston Place Floor Plans",
  floorPlansDescription: "Use these layouts for shortlisting, then ask Luisa for the current sheet for the exact unit.",
  floorPlans: [
    { title: "1BR Layout A", text: "One-bedroom layout reference.", src: metroAsset("the-aston-place", "floorplan-1br-a.jpg") },
    { title: "1BR Layout B", text: "One-bedroom layout reference.", src: metroAsset("the-aston-place", "floorplan-1br-b.jpg") },
    { title: "1BR Layout C", text: "One-bedroom layout reference.", src: metroAsset("the-aston-place", "floorplan-1br-c.jpg") },
    { title: "2BR Layout D", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-d.jpg") },
    { title: "2BR Layout E", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-e.jpg") },
    { title: "2BR Layout F", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-f.jpg") },
    { title: "2BR Layout G", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-g.jpg") },
    { title: "2BR Layout H", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-h.jpg") },
    { title: "2BR Layout I", text: "Two-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-2br-i.jpg") },
    { title: "3BR Layout J", text: "Three-bedroom layout reference for waitlist checks.", src: metroAsset("the-aston-place", "floorplan-3br-j.jpg") },
    { title: "Standard Floor Reference", text: "Building floor plan reference.", src: metroAsset("the-aston-place", "floorplan-building-standard.jpg") },
    { title: "High Floor Reference", text: "Building high-floor reference.", src: metroAsset("the-aston-place", "floorplan-building-high.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The current references include a 5% Chinabank-linked option and a 12% down payment option. Ask Luisa to confirm promo eligibility, inventory, and financing approval.",
    rfoSchedule: [
      { label: "39th to PH Floor", value: "March 2024" },
      { label: "29th to 38th Floor", value: "July 2024" },
      { label: "19th to 28th Floor", value: "November 2024" },
      { label: "14th to 18th Floor", value: "March 2025" },
      { label: "8th to 12th Floor", value: "July 2025" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Aston 824" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "41.50 sqm" },
      { label: "List Price", value: "8,093,000.00" },
      { label: "RFO Date", value: "Jul-2025" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 97,152.06 monthly" },
      { label: "15 years", value: "7.0% rate / 75,208.13 monthly" },
      { label: "20 years", value: "7.0% rate / 64,872.00 monthly" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "7,931,140.00" },
      { label: "Closing Fee", value: "10.5% / 832,769.70" },
      { label: "Total with Closing Fee", value: "8,763,909.70" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 396,557.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "366,557.00" },
      { label: "Monthly DP", value: "12 months / 30,546.42 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 7,534,583.00" },
      { label: "Closing Fee", value: "832,769.70" },
      { label: "Total Balance + Closing Fee", value: "8,367,352.70" }
    ],
    importantNotes: ["Sample computation only", "Promo terms and availability can change.", "Ask Luisa to confirm the rent-to-own or bank financing details for the selected unit."],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "Down payment over 40 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "41.50 sqm", price: "8,093,000", rfo: "Jul-2025", note: "Rent-to-Own PHP 28,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for The Aston Place",
    text: "The Aston Place uses a unit holding portal so prospective buyers can register, review current inventory, and temporarily hold a selected unit before final reservation.",
    steps: ["Register online", "Review current availability and computation", "Temporarily hold a selected unit", "Proceed after Luisa confirms the reservation requirements"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Ask Luisa to confirm the computation, remaining 1BR inventory, 2BR/3BR waitlist status, rent-to-own terms, payment method, promo coverage, and reservation requirements."
};

export const sonoraGardenResidencesDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Sonora Garden Residences Las Pinas",
  heroHeadline: "Sonora Garden Residences by DMCI Homes",
  tagline: "Resort-inspired Las Pinas living along Alabang-Zapote Road",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: metroAsset("sonora-garden-residences", "logo.png"),
  image: metroAsset("sonora-garden-residences", "hero.jpg"),
  thumbnail: metroAsset("sonora-garden-residences", "thumbnail.jpg"),
  masterPlanImage: metroAsset("sonora-garden-residences", "master-plan.jpg"),
  siteProgressImage: metroAsset("sonora-garden-residences", "site-progress.jpg"),
  gallery: [
    metroAsset("sonora-garden-residences", "gallery-1.jpg"),
    metroAsset("sonora-garden-residences", "gallery-2.jpg"),
    metroAsset("sonora-garden-residences", "gallery-3.jpg"),
    metroAsset("sonora-garden-residences", "location-map.jpg"),
    metroAsset("sonora-garden-residences", "master-plan.jpg"),
    metroAsset("sonora-garden-residences", "development-plan.jpg"),
    metroAsset("sonora-garden-residences", "lap-pool.jpg"),
    metroAsset("sonora-garden-residences", "kiddie-pool.jpg"),
    metroAsset("sonora-garden-residences", "lounge-pool.jpg"),
    metroAsset("sonora-garden-residences", "walkway.jpg"),
    metroAsset("sonora-garden-residences", "garden.jpg"),
    metroAsset("sonora-garden-residences", "playground.jpg"),
    metroAsset("sonora-garden-residences", "basketball-court.jpg"),
    metroAsset("sonora-garden-residences", "lobby.jpg"),
    metroAsset("sonora-garden-residences", "lounge.jpg"),
    metroAsset("sonora-garden-residences", "snack-bar.jpg"),
    metroAsset("sonora-garden-residences", "lumiventt.jpg"),
    metroAsset("sonora-garden-residences", "sky-deck.jpg"),
    metroAsset("sonora-garden-residences", "sky-lounge.jpg")
  ],
  galleryLabels: [
    "Sonora Garden Residences Lap Pool",
    "Sonora Garden Residences Garden",
    "Sonora Garden Residences Sky Lounge",
    "Sonora Garden Residences Location Map",
    "Sonora Garden Residences Site Development Plan",
    "Sonora Garden Residences Development Plan",
    "Sonora Garden Residences Lap Pool",
    "Sonora Garden Residences Kiddie Pool",
    "Sonora Garden Residences Lounge Pool",
    "Sonora Garden Residences Walkway",
    "Sonora Garden Residences Garden",
    "Sonora Garden Residences Playground",
    "Sonora Garden Residences Basketball Court",
    "Sonora Garden Residences Lobby",
    "Sonora Garden Residences Lounge",
    "Sonora Garden Residences Snack Bar",
    "Sonora Garden Residences Lumiventt",
    "Sonora Garden Residences Sky Deck",
    "Sonora Garden Residences Sky Lounge"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready",
  targetRfo: "Cadence June 2024; Liran and Stellan for confirmation",
  unitTypes: ["1BR", "2BR", "3BR", "Tandem"],
  landArea: "14,492 sqm",
  address: "Alabang-Zapote Road, Talon Uno, Las Pinas",
  developmentType: "High-Rise Condominium",
  propertyType: "High-Rise Condominium",
  architecturalTheme: "Modern Contemporary",
  priceRangeLabel: "1BR from 4.6M, 2BR from 7.0M, 3BR from 9.5M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Sonora Garden Residences is a DMCI Homes and Robinsons Land joint-venture condominium community along Alabang-Zapote Road in Las Pinas. It features Cadence, Liran, and Stellan buildings, resort-inspired amenities, and unit references from 1BR to 3BR plus tandem layouts.",
  introParagraphs: [
    "Sonora Garden Residences gives buyers a southern Metro Manila address near SM Southmall, Alabang Town Center, schools, hospitals, and Alabang-Zapote Road access.",
    "The development combines three buildings, landscaped open spaces, pools, activity areas, and Lumiventt-inspired planning for residents who want a calmer residential setting within city reach."
  ],
  highlights: [
    "3 buildings: Cadence, Liran, and Stellan",
    "1,949 units with 1BR, 2BR, 3BR, and tandem references",
    "Project AVP, location map, and virtual community tour available"
  ],
  whyInvest: [
    "Southern Metro Manila location along Alabang-Zapote Road near SM Southmall, Alabang Town Center, schools, hospitals, and daily retail routes.",
    "Resort-inspired amenities include lap pool, kiddie pool, lounge pool, covered multipurpose court, jogging path, play areas, sky lounge, function hall, and landscaped gardens.",
    "Unit mix gives options for end-use, growing families, and investment buyers, from 1BR to larger tandem references.",
    "Review the project visuals, AVP, location map, and virtual community tour in one place."
  ],
  projectFacts: [
    { label: "Location", value: "Alabang-Zapote Road, Talon Uno, Las Pinas" },
    { label: "Lot Area", value: "14,492 sqm" },
    { label: "Development Type", value: "High-rise condominium" },
    { label: "Buildings", value: "Cadence, Liran, and Stellan" },
    { label: "Floors", value: "Cadence: 40 storeys; Liran: 41 storeys; Stellan: 15 storeys" },
    { label: "Units", value: "1,949 units" },
    { label: "Unit Mix", value: "1BR, 2BR, 3BR, and tandem references" },
    { label: "Turnover", value: "Cadence June 2024; Liran and Stellan TBA / for confirmation" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "28.00 sqm", range: "4.6M - 5.2M", monthlyDp: "5% DP: 16.5k - 19.2k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "56.00 - 58.50 sqm", range: "7.0M - 8.0M", monthlyDp: "5% DP: 26.6k - 30.9k /mo", status: "Available", note: "Reference only" },
    { type: "3BR", floorArea: "81.50 sqm", range: "9.5M - 10.6M", monthlyDp: "5% DP: 37.0k - 41.7k /mo", status: "Few left", note: "Reference only" }
  ],
  summaryPricingNote:
    "Use these ranges only for shortlisting. Ask Luisa for remaining inventory, current rent-to-own details, and a unit-specific computation.",
  locationDetails: {
    title: "Prime Location of Sonora Garden Residences",
    text:
      "Sonora Garden Residences is located along Alabang-Zapote Road in Talon Uno, Las Pinas, near SM Southmall, SM Center Las Pinas, Starmall Las Pinas, Madrigal Business Park, Alabang Town Center, schools, and medical institutions.",
    exactAddress: "Alabang-Zapote Road, Talon Uno, Las Pinas",
    image: metroAsset("sonora-garden-residences", "location-map.jpg"),
    imageLabel: "Sonora Garden Residences location map",
    note: "Travel times are reference only and should be checked with live traffic before site viewing.",
    mapTitle: "Sonora Garden Residences on Google Maps",
    mapText: "Open Google Maps for live routes to Sonora Garden Residences in Las Pinas.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sonora%20Garden%20Residences%20Alabang-Zapote%20Road%20Talon%20Uno%20Las%20Pinas",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sonora%20Garden%20Residences%20Las%20Pinas",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6910089054645!2d120.99686001383799!3d14.444962389901699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf42c0172695%3A0xf48e38a4a6f17a60!2sSonora%20Garden%20Residences!5e0!3m2!1sen!2sph!4v1575636446201!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Business and Commercial Hubs", items: ["SM Southmall - 1.85 km", "SM Center Las Pinas - 2.0 km", "Starmall Las Pinas - 2.27 km", "Madrigal Business Park - 3.44 km", "Alabang Town Center - 4.09 km"] },
    { group: "Schools", items: ["Southville International School and Colleges - 1.15 km", "Elizabeth Seton School - 1.21 km", "University of Perpetual Help System DALTA - 1.58 km", "San Beda College Alabang - 3.17 km", "PATTS College of Aeronautics - 3.34 km", "De La Salle Santiago Zobel School - 4.51 km"] },
    { group: "Medical Institutions", items: ["Las Pinas Doctors Hospital - 1.32 km", "Perpetual Help Medical Center - 1.48 km", "A. Zarate Medical Center - 3.28 km", "Alabang Medical Center - 3.36 km"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Sonora Garden Residences",
    paragraphs: [
      "Sonora Garden Residences features Cadence, Liran, and Stellan buildings arranged around landscaped open spaces, pool areas, a multipurpose court, walkways, and shared leisure zones.",
      "The development sits along Alabang-Zapote Road near Robinsons Place Las Pinas, giving residents access to southern Metro Manila conveniences."
    ],
    keyStats: [
      { label: "Buildings", value: "Cadence, Liran, Stellan" },
      { label: "Units", value: "1,949 units" },
      { label: "Lot Area", value: "14,492 sqm" },
      { label: "Unit Mix", value: "1BR, 2BR, 3BR, tandem references" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official Sonora Garden Residences AVP as a guided project introduction." },
    { title: "Virtual Community Tour", text: "Open the Sonora virtual tour when you want a deeper digital walkthrough." }
  ],
  videoTourTitle: "Audio Visual Presentation and Virtual Community Tour",
  videoTourCopy: "Watch the official YouTube AVP preview, then open the official Sonora virtual community tour link when needed.",
  videoTourImage: metroAsset("sonora-garden-residences", "lap-pool.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=YB1T5evkmSY",
  videoTourEmbedUrl: "https://www.youtube.com/embed/YB1T5evkmSY",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=YB1T5evkmSY", variant: "secondary" },
    { label: "Open Virtual Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Choose Open Tour when you are ready for a more detailed walkthrough.",
  amenityGroups: [
    { group: "Pools and Outdoor Recreation", items: ["Lap Pool", "Kiddie Pool", "Lounge Pool", "Leisure Pool", "Pool Deck", "Water Slides", "Jogging Path", "Children's Play Area"] },
    { group: "Sports and Community", items: ["Covered Multipurpose Court", "Basketball Court", "Function Hall", "Entertainment Room", "Game Area", "Open Lawn/Picnic Grove", "Gazebo/Cabana", "Grill Pits"] },
    { group: "Indoor and Sky Amenities", items: ["Fitness Gym", "Reception Lounge", "Snack Bar", "Sky Lounge", "Sky Promenade", "View Deck"] },
    { group: "Convenience and Building Features", items: ["24-hour security", "Convenience Store", "Laundry Station", "Main Entrance Gate", "Perimeter Fence", "Water Station", "WiFi Access", "Standby Electric Generator", "Provision for CCTV Cameras"] }
  ],
  amenityNote: "Ask Luisa to confirm current amenity access, turnover finishes, and house rules.",
  unitIntro:
    "Sonora Garden Residences offers 1BR, 2BR, 3BR, and tandem layout references. Ask Luisa to confirm the exact inventory, building, floor, view, computation, and promo.",
  unitSections: [
    { title: "1 Bedroom Units", description: "One-bedroom references for singles, couples, or investors seeking a compact Las Pinas option with balcony reference.", layouts: ["28.00 sqm"], rows: [
      { layout: "1BR", floorArea: "28.00 sqm", priceRange: "4.6M - 5.2M", status: "Available", monthlyDp: "16.5k - 19.2k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom references for small families and buyers needing more flexible living space.", layouts: ["56.00 sqm", "58.50 sqm"], rows: [
      { layout: "2BR", floorArea: "56.00 sqm", priceRange: "7.0M - 8.0M", status: "Available", monthlyDp: "26.6k - 30.9k /mo" },
      { layout: "2BR", floorArea: "58.50 sqm", priceRange: "7.3M - 7.7M", status: "Available", monthlyDp: "27.9k - 29.7k /mo" }
    ] },
    { title: "3 Bedroom and Tandem Units", description: "Three-bedroom and tandem references for larger households or buyers who need more rooms and balconies.", layouts: ["81.50 sqm", "Tandem A", "Tandem B", "Tandem C"], rows: [
      { layout: "3BR", floorArea: "81.50 sqm", priceRange: "9.5M - 10.6M", status: "Few left", monthlyDp: "37.0k - 41.7k /mo" },
      { layout: "4BR Tandem", floorArea: "For confirmation", priceRange: "Request latest", status: "For confirmation", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "Sonora Garden Residences Floor Plans",
  floorPlansDescription: "Use these layouts for shortlisting, then ask Luisa for the current sheet for the exact unit.",
  floorPlans: [
    { title: "1BR Layout A", text: "One-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-1br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-2br-b.jpg") },
    { title: "2BR Layout D", text: "Two-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-2br-d.jpg") },
    { title: "2BR Layout E", text: "Two-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-2br-e.jpg") },
    { title: "2BR Layout F", text: "Two-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-2br-f.jpg") },
    { title: "3BR Layout A", text: "Three-bedroom unit layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-3br-a.jpg") },
    { title: "Tandem Layout A", text: "Tandem layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-tandem-a.jpg") },
    { title: "Tandem Layout B", text: "Tandem layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-tandem-b.jpg") },
    { title: "Tandem Layout C", text: "Tandem layout reference.", src: metroAsset("sonora-garden-residences", "floorplan-tandem-c.jpg") },
    { title: "Cadence 2nd and 15th Floor Plan", text: "Building floor plan reference.", src: metroAsset("sonora-garden-residences", "floorplan-building-2-15.jpg") },
    { title: "Cadence Typical Floor Plan", text: "Building floor plan reference.", src: metroAsset("sonora-garden-residences", "floorplan-building-standard.jpg") },
    { title: "Cadence High Floor Plan", text: "Building high-floor reference.", src: metroAsset("sonora-garden-residences", "floorplan-building-30-41.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The current references include a 5% Chinabank-linked option and a 12% down payment option. Ask Luisa to confirm promo eligibility, inventory, rent-to-own details, and financing approval.",
    rfoSchedule: [
      { label: "Cadence Building", value: "June 2024" },
      { label: "Liran Building", value: "TBA / for confirmation" },
      { label: "Stellan Building", value: "TBA / for confirmation" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Cadence 504" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "28.00 sqm" },
      { label: "List Price", value: "4,556,000.00" },
      { label: "RFO Date", value: "Jun-2024" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 54,692.30 monthly" },
      { label: "15 years", value: "7.0% rate / 42,338.84 monthly" },
      { label: "20 years", value: "7.0% rate / 36,520.06 monthly" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "4,464,880.00" },
      { label: "Closing Fee", value: "10.5% / 468,812.40" },
      { label: "Total with Closing Fee", value: "4,933,692.40" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 223,244.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "193,244.00" },
      { label: "Monthly DP", value: "12 months / 16,103.67 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 4,241,636.00" },
      { label: "Closing Fee", value: "468,812.40" },
      { label: "Total Balance + Closing Fee", value: "4,710,448.40" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and availability can change without prior notice.", "Building turnover, rent-to-own notes, and bank financing terms must be confirmed before presentation."],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "2.0% discount option over 24 fixed months", "1.0% discount option over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "28.00 sqm", price: "4,556,000", rfo: "Jun-2024", note: "Rent-to-Own PHP 22,000 / mo" },
      { type: "3BR", size: "81.50 sqm", price: "9,489,000", rfo: "Jun-2024", note: "Rent-to-Own PHP 36,000 / mo" },
      { type: "2BR", size: "56.00 sqm", price: "7,007,000", rfo: "Jun-2024", note: "Rent-to-Own PHP 28,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Sonora Garden Residences",
    text: "Sonora Garden Residences uses a unit holding portal so prospective buyers can register, review current inventory, and temporarily hold a selected unit before final reservation.",
    steps: ["Register online", "Review current availability and computation", "Temporarily hold a selected unit", "Proceed after Luisa confirms the reservation requirements"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Ask Luisa to confirm the computation, remaining inventory, rent-to-own terms, payment method, promo coverage, building assignment, and reservation requirements."
};
