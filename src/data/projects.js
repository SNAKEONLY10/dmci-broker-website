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
  assetStatus: "placeholder-assets",
  verificationStatus: "reference-only",
  tagline: "Resort-inspired living on a grander scale.",
  city: "Cebu City",
  status: "Preselling",
  propertyType: "High Rise Condominiums",
  developmentType: "High Rise Condominiums",
  landArea: "46,348 sqm",
  architecturalTheme: "Modern Tropical",
  address: "Good Shepherd Road, Banawa Brgy. Guadalupe, Cebu City",
  unitTypes: ["1BR", "2BR", "3BR"],
  priceRangeLabel: "₱5,613,000 - ₱13,426,000",
  priceSourceNote: "Official reference snapshot only. Request latest computation for updated pricing and availability.",
  sourceUrl: "https://www.dmcihomes.com/kalea-heights",
  lastVerified: "For confirmation",
  overview:
    "Kalea Heights is presented here as a richer reference sample for Luisa Corral's buyer assistance website. The project information follows a professional property showcase structure while reminding buyers that pricing, availability, promos, unit details, and turnover schedules must be confirmed before decisions.",
  aboutLocation:
    "Banawa, Cebu City offers access to city conveniences, schools, lifestyle destinations, and major roads. Exact travel times and nearby landmarks should be reviewed with current maps and official project materials.",
  whyInvest: [
    "Cebu City location for buyers comparing end-use, family, and investment options",
    "Large-scale residential setting with resort-inspired lifestyle positioning",
    "Multiple unit types for different household sizes and buyer goals",
    "Broker-assisted computation, availability checking, and viewing coordination through Luisa"
  ],
  themeDescription:
    "Modern Tropical architecture is designed for warm climates, with breezy spaces, large openings, and indoor-outdoor connections. Final project details must be confirmed through official channels.",
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
    { type: "1-Bedroom", floorArea: "Approx. 29.5-33.5 sqm", indicativeRange: "₱5.6M-₱6.6M reference range", status: "Ask for latest availability" },
    { type: "2-Bedroom", floorArea: "Approx. 53-80.5 sqm", indicativeRange: "₱8.0M-₱11.4M reference range", status: "Ask for latest availability" },
    { type: "3-Bedroom", floorArea: "Approx. 81.5-88.5 sqm", indicativeRange: "₱11.9M-₱13.4M reference range", status: "Ask for latest availability" }
  ],
  newsMedia: [
    { title: "Project presentation materials", label: "Reference link placeholder", url: "" },
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
    masterPlanNotes: "Master plan visuals and technical details are placeholders until approved project materials are added.",
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
    newsMedia: [{ title: "Project updates placeholder", label: "Add official updates after approval", url: "" }],
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
      developmentType: project.developmentType || "Project details for confirmation",
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
