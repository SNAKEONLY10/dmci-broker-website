const pricingDisclaimer =
  "Prices, promos, availability, payment terms, unit details, turnover schedules, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.";

const mandaluyongAsset = (slug, file) => `/assets/projects/${slug}/${file}`;

const commonReservationRequirements = [
  "Online Client Registration",
  "Valid government-issued IDs",
  "Philippine TIN Number",
  "Online Reservation Agreement Form",
  "Reservation Fee: PHP 30,000 for the unit",
  "Parking Reservation Fee: PHP 10,000, if applicable",
  "Proof of Billing Address after reservation",
  "Preferred Mode of Payment for down payment",
  "PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks",
  "International bills payment or remittance options subject to confirmation"
];

const unitHoldingNotes = [
  "Philippine-based clients can hold units for 24 hours.",
  "International clients can hold units for 72 hours.",
  "Holding is not a reservation and must be confirmed through the current official process."
];

export const sageResidencesDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Sage Residences DMCI Mandaluyong City",
  heroHeadline: "Sage Residences by DMCI Homes",
  tagline: "A wise home choice in the center of Mandaluyong, Ortigas, Makati, and BGC routes",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: mandaluyongAsset("sage-residences", "logo.png"),
  image: mandaluyongAsset("sage-residences", "hero.jpg"),
  thumbnail: mandaluyongAsset("sage-residences", "thumbnail.jpg"),
  masterPlanImage: mandaluyongAsset("sage-residences", "sdp-standard.jpg"),
  siteProgressImage: mandaluyongAsset("sage-residences", "site-progress.jpg"),
  gallery: [
    mandaluyongAsset("sage-residences", "gallery-1.jpg"),
    mandaluyongAsset("sage-residences", "gallery-2.jpg"),
    mandaluyongAsset("sage-residences", "gallery-3.jpg"),
    mandaluyongAsset("sage-residences", "sdp-standard.jpg"),
    mandaluyongAsset("sage-residences", "sdp-ground.jpg"),
    mandaluyongAsset("sage-residences", "sdp-roofdeck.jpg"),
    mandaluyongAsset("sage-residences", "gate-guardhouse.jpg"),
    mandaluyongAsset("sage-residences", "drop-off.jpg"),
    mandaluyongAsset("sage-residences", "leisure-pool.jpg"),
    mandaluyongAsset("sage-residences", "kiddie-pool.jpg"),
    mandaluyongAsset("sage-residences", "picnic-area.jpg"),
    mandaluyongAsset("sage-residences", "play-area.jpg"),
    mandaluyongAsset("sage-residences", "shooting-court.jpg"),
    mandaluyongAsset("sage-residences", "reception.jpg"),
    mandaluyongAsset("sage-residences", "open-lounge.jpg"),
    mandaluyongAsset("sage-residences", "bar-area.jpg"),
    mandaluyongAsset("sage-residences", "elevator-lobby.jpg"),
    mandaluyongAsset("sage-residences", "roofdeck-pool.jpg"),
    mandaluyongAsset("sage-residences", "sky-lounge.jpg"),
    mandaluyongAsset("sage-residences", "sky-lounge-bar.jpg"),
    mandaluyongAsset("sage-residences", "entertainment-room.jpg"),
    mandaluyongAsset("sage-residences", "fitness-gym.jpg"),
    mandaluyongAsset("sage-residences", "roofdeck-view.jpg"),
    mandaluyongAsset("sage-residences", "roofdeck-aerial.jpg"),
    mandaluyongAsset("sage-residences", "location-map.png")
  ],
  galleryLabels: [
    "Sage Residences Building Facade",
    "Sage Residences Amenity Core",
    "Sage Residences Site Progress Reference",
    "Sage Residences Standard Floor Site Development Plan",
    "Sage Residences Ground Floor Site Development Plan",
    "Sage Residences Roof Deck Site Development Plan",
    "Sage Residences Gate and Guardhouse",
    "Sage Residences Drop-off Area",
    "Sage Residences Leisure Pool",
    "Sage Residences Kiddie Pool",
    "Sage Residences Picnic Area",
    "Sage Residences Children's Play Area",
    "Sage Residences Shooting Court",
    "Sage Residences Reception",
    "Sage Residences Open Lounge",
    "Sage Residences Bar Area",
    "Sage Residences Elevator Lobby",
    "Sage Residences Roof Deck Pool",
    "Sage Residences Sky Lounge",
    "Sage Residences Sky Lounge Bar Area",
    "Sage Residences Entertainment Room",
    "Sage Residences Fitness Gym",
    "Sage Residences Roof Deck View",
    "Sage Residences Roof Deck Aerial View",
    "Sage Residences Location Map"
  ],
  status: "Under Construction",
  turnoverYear: "2028",
  targetRfo: "February 2028",
  unitTypes: ["Studio", "1BR", "2BR", "3BR"],
  landArea: "5,995 sqm",
  address: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City",
  developmentType: "High-rise Condominium",
  propertyType: "High-rise Condominium",
  architecturalTheme: "Contemporary",
  priceRangeLabel: "Studio from 6.6M, 1BR from 6.6M, 2BR from 8.1M, 3BR from 12.6M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Sage Residences by DMCI Homes is a high-rise residential condominium at Domingo M. Guevarra and Sinag Streets in Mauway, Mandaluyong City. It combines a central Metro Manila address, a 50-floor single-building plan, a broad studio-to-three-bedroom unit mix, and a strong amenity program with 56% of the development dedicated to amenities and open spaces.",
  introParagraphs: [
    "Sage Residences gives buyers a Mandaluyong address between Ortigas, Makati, BGC, Rockwell, Greenfield, and Shaw Boulevard routes.",
    "The project is planned with 49 residential floors, studio to three-bedroom unit options, roof deck lifestyle spaces, pools, fitness areas, and everyday conveniences for city living."
  ],
  highlights: [
    "50-floor high-rise condominium with 49 residential floors",
    "56% amenity and open-space reference",
    "Studio, 1BR, 2BR, and 3BR options with February 2028 turnover reference"
  ],
  whyInvest: [
    "Central Mandaluyong location close to MRT Boni, Greenfield District, SM Megamall, Shangri-La Plaza, Ortigas CBD, Makati CBD, BGC, and Rockwell.",
    "Strong open-space and amenity plan including leisure pool, kiddie pool, roof deck pool, sky lounge, fitness gym, open lounge, picnic area, and shooting court.",
    "Broad unit range gives options for end-use, investment, young professionals, couples, and families.",
    "Official YouTube AVP, Google Maps embed, and Drive-verified 360 property tour are wired for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City" },
    { label: "Lot Area", value: "5,995 sqm" },
    { label: "Type of Development", value: "High-rise Condominium" },
    { label: "Number of Buildings", value: "1 building" },
    { label: "Number of Floors", value: "50 floors" },
    { label: "Unit Mix", value: "Studio, 1BR, 2BR, and 3BR" },
    { label: "Amenity/Open Space", value: "56%" },
    { label: "Turnover Date", value: "February 2028" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "31.00 - 33.50 sqm", range: "6.6M - 8.1M", monthlyDp: "12% DP: 19.1k - 23.4k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "30.00 - 32.00 sqm", range: "6.6M - 8.1M", monthlyDp: "12% DP: 19.2k - 23.5k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "48.00 - 84.00 sqm", range: "8.1M - 12.8M", monthlyDp: "12% DP: 23.5k - 37.7k /mo", status: "Available", note: "Reference only" },
    { type: "3BR", floorArea: "78.00 sqm", range: "12.6M - 12.9M", monthlyDp: "12% DP: 37.0k - 38.0k /mo", status: "Limited", note: "Reference only" }
  ],
  summaryPricingNote:
    "Use these guide ranges only for shortlisting. Request Luisa's current availability sheet and official computation before presentation or reservation.",
  locationDetails: {
    title: "Location of Sage Residences",
    text:
      "Sage Residences is positioned at D.M. Guevarra and Sinag Streets in Mandaluyong City, minutes from MRT Boni, Shaw Boulevard, Greenfield, Ortigas, Makati, Rockwell, and BGC access routes.",
    exactAddress: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City",
    image: mandaluyongAsset("sage-residences", "location-map.png"),
    imageLabel: "Sage Residences location map",
    note: "Travel times and distances are reference points only and should be checked with live traffic before site viewing.",
    mapTitle: "Sage Residences on Google Maps",
    mapText: "Open Google Maps for live routes to Sage Residences in Mandaluyong.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sage%20Residences%20Domingo%20M.%20Guevarra%20Sinag%20Streets%20Mandaluyong",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sage%20Residences%20Mandaluyong",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3301596613633!2d121.04400837448463!3d14.580253377575712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c979f464a405%3A0xb971e62dd194a128!2sSage%20Residences!5e0!3m2!1sen!2sph!4v1715494459759!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Business and Commercial Hubs", items: ["S&R Shaw Boulevard - 0.82 km", "Greenfield District - 0.79 km", "SM Megamall - 0.98 km", "EDSA Shangri-La - 0.93 km", "Robinsons Galleria - 1.87 km", "Capitol Commons - 1.81 km", "Greenhills Mall - 2.46 km"] },
    { group: "Schools", items: ["Lourdes School of Mandaluyong - 1.19 km", "University of Asia and the Pacific - 1.54 km", "St. Pedro Poveda College - 1.70 km", "La Salle Greenhills - 2.05 km", "Rizal Technological University - 1.09 km", "University of Makati - 2.18 km"] },
    { group: "Medical Institutions", items: ["Victor R. Potenciano Medical Center - 0.39 km", "Cardinal Santos Medical Center - 1.96 km", "The Medical City - 2.47 km", "St. Luke's Medical Center BGC - 2.80 km", "Our Lady of Lourdes Hospital - 3.06 km"] },
    { group: "Transport and Business Districts", items: ["MRT Boni Station - 0.76 km", "Ortigas CBD - 2.00 km", "Rockwell Center - 2.54 km", "BGC - 2.80 km", "Makati CBD - 4.00 km"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan at Sage Residences",
    paragraphs: [
      "Sage Residences is planned as a single high-rise building with multiple lifestyle zones on the ground floor and roof deck.",
      "The development highlights open spaces, pool areas, sky lounge spaces, common lounges, and activity areas for city dwellers who want a central address with breathing room."
    ],
    keyStats: [
      { label: "Lot Area", value: "5,995 sqm" },
      { label: "Buildings", value: "1 high-rise tower" },
      { label: "Floors", value: "50 floors" },
      { label: "Open Space", value: "56%" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official Sage Residences AVP as a fast visual introduction to the project, location, and lifestyle plan." },
    { title: "360 Property Tour", text: "A Drive-verified ViewIn360 property tour is linked on demand so buyers can explore the community without loading heavy media by default." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360 Property Tour",
  videoTourCopy: "Watch the YouTube AVP preview, then open the verified Sage Residences 360 tour link only when needed.",
  videoTourImage: mandaluyongAsset("sage-residences", "roofdeck-pool.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=RRLGJTOJ48k",
  videoTourEmbedUrl: "https://www.youtube.com/embed/RRLGJTOJ48k",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=RRLGJTOJ48k", variant: "secondary" },
    { label: "Open 360 Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large tour media is linked instead of auto-loaded so the page stays fast on mobile.",
  amenityGroups: [
    { group: "Pool and Outdoor Recreation", items: ["Leisure Pool", "Kiddie Pool", "Roof Deck Pool", "Picnic Area", "Open Lawn / Open Lounge", "Sky Promenade"] },
    { group: "Fitness and Activity", items: ["Fitness Gym", "Shooting Court", "Children's Play Area", "Entertainment Room"] },
    { group: "Lounges and Common Areas", items: ["Sky Lounge", "Sky Lounge Bar Area", "GF Bar Area", "Reception", "Elevator Lobby", "Open Lounge"] },
    { group: "Convenience and Services", items: ["Guarded gate and entrance", "Managed common areas", "PMO support", "Buyer assistance through Luisa"] }
  ],
  amenityNote: "Final amenities, operations, and access rules must be confirmed through Luisa or the official project presentation.",
  unitIntro:
    "Sage Residences offers studio, 1BR, 2BR, and 3BR guide references. Exact inventory, floor level, view, computation, and promos must be confirmed before buyer presentation.",
  unitSections: [
    { title: "Studio Units", description: "Compact layouts for buyers who want a central Mandaluyong address with efficient living space.", layouts: ["31.00 sqm", "31.50 sqm", "33.50 sqm"], rows: [
      { layout: "Studio", floorArea: "31.00 sqm", priceRange: "6.8M - 7.8M", status: "Available", monthlyDp: "19.6k - 22.7k /mo" },
      { layout: "Studio", floorArea: "31.50 sqm", priceRange: "6.6M - 7.5M", status: "Available", monthlyDp: "19.1k - 21.8k /mo" },
      { layout: "Studio", floorArea: "33.50 sqm", priceRange: "7.3M - 8.1M", status: "Few left", monthlyDp: "21.2k - 23.4k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "One-bedroom references for singles, couples, and investors who want more separation than a studio.", layouts: ["30.00 sqm", "32.00 sqm"], rows: [
      { layout: "1BR", floorArea: "30.00 sqm", priceRange: "6.6M - 7.4M", status: "Available", monthlyDp: "19.2k - 21.5k /mo" },
      { layout: "1BR", floorArea: "32.00 sqm", priceRange: "7.3M - 8.1M", status: "Limited", monthlyDp: "21.0k - 23.5k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom options cover compact family layouts up to larger cuts with more flexibility.", layouts: ["48.00 sqm", "55.00 sqm", "58.00 sqm", "59.50 sqm", "70.00 sqm", "75.00 sqm", "84.00 sqm"], rows: [
      { layout: "2BR", floorArea: "48.00 sqm", priceRange: "8.1M - 9.1M", status: "Limited", monthlyDp: "23.5k - 26.5k /mo" },
      { layout: "2BR", floorArea: "52.00 sqm", priceRange: "8.5M - 9.3M", status: "Available", monthlyDp: "24.6k - 27.0k /mo" },
      { layout: "2BR", floorArea: "55.00 sqm", priceRange: "8.3M - 9.2M", status: "Few left", monthlyDp: "24.1k - 26.7k /mo" },
      { layout: "2BR", floorArea: "58.00 sqm", priceRange: "9.3M - 10.8M", status: "Available", monthlyDp: "27.3k - 31.6k /mo" },
      { layout: "2BR", floorArea: "59.50 sqm", priceRange: "9.3M - 10.5M", status: "Available", monthlyDp: "27.0k - 30.8k /mo" },
      { layout: "2BR", floorArea: "70.00 sqm", priceRange: "11.2M - 12.5M", status: "Limited", monthlyDp: "32.9k - 36.9k /mo" },
      { layout: "2BR", floorArea: "75.00 sqm", priceRange: "11.5M - 12.8M", status: "Few left", monthlyDp: "33.8k - 37.7k /mo" },
      { layout: "2BR", floorArea: "84.00 sqm", priceRange: "11.9M - 12.8M", status: "Limited", monthlyDp: "35.0k - 37.6k /mo" }
    ] },
    { title: "3 Bedroom Units", description: "Three-bedroom references for larger households needing more private rooms.", layouts: ["78.00 sqm"], rows: [
      { layout: "3BR", floorArea: "78.00 sqm", priceRange: "12.6M - 12.9M", status: "Limited", monthlyDp: "37.0k - 38.0k /mo" }
    ] }
  ],
  floorPlansTitle: "Sage Residences Floor Plans and Unit Layouts",
  floorPlansDescription: "Use these as layout references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "Studio Layout A", text: "Studio layout reference from the official Sage material.", src: mandaluyongAsset("sage-residences", "floorplan-studio-a.jpg") },
    { title: "1BR Layout A", text: "One-bedroom layout reference.", src: mandaluyongAsset("sage-residences", "floorplan-1br-a.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference.", src: mandaluyongAsset("sage-residences", "floorplan-2br-a.jpg") },
    { title: "2BR Layout T", text: "Larger two-bedroom layout reference.", src: mandaluyongAsset("sage-residences", "floorplan-2br-t.jpg") },
    { title: "3BR Layout A", text: "Three-bedroom layout reference.", src: mandaluyongAsset("sage-residences", "floorplan-3br-a.jpg") },
    { title: "Typical Floor Plan", text: "Floor-level plan reference for typical levels.", src: mandaluyongAsset("sage-residences", "floorplan-standard-level.jpg") },
    { title: "High Floor Plan", text: "High-floor level plan reference.", src: mandaluyongAsset("sage-residences", "floorplan-high-level.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "Regular term reference is 30% minimum down payment deferred monthly until completion/RFO, with the remaining balance through in-house or bank financing. The supplied sample also includes a 12% DP promo reference.",
    sampleComputation: [
      { label: "Sample Unit", value: "C-Sage 515" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "31.50 sqm" },
      { label: "List Price", value: "6,618,000.00" },
      { label: "RFO Date", value: "Feb-2028" },
      { label: "Downpayment", value: "12%" },
      { label: "Number of Months", value: "40 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 75,687.98 monthly" },
      { label: "15 years", value: "7.0% rate / 58,592.19 monthly" },
      { label: "20 years", value: "7.0% rate / 50,539.64 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "6,618,000.00" },
      { label: "Total Contract Price", value: "6,618,000.00" },
      { label: "Closing Fee", value: "10.5% / 694,890.00" },
      { label: "Total with Closing Fee", value: "7,312,890.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "12.0% / 794,160.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "764,160.00" },
      { label: "Monthly DP", value: "40 months / 19,104.00 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "88.0% / 5,823,840.00" },
      { label: "Closing Fee", value: "694,890.00" },
      { label: "Total Balance + Closing Fee", value: "6,518,730.00" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and availability can change without prior notice.", "Closing fees, bank terms, and discounts must be confirmed before reservation."],
    promoCards: [
      { title: "12% DP Promo", items: ["12% down payment", "Flexible down payment over 40 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "2BR", size: "75.00 sqm", price: "12,273,000", rfo: "Feb-2028", note: "HomeReady not applicable" },
      { type: "Studio", size: "31.50 sqm", price: "7,262,000", rfo: "Feb-2028", note: "HomeReady not applicable" },
      { type: "2BR", size: "59.50 sqm", price: "10,254,000", rfo: "Feb-2028", note: "HomeReady not applicable" },
      { type: "2BR", size: "55.00 sqm", price: "8,941,000", rfo: "Feb-2028", note: "HomeReady not applicable" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Sage Residences",
    text: "Sage Residences uses a unit holding portal so prospective buyers can register, review current inventory, and temporarily hold a selected unit before final reservation.",
    steps: ["Register online", "Review latest availability and computation", "Temporarily hold a selected unit", "Complete reservation only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Confirm computation, availability, payment method, promo coverage, and official requirements with Luisa before making any reservation decision."
};

export const kaiGardenResidencesDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Kai Garden Residences DMCI Mandaluyong",
  heroHeadline: "Kai Garden Residences by DMCI Homes",
  tagline: "Japanese-inspired ready-for-occupancy living near Boni Avenue and Mandaluyong business routes",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: mandaluyongAsset("kai-garden-residences", "logo.png"),
  image: mandaluyongAsset("kai-garden-residences", "hero.jpg"),
  thumbnail: mandaluyongAsset("kai-garden-residences", "thumbnail.jpg"),
  masterPlanImage: mandaluyongAsset("kai-garden-residences", "master-plan.jpg"),
  siteProgressImage: mandaluyongAsset("kai-garden-residences", "site-progress.jpg"),
  gallery: [
    mandaluyongAsset("kai-garden-residences", "hero.jpg"),
    mandaluyongAsset("kai-garden-residences", "gallery-1.jpg"),
    mandaluyongAsset("kai-garden-residences", "gallery-2.jpg"),
    mandaluyongAsset("kai-garden-residences", "gallery-3.jpg"),
    mandaluyongAsset("kai-garden-residences", "location-map.jpg"),
    mandaluyongAsset("kai-garden-residences", "location-reference.jpg"),
    mandaluyongAsset("kai-garden-residences", "master-plan.jpg"),
    mandaluyongAsset("kai-garden-residences", "site-progress.jpg"),
    mandaluyongAsset("kai-garden-residences", "site-progress-2.jpg"),
    mandaluyongAsset("kai-garden-residences", "site-progress-3.jpg"),
    mandaluyongAsset("kai-garden-residences", "site-progress-4.jpg"),
    mandaluyongAsset("kai-garden-residences", "site-progress-5.jpg"),
    mandaluyongAsset("kai-garden-residences", "turnover-finishes-1.jpg"),
    mandaluyongAsset("kai-garden-residences", "turnover-finishes-2.jpg")
  ],
  galleryLabels: [
    "Kai Garden Residences Amenity Aerial",
    "Kai Garden Residences Site Progress Reference",
    "Kai Garden Residences Site Progress Reference",
    "Kai Garden Residences Site Progress Reference",
    "Kai Garden Residences Location Map",
    "Kai Garden Residences Location Reference",
    "Kai Garden Residences Site Development Plan",
    "Kai Garden Residences Site Progress",
    "Kai Garden Residences Site Progress",
    "Kai Garden Residences Site Progress",
    "Kai Garden Residences Site Progress",
    "Kai Garden Residences Site Progress",
    "Kai Garden Residences Turnover Finishes",
    "Kai Garden Residences Turnover Finishes"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready / 2025",
  targetRfo: "Sugi RFO, Icho RFO, Hinoki staged turnover through January 2025",
  unitTypes: ["1BR", "2BR", "3BR", "Tandem"],
  landArea: "17,082 sqm",
  address: "M. Vicente St. near Boni Ave., Mandaluyong City",
  developmentType: "High-rise Condominium",
  propertyType: "High-rise Condominium",
  architecturalTheme: "Japanese-inspired",
  priceRangeLabel: "1BR from 6.1M, 2BR from 9.3M, 3BR sold out",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Kai Garden Residences by DMCI Homes is a Japanese-inspired high-rise residential community on M. Vicente Street near Boni Avenue in Mandaluyong City. It includes Sugi, Icho, and Hinoki buildings, resort-style amenities, RFO/staged turnover references, and unit options from 1BR to 3BR with tandem references.",
  introParagraphs: [
    "Kai Garden Residences gives buyers a Mandaluyong address near Boni Avenue, Shaw, Pioneer, Ortigas, Rockwell, and Makati routes.",
    "The community spans 17,082 sqm with three high-rise buildings, two amenity levels, basement parking, landscaped spaces, pools, play areas, and Japanese-inspired design cues."
  ],
  highlights: [
    "3 high-rise buildings with 2,953 units and 1,630 parking slot references",
    "Japanese-inspired community with pools, garden spaces, sports and fitness areas",
    "Sugi and Icho RFO references, Hinoki staged turnover through January 2025"
  ],
  whyInvest: [
    "RFO/staged-turnover Mandaluyong option near Boni Avenue, Shaw, Pioneer, Ortigas, Rockwell, Makati, and daily retail routes.",
    "Japanese-inspired design, landscaped open spaces, pools, basketball court, play areas, picnic spots, jogging path, and outdoor fitness areas.",
    "Current guide references show limited 1BR and 2BR inventory, with 3BR sold out / waitlist subject to reopening.",
    "Official YouTube AVP and exact Google Maps embed are wired; no verified Kai-specific 360 link was found in the available Drive folder or official page during this update."
  ],
  projectFacts: [
    { label: "Location", value: "M. Vicente St. near Boni Ave., Mandaluyong City" },
    { label: "Land Area", value: "17,082 sqm" },
    { label: "Type of Development", value: "High-rise Condominium" },
    { label: "Number of Buildings", value: "3 high-rise buildings" },
    { label: "Units / Parking", value: "2,953 units / 1,630 parking slots" },
    { label: "Floors", value: "39 residential floors reference for Sugi, with 2 amenity levels and 4 basement parking levels" },
    { label: "Unit Types", value: "1BR, 2BR, and 3BR units" },
    { label: "Turnover", value: "Sugi RFO, Icho RFO, Hinoki staged turnover through Jan 2025" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "36.00 sqm", range: "6.1M", monthlyDp: "5% DP: 22.9k /mo", status: "Few left", note: "Reference only" },
    { type: "2BR", floorArea: "53.50 sqm", range: "9.3M", monthlyDp: "5% DP: 36.3k /mo", status: "Few left", note: "Reference only" },
    { type: "3BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" }
  ],
  summaryPricingNote:
    "Use these guide ranges only. Request the latest remaining inventory, rent-to-own notes, and official computation before buyer presentation.",
  locationDetails: {
    title: "Prime Location of Kai Garden Residences",
    text:
      "Kai Garden Residences is located on M. Vicente Street near Boni Avenue in Mandaluyong, giving residents access to Shaw, Pioneer, Ortigas, Rockwell, Makati, shopping centers, schools, churches, and medical facilities.",
    exactAddress: "M. Vicente St. near Boni Ave., Mandaluyong City",
    image: mandaluyongAsset("kai-garden-residences", "location-map.jpg"),
    imageLabel: "Kai Garden Residences location map",
    note: "Travel times are reference only and should be checked with live traffic before site viewing.",
    mapTitle: "Kai Garden Residences on Google Maps",
    mapText: "Open Google Maps for live traffic, route options, and turn-by-turn directions to Kai Garden Residences.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kai%20Garden%20Residences%20M.%20Vicente%20St%20near%20Boni%20Ave%20Mandaluyong",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kai%20Garden%20Residences%20Mandaluyong",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.13932862529!2d121.0450915069755!3d14.57567345707918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c848a62ba9b3%3A0xb68c1b0710c542f!2sKai+Garden+Residences!5e0!3m2!1sen!2sph!4v1498403297632"
  },
  nearbyDestinations: [
    { group: "Business Districts", items: ["Robinsons Pioneer Business Center - 2.2 km / 16 mins", "Rockwell Business District - reference route", "Ortigas Business Center - reference route", "Ayala Business District - up to 4.8 km / 25 mins"] },
    { group: "Shopping Centers", items: ["Domingo Guevara Commercial Strip - 0.4 km", "S&R Shaw", "Cherry Foodarama", "500 Shaw Mall", "Liberty Center", "Robinsons Forum", "SM Light Mall", "Pioneer Center", "Greenfield Shopping Center", "Power Plant Mall", "Shangri-La Mall", "SM Megamall", "Estancia Mall"] },
    { group: "Educational Institutions", items: ["Rizal Technological University - 0.45 km", "City of Mandaluyong Science High School", "Lourdes School of Mandaluyong", "Colegio de Sta. Rosa", "University of Asia and the Pacific", "St. Paul College Pasig", "Saint Pedro Poveda College"] },
    { group: "Medical and Churches", items: ["Unciano General Hospital - 0.24 km", "VRP Medical Center - 0.6 km", "San Roque Parish", "Archdiocesan Shrine of the Divine Mercy", "Our Lady of Fatima Parish", "Victory Church"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Kai Garden Residences",
    paragraphs: [
      "Kai Garden Residences spans 17,082 sqm and includes Sugi, Icho, and Hinoki high-rise buildings.",
      "The development includes two amenity levels, four basement parking levels, Japanese-inspired gardens, pool areas, play spaces, and activity zones."
    ],
    keyStats: [
      { label: "Buildings", value: "Sugi, Icho, Hinoki" },
      { label: "Units", value: "2,953 reference" },
      { label: "Parking", value: "1,630 slots reference" },
      { label: "Land Area", value: "17,082 sqm" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official YouTube AVP as a quick project introduction for buyers comparing RFO Mandaluyong options." },
    { title: "Official Visuals", text: "Official page images and Drive logo assets are compressed locally for fast buyer browsing." }
  ],
  videoTourTitle: "Audio Visual Presentation",
  videoTourCopy: "Watch the official YouTube AVP preview. No verified Kai-specific 360 tour link was found in the available KGR Drive folder or official page during this update.",
  videoTourImage: mandaluyongAsset("kai-garden-residences", "hero.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=rZJdHyCzUS8",
  videoTourEmbedUrl: "https://www.youtube.com/embed/rZJdHyCzUS8",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=rZJdHyCzUS8", variant: "secondary" }
  ],
  videoTourNote: "Large videos are linked or embedded lightly so the page stays fast on mobile.",
  amenityGroups: [
    { group: "Pools and Garden Spaces", items: ["Lap Pools", "Kiddie Pool", "Landscaped Gardens", "Picnic Spots", "Japanese-inspired outdoor spaces"] },
    { group: "Sports and Active Lifestyle", items: ["Basketball Court", "Jogging Path", "Outdoor Fitness Area", "Play Areas"] },
    { group: "Community and Convenience", items: ["Amenity Levels", "Basement Parking", "Common activity areas", "Managed shared spaces"] },
    { group: "Turnover Finish References", items: ["Vinyl plank references", "Ceramic tile references", "Granite countertop references", "Doors, windows, and ceiling finish references"] }
  ],
  amenityNote: "Final amenity access, turnover finish details, and house rules must be confirmed through Luisa or official project channels.",
  unitIntro:
    "Kai Garden Residences offers 1BR, 2BR, and 3BR references, with 3BR currently marked sold out in the supplied material. Ask Luisa for remaining inventory and reopening/waitlist updates.",
  unitSections: [
    { title: "1 Bedroom Units", description: "One-bedroom guide references for singles, couples, or investors seeking an RFO Mandaluyong option.", layouts: ["36.00 sqm"], rows: [
      { layout: "1BR", floorArea: "36.00 sqm", priceRange: "6.1M", status: "Few left", monthlyDp: "5% DP: 22.9k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom guide references for small families or buyers needing more flexible living space.", layouts: ["53.50 sqm"], rows: [
      { layout: "2BR", floorArea: "53.50 sqm", priceRange: "9.3M", status: "Few left", monthlyDp: "5% DP: 36.3k /mo" }
    ] },
    { title: "3 Bedroom and Tandem References", description: "Three-bedroom inventory is marked sold out in the supplied reference. Tandem layout is shown for reference only.", layouts: ["3BR", "Tandem"], rows: [
      { layout: "3BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" },
      { layout: "Tandem", floorArea: "For confirmation", priceRange: "Request latest", status: "For confirmation", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "Kai Garden Residences Floor Plans",
  floorPlansDescription: "Use these as layout references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "1BR Layout A", text: "One-bedroom unit layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-1br-a.jpg") },
    { title: "1BR Layout B", text: "One-bedroom alternate layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-1br-b.jpg") },
    { title: "1BR Layout C", text: "One-bedroom alternate layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-1br-c.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom unit layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-2br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom alternate layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-2br-b.jpg") },
    { title: "2BR Layout C", text: "Two-bedroom alternate layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-2br-c.jpg") },
    { title: "3BR Layout", text: "Three-bedroom layout reference for waitlist/reopening checks.", src: mandaluyongAsset("kai-garden-residences", "floorplan-3br.jpg") },
    { title: "Tandem Layout", text: "Tandem layout reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-tandem.jpg") },
    { title: "Sugi 2nd Floor Plan", text: "Building floor plan reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-building-2nd.jpg") },
    { title: "Sugi Typical Floor Plan", text: "Typical floor plan reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-building-standard.jpg") },
    { title: "Sugi High Floor Plan", text: "High floor plan reference.", src: mandaluyongAsset("kai-garden-residences", "floorplan-building-high.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The supplied reference includes 5% DP Chinabank promo and 12% DP promo references. Final availability, promo scope, rent-to-own notes, and financing approval must be confirmed.",
    rfoSchedule: [
      { label: "Sugi", value: "Jan 2023" },
      { label: "Icho", value: "Jan 2024" },
      { label: "Hinoki", value: "June 2024 to January 2025 by floor level" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Icho 2612" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "36.00 sqm" },
      { label: "List Price", value: "6,097,000.00" },
      { label: "RFO Date", value: "Jan-2024" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 73,191.17 monthly" },
      { label: "15 years", value: "7.0% rate / 56,659.33 monthly" },
      { label: "20 years", value: "7.0% rate / 48,872.43 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "6,097,000.00" },
      { label: "Special Discount", value: "2.0% / 121,940.00" },
      { label: "Total Contract Price", value: "5,975,060.00" },
      { label: "Closing Fee", value: "10.5% / 627,381.30" },
      { label: "Total with Closing Fee", value: "6,602,441.30" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 298,753.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "268,753.00" },
      { label: "Monthly DP", value: "12 months / 22,396.08 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 5,676,307.00" },
      { label: "Closing Fee", value: "627,381.30" },
      { label: "Total Balance + Closing Fee", value: "6,303,688.30" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and availability can change without prior notice.", "Rent-to-own notes and bank promo terms must be confirmed before presentation."],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "1.0% special discount on DP promo term", "Down payment over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "36.00 sqm", price: "6,097,000", rfo: "Jan-2024", note: "Rent-to-Own PHP 27,000 / mo" },
      { type: "2BR", size: "53.50 sqm", price: "9,319,000", rfo: "Jun-2024", note: "Rent-to-Own PHP 30,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Kai Garden Residences",
    text: "Kai Garden Residences uses a unit holding portal so prospective buyers can register, review current inventory, and temporarily hold a selected unit before reservation.",
    steps: ["Register online", "Review the latest availability and computation", "Temporarily hold a selected unit", "Proceed only after official computation and requirements are confirmed"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Confirm computation, remaining inventory, rent-to-own terms, payment method, promo coverage, and official requirements with Luisa before reservation."
};
