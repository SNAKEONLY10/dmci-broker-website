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
  priceSourceNote: "Official reference snapshot only. Request latest computation for updated pricing and availability.",
  sourceUrl: "https://www.dmcihomes.com/kalea-heights",
  lastVerified: "For confirmation",
  targetRfo: "September 2029",
  overview:
    "Kalea Heights is a resort-inspired high-rise condominium community in Banawa, Cebu City. This page is prepared as Luisa Corral's buyer assistance guide so interested buyers can review the project direction, unit options, payment references, and next steps before requesting the latest official computation.",
  introParagraphs: [
    "Kalea Heights is positioned for buyers who want Cebu City access with a more relaxed, resort-style residential setting. It is useful for end-use buyers, families, OFWs, and investors comparing preselling opportunities in Cebu.",
    "All pricing, unit availability, promos, payment terms, and turnover schedules shown here are reference snapshots only. Buyers should request the latest computation and confirmed availability from Luisa before making decisions."
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
    { label: "Status", value: "Preselling reference snapshot" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "Approx. 29.5-33.5 sqm", range: "PHP 5.613M - PHP 6.591M", note: "Reference range only" },
    { type: "2BR", floorArea: "Approx. 53-80.5 sqm", range: "PHP 8.008M - PHP 11.385M", note: "Reference range only" },
    { type: "3BR", floorArea: "Approx. 81.5-88.5 sqm", range: "PHP 11.936M - PHP 13.426M", note: "Reference range only" }
  ],
  aboutLocation:
    "Kalea Heights is located along Good Shepherd Road in Banawa, Brgy. Guadalupe, Cebu City. The area gives buyers access to hospitals, schools, malls, business districts, churches, and daily essentials while staying within a residential Cebu City setting.",
  locationDetails: {
    title: "Banawa, Cebu City",
    text: "A city-accessible address for buyers comparing preselling homes near Cebu's major establishments. Distances below are reference markers and should be checked through current maps before site viewing.",
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
    "Target RFO reference: September 2029",
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
    { type: "1-Bedroom", floorArea: "Approx. 29.5-33.5 sqm", indicativeRange: "PHP 5.6M-PHP 6.6M reference range", status: "Ask for latest availability" },
    { type: "2-Bedroom", floorArea: "Approx. 53-80.5 sqm", indicativeRange: "PHP 8.0M-PHP 11.4M reference range", status: "Ask for latest availability" },
    { type: "3-Bedroom", floorArea: "Approx. 81.5-88.5 sqm", indicativeRange: "PHP 11.9M-PHP 13.4M reference range", status: "Ask for latest availability" }
  ],
  unitSections: [
    {
      title: "1-Bedroom Units",
      description: "Compact unit options for end-use buyers, OFWs, and investors who want a lower entry point within the project.",
      layouts: ["1BR A", "1BR B"],
      rows: [
        { layout: "1BR A", floorArea: "Approx. 29.5 sqm", priceRange: "PHP 5.613M - PHP 5.836M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "1BR B", floorArea: "Approx. 33.5 sqm", priceRange: "PHP 6.316M - PHP 6.591M", status: "Ask for latest availability", monthlyDp: "Request official computation" }
      ]
    },
    {
      title: "2-Bedroom Units",
      description: "Flexible options for couples, small families, and investors comparing larger cuts for rental or long-term use.",
      layouts: ["2BR A", "2BR B", "2BR C", "2BR D", "2BR Tandem"],
      rows: [
        { layout: "2BR A", floorArea: "Approx. 53 sqm", priceRange: "PHP 8.008M - PHP 8.306M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "2BR B", floorArea: "Approx. 56 sqm", priceRange: "PHP 8.463M - PHP 8.952M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "2BR C", floorArea: "Approx. 62.5 sqm", priceRange: "PHP 9.304M - PHP 10.026M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "2BR D", floorArea: "Approx. 64 sqm", priceRange: "PHP 9.533M - PHP 10.446M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "2BR Tandem", floorArea: "Approx. 80.5 sqm", priceRange: "PHP 11.385M reference range", status: "Ask for latest availability", monthlyDp: "Request official computation" }
      ]
    },
    {
      title: "3-Bedroom Units",
      description: "Larger layouts for families or buyers who need more living space and long-term flexibility.",
      layouts: ["3BR A", "3BR B", "3BR C"],
      rows: [
        { layout: "3BR A", floorArea: "Approx. 81.5 sqm", priceRange: "PHP 11.936M - PHP 12.433M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "3BR B", floorArea: "Approx. 88 sqm", priceRange: "PHP 12.546M - PHP 13.190M", status: "Ask for latest availability", monthlyDp: "Request official computation" },
        { layout: "3BR C", floorArea: "Approx. 88.5 sqm", priceRange: "PHP 12.678M - PHP 13.426M", status: "Ask for latest availability", monthlyDp: "Request official computation" }
      ]
    }
  ],
  floorPlans: [
    { title: "1BR Floor Plan", text: "Official floor plan preview can be added from approved project materials." },
    { title: "2BR Floor Plan", text: "Request the latest official layout sheet before comparing unit options." },
    { title: "3BR Floor Plan", text: "Final layout, cuts, and deliverables must be confirmed through official documents." }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text:
      "Payment terms, down payment schedule, bank financing, promos, and monthly amortization can change. The sample below is for buyer orientation only and must be replaced with the latest official computation before reservation.",
    importantNotes: [
      "Promos and payment terms may change without prior notice.",
      "Monthly down payment and amortization depend on unit, term, bank rate, and buyer profile.",
      "Request latest computation before comparing units or preparing reservation."
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "1BR reference unit" },
      { label: "Reference Price", value: "From PHP 5.613M snapshot" },
      { label: "Computation Type", value: "Request official computation" },
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

  const project = slug === "kalea-heights" ? { ...base, ...kaleaHeightsDetails } : base;
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
