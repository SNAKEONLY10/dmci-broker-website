const pricingDisclaimer =
  "Prices, promos, availability, payment terms, unit details, turnover schedules, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.";

const pasigAsset = (slug, file) => `/assets/projects/${slug}/${file}`;

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

export const valeronTowerDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Valeron Tower DMCI Pasig City",
  heroHeadline: "Valeron Tower by DMCI Homes",
  tagline: "Modern artisanal high-rise living at the gateway of the C-5 Ortigas Corridor",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: pasigAsset("the-valeron-tower", "logo.png"),
  image: pasigAsset("the-valeron-tower", "hero.jpg"),
  thumbnail: pasigAsset("the-valeron-tower", "thumbnail.jpg"),
  masterPlanImage: pasigAsset("the-valeron-tower", "master-plan.jpg"),
  siteProgressImage: pasigAsset("the-valeron-tower", "site-progress.jpg"),
  gallery: [
    pasigAsset("the-valeron-tower", "gallery-1.jpg"),
    pasigAsset("the-valeron-tower", "gallery-2.jpg"),
    pasigAsset("the-valeron-tower", "gallery-3.jpg"),
    pasigAsset("the-valeron-tower", "sdp-ground.jpg"),
    pasigAsset("the-valeron-tower", "sdp-amenity.jpg"),
    pasigAsset("the-valeron-tower", "sdp-roof.jpg"),
    pasigAsset("the-valeron-tower", "sky-deck-pool.jpg"),
    pasigAsset("the-valeron-tower", "open-lounge.jpg"),
    pasigAsset("the-valeron-tower", "basketball-court.jpg"),
    pasigAsset("the-valeron-tower", "reception-lobby.jpg"),
    pasigAsset("the-valeron-tower", "snack-bar.jpg"),
    pasigAsset("the-valeron-tower", "kiddie-pool.jpg"),
    pasigAsset("the-valeron-tower", "sky-lounge.jpg"),
    pasigAsset("the-valeron-tower", "open-lawn.jpg"),
    pasigAsset("the-valeron-tower", "leisure-pool.jpg"),
    pasigAsset("the-valeron-tower", "roofdeck-aerial.jpg"),
    pasigAsset("the-valeron-tower", "location-map.jpg"),
    pasigAsset("the-valeron-tower", "site-progress.jpg")
  ],
  galleryLabels: [
    "Valeron Tower Sky Deck Pool at Night",
    "Valeron Tower Sky Promenade",
    "Valeron Tower Children's Play Area",
    "Valeron Tower Ground Floor Development Plan",
    "Valeron Tower Amenity Floor Development Plan",
    "Valeron Tower Roof Deck Development Plan",
    "Valeron Tower Sky Deck Pool",
    "Valeron Tower Open Lounge",
    "Valeron Tower Basketball Court",
    "Valeron Tower GF Reception Lobby",
    "Valeron Tower Snack Bar",
    "Valeron Tower Kiddie Pool",
    "Valeron Tower Sky Lounge",
    "Valeron Tower Open Lawn",
    "Valeron Tower Leisure Pool",
    "Valeron Tower Roof Deck Aerial View",
    "Valeron Tower Location Map",
    "Valeron Tower Property Information Sheet"
  ],
  status: "New",
  turnoverYear: "2029",
  targetRfo: "July 2029",
  unitTypes: ["Studio", "1BR", "2BR", "3BR", "Tandem"],
  landArea: "8,390 sqm",
  address: "C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City",
  developmentType: "High-rise Condominium",
  propertyType: "High-rise Condominium",
  architecturalTheme: "Modern Artisanal",
  priceRangeLabel: "Studio from 7.0M, 1BR from 8.9M, 2BR from 10.9M, 3BR from 13.7M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Valeron Tower by DMCI Homes is a high-rise condominium at C-5 corner P.E. Antonio Street in Brgy. Ugong, Pasig City. The project highlights a modern artisanal theme, a C-5 Ortigas Corridor address, extensive open-space planning, and unit options from studio to three-bedroom and tandem references.",
  introParagraphs: [
    "Valeron Tower is positioned at the C-5 Ortigas Corridor, giving buyers quick access to Pasig, Ortigas Center, Arcovia, BGC routes, and nearby daily conveniences.",
    "The development is presented with a modern artisanal theme and a strong amenity plan across ground, amenity, and roof deck levels."
  ],
  highlights: [
    "55-storey high-rise condominium with commercial, amenity, parking, and residential levels",
    "76% amenity and open-space ratio reference",
    "Studio, 1BR, 2BR, 3BR, and tandem options with July 2029 target RFO reference"
  ],
  whyInvest: [
    "Strategic C-5 corner address near Arcovia City, SM Center Pasig, Ortigas Center, and The Medical City.",
    "Modern artisanal architectural theme with several amenity zones and roof deck lifestyle areas.",
    "Broad unit mix allows buyer matching across compact end-use, investment, family, and tandem needs.",
    "Official YouTube AVP, Google Maps embed, and Drive-backed 360 tour link are wired for buyer review."
  ],
  projectFacts: [
    { label: "Address", value: "C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City" },
    { label: "Land Area", value: "8,390 sqm" },
    { label: "Architectural Theme", value: "Modern Artisanal" },
    { label: "Development Type", value: "High-rise Condominium" },
    { label: "Number of Storeys", value: "55 storeys" },
    { label: "Unit Types", value: "Studio, 1BR, 2BR, 3BR, Tandem" },
    { label: "Amenity/Open Space Ratio", value: "76%" },
    { label: "Target RFO Date", value: "July 2029" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "32.50 - 38.50 sqm", range: "7.0M - 8.8M", monthlyDp: "15% DP: 21.2k - 27.0k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "46.50 - 48.50 sqm", range: "8.9M - 11.4M", monthlyDp: "15% DP: 27.3k - 34.9k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "59.00 - 91.00 sqm", range: "10.9M - 16.2M", monthlyDp: "15% DP: 33.4k - 50.0k /mo", status: "Available", note: "Reference only" },
    { type: "3BR", floorArea: "76.00 - 84.50 sqm", range: "13.7M - 16.8M", monthlyDp: "15% DP: 42.3k - 52.0k /mo", status: "Available", note: "Reference only" }
  ],
  summaryPricingNote: "Use these as guide ranges only. Request Luisa's latest availability sheet and official computation before buyer presentation or reservation.",
  locationDetails: {
    title: "Prime Location of Valeron Tower",
    text: "Valeron Tower is located at the gateway of the C-5 Ortigas Corridor, near Arcovia City, SM Center Pasig, Ortigas Center, schools, hospitals, and key Pasig routes.",
    exactAddress: "C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City",
    note: "Distances and travel times are reference points and should be verified through current maps.",
    mapTitle: "Valeron Tower on Google Maps",
    mapText: "Use the live map to zoom, inspect C-5 access, and open directions before scheduling a site viewing.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.298358628538!2d121.07435657450776!3d14.582067385902057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98d3563a4a3%3A0xa8343ae9e8ae6d02!2sThe%20Valeron%20Tower!5e0!3m2!1sen!2sph!4v1710584617871!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Educational Institutions", items: ["Reedley International School - 400 m / 5 mins", "University of Asia and the Pacific - 2.3 km / 8 mins"] },
    { group: "Retail Establishments", items: ["SM Center Pasig - 250 m / 3 mins", "Ayala Malls The 30th - 1.9 km / 6 mins"] },
    { group: "Healthcare Facilities", items: ["The Medical City - 1.7 km / 6 mins", "Pasig City General Hospital - 3.7 km / 10 mins"] },
    { group: "Townships and Business Districts", items: ["Arcovia City - 450 m / 1 min", "Ortigas Center - 2.1 km / 9 mins"] }
  ],
  siteDevelopment: {
    title: "Valeron Tower Site Development Plan",
    paragraphs: [
      "Valeron Tower organizes lifestyle spaces across ground-floor, amenity-floor, and roof-deck development plans.",
      "The amenity mix includes pools, lounges, sky promenade, snack bar, open lawn, play spaces, and fitness/recreation zones."
    ],
    keyStats: [
      { label: "Storeys", value: "55" },
      { label: "Amenity Ratio", value: "76%" },
      { label: "Land Area", value: "8,390 sqm" },
      { label: "Target RFO", value: "July 2029" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the project AVP as a guided visual introduction to the tower, location, and amenity concept." },
    { title: "360 Property Tour", text: "Open the verified Drive-backed ViewIn360 tour when buyers want a deeper walkthrough." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360 Property Tour",
  videoTourCopy: "Watch the lightweight YouTube AVP preview, then open the verified 360 tour link only when needed.",
  videoTourImage: pasigAsset("the-valeron-tower", "sky-deck-pool.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=eRDLUXEDfAk",
  videoTourEmbedUrl: "https://www.youtube.com/embed/eRDLUXEDfAk",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=eRDLUXEDfAk", variant: "secondary" },
    { label: "Open 360 Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large tour media is linked on demand so the page stays fast on mobile.",
  amenityGroups: [
    { group: "Outdoor and Pool Amenities", items: ["Sky Deck Pool", "Leisure Pool", "Kiddie Pool", "Open Lawn", "Children's Play Area", "Sky Promenade"] },
    { group: "Indoor and Lounge Amenities", items: ["GF Reception Lobby", "7th Floor Open Lounge", "Sky Lounge", "Snack Bar", "Fitness Gym", "Entertainment Room"] },
    { group: "Recreation and Convenience", items: ["Basketball Court", "Game Area", "Convenience Store", "Property management support", "Guarded entrance and 24-hour security references"] }
  ],
  amenityNote: "Amenity names, access, operating hours, and final features must be confirmed with Luisa/DMCI Homes.",
  unitIntro: "Valeron Tower offers studio, 1BR, 2BR, 3BR, and tandem unit references. Final availability and computation must be checked with Luisa.",
  unitSections: [
    { title: "Studio Units", description: "Efficient layouts for singles, young professionals, and investors.", layouts: ["32.50 sqm", "34.50 sqm", "38.50 sqm"], rows: [
      { layout: "Studio", floorArea: "32.50 sqm", priceRange: "7.0M - 8.8M", status: "Available", monthlyDp: "21.2k - 27.0k /mo" },
      { layout: "Studio", floorArea: "34.50 sqm", priceRange: "8.2M", status: "Few left", monthlyDp: "24.9k /mo" },
      { layout: "Studio", floorArea: "38.50 sqm", priceRange: "8.6M", status: "Few left", monthlyDp: "26.3k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "Separate living and sleeping areas for individuals or couples.", layouts: ["46.50 sqm", "48.50 sqm"], rows: [
      { layout: "1BR", floorArea: "46.50 sqm", priceRange: "8.9M - 11.4M", status: "Available", monthlyDp: "27.3k - 34.9k /mo" },
      { layout: "1BR", floorArea: "48.50 sqm", priceRange: "9.4M - 11.3M", status: "Available", monthlyDp: "28.7k - 34.8k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Flexible layouts for small families, shared living, or work-from-home needs.", layouts: ["59.00 - 91.00 sqm"], rows: [
      { layout: "2BR", floorArea: "59.00 - 69.50 sqm", priceRange: "10.9M - 14.1M", status: "Available / Limited", monthlyDp: "33.4k - 43.3k /mo" },
      { layout: "2BR", floorArea: "77.50 - 91.00 sqm", priceRange: "13.9M - 16.2M", status: "Few left / Available", monthlyDp: "42.8k - 50.0k /mo" }
    ] },
    { title: "3 Bedroom and Tandem Units", description: "Larger layouts for families and buyers needing more flexible space.", layouts: ["76.00 - 84.50 sqm", "Tandem reference"], rows: [
      { layout: "3BR", floorArea: "76.00 - 84.50 sqm", priceRange: "13.7M - 16.8M", status: "Few left / Available", monthlyDp: "42.3k - 52.0k /mo" },
      { layout: "Tandem", floorArea: "For confirmation", priceRange: "Request latest", status: "For confirmation", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "Valeron Tower Floor Plans and Unit Layouts",
  floorPlansDescription: "Use these as layout references only. Request the official layout sheet for the exact unit before presentation.",
  floorPlans: [
    { title: "Studio Layout", text: "Studio layout reference.", src: pasigAsset("the-valeron-tower", "floorplan-studio.jpg") },
    { title: "1BR Layout", text: "1-bedroom layout reference.", src: pasigAsset("the-valeron-tower", "floorplan-1br.jpg") },
    { title: "2BR Layout", text: "2-bedroom layout reference.", src: pasigAsset("the-valeron-tower", "floorplan-2br.jpg") },
    { title: "3BR Layout", text: "3-bedroom layout reference.", src: pasigAsset("the-valeron-tower", "floorplan-3br.jpg") },
    { title: "Amenity Floor Plan", text: "Amenity-floor development plan reference.", src: pasigAsset("the-valeron-tower", "sdp-amenity.jpg") },
    { title: "Roof Deck Plan", text: "Roof-deck development plan reference.", src: pasigAsset("the-valeron-tower", "sdp-roof.jpg") }
  ],
  paymentTerms: {
    title: "Available Payment Terms and Sample Computation",
    text: "The supplied reference shows a standard 30% down payment deferred monthly until RFO, with balance through bank financing. No promo was listed in the supplied Valeron reference.",
    rfoSchedule: [{ label: "Target RFO", value: "July 2029" }],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Valeron West 1203B" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "32.50 sqm" },
      { label: "List Price", value: "6,990,000.00" },
      { label: "RFO Date", value: "Jul-2029" },
      { label: "Downpayment", value: "30%" },
      { label: "Number of Months", value: "35 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 62,720.31 monthly" },
      { label: "15 years", value: "7.0% rate / 48,553.55 monthly" },
      { label: "20 years", value: "7.0% rate / 41,880.66 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "6,990,000.00" },
      { label: "Regular Discount", value: "4.0% / 279,600.00" },
      { label: "Total Contract Price", value: "6,710,400.00" },
      { label: "Closing Fee", value: "10.5% / 704,592.00" },
      { label: "Total with Closing Fee", value: "7,414,992.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "30.0% / 2,013,120.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "1,983,120.00" },
      { label: "Monthly DP", value: "35 months / 56,660.57 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "70.0% / 4,697,280.00" },
      { label: "Closing Fee", value: "704,592.00" },
      { label: "Total Balance + Closing Fee", value: "5,401,872.00" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "No promos listed in the supplied Valeron reference.", "Prices, availability, terms, and financing approvals can change without prior notice."],
    promoCards: [{ title: "Standard Term", items: ["30% down payment deferred monthly until RFO", "70% balance through bank financing", "Reservation fee: PHP 30,000 for unit, PHP 10,000 for parking if applicable"] }],
    sampleAvailableComputations: [
      { type: "1BR", size: "46.50 sqm", price: "10,868,000", rfo: "Jul-2029", note: "HomeReady(TM): Not applicable" },
      { type: "2BR", size: "63.00 sqm", price: "13,270,000", rfo: "Jul-2029", note: "HomeReady(TM): Not applicable" },
      { type: "2BR", size: "65.50 sqm", price: "13,327,000", rfo: "Jul-2029", note: "HomeReady(TM): Not applicable" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Valeron Tower Unit Holding Portal",
    text: "The unit holding portal lets prospective buyers temporarily hold preferred units before proceeding to reservation, subject to the current official process.",
    steps: ["Register online", "Receive unit holding link by email", "Select up to two units", "Proceed to reservation only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Confirm computation, availability, payment method, and official requirements with Luisa before making any reservation decision."
};

export const allegraGardenPlaceDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Allegra Garden Place Pasig City",
  heroHeadline: "Allegra Garden Place by DMCI Homes",
  tagline: "Modern Moroccan-inspired high-rise living along Pasig Boulevard",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: pasigAsset("allegra-garden-place", "logo.jpg"),
  image: pasigAsset("allegra-garden-place", "hero.jpg"),
  thumbnail: pasigAsset("allegra-garden-place", "thumbnail.jpg"),
  masterPlanImage: pasigAsset("allegra-garden-place", "master-plan.jpg"),
  siteProgressImage: pasigAsset("allegra-garden-place", "site-progress.jpg"),
  gallery: [
    pasigAsset("allegra-garden-place", "gallery-1.jpg"),
    pasigAsset("allegra-garden-place", "gallery-2.jpg"),
    pasigAsset("allegra-garden-place", "gallery-3.jpg"),
    pasigAsset("allegra-garden-place", "sky-patio.jpg"),
    pasigAsset("allegra-garden-place", "lounge-area.jpg"),
    pasigAsset("allegra-garden-place", "lap-pool.jpg"),
    pasigAsset("allegra-garden-place", "play-area.jpg"),
    pasigAsset("allegra-garden-place", "multipurpose-court.jpg"),
    pasigAsset("allegra-garden-place", "entrance-gate.jpg"),
    pasigAsset("allegra-garden-place", "jogging-path.jpg"),
    pasigAsset("allegra-garden-place", "kiddie-pool.jpg"),
    pasigAsset("allegra-garden-place", "master-plan.jpg"),
    pasigAsset("allegra-garden-place", "site-progress.jpg")
  ],
  galleryLabels: [
    "Allegra Garden Place Sky Promenade",
    "Allegra Garden Place Leisure Pool",
    "Allegra Garden Place Reception Lobby",
    "Allegra Garden Place Sky Patio",
    "Allegra Garden Place Lounge Area",
    "Allegra Garden Place Lap Pool",
    "Allegra Garden Place Children's Play Area",
    "Allegra Garden Place Covered Multipurpose Court",
    "Allegra Garden Place Entrance Gate",
    "Allegra Garden Place Jogging Path",
    "Allegra Garden Place Kiddie Pool",
    "Allegra Garden Place Site Development Plan",
    "Allegra Garden Place Actual Building Reference"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "2024 - 2025",
  targetRfo: "Amina July 2024, Soraya July 2025",
  unitTypes: ["Studio", "1BR", "2BR", "3BR"],
  landArea: "12,676 sqm",
  address: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
  developmentType: "High-rise Condominiums",
  propertyType: "High-rise Condominiums",
  architecturalTheme: "Modern Moroccan Inspiration",
  priceRangeLabel: "Studio from 5.1M, 1BR from 5.0M, 2BR from 7.3M, 3BR from 11.7M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview: "Allegra Garden Place by DMCI Homes is a two-tower high-rise condominium along Pasig Boulevard in Brgy. Bagong Ilog, Pasig City. It features a modern Moroccan-inspired theme, resort-style amenities, and unit options from studio to three-bedroom references.",
  introParagraphs: [
    "Allegra Garden Place offers a Pasig Boulevard address near BGC, Ortigas, Makati, retail centers, schools, and hospitals.",
    "The development includes Amina and Soraya buildings, Moroccan-inspired architecture, and DMCI's Lumiventt planning for light and ventilation."
  ],
  highlights: [
    "Two high-rise buildings: Amina and Soraya",
    "60 floors with 55 residential floors reference",
    "Studio, 1BR, 2BR, and 3BR unit options with RFO references from July 2024 to July 2025"
  ],
  whyInvest: [
    "Pasig Boulevard location near Estancia, Ayala Malls The 30th, SM Megamall, BGC, and Ortigas routes.",
    "Ready-for-occupancy / near-RFO buyer option with actual and official project visuals.",
    "Amenities include lap pool, kiddie pool, leisure pool, fitness gym, sky lounge, jogging path, and covered multipurpose court.",
    "Official YouTube AVP, Google Maps embed, and Drive-backed 360 tour link are available for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City" },
    { label: "Lot Area", value: "12,676 sqm" },
    { label: "Development Type", value: "High-rise Condominiums" },
    { label: "Buildings", value: "2 buildings: Amina and Soraya" },
    { label: "Floors", value: "60 floors with 55 residential floors" },
    { label: "Units / Parking", value: "1,913 units and 1,392 parking slots" },
    { label: "Unit Mix", value: "Studio, 1BR, 2BR, 3BR" },
    { label: "Turnover", value: "Amina July 2024, Soraya July 2025" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "30.00 - 34.00 sqm", range: "5.1M - 6.9M", monthlyDp: "5% DP: 18.6k - 26.4k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "30.00 - 41.00 sqm", range: "5.0M - 8.2M", monthlyDp: "5% DP: 18.2k - 31.8k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "54.00 - 63.50 sqm", range: "7.3M - 10.7M", monthlyDp: "5% DP: 28.0k - 42.0k /mo", status: "Available", note: "Reference only" },
    { type: "3BR", floorArea: "83.00 sqm", range: "11.7M - 13.0M", monthlyDp: "5% DP: 46.3k - 51.9k /mo", status: "Few left", note: "Reference only" }
  ],
  summaryPricingNote: "Use these guide ranges only after confirming with Luisa because RFO inventory can move quickly.",
  locationDetails: {
    title: "Prime Location of Allegra Garden Place",
    text: "Allegra Garden Place is located along Pasig Boulevard in Brgy. Bagong Ilog, close to commercial hubs, schools, hospitals, BGC, Ortigas, and Makati routes.",
    exactAddress: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
    note: "Nearby establishments and travel references must be checked with current maps and official materials.",
    mapTitle: "Allegra Garden Place on Google Maps",
    mapText: "Use the map to zoom, inspect Pasig Boulevard access, and open live directions before scheduling a viewing.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.625515696215!2d121.0648922138399!3d14.563394989826152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95bdada688d%3A0xf70a005047faf001!2sAllegra%20Garden%20Place!5e0!3m2!1sen!2sph!4v1571739304572!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Commercial Hubs", items: ["Estancia Mall", "Ayala Malls The 30th", "Tiendesitas", "Shangri-La Plaza", "SM Megamall", "Market Market", "SM Aura"] },
    { group: "Schools", items: ["St. Paul College Pasig", "University of Asia and the Pacific", "Lourdes School of Mandaluyong", "Rizal High School", "Domuschola International School", "Treston International College", "International School Manila"] },
    { group: "Medical Institutions", items: ["Rizal Medical Center", "VRP Medical Center", "St. Luke's Medical Center", "The Medical City"] },
    { group: "Infrastructure References", items: ["Metro Manila Subway Ortigas South Station reference", "Santa Monica Bridge", "BGC-Ortigas Link Bridge"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Allegra Garden Place",
    paragraphs: [
      "Allegra Garden Place features two high-rise buildings, Amina and Soraya, with modern Moroccan-inspired architecture.",
      "The plan includes resort-style amenities, sky-level features, gardens, pools, and resident conveniences along Pasig Boulevard."
    ],
    keyStats: [
      { label: "Buildings", value: "Amina and Soraya" },
      { label: "Floors", value: "60 floors / 55 residential floors" },
      { label: "Units", value: "1,913" },
      { label: "Parking", value: "1,392 slots" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the AVP as a quick visual introduction to Allegra Garden Place and its location." },
    { title: "360 Property Tour", text: "Open the verified Drive-backed ViewIn360 link for a deeper walkthrough." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360 Property Tour",
  videoTourCopy: "Watch the YouTube AVP preview, then open the verified 360 property tour link only when needed.",
  videoTourImage: pasigAsset("allegra-garden-place", "lap-pool.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=oBzOVj3qXv4",
  videoTourEmbedUrl: "https://www.youtube.com/embed/oBzOVj3qXv4",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=oBzOVj3qXv4", variant: "secondary" },
    { label: "Open 360 Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large tour media is linked instead of auto-loaded so the page stays fast on mobile.",
  amenityGroups: [
    { group: "Indoor Amenities", items: ["Fitness Gym", "Entertainment Room", "Reception Lounge", "Snack Bar", "Covered Multipurpose Court"] },
    { group: "Outdoor Amenities", items: ["Sky Lounge", "Lap Pool", "Kiddie Pool", "Leisure Pool", "Jogging Path", "Children's Play Area", "Sky Promenade"] },
    { group: "Convenience and Security", items: ["Card-operated laundry station", "Convenience store", "Water refilling station", "Guarded gate", "24-hour surveillance references"] }
  ],
  amenityNote: "Amenity names, building access, rules, and operating schedules are subject to current administration and DMCI confirmation.",
  unitIntro: "Allegra Garden Place includes studio, 1BR, 2BR, and 3BR references. Request latest inventory because RFO units can change quickly.",
  unitSections: [
    { title: "Studio Units", description: "Studio layouts for singles, young professionals, and investors.", layouts: ["30.00 sqm", "34.00 sqm"], rows: [
      { layout: "Studio", floorArea: "30.00 sqm", priceRange: "5.1M - 6.2M", status: "Available", monthlyDp: "18.6k - 23.2k /mo" },
      { layout: "Studio", floorArea: "34.00 sqm", priceRange: "5.7M - 6.9M", status: "Available", monthlyDp: "21.4k - 26.4k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "Functional 1BR layouts for individuals or couples.", layouts: ["30.00 - 41.00 sqm"], rows: [
      { layout: "1BR", floorArea: "30.00 - 36.00 sqm", priceRange: "5.0M - 7.2M", status: "Limited / Few left", monthlyDp: "18.2k - 27.5k /mo" },
      { layout: "1BR", floorArea: "38.00 - 41.00 sqm", priceRange: "6.5M - 8.2M", status: "Available", monthlyDp: "24.8k - 31.8k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Larger layouts for small families or buyers needing more living space.", layouts: ["54.00 - 63.50 sqm"], rows: [
      { layout: "2BR", floorArea: "54.00 - 60.00 sqm", priceRange: "7.3M - 10.6M", status: "Available", monthlyDp: "28.0k - 41.8k /mo" },
      { layout: "2BR", floorArea: "63.50 sqm", priceRange: "9.3M - 10.7M", status: "Available", monthlyDp: "36.0k - 42.0k /mo" }
    ] },
    { title: "3 Bedroom Units", description: "Three-bedroom reference for larger households.", layouts: ["83.00 sqm"], rows: [
      { layout: "3BR", floorArea: "83.00 sqm", priceRange: "11.7M - 13.0M", status: "Few left", monthlyDp: "46.3k - 51.9k /mo" }
    ] }
  ],
  floorPlansTitle: "Allegra Garden Place Floor Plans",
  floorPlansDescription: "Use these unit and building floor plans as references only. Request the exact official layout sheet before buyer presentation.",
  floorPlans: [
    { title: "Studio Layout", text: "Studio unit layout reference.", src: pasigAsset("allegra-garden-place", "floorplan-studio.jpg") },
    { title: "1BR Layout", text: "1-bedroom layout reference.", src: pasigAsset("allegra-garden-place", "floorplan-1br.jpg") },
    { title: "2BR Layout", text: "2-bedroom layout reference.", src: pasigAsset("allegra-garden-place", "floorplan-2br.jpg") },
    { title: "Amina Floor Plan", text: "Amina building floor plan reference.", src: pasigAsset("allegra-garden-place", "floorplan-amina.jpg") },
    { title: "Soraya Floor Plan", text: "Soraya building floor plan reference.", src: pasigAsset("allegra-garden-place", "floorplan-soraya.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The supplied reference includes a 5% DP Chinabank promo and a 12% DP promo. Final terms must be verified before buyer presentation.",
    rfoSchedule: [
      { label: "Amina Building", value: "July 2024" },
      { label: "Soraya Building", value: "July 2025" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Amina 608" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "30.00 sqm" },
      { label: "List Price", value: "4,974,000.00" },
      { label: "RFO Date", value: "Jul-2024" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 59,710.16 monthly" },
      { label: "15 years", value: "7.0% rate / 46,223.31 monthly" },
      { label: "20 years", value: "7.0% rate / 39,870.67 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "4,974,000.00" },
      { label: "Special Discount", value: "2.0% / 99,480.00" },
      { label: "Total Contract Price", value: "4,874,520.00" },
      { label: "Closing Fee", value: "10.5% / 511,824.60" },
      { label: "Total with Closing Fee", value: "5,386,344.60" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 243,726.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "213,726.00" },
      { label: "Monthly DP", value: "12 months / 17,810.50 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 4,630,794.00" },
      { label: "Closing Fee", value: "511,824.60" },
      { label: "Total Balance + Closing Fee", value: "5,142,618.60" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and scope can change without prior notice.", "Rent-to-own notes must be confirmed before use."],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "1.0% special discount on DP promo term", "Down payment over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "2BR", size: "54.00 sqm", price: "7,326,000", rfo: "Jul-2024", note: "Rent-to-Own PHP 30,000 / mo" },
      { type: "1BR", size: "30.00 sqm", price: "4,974,000", rfo: "Jul-2024", note: "Rent-to-Own PHP 25,000 / mo" },
      { type: "2BR", size: "60.00 sqm", price: "9,348,000", rfo: "Jul-2024", note: "Rent-to-Own PHP 30,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Allegra Garden Place",
    text: "The unit holding portal allows qualified buyers to temporarily hold preferred units before proceeding with reservation, subject to current availability.",
    steps: ["Register online", "Submit valid IDs and Philippine TIN", "Complete the online reservation agreement form", "Pay reservation fee only through approved payment channels"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Confirm computation, availability, rent-to-own terms, payment method, and official requirements with Luisa before making any reservation decision."
};

export const prismaResidencesDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Prisma Residences DMCI Pasig",
  heroHeadline: "Prisma Residences by DMCI Homes",
  tagline: "Ready-for-occupancy modern tropical living along Pasig Boulevard",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: pasigAsset("prisma-residences", "logo.jpg"),
  image: pasigAsset("prisma-residences", "hero.jpg"),
  thumbnail: pasigAsset("prisma-residences", "thumbnail.jpg"),
  masterPlanImage: pasigAsset("prisma-residences", "master-plan.jpg"),
  siteProgressImage: pasigAsset("prisma-residences", "site-progress.jpg"),
  gallery: [
    pasigAsset("prisma-residences", "gallery-1.jpg"),
    pasigAsset("prisma-residences", "gallery-2.jpg"),
    pasigAsset("prisma-residences", "gallery-3.jpg"),
    pasigAsset("prisma-residences", "playground.jpg"),
    pasigAsset("prisma-residences", "jogging-path.jpg"),
    pasigAsset("prisma-residences", "kiddie-pool.jpg"),
    pasigAsset("prisma-residences", "main-entrance.jpg"),
    pasigAsset("prisma-residences", "open-lawn.jpg"),
    pasigAsset("prisma-residences", "roof-deck.jpg"),
    pasigAsset("prisma-residences", "actual-1.jpg"),
    pasigAsset("prisma-residences", "actual-2.jpg"),
    pasigAsset("prisma-residences", "location-map.jpg"),
    pasigAsset("prisma-residences", "master-plan.jpg")
  ],
  galleryLabels: [
    "Prisma Residences Lap Pool",
    "Prisma Residences Lounge Pool",
    "Prisma Residences Gazebo Cabana",
    "Prisma Residences Children's Playground",
    "Prisma Residences Jogging and Biking Path",
    "Prisma Residences Kiddie Pool",
    "Prisma Residences Main Entrance",
    "Prisma Residences Open Lawn",
    "Prisma Residences Roof Deck",
    "Prisma Residences Actual Photo",
    "Prisma Residences Actual Photo",
    "Prisma Residences Location Map",
    "Prisma Residences Site Development Plan"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready",
  targetRfo: "Astra, Celeste, and Kiran RFO references",
  unitTypes: ["1BR", "2BR", "3BR", "4BR Tandem"],
  landArea: "20,380 sqm",
  address: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
  developmentType: "High-rise Condominium",
  propertyType: "High-rise Condominium",
  architecturalTheme: "Modern Tropical",
  priceRangeLabel: "1BR from 5.1M, 2BR from 7.6M, 3BR from 11.0M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview: "Prisma Residences by DMCI Homes is a ready-for-occupancy high-rise condominium community along Pasig Boulevard, Brgy. Bagong Ilog, Pasig City. It features Astra, Celeste, and Kiran buildings, modern tropical architecture, extensive amenities, and unit options from 1BR to 3BR with tandem references.",
  introParagraphs: [
    "Prisma Residences offers an RFO Pasig address near BGC and Ortigas routes, with resort-style amenities and completed community references.",
    "The project includes Astra, Celeste, and Kiran buildings, with official visuals, actual photos, Google Maps embed, YouTube AVP, and multiple ViewIn360 tour links."
  ],
  highlights: [
    "Ready-for-occupancy DMCI Homes high-rise community along Pasig Boulevard",
    "Three buildings: Astra, Celeste, and Kiran",
    "1BR, 2BR, 3BR, and 4BR tandem references with rent-to-own notes in supplied material"
  ],
  whyInvest: [
    "RFO Pasig option with actual project photos and full amenity visuals.",
    "Modern tropical planning with Lumiventt-style floor references and multiple buildings.",
    "Near BGC and Ortigas access routes, with daily conveniences along Pasig Boulevard.",
    "Official YouTube AVP, exact Google Maps embed, and Drive-backed comprehensive/model-unit 360 links are wired."
  ],
  projectFacts: [
    { label: "Location", value: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City" },
    { label: "Land Area", value: "20,380 sqm" },
    { label: "Development Type", value: "High-rise Condominium" },
    { label: "Architectural Theme", value: "Modern Tropical" },
    { label: "Buildings", value: "Astra, Celeste, Kiran" },
    { label: "Levels", value: "Astra 42, Celeste 41, Kiran 45" },
    { label: "Parking", value: "6-level basement parking for each building" },
    { label: "Unit Types", value: "1BR, 2BR, 3BR, 4BR Tandem" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "28.00 - 34.00 sqm", range: "5.1M - 5.9M", monthlyDp: "5% DP: 18.7k - 22.3k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "56.00 - 66.50 sqm", range: "7.6M - 9.5M", monthlyDp: "5% DP: 29.3k - 37.1k /mo", status: "Available", note: "Reference only" },
    { type: "3BR", floorArea: "83.50 sqm", range: "11.0M - 11.7M", monthlyDp: "5% DP: 43.2k - 46.2k /mo", status: "Few left", note: "Reference only" }
  ],
  summaryPricingNote: "Use these RFO guide ranges only. Request Luisa's latest availability, rent-to-own terms, and computation before presentation.",
  locationDetails: {
    title: "Prime Location of Prisma Residences",
    text: "Prisma Residences is located along Pasig Boulevard in Brgy. Bagong Ilog, with access to BGC, Ortigas, commercial centers, schools, hospitals, and daily transport routes.",
    exactAddress: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
    note: "Travel references should be confirmed through current maps before site viewing.",
    mapTitle: "Prisma Residences on Google Maps",
    mapText: "Use the live map to inspect Pasig Boulevard access and open turn-by-turn directions.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.62610577957!2d121.06569881384002!3d14.563361289826235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c864c8d01471%3A0xc5ef7af1ad1dc4c9!2sPrisma%20Residences!5e0!3m2!1sen!2sph!4v1582183035794!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Business District Access", items: ["BGC access reference", "Ortigas Center access reference", "Pasig Boulevard route options"] },
    { group: "Commercial and Daily Needs", items: ["Retail centers and neighborhood services along Pasig/BGC/Ortigas routes", "Dining and supermarket options subject to current map check"] },
    { group: "Schools and Institutions", items: ["Nearby Pasig, Mandaluyong, Taguig, and Ortigas school options for buyer verification"] },
    { group: "Healthcare", items: ["Major hospitals in Pasig, Ortigas, and BGC corridors for current map verification"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Prisma Residences",
    paragraphs: [
      "Prisma Residences spans 20,380 sqm and includes Astra, Celeste, and Kiran high-rise buildings.",
      "The community includes outdoor amenities, indoor amenities, and practical resident facilities for RFO living."
    ],
    keyStats: [
      { label: "Land Area", value: "20,380 sqm" },
      { label: "Buildings", value: "Astra, Celeste, Kiran" },
      { label: "Astra", value: "RFO / Apr 2022 reference" },
      { label: "Celeste", value: "RFO / Apr 2023 reference" },
      { label: "Kiran", value: "RFO references through Apr 2025" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official AVP as a quick introduction to the community, amenities, and location." },
    { title: "Comprehensive and Model-Unit Tours", text: "Open the verified ViewIn360 comprehensive property tour, 2BR model, or 3BR model unit when needed." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360 Tours",
  videoTourCopy: "Watch the YouTube AVP preview, then open the comprehensive property tour or model-unit 360 links on demand.",
  videoTourImage: pasigAsset("prisma-residences", "gallery-1.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=J4DKUxkPkKk",
  videoTourEmbedUrl: "https://www.youtube.com/embed/J4DKUxkPkKk",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=J4DKUxkPkKk", variant: "secondary" },
    { label: "Open Property 360 Tour", url: "", variant: "ghost" },
    { label: "Open 2BR 360 Tour", url: "", variant: "ghost" },
    { label: "Open 3BR 360 Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large 360 tours are linked instead of auto-loaded so mobile performance stays light.",
  amenityGroups: [
    { group: "Outdoor Amenities", items: ["Lap Pool", "Lounge Pool", "Kiddie Pool", "Playground", "Basketball Court", "Picnic Area", "Garden", "Jogging/Biking Path", "Outdoor Fitness Area"] },
    { group: "Indoor Amenities", items: ["Fitness Gym", "Function Hall", "Sky Lounge", "Game Room", "Music Room", "Audio-Visual Room", "Multi-purpose Court"] },
    { group: "Facilities", items: ["Reception Lobby", "Mail Area", "Convenience Store", "Laundry Station", "Water Station", "Guarded entrance with 24-hour security", "WiFi access in common areas", "CCTV provision references"] }
  ],
  amenityNote: "Amenity availability, rules, and access are subject to current building administration and DMCI confirmation.",
  unitIntro: "Prisma Residences includes 1BR, 2BR, 3BR, and 4BR tandem references. Confirm current inventory and rent-to-own notes with Luisa.",
  unitSections: [
    { title: "1 Bedroom Units", description: "Compact RFO layouts for singles, couples, or investors.", layouts: ["28.00 sqm", "32.00 sqm", "34.00 sqm"], rows: [
      { layout: "1BR", floorArea: "28.00 sqm", priceRange: "5.1M - 5.5M", status: "Available", monthlyDp: "18.7k - 20.5k /mo" },
      { layout: "1BR", floorArea: "32.00 sqm", priceRange: "5.3M - 5.9M", status: "Available", monthlyDp: "19.5k - 22.3k /mo" },
      { layout: "1BR", floorArea: "34.00 sqm", priceRange: "5.7M", status: "Few left", monthlyDp: "21.2k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Larger RFO layouts for small families or buyers needing an extra room.", layouts: ["56.00 sqm", "66.50 sqm"], rows: [
      { layout: "2BR", floorArea: "56.00 sqm", priceRange: "7.6M - 9.0M", status: "Available", monthlyDp: "29.3k - 34.9k /mo" },
      { layout: "2BR", floorArea: "66.50 sqm", priceRange: "9.5M", status: "Few left", monthlyDp: "37.1k /mo" }
    ] },
    { title: "3 Bedroom and Tandem Units", description: "Larger references for families and buyers needing more flexible space.", layouts: ["83.50 sqm", "4BR Tandem"], rows: [
      { layout: "3BR", floorArea: "83.50 sqm", priceRange: "11.0M - 11.7M", status: "Few left", monthlyDp: "43.2k - 46.2k /mo" },
      { layout: "4BR Tandem", floorArea: "For confirmation", priceRange: "Request latest", status: "For confirmation", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "Prisma Residences Floor Plans",
  floorPlansDescription: "Use these as layout references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "1BR Kiran Layout", text: "1-bedroom Kiran layout reference.", src: pasigAsset("prisma-residences", "floorplan-1br.jpg") },
    { title: "2BR Kiran Layout", text: "2-bedroom Kiran layout reference.", src: pasigAsset("prisma-residences", "floorplan-2br.jpg") },
    { title: "3BR End Unit", text: "Three-bedroom end-unit layout reference.", src: pasigAsset("prisma-residences", "floorplan-3br.jpg") },
    { title: "4BR Tandem Unit", text: "Tandem-unit layout reference.", src: pasigAsset("prisma-residences", "floorplan-tandem.jpg") },
    { title: "Standard Floor Plan", text: "Standard floor planning reference.", src: pasigAsset("prisma-residences", "floorplan-standard.jpg") },
    { title: "Atrium Floor Plan", text: "Atrium floor planning reference.", src: pasigAsset("prisma-residences", "floorplan-atrium.jpg") },
    { title: "Sky Patio Floor Plan", text: "Sky patio floor planning reference.", src: pasigAsset("prisma-residences", "floorplan-sky-patio.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Computations",
    text: "The supplied reference includes a 5% DP Chinabank promo and a 12% DP promo. Final promo scope, rent-to-own options, and bank approvals must be verified.",
    rfoSchedule: [
      { label: "Astra", value: "Apr 2022" },
      { label: "Celeste", value: "Apr 2023" },
      { label: "Kiran", value: "RFO references through Apr 2025" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Kiran GF12" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "28.00 sqm" },
      { label: "List Price", value: "5,082,000.00" },
      { label: "RFO Date", value: "Apr-2025" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 61,006.64 monthly" },
      { label: "15 years", value: "7.0% rate / 47,226.95 monthly" },
      { label: "20 years", value: "7.0% rate / 40,736.38 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "5,082,000.00" },
      { label: "Special Discount", value: "2.0% / 101,640.00" },
      { label: "Total Contract Price", value: "4,980,360.00" },
      { label: "Closing Fee", value: "10.5% / 522,937.80" },
      { label: "Total with Closing Fee", value: "5,503,297.80" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 249,018.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "219,018.00" },
      { label: "Monthly DP", value: "12 months / 18,251.50 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 4,731,342.00" },
      { label: "Closing Fee", value: "522,937.80" },
      { label: "Total Balance + Closing Fee", value: "5,254,279.80" }
    ],
    importantNotes: ["Sample Computation Only / Subject to Confirmation", "Promo terms and availability can change without prior notice.", "Rent-to-own notes require confirmation before presentation."],
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "Flexible down payment over 40 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "3BR", size: "83.50 sqm", price: "10,973,000", rfo: "Apr-2022", note: "Rent-to-Own PHP 40,000 / mo" },
      { type: "1BR", size: "34.00 sqm", price: "5,696,000", rfo: "Apr-2022", note: "Rent-to-Own PHP 22,000 / mo" },
      { type: "1BR", size: "28.00 sqm", price: "5,398,000", rfo: "Apr-2022", note: "Rent-to-Own PHP 22,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Prisma Residences",
    text: "The unit holding portal allows prospective buyers to register and temporarily hold available units for review before reservation.",
    steps: ["Register online", "Submit valid IDs and Philippine TIN", "Complete the online reservation agreement form", "Pay reservation fee only through approved payment channels"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationNote: "Confirm computation, availability, rent-to-own terms, payment method, and official requirements with Luisa before making any reservation decision."
};
