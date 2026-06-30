// Future official/client asset convention:
// public/assets/projects/[project-slug]/hero.jpg
// public/assets/projects/[project-slug]/thumbnail.jpg
// public/assets/projects/[project-slug]/gallery-1.jpg
// public/assets/projects/[project-slug]/gallery-2.jpg
// public/assets/projects/[project-slug]/gallery-3.jpg
// public/assets/projects/[project-slug]/master-plan.jpg
// public/assets/projects/[project-slug]/site-progress.jpg
// public/assets/projects/[project-slug]/brochure.pdf

const baseProjects = [
  ["kalea-heights", "Kalea Heights", "Cebu", "Cebu", "Preselling", "2029", "High-rise Condo", "High-rise residential development", "Modern tropical resort-inspired", "Cebu City, Cebu", ["Studio", "1BR", "2BR"], ["Own Use", "Investment", "OFW Friendly"], true],
  ["one-delta-terraces", "One Delta Terraces", "Quezon City", "Quezon City", "New", "2029", "High-rise Condo", "Urban residential tower", "Contemporary city living", "Quezon City", ["1BR", "2BR", "3BR"], ["Family", "Investment"], true],
  ["moncello-crest", "Moncello Crest", "Baguio / Benguet", "Benguet", "Coming Soon", "2030", "Leisure Residence", "Leisure residential community", "Mountain retreat-inspired", "Benguet", ["1BR", "2BR"], ["Own Use", "Investment"], false],
  ["valeron-tower", "Valeron Tower", "Pasig", "Pasig", "Preselling", "2028", "High-rise Condo", "Mixed urban residential tower", "Modern metropolitan", "Pasig City", ["Studio", "1BR", "2BR"], ["Rental", "Investment"], true],
  ["solmera-coast", "Solmera Coast", "Batangas", "San Juan", "Preselling", "2028", "Leisure Residence", "Coastal leisure residence", "Resort-inspired coastal", "San Juan, Batangas", ["1BR", "2BR", "3BR"], ["Own Use", "Family", "Investment"], true],
  ["anissa-heights", "Anissa Heights", "Pasay", "Pasay City", "Preselling", "2028", "High-rise Condominium", "High-rise Condominium", "Modern Contemporary", "P. Zamora St., San Roque, Pasay City", ["Studio", "1BR"], ["Own Use", "Investment", "OFW Friendly"], false],
  ["mulberry-place-2", "Mulberry Place 2", "Taguig", "Taguig City", "RFO / Preselling Phase 2", "RFO / 2026-2028 Phase 2", "Mid Rise and High Rise Condominiums", "Mid Rise Condominiums, High Rise Condominiums", "Asian Tropical", "Acacia Estates, Taguig City", ["2BR", "3BR", "4BR"], ["Family", "Own Use"], true],
  ["the-calinea-tower", "The Calinea Tower", "Caloocan", "Caloocan City", "Preselling", "2028", "High Rise Condominium", "High Rise Condominium", "Modern Urban / For confirmation", "M.H. Del Pilar St., Grace Park, Caloocan City", ["Studio", "1BR", "2BR", "3BR"], ["Investment", "Rental"], false],
  ["sage-residences", "Sage Residences", "Mandaluyong", "Mandaluyong City", "Preselling", "2028", "High Rise Condominium", "High Rise Condominium", "Contemporary / For confirmation", "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City", ["Studio", "1BR", "2BR", "3BR"], ["Own Use", "Investment"], false],
  ["fortis-residences", "Fortis Residences", "Makati", "Makati", "Preselling", "2027", "High-rise Condo", "Premium urban residential tower", "Contemporary premium", "Makati City", ["1BR", "2BR", "3BR"], ["Investment", "Rental"], true],
  ["alea-residences", "Alea Residences", "Cavite", "Bacoor", "RFO", "Ready", "Mid-rise Condo", "Mid-rise residential enclave", "Neo-Asian garden community", "Bacoor, Cavite", ["2BR", "3BR"], ["Family", "Own Use"], false],
  ["bristle-ridge", "Bristle Ridge", "Baguio / Benguet", "Baguio", "RFO", "Ready", "Leisure Residence", "Leisure residential community", "Mountain lodge-inspired", "Baguio City", ["1BR", "2BR", "3BR"], ["Own Use", "Investment"], false],
  ["willow-park-homes", "Willow Park Homes", "Cavite", "Cavite", "Preselling", "2029", "House & Lot", "House and lot community", "Suburban family living", "Cavite", ["House & Lot", "Lot"], ["Family", "Own Use"], true],
  ["verdon-parc", "Verdon Parc", "Davao", "Davao", "RFO", "Ready", "High-rise Condo", "High-rise residential community", "Urban resort-inspired", "Davao City", ["1BR", "2BR", "3BR"], ["Own Use", "Investment"], false],
  ["maricielo-villas", "Maricielo Villas", "Paranaque", "Paranaque", "RFO", "Ready", "Mid-rise Condo", "Mid-rise residential community", "Spanish-inspired residential enclave", "Paranaque City", ["2BR", "3BR"], ["Family", "Own Use"], false],
  ["brio-tower", "Brio Tower", "Makati", "Makati", "RFO", "Ready", "High-rise Condo", "Urban residential tower", "Contemporary city living", "Makati City", ["1BR", "2BR"], ["Investment", "Rental"], false],
  ["torre-de-manila", "Torre de Manila", "Manila", "Manila", "RFO", "Ready", "High-rise Condo", "High-rise city residence", "Modern Manila landmark living", "Manila", ["Studio", "1BR", "2BR"], ["Rental", "Investment"], false],
  ["rhapsody-residences", "Rhapsody Residences", "Muntinlupa", "Muntinlupa", "RFO", "Ready", "Mid-rise Condo", "Mid-rise residential community", "Resort-inspired suburban", "Muntinlupa City", ["2BR", "3BR"], ["Family", "Own Use"], false]
];

const directoryOrder = {
  "kalea-heights": 1,
  "one-delta-terraces": 2,
  "valeron-tower": 3,
  "solmera-coast": 4,
  "mulberry-place-2": 5,
  "fortis-residences": 6,
  "anissa-heights": 7,
  "the-calinea-tower": 8,
  "sage-residences": 9,
  "alea-residences": 10,
  "bristle-ridge": 11,
  "verdon-parc": 12,
  "moncello-crest": 13,
  "willow-park-homes": 14,
  "maricielo-villas": 15,
  "brio-tower": 16,
  "torre-de-manila": 17,
  "rhapsody-residences": 18
};

const genericWhyInvest = [
  "Location access for daily needs, work, school, and lifestyle destinations",
  "DMCI-style residential planning with open spaces and community amenities",
  "Unit options for end-use, family use, rental, or long-term investment comparison",
  "Broker-guided computation and availability checking through Luisa Corral"
];

const genericAmenities = ["Pool area", "Fitness space", "Resident lounge", "Landscaped open spaces", "Function room", "Children's play area"];
const genericLandmarks = ["Business districts", "Schools", "Retail hubs", "Transport access"];
const overviewFallback =
  "This project is included in Luisa Corral's buyer assistance directory for clients comparing DMCI Homes options. Request the latest computation, current availability, and project presentation before making decisions.";
const locationFallback =
  "Exact map, nearby landmarks, and travel references can be added after official assets/content are approved.";

function assetPath(slug, file) {
  return `/assets/projects/${slug}/${file}`;
}

function inventory(unitTypes) {
  return unitTypes.map((type) => ({
    type,
    floorArea: "For confirmation",
    indicativeRange: "Request latest computation",
    status: "Ask for latest availability",
    availability: "Ask for latest availability",
    computation: "Request latest computation"
  }));
}

const globalDisclaimer = "Prices, availability, promos, payment terms, unit details, and turnover schedules are subject to change and final confirmation. This website is maintained for buyer assistance and inquiry purposes.";

const anissaHeightsDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  name: "Anissa Heights",
  tagline: "Modern transit-oriented living at the heart of Pasay.",
  city: "Pasay City",
  location: "Pasay",
  status: "Preselling",
  propertyType: "High-rise Condominium",
  developmentType: "High-rise Condominium",
  architecturalTheme: "Modern Contemporary",
  address: "P. Zamora St., San Roque, Pasay City",
  landArea: "4,001 sqm",
  turnoverYear: "2028",
  targetRfo: "July 2028",
  unitTypes: ["Studio", "1BR"],
  priceRangeLabel: "PHP 3.1M - PHP 3.6M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, fit-out options, turnover, and payment details must be confirmed with Luisa before deciding.",
  overview:
    "Anissa Heights by DMCI Homes is a high-rise condominium development located along P. Zamora St., San Roque, Pasay City. This buyer-assistance reference page highlights its transit-oriented location, compact Studio and 1BR unit options, resort-inspired amenities, and access to EDSA, Makati CBD, Bay City / MOA area, schools, hospitals, and retail destinations.",
  introParagraphs: [
    "Anissa Heights by DMCI Homes is a high-rise condominium development in Pasay City, located along P. Zamora St., San Roque, Pasay City.",
    "The source positions Anissa Heights as a transit-oriented address, noting it is about 1 km from MRT Taft Avenue Station and LRT EDSA Station. Distances and travel times are reference estimates only and should be verified with current maps before viewing or reservation.",
    "The project offers access to EDSA, Makati CBD, Bay City / MOA area, schools, hospitals, and retail destinations, with resort-inspired amenities, thoughtfully designed spaces, and compact urban units.",
    "Anissa Heights offers Studio and 1BR unit options only. It is positioned for investors, end-users, young professionals, students, commuters, and starting families comparing Pasay, Makati, and Bay Area access.",
    "All pricing, availability, promos, payment terms, fit-out options, computations, turnover, and unit details shown here are reference-only. Request the latest computation and confirmed availability from Luisa before deciding."
  ],
  projectFacts: [
    { label: "Location", value: "P. Zamora St., San Roque, Pasay City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Lot Area", value: "4,001 sqm" },
    { label: "Type of Development", value: "High-rise Condominium" },
    { label: "Number of Buildings", value: "1" },
    { label: "Number of Floors", value: "34 storeys" },
    { label: "Unit Mix", value: "Studio and 1-Bedroom" },
    { label: "Amenity and Open Space Ratio", value: "40%" },
    { label: "Turnover Date", value: "July 2028" }
  ],
  summaryPricing: [
    { type: "Studio", size: "16.00 - 26.00 sqm", status: "Ask Luisa to confirm availability", price: "PHP 3.1M - PHP 3.5M", monthlyDp: "20% DP: PHP 24.6k - PHP 27.9k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", size: "27.50 sqm", status: "Ask Luisa to confirm current availability", price: "PHP 3.6M", monthlyDp: "20% DP: PHP 28.8k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  summaryPricingNote: "Monthly DP ranges are guide values from the buyer guide and may vary by unit, term, fit-out option, current availability, and latest developer computation.",
  locationDetails: {
    title: "Anissa Heights: Prime Location in Metro Manila",
    text: "Anissa Heights is located on P. Zamora St., San Roque, Pasay City, with convenient access to EDSA, Makati CBD, Bay City / MOA area, and major rail connections. The source notes proximity to MRT Taft Avenue Station and LRT EDSA Station, making it suitable for buyers comparing transit-oriented living in Pasay.",
    exactAddress: "P. Zamora St., San Roque, Pasay City",
    note: "Distances and travel times are reference estimates only and should be verified with current maps before viewing or reservation."
  },
  nearbyDestinations: [
    { group: "Schools", items: ["St. Mary's Academy of Pasay - 600 m / 4 mins", "City University of Pasay - 1 km / 5 mins", "AMA School of Medicine - 1.7 km / 9 mins", "MMS Asia International School - 2.1 km / 9 mins", "St. Scholastica's College - Manila - 2.4 km / 10 mins", "De La Salle-College of Saint Benilde - 2.4 km / 10 mins", "De La Salle University - Taft - 2.6 km / 10 mins", "Don Bosco Makati - 2.1 km / 12 mins", "Asia Pacific College - 2.1 km / 12 mins", "Assumption College - 3.1 km / 14 mins", "National University - MOA Campus - 3.5 km / 14 mins", "Reach International School - 3.5 km / 15 mins", "Colegio San Agustin - Makati - 3.9 km / 18 mins"] },
    { group: "Retail Establishments", items: ["Metro Point Mall - 750 m / 5 mins", "Victory Pasay Mall - 800 m / 5 mins", "Cash and Carry - 2.3 km / 10 mins", "W Mall - 2.6 km / 10 mins", "WalterMart-Makati - 1.9 km / 13 mins", "SM Mall of Asia - 3.3 km / 13 mins", "Ayala Malls - Manila Bay - 3.4 km / 13 mins", "Greenbelt - 2.8 km / 15 mins", "Landmark - 3.1 km / 15 mins", "Glorietta - 3.4 km / 15 mins", "Green Mall - 3.1 km / 15 mins", "SM Makati - 3.6 km / 15 mins", "Shopwise Makati - 3.6 km / 16 mins"] },
    { group: "Health Care Establishments", items: ["Pasay City General Hospital - 800 m / 5 mins", "St. Clare's Medical Center - 2.5 km / 10 mins", "Makati Medical Center - 3.0 km / 13 mins", "Healthkard Hospital - 2.9 km / 15 mins", "Philippine General Hospital - 4.4 km / 15 mins"] },
    { group: "Transport Access", items: ["MRT Taft Avenue Station - approx. 1 km / For confirmation", "LRT EDSA Station - approx. 1 km / For confirmation", "EDSA access - For confirmation", "Makati CBD access - For confirmation", "Bay City / MOA area access - For confirmation"] }
  ],
  whyInvest: [
    "Transit-oriented Pasay location for buyers comparing MRT, LRT, EDSA, Makati CBD, and Bay City / MOA access",
    "Compact Studio and 1BR options for end-users, students, commuters, starting families, and investors",
    "Resort-inspired amenities and daily convenience facilities in a high-rise setting",
    "Broker-assisted computation, availability checking, reservation guidance, and viewing coordination through Luisa"
  ],
  amenities: ["Drop-Off Area", "Elevator Lobby", "Reception Lounge", "Reception Lobby", "Roof Deck", "Sky Promenade", "Sky Lounge", "Amenity Deck", "Landscaped Garden", "Leisure Pool", "Kiddie Pool", "Fitness Gym", "Children's Play Area", "Shooting Court", "Laundry Station", "Convenience Store", "Water Station"],
  amenityGroups: [
    { title: "Arrival and Lobby", items: ["Drop-Off Area", "Elevator Lobby", "Reception Lounge", "Reception Lobby"] },
    { title: "Roof Deck and Sky Spaces", items: ["Roof Deck", "Sky Promenade", "Sky Lounge"] },
    { title: "Amenity Deck and Outdoor Spaces", items: ["Amenity Deck", "Landscaped Garden"] },
    { title: "Pools and Leisure", items: ["Leisure Pool", "Kiddie Pool"] },
    { title: "Fitness, Play, and Active Spaces", items: ["Fitness Gym", "Children's Play Area", "Shooting Court"] },
    { title: "Daily Convenience", items: ["Laundry Station", "Convenience Store", "Water Station"] }
  ],
  amenityNote: "Amenities are based on the buyer guide and must be confirmed with the latest official project materials.",
  siteDevelopment: {
    title: "Anissa Heights: Site Development Overview",
    paragraphs: [
      "Anissa Heights features a single high-rise tower with 34 storeys of residential space.",
      "The development includes an expansive amenity floor on the 6th level, five podium levels, and a roof deck.",
      "Its site planning supports compact, transit-oriented city living with amenities for recreation, wellness, and everyday convenience.",
      "Site development details, final project materials, building placement, and final amenities must be confirmed with official project materials."
    ],
    keyStats: [
      { label: "Lot Area", value: "4,001 sqm lot area" },
      { label: "Building", value: "1 high-rise building" },
      { label: "Storeys", value: "34 storeys" },
      { label: "Amenity Level", value: "6th floor amenity level" },
      { label: "Podium", value: "5 podium levels" },
      { label: "Roof", value: "Roof deck" },
      { label: "Unit Mix", value: "Studio and 1BR unit mix" },
      { label: "Open Space", value: "40% amenity and open space ratio" }
    ]
  },
  masterPlanImage: assetPath("anissa-heights", "master-plan.jpg"),
  siteProgressImage: assetPath("anissa-heights", "site-progress.jpg"),
  viewHighlights: [
    "360-degree virtual tour support",
    "Transit-oriented Pasay location",
    "Modern Contemporary high-rise living",
    "Amenity floor, roof deck, and sky lounge perspectives",
    "Access to MRT Taft, LRT EDSA, Makati CBD, and Bay City / MOA area"
  ],
  videoTourTitle: "Explore Anissa Heights: A 360 Virtual Tour",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  videoTourUrl: "",
  unitIntro: "Anissa Heights offers Studio and 1BR units designed for compact urban living in Pasay. Unit details, availability, pricing, fit-out options, and computations must be confirmed before reservation.",
  unitInventoryPreview: [
    { type: "Studio", floorArea: "16.00 - 26.00 sqm", indicativeRange: "PHP 3.1M - PHP 3.5M reference range", status: "Ask for latest availability" },
    { type: "1BR", floorArea: "27.50 sqm", indicativeRange: "PHP 3.6M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "Studio Units",
      description: "Studio units are designed for young professionals, students, commuters, investors, and starting families who want an efficient home base near transit, schools, retail destinations, and business districts.",
      layouts: ["Studio A", "Studio B", "Studio C", "Studio D", "Studio E", "Studio F", "Studio G"],
      rows: [
        { layout: "STUDIO", floorArea: "16.00 sqm", status: "Limited", priceRange: "PHP 3.1M", monthlyDp: "20% DP: PHP 24.6k/mo" },
        { layout: "STUDIO", floorArea: "17.00 sqm", status: "Few left", priceRange: "PHP 3.2M", monthlyDp: "20% DP: PHP 25.0k/mo" },
        { layout: "STUDIO", floorArea: "17.50 sqm", status: "Few left", priceRange: "PHP 3.2M", monthlyDp: "20% DP: PHP 25.3k/mo" },
        { layout: "STUDIO", floorArea: "18.00 sqm", status: "Limited", priceRange: "PHP 3.2M", monthlyDp: "20% DP: PHP 25.5k/mo" },
        { layout: "STUDIO", floorArea: "21.50 sqm", status: "Few left", priceRange: "PHP 3.3M", monthlyDp: "20% DP: PHP 26.3k/mo" },
        { layout: "STUDIO", floorArea: "23.00 sqm", status: "Few left", priceRange: "PHP 3.4M", monthlyDp: "20% DP: PHP 27.0k/mo" },
        { layout: "STUDIO", floorArea: "26.00 sqm", status: "Limited", priceRange: "PHP 3.5M", monthlyDp: "20% DP: PHP 27.9k/mo" }
      ]
    },
    {
      title: "1-Bedroom Units",
      description: "1BR units are ideal for buyers who want more room, with separate living and sleeping areas for added privacy and comfort.",
      layouts: ["1BR"],
      rows: [
        { layout: "1BR", floorArea: "27.50 sqm", status: "Few left", priceRange: "PHP 3.6M", monthlyDp: "20% DP: PHP 28.8k/mo" }
      ]
    }
  ],
  floorPlansTitle: "Anissa Heights: Floor Plan Highlights",
  floorPlansDescription: "Anissa Heights offers studio and 1-bedroom floor plan options designed for modern city living. The 6th floor is dedicated to amenities, including lifestyle and wellness spaces. Floor plan images, unit cuts, final unit details, fit-out options, and deliverables must be confirmed with the latest official project materials.",
  floorPlans: [
    { title: "Anissa Building Floor Plan", text: "Request the latest Anissa Building floor plan sheet from Luisa before comparing units." },
    { title: "Studio Floor Plans", text: "Studio floor plan images and unit cuts are reference-only until confirmed with official project materials." },
    { title: "1BR Floor Plan", text: "1BR floor plan details, deliverables, and fit-out options must be confirmed before deciding." },
    { title: "6th Floor Amenity Plan", text: "The 6th floor amenity plan includes lifestyle and wellness spaces, subject to latest official confirmation." }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "Anissa Heights offers flexible payment terms for buyers comparing ownership options in Pasay. The reference sample below shows a 20% down payment payable over 24 months with the remaining 80% through bank financing. Terms, promos, discounts, closing fees, monthly payments, financing, fit-out costs, and availability must be confirmed with Luisa before deciding.",
    importantNotes: ["Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, fit-out costs, turnover, and availability may change. Request the latest computation from Luisa before deciding."],
    sampleComputation: [
      { label: "Unit", value: "C-Anissa 820" }, { label: "Type", value: "STUDIO" }, { label: "Size", value: "16.00 sqm" }, { label: "List Price", value: "PHP 3,098,600.00" }, { label: "RFO Date", value: "Jul 2028" }, { label: "Selected Downpayment", value: "20%" }, { label: "Number of Months to Pay", value: "24 months" }, { label: "Financing", value: "20% DP, 80% Bank Financing" }
    ],
    contractBreakdown: [
      { label: "Special Discount", value: "0% / PHP 0.00" }, { label: "Net", value: "PHP 3,098,600.00" }, { label: "Regular Discount", value: "0.0% / PHP 0.00" }, { label: "Additional Discount", value: "0% / PHP 0.00" }, { label: "Total Contract Price", value: "PHP 3,098,600.00" }, { label: "Closing Fee", value: "10.5% / PHP 325,353.00" }, { label: "Total with Closing Fee", value: "PHP 3,423,953.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "20% / PHP 619,720.00" }, { label: "Less Reservation Fee", value: "PHP 30,000.00" }, { label: "Net Downpayment", value: "PHP 589,720.00" }, { label: "Monthly DP", value: "24 months / PHP 24,571.67/mo" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "80% / PHP 2,478,880.00" }, { label: "Closing Fee", value: "PHP 325,353.00" }, { label: "Total Balance + Closing Fee", value: "PHP 2,804,233.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 32,559.52/month" },
      { label: "15 years | 7.0%", value: "PHP 25,205.24/month" },
      { label: "20 years | 7.0%", value: "PHP 21,741.19/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, fit-out costs, turnover, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [{ title: "Promo Guide", items: ["Ask Luisa to confirm current promos for this property."] }],
    sampleAvailableComputations: [
      { type: "STUDIO", size: "26.00 sqm", price: "PHP 3,499,600", rfo: "Jul 2028", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "17.00 sqm", price: "PHP 3,150,000", rfo: "Jul 2028", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "16.00 sqm", price: "PHP 3,098,600", rfo: "Jul 2028", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "18.00 sqm", price: "PHP 3,206,000", rfo: "Jul 2028", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "18.00 sqm", price: "PHP 3,206,000", rfo: "Jul 2028", note: "HomeReady: Not applicable" }
    ]
  },
  fitOutOptions: {
    title: "Customizable Fit-out Options",
    copy: "Anissa Heights may offer optional and mandatory fit-out packages for selected units, subject to latest developer terms and unit eligibility. These packages may include modular, space-saving furniture designed for compact urban living.",
    highlights: ["Optional and mandatory fit-out packages may be available.", "Fit-out packages may include modular and space-saving furniture.", "Final inclusions, pricing, eligibility, and requirements must be confirmed with Luisa and official project materials."],
    warning: "Fit-out options, package requirements, furniture inclusions, pricing, and eligibility are reference-only and must be confirmed before deciding.",
    cta: "Ask Luisa About Fit-out Options"
  },
  unitHoldingPortal: {
    title: "Secure Your Preferred Unit: Anissa Heights Holding Portal",
    text: "Anissa Heights may offer an online holding portal that allows prospective buyers to temporarily secure a preferred unit before making a final decision, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Register through the current unit holding process if available.", "Select preferred unit type, size, and budget range.", "Philippine-based clients may have a 24-hour holding period in the reference process.", "International clients may have a 72-hour holding period in the reference process.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels.", "Unit holding is for buyer review only and does not guarantee reservation unless official requirements are completed."]
  },
  reservationRequirements: [
    { title: "Online Client Registration", items: ["Begin by registering online to access the unit holding and reservation portals."] },
    { title: "Valid IDs", items: ["Submit copies of government-issued identification to confirm identity."] },
    { title: "Philippine TIN Number", items: ["Prepare Tax Identification Number because it is required for the reservation process."] },
    { title: "Online Reservation Agreement Form", items: ["Complete and submit the digital agreement form detailing reservation terms and conditions."] },
    { title: "Reservation Fee", items: ["PHP 30,000 for the residential unit.", "PHP 10,000 for parking, if applicable.", "Payment may be available through online payment gateway using debit/credit card or BPI Online Banking.", "Payment may also be made through Cash, GCash, and Dated Check payable to DMCI-PDI, subject to latest confirmation."] },
    { title: "Proof of Billing Address", items: ["Prepare proof of billing matching preferred billing address after reservation."] },
    { title: "Preferred Mode of Payment for Down Payment", items: ["Options may include PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks."] },
    { title: "Tie-in Banks", items: ["Bank of Commerce", "BDO", "BPI", "Metrobank", "EastWest Bank", "PNB", "Security Bank", "Sterling Bank", "UnionBank", "Robinsons Bank", "Chinabank"] },
    { title: "International Clients", items: ["Bills Payment options through tie-in banks with DMCI-PDI biller and remittance through Robinsons Bank Virtual Account may be available, subject to latest confirmation."] }
  ],
  reservationNote: "Confirm the latest computation, current availability, accepted payment channel, and official requirements with Luisa before making any reservation decision.",
  galleryLabels: ["Project Perspective", "Site Development Plan", "Amenity Deck", "Roof Deck / Sky Lounge", "Leisure Pool / Kiddie Pool", "Fitness Gym", "Floor Plan Preview", "Fit-out Option Preview"],
  gallery: [
    assetPath("anissa-heights", "gallery-1.jpg"),
    assetPath("anissa-heights", "gallery-2.jpg"),
    assetPath("anissa-heights", "gallery-3.jpg"),
    assetPath("anissa-heights", "master-plan.jpg"),
    assetPath("anissa-heights", "site-progress.jpg")
  ],
  image: assetPath("anissa-heights", "hero.jpg"),
  thumbnail: assetPath("anissa-heights", "thumbnail.jpg")
};

const theCalineaTowerDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  name: "The Calinea Tower",
  tagline: "Transit-connected high-rise living in Grace Park, Caloocan City.",
  city: "Caloocan City",
  location: "Caloocan",
  status: "Preselling",
  propertyType: "High Rise Condominium",
  developmentType: "High Rise Condominium",
  architecturalTheme: "Modern Urban / For confirmation",
  address: "M.H. Del Pilar St., Grace Park, Caloocan City",
  landArea: "7,472 sqm",
  turnoverYear: "2028",
  targetRfo: "May 2028",
  unitTypes: ["Studio", "1BR", "2BR", "3BR"],
  priceRangeLabel: "PHP 5.6M - PHP 15.1M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, turnover, and payment details must be confirmed with Luisa before deciding.",
  overview:
    "The Calinea Tower by DMCI Homes is a high-rise condominium development along M.H. Del Pilar St., Grace Park, Caloocan City. This buyer-assistance reference page highlights its 60-storey high-rise plan, 48 residential floors, transport connectivity, nearby essentials, and Studio, 1BR, 2BR, and 3BR unit options.",
  introParagraphs: [
    "The Calinea Tower by DMCI Homes is a high-rise condominium development in Grace Park, Caloocan City, located along M.H. Del Pilar St., Grace Park, Caloocan City.",
    "The project is described as a 60-storey high-rise development with 48 residential floors, positioned for buyers who want connectivity to EDSA, NLEX, C-5, LRT-1 Monumento Station, schools, malls, hospitals, and essential establishments.",
    "The Calinea Tower offers Studio, 1BR, 2BR, and 3BR unit options, with amenities for leisure, fitness, work, and community use.",
    "All pricing, availability, promos, payment terms, warranty notes, computations, turnover, and unit details shown here are reference-only. Request the latest computation and confirmed availability from Luisa before deciding."
  ],
  projectFacts: [
    { label: "Location", value: "M.H. Del Pilar St., Grace Park, Caloocan City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Lot Area", value: "7,472 sqm" },
    { label: "Type of Development", value: "High Rise Condominium" },
    { label: "Number of Buildings", value: "1" },
    { label: "Number of Floors", value: "60" },
    { label: "Residential Floors", value: "48 residential floors" },
    { label: "Unit Mix", value: "Studio, 1 Bedroom, 2 Bedroom, 3 Bedroom" },
    { label: "Turnover Date", value: "May 2028" }
  ],
  summaryPricing: [
    { type: "Studio", size: "29.00 - 34.50 sqm", status: "Ask Luisa to confirm availability", price: "PHP 5.6M - PHP 7.6M", monthlyDp: "12% DP: PHP 16.2k - PHP 22.1k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", size: "52.00 - 57.50 sqm", status: "Ask Luisa to confirm availability", price: "PHP 9.7M - PHP 10.7M", monthlyDp: "12% DP: PHP 28.5k - PHP 31.2k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", size: "51.00 - 82.50 sqm", status: "Ask Luisa to confirm availability", price: "PHP 8.7M - PHP 13.0M", monthlyDp: "12% DP: PHP 25.4k - PHP 38.4k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", size: "79.50 - 97.50 sqm", status: "Ask Luisa to confirm availability", price: "PHP 11.9M - PHP 15.1M", monthlyDp: "12% DP: PHP 34.8k - PHP 44.5k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  summaryPricingNote: "Monthly DP ranges are guide values from the buyer guide and may vary by unit, term, promo, current availability, and latest developer computation.",
  locationDetails: {
    title: "Prime Location in Caloocan",
    text: "The Calinea Tower is situated along M.H. Del Pilar St., Grace Park, Caloocan City. It offers access to major roads and transport links such as EDSA, NLEX, C-5, and LRT-1 Monumento Station, while staying close to schools, malls, hospitals, and key Caloocan establishments.",
    exactAddress: "M.H. Del Pilar St., Grace Park, Caloocan City",
    note: "Distances and travel times are reference estimates only and should be verified with current maps before viewing or reservation."
  },
  nearbyDestinations: [
    { group: "Schools and Universities", items: ["Global Reciprocal Colleges - 300 m / 1 min", "ABE International Business College, Caloocan Campus - 750 m / 5 mins", "Manila Central University - 1 km / 5 mins", "World Citi Colleges, Caloocan - 1.2 km / 5 mins", "La Consolacion College, Caloocan - 1.5 km / 7 mins", "Asian Institute of Computer Studies - 1.6 km / 7 mins", "University of the East, Caloocan - 1.7 km / 7 mins", "Martinez Memorial College - 2.4 km / 7 mins", "Grace Christian College - 2.8 km / 9 mins", "De La Salle Araneta University - 3.3 km / 9 mins", "Chinese General Hospital College - 3.5 km / 9 mins"] },
    { group: "Commercial Establishments", items: ["SM City Grand Central Mall - 500 m / 3 mins", "Araneta Square Mall - 700 m / 6 mins", "SM Hypermarket Monumento - 750 m / 6 mins", "Victory Center Mall - 1 km / 7 mins", "SM Center Sangandaan - 2 km / 9 mins", "Ayala Malls Cloverleaf - 2.3 km / 9 mins", "Puregold Balintawak - 2.8 km / 7 mins", "Fisher Mall Malabon - 3 km / 12 mins", "Malabon Town Center - 3 km / 12 mins", "SM North EDSA - 5.6 km / 12 mins", "Trinoma - 6.4 km / 15 mins"] },
    { group: "Hospitals", items: ["Our Lady of Grace Hospital - 700 m / 3 mins", "Manila Central University Hospital - 950 m / 3 mins", "Caloocan City Medical Center - 1.6 km / 5 mins", "Martinez Memorial Hospital - 2.4 km / 7 mins", "Calalang General Hospital - 2.5 km / 7 mins", "Chinese General Hospital and Medical Center - 3.5 km / 10 mins"] },
    { group: "Transit Infrastructure", items: ["LRT-1 Monumento Station - 500 m / 1 min", "PNR Asistio Avenue Station - 1 km / 4 mins", "Skyway Stage 3 - 2.8 km / 7 mins"] },
    { group: "Others", items: ["Diocesan Shrine and Parish of Our Lady of Grace - 140 m / 1 min", "Monumento Circle - 750 m / 3 mins", "Caloocan City Hall - 950 m / 4 mins", "Caloocan City People's Park - 950 m / 4 mins", "Malabon Zoo - 1.5 km / 5 mins"] }
  ],
  whyInvest: [
    "Grace Park location near LRT-1 Monumento Station, EDSA, NLEX, C-5, and Skyway Stage 3",
    "Studio, 1BR, 2BR, and 3BR unit options for different end-use and investment goals",
    "Leisure, work, fitness, and community amenities in a high-rise setting",
    "Broker-assisted computation, availability checking, reservation guidance, and viewing coordination through Luisa"
  ],
  amenities: ["Sky Promenade", "Sky Deck Pool", "Sky Lounge", "Sky Patio", "Elegant Reception Lobby", "Reception Lounge", "Open Lounge", "Co-working Space", "Game Area", "Entertainment Room", "Lap Pool", "Kiddie Pool", "Fitness Gym", "Basketball Court", "Children's Play Area", "Play Area", "Water Station", "Convenience Store", "Laundry Station", "Community WiFi", "Garbage Chute System"],
  amenityGroups: [
    { title: "Sky and Elevated Spaces", items: ["Sky Promenade", "Sky Deck Pool", "Sky Lounge", "Sky Patio"] },
    { title: "Lobby and Lounge Spaces", items: ["Elegant Reception Lobby", "Reception Lounge", "Open Lounge"] },
    { title: "Work, Game, and Social Spaces", items: ["Co-working Space", "Game Area", "Entertainment Room"] },
    { title: "Pools and Leisure", items: ["Lap Pool", "Kiddie Pool"] },
    { title: "Fitness, Play, and Active Spaces", items: ["Fitness Gym", "Basketball Court", "Children's Play Area", "Play Area"] },
    { title: "Daily Convenience and Facilities", items: ["Water Station", "Convenience Store", "Laundry Station", "Community WiFi", "Garbage Chute System"] }
  ],
  amenityNote: "Amenities are based on the buyer guide and must be confirmed with the latest official project materials.",
  siteDevelopment: {
    title: "Site Development Plan",
    paragraphs: [
      "The Calinea Tower is planned as a 60-storey high-rise condominium designed to support connected city living in Caloocan.",
      "The source notes three convenient entry points for access, along with everyday facilities that support resident convenience.",
      "Site development references include ground/site development planning, 4th floor site development plan, and roof deck development plan.",
      "Site development details, final project materials, building placement, and final amenities must be confirmed with official project materials."
    ],
    keyStats: [
      { label: "Lot Area", value: "7,472 sqm lot area" },
      { label: "Building", value: "1 high-rise building" },
      { label: "Floors", value: "60 floors" },
      { label: "Residential", value: "48 residential floors" },
      { label: "Access", value: "Three entry points" },
      { label: "Convenience", value: "Water Station" },
      { label: "Retail", value: "Convenience Store" },
      { label: "Laundry", value: "Laundry Station" },
      { label: "Connectivity", value: "Community WiFi" },
      { label: "Waste", value: "Garbage chute system" },
      { label: "Plan", value: "4th floor site development plan" },
      { label: "Roof", value: "Roof deck development plan" }
    ]
  },
  masterPlanImage: assetPath("the-calinea-tower", "master-plan.jpg"),
  siteProgressImage: assetPath("the-calinea-tower", "site-progress.jpg"),
  viewHighlights: [
    "360-degree virtual tour support",
    "Grace Park, Caloocan high-rise setting",
    "Sky promenade, sky lounge, and sky patio perspectives",
    "Access to LRT-1 Monumento Station, EDSA, NLEX, C-5, and Skyway Stage 3",
    "Modern urban living near schools, malls, hospitals, and transport infrastructure"
  ],
  videoTourTitle: "Explore The Calinea Tower in Immersive 360",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  videoTourUrl: "",
  unitIntro: "The Calinea Tower offers Studio, 1BR, 2BR, 3BR, and tandem options designed for different lifestyle needs in Caloocan City. Unit details, availability, pricing, warranties, deliverables, and computations must be confirmed before reservation.",
  unitQualityNote: "Source content mentions DMCI Homes' Quality Seal and a 2-year limited warranty covering most deliverables. Warranty coverage, exclusions, and actual deliverables must be confirmed through latest official documents.",
  unitInventoryPreview: [
    { type: "Studio", floorArea: "29.00 - 34.50 sqm", indicativeRange: "PHP 5.6M - PHP 7.6M reference range", status: "Ask for latest availability" },
    { type: "1BR", floorArea: "52.00 - 57.50 sqm", indicativeRange: "PHP 9.7M - PHP 10.7M reference range", status: "Ask for latest availability" },
    { type: "2BR", floorArea: "51.00 - 82.50 sqm", indicativeRange: "PHP 8.7M - PHP 13.0M reference range", status: "Ask for latest availability" },
    { type: "3BR", floorArea: "79.50 - 97.50 sqm", indicativeRange: "PHP 11.9M - PHP 15.1M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "Studio Units",
      description: "Studio units are designed for modern urban living, offering efficient layouts for professionals, singles, investors, and buyers comparing transit-connected Caloocan options.",
      layouts: ["Studio"],
      rows: [
        { layout: "STUDIO", floorArea: "29.00 sqm", status: "Limited", priceRange: "PHP 5.9M - PHP 6.2M", monthlyDp: "12% DP: PHP 17.0k - PHP 18.0k/mo" },
        { layout: "STUDIO", floorArea: "30.00 sqm", status: "Available", priceRange: "PHP 5.6M - PHP 6.5M", monthlyDp: "12% DP: PHP 16.2k - PHP 18.8k/mo" },
        { layout: "STUDIO", floorArea: "33.00 sqm", status: "Available", priceRange: "PHP 6.4M - PHP 7.1M", monthlyDp: "12% DP: PHP 18.3k - PHP 20.6k/mo" },
        { layout: "STUDIO", floorArea: "33.50 sqm", status: "Available", priceRange: "PHP 6.0M - PHP 6.7M", monthlyDp: "12% DP: PHP 17.2k - PHP 19.4k/mo" },
        { layout: "STUDIO", floorArea: "34.50 sqm", status: "Available", priceRange: "PHP 6.8M - PHP 7.6M", monthlyDp: "12% DP: PHP 19.5k - PHP 22.1k/mo" }
      ]
    },
    {
      title: "1-Bedroom Units",
      description: "1BR units provide additional living space for individuals or couples who want more room while staying connected to Caloocan transport, schools, malls, and city conveniences.",
      layouts: ["1 Bedroom A", "1 Bedroom B", "1 Bedroom C", "1 Bedroom D"],
      rows: [
        { layout: "1BR", floorArea: "52.00 sqm", status: "Limited", priceRange: "PHP 9.7M - PHP 9.9M", monthlyDp: "12% DP: PHP 28.5k - PHP 28.9k/mo" },
        { layout: "1BR", floorArea: "57.50 sqm", status: "Available", priceRange: "PHP 9.9M - PHP 10.7M", monthlyDp: "12% DP: PHP 29.0k - PHP 31.2k/mo" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "2BR units are suited for families, shared living, or buyers who need more space for work-from-home, guests, or long-term end-use.",
      layouts: ["2BR"],
      rows: [
        { layout: "2BR", floorArea: "51.00 sqm", status: "Limited", priceRange: "PHP 8.8M - PHP 9.1M", monthlyDp: "12% DP: PHP 25.8k - PHP 26.5k/mo" },
        { layout: "2BR", floorArea: "52.00 sqm", status: "Available", priceRange: "PHP 8.7M - PHP 9.3M", monthlyDp: "12% DP: PHP 25.4k - PHP 27.0k/mo" },
        { layout: "2BR", floorArea: "56.50 sqm", status: "Available", priceRange: "PHP 9.1M - PHP 9.7M", monthlyDp: "12% DP: PHP 26.7k - PHP 28.5k/mo" },
        { layout: "2BR", floorArea: "57.50 sqm", status: "Available", priceRange: "PHP 9.1M - PHP 10.0M", monthlyDp: "12% DP: PHP 26.4k - PHP 29.3k/mo" },
        { layout: "2BR", floorArea: "59.00 sqm", status: "Available", priceRange: "PHP 9.6M - PHP 10.3M", monthlyDp: "12% DP: PHP 28.0k - PHP 30.1k/mo" },
        { layout: "2BR", floorArea: "62.00 sqm", status: "Few left", priceRange: "PHP 10.1M - PHP 10.6M", monthlyDp: "12% DP: PHP 29.5k - PHP 30.9k/mo" },
        { layout: "2BR", floorArea: "64.00 sqm", status: "Available", priceRange: "PHP 9.8M - PHP 11.3M", monthlyDp: "12% DP: PHP 28.6k - PHP 33.1k/mo" },
        { layout: "2BR", floorArea: "64.50 sqm", status: "Limited", priceRange: "PHP 10.5M - PHP 11.7M", monthlyDp: "12% DP: PHP 30.8k - PHP 34.3k/mo" },
        { layout: "2BR", floorArea: "67.50 sqm", status: "Limited", priceRange: "PHP 10.5M - PHP 11.4M", monthlyDp: "12% DP: PHP 30.8k - PHP 33.6k/mo" },
        { layout: "2BR", floorArea: "70.00 sqm", status: "Few left", priceRange: "PHP 11.0M", monthlyDp: "12% DP: PHP 32.4k/mo" },
        { layout: "2BR", floorArea: "71.50 sqm", status: "Limited", priceRange: "PHP 11.3M - PHP 11.6M", monthlyDp: "12% DP: PHP 33.1k - PHP 34.0k/mo" },
        { layout: "2BR", floorArea: "76.50 sqm", status: "Limited", priceRange: "PHP 11.3M - PHP 11.8M", monthlyDp: "12% DP: PHP 33.2k - PHP 34.5k/mo" },
        { layout: "2BR", floorArea: "77.00 sqm", status: "Available", priceRange: "PHP 11.7M - PHP 13.0M", monthlyDp: "12% DP: PHP 34.4k - PHP 38.4k/mo" },
        { layout: "2BR", floorArea: "78.00 sqm", status: "Few left", priceRange: "PHP 12.3M", monthlyDp: "12% DP: PHP 36.3k/mo" },
        { layout: "2BR", floorArea: "82.50 sqm", status: "Few left", priceRange: "PHP 12.4M", monthlyDp: "12% DP: PHP 36.4k/mo" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "3BR units are designed for larger families or buyers looking for more flexible living spaces within a transit-connected high-rise in Caloocan City.",
      layouts: ["3BR"],
      rows: [
        { layout: "3BR", floorArea: "79.50 sqm", status: "Available", priceRange: "PHP 11.9M - PHP 13.4M", monthlyDp: "12% DP: PHP 34.8k - PHP 39.4k/mo" },
        { layout: "3BR", floorArea: "86.00 sqm", status: "Available", priceRange: "PHP 12.9M - PHP 15.1M", monthlyDp: "12% DP: PHP 38.0k - PHP 44.5k/mo" },
        { layout: "3BR", floorArea: "97.00 sqm", status: "Available", priceRange: "PHP 13.3M - PHP 14.5M", monthlyDp: "12% DP: PHP 39.3k - PHP 42.7k/mo" },
        { layout: "3BR", floorArea: "97.50 sqm", status: "Available", priceRange: "PHP 13.4M - PHP 14.5M", monthlyDp: "12% DP: PHP 39.5k - PHP 42.9k/mo" }
      ]
    },
    {
      title: "Tandem Units",
      description: "Calinea Tower may offer tandem units through a combination of two adjacent units, providing expanded living space for extended families or buyers needing more room. Final tandem configuration, pricing, deliverables, and availability must be confirmed with Luisa.",
      layouts: ["Tandem Unit Layout"],
      rows: [
        { layout: "Tandem", floorArea: "For confirmation", status: "Ask Luisa for latest availability", priceRange: "Request latest computation", monthlyDp: "Ask Latest Computation" }
      ]
    }
  ],
  floorPlansTitle: "Calinea Tower Floor Plans",
  floorPlansDescription: "Calinea Tower offers floor plans for Studio, 1BR, 2BR, 3BR, and tandem configurations. Floor plan images, unit cuts, final unit details, building assignment, warranty deliverables, and final layouts must be confirmed with the latest official project materials.",
  floorPlans: [
    { title: "Calinea Building Floor Plan", text: "Request the latest Calinea Building floor plan sheet from Luisa before comparing units." },
    { title: "Studio Floor Plan", text: "Studio floor plan images and unit cuts are reference-only until confirmed with official project materials." },
    { title: "1BR Floor Plan", text: "1BR floor plan details, deliverables, and warranty notes must be confirmed before deciding." },
    { title: "2BR Floor Plan", text: "2BR floor plan images, unit cuts, and building assignments are subject to latest official confirmation." },
    { title: "3BR Floor Plan", text: "3BR floor plan details and final layouts must be confirmed with official project materials." },
    { title: "Tandem Unit Layout", text: "Tandem layouts depend on adjacent unit combinations and must be confirmed with Luisa." },
    { title: "4th Floor Site Development Plan", text: "4th floor site development plan references are subject to official confirmation." },
    { title: "Roof Deck Development Plan", text: "Roof deck development plan references are subject to latest official materials." }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The Calinea Tower offers payment options for buyers comparing ownership in Caloocan City. The reference sample below shows a 12% down payment payable over 40 months with the remaining 88% through bank financing. The source also mentions a standard financing plan with 30% down payment and 70% balance. Terms, promos, discounts, closing fees, monthly payments, financing, and availability must be confirmed with Luisa before deciding.",
    importantNotes: ["Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, turnover, warranty details, and availability may change. Request the latest computation from Luisa before deciding."],
    sampleComputation: [
      { label: "Unit", value: "C-Calinea 4503" }, { label: "Type", value: "STUDIO" }, { label: "Size", value: "30.00 sqm" }, { label: "List Price", value: "PHP 5,642,000.00" }, { label: "RFO Date", value: "May 2028" }, { label: "Selected Downpayment", value: "12%" }, { label: "Number of Months to Pay", value: "40 months" }, { label: "Financing", value: "12% DP, 88% Bank Financing" }
    ],
    contractBreakdown: [
      { label: "Special Discount", value: "0.0% / PHP 0.00" }, { label: "Net", value: "PHP 5,642,000.00" }, { label: "Regular Discount", value: "0.0% / PHP 0.00" }, { label: "Additional Discount", value: "0.0% / PHP 0.00" }, { label: "Total Contract Price", value: "PHP 5,642,000.00" }, { label: "Closing Fee", value: "10.5% / PHP 592,410.00" }, { label: "Total with Closing Fee", value: "PHP 6,234,410.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "12% / PHP 677,040.00" }, { label: "Less Reservation Fee", value: "PHP 30,000.00" }, { label: "Net Downpayment", value: "PHP 647,040.00" }, { label: "Monthly DP", value: "40 months / PHP 16,176.00/mo" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "88% / PHP 4,964,960.00" }, { label: "Closing Fee", value: "PHP 592,410.00" }, { label: "Total Balance + Closing Fee", value: "PHP 5,557,370.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 64,525.78/month" },
      { label: "15 years | 7.0%", value: "PHP 49,951.21/month" },
      { label: "20 years | 7.0%", value: "PHP 43,086.23/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, turnover, warranty details, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [{ title: "Promo Guide", items: ["Promo Name: 12% DP Promo", "Down Payment Promo: 12% DP", "Flexible Down Payment: 40 fixed months", "Promo Ends: July 31, 2026", "Scope: All Units"] }],
    sampleAvailableComputations: [
      { type: "2BR", size: "71.50 sqm", price: "PHP 11,597,000", rfo: "May 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "71.50 sqm", price: "PHP 11,597,000", rfo: "May 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "82.50 sqm", price: "PHP 12,381,000", rfo: "May 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "78.00 sqm", price: "PHP 12,337,000", rfo: "May 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "71.50 sqm", price: "PHP 11,597,000", rfo: "May 2028", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Claim Your Space: Calinea Tower Unit Holding Portal",
    text: "The Calinea Tower may offer an online holding portal that allows prospective buyers to temporarily hold a preferred unit before making a final decision, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Register through the current unit holding process if available.", "Select preferred unit type, size, and budget range.", "Philippine-based clients may have a 24-hour holding period in the reference process.", "International clients may have a 72-hour holding period in the reference process.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels.", "Unit holding is for buyer review only and does not guarantee reservation unless official requirements are completed."]
  },
  reservationRequirements: [
    { title: "Online Client Registration", items: ["Begin by registering online to access the unit holding and reservation portals."] },
    { title: "Valid IDs", items: ["Submit copies of government-issued identification to confirm identity."] },
    { title: "Philippine TIN Number", items: ["Prepare Tax Identification Number because it is required for the reservation process."] },
    { title: "Online Reservation Agreement Form", items: ["Complete and submit the digital agreement form detailing reservation terms and conditions."] },
    { title: "Reservation Fee", items: ["PHP 30,000 for the residential unit.", "PHP 10,000 for parking, if applicable.", "Payment may be available through online payment gateway using debit/credit card or BPI Online Banking.", "Payment may also be made through Cash, GCash, and Dated Check payable to DMCI-PDI, subject to latest confirmation."] },
    { title: "Proof of Billing Address", items: ["Prepare proof of billing matching preferred billing address after reservation."] },
    { title: "Preferred Mode of Payment for Down Payment", items: ["Options may include PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks."] },
    { title: "Tie-in Banks", items: ["Bank of Commerce", "BDO", "BPI", "Metrobank", "EastWest Bank", "PNB", "Security Bank", "Sterling Bank", "UnionBank", "Robinsons Bank", "Chinabank"] },
    { title: "International Clients", items: ["Bills Payment options through tie-in banks with DMCI-PDI biller and remittance through Robinsons Bank Virtual Account may be available, subject to latest confirmation."] }
  ],
  reservationNote: "Confirm the latest computation, current availability, accepted payment channel, and official requirements with Luisa before making any reservation decision.",
  galleryLabels: ["Project Perspective", "Site Development Plan", "4th Floor Site Development", "Roof Deck Development", "Sky Promenade / Sky Lounge", "Co-working Space", "Pool Amenity", "Floor Plan Preview"],
  gallery: [
    assetPath("the-calinea-tower", "gallery-1.jpg"),
    assetPath("the-calinea-tower", "gallery-2.jpg"),
    assetPath("the-calinea-tower", "gallery-3.jpg"),
    assetPath("the-calinea-tower", "master-plan.jpg"),
    assetPath("the-calinea-tower", "site-progress.jpg")
  ],
  image: assetPath("the-calinea-tower", "hero.jpg"),
  thumbnail: assetPath("the-calinea-tower", "thumbnail.jpg")
};

const sageResidencesDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  name: "Sage Residences",
  tagline: "A wise home choice in central Mandaluyong.",
  city: "Mandaluyong City",
  location: "Mandaluyong",
  status: "Preselling",
  propertyType: "High Rise Condominium",
  developmentType: "High Rise Condominium",
  architecturalTheme: "Contemporary / For confirmation",
  address: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City",
  landArea: "5,995 sqm",
  turnoverYear: "2028",
  targetRfo: "February 2028",
  unitTypes: ["Studio", "1BR", "2BR", "3BR"],
  priceRangeLabel: "PHP 6.6M - PHP 12.9M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, turnover, and payment details must be confirmed with Luisa before deciding.",
  overview:
    "Sage Residences by DMCI Homes is a high-rise residential condominium at Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City. This buyer-assistance reference page highlights its central Metro Manila access, open-space planning, amenities, and Studio, 1BR, 2BR, and 3BR unit options.",
  introParagraphs: [
    "Sage Residences by DMCI Homes is a high-rise residential condominium in Mandaluyong City, located at Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City.",
    "The project blends modern urban living with access to open spaces, amenities, and major Metro Manila destinations. The source notes 50 floors, 49 residential floors, and 56% dedicated to amenities and open spaces.",
    "Sage Residences offers Studio, 1BR, 2BR, and 3BR unit options near MRT-3 Boni Station, Ortigas Center, Makati CBD, BGC, Rockwell, schools, hospitals, and shopping centers.",
    "It is positioned for end-users, investors, young professionals, families, and buyers looking for central Metro Manila accessibility.",
    "All pricing, availability, promos, payment terms, floor plan details, balcony details, computations, turnover, and unit details shown here are reference-only. Request the latest computation and confirmed availability from Luisa before deciding."
  ],
  projectFacts: [
    { label: "Location", value: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Lot Area", value: "5,995 sqm" },
    { label: "Type of Development", value: "High Rise Condominium" },
    { label: "Number of Buildings", value: "1" },
    { label: "Number of Floors", value: "50 floors" },
    { label: "Residential Floors", value: "49 residential floors" },
    { label: "Unit Mix", value: "Studio, 1 bedroom, 2 bedroom, 3 bedroom" },
    { label: "Amenity and Open Space Ratio", value: "56%" },
    { label: "Turnover Date", value: "February 2028" }
  ],
  summaryPricing: [
    { type: "Studio", size: "31.00 - 33.50 sqm", status: "Ask Luisa to confirm availability", price: "PHP 6.6M - PHP 8.1M", monthlyDp: "12% DP: PHP 19.1k - PHP 23.4k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", size: "30.00 - 32.00 sqm", status: "Ask Luisa to confirm availability", price: "PHP 6.6M - PHP 8.1M", monthlyDp: "12% DP: PHP 19.2k - PHP 23.5k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", size: "48.00 - 84.00 sqm", status: "Ask Luisa to confirm availability", price: "PHP 8.1M - PHP 12.8M", monthlyDp: "12% DP: PHP 23.5k - PHP 37.7k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", size: "78.00 sqm", status: "Ask Luisa to confirm current availability", price: "PHP 12.6M - PHP 12.9M", monthlyDp: "12% DP: PHP 37.0k - PHP 38.0k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  summaryPricingNote: "Monthly DP ranges are guide values from the buyer guide and may vary by unit, term, promo, current availability, and latest developer computation.",
  locationDetails: {
    title: "Location of Sage Residences: At the Heart of Metro Manila",
    text: "Sage Residences is strategically positioned at Domingo M. Guevarra and Sinag Streets in Mauway, Mandaluyong City, placing it near transport links, shopping centers, schools, hospitals, and business districts. The source highlights access to MRT-3 Boni Station, Ortigas Center, Makati CBD, Bonifacio Global City, and Rockwell Center.",
    exactAddress: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City",
    note: "Distances are reference estimates only and should be verified with current maps before viewing or reservation."
  },
  nearbyDestinations: [
    { group: "Business & Commercial Hubs", items: ["S&R Shaw Boulevard - 0.82 km", "Greenhills Mall - 2.46 km", "Robinsons Galleria - 1.87 km", "SM Megamall - 0.98 km", "EDSA Shangri-La - 0.93 km", "Greenfield District - 0.79 km", "Forum Robinsons Pioneer - 1.03 km", "Capitol Commons - 1.81 km"] },
    { group: "Schools", items: ["Don Bosco Manila - 3.25 km", "Xavier School - 2.79 km", "Immaculate Concepcion Academy - 2.52 km", "La Salle Greenhills - 2.05 km", "St. Pedro Poveda College - 1.70 km", "Lourdes School of Mandaluyong - 1.19 km", "University of Asia and the Pacific - 1.54 km", "St. Paul College Pasig - 2.00 km", "Rizal Technological University - 1.09 km", "Makati Science School - 1.95 km", "University of Makati - 2.18 km"] },
    { group: "Medical Institutions", items: ["Victor R. Potenciano Medical Center - 0.39 km", "Cardinal Santos Medical Center - 1.96 km", "Our Lady of Lourdes Hospital - 3.06 km", "The Medical City - 2.47 km", "St. Luke's Medical Center BGC - 2.80 km"] },
    { group: "Transport Terminals", items: ["MRT Boni Station - 0.76 km"] },
    { group: "Business Districts", items: ["Ortigas CBD - 2.00 km", "Makati CBD - 4.00 km", "Bonifacio Global City - 2.80 km", "Rockwell Center - 2.54 km"] }
  ],
  whyInvest: [
    "Central Mandaluyong address near MRT Boni Station, Ortigas CBD, Makati CBD, BGC, and Rockwell Center",
    "Studio, 1BR, 2BR, and 3BR options for end-use, family use, and investment comparison",
    "buyer guide notes 56% dedicated to amenities and open spaces",
    "Broker-assisted computation, availability checking, reservation guidance, and viewing coordination through Luisa"
  ],
  amenities: ["Gate and Guardhouse", "Elevator Lobby", "Reception", "Drop-Off Area", "Roof Deck", "Roof Deck Pool", "Sky Lounge", "Sky Lounge Bar Area", "Sky Promenade", "Leisure Pool", "Kiddie Pool", "Picnic Area", "Open Lounge", "Bar Area", "Fitness Gym", "Entertainment Room", "Shooting Court", "Play Area", "Landscaped Garden", "Open amenity spaces"],
  amenityGroups: [
    { title: "Arrival and Lobby", items: ["Gate and Guardhouse", "Elevator Lobby", "Reception", "Drop-Off Area"] },
    { title: "Roof Deck and Sky Spaces", items: ["Roof Deck", "Roof Deck Pool", "Sky Lounge", "Sky Lounge Bar Area", "Sky Promenade"] },
    { title: "Pools and Leisure", items: ["Leisure Pool", "Kiddie Pool", "Picnic Area", "Open Lounge", "Bar Area"] },
    { title: "Fitness, Play, and Active Spaces", items: ["Fitness Gym", "Entertainment Room", "Shooting Court", "Play Area"] },
    { title: "Outdoor and Garden Spaces", items: ["Landscaped Garden", "Open amenity spaces"] }
  ],
  amenityNote: "Amenities are based on the buyer guide and must be confirmed with the latest official project materials.",
  siteDevelopment: {
    title: "Site Development Plan at Sage Residences",
    paragraphs: [
      "Sage Residences is planned as a high-rise residential condominium designed to maximize functionality, comfort, and everyday convenience in Mandaluyong City.",
      "The source notes 49 residential floors and a development plan with amenities such as a leisure pool, kiddie pool, open lounge, picnic area, and roof deck spaces.",
      "The project emphasizes amenity and open-space planning, with 56% dedicated to amenities and open spaces based on the available project guide.",
      "Site development details, final project materials, building placement, floor layouts, and final amenities must be confirmed with official project materials."
    ],
    keyStats: [
      { label: "Lot Area", value: "5,995 sqm lot area" },
      { label: "Building", value: "1 high-rise building" },
      { label: "Floors", value: "50 floors" },
      { label: "Residential", value: "49 residential floors" },
      { label: "Open Space", value: "56% amenity and open space ratio" },
      { label: "Pool", value: "Leisure pool" },
      { label: "Kiddie Pool", value: "Kiddie pool" },
      { label: "Lounge", value: "Open lounge" },
      { label: "Picnic", value: "Picnic area" },
      { label: "Roof", value: "Roof deck" },
      { label: "Sky Spaces", value: "Sky lounge and sky promenade" }
    ]
  },
  masterPlanImage: assetPath("sage-residences", "master-plan.jpg"),
  siteProgressImage: assetPath("sage-residences", "site-progress.jpg"),
  viewHighlights: [
    "360-degree virtual tour support",
    "Central Mandaluyong high-rise setting",
    "Roof deck, sky lounge, sky promenade, and roof deck pool perspectives",
    "Access to MRT Boni Station, Ortigas CBD, Makati CBD, BGC, and Rockwell Center",
    "Urban living near retail, schools, hospitals, and business districts"
  ],
  videoTourTitle: "Step Inside Sage Residences: A 360 Virtual Tour",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  videoTourUrl: "",
  unitIntro: "Sage Residences offers Studio, 1BR, 2BR, and 3BR layouts designed for different urban lifestyles in Mandaluyong City. Unit details, availability, pricing, floor plan features, balcony details, deliverables, and computations must be confirmed before reservation.",
  unitInventoryPreview: [
    { type: "Studio", floorArea: "31.00 - 33.50 sqm", indicativeRange: "PHP 6.6M - PHP 8.1M reference range", status: "Ask for latest availability" },
    { type: "1BR", floorArea: "30.00 - 32.00 sqm", indicativeRange: "PHP 6.6M - PHP 8.1M reference range", status: "Ask for latest availability" },
    { type: "2BR", floorArea: "48.00 - 84.00 sqm", indicativeRange: "PHP 8.1M - PHP 12.8M reference range", status: "Ask for latest availability" },
    { type: "3BR", floorArea: "78.00 sqm", indicativeRange: "PHP 12.6M - PHP 12.9M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "Studio Units",
      description: "Studio units at Sage Residences offer compact, efficiently designed spaces for individuals, young professionals, investors, and buyers seeking a central Metro Manila home base.",
      layouts: ["Studio A", "Studio B", "Studio C", "Studio D", "Studio E"],
      rows: [
        { layout: "STUDIO", floorArea: "31.00 sqm", status: "Available", priceRange: "PHP 6.8M - PHP 7.8M", monthlyDp: "12% DP: PHP 19.6k - PHP 22.7k/mo" },
        { layout: "STUDIO", floorArea: "31.50 sqm", status: "Available", priceRange: "PHP 6.6M - PHP 7.5M", monthlyDp: "12% DP: PHP 19.1k - PHP 21.8k/mo" },
        { layout: "STUDIO", floorArea: "33.50 sqm", status: "Few left", priceRange: "PHP 7.3M - PHP 8.1M", monthlyDp: "12% DP: PHP 21.2k - PHP 23.4k/mo" }
      ]
    },
    {
      title: "1-Bedroom Units",
      description: "1BR units provide a blend of comfort and style for singles or couples who want city living with a more defined living and sleeping arrangement.",
      layouts: ["1BR A", "1BR B", "1BR C", "1BR D"],
      rows: [
        { layout: "1BR", floorArea: "30.00 sqm", status: "Available", priceRange: "PHP 6.6M - PHP 7.4M", monthlyDp: "12% DP: PHP 19.2k - PHP 21.5k/mo" },
        { layout: "1BR", floorArea: "32.00 sqm", status: "Limited", priceRange: "PHP 7.3M - PHP 8.1M", monthlyDp: "12% DP: PHP 21.0k - PHP 23.5k/mo" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "2BR units offer more living space for small families, couples needing a work-from-home setup, or buyers looking for additional flexibility in a central Mandaluyong location.",
      layouts: ["2BR A", "2BR AA", "2BR B", "2BR C", "2BR D", "2BR E", "2BR F", "2BR G", "2BR H", "2BR I", "2BR K", "2BR L", "2BR M", "2BR N", "2BR O", "2BR Q", "2BR R", "2BR S", "2BR T", "2BR U", "2BR V", "2BR W", "2BR X", "2BR Y", "2BR Z"],
      rows: [
        { layout: "2BR", floorArea: "48.00 sqm", status: "Limited", priceRange: "PHP 8.1M - PHP 9.1M", monthlyDp: "12% DP: PHP 23.5k - PHP 26.5k/mo" },
        { layout: "2BR", floorArea: "51.50 sqm", status: "Few left", priceRange: "PHP 9.1M", monthlyDp: "12% DP: PHP 26.5k/mo" },
        { layout: "2BR", floorArea: "52.00 sqm", status: "Available", priceRange: "PHP 8.5M - PHP 9.3M", monthlyDp: "12% DP: PHP 24.6k - PHP 27.0k/mo" },
        { layout: "2BR", floorArea: "55.00 sqm", status: "Few left", priceRange: "PHP 8.3M - PHP 9.2M", monthlyDp: "12% DP: PHP 24.1k - PHP 26.7k/mo" },
        { layout: "2BR", floorArea: "55.50 sqm", status: "Few left", priceRange: "PHP 9.2M - PHP 9.5M", monthlyDp: "12% DP: PHP 26.9k - PHP 27.7k/mo" },
        { layout: "2BR", floorArea: "58.00 sqm", status: "Available", priceRange: "PHP 9.3M - PHP 10.8M", monthlyDp: "12% DP: PHP 27.3k - PHP 31.6k/mo" },
        { layout: "2BR", floorArea: "59.50 sqm", status: "Available", priceRange: "PHP 9.3M - PHP 10.5M", monthlyDp: "12% DP: PHP 27.0k - PHP 30.8k/mo" },
        { layout: "2BR", floorArea: "60.00 sqm", status: "Limited", priceRange: "PHP 9.6M - PHP 10.8M", monthlyDp: "12% DP: PHP 28.2k - PHP 31.6k/mo" },
        { layout: "2BR", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 10.5M - PHP 10.7M", monthlyDp: "12% DP: PHP 30.7k - PHP 31.2k/mo" },
        { layout: "2BR", floorArea: "61.50 sqm", status: "Few left", priceRange: "PHP 10.4M - PHP 10.8M", monthlyDp: "12% DP: PHP 30.4k - PHP 31.7k/mo" },
        { layout: "2BR", floorArea: "62.50 sqm", status: "Few left", priceRange: "PHP 10.3M - PHP 11.2M", monthlyDp: "12% DP: PHP 30.2k - PHP 32.9k/mo" },
        { layout: "2BR", floorArea: "63.50 sqm", status: "Few left", priceRange: "PHP 9.9M - PHP 10.6M", monthlyDp: "12% DP: PHP 28.9k - PHP 31.1k/mo" },
        { layout: "2BR", floorArea: "66.00 sqm", status: "Few left", priceRange: "PHP 10.9M - PHP 11.9M", monthlyDp: "12% DP: PHP 32.0k - PHP 34.8k/mo" },
        { layout: "2BR", floorArea: "70.00 sqm", status: "Limited", priceRange: "PHP 11.2M - PHP 12.5M", monthlyDp: "12% DP: PHP 32.9k - PHP 36.9k/mo" },
        { layout: "2BR", floorArea: "73.50 sqm", status: "Few left", priceRange: "PHP 11.4M - PHP 12.3M", monthlyDp: "12% DP: PHP 33.6k - PHP 36.2k/mo" },
        { layout: "2BR", floorArea: "75.00 sqm", status: "Few left", priceRange: "PHP 11.5M - PHP 12.8M", monthlyDp: "12% DP: PHP 33.8k - PHP 37.7k/mo" },
        { layout: "2BR", floorArea: "84.00 sqm", status: "Limited", priceRange: "PHP 11.9M - PHP 12.8M", monthlyDp: "12% DP: PHP 35.0k - PHP 37.6k/mo" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "3BR units at Sage Residences provide larger spaces for families and buyers seeking more room in a central Metro Manila high-rise setting.",
      layouts: ["3BR A", "3BR B", "3BR C", "3BR D", "3BR E", "3BR F", "3BR G", "3BR H"],
      rows: [
        { layout: "3BR", floorArea: "78.00 sqm", status: "Limited", priceRange: "PHP 12.6M - PHP 12.9M", monthlyDp: "12% DP: PHP 37.0k - PHP 38.0k/mo" }
      ]
    }
  ],
  floorPlansTitle: "Floor Plans at Sage Residences",
  floorPlansDescription: "Sage Residences includes floor plans across its 50-storey high-rise layout, with Studio, 1BR, 2BR, and 3BR unit options. The source mentions design elements such as full glass balconies and extended bedrooms depending on unit type. Floor plan images, unit cuts, final unit details, balcony features, and deliverables must be confirmed with the latest official project materials.",
  floorPlans: [
    { title: "Sage Building Floor Plan", text: "Request the latest Sage Building floor plan sheet from Luisa before comparing units." },
    { title: "Studio Floor Plans", text: "Studio floor plan images, unit cuts, and balcony details are reference-only until confirmed with official project materials." },
    { title: "1BR Floor Plans", text: "1BR floor plan details, deliverables, and final layouts must be confirmed before deciding." },
    { title: "2BR Floor Plans", text: "2BR floor plan images, unit cuts, full glass balcony references, and extended bedroom details are subject to latest official confirmation." },
    { title: "3BR Floor Plans", text: "3BR floor plan details and final layouts must be confirmed with official project materials." },
    { title: "Amenity Floor Plan", text: "Amenity floor plan references are subject to official confirmation." },
    { title: "Roof Deck Plan", text: "Roof deck plan references are subject to latest official materials." }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "Sage Residences offers payment options for buyers comparing ownership in Mandaluyong City. The regular term may require a 30% minimum down payment deferred monthly until completion/RFO, with the remaining balance through in-house or bank financing. The reference sample below shows a 12% down payment payable over 40 months with the remaining 88% through bank financing. Terms, promos, discounts, closing fees, monthly payments, financing, and availability must be confirmed with Luisa before deciding.",
    importantNotes: ["Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, turnover, and availability may change. Request the latest computation from Luisa before deciding."],
    sampleComputation: [
      { label: "Unit", value: "C-Sage 515" }, { label: "Type", value: "STUDIO" }, { label: "Size", value: "31.50 sqm" }, { label: "List Price", value: "PHP 6,618,000.00" }, { label: "RFO Date", value: "Feb 2028" }, { label: "Selected Downpayment", value: "12%" }, { label: "Number of Months to Pay", value: "40 months" }, { label: "Financing", value: "12% DP, 88% Bank Financing" }
    ],
    contractBreakdown: [
      { label: "Special Discount", value: "0.0% / PHP 0.00" }, { label: "Net", value: "PHP 6,618,000.00" }, { label: "Regular Discount", value: "0.0% / PHP 0.00" }, { label: "Additional Discount", value: "0.0% / PHP 0.00" }, { label: "Total Contract Price", value: "PHP 6,618,000.00" }, { label: "Closing Fee", value: "10.5% / PHP 694,890.00" }, { label: "Total with Closing Fee", value: "PHP 7,312,890.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "12% / PHP 794,160.00" }, { label: "Less Reservation Fee", value: "PHP 30,000.00" }, { label: "Net Downpayment", value: "PHP 764,160.00" }, { label: "Monthly DP", value: "40 months / PHP 19,104.00/mo" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "88% / PHP 5,823,840.00" }, { label: "Closing Fee", value: "PHP 694,890.00" }, { label: "Total Balance + Closing Fee", value: "PHP 6,518,730.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 75,687.98/month" },
      { label: "15 years | 7.0%", value: "PHP 58,592.19/month" },
      { label: "20 years | 7.0%", value: "PHP 50,539.64/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, turnover, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [{ title: "Promo Guide", items: ["Promo Name: 12% DP Promo", "Down Payment Promo: 12% DP", "Flexible Down Payment: 40 fixed months", "Promo Ends: July 31, 2026", "Scope: All Units"] }],
    sampleAvailableComputations: [
      { type: "2BR", size: "75.00 sqm", price: "PHP 12,273,000", rfo: "Feb 2028", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "31.50 sqm", price: "PHP 7,262,000", rfo: "Feb 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "59.50 sqm", price: "PHP 10,254,000", rfo: "Feb 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "59.50 sqm", price: "PHP 10,254,000", rfo: "Feb 2028", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "55.00 sqm", price: "PHP 8,941,000", rfo: "Feb 2028", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal: Seamless and Convenient",
    text: "Sage Residences may offer a streamlined registration and unit holding portal that allows prospective buyers to temporarily hold a selected unit without immediate commitment, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Register through the current unit holding process if available.", "Browse available units and select preferred unit type, size, and budget range.", "Philippine-based clients may have a 24-hour holding period in the reference process.", "International clients may have a 72-hour holding period in the reference process.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels.", "Unit holding is for buyer review only and does not guarantee reservation unless official requirements are completed."]
  },
  reservationRequirements: [
    { title: "Online Client Registration", items: ["Begin by registering online to access the unit holding and reservation portals."] },
    { title: "Valid IDs", items: ["Submit copies of government-issued identification to confirm identity."] },
    { title: "Philippine TIN Number", items: ["Prepare Tax Identification Number because it is required for the reservation process."] },
    { title: "Online Reservation Agreement Form", items: ["Complete and submit the digital agreement form detailing reservation terms and conditions."] },
    { title: "Reservation Fee", items: ["PHP 30,000 for the residential unit.", "PHP 10,000 for parking, if applicable.", "Payment may be available through online payment gateway using debit/credit card or BPI Online Banking.", "Payment may also be made through Cash, GCash, and Dated Check payable to DMCI-PDI, subject to latest confirmation."] },
    { title: "Proof of Billing Address", items: ["Prepare proof of billing matching preferred billing address after reservation."] },
    { title: "Preferred Mode of Payment for Down Payment", items: ["Options may include PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks."] },
    { title: "Tie-in Banks", items: ["Bank of Commerce", "BDO", "BPI", "Metrobank", "EastWest Bank", "PNB", "Security Bank", "Sterling Bank", "UnionBank", "Robinsons Bank", "Chinabank"] },
    { title: "International Clients", items: ["Bills Payment options through tie-in banks with DMCI-PDI biller and remittance through Robinsons Bank Virtual Account may be available, subject to latest confirmation."] }
  ],
  reservationNote: "Confirm the latest computation, current availability, accepted payment channel, and official requirements with Luisa before making any reservation decision.",
  galleryLabels: ["Project Perspective", "Site Development Plan", "Roof Deck Pool", "Sky Lounge", "Open Lounge", "Fitness Gym", "Entertainment Room", "Floor Plan Preview"],
  gallery: [
    assetPath("sage-residences", "gallery-1.jpg"),
    assetPath("sage-residences", "gallery-2.jpg"),
    assetPath("sage-residences", "gallery-3.jpg"),
    assetPath("sage-residences", "master-plan.jpg"),
    assetPath("sage-residences", "site-progress.jpg")
  ],
  image: assetPath("sage-residences", "hero.jpg"),
  thumbnail: assetPath("sage-residences", "thumbnail.jpg")
};

const kaleaHeightsDetails = {
  contentLevel: "rich",
  assetStatus: "ready-for-review",
  verificationStatus: "reference-only",
  tagline: "Resort-inspired living on a grander scale.",
  city: "Cebu City",
  location: "Cebu",
  status: "Preselling",
  propertyType: "High-Rise Residential Condominium",
  developmentType: "High-Rise Residential Condominium",
  landArea: "4.6 hectares",
  architecturalTheme: "Modern Tropical, Resort-Inspired",
  address: "Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City",
  unitTypes: ["1BR", "2BR", "3BR", "Tandem Units"],
  priceRangeLabel: "PHP 5.6M - PHP 13.1M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, and availability must be confirmed with Luisa before deciding.",
  sourceUrl: "https://www.dmcihomes.com/kalea-heights",
  lastVerified: "For confirmation",
  targetRfo: "December 2029",
  overview:
    "Kalea Heights by DMCI Homes is a resort-inspired residential condominium located in Guadalupe-Banawa, Cebu City. It introduces DMCI Homes' signature park-centric lifestyle to Central Visayas through expansive open spaces, modern tropical architecture, and thoughtfully planned amenities.",
  introParagraphs: [
    "As DMCI Homes' first condominium development in Cebu, Kalea Heights is positioned for end-users, families, OFWs, first-time condo buyers, and investors comparing pre-selling condominium options in Cebu City.",
    "The project highlights wellness, everyday comfort, green spaces, resort-style amenities, and views of the Cebu City skyline, surrounding mountains, and nearby coastal areas.",
    "All pricing, unit availability, promos, payment terms, and turnover schedules shown here are for buyer guidance only. Request the latest computation and confirmed availability from Luisa before making decisions."
  ],
  projectFacts: [
    { label: "Location", value: "Guadalupe-Banawa, Cebu City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Development Type", value: "High-Rise Residential Condominium" },
    { label: "Total Land Area", value: "4.6 hectares" },
    { label: "Open Space", value: "3.6 hectares" },
    { label: "No. of Buildings", value: "4 High-Rise Towers" },
    { label: "No. of Floors", value: "41 Residential Floors" },
    { label: "Parking Levels", value: "2 to 5 Basement Parking Levels" },
    { label: "Amenity Levels", value: "2 Amenity Levels" },
    { label: "Architectural Theme", value: "Modern Tropical, Resort-Inspired" },
    { label: "Project Status", value: "Pre-selling" },
    { label: "Target RFO", value: "December 2029" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "29.50 - 33.50 sqm", range: "PHP 5.6M - PHP 6.4M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 19.8k - PHP 22.8k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "53.00 - 80.50 sqm", range: "PHP 8.1M - PHP 11.4M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 28.8k - PHP 41.1k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "81.50 - 88.50 sqm", range: "PHP 12.0M - PHP 13.1M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 43.1k - PHP 47.0k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "Kalea Heights is located along Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City, a well-established residential area known for its elevated setting, accessibility, and peaceful surroundings.",
  locationDetails: {
    title: "Location - Good Shepherd Road, Banawa, Cebu City",
    text: "Kalea Heights is located along Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City, a well-established residential area known for its elevated setting, accessibility, and peaceful surroundings. This location places the development close to Cebu City's key commercial and business districts while offering a more relaxed, private living environment away from heavy traffic. Distances are reference estimates only and should be verified with current maps before viewing or reservation.",
    exactAddress: "Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City"
  },
  nearbyDestinations: [
    {
      group: "Business & Commercial Areas",
      items: [
        "Banawa Centrale - 1.1 km",
        "Paseo Arcenas - 1.4 km",
        "Ayala Center Cebu - 4.7 km",
        "Cebu IT Park - 5.5 km",
        "Cebu South Road Properties (SRP) - 6.3 km"
      ]
    },
    {
      group: "Malls & Shopping Centers",
      items: [
        "The Marketplace Banawa - 1.1 km",
        "One Pavilion Mall - 1.6 km",
        "Metro Supermarket - 1.6 km",
        "Ayala Center Cebu - 4.7 km",
        "SM Seaside City Cebu - 5.4 km",
        "Robinsons Galleria Cebu - 5.6 km",
        "Ayala Malls Central Bloc - 5.8 km"
      ]
    },
    {
      group: "Schools",
      items: [
        "Matias H. Aznar Memorial College of Medicine - 1.2 km",
        "Cebu South Hills International School - 1.6 km",
        "One World Montessori House - 1.8 km",
        "Cebu City National Science High School - 2.3 km",
        "Cebu Institute of Technology - 2.7 km",
        "Cebu Normal University (Main) - 4.3 km",
        "University of Cebu - 4.8 km",
        "University of San Jose-Recoletos - 4.9 km"
      ]
    },
    {
      group: "Hospitals",
      items: [
        "Cebu Doctors' University Hospital - 2.7 km",
        "Chong Hua Hospital - 3.0 km",
        "Vicente Sotto Memorial Medical Center - 3.2 km",
        "Adventist Hospital Cebu - 3.8 km",
        "Visayas Medical Center - 3.9 km",
        "Cebu City Medical Center - 4.0 km",
        "Perpetual Succour Hospital - 4.1 km"
      ]
    }
  ],
  whyInvest: [
    "DMCI Homes' first condominium development in Cebu",
    "Park-centric, resort-inspired residential setting in Guadalupe-Banawa",
    "Expansive open spaces with wellness, leisure, and everyday comfort in mind",
    "1BR, 2BR, 3BR, and tandem options for different buyer goals",
    "Broker-assisted computation, availability checking, and viewing coordination through Luisa"
  ],
  highlights: [
    "4.6-hectare master-planned community",
    "3.6 hectares dedicated to open space",
    "4 high-rise residential towers",
    "1BR, 2BR, 3BR, and tandem unit options",
    "Target RFO: December 2029",
    "Buyer assistance for computation, availability, site viewing, and reservation steps"
  ],
  themeDescription:
    "Modern Tropical, resort-inspired architecture supports breezy spaces, green views, landscaped amenities, and indoor-outdoor connections. Final project details must be confirmed through official materials.",
  siteDevelopment: {
    title: "Site Development",
    text:
      "Kalea Heights by DMCI Homes is a master-planned, resort-inspired residential development designed around expansive green spaces and thoughtfully zoned living areas. Set within a 4.6-hectare property, the project dedicates 3.6 hectares to open space. The community is composed of four high-rise residential towers arranged around a central open park, allowing residents to enjoy a connection between indoor living and outdoor spaces. Wide walkways, landscaped gardens, water features, and leisure zones are integrated throughout the property to promote relaxation, wellness, and an active lifestyle.",
    keyStats: [
      { label: "Property", value: "4.6-hectare property" },
      { label: "Open Space", value: "3.6 hectares open space" },
      { label: "Towers", value: "4 high-rise towers" },
      { label: "Open Park", value: "Central open park" },
      { label: "Landscape", value: "Landscaped gardens and water features" },
      { label: "Lifestyle", value: "Wide walkways and leisure zones" }
    ]
  },
  viewHighlights: [
    {
      title: "360-Degree Views",
      text: "Select units and amenity areas may offer 360-degree view potential, subject to unit orientation and final confirmation."
    },
    {
      title: "Cebu City Skyline",
      text: "Review possible city skyline views with Luisa using the latest project presentation and available unit details."
    },
    {
      title: "Mountain and Coastal Views",
      text: "Kalea's elevated Banawa-Guadalupe setting may offer surrounding mountain and nearby coastal area views."
    },
    {
      title: "Virtual Tour Link",
      text: "Ask Luisa for the latest approved virtual tour link or project presentation when available."
    }
  ],
  buildings: [
    {
      name: "Leia Building",
      developmentType: "High Rise Condominiums",
      levels: ["41 Levels Residential", "5 Levels Basement Parking"],
      features: [
        "Fire Alarm & Automatic Sprinkler System",
        "Fire Cabinets",
        "Fire Exit",
        "Garbage Rooms",
        "Landscaped Atriums",
        "Sky Patio",
        "Parking Space",
        "Passenger Elevators",
        "Provision for CCTV",
        "Reception Lobby"
      ]
    }
  ],
  buildingFeatures: [
    "Fire Alarm & Automatic Sprinkler System",
    "Fire Cabinets",
    "Fire Exit",
    "Garbage Rooms",
    "Landscaped Atriums",
    "Sky Patio",
    "Parking Space",
    "Passenger Elevators",
    "Provision for CCTV",
    "Reception Lobby"
  ],
  amenities: [
    "Drop-Off Entrance",
    "Indoor Court Facility",
    "Basketball Court / Playcourt",
    "Children's Playground",
    "Entertainment Room",
    "Water Garden",
    "Lap Pool",
    "Leisure Pool",
    "Open Lawn / Picnic Grove",
    "Fitness Gym",
    "Snack Bar",
    "Open Lounge",
    "Sky Park",
    "Sky Bridge",
    "Sky Patio",
    "Picnic Area"
  ],
  amenityGroups: [
    { title: "Outdoor Amenities", items: ["Leisure Pool", "Kiddie Pool", "Lap Pool", "Pool Deck & Lounge Areas", "Open Lawn", "Picnic Areas", "Children's Play Area", "Pet Park", "Terraced Gardens", "Water Gardens", "Trellised Walkways", "Viewing Decks", "Amphitheater", "Basketball Court", "Multipurpose / Play Courts", "Open Field", "Walkways & Cycle Paths, approx. 1 km"] },
    { title: "Indoor & Covered Amenities", items: ["Fitness Gym", "Entertainment Room", "Open Lounge Areas", "Indoor Court Facility", "Building Atriums", "Sky Patios"] },
    { title: "Roof Deck & Sky Amenities", items: ["Sky Park", "Open Sky Lounge", "Sky Bridge connecting towers", "Roof Deck Leisure Areas with panoramic city, mountain, and sea views"] },
    { title: "Facilities & Services", items: ["Grand Drop-Off Entrances", "Reception Lobby", "Property Management Office", "Commercial Spaces in selected towers", "Convenience Store", "Laundry Station", "Water Refilling Station", "Snack Bar & Kitchen", "24/7 Security & CCTV", "Standby Power Supply", "Basement Parking Levels"] }
  ],
  otherAmenities: [
    "24-hour Security",
    "Convenience Store",
    "Grill Pits",
    "Jogging / Biking Path",
    "Kiddie Pool",
    "Amphitheater Garden",
    "Laundry Station",
    "Lounge Area",
    "Main Entrance Gate",
    "Pet Park",
    "Perimeter Fence",
    "Pool Deck",
    "Pool Shower Area",
    "Provision for CCTV Cameras",
    "Sky Lounge",
    "Roof Deck",
    "100% Power Back-up",
    "View Deck",
    "Water Feature",
    "Community Internet"
  ],
  nearbyLandmarks: ["Good Shepherd Road", "Banawa", "Guadalupe, Cebu City", "Ayala Center Cebu", "Cebu IT Park"],
  siteProgressStatus: "Site progress information should be confirmed through official DMCI channels or Luisa.",
  masterPlanNotes: "Kalea Heights master plan details should be reviewed using official project presentation materials once approved assets are available.",
  unitInventoryPreview: [
    { type: "1-Bedroom", floorArea: "29.50 - 33.50 sqm", indicativeRange: "PHP 5.6M-PHP 6.4M reference range", status: "Ask for latest availability" },
    { type: "2-Bedroom", floorArea: "53.00 - 80.50 sqm", indicativeRange: "PHP 8.1M-PHP 11.4M reference range", status: "Ask for latest availability" },
    { type: "3-Bedroom", floorArea: "81.50 - 88.50 sqm", indicativeRange: "PHP 12.0M-PHP 13.1M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "1-Bedroom Units",
      description: "Ideal for young professionals, couples, first-time buyers, and investors, the 1-bedroom units offer efficient layouts with defined living, dining, and kitchen areas. These units may suit rental income planning and first-time property ownership, subject to latest availability and computation.",
      layouts: ["1BR B - 31 sqm", "1BR C - 33.5 sqm", "1BR E - 32 sqm", "1BR F - 32.5 sqm", "1BR G - 29.5 sqm", "1BR H - 30 sqm", "1BR J - 31 sqm", "1BR M - 32 sqm"],
      rows: [
        { layout: "1BR", floorArea: "29.50 sqm", status: "Limited", priceRange: "PHP 5.6M - PHP 6.1M", monthlyDp: "15% DP: PHP 19.8k - PHP 21.6k/mo" },
        { layout: "1BR", floorArea: "30.00 sqm", status: "Limited", priceRange: "PHP 5.7M - PHP 6.0M", monthlyDp: "15% DP: PHP 20.2k - PHP 21.2k/mo" },
        { layout: "1BR", floorArea: "31.00 sqm", status: "Limited", priceRange: "PHP 5.8M - PHP 6.2M", monthlyDp: "15% DP: PHP 20.5k - PHP 21.8k/mo" },
        { layout: "1BR", floorArea: "31.50 sqm", status: "Few left", priceRange: "PHP 6.1M", monthlyDp: "15% DP: PHP 21.6k/mo" },
        { layout: "1BR", floorArea: "32.00 sqm", status: "Limited", priceRange: "PHP 5.9M - PHP 6.2M", monthlyDp: "15% DP: PHP 20.8k - PHP 21.8k/mo" },
        { layout: "1BR", floorArea: "32.50 sqm", status: "Limited", priceRange: "PHP 5.9M - PHP 6.1M", monthlyDp: "15% DP: PHP 20.8k - PHP 21.7k/mo" },
        { layout: "1BR", floorArea: "33.50 sqm", status: "Limited", priceRange: "PHP 6.0M - PHP 6.4M", monthlyDp: "15% DP: PHP 21.2k - PHP 22.8k/mo" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "Designed for small to mid-sized families, 2-bedroom units provide more flexible living spaces and better separation between private and shared areas. Selected layouts include balconies that may open to city, mountain, or garden views, subject to unit orientation and availability.",
      layouts: ["53.00 sqm", "55.00 sqm", "56.50 sqm", "58.50 sqm", "61.50 sqm", "65.00 sqm", "72.00 sqm", "80.50 sqm"],
      rows: [
        { layout: "2BR", floorArea: "53.00 sqm", status: "Few left", priceRange: "PHP 8.1M - PHP 8.1M", monthlyDp: "15% DP: PHP 28.8k - PHP 28.9k/mo" },
        { layout: "2BR", floorArea: "53.50 sqm", status: "Few left", priceRange: "PHP 8.6M", monthlyDp: "15% DP: PHP 30.8k/mo" },
        { layout: "2BR", floorArea: "55.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.1M - PHP 9.0M", monthlyDp: "15% DP: PHP 28.9k - PHP 32.2k/mo" },
        { layout: "2BR", floorArea: "55.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.6M - PHP 9.3M", monthlyDp: "15% DP: PHP 30.7k - PHP 33.5k/mo" },
        { layout: "2BR", floorArea: "56.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.3M - PHP 9.1M", monthlyDp: "15% DP: PHP 29.5k - PHP 32.6k/mo" },
        { layout: "2BR", floorArea: "58.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.4M - PHP 9.5M", monthlyDp: "15% DP: PHP 30.2k - PHP 34.1k/mo" },
        { layout: "2BR", floorArea: "59.00 sqm", status: "Few left", priceRange: "PHP 8.8M", monthlyDp: "15% DP: PHP 31.3k/mo" },
        { layout: "2BR", floorArea: "59.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.5M - PHP 9.1M", monthlyDp: "15% DP: PHP 30.2k - PHP 32.7k/mo" },
        { layout: "2BR", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 8.8M - PHP 9.2M", monthlyDp: "15% DP: PHP 31.4k - PHP 32.9k/mo" },
        { layout: "2BR", floorArea: "61.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 9.1M - PHP 9.9M", monthlyDp: "15% DP: PHP 32.6k - PHP 35.6k/mo" },
        { layout: "2BR", floorArea: "62.00 sqm", status: "Few left", priceRange: "PHP 9.0M - PHP 9.0M", monthlyDp: "15% DP: PHP 32.1k - PHP 32.1k/mo" },
        { layout: "2BR", floorArea: "63.50 sqm", status: "Limited", priceRange: "PHP 8.9M - PHP 9.2M", monthlyDp: "15% DP: PHP 31.9k - PHP 33.0k/mo" },
        { layout: "2BR", floorArea: "65.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 9.1M - PHP 9.7M", monthlyDp: "15% DP: PHP 32.5k - PHP 34.7k/mo" },
        { layout: "2BR", floorArea: "68.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 9.4M - PHP 9.9M", monthlyDp: "15% DP: PHP 33.5k - PHP 35.5k/mo" },
        { layout: "2BR", floorArea: "70.00 sqm", status: "Few left", priceRange: "PHP 10.3M", monthlyDp: "15% DP: PHP 37.0k/mo" },
        { layout: "2BR", floorArea: "72.00 sqm", status: "Few left", priceRange: "PHP 10.5M - PHP 10.7M", monthlyDp: "15% DP: PHP 37.7k - PHP 38.5k/mo" },
        { layout: "2BR", floorArea: "73.00 sqm", status: "Few left", priceRange: "PHP 10.8M", monthlyDp: "15% DP: PHP 38.8k/mo" },
        { layout: "2BR", floorArea: "75.50 sqm", status: "Limited", priceRange: "PHP 10.2M - PHP 10.9M", monthlyDp: "15% DP: PHP 36.7k - PHP 39.0k/mo" },
        { layout: "2BR", floorArea: "76.50 sqm", status: "Few left", priceRange: "PHP 11.0M", monthlyDp: "15% DP: PHP 39.5k/mo" },
        { layout: "2BR", floorArea: "78.00 sqm", status: "Limited", priceRange: "PHP 10.4M - PHP 10.6M", monthlyDp: "15% DP: PHP 37.5k - PHP 38.1k/mo" },
        { layout: "2BR", floorArea: "78.50 sqm", status: "Few left", priceRange: "PHP 10.7M", monthlyDp: "15% DP: PHP 38.4k/mo" },
        { layout: "2BR", floorArea: "79.00 sqm", status: "Few left", priceRange: "PHP 11.4M", monthlyDp: "15% DP: PHP 41.1k/mo" },
        { layout: "2BR", floorArea: "80.50 sqm", status: "Few left", priceRange: "PHP 11.0M - PHP 11.3M", monthlyDp: "15% DP: PHP 39.5k - PHP 40.8k/mo" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "Suitable for larger families and long-term end-users, 3-bedroom units offer more generous living areas, multiple bedrooms, and enhanced privacy. These units are positioned for buyers who want a spacious resort-style home within Cebu City.",
      layouts: ["81.50 sqm", "84.50 sqm", "88.50 sqm"],
      rows: [
        { layout: "3BR", floorArea: "81.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 12.0M - PHP 12.8M", monthlyDp: "15% DP: PHP 43.3k - PHP 46.1k/mo" },
        { layout: "3BR", floorArea: "84.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 12.0M - PHP 13.1M", monthlyDp: "15% DP: PHP 43.1k - PHP 47.0k/mo" },
        { layout: "3BR", floorArea: "88.50 sqm", status: "Few left", priceRange: "PHP 12.8M - PHP 12.9M", monthlyDp: "15% DP: PHP 46.1k - PHP 46.5k/mo" }
      ]
    },
    {
      title: "Tandem Units",
      description: "Kalea Heights also offers tandem units created by combining two adjacent Type O and Type U 2-bedroom layouts into a larger residence. These provide expanded living and dining areas for extended families, multi-generational living, or buyers who want more space within a condominium setting. Availability and final layout must be confirmed.",
      layouts: ["Combined Type O + Type U 2BR layouts"],
      rows: [
        { layout: "Tandem Unit", floorArea: "For confirmation", status: "Ask for latest availability", priceRange: "Request latest computation", monthlyDp: "Request latest computation" }
      ]
    }
  ],
  floorPlans: [
    { title: "Floor Plans", text: "Kalea Heights offers thoughtfully planned residential floor layouts designed to maximize space efficiency, natural light, and ventilation. The project features well-balanced unit distributions per floor to support privacy, comfort, and a lower-density residential feel despite its high-rise setting." },
    { title: "Leia Building Floor Plans", text: "Each tower is planned with Lumiventt Design Technology, allowing natural airflow through sky patios and breezeways to improve comfort in common areas." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text:
      "Kalea Heights follows a standard payment structure where the down payment is payable in monthly installments during the construction period. The remaining balance may be settled through Bank Financing or In-House Financing upon turnover, subject to latest developer terms and buyer qualification. From time to time, special promos with lower down payment options may be available. Buyers must request the latest computation before making any reservation decision.",
    importantNotes: [
      "Standard terms and promo terms may differ.",
      "The 15% DP promo is for buyer guidance only.",
      "Ask Luisa to confirm if the promo is still active before using it for decisions."
    ],
    sampleComputation: [
      { label: "Unit", value: "C-Leia 1429" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "29.50 sqm" },
      { label: "List Price", value: "PHP 5,613,000.00" },
      { label: "RFO Date", value: "Dec 2029" },
      { label: "Selected Downpayment", value: "15%" },
      { label: "Months to Pay", value: "41 months" },
      { label: "Financing", value: "15% DP, 85% Bank Financing" },
      { label: "Special Discount", value: "3.5% / PHP 196,455.00" },
      { label: "Net", value: "PHP 5,416,545.00" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 5,416,545.00" },
      { label: "Closing Fee", value: "10.5% / PHP 568,737.23" },
      { label: "Total with Closing Fee", value: "PHP 5,985,282.23" },
      { label: "Downpayment", value: "15% / PHP 812,481.75" },
      { label: "Less Reservation Fee", value: "PHP 30,000.00" },
      { label: "Net Downpayment", value: "PHP 782,481.75" },
      { label: "Monthly DP", value: "41 months / PHP 19,084.92/mo" },
      { label: "Balance", value: "85% / PHP 4,604,063.25" },
      { label: "Closing Fee", value: "PHP 568,737.23" },
      { label: "Total Balance + Closing Fee", value: "PHP 5,172,800.47" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 60,060.60/month" },
      { label: "15 years | 7.0%", value: "PHP 46,494.59/month" },
      { label: "20 years | 7.0%", value: "PHP 40,104.67/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [
      { title: "15% DP Promo", items: ["Down Payment Promo: 15% DP", "Special Discount: 3.5% discount on DP Promo Term", "Promo Ends: July 31, 2026", "Scope: All Units", "Promo details are reference only and must be confirmed with Luisa before use."] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "32.00 sqm", price: "PHP 6,141,000", rfo: "Dec 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "63.50 sqm", price: "PHP 9,152,000", rfo: "Dec 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "55.00 sqm", price: "PHP 8,509,000", rfo: "Dec 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "56.50 sqm", price: "PHP 8,687,000", rfo: "Dec 2029", note: "HomeReady: Not applicable" },
      { type: "3BR", size: "88.50 sqm", price: "PHP 12,793,000", rfo: "Dec 2029", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal and Reservation Guidance",
    text:
      "Kalea Heights may offer access to a unit holding portal where buyers can temporarily secure a preferred unit while reviewing payment options and reservation requirements, subject to current availability and holding rules. Ask Luisa to confirm the latest unit holding process.",
    steps: [
      "Register online if the latest process requires it",
      "Review preferred unit type, size, and budget range",
      "Ask Luisa to confirm availability and holding rules",
      "Request latest computation before proceeding",
      "Proceed only through accepted reservation channels"
    ]
  },
  reservationRequirements: [
    "Online Client Registration: Begin by registering online to access the Unit Holding Portal or buyer registration process, subject to latest procedure.",
    "Submit Valid IDs: Provide government-issued IDs for identity verification.",
    "Philippine TIN Number: Prepare Tax Identification Number because it may be required for reservation processing.",
    "Reservation Agreement Form: Complete and sign the Reservation Agreement Form.",
    "Reservation Fee: PHP 30,000 for residential unit.",
    "Parking Slot Fee: PHP 10,000 for parking slot if applicable.",
    "Payment Options: Online banking, credit/debit card, or other accepted methods may be available, subject to confirmation.",
    "Additional Requirements After Reservation: Proof of Billing, Preferred Mode of Payment, post-dated checks, auto-debit arrangement, or other latest policy requirements."
  ],
  newsMedia: [
    { title: "Project presentation materials", label: "Request official presentation from Luisa", url: "" },
    { title: "Official updates and advisories", label: "Confirm through official channels", url: "" }
  ]
};

const solmeraCoastDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  tagline: "Beach park condotel living and investment opportunity in San Juan, Batangas.",
  city: "San Juan, Batangas",
  location: "Batangas",
  status: "Preselling",
  propertyType: "Beach Park Condotel Complex",
  developmentType: "Beach Park Condotel Complex",
  landArea: "For confirmation",
  architecturalTheme: "Asian Tropical",
  address: "Brgy. Subukin and Calubcub II, San Juan, Batangas",
  turnoverYear: "2027-2028",
  targetRfo: "February 2027 to February 2028, depending on building",
  unitTypes: ["Studio", "1BR", "2BR"],
  priceRangeLabel: "PHP 6.6M - PHP 19.3M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, rental pool details, and turnover dates must be confirmed with Luisa before deciding.",
  sourceUrl: "",
  lastVerified: "For client confirmation",
  overview:
    "Solmera Coast by DMCI Homes is a beach park condotel complex in San Juan, Batangas, located in Brgy. Subukin and Calubcub II. It is positioned for buyers reviewing leisure use, beachfront lifestyle, and potential rental pool participation, subject to the latest official terms.",
  introParagraphs: [
    "Solmera Coast offers Studio, 1BR, and 2BR unit options with Asian Tropical architecture, beach and resort amenities, pool areas, lounges, restaurants, and leisure spaces.",
    "The project has multiple mid-rise buildings with different turnover dates, including Matahari, Kartika, Bumi, Asri, and Nusa.",
    "All pricing, availability, rental pool details, payment terms, promos, turnover schedules, and investment references are for buyer assistance only. Rental income, appreciation, occupancy, and investment returns are not guaranteed."
  ],
  projectFacts: [
    { label: "Location", value: "Brgy. Subukin and Calubcub II, San Juan, Batangas" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Type of Development", value: "Beach Park Condotel Complex" },
    { label: "Number of Buildings", value: "5 MRBs" },
    { label: "Number of Floors", value: "7 storeys, including 6 residential floors and 1 basement level" },
    { label: "Architectural Theme", value: "Asian Tropical" },
    { label: "Unit Types", value: "Studio, 1BR, 2BR Units" },
    { label: "Turnover Date", value: "Matahari Building February 2027; Kartika Building May 2027; Bumi August 2027; Asri November 2027; Nusa February 2028" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "31.00 - 49.50 sqm", range: "PHP 6.6M - PHP 10.9M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 60.2k - PHP 206.2k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", floorArea: "69.00 - 70.00 sqm", range: "PHP 15.3M - PHP 15.4M", status: "Ask Luisa to confirm current availability", monthlyDp: "15% DP: PHP 119.1k - PHP 226.3k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "63.00 - 92.00 sqm", range: "PHP 12.2M - PHP 19.3M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 112.5k - PHP 408.3k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "Solmera Coast is located in San Juan, Batangas, a municipality known for beaches, marine life, and leisure tourism. Nearby attractions and travel references are guide information only and should be verified with current maps and official project materials.",
  locationDetails: {
    title: "Project Location - San Juan, Batangas",
    text: "Solmera Coast is located in San Juan, Batangas, a municipality known for beaches, marine life, and leisure tourism. Its setting near resort destinations, aquatic activities, mangrove forests, mountains, and coastal attractions positions it for leisure use and investment review. Distances and travel references should be confirmed with current maps before site viewing or reservation.",
    exactAddress: "Brgy. Subukin and Calubcub II, San Juan, Batangas"
  },
  nearbyDestinations: [
    { group: "Tourism and Beach Lifestyle", items: ["Laiya beach area - For confirmation", "Beach resorts and aquatic activities - For confirmation", "Marine protected areas - For confirmation", "Mangrove forests and ecotourism areas - For confirmation", "Mountain and hiking destinations - For confirmation"] },
    { group: "Historical / Local Interest", items: ["San Juan Nepomuceno Church - For confirmation", "San Juan town proper - For confirmation"] },
    { group: "Nature and Leisure", items: ["Beachfront leisure areas - For confirmation", "Coastal attractions - For confirmation", "Outdoor activity areas - For confirmation"] }
  ],
  whyInvest: [
    "Beach park condotel concept for leisure use and investment review",
    "San Juan, Batangas coastal destination with resort-style positioning",
    "Studio, 1BR, and 2BR options for different buyer goals",
    "Rental pool participation may be available for selected buildings, subject to official terms",
    "Broker-assisted computation, availability checking, viewing coordination, and reservation guidance through Luisa"
  ],
  highlights: [
    "Beach Park Condotel Complex",
    "5 mid-rise buildings",
    "Asian Tropical architecture",
    "Building RFO schedule from February 2027 to February 2028",
    "Pool complex, welcome pavilion, convention center, beach, and resort-style leisure areas"
  ],
  themeDescription:
    "Asian Tropical architecture supports a resort-oriented coastal setting. Final design, amenities, building details, and hospitality program terms must be confirmed through official project materials.",
  siteDevelopment: {
    title: "Site Development Plan",
    text:
      "Solmera Coast is designed as a beach park condotel complex with resort-style spaces set within a coastal environment. The development is planned with multiple mid-rise buildings, resort amenities, landscaped areas, pool complexes, dining areas, event spaces, and leisure zones. The site development is intended to blend relaxation, recreation, and investment-oriented hospitality use. Site development details, final project materials, building placement, and final amenities must be confirmed with official project materials.",
    keyStats: [
      { label: "Development", value: "Beach Park Condotel Complex" },
      { label: "Buildings", value: "5 MRBs" },
      { label: "Floors", value: "7 storeys including 6 residential floors and 1 basement level" },
      { label: "Theme", value: "Asian Tropical architecture" },
      { label: "Pools", value: "Pool complex" },
      { label: "Arrival", value: "Welcome Pavilion" },
      { label: "Events", value: "Convention Center" },
      { label: "Lifestyle", value: "Beach and resort-style leisure areas" }
    ]
  },
  viewHighlights: [
    { title: "360-degree virtual tour support", text: "Request an approved virtual tour link or online presentation schedule from Luisa when available." },
    { title: "Beach park condotel setting", text: "Review the coastal lifestyle and hospitality positioning through approved project materials." },
    { title: "San Juan, Batangas coastal destination", text: "A leisure-oriented location for buyers comparing beach use and investment review." },
    { title: "Pool, lounge, and beach perspectives", text: "Pool complex, sky lounge, sky promenade, beach area, and resort-style spaces should be confirmed with official visuals." },
    { title: "Leisure and investment positioning", text: "Investment/rental pool references are not guaranteed and must be verified before deciding." }
  ],
  videoTourTitle: "Explore Solmera Coast in 360 Degrees",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  amenities: ["Infinity Pool", "Kiddie Pool", "Lap Pool", "Leisure Pool", "Sky Deck Pool", "Pool Pavilion", "Sky Lounge", "Restaurants", "Gym", "Convention Center", "Welcome Pavilion", "Beach Area"],
  amenityGroups: [
    { title: "Pool Complex", items: ["Infinity Pool", "Kiddie Pool", "Lap Pool", "Leisure Pool", "Sky Deck Pool", "Pool Pavilion"] },
    { title: "Lounges and Dining", items: ["Sky Lounge", "Game Area", "Restaurants", "Snack Bar", "Open Lounge", "Sky Promenade"] },
    { title: "Fitness, Events, and Arrival", items: ["Gym", "Convention Center", "Welcome Pavilion", "Drop-Off Area"] },
    { title: "Outdoor and Beach Lifestyle", items: ["Multi-Purpose Lawn", "Activity Lawn", "Beach Area", "Balcony View", "Landscaped resort areas"] },
    { title: "Building and Project Perspectives", items: ["Building Facade", "Solmera Coast project perspective"] }
  ],
  otherAmenities: ["Amenities are based on the buyer guide and must be confirmed with the latest official project materials."],
  nearbyLandmarks: ["San Juan, Batangas", "Laiya beach area", "Beach resorts", "Marine protected areas", "Mangrove forests"],
  siteProgressStatus: "Site progress information should be confirmed through official DMCI channels or Luisa.",
  masterPlanNotes: "Site development, building placement, pool complex, amenity, and floor plan visuals can be added once approved Solmera Coast assets are available.",
  buildings: [
    { name: "Matahari Building", developmentType: "Condotel", levels: ["February 2027 target turnover"], features: ["Building details for confirmation"] },
    { name: "Kartika Building", developmentType: "Condotel", levels: ["May 2027 target turnover"], features: ["Building details for confirmation"] },
    { name: "Bumi Building", developmentType: "Condotel", levels: ["August 2027 target turnover"], features: ["Building details for confirmation"] },
    { name: "Asri Building", developmentType: "Residential", levels: ["November 2027 target turnover"], features: ["Building details for confirmation"] },
    { name: "Nusa Building", developmentType: "Condotel", levels: ["February 2028 target turnover"], features: ["Building details for confirmation"] }
  ],
  rentalPoolProgram: {
    title: "Individual Rental Pool Program",
    intro:
      "Solmera Coast may offer an Individual Rental Pool Program for selected buildings, providing buyers an option to participate in a professionally managed hotel/rental operation. Program details, eligibility, projected income, occupancy, owner usage, lease terms, and restrictions must be confirmed with Luisa and official project documents before any investment decision.",
    cards: [
      { title: "Program Availability", items: ["Available for selected units in Matahari, Kartika, Bumi, and Nusa buildings based on the available project guide.", "Do not assume all units are eligible unless confirmed."] },
      { title: "Revenue Share Reference", items: ["Owners may receive 30% of gross room revenue generated from the entire hotel operation, based on the available project guide.", "Revenue is based on a pooling system and not only the individual unit's occupancy."] },
      { title: "Professional Management", items: ["Professional management is handled by DMCI PDI Hotels based on the available project guide.", "Independent short-term leasing by owners is not permitted in the available project guide."] },
      { title: "Lease / Restrictions", items: ["Lease tenure is described as an initial 10-year period with automatic renewal option for another 10 years, subject to actual agreement terms.", "Owner usage, lease renewal, and restrictions must be reviewed through official documents."] },
      { title: "Owner Perks", items: ["Owners may receive complimentary room nights each year, subject to program terms.", "Owners may use the property personally, gift stays, or review potential income opportunities, subject to official terms."] },
      { title: "Projection Warning", items: ["The source mentions that at 35% occupancy, a studio unit may generate approximately PHP 16,440 monthly, with projections scaling up to 75% occupancy.", "This is a reference projection only, not guaranteed income."] }
    ],
    warning:
      "Rental pool income, occupancy, revenue share, complimentary nights, lease renewal, and projected returns are not guaranteed. These must be confirmed through the latest official rental pool documents before deciding."
  },
  unitInventoryPreview: [
    { type: "Studio", floorArea: "31.00 - 49.50 sqm", indicativeRange: "PHP 6.6M-PHP 10.9M reference range", status: "Ask for latest availability" },
    { type: "1BR", floorArea: "69.00 - 70.00 sqm", indicativeRange: "PHP 15.3M-PHP 15.4M reference range", status: "Ask for latest availability" },
    { type: "2BR", floorArea: "63.00 - 92.00 sqm", indicativeRange: "PHP 12.2M-PHP 19.3M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    { title: "Studio Units", description: "Studio units are designed for singles, couples, leisure users, and investors reviewing efficient beach park condotel options.", layouts: ["31.00 sqm", "31.50 sqm", "34.00 sqm", "34.50 sqm", "35.00 sqm", "42.00 sqm", "49.50 sqm"], rows: [
      { layout: "STUDIO", floorArea: "31.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 6.6M - PHP 7.1M", monthlyDp: "15% DP: PHP 60.2k - PHP 65.0k/mo" },
      { layout: "STUDIO", floorArea: "31.50 sqm", status: "Few left", priceRange: "PHP 6.6M - PHP 7.1M", monthlyDp: "15% DP: PHP 60.4k - PHP 65.0k/mo" },
      { layout: "STUDIO", floorArea: "34.00 sqm", status: "Limited", priceRange: "PHP 8.1M", monthlyDp: "15% DP: PHP 90.8k - PHP 118.1k/mo" },
      { layout: "STUDIO", floorArea: "34.50 sqm", status: "Limited", priceRange: "PHP 8.1M", monthlyDp: "15% DP: PHP 62.6k - PHP 169.9k/mo" },
      { layout: "STUDIO", floorArea: "35.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.2M", monthlyDp: "15% DP: PHP 63.1k - PHP 171.2k/mo" },
      { layout: "STUDIO", floorArea: "42.00 sqm", status: "Limited", priceRange: "PHP 9.8M", monthlyDp: "15% DP: PHP 76.0k - PHP 206.2k/mo" },
      { layout: "STUDIO", floorArea: "49.50 sqm", status: "Few left", priceRange: "PHP 10.9M", monthlyDp: "15% DP: PHP 84.3k - PHP 160.2k/mo" }
    ] },
    { title: "1-Bedroom Units", description: "1BR units provide larger layouts with separate living and sleeping spaces for buyers who want more comfort during leisure stays or investment-oriented use.", layouts: ["69.00 sqm", "70.00 sqm"], rows: [
      { layout: "1BR", floorArea: "69.00 sqm", status: "Few left", priceRange: "PHP 15.3M", monthlyDp: "15% DP: PHP 119.1k - PHP 226.3k/mo" },
      { layout: "1BR", floorArea: "70.00 sqm", status: "Few left", priceRange: "PHP 15.4M", monthlyDp: "15% DP: PHP 120.0k - PHP 175.3k/mo" }
    ] },
    { title: "2-Bedroom Units", description: "2BR units are suited for families, groups, or buyers seeking larger resort-style accommodations with more living space and privacy.", layouts: ["63.00 sqm", "91.50 sqm", "92.00 sqm"], rows: [
      { layout: "2BR", floorArea: "63.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 12.2M - PHP 14.1M", monthlyDp: "15% DP: PHP 112.5k - PHP 129.9k/mo" },
      { layout: "2BR", floorArea: "91.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 19.3M", monthlyDp: "15% DP: PHP 150.4k - PHP 408.3k/mo" },
      { layout: "2BR", floorArea: "92.00 sqm", status: "Limited", priceRange: "PHP 17.4M - PHP 19.2M", monthlyDp: "15% DP: PHP 161.3k - PHP 177.8k/mo" }
    ] }
  ],
  floorPlans: [
    { title: "Floor Plans", text: "Solmera Coast includes building-specific floor plans for its mid-rise beach park condotel buildings. Floor plan images, unit cuts, building assignment, rental pool eligibility, and final unit details must be confirmed with the latest official project materials." },
    { title: "Matahari Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Kartika Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Bumi Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Asri Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Nusa Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text: "Solmera Coast offers standard and promotional payment options. The standard financing plan requires a minimum 20% down payment extended until the RFO date, with the remaining 80% balance through bank financing. The promotional reference term shows a 15% down payment until RFO with the remaining 85% through bank financing. Terms, promos, discounts, closing fees, monthly payments, bank financing, and availability must be confirmed with Luisa before deciding.",
    rfoSchedule: [
      { label: "Matahari", value: "February 2027 | Condotel" },
      { label: "Kartika", value: "May 2027 | Condotel" },
      { label: "Bumi", value: "August 2027 | Condotel" },
      { label: "Asri", value: "November 2027 | Residential" },
      { label: "Nusa", value: "February 2028 | Condotel" }
    ],
    importantNotes: ["Standard terms and promo terms may differ.", "Monthly DP ranges are guide values from the buyer guide and may vary by building, unit, term, promo, and current availability.", "Request the latest computation before comparing units or preparing reservation."],
    sampleComputation: [
      { label: "Unit", value: "C-Asri 218" },
      { label: "Type", value: "STUDIO" },
      { label: "Size", value: "31.00 sqm" },
      { label: "List Price", value: "PHP 6,621,000.00" },
      { label: "RFO Date", value: "Nov 2027" },
      { label: "Selected Downpayment", value: "15%" },
      { label: "Months to Pay", value: "16 months" },
      { label: "Financing", value: "15% DP, 85% Bank Financing" },
      { label: "Special Discount", value: "0.0% / PHP 0.00" },
      { label: "Regular Discount", value: "0.0% / PHP 0.00" },
      { label: "Additional Discount", value: "0.0% / PHP 0.00" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 6,621,000.00" },
      { label: "Closing Fee", value: "10.5% / PHP 695,205.00" },
      { label: "Total with Closing Fee", value: "PHP 7,316,205.00" },
      { label: "Downpayment", value: "15% / PHP 993,150.00" },
      { label: "Less Reservation Fee", value: "PHP 30,000.00" },
      { label: "Net Downpayment", value: "PHP 963,150.00" },
      { label: "Monthly DP", value: "16 months / PHP 60,196.88/mo" },
      { label: "Balance", value: "85% / PHP 5,627,850.00" },
      { label: "Closing Fee", value: "PHP 695,205.00" },
      { label: "Total Balance + Closing Fee", value: "PHP 6,323,055.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 73,416.03/month" },
      { label: "15 years | 7.0%", value: "PHP 56,833.41/month" },
      { label: "20 years | 7.0%", value: "PHP 49,022.58/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, building RFO dates, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [{ title: "15% DP Promo", items: ["Down Payment Promo: 15% DP", "Promo Ends: July 31, 2026", "Scope: Building Asri", "Promo details are reference only and must be confirmed with Luisa before use."] }],
    sampleAvailableComputations: [
      { type: "2BR", size: "91.50 sqm", price: "PHP 19,255,000", rfo: "Feb 2027", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "34.50 sqm", price: "PHP 8,130,000", rfo: "Feb 2027", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "35.00 sqm", price: "PHP 8,188,000", rfo: "Feb 2027", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "35.00 sqm", price: "PHP 8,188,000", rfo: "Feb 2027", note: "HomeReady: Not applicable" },
      { type: "STUDIO", size: "42.00 sqm", price: "PHP 9,822,000", rfo: "Feb 2027", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Solmera Coast Unit Holding Portal",
    text: "Solmera Coast may offer a Unit Holding Portal that allows prospective buyers to temporarily reserve or hold preferred units before making a final decision, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Register through the current unit holding process if available.", "Select preferred building, unit type, size, and budget range.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels."]
  },
  reservationRequirements: [
    "Online Client Registration Form: Complete the online client registration process if required.",
    "Reservation Agreement Form: Submit the Reservation Agreement Form.",
    "Valid ID: Submit a copy of a valid government-issued ID.",
    "Reservation Fee: Pay the reservation fee through accepted channels, subject to latest confirmation.",
    "Buyer Assistance: Ask Luisa to confirm the latest required documents, payment channels, and reservation process before proceeding.",
    "Optional Notes: Additional requirements may apply depending on buyer profile, financing method, and official reservation rules."
  ],
  galleryLabels: ["Project Perspective", "Site Development Plan", "Pool Complex", "Sky Lounge / Sky Promenade", "Beach Area"],
  newsMedia: [
    { title: "Project presentation materials", label: "Request Solmera Coast presentation from Luisa", url: "" },
    { title: "Rental pool program documents", label: "Ask Luisa for the latest official rental pool references", url: "" }
  ],
  videoTourUrl: ""
};

const mulberryPlace2Details = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  name: "Mulberry Place 2",
  tagline: "A sanctuary of modern Asian Tropical living in Acacia Estates, Taguig.",
  city: "Taguig City",
  location: "Taguig",
  status: "RFO / Preselling Phase 2",
  propertyType: "Mid Rise and High Rise Condominiums",
  developmentType: "Mid Rise Condominiums, High Rise Condominiums",
  landArea: "36,474 sqm",
  architecturalTheme: "Asian Tropical",
  address: "Acacia Estates, Taguig City",
  turnoverYear: "RFO / 2026-2028 Phase 2",
  targetRfo: "Ready For Occupancy; Phase 2 buildings from October 2026 to October 2028",
  unitTypes: ["2BR", "3BR", "4BR"],
  priceRangeLabel: "PHP 8.9M - PHP 26.0M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, building turnover, and payment details must be confirmed with Luisa before deciding.",
  sourceUrl: "",
  lastVerified: "For client confirmation",
  overview:
    "Mulberry Place Phase 2 continues the Acacia Estates community in Taguig City with Asian Tropical architecture and traditional Asian home-inspired design. It is positioned for families and buyers looking for a tranquil yet connected residential setting near BGC, McKinley Hill, retail centers, schools, medical institutions, and airport access points.",
  introParagraphs: [
    "Mulberry Place Phase 2 is a continuation of the Acacia Estates community in Taguig City, designed for buyers comparing connected residential options in a calmer neighborhood setting.",
    "The project uses Asian Tropical and traditional Asian home-inspired aesthetics, with planning that emphasizes harmony, respect, nature, and everyday urban convenience.",
    "It includes both mid-rise and high-rise buildings depending on the phase/building, with 2BR, 3BR, and 4BR unit options for families and end-users. All pricing, availability, promos, building turnover, and computations shown here are reference-only and must be confirmed with Luisa before deciding."
  ],
  projectFacts: [
    { label: "Location", value: "Acacia Estates, Taguig City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Land Area", value: "36,474 sqm" },
    { label: "Development Type", value: "Mid Rise Condominiums, High Rise Condominiums" },
    { label: "Architectural Theme", value: "Asian Tropical" },
    { label: "Phase 2 Buildings", value: "Shantung: High Rise; Taffeta: High Rise; Paisley: Mid Rise; Zephyr: Mid Rise" },
    { label: "Phase 1 Buildings", value: "Bengaline: Mid Rise; Cochine: Mid Rise; Dui: Mid Rise; Marcelline: Mid Rise" },
    { label: "Number of Levels", value: "Mid Rise: 6 Levels; High Rise: 18 Levels" },
    { label: "Unit Types", value: "2BR, 3BR, 4BR" },
    { label: "Turnover", value: "Ready For Occupancy" },
    { label: "Phase 2 Building Turnover", value: "Paisley: October 2026; Shantung: June 2027; Taffeta: August 2028; Zephyr: October 2028" }
  ],
  summaryPricing: [
    { type: "2BR", floorArea: "57.50 - 73.00 sqm", range: "PHP 8.9M - PHP 11.5M", status: "Ask Luisa to confirm availability", monthlyDp: "12% DP: PHP 20.8k - PHP 27.1k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "78.50 - 120.00 sqm", range: "PHP 12.1M - PHP 19.6M", status: "Ask Luisa to confirm availability", monthlyDp: "12% DP: PHP 28.5k - PHP 46.5k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "4BR", floorArea: "144.00 - 152.00 sqm", range: "PHP 23.7M - PHP 26.0M", status: "Ask Luisa to confirm current availability", monthlyDp: "12% DP: PHP 56.4k - PHP 61.7k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "Mulberry Place Phase 2 is nestled in Acacia Estates, Taguig City, strategically between Town Center and Mahogany Place 2. Distances and travel times are reference estimates only and should be verified with current maps before viewing or reservation.",
  locationDetails: {
    title: "Strategic Location of Mulberry Place Phase 2",
    text: "Mulberry Place Phase 2 is nestled in Acacia Estates, Taguig City, strategically between Town Center and Mahogany Place 2. Its proximity to Bonifacio Global City, McKinley Hill, retail centers, schools, medical institutions, and airport access points makes it a convenient option for buyers comparing connected residential communities in Taguig. Source content also mentions convenient access to SM Savemore, Grace Mall, Vista Mall, and SM Aura. Exact distances for SM Savemore, Grace Mall, and Vista Mall should be confirmed.",
    exactAddress: "Acacia Estates, Taguig City"
  },
  nearbyDestinations: [
    { group: "Business & Commercial Hubs", items: ["McKinley Hill - 4 km / 15 mins"] },
    { group: "Medical Institutions", items: ["St. Luke's BGC - 5.4 km / 15 mins"] },
    { group: "Schools", items: ["International School Manila - 6.1 km / 15 mins"] },
    { group: "Retail", items: ["SM Aura - 3.5 km / 10 mins", "SM Savemore - For confirmation", "Grace Mall - For confirmation", "Vista Mall - For confirmation"] },
    { group: "Airport Terminals", items: ["NAIA 3 - 10.5 km / 20 mins"] }
  ],
  whyInvest: [
    "Acacia Estates address in Taguig City for buyers comparing calm residential communities near key business districts",
    "Asian Tropical, traditional Asian home-inspired design with landscaped shared spaces",
    "2BR, 3BR, and 4BR unit options for families and end-users",
    "Phase 2 building options include Paisley, Shantung, Taffeta, and Zephyr",
    "Broker-assisted computation, availability checking, viewing coordination, and reservation guidance through Luisa"
  ],
  highlights: [
    "36,474 sqm Acacia Estates community",
    "Mid-rise and high-rise condominium buildings",
    "2BR, 3BR, and 4BR unit options",
    "Phase 2 turnover schedule from October 2026 to October 2028",
    "Access to BGC, McKinley Hill, SM Aura, schools, medical institutions, and NAIA 3"
  ],
  themeDescription:
    "Asian Tropical design supports a calm residential community with garden-style spaces, natural ventilation goals, and everyday convenience. Final building details, deliverables, and final specifications must be confirmed with official project materials.",
  siteDevelopment: {
    title: "Site Development Plan for Mulberry Place Phase 2",
    text:
      "Mulberry Place Phase 2 features residential buildings set within expansive green landscapes in Acacia Estates. The development includes recreational amenities such as swimming pools, a children's play area, landscaped gardens, barbecue areas, and outdoor spaces. The community layout prioritizes pedestrian-friendly pathways and shared spaces to enhance everyday living. Site development details, final project materials, building placement, and final amenities must be confirmed with official project materials.",
    keyStats: [
      { label: "Land Area", value: "36,474 sqm land area" },
      { label: "Community", value: "Acacia Estates community" },
      { label: "Phase 2 Buildings", value: "Paisley, Shantung, Taffeta, Zephyr" },
      { label: "Mid Rise", value: "6 levels" },
      { label: "High Rise", value: "18 levels" },
      { label: "Pathways", value: "Pedestrian-friendly pathways" },
      { label: "Outdoor Spaces", value: "Landscaped gardens and outdoor amenities" }
    ]
  },
  viewHighlights: [
    { title: "Virtual tour support", text: "Request approved Acacia Estates or Mulberry Place Phase 2 virtual tour materials from Luisa when available." },
    { title: "Acacia Estates community setting", text: "Review the landscaped residential environment through approved project materials." },
    { title: "Pedestrian-friendly residential environment", text: "Shared pathways and community spaces are part of the buyer review experience." },
    { title: "Asian Tropical garden-style living", text: "The design direction supports nature, calmness, and everyday residential comfort." },
    { title: "Taguig lifestyle access", text: "Compare access to Taguig, BGC, McKinley Hill, and nearby lifestyle destinations." }
  ],
  videoTourTitle: "Virtual Tour of Acacia Estates",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  amenities: ["Lap Pool", "Kiddie Pool", "Swimming Pools", "Picnic Area", "Landscaped Garden", "Barbecue Areas", "Jogging Path", "Entrance Gate", "Roofdeck", "Sky Promenade", "Sky Patio", "Sky Lounge", "Fitness Center", "Children's Play Area", "Function Room", "Store", "Laundry Station"],
  amenityGroups: [
    { title: "Pools and Water Amenities", items: ["Lap Pool", "Kiddie Pool", "Swimming Pools"] },
    { title: "Outdoor and Garden Spaces", items: ["Picnic Area", "Landscaped Garden", "Barbecue Areas", "Jogging Path", "Entrance Gate"] },
    { title: "Sky and Elevated Spaces", items: ["Roofdeck", "Sky Promenade", "Sky Patio", "Sky Lounge"] },
    { title: "Fitness, Play, and Community", items: ["Fitness Center", "Children's Play Area", "Function Room", "Communal Spaces"] },
    { title: "Daily Convenience", items: ["Store", "Laundry Station"] }
  ],
  otherAmenities: ["Amenities are based on the buyer guide and must be confirmed with the latest official project materials."],
  nearbyLandmarks: ["McKinley Hill", "St. Luke's BGC", "International School Manila", "SM Aura", "NAIA 3"],
  siteProgressStatus: "Phase and building readiness details should be confirmed through official DMCI channels or Luisa before reservation.",
  masterPlanNotes: "Master plan visuals, site development plans, floor plan images, and building placement can be added once approved Mulberry Place 2 assets are available.",
  buildings: [
    { name: "Paisley", developmentType: "Mid Rise", levels: ["October 2026 target turnover", "6 levels"], features: ["Building details for confirmation"] },
    { name: "Shantung", developmentType: "High Rise", levels: ["June 2027 target turnover", "18 levels"], features: ["Building details for confirmation"] },
    { name: "Taffeta", developmentType: "High Rise", levels: ["August 2028 target turnover", "18 levels"], features: ["Building details for confirmation"] },
    { name: "Zephyr", developmentType: "Mid Rise", levels: ["October 2028 target turnover", "6 levels"], features: ["Building details for confirmation"] }
  ],
  unitInventoryPreview: [
    { type: "2BR", floorArea: "57.50 - 73.00 sqm", indicativeRange: "PHP 8.9M-PHP 11.5M reference range", status: "Ask for latest availability" },
    { type: "3BR", floorArea: "78.50 - 120.00 sqm", indicativeRange: "PHP 12.1M-PHP 19.6M reference range", status: "Ask for latest availability" },
    { type: "4BR", floorArea: "144.00 - 152.00 sqm", indicativeRange: "PHP 23.7M-PHP 26.0M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    { title: "2 Bedroom Units", description: "The two-bedroom units at Mulberry Place Phase 2 offer practical layouts with enough space for small families, couples, or professionals. Units are designed for comfort, usability, and everyday convenience.", layouts: ["Two Bedroom F", "Two Bedroom A", "Two Bedroom E", "Two Bedroom C"], rows: [
      { layout: "2BR", floorArea: "57.50 sqm", status: "Available", priceRange: "PHP 8.9M - PHP 9.2M", monthlyDp: "12% DP: PHP 20.8k - PHP 21.5k/mo" },
      { layout: "2BR", floorArea: "60.00 sqm", status: "Few left", priceRange: "PHP 9.8M - PHP 10.1M", monthlyDp: "12% DP: PHP 22.8k - PHP 23.7k/mo" },
      { layout: "2BR", floorArea: "64.50 sqm", status: "Few left", priceRange: "PHP 9.4M - PHP 9.5M", monthlyDp: "12% DP: PHP 21.9k - PHP 22.2k/mo" },
      { layout: "2BR", floorArea: "65.00 sqm", status: "Limited", priceRange: "PHP 9.8M - PHP 10.1M", monthlyDp: "12% DP: PHP 23.0k - PHP 23.7k/mo" },
      { layout: "2BR", floorArea: "67.00 sqm", status: "Available", priceRange: "PHP 9.8M - PHP 11.4M", monthlyDp: "12% DP: PHP 22.9k - PHP 26.7k/mo" },
      { layout: "2BR", floorArea: "69.00 sqm", status: "Available", priceRange: "PHP 9.8M - PHP 11.2M", monthlyDp: "12% DP: PHP 23.0k - PHP 26.3k/mo" },
      { layout: "2BR", floorArea: "73.00 sqm", status: "Available", priceRange: "PHP 10.3M - PHP 11.5M", monthlyDp: "12% DP: PHP 24.2k - PHP 27.1k/mo" }
    ] },
    { title: "3 Bedroom Units", description: "Three-bedroom units provide larger living areas for growing families or buyers who need extra room. Layouts are designed with practical storage, daily comfort, and family use in mind.", layouts: ["3 Bedroom C", "3 Bedroom B", "3 Bedroom D", "3 Bedroom C"], rows: [
      { layout: "3BR", floorArea: "78.50 sqm", status: "Few left", priceRange: "PHP 12.8M", monthlyDp: "12% DP: PHP 30.2k/mo" },
      { layout: "3BR", floorArea: "81.00 sqm", status: "Few left", priceRange: "PHP 12.9M", monthlyDp: "12% DP: PHP 30.3k/mo" },
      { layout: "3BR", floorArea: "85.00 sqm", status: "Available", priceRange: "PHP 12.1M - PHP 13.7M", monthlyDp: "12% DP: PHP 28.5k - PHP 32.3k/mo" },
      { layout: "3BR", floorArea: "101.50 sqm", status: "Few left", priceRange: "PHP 15.5M - PHP 16.4M", monthlyDp: "12% DP: PHP 36.6k - PHP 38.9k/mo" },
      { layout: "3BR", floorArea: "115.00 sqm", status: "Few left", priceRange: "PHP 18.5M - PHP 18.6M", monthlyDp: "12% DP: PHP 43.9k - PHP 44.1k/mo" },
      { layout: "3BR", floorArea: "118.00 sqm", status: "Few left", priceRange: "PHP 18.2M - PHP 18.6M", monthlyDp: "12% DP: PHP 43.0k - PHP 44.1k/mo" },
      { layout: "3BR", floorArea: "120.00 sqm", status: "Few left", priceRange: "PHP 19.5M - PHP 19.6M", monthlyDp: "12% DP: PHP 46.2k - PHP 46.5k/mo" }
    ] },
    { title: "4 Bedroom Units", description: "Four-bedroom units offer more expansive living spaces for larger families or buyers looking for additional comfort, privacy, and flexibility. These layouts may include multiple bathrooms and private balcony features, subject to final unit details.", layouts: ["4 Bedroom A", "4 Bedroom C"], rows: [
      { layout: "4BR", floorArea: "144.00 sqm", status: "Few left", priceRange: "PHP 23.7M - PHP 23.9M", monthlyDp: "12% DP: PHP 56.4k - PHP 56.7k/mo" },
      { layout: "4BR", floorArea: "152.00 sqm", status: "Few left", priceRange: "PHP 24.9M - PHP 26.0M", monthlyDp: "12% DP: PHP 59.1k - PHP 61.7k/mo" }
    ] }
  ],
  floorPlans: [
    { title: "Floor Plans at Mulberry Place Phase 2", text: "Mulberry Place Phase 2 incorporates floor plans that use DMCI Homes' Lumiventt technology to support natural lighting and ventilation throughout each building. Floor plan images, unit cuts, building assignment, final unit details, and deliverables must be confirmed with the latest official project materials." },
    { title: "Paisley Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Shantung Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Taffeta Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Zephyr Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text: "Mulberry Place Phase 2 offers flexible payment terms for buyers comparing ownership options. The regular payment scheme may require a 30% down payment, while promotional terms may allow lower down payment options such as 12% or 15%, subject to current developer promos. The remaining balance may be settled through bank financing or in-house financing options. Terms, promos, discounts, closing fees, monthly payments, financing, and availability must be confirmed with Luisa before deciding.",
    rfoSchedule: [
      { label: "Paisley", value: "October 2026" },
      { label: "Shantung", value: "June 2027" },
      { label: "Taffeta", value: "August 2028" },
      { label: "Zephyr", value: "October 2028" }
    ],
    importantNotes: ["Monthly DP ranges are guide values from the buyer guide and may vary by building, unit, term, promo, and current availability.", "Request the latest computation before comparing units or preparing reservation.", "Promos and payment terms may change without prior notice."],
    sampleComputation: [
      { label: "Unit", value: "C-Paisley 611" },
      { label: "Type", value: "2BR" },
      { label: "Size", value: "57.50 sqm" },
      { label: "List Price", value: "PHP 8,924,000.00" },
      { label: "RFO Date", value: "Oct 2026" },
      { label: "Selected Downpayment", value: "12%" },
      { label: "Number of Months to Pay", value: "36 months" },
      { label: "Financing", value: "12% DP, 88% Bank Financing" },
      { label: "Special Discount", value: "1.0% / PHP 89,240.00" },
      { label: "Net", value: "PHP 8,834,760.00" },
      { label: "Regular Discount", value: "0.0% / PHP 0.00" },
      { label: "Additional Discount", value: "0.0% / PHP 0.00" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 8,834,760.00" },
      { label: "Closing Fee", value: "10.5% / PHP 927,649.80" },
      { label: "Total with Closing Fee", value: "PHP 9,762,409.80" },
      { label: "Downpayment", value: "12% / PHP 1,060,171.20" },
      { label: "Less Reservation Fee", value: "PHP 30,000.00" },
      { label: "Net Downpayment", value: "PHP 1,030,171.20" },
      { label: "Monthly DP", value: "36 months / PHP 28,615.87/mo" },
      { label: "Balance", value: "88% / PHP 7,774,588.80" },
      { label: "Closing Fee", value: "PHP 927,649.80" },
      { label: "Total Balance + Closing Fee", value: "PHP 8,702,238.60" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 101,040.37/month" },
      { label: "15 years | 7.0%", value: "PHP 78,218.18/month" },
      { label: "20 years | 7.0%", value: "PHP 67,468.36/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, building turnover, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [
      { title: "12% DP Promo", items: ["Down Payment Promo: 12% DP", "Special Discount: 1.0% discount on DP Promo Term", "Flexible Down Payment: 36 fixed months", "Promo Ends: July 31, 2026", "Scope: All Units"] },
      { title: "12% DP Promo - Taffeta and Zephyr", items: ["Down Payment Promo: 12% DP", "Flexible Down Payment: 50 fixed months", "Promo Ends: July 31, 2026", "Scope: Building Taffeta and Building Zephyr"] },
      { title: "15% DP Promo", items: ["Down Payment Promo: 15% DP", "Flexible Down Payment: 50 fixed months", "Promo Ends: July 31, 2026", "Scope: Building Taffeta and Building Zephyr"] }
    ],
    sampleAvailableComputations: [
      { type: "3BR", size: "120.00 sqm", price: "PHP 19,489,000", rfo: "Oct 2026", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "60.00 sqm", price: "PHP 10,124,000", rfo: "Oct 2026", note: "HomeReady: Not applicable" },
      { type: "3BR", size: "120.00 sqm", price: "PHP 19,637,000", rfo: "Oct 2026", note: "HomeReady: Not applicable" },
      { type: "3BR", size: "115.00 sqm", price: "PHP 18,549,000", rfo: "Oct 2026", note: "HomeReady: Not applicable" },
      { type: "3BR", size: "115.00 sqm", price: "PHP 18,579,000", rfo: "Oct 2026", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for Mulberry Place Phase 2",
    text: "Mulberry Place Phase 2 may offer an online unit holding portal that allows prospective buyers to temporarily hold a preferred unit before making a final decision, subject to current availability and holding rules. The reference process allows clients to register and hold a unit for free, giving time to decide without immediate commitment.",
    steps: ["Register through the current unit holding process if available.", "Select preferred building, unit type, size, and budget range.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels.", "Unit allocation may follow a systematic, first-come, first-served process, subject to latest rules."]
  },
  reservationRequirements: [
    "Online Client Registration: Begin by registering online to access the unit holding and reservation portals.",
    "Valid IDs: Submit copies of government-issued identification to confirm identity.",
    "Philippine TIN Number: Prepare Tax Identification Number because it is required for the reservation process.",
    "Online Reservation Agreement Form: Complete and submit the digital agreement form detailing the reservation terms and conditions.",
    "Reservation Fee: PHP 30,000 for the residential unit.",
    "Parking Reservation Fee: PHP 10,000 for parking, if applicable.",
    "Payment Channels: Payment may be available through online payment gateway using credit card or BPI Online Banking, subject to latest confirmation.",
    "Proof of Billing Address: Proof of billing address will be required after the initial reservation as part of ongoing requirements."
  ],
  galleryLabels: ["Project Perspective", "Acacia Estates Community", "Site Development Plan", "Roofdeck / Sky Lounge", "Pool and Play Area", "Landscaped Garden", "Floor Plan Preview"],
  newsMedia: [
    { title: "Project presentation materials", label: "Request Mulberry Place 2 presentation from Luisa", url: "" },
    { title: "Computation and promo references", label: "Ask Luisa for the latest official computation sheet", url: "" }
  ],
  videoTourUrl: ""
};

const fortisResidencesDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  name: "Fortis Residences",
  tagline: "Signature high-rise living in the heart of Makati.",
  city: "Makati City",
  location: "Makati",
  status: "Preselling",
  propertyType: "Mixed-use High Rise Buildings",
  developmentType: "Mixed-use High Rise Buildings",
  landArea: "4,451 sqm",
  architecturalTheme: "Modern Contemporary",
  address: "Chino Roces Avenue, Makati City",
  turnoverYear: "2027",
  targetRfo: "December 2027",
  unitTypes: ["1BR", "2BR", "3BR"],
  priceRangeLabel: "PHP 14.3M - PHP 39.0M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, unit availability, turnover, and payment details must be confirmed with Luisa before deciding.",
  sourceUrl: "",
  lastVerified: "For client confirmation",
  overview:
    "Fortis Residences by DMCI Homes is a signature high-rise development along Chino Roces Avenue, Makati City. It combines contemporary design, premium amenities, city convenience, and a tranquil residential setting for homeowners and investors comparing Makati options.",
  introParagraphs: [
    "Fortis Residences by DMCI Homes is a signature high-rise development in Makati, located along Chino Roces Avenue, Makati City.",
    "The project combines contemporary design, premium amenities, city convenience, and a tranquil residential setting for buyers who want access to Makati, BGC, McKinley Hill, Pasay, Ortigas, Alabang via Skyway, and major lifestyle destinations.",
    "Fortis Residences offers 1BR, 2BR, and 3BR unit options across two mixed-use high-rise buildings with 38 floors and 504 units. All pricing, availability, promos, turnover, and computations shown here are reference-only and must be confirmed with Luisa before deciding."
  ],
  projectFacts: [
    { label: "Location", value: "Chino Roces Avenue, Makati City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Lot Area", value: "4,451 sqm" },
    { label: "Type of Development", value: "Mixed-use High Rise Buildings, 2 Buildings" },
    { label: "Architectural Theme", value: "Modern Contemporary" },
    { label: "Number of Floors", value: "38" },
    { label: "Number of Units", value: "504" },
    { label: "Unit Mix", value: "1-bedroom, 2-bedroom, and 3-bedroom units" },
    { label: "Turnover Date", value: "December 2027" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "55.50 sqm", range: "PHP 14.3M - PHP 15.6M", status: "Ask Luisa to confirm availability", monthlyDp: "20% DP: PHP 91.0k - PHP 99.8k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "72.50 - 102.00 sqm", range: "PHP 18.5M - PHP 28.2M", status: "Ask Luisa to confirm availability", monthlyDp: "20% DP: PHP 118.6k - PHP 180.8k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "143.50 - 154.00 sqm", range: "PHP 33.9M - PHP 39.0M", status: "Ask Luisa to confirm availability", monthlyDp: "20% DP: PHP 217.8k - PHP 250.5k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "Fortis Residences enjoys a strategic location along Chino Roces Avenue in Makati City, offering access to commercial, business, medical, educational, leisure, airport, and church destinations. Nearby destinations are reference guide information only.",
  locationDetails: {
    title: "Project Location - Chino Roces Avenue, Makati City",
    text: "Fortis Residences enjoys a strategic location along Chino Roces Avenue in Makati City, offering access to commercial, business, medical, educational, leisure, airport, and church destinations. Its location is suited for buyers who value convenience, city access, and a premium Makati address. Nearby destinations are reference guide information only. Travel times and exact distances should be verified with current maps before viewing or reservation.",
    exactAddress: "Chino Roces Avenue, Makati City"
  },
  nearbyDestinations: [
    { group: "Central Business District", items: ["Makati - For confirmation", "McKinley Hills - For confirmation", "Bonifacio Global City - For confirmation", "Ortigas via MRT - For confirmation", "Pasay Business District - For confirmation", "Alabang via Skyway - For confirmation"] },
    { group: "Hospitals", items: ["Makati Medical Center - For confirmation", "St. Luke's Medical Center BGC - For confirmation", "Ospital ng Makati - For confirmation"] },
    { group: "Schools and Universities", items: ["Don Bosco Technical School - For confirmation", "Assumption College - For confirmation", "Colegio San Agustin - For confirmation", "Asia Pacific College - For confirmation", "Far Eastern University Makati - For confirmation", "MAPUA Makati - For confirmation", "Universities near LRT and MRT - For confirmation"] },
    { group: "Airport", items: ["NAIA Terminal - For confirmation"] },
    { group: "Leisure", items: ["Villamor Golf Course - For confirmation", "Manila Golf Club - For confirmation", "Glorietta - For confirmation", "Greenbelt - For confirmation", "Rockwell - For confirmation", "Bonifacio Global City - For confirmation"] },
    { group: "Church", items: ["St. John Bosco Parish Church - For confirmation", "Sanctuario de San Antonio - For confirmation", "St. Andrew Parish Church - For confirmation"] }
  ],
  whyInvest: [
    "Makati address along Chino Roces Avenue for buyers comparing premium city residences",
    "Access-oriented location near Makati, BGC, McKinley Hill, Pasay, Ortigas, and Alabang via Skyway",
    "Modern Contemporary design with premium amenities and tranquil residential planning",
    "1BR, 2BR, and 3BR options for homeowners and investment-oriented buyers",
    "Broker-assisted computation, availability checking, viewing coordination, and reservation guidance through Luisa"
  ],
  highlights: [
    "4,451 sqm lot area",
    "Two mixed-use high-rise buildings",
    "38 floors and 504 units",
    "1BR, 2BR, and 3BR unit options",
    "Target turnover: December 2027"
  ],
  themeDescription:
    "Modern Contemporary design supports premium high-rise city living with polished shared spaces, city convenience, and tranquil residential amenities. Final building details, finishes, and final specifications must be confirmed with official project materials.",
  siteDevelopment: {
    title: "Site Development Plan at Fortis Residences",
    text:
      "Fortis Residences is planned as a mixed-use high-rise development in Makati, integrating residential spaces, amenities, and natural elements within a premium urban setting. The site development plan is designed to harmonize luxury living with practical city access and everyday convenience. Amenity spaces, lounge areas, landscaped areas, pools, and shared lifestyle zones are positioned to support relaxation and active lifestyles. Site development details, final project materials, building placement, and final amenities must be confirmed with official project materials.",
    keyStats: [
      { label: "Lot Area", value: "4,451 sqm lot area" },
      { label: "Buildings", value: "2 mixed-use high-rise buildings" },
      { label: "Floors", value: "38 floors" },
      { label: "Units", value: "504 units" },
      { label: "Theme", value: "Modern Contemporary theme" },
      { label: "Plan", value: "Ground floor site development plan" },
      { label: "Amenities", value: "Amenity and lounge areas" },
      { label: "Setting", value: "Makati city-center setting" }
    ]
  },
  viewHighlights: [
    { title: "360-degree virtual tour support", text: "Request an approved virtual tour link or online consultation schedule from Luisa when available." },
    { title: "Makati high-rise city living", text: "Review the city-center lifestyle through approved project presentation materials." },
    { title: "Modern Contemporary residential setting", text: "Contemporary tower living with amenity spaces and premium shared areas." },
    { title: "Elevated amenity perspectives", text: "Sky deck, sky promenade, and pool deck amenity perspectives should be confirmed with official visuals." },
    { title: "Connected destination access", text: "Compare access to major business, leisure, medical, and transport destinations." }
  ],
  videoTourTitle: "Explore Fortis Residences: A Virtual Journey",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  amenities: ["Sky Bar", "Sky Deck Pool", "Sky Promenade", "Leisure Pool", "Pool Deck", "Lounge Area", "Green Spaces", "Reception Lobby", "Drop-Off Promenade", "Fitness Center", "Children's Play Area", "Basketball Court", "Lounge Areas", "Shared amenity areas"],
  amenityGroups: [
    { title: "Sky and Elevated Spaces", items: ["Sky Bar", "Sky Deck Pool", "Sky Promenade"] },
    { title: "Pools and Leisure", items: ["Leisure Pool", "Pool Deck", "Lounge Area", "Green Spaces"] },
    { title: "Arrival and Lobby", items: ["Reception Lobby", "Drop-Off Promenade"] },
    { title: "Fitness, Play, and Active Spaces", items: ["Fitness Center", "Children's Play Area", "Basketball Court"] },
    { title: "Social and Relaxation Spaces", items: ["Lounge Areas", "Shared amenity areas"] }
  ],
  otherAmenities: ["Amenities are based on the buyer guide and must be confirmed with the latest official project materials."],
  nearbyLandmarks: ["Makati", "McKinley Hills", "Bonifacio Global City", "Makati Medical Center", "Greenbelt", "Glorietta", "NAIA Terminal"],
  siteProgressStatus: "Turnover and site progress information should be confirmed through official DMCI channels or Luisa before reservation.",
  masterPlanNotes: "Master plan visuals, site development plans, floor plan images, and building placement can be added once approved Fortis Residences assets are available.",
  buildings: [
    { name: "Fortis Residences Building 1", developmentType: "Mixed-use High Rise Building", levels: ["38 floors", "December 2027 target turnover"], features: ["Building details for confirmation"] },
    { name: "Fortis Residences Building 2", developmentType: "Mixed-use High Rise Building", levels: ["38 floors", "December 2027 target turnover"], features: ["Building details for confirmation"] }
  ],
  unitInventoryPreview: [
    { type: "1BR", floorArea: "55.50 sqm", indicativeRange: "PHP 14.3M-PHP 15.6M reference range", status: "Ask for latest availability" },
    { type: "2BR", floorArea: "72.50 - 102.00 sqm", indicativeRange: "PHP 18.5M-PHP 28.2M reference range", status: "Ask for latest availability" },
    { type: "3BR", floorArea: "143.50 - 154.00 sqm", indicativeRange: "PHP 33.9M-PHP 39.0M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    { title: "1 Bedroom Units", description: "Fortis Residences 1BR units are designed for buyers seeking a premium Makati address with a spacious one-bedroom layout and contemporary finishes.", layouts: ["1BR"], rows: [
      { layout: "1BR", floorArea: "55.50 sqm", status: "Available", priceRange: "PHP 14.3M - PHP 15.6M", monthlyDp: "20% DP: PHP 91.0k - PHP 99.8k/mo" }
    ] },
    { title: "2 Bedroom Units", description: "Fortis Residences 2BR units provide larger living spaces for couples, small families, or buyers who want extra space for work, guests, and daily comfort.", layouts: ["2BR A", "2BR B", "2BR C", "2BR F", "2BR G"], rows: [
      { layout: "2BR", floorArea: "72.50 sqm", status: "Available", priceRange: "PHP 18.5M - PHP 20.8M", monthlyDp: "20% DP: PHP 118.6k - PHP 133.1k/mo" },
      { layout: "2BR", floorArea: "86.00 sqm", status: "Available", priceRange: "PHP 21.7M - PHP 22.9M", monthlyDp: "20% DP: PHP 139.0k - PHP 146.8k/mo" },
      { layout: "2BR", floorArea: "91.00 sqm", status: "Available", priceRange: "PHP 22.3M - PHP 24.6M", monthlyDp: "20% DP: PHP 143.0k - PHP 157.9k/mo" },
      { layout: "2BR", floorArea: "93.50 sqm", status: "Available", priceRange: "PHP 23.3M - PHP 26.1M", monthlyDp: "20% DP: PHP 149.2k - PHP 167.5k/mo" },
      { layout: "2BR", floorArea: "95.00 sqm", status: "Limited", priceRange: "PHP 24.1M - PHP 26.8M", monthlyDp: "20% DP: PHP 154.6k - PHP 171.7k/mo" },
      { layout: "2BR", floorArea: "100.00 sqm", status: "Available", priceRange: "PHP 24.8M - PHP 27.4M", monthlyDp: "20% DP: PHP 159.1k - PHP 175.6k/mo" },
      { layout: "2BR", floorArea: "102.00 sqm", status: "Available", priceRange: "PHP 25.6M - PHP 28.2M", monthlyDp: "20% DP: PHP 163.9k - PHP 180.8k/mo" }
    ] },
    { title: "3 Bedroom Units", description: "Fortis Residences 3BR units are designed for larger households and buyers seeking more expansive city residences with premium space, comfort, and privacy.", layouts: ["3BR A", "3BR B", "3BR C", "3BR D"], rows: [
      { layout: "3BR", floorArea: "143.50 sqm", status: "Limited", priceRange: "PHP 33.9M - PHP 36.2M", monthlyDp: "20% DP: PHP 217.8k - PHP 232.4k/mo" },
      { layout: "3BR", floorArea: "145.00 sqm", status: "Limited", priceRange: "PHP 34.7M - PHP 37.0M", monthlyDp: "20% DP: PHP 223.2k - PHP 237.5k/mo" },
      { layout: "3BR", floorArea: "152.50 sqm", status: "Available", priceRange: "PHP 34.0M - PHP 38.4M", monthlyDp: "20% DP: PHP 218.7k - PHP 246.9k/mo" },
      { layout: "3BR", floorArea: "154.00 sqm", status: "Few left", priceRange: "PHP 35.2M - PHP 39.0M", monthlyDp: "20% DP: PHP 226.1k - PHP 250.5k/mo" }
    ] }
  ],
  floorPlans: [
    { title: "Floor Plans", text: "Fortis Residences offers floor plans crafted to provide functional and spacious living areas for different family needs and buyer preferences. Floor plan images, unit cuts, final unit details, and deliverables must be confirmed with the latest official project materials." },
    { title: "Fortis Building Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "1BR Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "2BR Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "3BR Floor Plan", text: "Ask Luisa for the latest official layout sheet." },
    { title: "Amenity / Typical Floor Plan", text: "Ask Luisa for the latest official layout sheet." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text: "Fortis Residences offers payment terms designed to support financial planning for buyers reviewing ownership options in Makati. The reference sample below shows a 20% down payment payable over 17 months with the remaining 80% through bank financing. Terms, promos, discounts, closing fees, monthly payments, financing, and availability must be confirmed with Luisa before deciding.",
    importantNotes: ["Monthly DP ranges are guide values from the buyer guide and may vary by unit, term, promo, and current availability.", "Request the latest computation before comparing units or preparing reservation.", "Promos and payment terms may change without prior notice."],
    sampleComputation: [
      { label: "Unit", value: "C-Fortis 317" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "55.50 sqm" },
      { label: "List Price", value: "PHP 14,251,000.00" },
      { label: "RFO Date", value: "Dec 2027" },
      { label: "Selected Downpayment", value: "20%" },
      { label: "Number of Months to Pay", value: "17 months" },
      { label: "Financing", value: "20% DP, 80% Bank Financing" },
      { label: "Special Discount", value: "2.0% / PHP 285,020.00" },
      { label: "Net", value: "PHP 13,965,980.00" },
      { label: "Regular Discount", value: "0.0% / PHP 0.00" },
      { label: "Additional Discount", value: "0.0% / PHP 0.00" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 13,965,980.00" },
      { label: "Closing Fee", value: "10.5% / PHP 1,466,427.90" },
      { label: "Total with Closing Fee", value: "PHP 15,432,407.90" },
      { label: "Downpayment", value: "20% / PHP 2,793,196.00" },
      { label: "Less Reservation Fee", value: "PHP 50,000.00" },
      { label: "Net Downpayment", value: "PHP 2,743,196.00" },
      { label: "Monthly DP", value: "17 months / PHP 161,364.47/mo" },
      { label: "Balance", value: "80% / PHP 11,172,784.00" },
      { label: "Closing Fee", value: "PHP 1,466,427.90" },
      { label: "Total Balance + Closing Fee", value: "PHP 12,639,211.90" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 146,751.97/month" },
      { label: "15 years | 7.0%", value: "PHP 113,604.81/month" },
      { label: "20 years | 7.0%", value: "PHP 97,991.68/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, turnover, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [
      { title: "20% DP Promo - Extended Payment", items: ["Down Payment Promo: 20% DP", "Special Discount: 1.0% discount on DP Promo Term", "Extended Payment Period: extra 10 months to spread down payment", "Promo Ends: June 30, 2026", "Scope: All Units"] },
      { title: "20% DP Promo", items: ["Down Payment Promo: 20% DP", "Special Discount: 2.0% discount on DP Promo Term", "Promo Ends: June 30, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "55.50 sqm", price: "PHP 15,369,000", rfo: "Dec 2027", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "95.00 sqm", price: "PHP 26,296,000", rfo: "Dec 2027", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "102.00 sqm", price: "PHP 27,700,000", rfo: "Dec 2027", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "91.00 sqm", price: "PHP 24,206,000", rfo: "Dec 2027", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "100.00 sqm", price: "PHP 26,908,000", rfo: "Dec 2027", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal at Fortis Residences",
    text: "Fortis Residences may offer a Unit Holding Portal that allows prospective buyers to temporarily hold preferred units before making a final reservation decision, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Register through the current unit holding process if available.", "Select preferred unit type, size, and budget range.", "Ask Luisa to confirm current availability and holding rules.", "Request latest computation before proceeding.", "Proceed only through accepted reservation channels.", "Unit holding is for buyer review only and does not guarantee reservation unless official requirements are completed."]
  },
  reservationTitle: "Reservation Guidance",
  reservationNote: "Final reservation requirements, payment channels, forms, IDs, and buyer documents must be confirmed with Luisa and official project materials before proceeding.",
  reservationRequirements: [
    "Request latest computation and availability from Luisa.",
    "Confirm preferred unit, payment term, and promo applicability.",
    "Ask Luisa for the latest Fortis reservation requirements.",
    "Prepare valid ID and buyer information if required by the current process.",
    "Confirm reservation fee and payment channels before paying.",
    "Proceed only through official reservation channels."
  ],
  galleryLabels: ["Project Perspective", "Site Development Plan", "Reception Lobby", "Pool Deck", "Sky Deck Pool", "Sky Promenade", "Lounge Area", "Floor Plan Preview"],
  newsMedia: [
    { title: "Project presentation materials", label: "Request Fortis Residences presentation from Luisa", url: "" },
    { title: "Computation and promo references", label: "Ask Luisa for the latest official computation sheet", url: "" }
  ],
  videoTourUrl: ""
};

const valeronTowerDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  tagline: "Modern artisanal high-rise living at the C-5 Ortigas Corridor.",
  city: "Pasig City",
  location: "Pasig",
  status: "Preselling",
  propertyType: "High-Rise Condominium",
  developmentType: "High-Rise Condominium",
  landArea: "8,390 sqm",
  architecturalTheme: "Modern Artisanal",
  address: "C-5 cor. P.E. Antonio St., Brgy. Ugong, Pasig City",
  turnoverYear: "2029",
  targetRfo: "July 2029",
  unitTypes: ["Studio", "1BR", "2BR", "3BR", "Tandem"],
  priceRangeLabel: "PHP 7.0M - PHP 16.8M reference range",
  priceSourceNote: "For buyer guidance only. Prices, promos, terms, and availability must be confirmed with Luisa before deciding.",
  sourceUrl: "",
  lastVerified: "For client confirmation",
  overview:
    "Valeron Tower by DMCI Homes is located at C-5 cor. P.E. Antonio St., Brgy. Ugong, Pasig City. Positioned at the gateway of the C-5 Ortigas Corridor, it is a high-rise condominium with a Modern Artisanal theme for buyers who want Pasig and Ortigas access, city convenience, and a more refined residential setting.",
  introParagraphs: [
    "Valeron Tower offers Studio, 1BR, 2BR, 3BR, and Tandem unit options for modern urban living near Pasig, Ortigas, C-5, and nearby townships.",
    "The project highlights resort-like amenities, sky-level spaces, landscaped shared areas, and a strong amenity and open-space ratio.",
    "All pricing, unit availability, promos, payment terms, distances, and turnover details shown here are reference-only buyer assistance notes. Request the latest computation and confirmed availability from Luisa before deciding."
  ],
  projectFacts: [
    { label: "Address", value: "C-5 cor. P.E. Antonio St., Brgy. Ugong, Pasig City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Land Area", value: "8,390 sqm" },
    { label: "Architectural Theme", value: "Modern Artisanal" },
    { label: "Development Type", value: "High-Rise Condominium" },
    { label: "Number of Storeys", value: "55 storeys including amenities, commercial spaces, and parking levels" },
    { label: "Unit Types", value: "Studio, 1BR, 2BR, 3BR, Tandem" },
    { label: "Amenity and Open Space Ratio", value: "76%" },
    { label: "Turnover Date / RFO Date", value: "July 2029" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "32.50 - 38.50 sqm", range: "PHP 7.0M - PHP 8.8M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 21.2k - PHP 27.0k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", floorArea: "46.50 - 48.50 sqm", range: "PHP 8.9M - PHP 11.4M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 27.3k - PHP 34.9k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "59.00 - 91.00 sqm", range: "PHP 10.9M - PHP 16.2M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 33.4k - PHP 50.0k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "76.00 - 84.50 sqm", range: "PHP 13.7M - PHP 16.8M", status: "Ask Luisa to confirm availability", monthlyDp: "15% DP: PHP 42.3k - PHP 52.0k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "Valeron Tower is located at the intersection of C-5 and P.E. Antonio St. in Brgy. Ugong, Pasig City, giving buyers access to major business areas, retail centers, schools, healthcare facilities, and nearby townships.",
  locationDetails: {
    title: "Discover the Prime Location of Valeron Tower",
    text: "Valeron Tower is located at the intersection of C-5 and P.E. Antonio St. in Brgy. Ugong, Pasig City. Positioned at the gateway of the C-5 Ortigas Corridor, it offers access to major business areas, retail centers, schools, healthcare facilities, and nearby townships. Distances and travel times are guide estimates only and should be verified with current maps before site viewing or reservation.",
    exactAddress: "C-5 cor. P.E. Antonio St., Brgy. Ugong, Pasig City"
  },
  nearbyDestinations: [
    { group: "Educational Institutions", items: ["Reedley International School - 400 m, 5 mins", "University of Asia and the Pacific - 2.3 km, 8 mins"] },
    { group: "Retail Establishments", items: ["SM Center Pasig - 250 m, 3 mins", "Ayala Malls the 30th - 1.9 km, 6 mins"] },
    { group: "Healthcare Facilities", items: ["The Medical City - 1.7 km, 6 mins", "Pasig City General Hospital - 3.7 km, 10 mins"] },
    { group: "Townships", items: ["Arcovia City - 450 m, 1 min", "Ortigas Center - 2.1 km, 9 mins"] }
  ],
  whyInvest: [
    "C-5 Ortigas Corridor location for Pasig, Ortigas, and nearby township access",
    "Modern Artisanal high-rise concept with resort-like amenities and sky-level spaces",
    "Studio to tandem unit options for end-use, family, rental, or investment comparison",
    "Broker-assisted computation, availability checking, viewing coordination, and reservation guidance through Luisa"
  ],
  highlights: [
    "8,390 sqm land area",
    "55-storey high-rise condominium",
    "76% amenity and open-space ratio",
    "Studio, 1BR, 2BR, 3BR, and Tandem unit options",
    "Target RFO: July 2029"
  ],
  themeDescription:
    "Modern Artisanal design gives Valeron Tower a refined city-residential character. Final design details, finishes, and final project materials must be verified through current official project materials.",
  siteDevelopment: {
    title: "Valeron Tower: A Blueprint for Elevated Living",
    text:
      "Valeron Tower is planned as a high-rise residential development at the C-5 Ortigas Corridor, designed to balance city access with refined residential comfort. The site development plan includes ground floor development, amenity floor development, and roof deck development. Resort-like amenities, leisure pools, open lounges, sky lounges, landscaped areas, and shared lifestyle spaces are planned across different levels. Site development details, floor layouts, and final project materials are reference-only until official project materials are reviewed.",
    keyStats: [
      { label: "Land Area", value: "8,390 sqm land area" },
      { label: "Storeys", value: "55 storeys" },
      { label: "Theme", value: "Modern Artisanal theme" },
      { label: "Open Space", value: "76% amenity and open space ratio" },
      { label: "Ground Level", value: "Ground Floor Development Plan" },
      { label: "Amenity Level", value: "Amenity Floor Development Plan" },
      { label: "Roof Deck", value: "Roof Deck Development Plan" }
    ]
  },
  viewHighlights: [
    { title: "360-degree virtual tour support", text: "Request an approved virtual tour link or online presentation schedule from Luisa when available." },
    { title: "C-5 Ortigas Corridor location", text: "Review project fit for buyers prioritizing Pasig, Ortigas, C-5, and nearby township access." },
    { title: "Modern Artisanal high-rise design", text: "A refined high-rise concept for buyers comparing premium city-residential options." },
    { title: "Sky deck and sky promenade perspectives", text: "Sky-level amenities and roof deck areas should be reviewed using official project materials." },
    { title: "Pasig and Ortigas urban living", text: "Suitable for buyers comparing city convenience, work access, and residential comfort." }
  ],
  videoTourTitle: "Discover Valeron Tower in 360 Degrees",
  videoTourCopy: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available.",
  videoTourNote: "Large videos are not loaded directly here so the website stays fast on mobile.",
  amenities: ["Sky Deck", "Sky Deck Pool", "Sky Promenade", "Sky Lounge", "Leisure Pool", "Kiddie Pool", "Fitness Center", "Basketball Court", "Children's Play Area", "Reception Lobby"],
  amenityGroups: [
    { title: "Sky Deck and Roof Amenities", items: ["Sky Deck", "Sky Deck Pool", "Sky Promenade", "Sky Lounge"] },
    { title: "Pools and Leisure", items: ["Leisure Pool", "Kiddie Pool", "Sky Deck Pool", "Open Lawn"] },
    { title: "Fitness and Active Spaces", items: ["Fitness Center", "Basketball Court", "Children's Play Area"] },
    { title: "Indoor and Social Spaces", items: ["7th Floor Open Lounge", "Reception Lobby", "Snack Bar"] },
    { title: "Landscape and Shared Lifestyle Spaces", items: ["Lush Gardens", "Open Lounge Areas", "Resort-like shared amenities"] }
  ],
  otherAmenities: ["Amenities are based on the buyer guide and must be confirmed with the latest official project materials."],
  buildingFeatures: ["55 storeys including amenities, commercial spaces, and parking levels", "Ground floor development", "Amenity floor development", "Roof deck development"],
  nearbyLandmarks: ["C-5", "P.E. Antonio St.", "SM Center Pasig", "Arcovia City", "Ortigas Center"],
  siteProgressStatus: "Site progress information should be confirmed through official DMCI channels or Luisa.",
  masterPlanNotes: "Ground floor, amenity floor, roof deck, and site development visuals can be added once approved Valeron Tower assets are available.",
  buildings: [
    { name: "Valeron Tower", developmentType: "High-Rise Condominium", levels: ["55 storeys including amenities, commercial spaces, and parking levels"], features: ["Modern Artisanal theme", "Commercial spaces", "Amenity levels", "Roof deck amenities"] }
  ],
  unitInventoryPreview: [
    { type: "Studio", floorArea: "32.50 - 38.50 sqm", indicativeRange: "PHP 7.0M-PHP 8.8M reference range", status: "Ask for latest availability" },
    { type: "1BR", floorArea: "46.50 - 48.50 sqm", indicativeRange: "PHP 8.9M-PHP 11.4M reference range", status: "Ask for latest availability" },
    { type: "2BR", floorArea: "59.00 - 91.00 sqm", indicativeRange: "PHP 10.9M-PHP 16.2M reference range", status: "Ask for latest availability" },
    { type: "3BR", floorArea: "76.00 - 84.50 sqm", indicativeRange: "PHP 13.7M-PHP 16.8M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    { title: "Studio Units", description: "Ideal for young professionals or singles, Studio units are designed with efficiency and style in mind, offering a smart living space that blends function with modern aesthetics.", layouts: ["STUDIO A - 32.5 sqm", "STUDIO B - 34.5 sqm"], rows: [
      { layout: "STUDIO", floorArea: "32.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 7.0M - PHP 8.8M", monthlyDp: "15% DP: PHP 21.2k - PHP 27.0k/mo" },
      { layout: "STUDIO", floorArea: "34.50 sqm", status: "Few left", priceRange: "PHP 8.2M", monthlyDp: "15% DP: PHP 24.9k/mo" },
      { layout: "STUDIO", floorArea: "38.50 sqm", status: "Few left", priceRange: "PHP 8.6M", monthlyDp: "15% DP: PHP 26.3k/mo" }
    ] },
    { title: "1-Bedroom Units", description: "Perfect for individuals or couples, 1-bedroom units offer more room with separate living and sleeping areas for comfortable city living.", layouts: ["1BR B - 46.5 sqm", "1BR C - 48.5 sqm", "1BR A - 53 sqm"], rows: [
      { layout: "1BR", floorArea: "46.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 8.9M - PHP 11.4M", monthlyDp: "15% DP: PHP 27.3k - PHP 34.9k/mo" },
      { layout: "1BR", floorArea: "48.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 9.4M - PHP 11.3M", monthlyDp: "15% DP: PHP 28.7k - PHP 34.8k/mo" }
    ] },
    { title: "2-Bedroom Units", description: "Suited for small families or professionals needing extra room, 2-bedroom units feature larger spaces designed for comfort, privacy, relaxation, and work-from-home flexibility.", layouts: ["2BR J - 59 sqm", "2BR Q - 61 sqm", "2BR C - 61.5 sqm", "2BR F - 63 sqm", "2BR A - 65.5 sqm", "2BR D - 65.5 sqm", "2BR M - 66.5 sqm", "2BR G - 67 sqm", "2BR I - 67 sqm", "2BR K - 67 sqm", "2BR N - 67.5 sqm", "2BR O - 67.5 sqm", "2BR S - 68.5 sqm", "2BR P - 69 sqm", "2BR R - 69.5 sqm", "2BR L - 77.5 sqm", "2BR B - 78 sqm", "2BR H - 82 sqm", "2BR T - 87 sqm", "2BR U - 91 sqm"], rows: [
      { layout: "2BR", floorArea: "59.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 11.1M - PHP 12.4M", monthlyDp: "15% DP: PHP 34.1k - PHP 38.0k/mo" },
      { layout: "2BR", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 11.4M - PHP 12.7M", monthlyDp: "15% DP: PHP 35.1k - PHP 39.0k/mo" },
      { layout: "2BR", floorArea: "61.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 11.1M - PHP 12.3M", monthlyDp: "15% DP: PHP 34.1k - PHP 37.7k/mo" },
      { layout: "2BR", floorArea: "63.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 10.9M - PHP 13.3M", monthlyDp: "15% DP: PHP 33.4k - PHP 40.8k/mo" },
      { layout: "2BR", floorArea: "65.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 11.1M - PHP 13.8M", monthlyDp: "15% DP: PHP 34.1k - PHP 42.5k/mo" },
      { layout: "2BR", floorArea: "66.50 sqm", status: "Few left", priceRange: "PHP 11.5M - PHP 12.5M", monthlyDp: "15% DP: PHP 35.4k - PHP 38.4k/mo" },
      { layout: "2BR", floorArea: "67.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 11.2M - PHP 14.1M", monthlyDp: "15% DP: PHP 34.5k - PHP 43.3k/mo" },
      { layout: "2BR", floorArea: "67.50 sqm", status: "Few left", priceRange: "PHP 12.2M - PHP 12.7M", monthlyDp: "15% DP: PHP 37.5k - PHP 39.2k/mo" },
      { layout: "2BR", floorArea: "69.00 sqm", status: "Limited", priceRange: "PHP 11.9M - PHP 13.7M", monthlyDp: "15% DP: PHP 36.5k - PHP 42.0k/mo" },
      { layout: "2BR", floorArea: "69.50 sqm", status: "Limited", priceRange: "PHP 11.8M - PHP 13.5M", monthlyDp: "15% DP: PHP 36.1k - PHP 41.6k/mo" },
      { layout: "2BR", floorArea: "77.50 sqm", status: "Few left", priceRange: "PHP 14.0M", monthlyDp: "15% DP: PHP 43.2k/mo" },
      { layout: "2BR", floorArea: "78.00 sqm", status: "Few left", priceRange: "PHP 13.9M - PHP 14.1M", monthlyDp: "15% DP: PHP 42.8k - PHP 43.4k/mo" },
      { layout: "2BR", floorArea: "82.00 sqm", status: "Few left", priceRange: "PHP 14.5M", monthlyDp: "15% DP: PHP 44.6k/mo" },
      { layout: "2BR", floorArea: "87.00 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 15.5M - PHP 16.2M", monthlyDp: "15% DP: PHP 47.9k - PHP 50.0k/mo" },
      { layout: "2BR", floorArea: "91.00 sqm", status: "Few left", priceRange: "PHP 16.1M - PHP 16.2M", monthlyDp: "15% DP: PHP 49.8k - PHP 50.0k/mo" }
    ] },
    { title: "3-Bedroom Units", description: "Designed for larger families or buyers who want additional space, 3-bedroom units provide more expansive living areas, extra bedrooms, and enhanced flexibility for long-term family living.", layouts: ["3BR B - 76 sqm", "3BR F - 78 sqm", "3BR C - 79.5 sqm", "3BR A - 82.5 sqm", "3BR G - 83 sqm", "3BR D - 84.5 sqm", "3BR E - 84.5 sqm", "3BR H - 84.5 sqm"], rows: [
      { layout: "3BR", floorArea: "76.00 sqm", status: "Few left", priceRange: "PHP 14.1M - PHP 14.1M", monthlyDp: "15% DP: PHP 43.5k - PHP 43.6k/mo" },
      { layout: "3BR", floorArea: "78.00 sqm", status: "Few left", priceRange: "PHP 13.7M - PHP 14.7M", monthlyDp: "15% DP: PHP 42.3k - PHP 45.2k/mo" },
      { layout: "3BR", floorArea: "82.50 sqm", status: "Few left", priceRange: "PHP 14.3M - PHP 15.4M", monthlyDp: "15% DP: PHP 44.1k - PHP 47.6k/mo" },
      { layout: "3BR", floorArea: "84.50 sqm", status: "Ask Luisa to confirm availability", priceRange: "PHP 14.1M - PHP 16.8M", monthlyDp: "15% DP: PHP 43.6k - PHP 52.0k/mo" }
    ] },
    { title: "Tandem Units", description: "For buyers requiring more space or planning a combined home-and-office setup, tandem units provide a larger and more flexible environment. Availability, layout combination, and final deliverables must be confirmed with Luisa.", layouts: ["Tandem layout combinations for confirmation"], rows: [
      { layout: "Tandem", floorArea: "For confirmation", status: "Ask for latest availability", priceRange: "Request latest computation", monthlyDp: "Request latest computation" }
    ] }
  ],
  floorPlans: [
    { title: "Diverse Living Spaces at Valeron Tower", text: "Valeron Tower offers an extensive selection of floor plans designed to accommodate different lifestyles and preferences, from compact studios to larger family layouts. Floor plan images and final unit details must be confirmed with the latest official project materials." },
    { title: "7th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "8th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "9th / 10th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "11th / 14th / 18th / 20th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "15th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "16th / 17th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "21st / 33rd Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "22nd / 23rd / 34th / 35th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "24th / 26th / 30th / 32nd / 36th / 38th / 42nd Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "27th / 39th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "28th / 29th / 40th / 41st Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "43rd / 44th / 48th / 50th / 54th / PH Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "45th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "46th / 47th Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "51st Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "52nd / 53rd Floor", text: "Floor plan preview can be added once approved official materials are selected." },
    { title: "East Building Floor Plans", text: "Ask Luisa for the latest official East Building layout sheets." },
    { title: "West Building Floor Plans", text: "Ask Luisa for the latest official West Building layout sheets." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text: "Valeron Tower offers standard payment terms designed to help buyers spread the down payment until the RFO date. The reference sample below shows a 30% down payment, deferred monthly until July 2029, with the remaining balance through bank financing. Computations, rates, discounts, closing fees, bank terms, and availability must be confirmed with Luisa before deciding.",
    importantNotes: ["Ask Luisa to confirm current promos for this property.", "The summary cards show 15% DP guide ranges, while the detailed payment sample shows a standard 30% DP term.", "Guide ranges and actual terms must be confirmed before any reservation decision."],
    sampleComputation: [
      { label: "Unit", value: "C - Valeron West 1203B" },
      { label: "Type", value: "STUDIO" },
      { label: "Size", value: "32.50 sqm" },
      { label: "List Price", value: "PHP 6,990,000.00" },
      { label: "RFO Date", value: "Jul 2029" },
      { label: "Selected Downpayment", value: "30%" },
      { label: "Months to Pay", value: "36 months" },
      { label: "Financing", value: "30% DP, 70% Bank Financing" },
      { label: "Special Discount", value: "0.0% / PHP 0.00" },
      { label: "Regular Discount", value: "4.0% / PHP 279,600.00" },
      { label: "Net", value: "PHP 6,710,400.00" },
      { label: "Additional Discount", value: "0% / PHP 0.00" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 6,710,400.00" },
      { label: "Closing Fee", value: "10.5% / PHP 704,592.00" },
      { label: "Total with Closing Fee", value: "PHP 7,414,992.00" },
      { label: "Downpayment", value: "30% / PHP 2,013,120.00" },
      { label: "Less Reservation Fee", value: "PHP 30,000.00" },
      { label: "Net Downpayment", value: "PHP 1,983,120.00" },
      { label: "Monthly DP", value: "36 months / PHP 55,086.67/mo" },
      { label: "Balance", value: "70% / PHP 4,697,280.00" },
      { label: "Closing Fee", value: "PHP 704,592.00" },
      { label: "Total Balance + Closing Fee", value: "PHP 5,401,872.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 62,720.31/month" },
      { label: "15 years | 7.0%", value: "PHP 48,553.55/month" },
      { label: "20 years | 7.0%", value: "PHP 41,880.66/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [{ title: "Promo Guide", items: ["Ask Luisa to confirm current promos for this property.", "Promo details and payment terms must be confirmed with Luisa before use."] }],
    sampleAvailableComputations: [
      { type: "1BR", size: "46.50 sqm", price: "PHP 10,868,000", rfo: "Jul 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "63.00 sqm", price: "PHP 13,270,000", rfo: "Jul 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "63.00 sqm", price: "PHP 13,057,000", rfo: "Jul 2029", note: "HomeReady: Not applicable" },
      { type: "1BR", size: "46.50 sqm", price: "PHP 10,689,000", rfo: "Jul 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "65.50 sqm", price: "PHP 13,327,000", rfo: "Jul 2029", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Valeron Tower Unit Holding Portal",
    text: "Valeron Tower may offer a Unit Holding Portal that allows prospective buyers to temporarily hold preferred units before final reservation, subject to current availability and holding rules. Ask Luisa to confirm the latest portal process before proceeding.",
    steps: ["Registration: Begin by registering through the current unit holding process.", "Holding Link: After registration, buyers may receive an email link that allows them to hold up to two units, subject to latest rules.", "Philippine-Based Clients: Reference holding period is 24 hours or 1 day.", "International Clients: Reference holding period is 72 hours or 3 days.", "Confirmation Email: After selecting and holding units, buyers may receive a confirmation email with instructions.", "Reservation Instructions: If the buyer decides to reserve, follow the official instructions provided through the current process."],
    notes: ["Holding a unit does not require a financial commitment in the reference process.", "Held units may be released after the holding period expires if reservation is not confirmed.", "Holding rules may change and must be confirmed with Luisa."]
  },
  reservationRequirements: [
    "Online Client Registration: Begin by registering online to access the unit holding and reservation portals.",
    "Valid IDs: Submit copies of government-issued identification to confirm identity.",
    "Philippine TIN Number: Prepare Tax Identification Number because it may be required for reservation processing.",
    "Online Reservation Agreement Form: Complete and submit the digital agreement form detailing reservation terms and conditions.",
    "Reservation Fee: PHP 30,000 for the residential unit.",
    "Parking Reservation Fee: PHP 10,000 for parking, if applicable.",
    "Payment Channels: Online payment gateway, debit/credit card, BPI Online Banking, Cash, GCash, and dated check may be available, subject to latest confirmation.",
    "Proof of Billing Address: Prepare proof of billing matching preferred billing address.",
    "Preferred Mode of Payment for Down Payment: Options may include PDCs or Auto Debit Arrangement using tie-in banks.",
    "Tie-in Banks: Bank of Commerce, BDO, BPI, Metrobank, EastWest Bank, PNB, Security Bank, Sterling Bank, UnionBank, Robinsons Bank, and Chinabank.",
    "International Clients: Bills Payment through tie-in banks and remittance through Robinsons Bank Virtual Account may be available, subject to latest confirmation."
  ],
  galleryLabels: ["Project Perspective", "Site Development Plan", "Ground Floor Development Plan", "Amenity Floor Development Plan", "Roof Deck Development Plan"],
  newsMedia: [
    { title: "Project presentation materials", label: "Request Valeron Tower presentation from Luisa", url: "" },
    { title: "Virtual 360-degree tour", label: "Request the latest approved virtual tour link", url: "" }
  ],
  videoTourUrl: ""
};

const oneDeltaTerracesDetails = {
  contentLevel: "rich",
  assetStatus: "official-assets-needed",
  verificationStatus: "reference-only",
  tagline: "Modern high-rise living at West Avenue and Quezon Avenue.",
  city: "Quezon City",
  status: "New",
  propertyType: "High-Rise Residential Condominium",
  developmentType: "High-Rise Residential Condominium",
  landArea: "For confirmation",
  architecturalTheme: "Modern Contemporary",
  address: "West Avenue cor. Quezon Avenue, Quezon City",
  turnoverYear: "2029",
  targetRfo: "November 2029",
  unitTypes: ["Studio", "2BR", "3BR"],
  priceRangeLabel: "PHP 7.0M - PHP 21.7M guide range",
  priceSourceNote: "Guide price only. Ask Luisa for the latest computation, promos, terms, and availability before deciding.",
  sourceUrl: "",
  lastVerified: "Reference guide from provided project content",
  overview:
    "One Delta Terraces is a new high-rise residential condominium by DMCI Homes at the corner of West Avenue and Quezon Avenue in Quezon City. This buyer assistance page helps clients review the project location, unit options, amenities, payment guide, and reservation steps before requesting Luisa's latest computation.",
  introParagraphs: [
    "Designed for urban dwellers, professionals, families, and investors, One Delta Terraces offers access to major Quezon City destinations, schools, healthcare facilities, retail centers, and transport hubs.",
    "All prices, promos, unit availability, payment terms, distances, and turnover details shown here are for buyer guidance only. Request the latest computation and confirmed availability from Luisa before making decisions."
  ],
  projectFacts: [
    { label: "Location", value: "West Avenue cor. Quezon Avenue, Quezon City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Architectural Theme", value: "Modern Contemporary" },
    { label: "Development Type", value: "High-Rise Residential Condominium" },
    { label: "Number of Storeys", value: "57 Storeys" },
    { label: "Parking", value: "6 Basement Parking Levels" },
    { label: "Amenities", value: "Ground Floor, 6th Floor, Podium, and Roof Deck amenities" },
    { label: "Residential Floors", value: "51 Residential Floors" },
    { label: "Unit Types", value: "Studio, 2-Bedroom, 3-Bedroom Units" },
    { label: "Amenity Ratio", value: "72%" },
    { label: "Target RFO Date", value: "November 2029" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "28.50 - 37.00 sqm", range: "PHP 7.0M - PHP 10.2M", status: "Ask for latest availability", monthlyDp: "12% DP: PHP 20.2k - PHP 29.9k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "50.00 - 86.00 sqm", range: "PHP 11.2M - PHP 19.9M", status: "Ask for latest availability", monthlyDp: "12% DP: PHP 32.9k - PHP 58.9k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "85.50 - 95.50 sqm", range: "PHP 17.4M - PHP 21.7M", status: "Ask for latest availability", monthlyDp: "12% DP: PHP 51.4k - PHP 64.5k/mo", note: "Ask Luisa for latest computation and availability." }
  ],
  aboutLocation:
    "One Delta Terraces is located at the corner of West Avenue and Quezon Avenue in Quezon City. The location offers access to major business districts, shopping centers, schools, hospitals, and transportation hubs within Metro Manila.",
  locationDetails: {
    title: "Location - West Avenue corner Quezon Avenue, Quezon City",
    text:
      "One Delta Terraces is positioned for convenient urban living in Quezon City, with access to retail, healthcare, schools, business districts, and transport options. Distances are guide estimates only and should be verified with current maps before viewing or reservation.",
    exactAddress: "West Avenue cor. Quezon Avenue, Quezon City"
  },
  nearbyDestinations: [
    {
      group: "Schools",
      items: [
        "St. Mary's College - 500 m",
        "St. Joseph's College - 2.3 km",
        "Philippine Science High School - 2.8 km",
        "UP Diliman - 5.2 km",
        "University of Sto. Tomas - 5.3 km",
        "Far Eastern University - 5.9 km",
        "Miriam College - 7.9 km",
        "Ateneo de Manila - 8.3 km"
      ]
    },
    {
      group: "Retail & Entertainment",
      items: [
        "Fisher Mall - 850 m",
        "Solaire North - 2.2 km",
        "Vertis North - 2.5 km",
        "Eton Centris - 2.9 km",
        "Trinoma - 3.0 km",
        "SM North EDSA - 3.3 km"
      ]
    },
    {
      group: "Healthcare",
      items: [
        "Providence Hospital - 650 m",
        "Capitol Medical Center - 800 m",
        "St. Luke's Medical Center - QC - 2.2 km",
        "Philippine Children's Hospital - 2.6 km",
        "East Avenue Medical Center - 2.8 km",
        "Veteran's Memorial Medical Center - 3.0 km",
        "National Kidney & Transplant Institute - 3.0 km",
        "Philippine Heart Center - 3.0 km",
        "V. Luna Medical Center - 3.5 km"
      ]
    },
    {
      group: "Transportation",
      items: [
        "MRT Quezon Avenue Station - 1.5 km",
        "Skyway Quezon Avenue - 1.9 km",
        "MRT Kamuning Station - 2.1 km",
        "MRT North Avenue Station - 2.4 km",
        "LRT 1 FPJ Station - 3.1 km"
      ]
    }
  ],
  whyInvest: [
    "Strategic Quezon City location at West Avenue and Quezon Avenue",
    "High-rise residential development with urban convenience and premium amenities",
    "Studio, 2BR, and 3BR unit options for different buyer goals",
    "Nearby schools, hospitals, retail centers, and transport hubs",
    "Broker-assisted computation, availability checking, viewing, and reservation guidance through Luisa"
  ],
  highlights: [
    "57-storey high-rise residential condominium",
    "51 residential floors with 6 basement parking levels",
    "Ground floor, 6th floor, podium, and roof deck amenities",
    "Target RFO: November 2029",
    "Buyer assistance for computation, availability, viewing, and reservation steps"
  ],
  siteDevelopment: {
    title: "Site Development Plan",
    text:
      "One Delta Terraces is a planned high-rise residential development at the intersection of West Avenue and Quezon Avenue. The project includes ground floor amenities, podium levels, a 6th-floor amenity level, and roof deck amenities. Site development details remain for buyer guidance only until official images and plans are added.",
    keyStats: [
      { label: "Storeys", value: "57 Storeys" },
      { label: "Residential Floors", value: "51 Residential Floors" },
      { label: "Basement Parking", value: "6 Levels" },
      { label: "Podium", value: "4 Podium Levels" },
      { label: "Amenity Level", value: "6th Floor" },
      { label: "Roof Deck", value: "Amenities" },
      { label: "Amenity Ratio", value: "72%" }
    ]
  },
  themeDescription:
    "Modern Contemporary design supports practical, polished urban living in a central Quezon City location. Final design details, floor plans, and specifications should be confirmed through official project materials.",
  viewHighlights: [
    { title: "Virtual 360-Degree Tour", text: "Request a virtual tour link or online consultation schedule from Luisa when approved materials are available." },
    { title: "Urban Quezon City Setting", text: "Review the West Avenue and Quezon Avenue location with Luisa before site viewing." },
    { title: "Transport and Lifestyle Access", text: "Compare nearby retail, healthcare, schools, and transport hubs before choosing a unit." },
    { title: "Roof Deck Amenities", text: "Ask for the latest project presentation to review sky-level leisure areas and amenity perspectives." }
  ],
  amenityGroups: [
    { title: "Ground Floor", items: ["Reception Lobby", "Open Lounge", "Utility Area", "Commercial Area"] },
    { title: "Amenity Floor, 6th Floor", items: ["Game Area", "Play Area", "Outdoor Fitness Area", "Fitness Gym", "Entertainment Room", "Kiddie Pool", "Leisure Pool"] },
    { title: "Roof Deck", items: ["Sky Promenade", "Open Sky Lounge", "Snack Bar", "Lap Pool with Lounge Pool"] },
    { title: "Amenity Perspectives", items: ["Sky Pool", "Lap Pool", "Lounge Pool", "Sky Promenade", "Roofdeck View", "Outdoor Fitness", "Play Area", "Lounge Kiddie Pool"] }
  ],
  amenities: ["Reception Lobby", "Open Lounge", "Fitness Gym", "Entertainment Room", "Kiddie Pool", "Leisure Pool", "Sky Promenade", "Lap Pool", "Open Sky Lounge", "Snack Bar"],
  otherAmenities: ["Game Area", "Play Area", "Outdoor Fitness Area", "Commercial Area", "Utility Area", "Roofdeck View"],
  nearbyLandmarks: ["West Avenue", "Quezon Avenue", "Fisher Mall", "MRT Quezon Avenue Station"],
  siteProgressStatus: "Site progress information should be confirmed through official DMCI channels or Luisa.",
  masterPlanNotes: "Master plan, floor plan, and amenity visuals can be added once approved One Delta Terraces assets are available.",
  buildings: [
    {
      name: "One Delta Terraces Tower",
      developmentType: "High-Rise Residential Condominium",
      levels: ["57 Storeys", "51 Residential Floors", "6 Basement Parking Levels", "4 Podium Levels"],
      features: ["Ground floor amenities", "6th floor amenity level", "Roof deck amenities", "Modern Contemporary design"]
    }
  ],
  unitInventoryPreview: [
    { type: "Studio", floorArea: "28.50 - 37.00 sqm", indicativeRange: "PHP 7.0M - PHP 10.2M guide range", status: "Ask for latest availability" },
    { type: "2-Bedroom", floorArea: "50.00 - 86.00 sqm", indicativeRange: "PHP 11.2M - PHP 19.9M guide range", status: "Ask for latest availability" },
    { type: "3-Bedroom", floorArea: "85.50 - 95.50 sqm", indicativeRange: "PHP 17.4M - PHP 21.7M guide range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "Studio Units",
      description: "Ideal for singles, young professionals, first-time buyers, or investors, Studio units provide compact yet functional living spaces in a strategic Quezon City location.",
      layouts: ["28.50 sqm", "29.00 sqm", "29.50 sqm", "30.00 sqm", "31.50 sqm", "32.00 sqm", "36.00 sqm", "37.00 sqm"],
      rows: [
        { layout: "Studio 28.50 sqm", floorArea: "28.50 sqm", status: "Few left", priceRange: "PHP 7.2M - PHP 7.5M", monthlyDp: "12% DP: PHP 20.8k - PHP 21.8k/mo" },
        { layout: "Studio 29.00 sqm", floorArea: "29.00 sqm", status: "Limited", priceRange: "PHP 7.0M - PHP 7.8M", monthlyDp: "12% DP: PHP 20.2k - PHP 22.6k/mo" },
        { layout: "Studio 29.50 sqm", floorArea: "29.50 sqm", status: "Ask for latest availability", priceRange: "PHP 7.0M - PHP 8.0M", monthlyDp: "12% DP: PHP 20.3k - PHP 23.3k/mo" },
        { layout: "Studio 30.00 sqm", floorArea: "30.00 sqm", status: "Ask for latest availability", priceRange: "PHP 7.1M - PHP 7.8M", monthlyDp: "12% DP: PHP 20.7k - PHP 22.7k/mo" },
        { layout: "Studio 31.50 sqm", floorArea: "31.50 sqm", status: "Few left", priceRange: "PHP 8.0M - PHP 8.4M", monthlyDp: "12% DP: PHP 23.2k - PHP 24.3k/mo" },
        { layout: "Studio 32.00 sqm", floorArea: "32.00 sqm", status: "Few left", priceRange: "PHP 8.3M - PHP 8.6M", monthlyDp: "12% DP: PHP 24.1k - PHP 25.2k/mo" },
        { layout: "Studio 36.00 sqm", floorArea: "36.00 sqm", status: "Few left", priceRange: "PHP 8.7M - PHP 9.0M", monthlyDp: "12% DP: PHP 25.2k - PHP 26.3k/mo" },
        { layout: "Studio 37.00 sqm", floorArea: "37.00 sqm", status: "Limited", priceRange: "PHP 8.8M - PHP 10.2M", monthlyDp: "12% DP: PHP 25.5k - PHP 29.9k/mo" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "Perfect for small families, couples, or buyers who need extra space for living and working, 2-bedroom units offer more flexible layouts in a central Quezon City location.",
      layouts: ["50.00 sqm", "52.50 sqm", "53.00 sqm", "56.00 sqm", "56.50 sqm", "57.50 sqm", "59.00 sqm", "59.50 sqm", "60.00 sqm", "61.00 sqm", "61.50 sqm", "62.00 sqm", "63.50 sqm", "64.50 sqm", "65.00 sqm", "71.00 sqm", "86.00 sqm"],
      rows: [
        { layout: "2BR 50.00 sqm", floorArea: "50.00 sqm", status: "Few left", priceRange: "PHP 11.7M - PHP 12.4M", monthlyDp: "12% DP: PHP 34.5k - PHP 36.3k/mo" },
        { layout: "2BR 52.50 sqm", floorArea: "52.50 sqm", status: "Few left", priceRange: "PHP 11.2M - PHP 11.3M", monthlyDp: "12% DP: PHP 32.9k - PHP 33.0k/mo" },
        { layout: "2BR 53.00 sqm", floorArea: "53.00 sqm", status: "Limited", priceRange: "PHP 11.5M - PHP 12.8M", monthlyDp: "12% DP: PHP 33.8k - PHP 37.8k/mo" },
        { layout: "2BR 56.00 sqm", floorArea: "56.00 sqm", status: "Ask for latest availability", priceRange: "PHP 12.1M - PHP 13.0M", monthlyDp: "12% DP: PHP 35.5k - PHP 38.1k/mo" },
        { layout: "2BR 56.50 sqm", floorArea: "56.50 sqm", status: "Limited", priceRange: "PHP 12.0M - PHP 13.9M", monthlyDp: "12% DP: PHP 35.3k - PHP 40.9k/mo" },
        { layout: "2BR 57.50 sqm", floorArea: "57.50 sqm", status: "Ask for latest availability", priceRange: "PHP 12.3M - PHP 14.8M", monthlyDp: "12% DP: PHP 36.3k - PHP 43.7k/mo" },
        { layout: "2BR 59.00 sqm", floorArea: "59.00 sqm", status: "Limited", priceRange: "PHP 12.3M - PHP 13.5M", monthlyDp: "12% DP: PHP 36.0k - PHP 39.8k/mo" },
        { layout: "2BR 59.50 sqm", floorArea: "59.50 sqm", status: "Few left", priceRange: "PHP 13.3M - PHP 13.6M", monthlyDp: "12% DP: PHP 39.1k - PHP 40.1k/mo" },
        { layout: "2BR 60.00 sqm", floorArea: "60.00 sqm", status: "Few left", priceRange: "PHP 14.2M - PHP 14.8M", monthlyDp: "12% DP: PHP 41.8k - PHP 43.6k/mo" },
        { layout: "2BR 61.00 sqm", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 13.2M - PHP 14.7M", monthlyDp: "12% DP: PHP 38.7k - PHP 43.4k/mo" },
        { layout: "2BR 61.50 sqm", floorArea: "61.50 sqm", status: "Ask for latest availability", priceRange: "PHP 12.8M - PHP 14.9M", monthlyDp: "12% DP: PHP 37.7k - PHP 44.0k/mo" },
        { layout: "2BR 62.00 sqm", floorArea: "62.00 sqm", status: "Limited", priceRange: "PHP 13.0M - PHP 13.9M", monthlyDp: "12% DP: PHP 38.4k - PHP 41.0k/mo" },
        { layout: "2BR 63.50 sqm", floorArea: "63.50 sqm", status: "Limited", priceRange: "PHP 14.4M - PHP 15.3M", monthlyDp: "12% DP: PHP 42.5k - PHP 45.2k/mo" },
        { layout: "2BR 64.50 sqm", floorArea: "64.50 sqm", status: "Ask for latest availability", priceRange: "PHP 13.8M - PHP 15.9M", monthlyDp: "12% DP: PHP 40.6k - PHP 46.9k/mo" },
        { layout: "2BR 65.00 sqm", floorArea: "65.00 sqm", status: "Ask for latest availability", priceRange: "PHP 13.5M - PHP 16.5M", monthlyDp: "12% DP: PHP 39.7k - PHP 48.7k/mo" },
        { layout: "2BR 71.00 sqm", floorArea: "71.00 sqm", status: "Limited", priceRange: "PHP 14.6M - PHP 15.7M", monthlyDp: "12% DP: PHP 43.2k - PHP 46.5k/mo" },
        { layout: "2BR 86.00 sqm", floorArea: "86.00 sqm", status: "Ask for latest availability", priceRange: "PHP 17.5M - PHP 19.9M", monthlyDp: "12% DP: PHP 51.7k - PHP 58.9k/mo" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "Designed for larger families or buyers seeking more expansive living space, 3-bedroom units offer more room, comfort, and flexibility for long-term urban living.",
      layouts: ["85.50 sqm", "95.50 sqm"],
      rows: [
        { layout: "3BR 85.50 sqm", floorArea: "85.50 sqm", status: "Ask for latest availability", priceRange: "PHP 17.4M - PHP 20.1M", monthlyDp: "12% DP: PHP 51.4k - PHP 59.6k/mo" },
        { layout: "3BR 95.50 sqm", floorArea: "95.50 sqm", status: "Limited", priceRange: "PHP 19.4M - PHP 21.7M", monthlyDp: "12% DP: PHP 57.3k - PHP 64.5k/mo" }
      ]
    }
  ],
  floorPlans: [
    { title: "Floor Plan", text: "Floor plan preview can be added once official project assets are approved." },
    { title: "Typical Floor Plan", text: "Request the latest typical floor plan sheet from Luisa before comparing units." },
    { title: "Atrium Floor Plan", text: "Atrium floor plan details are subject to official confirmation." },
    { title: "Delta Building Floor Plans", text: "Building floor plan images can be mapped into the project folder later." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text:
      "One Delta Terraces offers flexible payment terms for buyers reviewing ownership options. Standard terms and promo terms may differ. Ask Luisa to confirm whether the 12% DP or 15% DP promo is still active before any reservation decision.",
    importantNotes: [
      "Standard payment term may require a 30% minimum down payment until RFO.",
      "12% DP and 15% DP promos are guide references only and may change.",
      "Prices, discounts, rates, closing fees, monthly amortization, promos, and availability must be confirmed before deciding."
    ],
    sampleComputation: [
      { label: "Unit", value: "C-Delta 1021A" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "29.00 sqm" },
      { label: "List Price", value: "PHP 6,971,000.00" },
      { label: "RFO Date", value: "Nov 2029" },
      { label: "Selected Downpayment", value: "12%" },
      { label: "Months to Pay", value: "40 months" },
      { label: "Financing", value: "12% DP, 88% Bank Financing" }
    ],
    contractBreakdown: [
      { label: "Total Contract Price", value: "PHP 6,971,000.00" },
      { label: "Closing Fee", value: "10.5% / PHP 731,955.00" },
      { label: "Total with Closing Fee", value: "PHP 7,702,955.00" },
      { label: "Downpayment", value: "12% / PHP 836,520.00" },
      { label: "Less Reservation Fee", value: "PHP 30,000.00" },
      { label: "Net Downpayment", value: "PHP 806,520.00" },
      { label: "Monthly DP", value: "40 months / PHP 20,163.00/mo" },
      { label: "Balance", value: "88% / PHP 6,134,480.00" },
      { label: "Total Balance + Closing Fee", value: "PHP 6,866,435.00" }
    ],
    monthlyAmortization: [
      { label: "10 years | 7.0%", value: "PHP 79,725.13/month" },
      { label: "15 years | 7.0%", value: "PHP 61,717.46/month" },
      { label: "20 years | 7.0%", value: "PHP 53,235.40/month" }
    ],
    promoReference: "Sample computation only. Prices, discounts, rates, closing fees, monthly amortization, promos, and availability may change. Request the latest computation from Luisa before deciding.",
    promoCards: [
      { title: "12% DP Promo", items: ["Down Payment Promo: 12% DP", "Promo Ends: July 31, 2026", "Scope: All Units"] },
      { title: "15% DP Promo", items: ["Down Payment Promo: 15% DP", "Special Discount: 2.0% discount on DP Promo Term", "Promo Ends: July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "3BR", size: "85.50 sqm", price: "PHP 18,035,000", rfo: "Nov 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "53.00 sqm", price: "PHP 11,684,000", rfo: "Nov 2029", note: "HomeReady: Not applicable" },
      { type: "2BR", size: "57.50 sqm", price: "PHP 13,080,000", rfo: "Nov 2029", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "32.00 sqm", price: "PHP 8,612,000", rfo: "Nov 2029", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "29.00 sqm", price: "PHP 7,763,000", rfo: "Nov 2029", note: "HomeReady: Not applicable" }
    ]
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal and Client Registration",
    text:
      "One Delta Terraces may offer a Unit Holding Portal and client registration process for reviewing and temporarily holding preferred units during the launch period, subject to current availability and holding rules. Ask Luisa to confirm the latest unit holding process.",
    steps: [
      "Register online if the current process requires it",
      "Review preferred unit type, size, and budget range",
      "Ask Luisa to confirm latest availability and holding rules",
      "Request the latest computation before proceeding",
      "Proceed only through accepted reservation channels"
    ]
  },
  reservationRequirements: [
    "Online client registration may be required for the Unit Holding Portal or buyer registration process.",
    "Submit valid government-issued IDs for identity verification.",
    "Prepare Philippine TIN number for reservation processing if required.",
    "Complete and sign the Reservation Agreement Form.",
    "Reservation fee guide: PHP 30,000 for residential unit.",
    "Parking slot reservation fee guide: PHP 10,000 if applicable.",
    "Payment options may include online banking, credit/debit card, or other accepted methods, subject to confirmation.",
    "Additional requirements may include proof of billing, preferred mode of payment, post-dated checks, auto-debit arrangement, or other latest policy requirements."
  ],
  newsMedia: [
    { title: "Project presentation materials", label: "Request One Delta Terraces presentation from Luisa", url: "" },
    { title: "Virtual 360-degree tour", label: "Request the latest approved virtual tour link", url: "" }
  ],
  videoTourUrl: ""
};

export const projects = baseProjects.map(([slug, name, location, city, status, turnoverYear, propertyType, developmentType, architecturalTheme, address, unitTypes, purposeTags, featured], index) => {
  const base = {
    id: index + 1,
    name,
    slug,
    contentLevel: featured ? "standard" : "placeholder",
    assetStatus: "official-assets-needed",
    verificationStatus: "needs-client-confirmation",
    tagline: "DMCI Homes buyer assistance listing",
    location,
    city,
    status,
    turnoverYear,
    propertyType,
    developmentType,
    landArea: "For confirmation",
    architecturalTheme,
    address,
    unitTypes,
    purposeTags,
    priceRangeLabel: "Request latest computation",
    priceSourceNote: "Updated price available upon request.",
    overview: `${name} is presented as a sample buyer-assistance listing for clients comparing DMCI Homes options in ${location}. Use this page to review general project fit, then request the latest computation, unit availability, promos, and viewing schedule from Luisa Corral before making decisions.`,
    description: `${name} is included as a buyer-assistance listing for clients comparing DMCI Homes options. Request the latest computation, current availability, and applicable payment terms before making decisions.`,
    aboutLocation: `${location} is included for buyer comparison. Nearby access, travel time, and exact landmarks should be confirmed through current maps and official project materials.`,
    whyInvest: genericWhyInvest,
    highlights: [
      "Buyer assistance available through Luisa Corral",
      "Updated computation available upon request",
      "Availability subject to confirmation"
    ],
    amenities: genericAmenities,
    otherAmenities: ["24-hour security", "Managed common areas", "Buyer support inquiry flow"],
    buildingFeatures: ["Building details for confirmation", "Common area features subject to official materials"],
    nearbyLandmarks: genericLandmarks,
    siteProgressStatus: status === "RFO" ? "Ready for occupancy status should still be confirmed before reservation." : "Site progress information should be confirmed through official DMCI channels or Luisa.",
    masterPlanNotes: "Master plan visuals and final unit details can be added once approved project materials are selected.",
    themeDescription: `${architecturalTheme} is used as a sample design direction label. Final architectural details must be confirmed through official project materials.`,
    buildings: [
      {
        name: "Building details for confirmation",
        developmentType,
        levels: ["Exact levels and parking details for confirmation"],
        features: ["Official building features to be added after asset review"]
      }
    ],
    unitInventoryPreview: inventory(unitTypes),
    newsMedia: [{ title: "Project updates", label: "Ask Luisa for official project updates", url: "" }],
    nearbyProperties: [],
    image: assetPath(slug, "hero.jpg"),
    thumbnail: assetPath(slug, "thumbnail.jpg"),
    gallery: [
      assetPath(slug, "gallery-1.jpg"),
      assetPath(slug, "gallery-2.jpg"),
      assetPath(slug, "gallery-3.jpg"),
      assetPath(slug, "master-plan.jpg"),
      assetPath(slug, "site-progress.jpg")
    ],
    masterPlanImage: assetPath(slug, "master-plan.jpg"),
    siteProgressImage: assetPath(slug, "site-progress.jpg"),
    videoTourUrl: "",
    mapUrl: "",
    directoryOrder: directoryOrder[slug] || 999,
    featured,
    sourceUrl: "",
    lastVerified: "For confirmation",
    disclaimer: globalDisclaimer
  };

  const project = slug === "anissa-heights"
    ? { ...base, ...anissaHeightsDetails }
    : slug === "the-calinea-tower"
      ? { ...base, ...theCalineaTowerDetails }
      : slug === "sage-residences"
        ? { ...base, ...sageResidencesDetails }
        : slug === "kalea-heights"
          ? { ...base, ...kaleaHeightsDetails }
          : slug === "one-delta-terraces"
            ? { ...base, ...oneDeltaTerracesDetails }
            : slug === "valeron-tower"
              ? { ...base, ...valeronTowerDetails }
              : slug === "solmera-coast"
                ? { ...base, ...solmeraCoastDetails }
                : slug === "mulberry-place-2"
                  ? { ...base, ...mulberryPlace2Details }
                  : slug === "fortis-residences"
                    ? { ...base, ...fortisResidencesDetails }
                    : base;
  return withProjectFallbacks({
    ...project,
    nearbyProperties: baseProjects
      .filter(([otherSlug, , otherLocation]) => otherSlug !== slug && otherLocation === project.location)
      .slice(0, 3)
      .map(([otherSlug]) => otherSlug)
  });
});

function withProjectFallbacks(project) {
  const safeUnitTypes = project.unitTypes?.length ? project.unitTypes : ["Unit details for confirmation"];
  return {
    ...project,
    overview: project.overview || overviewFallback,
    whyInvest: project.whyInvest?.length ? project.whyInvest : genericWhyInvest,
    aboutLocation: project.aboutLocation || locationFallback,
    highlights: project.highlights?.length ? project.highlights : [
      "Project matching based on location and buyer purpose",
      "Updated computation available upon request",
      "Site viewing and reservation guidance available through Luisa"
    ],
    amenities: project.amenities?.length ? project.amenities : ["Amenities and building features for confirmation"],
    otherAmenities: project.otherAmenities?.length ? project.otherAmenities : ["Official project assets can be added after client approval"],
    nearbyLandmarks: project.nearbyLandmarks?.length ? project.nearbyLandmarks : [locationFallback],
    buildings: project.buildings?.length ? project.buildings : [{
      name: "Building details for confirmation",
      developmentType: project.developmentType || "Updated details available upon request",
      levels: ["Ask Luisa for latest project presentation"],
      features: ["Building details and features for confirmation"]
    }],
    unitInventoryPreview: project.unitInventoryPreview?.length ? project.unitInventoryPreview : inventory(safeUnitTypes),
    newsMedia: project.newsMedia?.length ? project.newsMedia : [{ title: "Project updates for confirmation", label: "Ask Luisa for official references", url: "" }],
    priceRangeLabel: project.priceRangeLabel || "Request latest computation",
    priceSourceNote: project.priceSourceNote || "Updated price available upon request.",
    siteProgressStatus: project.siteProgressStatus || "Site progress information should be confirmed through official DMCI channels or Luisa.",
    masterPlanNotes: project.masterPlanNotes || "Master plan details can be added after official assets/content are approved.",
    themeDescription: project.themeDescription || "Theme and design details can be added after official materials are approved.",
    contentLevel: project.contentLevel || "placeholder",
    assetStatus: project.assetStatus || "official-assets-needed",
    verificationStatus: project.verificationStatus || "needs-client-confirmation",
    disclaimer: project.disclaimer || globalDisclaimer
  };
}

export const statuses = ["RFO", "Preselling", "RFO / Preselling Phase 2", "Coming Soon", "New", "Featured"];
export const unitTypes = ["Studio", "1BR", "2BR", "3BR", "4BR", "House & Lot", "Lot", "Parking"];
export const propertyTypes = ["High-rise Condo", "Mid-rise Condo", "Mid Rise and High Rise Condominiums", "Mixed-use High Rise Buildings", "Leisure Residence", "House & Lot", "Lot"];
export const purposes = ["Own Use", "Investment", "Rental", "OFW Friendly", "Family"];
