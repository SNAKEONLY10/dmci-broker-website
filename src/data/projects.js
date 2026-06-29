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
  ["anissa-heights", "Anissa Heights", "Quezon City", "Quezon City", "Preselling", "2027", "High-rise Condo", "High-rise residential development", "Contemporary resort-inspired", "Quezon City", ["Studio", "1BR", "2BR"], ["Own Use", "OFW Friendly"], false],
  ["mulberry-place-2", "Mulberry Place 2", "Paranaque", "Paranaque", "RFO", "Ready", "Mid-rise Condo", "Mid-rise residential community", "Garden community", "Paranaque City", ["2BR", "3BR"], ["Family", "Own Use"], true],
  ["the-calinea-tower", "The Calinea Tower", "Caloocan", "Caloocan", "Preselling", "2028", "High-rise Condo", "Transit-oriented residential tower", "Contemporary urban", "Caloocan City", ["Studio", "1BR", "2BR"], ["Investment", "Rental"], false],
  ["sage-residences", "Sage Residences", "Mandaluyong", "Mandaluyong", "Preselling", "2027", "High-rise Condo", "Urban residential tower", "Modern city retreat", "Mandaluyong City", ["1BR", "2BR"], ["Own Use", "Investment"], false],
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

const kaleaHeightsDetails = {
  contentLevel: "rich",
  assetStatus: "ready-for-review",
  verificationStatus: "reference-only",
  tagline: "Resort-inspired living on a grander scale.",
  city: "Cebu City",
  status: "Preselling",
  propertyType: "High Rise Condominiums",
  developmentType: "High Rise Condominiums",
  landArea: "46,348 sqm",
  architecturalTheme: "Modern Tropical",
  address: "Good Shepherd Road, Banawa Brgy. Guadalupe, Cebu City",
  unitTypes: ["1BR", "2BR", "3BR", "Tandem Units"],
  priceRangeLabel: "PHP 5.613M - PHP 13.426M",
  priceSourceNote: "Guide price only. Ask Luisa for the latest computation and availability before deciding.",
  sourceUrl: "https://www.dmcihomes.com/kalea-heights",
  lastVerified: "For confirmation",
  targetRfo: "September 2029",
  overview:
    "Kalea Heights is a resort-inspired high-rise condominium community in Banawa, Cebu City. This buyer assistance page helps interested clients review the project direction, unit options, payment guide, and next steps before requesting Luisa's latest computation.",
  introParagraphs: [
    "Kalea Heights is positioned for buyers who want Cebu City access with a more relaxed, resort-style residential setting. It is useful for end-use buyers, families, OFWs, and investors comparing preselling opportunities in Cebu.",
    "All pricing, unit availability, promos, payment terms, and turnover schedules shown here are for buyer guidance only. Request the latest computation and confirmed availability from Luisa before making decisions."
  ],
  projectFacts: [
    { label: "Project", value: "Kalea Heights" },
    { label: "Location", value: "Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City" },
    { label: "Developer", value: "DMCI Homes" },
    { label: "Property Type", value: "High Rise Condominiums" },
    { label: "Development Type", value: "Resort-inspired condominium community" },
    { label: "Land Area", value: "46,348 sqm" },
    { label: "Architectural Theme", value: "Modern Tropical" },
    { label: "Unit Types", value: "1BR, 2BR, 3BR, Tandem Units" },
    { label: "Target RFO", value: "September 2029" },
    { label: "Status", value: "Preselling details for confirmation" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "Approx. 29.5-33.5 sqm", range: "PHP 5.613M - PHP 6.591M", note: "Guide range only" },
    { type: "2BR", floorArea: "Approx. 53-80.5 sqm", range: "PHP 8.008M - PHP 11.385M", note: "Guide range only" },
    { type: "3BR", floorArea: "Approx. 81.5-88.5 sqm", range: "PHP 11.936M - PHP 13.426M", note: "Guide range only" }
  ],
  aboutLocation:
    "Kalea Heights is located along Good Shepherd Road in Banawa, Brgy. Guadalupe, Cebu City. The area gives buyers access to hospitals, schools, malls, business districts, churches, and daily essentials while staying within a residential Cebu City setting.",
  locationDetails: {
    title: "Banawa, Cebu City",
    text: "A city-accessible address for buyers comparing preselling homes near Cebu's major establishments. Distances below are buyer guide markers and should be checked through current maps before site viewing.",
    exactAddress: "Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City"
  },
  nearbyDestinations: [
    {
      group: "Commercial Establishments",
      items: [
        "JY Square Mall - approx. 5 km",
        "Robinsons Galleria - approx. 6 km",
        "Ayala Center Cebu - approx. 7 km",
        "SM City Cebu - approx. 8 km",
        "SM Seaside City Cebu - approx. 9 km",
        "Carbon Market - approx. 5 km"
      ]
    },
    {
      group: "Schools",
      items: [
        "SIT - approx. 3 km",
        "University of San Jose-Recoletos - approx. 4 km",
        "University of Cebu - approx. 5 km",
        "University of San Carlos - approx. 5 km",
        "University of San Pedro - approx. 5 km",
        "University of the Philippines Cebu - approx. 6 km"
      ]
    },
    {
      group: "Hospitals",
      items: [
        "Cebu Doctors' University Hospital - approx. 4 km",
        "Chong Hua Hospital - approx. 4 km",
        "Visayas Community Medical Center - approx. 5 km",
        "Cebu Velez General Hospital - approx. 5 km",
        "Perpetual Succour Hospital - approx. 6 km",
        "Cebu City Medical Center - approx. 6 km"
      ]
    },
    {
      group: "Business Districts",
      items: [
        "Cebu Business Park - approx. 7 km",
        "Cebu I.T. Park - approx. 7 km",
        "South Road Properties - approx. 8 km"
      ]
    },
    {
      group: "Places of Worship",
      items: [
        "Santo Nino Basilica - approx. 5 km",
        "Cebu Metropolitan Cathedral - approx. 5 km"
      ]
    }
  ],
  whyInvest: [
    "Cebu City location for buyers comparing end-use, family, and investment options",
    "Large-scale residential setting with resort-inspired lifestyle positioning",
    "Multiple unit types for different household sizes and buyer goals",
    "Modern Tropical design direction for breezy indoor-outdoor living",
    "Broker-assisted computation, availability checking, and viewing coordination through Luisa"
  ],
  highlights: [
    "46,348 sqm master-planned community",
    "Modern Tropical architectural direction",
    "1BR, 2BR, 3BR, and tandem unit options",
    "Target RFO: September 2029",
    "Buyer assistance for computation, availability, site viewing, and reservation steps"
  ],
  themeDescription:
    "Modern Tropical architecture is designed for warm climates, with breezy spaces, large openings, and indoor-outdoor connections. Final project details must be confirmed through official channels.",
  siteDevelopment: {
    title: "Site Development Plan",
    text:
      "Kalea Heights is presented as a master-planned residential community with multiple towers, landscaped amenities, and shared lifestyle spaces. Final site plan, tower count, and technical details should be verified through official project materials.",
    keyStats: [
      { label: "Land Area", value: "46,348 sqm" },
      { label: "Design Direction", value: "Modern Tropical" },
      { label: "Lifestyle", value: "Resort-inspired community" },
      { label: "Target RFO", value: "September 2029" }
    ]
  },
  viewHighlights: [
    {
      title: "Project Presentation View",
      text: "Use Luisa's guided presentation to understand project positioning, location, amenities, unit options, and payment structure."
    },
    {
      title: "Site Viewing Coordination",
      text: "Request viewing assistance so schedule, meeting point, and project details can be confirmed before going to the site."
    },
    {
      title: "Virtual Tour Link",
      text: "If an approved 360 tour or video is available, Luisa can share the current official link instead of loading heavy video on the website."
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
    {
      title: "Core Amenities",
      items: [
        "Drop-Off Entrance",
        "Indoor Court Facility",
        "Basketball Court / Playcourt",
        "Children's Playground",
        "Entertainment Room",
        "Water Garden"
      ]
    },
    {
      title: "Pools and Leisure",
      items: [
        "Lap Pool",
        "Leisure Pool",
        "Kiddie Pool",
        "Pool Deck",
        "Pool Shower Area",
        "Open Lawn / Picnic Grove"
      ]
    },
    {
      title: "Fitness and Social Spaces",
      items: [
        "Fitness Gym",
        "Snack Bar",
        "Open Lounge",
        "Lounge Area",
        "Sky Lounge",
        "Picnic Area"
      ]
    },
    {
      title: "Sky Features",
      items: [
        "Sky Park",
        "Sky Bridge",
        "Sky Patio",
        "Roof Deck",
        "View Deck",
        "Landscaped Atriums"
      ]
    },
    {
      title: "Community Convenience",
      items: [
        "24-hour Security",
        "Convenience Store",
        "Laundry Station",
        "Pet Park",
        "Community Internet",
        "100% Power Back-up"
      ]
    },
    {
      title: "Outdoor Lifestyle",
      items: [
        "Grill Pits",
        "Jogging / Biking Path",
        "Amphitheater Garden",
        "Main Entrance Gate",
        "Perimeter Fence",
        "Water Feature"
      ]
    }
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
  nearbyLandmarks: ["Good Shepherd Road", "Guadalupe, Cebu City", "Schools and lifestyle destinations", "Major Cebu city access roads"],
  siteProgressStatus: "Site progress information should be confirmed through official DMCI channels or Luisa.",
  masterPlanNotes: "Kalea Heights master plan details should be reviewed using official project presentation materials once approved assets are available.",
  unitInventoryPreview: [
    { type: "1-Bedroom", floorArea: "Approx. 29.5-33.5 sqm", indicativeRange: "PHP 5.6M-PHP 6.6M guide range", status: "Ask for latest availability" },
    { type: "2-Bedroom", floorArea: "Approx. 53-80.5 sqm", indicativeRange: "PHP 8.0M-PHP 11.4M guide range", status: "Ask for latest availability" },
    { type: "3-Bedroom", floorArea: "Approx. 81.5-88.5 sqm", indicativeRange: "PHP 11.9M-PHP 13.4M guide range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "1-Bedroom Units",
      description: "Compact unit options for end-use buyers, OFWs, and investors who want a lower entry point within the project.",
      layouts: ["1BR A", "1BR B"],
      rows: [
        { layout: "1BR A", floorArea: "Approx. 29.5 sqm", priceRange: "PHP 5.613M - PHP 5.836M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "1BR B", floorArea: "Approx. 33.5 sqm", priceRange: "PHP 6.316M - PHP 6.591M", status: "Ask for latest availability", monthlyDp: "Request latest computation" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "Flexible options for couples, small families, and investors comparing larger cuts for rental or long-term use.",
      layouts: ["2BR A", "2BR B", "2BR C", "2BR D", "2BR Tandem"],
      rows: [
        { layout: "2BR A", floorArea: "Approx. 53 sqm", priceRange: "PHP 8.008M - PHP 8.306M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "2BR B", floorArea: "Approx. 56 sqm", priceRange: "PHP 8.463M - PHP 8.952M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "2BR C", floorArea: "Approx. 62.5 sqm", priceRange: "PHP 9.304M - PHP 10.026M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "2BR D", floorArea: "Approx. 64 sqm", priceRange: "PHP 9.533M - PHP 10.446M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "2BR Tandem", floorArea: "Approx. 80.5 sqm", priceRange: "PHP 11.385M guide range", status: "Ask for latest availability", monthlyDp: "Request latest computation" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "Larger layouts for families or buyers who need more living space and long-term flexibility.",
      layouts: ["3BR A", "3BR B", "3BR C"],
      rows: [
        { layout: "3BR A", floorArea: "Approx. 81.5 sqm", priceRange: "PHP 11.936M - PHP 12.433M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "3BR B", floorArea: "Approx. 88 sqm", priceRange: "PHP 12.546M - PHP 13.190M", status: "Ask for latest availability", monthlyDp: "Request latest computation" },
        { layout: "3BR C", floorArea: "Approx. 88.5 sqm", priceRange: "PHP 12.678M - PHP 13.426M", status: "Ask for latest availability", monthlyDp: "Request latest computation" }
      ]
    }
  ],
  floorPlans: [
    { title: "1BR Floor Plan", text: "Official floor plan preview can be added from approved project materials." },
    { title: "2BR Floor Plan", text: "Request the latest official layout sheet before comparing unit options." },
    { title: "3BR Floor Plan", text: "Final layout, cuts, and deliverables must be confirmed through official documents." }
  ],
  paymentTerms: {
    title: "Computation and Payment Guide",
    text:
      "Payment terms, down payment schedule, bank financing, promos, and monthly amortization can change. Use the guide below for orientation only, then request Luisa's latest computation before reservation.",
    importantNotes: [
      "Promos and payment terms may change without prior notice.",
      "Monthly down payment and amortization depend on unit, term, bank rate, and buyer profile.",
      "Request latest computation before comparing units or preparing reservation."
    ],
    sampleComputation: [
      { label: "Example Unit", value: "1BR guide unit" },
      { label: "Guide Price", value: "Starts around PHP 5.613M" },
      { label: "Computation Type", value: "Request latest computation" },
      { label: "Availability", value: "Subject to confirmation" }
    ],
    monthlyAmortization: [
      { label: "During DP Term", value: "Request latest monthly DP" },
      { label: "Bank Financing", value: "Subject to bank approval" },
      { label: "Promo", value: "Ask for current promo if available" }
    ],
    promoReference: "Promo availability, discounts, and payment terms must be confirmed by Luisa using current official updates.",
    sampleAvailableComputations: ["1BR buyer computation", "2BR family-use computation", "3BR end-use computation", "OFW buyer computation"]
  },
  unitHoldingPortal: {
    title: "Unit Holding and Reservation Guidance",
    text:
      "Luisa can help check current availability, prepare reservation requirements, and guide buyers through the official reservation process. This website does not hold units directly.",
    steps: [
      "Choose preferred unit type and budget range",
      "Request latest computation and availability",
      "Confirm payment terms and reservation requirements",
      "Coordinate site viewing or online presentation",
      "Proceed only through official reservation channels"
    ]
  },
  reservationRequirements: [
    "Valid government-issued ID",
    "Reservation fee confirmation from official channel",
    "Buyer information sheet",
    "Proof of billing or address details",
    "TIN or tax information if required",
    "Proof of income or financing documents when applicable",
    "Marriage certificate or authorization documents when applicable",
    "Additional requirements may apply for OFW buyers"
  ],
  newsMedia: [
    { title: "Project presentation materials", label: "Request official presentation from Luisa", url: "" },
    { title: "Official updates and advisories", label: "Confirm through official channels", url: "" }
  ]
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
    masterPlanNotes: "Master plan visuals and technical details can be added once approved project materials are selected.",
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
    featured,
    sourceUrl: "",
    lastVerified: "For confirmation",
    disclaimer: globalDisclaimer
  };

  const project = slug === "kalea-heights" ? { ...base, ...kaleaHeightsDetails } : slug === "one-delta-terraces" ? { ...base, ...oneDeltaTerracesDetails } : base;
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

export const statuses = ["RFO", "Preselling", "Coming Soon", "New", "Featured"];
export const unitTypes = ["Studio", "1BR", "2BR", "3BR", "House & Lot", "Lot", "Parking"];
export const propertyTypes = ["High-rise Condo", "Mid-rise Condo", "Leisure Residence", "House & Lot", "Lot"];
export const purposes = ["Own Use", "Investment", "Rental", "OFW Friendly", "Family"];
