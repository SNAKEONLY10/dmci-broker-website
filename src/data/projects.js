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

const commonOtherAmenities = [
  "Official amenity list for final confirmation",
  "Managed common areas",
  "Buyer support inquiry flow"
];

const commonBuildingFeatures = [
  "24-hour security and managed common areas",
  "Lobby, circulation, parking, utilities, and tower details for final confirmation",
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
    landArea: "9,314 sqm.",
    address: "Aurora Blvd, Project 4, Quezon City",
    unitTypes: ["Studio", "1BR", "2BR"],
    assetStatus: "official-assets-needed",
    overview: "The Oriana is a DMCI Homes high-rise condominium in Project 4, Quezon City, positioned for convenient city access and transit-oriented living. This broker page is for reference and shortlisting only; request the latest computation, availability, promos, and presentation materials before deciding.",
    aboutLocation: "Located along Aurora Blvd. in Project 4, Quezon City, The Oriana is presented by DMCI Homes with transit-oriented accessibility to Metro Manila's upcoming subway. Travel times and nearby access points should be confirmed with current maps and official materials.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Quezon City",
      "Modern Tropical architectural theme",
      "Studio, 1BR, and 2BR unit options subject to latest availability"
    ],
    amenities: ["Basketball Court/Playcourt", "Sky Promenade", "Amenity Core", "Sky Patio", "Picnic Area", "Coworking Space", "Kiddie Pool", "Lap Pool", "Leisure Pool", "Sky Bridge", "24-hour Security", "Alfresco"],
    buildingFeatures: ["24-hour Security", "Sky Promenade", "Sky Patio", "Sky Bridge", "Amenity Core", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Aurora Blvd. corridor", "Project 4, Quezon City", "Transit access references for confirmation", "Nearby schools, offices, retail, and services for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/the-oriana"
  },
  {
    slug: "one-delta-terraces",
    name: "One Delta Terraces",
    location: "Quezon City",
    city: "Quezon City",
    status: "New",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Asian Contemporary",
    landArea: "For confirmation",
    address: "Quezon Ave, Quezon City, Metro Manila",
    unitTypes: ["Studio", "2BR", "3BR"],
    assetStatus: "complete",
    overview: "One Delta Terraces is a new DMCI Homes high-rise condominium in Quezon City, presented as a resort-inspired residential landmark. This reference page keeps pricing and availability open for confirmation through Luisa and official project materials.",
    aboutLocation: "The official project address is Quezon Ave, Quezon City, Metro Manila. Nearby access, road approach, and exact landmarks should be reviewed during the latest broker presentation.",
    highlights: [
      "New DMCI Homes high-rise condominium in Quezon City",
      "Asian Contemporary architectural theme",
      "Studio, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Children's Playground", "Convenience Store", "Entertainment Room", "Fitness Gym", "Game Area", "Gazebo/ Cabana", "Jogging/ Biking Path", "Kiddie Pool", "Landscaped Gardens", "Skydeck Pool", "Laundry Station"],
    buildingFeatures: ["24-hour Security", "Skydeck Pool", "Laundry Station", "Convenience Store", "Shared activity rooms", "Building and turnover details for confirmation"],
    nearbyLandmarks: ["Quezon Ave corridor", "Quezon City city services", "Retail, school, and office access for confirmation", "Exact travel times for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/one-delta-terraces"
  },
  {
    slug: "the-erin-heights",
    name: "The Erin Heights",
    location: "Quezon City",
    city: "Quezon City",
    status: "Under Construction",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    landArea: "6,103 sqm.",
    address: "Commonwealth Ave. corner Tandang Sora Ave., Matandang Balara, Quezon City",
    unitTypes: ["Studio", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "The Erin Heights is a DMCI Homes high-rise condominium in Quezon City with a transit-oriented location connected to key city corridors. All unit availability, turnover details, payment terms, and computations must be confirmed before reservation.",
    aboutLocation: "The official address is Commonwealth Ave. corner Tandang Sora Ave., Matandang Balara. DMCI Homes positions the project for access to key CBD areas; buyers should confirm routes and travel times with current maps.",
    highlights: [
      "Under-construction DMCI Homes high-rise condominium in Quezon City",
      "Modern Tropical architectural theme",
      "Studio, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Shooting Court", "Children's Playground", "Convenience Store", "Entertainment Room", "Fitness Gym", "Game Room", "Gazebo/ Cabana", "Grill Pits", "Jogging/ Biking Path", "Kiddie Pool", "Landscaped Gardens"],
    buildingFeatures: ["24-hour Security", "Shared activity rooms", "Convenience Store", "Landscaped amenity areas", "Building and turnover details for confirmation"],
    nearbyLandmarks: ["Commonwealth Ave. corridor", "Tandang Sora Ave. access", "Matandang Balara, Quezon City", "CBD and transport access for buyer verification"],
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
    landArea: "3,479 sqm.",
    address: "Mapalad St. Brgy. Mariblo, Roosevelt Ave., Quezon City",
    unitTypes: ["1BR", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Cameron Residences is a ready-for-occupancy DMCI Homes high-rise condominium in Quezon City, presented for young families and professionals looking for an urban residential address. Details remain reference-only until confirmed by Luisa and official DMCI Homes materials.",
    aboutLocation: "The official address is Mapalad St., Brgy. Mariblo, Roosevelt Ave., Quezon City. Nearby services, routes, and travel times should be confirmed before a site viewing or reservation decision.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Quezon City",
      "Modern Tropical architectural theme",
      "1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Arrival Court", "Children's Playground", "Convenience Store", "Entertainment Room", "Fitness Gym", "Game Area", "Gazebo/ Cabana", "Kiddie Pool", "Landscaped Gardens", "Lap Pool", "Laundry Station"],
    buildingFeatures: ["24-hour Security", "Arrival Court", "Laundry Station", "Convenience Store", "Shared activity rooms", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Roosevelt Ave. corridor", "Brgy. Mariblo, Quezon City", "Retail and neighborhood services for confirmation", "Site viewing route for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/cameron-residences"
  },
  {
    slug: "the-valeron-tower",
    name: "The Valeron Tower",
    location: "Pasig",
    city: "Pasig City",
    status: "New",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Artisanal",
    landArea: "8,390 sqm.",
    address: "C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    assetStatus: "official-assets-needed",
    overview: "The Valeron Tower is a new DMCI Homes high-rise condominium at C-5 corner P.E. Antonio St. in Pasig City, positioned for premium city living. This page avoids fixed price claims; request the latest computation and availability from Luisa.",
    aboutLocation: "Located at C-5 corner P.E. Antonio St., Brgy. Ugong, Pasig City, The Valeron Tower gives buyers a C-5-side reference point for comparing Pasig, Ortigas, and nearby city access. Confirm routes and travel times before deciding.",
    highlights: [
      "New DMCI Homes high-rise condominium in Pasig City",
      "Modern Artisanal architectural theme",
      "Studio, 1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Basketball Court/Playcourt", "Children's Playground", "Convenience Store", "Entertainment Room", "Fitness Gym", "Function Hall", "Game Area", "Gazebo/ Cabana", "Grill Pits", "Jogging/ Biking Path", "Kiddie Pool"],
    buildingFeatures: ["24-hour Security", "Function Hall", "Convenience Store", "Shared recreation rooms", "Amenity and parking details for confirmation"],
    nearbyLandmarks: ["C-5 corridor", "Brgy. Ugong, Pasig City", "Ortigas and BGC access references for confirmation", "P.E. Antonio St. site approach"],
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
    landArea: "12,676 sqm.",
    address: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Allegra Garden Place is a DMCI Homes high-rise condominium in Pasig City with a Modern with Moroccan Inspiration theme. It remains listed here for reference only until the latest unit availability, computation, and official presentation are confirmed.",
    aboutLocation: "The official address is Pasig Boulevard, Brgy. Bagong Ilog. Buyers can compare this Pasig Boulevard location with nearby work, school, retail, and transport needs after confirming current routes.",
    highlights: [
      "Under-construction DMCI Homes high-rise condominium in Pasig City",
      "Modern with Moroccan Inspiration architectural theme",
      "Studio, 1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Arrival Court", "Covered Multipurpose Court", "Children's Play Area", "Convenience Store", "Entertainment Room", "Fitness Gym", "Function Hall", "Game Area", "Gazebo/ Cabana", "Grill Pits", "Jogging Path"],
    buildingFeatures: ["24-hour Security", "Arrival Court", "Covered Multipurpose Court", "Function Hall", "Convenience Store", "Building and turnover details for confirmation"],
    nearbyLandmarks: ["Pasig Boulevard corridor", "Brgy. Bagong Ilog, Pasig City", "Nearby city access for confirmation", "Site viewing route for buyer verification"],
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
    architecturalTheme: "Modern Tropical",
    landArea: "20,380 sqm.",
    address: "Pasig Boulevard, Brgy. Bagong Ilog, Pasig City",
    unitTypes: ["1BR", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Prisma Residences is a ready-for-occupancy DMCI Homes high-rise condominium along Pasig Boulevard, positioned by DMCI Homes for access to key CBDs such as BGC and Ortigas. Computations, availability, and promos must be confirmed before any reservation decision.",
    aboutLocation: "The official address is Pasig Boulevard, Brgy. Bagong Ilog. DMCI Homes highlights access to BGC and Ortigas; buyers should confirm current routes, drive times, and site viewing logistics.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Pasig City",
      "Modern Tropical architectural theme",
      "1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["Children's Playground", "24-hour Security", "Drop-Off Area", "Basketball Court/Playcourt", "Convenience Store", "Audio-Visual Room", "Fitness Gym", "Function Hall", "Game Room", "Gazebo/ Cabana", "Jogging/ Biking Path", "Kiddie Pool"],
    buildingFeatures: ["24-hour Security", "Drop-Off Area", "Audio-Visual Room", "Function Hall", "Convenience Store", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Pasig Boulevard corridor", "Brgy. Bagong Ilog, Pasig City", "BGC and Ortigas access references for confirmation", "Nearby transport and daily services for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/prisma-residences"
  },
  {
    slug: "sage-residences",
    name: "Sage Residences",
    location: "Mandaluyong",
    city: "Mandaluyong City",
    status: "Under Construction",
    turnoverYear: "For confirmation",
    propertyType: "High Rise Condominiums",
    developmentType: "High Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    landArea: "5,995 sqm.",
    address: "Domingo M. Guevara and Sinag Streets, Mauway, Mandaluyong City",
    unitTypes: ["Studio", "1BR", "2BR", "3BR"],
    assetStatus: "complete",
    overview: "Sage Residences is a DMCI Homes high-rise condominium in Mauway, Mandaluyong City, presented as an upcoming haven in the center of Metro Manila. This page keeps all pricing, turnover, and availability details subject to final confirmation.",
    aboutLocation: "The official address is Domingo M. Guevara and Sinag Streets, Mauway, Mandaluyong City. Buyers should confirm site access, routes, and nearby daily destinations during the latest project presentation.",
    highlights: [
      "Under-construction DMCI Homes high-rise condominium in Mandaluyong City",
      "Modern Tropical architectural theme",
      "Studio, 1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["Main Entrance Gate", "Leisure Pool", "Kiddie Pool", "Play Area", "Drop-Off Area", "Reception Lobby", "Fire Alarm & Automatic Sprinkler System", "Fire Cabinets", "Fire Exit", "Garbage Rooms", "Landscaped Atriums", "Sky Patio (Lumiventt Technology)"],
    buildingFeatures: ["Reception Lobby", "Main Entrance Gate", "Drop-Off Area", "Fire Alarm & Automatic Sprinkler System", "Fire Cabinets", "Fire Exit", "Garbage Rooms", "Sky Patio (Lumiventt Technology)"],
    nearbyLandmarks: ["Domingo M. Guevara St.", "Sinag St.", "Mauway, Mandaluyong City", "Central Metro Manila access for buyer verification"],
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
    architecturalTheme: "Japanese-Inspired",
    landArea: "17,082 sqm.",
    address: "M. Vicente St. Mandaluyong City",
    unitTypes: ["1BR", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Kai Garden Residences is a ready-for-occupancy DMCI Homes high-rise condominium in Mandaluyong with a Japanese-inspired residential theme. Buyers should request the latest computation, available units, and official presentation materials before proceeding.",
    aboutLocation: "The official address is M. Vicente St., Mandaluyong City. DMCI Homes presents the project as a tranquil home setting within the metro; site access and nearby destinations should be confirmed with current maps.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Mandaluyong City",
      "Japanese-Inspired architectural theme",
      "1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Arrival Court", "Multi-Purpose Court", "Children's Playground", "Fitness Gym", "Function Hall", "Game Room", "Gazebo/ Cabana", "Grill Pits", "Jogging/ Biking Path", "Kiddie Pool", "Koi Pond"],
    buildingFeatures: ["24-hour Security", "Arrival Court", "Multi-Purpose Court", "Function Hall", "Koi Pond amenity area", "Building and parking details for confirmation"],
    nearbyLandmarks: ["M. Vicente St.", "Mandaluyong City", "Metro Manila access references for confirmation", "Site viewing route for buyer verification"],
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
    landArea: "36,474 sqm.",
    address: "Acacia Estates, Taguig City",
    unitTypes: ["2BR", "3BR", "4BR"],
    purposeTags: ["Own Use", "Family"],
    assetStatus: "official-assets-needed",
    overview: "Mulberry Place is a ready-for-occupancy DMCI Homes mid-rise condominium community in Acacia Estates, Taguig City, described by DMCI Homes as an exclusive residential retreat. Unit availability, computations, and official materials should be confirmed through Luisa.",
    aboutLocation: "Located in Acacia Estates, Taguig City, Mulberry Place is part of a residential district that buyers can compare for family use, end-use, and long-term holding. Confirm exact route, nearby services, and viewing logistics before deciding.",
    highlights: [
      "Ready-for-occupancy DMCI Homes mid-rise condominium in Taguig City",
      "Asian Tropical architectural theme",
      "2BR, 3BR, and 4BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Drop-Off Area", "Clubhouse", "Convenience Store", "AVR/Meeting Room", "Fitness Gym", "Function Hall", "Game Room", "Gazebo/ Cabana", "Kiddie Pool", "Landscaped Gardens", "Lap Pool"],
    buildingFeatures: ["24-hour Security", "Drop-Off Area", "Clubhouse", "AVR/Meeting Room", "Function Hall", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Acacia Estates", "Taguig City residential district", "Nearby services and schools for confirmation", "Viewing route for buyer verification"],
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
    architecturalTheme: "Modern Artisanal",
    landArea: "28,607 sqm.",
    address: "Banyan Road, Acacia Estates, Taguig City",
    unitTypes: ["1BR", "2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Alder Residences is a ready-for-occupancy DMCI Homes high-rise condominium along Banyan Road in Acacia Estates, Taguig City. The page is maintained as a safe broker reference with final computation, unit details, and availability to be confirmed.",
    aboutLocation: "The official address is Banyan Road, Acacia Estates, Taguig City. Buyers can use it for comparing Taguig residential access while confirming exact travel times, daily needs, and viewing route with current materials.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Taguig City",
      "Modern Artisanal architectural theme",
      "1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Drop-Off Area", "Playcourt", "Children's Play Area", "Convenience Store", "Entertainment Room", "Fitness Gym", "Game Room", "Gazebo/ Cabana", "Grill Pits", "Jogging/ Biking Path", "Kiddie Pool"],
    buildingFeatures: ["24-hour Security", "Drop-Off Area", "Playcourt", "Convenience Store", "Shared recreation rooms", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Banyan Road", "Acacia Estates", "Taguig City residential district", "Nearby services and access routes for buyer verification"],
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
    architecturalTheme: "Modern",
    landArea: "5,993 sqm.",
    address: "Dominga St. Pasay City",
    unitTypes: ["1BR", "2BR", "3BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    assetStatus: "official-assets-needed",
    overview: "The Aston Place is a ready-for-occupancy DMCI Homes high-rise condominium on Dominga St. in Pasay City, positioned for a balanced city lifestyle. Pricing, promos, availability, payment terms, and turnover references remain subject to final confirmation.",
    aboutLocation: "The official address is Dominga St., Pasay City. Buyers should verify nearby access, travel times, and viewing schedule with Luisa and current official materials.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Pasay City",
      "Modern architectural theme",
      "1BR, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Convenience Store", "Fitness Gym", "Game Area", "Gazebo/ Cabana", "Kiddie Pool", "Lap Pool", "Laundry Station", "Lounge Pool", "Lounge Area", "Main Entrance Gate", "Perimeter Fence"],
    buildingFeatures: ["24-hour Security", "Main Entrance Gate", "Perimeter Fence", "Laundry Station", "Convenience Store", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Dominga St.", "Pasay City", "Nearby city services and transport for confirmation", "Site viewing route for buyer verification"],
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
    architecturalTheme: "Modern Contemporary",
    landArea: "2,382 sqm.",
    address: "Dominga St., Malate, Manila",
    unitTypes: ["Studio", "1BR", "2BR"],
    purposeTags: ["Own Use", "Investment", "Rental"],
    assetStatus: "official-assets-needed",
    overview: "The Camden Place is a DMCI Homes high-rise condominium in Malate, Manila. It is included here as an approved priority project with final prices, payment terms, availability, and turnover details to be confirmed before buyer decisions.",
    aboutLocation: "The official address is Dominga St., Malate, Manila. Buyers should confirm routes, nearby services, and viewing access with the latest official project materials.",
    highlights: [
      "Under-construction DMCI Homes high-rise condominium in Manila",
      "Modern Contemporary architectural theme",
      "Studio, 1BR, and 2BR options subject to latest availability"
    ],
    amenities: ["Reception Lobby", "Lounge Area", "Snack Bar", "Elevator Lobby", "Sky Deck Pool", "Sky Promenade", "Sky Lounge", "24-hour Security", "Alfresco", "All-Day Dining Restaurant", "Amenity Core", "Arrival Court"],
    buildingFeatures: ["Reception Lobby", "Elevator Lobby", "Sky Promenade", "Sky Lounge", "24-hour Security", "Arrival Court"],
    nearbyLandmarks: ["Dominga St.", "Malate, Manila", "Nearby city services and institutions for confirmation", "Site viewing route for buyer verification"],
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
    landArea: "17,623 sqm.",
    address: "Dr. A. Santos Ave., Para\u00f1aque City",
    unitTypes: ["1BR", "2BR"],
    assetStatus: "official-assets-needed",
    overview: "The Atherton is a ready-for-occupancy DMCI Homes high-rise condominium along Dr. A. Santos Ave. in Para\u00f1aque City, presented for contemporary living in the south. Buyers should request the latest computation, available units, and official materials before proceeding.",
    aboutLocation: "The official address is Dr. A. Santos Ave., Para\u00f1aque City. Nearby access, road conditions, and travel times should be confirmed during project shortlisting.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Para\u00f1aque City",
      "Modern Tropical architectural theme",
      "1BR and 2BR options subject to latest availability"
    ],
    amenities: ["Multi-Purpose Court", "Entrance Gate", "Lap Pool", "Leisure Pool", "Open Lawn/Picnic Grove", "Play Area", "Perimeter Fence", "24-hour Security", "Badminton Court", "Convenience Store", "Entertainment Room", "Fitness Gym"],
    buildingFeatures: ["24-hour Security", "Entrance Gate", "Perimeter Fence", "Multi-Purpose Court", "Convenience Store", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Dr. A. Santos Ave.", "Para\u00f1aque City", "Southern Metro Manila access for confirmation", "Nearby services and viewing route for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/the-atherton"
  },
  {
    slug: "calathea-place",
    name: "Calathea Place",
    location: "Para\u00f1aque",
    city: "Para\u00f1aque City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "Mid Rise Condominiums",
    developmentType: "Mid Rise Condominiums",
    architecturalTheme: "Modern Tropical",
    landArea: "15,414 sqm.",
    address: "Dr. A. Santos Ave. Para\u00f1aque City",
    unitTypes: ["1BR", "2BR"],
    assetStatus: "official-assets-needed",
    overview: "Calathea Place is a ready-for-occupancy DMCI Homes mid-rise condominium along Dr. A. Santos Ave. in Para\u00f1aque City, presented around a nature-inspired residential setting. Availability, unit details, and computations must be confirmed with Luisa.",
    aboutLocation: "The official address is Dr. A. Santos Ave., Para\u00f1aque City. Buyers should confirm exact route, nearby access, and site viewing details before deciding.",
    highlights: [
      "Ready-for-occupancy DMCI Homes mid-rise condominium in Para\u00f1aque City",
      "Modern Tropical architectural theme",
      "1BR and 2BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Multi-Purpose Court", "Play Area", "Convenience Store", "Fitness Gym", "Game Room", "Gazebo/ Cabana", "Kiddie Pool", "Landscaped Gardens", "Lap Pool", "Lounge Pool", "Lounge Area"],
    buildingFeatures: ["24-hour Security", "Multi-Purpose Court", "Convenience Store", "Landscaped Gardens", "Shared recreation rooms", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Dr. A. Santos Ave.", "Para\u00f1aque City", "Nearby services and transport for confirmation", "Site viewing route for buyer verification"],
    sourceUrl: "https://www.dmcihomes.com/calathea-place"
  },
  {
    slug: "sonora-garden-residences",
    name: "Sonora Garden Residences",
    location: "Las Pi\u00f1as",
    city: "Las Pi\u00f1as City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "High Rise Condominiums / Mid Rise Condominiums",
    developmentType: "High Rise Condominiums / Mid Rise Condominiums",
    architecturalTheme: "Modern Contemporary",
    landArea: "14,492 sqm.",
    address: "Alabang-Zapote Road, Talon Tres, Las Pinas",
    unitTypes: ["2BR", "3BR"],
    assetStatus: "official-assets-needed",
    overview: "Sonora Garden Residences is a ready-for-occupancy DMCI Homes condominium community along Alabang-Zapote Road in Las Pi\u00f1as City, positioned for harmonious residential living. All computations, availability, and unit details should be confirmed before deciding.",
    aboutLocation: "The official address is Alabang-Zapote Road, Talon Tres, Las Pinas. Buyers should confirm exact access, road conditions, and nearby destinations with current maps and official materials.",
    highlights: [
      "Ready-for-occupancy DMCI Homes condominium community in Las Pi\u00f1as City",
      "Modern Contemporary architectural theme",
      "2BR and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Basketball Court/Playcourt", "Children's Play Area", "Convenience Store", "Entertainment Room", "Fitness Gym", "Function Hall", "Game Area", "Gazebo/ Cabana", "Grill Pits", "Jogging/ Biking Path", "Kiddie Pool"],
    buildingFeatures: ["24-hour Security", "Function Hall", "Convenience Store", "Shared recreation rooms", "Building and parking details for confirmation"],
    nearbyLandmarks: ["Alabang-Zapote Road", "Talon Tres, Las Pinas", "Southern Metro Manila access for confirmation", "Nearby daily services for buyer verification"],
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
    landArea: "40,768 sqm.",
    address: "Sitio Bato, via Bontiway, Brgy. Poblacion, Tuba, Benguet",
    unitTypes: ["Studio", "1BR", "2BR"],
    assetStatus: "complete",
    overview: "Moncello Crest is a new DMCI Homes leisure residence in Tuba, Benguet, presented for buyers looking for a calmer mountain setting near Baguio. This reference page keeps all computations, terms, availability, and turnover details subject to final confirmation.",
    aboutLocation: "The official address is Sitio Bato, via Bontiway, Brgy. Poblacion, Tuba, Benguet. Buyers should confirm access roads, travel times, weather considerations, and site viewing logistics before deciding.",
    highlights: [
      "New DMCI Homes leisure residence in Tuba, Benguet",
      "Modern Filipino architectural theme",
      "Studio, 1BR, and 2BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Arrival Court", "Basketball Court/Playcourt", "Business Center", "Children's Play Area", "Children's Recreation Space / Daycare", "Entertainment Room", "Fire Pit", "Fitness Gym", "Game Room", "Gazebo/ Cabana", "Jacuzzi"],
    buildingFeatures: ["24-hour Security", "Arrival Court", "Business Center", "Children's Recreation Space / Daycare", "Fire Pit", "Building and turnover details for confirmation"],
    nearbyLandmarks: ["Sitio Bato", "Brgy. Poblacion, Tuba, Benguet", "Baguio/Benguet access for confirmation", "Mountain leisure setting for buyer verification"],
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
    architecturalTheme: "Asian Tropical",
    landArea: "75,367 sqm.",
    address: "Brgy. Calubcub II and Brgy. Subukin, San Juan, Batangas",
    unitTypes: ["Studio", "1BR", "2BR"],
    assetStatus: "complete",
    overview: "Solmera Coast is a DMCI Homes leisure residence in San Juan, Batangas, presented as a coastal condo-home getaway from the city. This page is for safe buyer shortlisting only; latest computation, availability, payment terms, and official materials must be confirmed.",
    aboutLocation: "The official address is Brgy. Calubcub II and Brgy. Subukin, San Juan, Batangas. Buyers should confirm road access, beach/community rules, travel times, and viewing arrangements before deciding.",
    highlights: [
      "Under-construction DMCI Homes leisure residence in San Juan, Batangas",
      "Asian Tropical architectural theme",
      "Studio, 1BR, and 2BR options subject to latest availability"
    ],
    amenities: ["Sky Lounge", "Snack Bar", "Sky Deck", "Beach Dining Area", "Roof Deck Pool", "Lap Pool", "Infinity Pool", "Kiddie Pool", "Pool Pavilion", "Lounge Area", "Main Entrance Gate", "Pool Deck"],
    buildingFeatures: ["Main Entrance Gate", "Sky Lounge", "Sky Deck", "Beach Dining Area", "Pool Pavilion", "Building and turnover details for confirmation"],
    nearbyLandmarks: ["Brgy. Calubcub II", "Brgy. Subukin", "San Juan, Batangas", "Coastal leisure access for buyer verification"],
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
    `${project.status} ${project.developmentType} in ${project.city}`,
    `${project.architecturalTheme} reference theme from official project materials`,
    `${project.unitTypes.join(", ")} options, subject to latest availability`
  ];
}

function whyInvest(project) {
  return [
    `Official DMCI Homes source page identifies ${project.name} as a ${project.developmentType} in ${project.city}.`,
    `Location reference: ${project.address}. Confirm routes, landmarks, and travel times before deciding.`,
    "Unit options, payment terms, promos, inventory, and turnover details must be confirmed through Luisa before reservation.",
    "This website keeps the project as reference-only buyer assistance, not a final offer or live inventory sheet."
  ];
}

function withProjectFallbacks(project, index) {
  const unitTypes = project.unitTypes?.length ? project.unitTypes : ["Unit details for confirmation"];
  const hasCoreImages = project.assetStatus === "complete";
  const gallery = hasCoreImages
    ? [
      assetPath(project.slug, "gallery-1.jpg"),
      assetPath(project.slug, "gallery-2.jpg"),
      assetPath(project.slug, "gallery-3.jpg"),
      assetPath(project.slug, "master-plan.jpg"),
      assetPath(project.slug, "site-progress.jpg")
    ]
    : ["", "", ""];

  return {
    id: index + 1,
    contentLevel: "standard",
    contentStatus: "official-reference-copy",
    assetStatus: "official-assets-needed",
    verificationStatus: "reference-only",
    featured: true,
    tagline: "Approved DMCI Homes priority project",
    landArea: "For confirmation",
    purposeTags: project.purposeTags || commonPurposes,
    priceRangeLabel: "Request latest computation",
    priceSourceNote: "Updated computation, promos, payment terms, unit availability, and final pricing must be confirmed with Luisa before deciding.",
    overview: project.overview || projectOverview(project),
    description: project.description || project.overview || projectOverview(project),
    aboutLocation: project.aboutLocation || `${project.city} is included for buyer comparison. Nearby access, travel time, and exact landmarks should be confirmed through current maps and official project materials.`,
    highlights: project.highlights || projectHighlights({ ...project, unitTypes }),
    whyInvest: project.whyInvest || whyInvest(project),
    amenities: project.amenities || [],
    otherAmenities: project.otherAmenities || commonOtherAmenities,
    buildingFeatures: project.buildingFeatures || commonBuildingFeatures,
    nearbyLandmarks: project.nearbyLandmarks || ["Location access for confirmation", "Nearby services for confirmation", "Transport access for buyer verification"],
    siteProgressStatus: "Site progress information should be confirmed through official DMCI Homes channels or Luisa.",
    masterPlanNotes: "Master plan visuals and final unit details can be added once approved official project materials are selected.",
    themeDescription: `${project.architecturalTheme} is used as a reference label from the official DMCI Homes project page. Final architectural details must be confirmed through official project materials.`,
    buildings: [
      {
        name: `${project.name} building details`,
        developmentType: project.developmentType,
        levels: ["Exact levels, tower details, parking details, and turnover schedule for confirmation"],
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
    image: hasCoreImages ? assetPath(project.slug, "hero.jpg") : "",
    thumbnail: hasCoreImages ? assetPath(project.slug, "thumbnail.jpg") : "",
    gallery,
    masterPlanImage: hasCoreImages ? assetPath(project.slug, "master-plan.jpg") : "",
    siteProgressImage: hasCoreImages ? assetPath(project.slug, "site-progress.jpg") : "",
    videoTourUrl: "",
    mapUrl: "",
    directoryOrder: directoryOrder[project.slug],
    lastVerified: "2026-06-30",
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
