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
  location: "Cebu",
  status: "Preselling",
  propertyType: "High-Rise Residential Condominium",
  developmentType: "High-Rise Residential Condominium",
  landArea: "4.6 hectares",
  architecturalTheme: "Modern Tropical, Resort-Inspired",
  address: "Good Shepherd Road, Banawa, Brgy. Guadalupe, Cebu City",
  unitTypes: ["1BR", "2BR", "3BR", "Tandem Units"],
  priceRangeLabel: "PHP 5.6M - PHP 13.1M reference range",
  priceSourceNote: "Reference snapshot only. Prices, promos, terms, and availability must be confirmed with Luisa before deciding.",
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
    { type: "1BR", floorArea: "29.50 - 33.50 sqm", range: "PHP 5.6M - PHP 6.4M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 19.8k - PHP 22.8k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "53.00 - 80.50 sqm", range: "PHP 8.1M - PHP 11.4M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 28.8k - PHP 41.1k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "81.50 - 88.50 sqm", range: "PHP 12.0M - PHP 13.1M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 43.1k - PHP 47.0k/mo", note: "Ask Luisa for latest computation and availability." }
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
        { layout: "2BR", floorArea: "55.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.1M - PHP 9.0M", monthlyDp: "15% DP: PHP 28.9k - PHP 32.2k/mo" },
        { layout: "2BR", floorArea: "55.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.6M - PHP 9.3M", monthlyDp: "15% DP: PHP 30.7k - PHP 33.5k/mo" },
        { layout: "2BR", floorArea: "56.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.3M - PHP 9.1M", monthlyDp: "15% DP: PHP 29.5k - PHP 32.6k/mo" },
        { layout: "2BR", floorArea: "58.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.4M - PHP 9.5M", monthlyDp: "15% DP: PHP 30.2k - PHP 34.1k/mo" },
        { layout: "2BR", floorArea: "59.00 sqm", status: "Few left", priceRange: "PHP 8.8M", monthlyDp: "15% DP: PHP 31.3k/mo" },
        { layout: "2BR", floorArea: "59.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.5M - PHP 9.1M", monthlyDp: "15% DP: PHP 30.2k - PHP 32.7k/mo" },
        { layout: "2BR", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 8.8M - PHP 9.2M", monthlyDp: "15% DP: PHP 31.4k - PHP 32.9k/mo" },
        { layout: "2BR", floorArea: "61.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 9.1M - PHP 9.9M", monthlyDp: "15% DP: PHP 32.6k - PHP 35.6k/mo" },
        { layout: "2BR", floorArea: "62.00 sqm", status: "Few left", priceRange: "PHP 9.0M - PHP 9.0M", monthlyDp: "15% DP: PHP 32.1k - PHP 32.1k/mo" },
        { layout: "2BR", floorArea: "63.50 sqm", status: "Limited", priceRange: "PHP 8.9M - PHP 9.2M", monthlyDp: "15% DP: PHP 31.9k - PHP 33.0k/mo" },
        { layout: "2BR", floorArea: "65.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 9.1M - PHP 9.7M", monthlyDp: "15% DP: PHP 32.5k - PHP 34.7k/mo" },
        { layout: "2BR", floorArea: "68.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 9.4M - PHP 9.9M", monthlyDp: "15% DP: PHP 33.5k - PHP 35.5k/mo" },
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
        { layout: "3BR", floorArea: "81.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 12.0M - PHP 12.8M", monthlyDp: "15% DP: PHP 43.3k - PHP 46.1k/mo" },
        { layout: "3BR", floorArea: "84.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 12.0M - PHP 13.1M", monthlyDp: "15% DP: PHP 43.1k - PHP 47.0k/mo" },
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
      "The 15% DP promo is a reference snapshot only.",
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
  priceSourceNote: "Reference snapshot only. Prices, promos, terms, and availability must be confirmed with Luisa before deciding.",
  sourceUrl: "",
  lastVerified: "Reference snapshot for confirmation",
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
    { type: "Studio", floorArea: "32.50 - 38.50 sqm", range: "PHP 7.0M - PHP 8.8M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 21.2k - PHP 27.0k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "1BR", floorArea: "46.50 - 48.50 sqm", range: "PHP 8.9M - PHP 11.4M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 27.3k - PHP 34.9k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "2BR", floorArea: "59.00 - 91.00 sqm", range: "PHP 10.9M - PHP 16.2M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 33.4k - PHP 50.0k/mo", note: "Ask Luisa for latest computation and availability." },
    { type: "3BR", floorArea: "76.00 - 84.50 sqm", range: "PHP 13.7M - PHP 16.8M", status: "Available in reference snapshot", monthlyDp: "15% DP: PHP 42.3k - PHP 52.0k/mo", note: "Ask Luisa for latest computation and availability." }
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
    "Modern Artisanal design gives Valeron Tower a refined city-residential character. Final design details, finishes, and technical drawings must be verified through current official project materials.",
  siteDevelopment: {
    title: "Valeron Tower: A Blueprint for Elevated Living",
    text:
      "Valeron Tower is planned as a high-rise residential development at the C-5 Ortigas Corridor, designed to balance city access with refined residential comfort. The site development plan includes ground floor development, amenity floor development, and roof deck development. Resort-like amenities, leisure pools, open lounges, sky lounges, landscaped areas, and shared lifestyle spaces are planned across different levels. Site development details, floor layouts, and technical drawings are reference-only until official project materials are reviewed.",
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
  otherAmenities: ["Amenities are based on the reference snapshot and must be confirmed with the latest official project materials."],
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
      { layout: "STUDIO", floorArea: "32.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 7.0M - PHP 8.8M", monthlyDp: "15% DP: PHP 21.2k - PHP 27.0k/mo" },
      { layout: "STUDIO", floorArea: "34.50 sqm", status: "Few left", priceRange: "PHP 8.2M", monthlyDp: "15% DP: PHP 24.9k/mo" },
      { layout: "STUDIO", floorArea: "38.50 sqm", status: "Few left", priceRange: "PHP 8.6M", monthlyDp: "15% DP: PHP 26.3k/mo" }
    ] },
    { title: "1-Bedroom Units", description: "Perfect for individuals or couples, 1-bedroom units offer more room with separate living and sleeping areas for comfortable city living.", layouts: ["1BR B - 46.5 sqm", "1BR C - 48.5 sqm", "1BR A - 53 sqm"], rows: [
      { layout: "1BR", floorArea: "46.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 8.9M - PHP 11.4M", monthlyDp: "15% DP: PHP 27.3k - PHP 34.9k/mo" },
      { layout: "1BR", floorArea: "48.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 9.4M - PHP 11.3M", monthlyDp: "15% DP: PHP 28.7k - PHP 34.8k/mo" }
    ] },
    { title: "2-Bedroom Units", description: "Suited for small families or professionals needing extra room, 2-bedroom units feature larger spaces designed for comfort, privacy, relaxation, and work-from-home flexibility.", layouts: ["2BR J - 59 sqm", "2BR Q - 61 sqm", "2BR C - 61.5 sqm", "2BR F - 63 sqm", "2BR A - 65.5 sqm", "2BR D - 65.5 sqm", "2BR M - 66.5 sqm", "2BR G - 67 sqm", "2BR I - 67 sqm", "2BR K - 67 sqm", "2BR N - 67.5 sqm", "2BR O - 67.5 sqm", "2BR S - 68.5 sqm", "2BR P - 69 sqm", "2BR R - 69.5 sqm", "2BR L - 77.5 sqm", "2BR B - 78 sqm", "2BR H - 82 sqm", "2BR T - 87 sqm", "2BR U - 91 sqm"], rows: [
      { layout: "2BR", floorArea: "59.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 11.1M - PHP 12.4M", monthlyDp: "15% DP: PHP 34.1k - PHP 38.0k/mo" },
      { layout: "2BR", floorArea: "61.00 sqm", status: "Limited", priceRange: "PHP 11.4M - PHP 12.7M", monthlyDp: "15% DP: PHP 35.1k - PHP 39.0k/mo" },
      { layout: "2BR", floorArea: "61.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 11.1M - PHP 12.3M", monthlyDp: "15% DP: PHP 34.1k - PHP 37.7k/mo" },
      { layout: "2BR", floorArea: "63.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 10.9M - PHP 13.3M", monthlyDp: "15% DP: PHP 33.4k - PHP 40.8k/mo" },
      { layout: "2BR", floorArea: "65.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 11.1M - PHP 13.8M", monthlyDp: "15% DP: PHP 34.1k - PHP 42.5k/mo" },
      { layout: "2BR", floorArea: "66.50 sqm", status: "Few left", priceRange: "PHP 11.5M - PHP 12.5M", monthlyDp: "15% DP: PHP 35.4k - PHP 38.4k/mo" },
      { layout: "2BR", floorArea: "67.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 11.2M - PHP 14.1M", monthlyDp: "15% DP: PHP 34.5k - PHP 43.3k/mo" },
      { layout: "2BR", floorArea: "67.50 sqm", status: "Few left", priceRange: "PHP 12.2M - PHP 12.7M", monthlyDp: "15% DP: PHP 37.5k - PHP 39.2k/mo" },
      { layout: "2BR", floorArea: "69.00 sqm", status: "Limited", priceRange: "PHP 11.9M - PHP 13.7M", monthlyDp: "15% DP: PHP 36.5k - PHP 42.0k/mo" },
      { layout: "2BR", floorArea: "69.50 sqm", status: "Limited", priceRange: "PHP 11.8M - PHP 13.5M", monthlyDp: "15% DP: PHP 36.1k - PHP 41.6k/mo" },
      { layout: "2BR", floorArea: "77.50 sqm", status: "Few left", priceRange: "PHP 14.0M", monthlyDp: "15% DP: PHP 43.2k/mo" },
      { layout: "2BR", floorArea: "78.00 sqm", status: "Few left", priceRange: "PHP 13.9M - PHP 14.1M", monthlyDp: "15% DP: PHP 42.8k - PHP 43.4k/mo" },
      { layout: "2BR", floorArea: "82.00 sqm", status: "Few left", priceRange: "PHP 14.5M", monthlyDp: "15% DP: PHP 44.6k/mo" },
      { layout: "2BR", floorArea: "87.00 sqm", status: "Available in reference snapshot", priceRange: "PHP 15.5M - PHP 16.2M", monthlyDp: "15% DP: PHP 47.9k - PHP 50.0k/mo" },
      { layout: "2BR", floorArea: "91.00 sqm", status: "Few left", priceRange: "PHP 16.1M - PHP 16.2M", monthlyDp: "15% DP: PHP 49.8k - PHP 50.0k/mo" }
    ] },
    { title: "3-Bedroom Units", description: "Designed for larger families or buyers who want additional space, 3-bedroom units provide more expansive living areas, extra bedrooms, and enhanced flexibility for long-term family living.", layouts: ["3BR B - 76 sqm", "3BR F - 78 sqm", "3BR C - 79.5 sqm", "3BR A - 82.5 sqm", "3BR G - 83 sqm", "3BR D - 84.5 sqm", "3BR E - 84.5 sqm", "3BR H - 84.5 sqm"], rows: [
      { layout: "3BR", floorArea: "76.00 sqm", status: "Few left", priceRange: "PHP 14.1M - PHP 14.1M", monthlyDp: "15% DP: PHP 43.5k - PHP 43.6k/mo" },
      { layout: "3BR", floorArea: "78.00 sqm", status: "Few left", priceRange: "PHP 13.7M - PHP 14.7M", monthlyDp: "15% DP: PHP 42.3k - PHP 45.2k/mo" },
      { layout: "3BR", floorArea: "82.50 sqm", status: "Few left", priceRange: "PHP 14.3M - PHP 15.4M", monthlyDp: "15% DP: PHP 44.1k - PHP 47.6k/mo" },
      { layout: "3BR", floorArea: "84.50 sqm", status: "Available in reference snapshot", priceRange: "PHP 14.1M - PHP 16.8M", monthlyDp: "15% DP: PHP 43.6k - PHP 52.0k/mo" }
    ] },
    { title: "Tandem Units", description: "For buyers requiring more space or planning a combined home-and-office setup, tandem units provide a larger and more flexible environment. Availability, layout combination, and final deliverables must be confirmed with Luisa.", layouts: ["Tandem layout combinations for confirmation"], rows: [
      { layout: "Tandem", floorArea: "For confirmation", status: "Ask for latest availability", priceRange: "Request latest computation", monthlyDp: "Request latest computation" }
    ] }
  ],
  floorPlans: [
    { title: "Diverse Living Spaces at Valeron Tower", text: "Valeron Tower offers an extensive selection of floor plans designed to accommodate different lifestyles and preferences, from compact studios to larger family layouts. Floor plan images and technical details must be confirmed with the latest official project materials." },
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
    importantNotes: ["No promos available for this property in the reference snapshot.", "The summary cards show 15% DP guide ranges, while the detailed payment sample shows a standard 30% DP term.", "Guide ranges and actual terms must be confirmed before any reservation decision."],
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
    promoCards: [{ title: "Promo Snapshot", items: ["No promos available for this property in the reference snapshot.", "Promo details and payment terms must be confirmed with Luisa before use."] }],
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

  const project = slug === "kalea-heights"
    ? { ...base, ...kaleaHeightsDetails }
    : slug === "one-delta-terraces"
      ? { ...base, ...oneDeltaTerracesDetails }
      : slug === "valeron-tower"
        ? { ...base, ...valeronTowerDetails }
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

export const statuses = ["RFO", "Preselling", "Coming Soon", "New", "Featured"];
export const unitTypes = ["Studio", "1BR", "2BR", "3BR", "House & Lot", "Lot", "Parking"];
export const propertyTypes = ["High-rise Condo", "Mid-rise Condo", "Leisure Residence", "House & Lot", "Lot"];
export const purposes = ["Own Use", "Investment", "Rental", "OFW Friendly", "Family"];
