// Official/client asset convention:
// public/assets/projects/[project-slug]/hero.jpg
// public/assets/projects/[project-slug]/thumbnail.jpg
// public/assets/projects/[project-slug]/gallery-1.jpg
// public/assets/projects/[project-slug]/gallery-2.jpg
// public/assets/projects/[project-slug]/gallery-3.jpg
// public/assets/projects/[project-slug]/master-plan.jpg
// public/assets/projects/[project-slug]/site-progress.jpg
// public/assets/projects/[project-slug]/brochure.pdf

const globalDisclaimer =
  "Prices, promos, availability, payment terms, unit details, turnover schedules, and all project information are subject to final confirmation. This website is maintained for buyer assistance and inquiry purposes only.";

const commonAmenities = [
  "Pool area",
  "Fitness space",
  "Resident lounge",
  "Landscaped open spaces",
  "Function room",
  "Children's play area"
];

const commonOtherAmenities = [
  "24-hour security",
  "Managed common areas",
  "Buyer support inquiry flow"
];

const commonBuildingFeatures = [
  "Building details for confirmation",
  "Common area features subject to official materials",
  "Ask Luisa for the latest official project presentation"
];

const commonPurposes = ["Own Use", "Investment", "Family"];

const baseProjects = [
  {
    slug: "the-oriana",
    name: "The Oriana",
    location: "Quezon City",
    city: "Quezon City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    address: "Aurora Boulevard, Quezon City",
    unitTypes: ["Studio", "1BR", "2BR"],
    sourceUrl: "https://www.dmcihomes.com/the-oriana"
  },
  {
    slug: "one-delta-terraces",
    name: "One Delta Terraces",
    location: "Quezon City",
    city: "Quezon City",
    status: "New",
    turnoverYear: "2029",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Asian Contemporary",
    address: "Corner of West Avenue and Quezon Avenue, West Triangle, Quezon City",
    unitTypes: ["Studio", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/one-delta-terraces"
  },
  {
    slug: "the-erin-heights",
    name: "The Erin Heights",
    location: "Quezon City",
    city: "Quezon City",
    status: "Under Construction",
    turnoverYear: "2027",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Corner of Commonwealth Avenue and Tandang Sora Avenue, Quezon City",
    unitTypes: ["Studio", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/the-erin-heights"
  },
  {
    slug: "cameron-residences",
    name: "Cameron Residences",
    location: "Quezon City",
    city: "Quezon City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    address: "Roosevelt Avenue, Quezon City",
    unitTypes: ["1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/cameron-residences"
  },
  {
    slug: "the-valeron-tower",
    name: "The Valeron Tower",
    location: "Pasig",
    city: "Pasig City",
    status: "New",
    turnoverYear: "2029",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Artisanal",
    address: "C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    sourceUrl: "https://www.dmcihomes.com/the-valeron-tower"
  },
  {
    slug: "allegra-garden-place",
    name: "Allegra Garden Place",
    location: "Pasig",
    city: "Pasig City",
    status: "Under Construction",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern with Moroccan Inspiration",
    address: "Pasig City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/allegra-garden-place"
  },
  {
    slug: "prisma-residences",
    name: "Prisma Residences",
    location: "Pasig",
    city: "Pasig City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Pasig City",
    unitTypes: ["1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/prisma-residences"
  },
  {
    slug: "sage-residences",
    name: "Sage Residences",
    location: "Mandaluyong",
    city: "Mandaluyong City",
    status: "Under Construction",
    turnoverYear: "2028",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Contemporary",
    address: "Domingo M. Guevarra and Sinag Streets, Mauway, Mandaluyong City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/sage-residences"
  },
  {
    slug: "kai-garden-residences",
    name: "Kai Garden Residences",
    location: "Mandaluyong",
    city: "Mandaluyong City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Japanese-inspired",
    address: "Mandaluyong City",
    unitTypes: ["1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/kai-garden-residences"
  },
  {
    slug: "mulberry-place",
    name: "Mulberry Place",
    location: "Taguig",
    city: "Taguig City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "Mid Rise Condominiums",
    developmentType: "Mid Rise Condominiums",
    architecturalTheme: "Asian Tropical",
    address: "Acacia Estates, Taguig City",
    unitTypes: ["2BR", "3BR", "4BR"],
    purposeTags: ["Own Use", "Family"],
    sourceUrl: "https://www.dmcihomes.com/mulberry-place"
  },
  {
    slug: "alder-residences",
    name: "Alder Residences",
    location: "Taguig",
    city: "Taguig City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Banyan Road, Acacia Estates, Taguig City",
    unitTypes: ["1BR", "2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/alder-residences"
  },
  {
    slug: "the-aston-place",
    name: "The Aston Place",
    location: "Pasay",
    city: "Pasay City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Dominga St., Pasay City",
    unitTypes: ["1BR", "2BR", "3BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    sourceUrl: "https://www.dmcihomes.com/the-aston-place"
  },
  {
    slug: "the-camden-place",
    name: "The Camden Place",
    location: "Manila",
    city: "Manila",
    status: "Under Construction",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Manila",
    unitTypes: ["Studio", "1BR", "2BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    sourceUrl: "https://www.dmcihomes.com/the-camden-place"
  },
  {
    slug: "the-atherton",
    name: "The Atherton",
    location: "Para\u00f1aque",
    city: "Para\u00f1aque City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    address: "Para\u00f1aque City",
    unitTypes: ["1BR", "2BR"],
    sourceUrl: "https://www.dmcihomes.com/the-atherton"
  },
  {
    slug: "calathea-place",
    name: "Calathea Place",
    location: "Para\u00f1aque",
    city: "Para\u00f1aque City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "For confirmation",
    address: "Para\u00f1aque City",
    unitTypes: ["1BR", "2BR"],
    sourceUrl: "https://www.dmcihomes.com/calathea-place"
  },
  {
    slug: "sonora-garden-residences",
    name: "Sonora Garden Residences",
    location: "Las Pi\u00f1as",
    city: "Las Pi\u00f1as City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Garden-inspired",
    address: "Las Pi\u00f1as City",
    unitTypes: ["2BR", "3BR"],
    sourceUrl: "https://www.dmcihomes.com/sonora-garden-residences"
  },
  {
    slug: "moncello-crest",
    name: "Moncello Crest",
    location: "Baguio City / Benguet",
    city: "Tuba, Benguet",
    status: "New",
    turnoverYear: "For confirmation",
    propertyType: "Leisure Residences",
    developmentType: "Leisure Residences",
    architecturalTheme: "Modern Filipino",
    address: "Tuba, Benguet",
    unitTypes: ["Studio", "1BR", "2BR"],
    sourceUrl: "https://www.dmcihomes.com/moncello-crest"
  },
  {
    slug: "solmera-coast",
    name: "Solmera Coast",
    location: "San Juan Batangas",
    city: "San Juan, Batangas",
    status: "Under Construction",
    turnoverYear: "For confirmation",
    propertyType: "Leisure Residences",
    developmentType: "Leisure Residences",
    architecturalTheme: "Coastal resort-inspired",
    address: "San Juan, Batangas",
    unitTypes: ["Studio", "1BR", "2BR"],
    sourceUrl: "https://www.dmcihomes.com/solmera-coast"
  }
];

const directoryOrder = Object.fromEntries(baseProjects.map((project, index) => [project.slug, index + 1]));

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

function projectOverview(project) {
  return `${project.name} is an approved priority DMCI Homes listing for Luisa Corral's buyer assistance website. This page is for safe project shortlisting only. Request the latest computation, confirmed unit availability, current promos, payment terms, and official presentation materials before making any reservation decision.`;
}

function projectHighlights(project) {
  return [
    `${project.city} priority project for buyer shortlisting`,
    `${project.unitTypes.join(", ")} options, subject to latest availability`,
    "Broker-guided computation and availability checking through Luisa Corral"
  ];
}

function whyInvest(project) {
  return [
    `Location access in ${project.city} for daily needs, work, school, and lifestyle destinations`,
    "DMCI Homes residential planning with amenities, managed spaces, and buyer support",
    "Unit options for end-use, family use, rental, or long-term investment comparison",
    "Ask Luisa for updated computation, confirmed availability, and reservation guidance"
  ];
}

function withProjectFallbacks(project, index) {
  const unitTypes = project.unitTypes?.length ? project.unitTypes : ["Unit details for confirmation"];
  const gallery = [
    assetPath(project.slug, "gallery-1.jpg"),
    assetPath(project.slug, "gallery-2.jpg"),
    assetPath(project.slug, "gallery-3.jpg"),
    assetPath(project.slug, "master-plan.jpg"),
    assetPath(project.slug, "site-progress.jpg")
  ];

  return {
    id: index + 1,
    contentLevel: "standard",
    assetStatus: "official-assets-needed",
    verificationStatus: "reference-only",
    featured: true,
    tagline: "Approved DMCI Homes priority project",
    landArea: "For confirmation",
    purposeTags: project.purposeTags || commonPurposes,
    priceRangeLabel: "Request latest computation",
    priceSourceNote: "Updated computation, promos, payment terms, unit availability, and final pricing must be confirmed with Luisa before deciding.",
    overview: project.overview || projectOverview(project),
    description: project.description || projectOverview(project),
    aboutLocation: `${project.city} is included for buyer comparison. Nearby access, travel time, and exact landmarks should be confirmed through current maps and official project materials.`,
    highlights: project.highlights || projectHighlights({ ...project, unitTypes }),
    whyInvest: project.whyInvest || whyInvest(project),
    amenities: project.amenities || commonAmenities,
    otherAmenities: project.otherAmenities || commonOtherAmenities,
    buildingFeatures: project.buildingFeatures || commonBuildingFeatures,
    nearbyLandmarks: project.nearbyLandmarks || ["Business districts", "Schools", "Retail hubs", "Transport access"],
    siteProgressStatus: "Site progress information should be confirmed through official DMCI Homes channels or Luisa.",
    masterPlanNotes: "Master plan visuals and final unit details can be added once approved official project materials are selected.",
    themeDescription: `${project.architecturalTheme} is used as a reference label. Final architectural details must be confirmed through official project materials.`,
    buildings: [
      {
        name: `${project.name} building details`,
        developmentType: project.developmentType,
        levels: ["Exact levels, tower details, and parking details for confirmation"],
        features: project.buildingFeatures || commonBuildingFeatures
      }
    ],
    unitInventoryPreview: inventory(unitTypes),
    newsMedia: [
      {
        title: "Official DMCI Homes project page",
        label: "Review official project reference",
        url: project.sourceUrl
      },
      {
        title: "Broker update",
        label: "Ask Luisa for the latest computation and availability",
        url: ""
      }
    ],
    nearbyProperties: baseProjects
      .filter((other) => other.slug !== project.slug && other.location === project.location)
      .slice(0, 3)
      .map((other) => other.slug),
    image: assetPath(project.slug, "hero.jpg"),
    thumbnail: assetPath(project.slug, "thumbnail.jpg"),
    gallery,
    masterPlanImage: assetPath(project.slug, "master-plan.jpg"),
    siteProgressImage: assetPath(project.slug, "site-progress.jpg"),
    videoTourUrl: "",
    mapUrl: "",
    directoryOrder: directoryOrder[project.slug],
    lastVerified: "For confirmation",
    disclaimer: globalDisclaimer,
    ...project,
    unitTypes
  };
}

export const projects = baseProjects.map(withProjectFallbacks);

function uniqueValues(items) {
  return [...new Set(items.filter(Boolean))];
}

export const statuses = uniqueValues(projects.map((project) => project.status));
export const unitTypes = uniqueValues(projects.flatMap((project) => project.unitTypes));
export const propertyTypes = uniqueValues(projects.map((project) => project.propertyType));
export const purposes = uniqueValues(projects.flatMap((project) => project.purposeTags));
