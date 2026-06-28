const placeholder = (seed) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1100&q=80`;

export const projects = [
  ["kalea-heights", "Kalea Heights", "Cebu", "Cebu", "Preselling", "2029", "High-rise Condo", ["Studio", "1BR", "2BR"], ["Own Use", "Investment", "OFW Friendly"], true],
  ["one-delta-terraces", "One Delta Terraces", "Quezon City", "Quezon City", "New", "2029", "High-rise Condo", ["1BR", "2BR", "3BR"], ["Family", "Investment"], true],
  ["moncello-crest", "Moncello Crest", "Baguio / Benguet", "Benguet", "Coming Soon", "2030", "Leisure Residence", ["1BR", "2BR"], ["Own Use", "Investment"], false],
  ["valeron-tower", "Valeron Tower", "Pasig", "Pasig", "Preselling", "2028", "High-rise Condo", ["Studio", "1BR", "2BR"], ["Rental", "Investment"], true],
  ["solmera-coast", "Solmera Coast", "Batangas", "San Juan", "Preselling", "2028", "Leisure Residence", ["1BR", "2BR", "3BR"], ["Own Use", "Family", "Investment"], true],
  ["anissa-heights", "Anissa Heights", "Quezon City", "Quezon City", "Preselling", "2027", "High-rise Condo", ["Studio", "1BR", "2BR"], ["Own Use", "OFW Friendly"], false],
  ["mulberry-place-2", "Mulberry Place 2", "Paranaque", "Paranaque", "RFO", "Ready", "Mid-rise Condo", ["2BR", "3BR"], ["Family", "Own Use"], true],
  ["the-calinea-tower", "The Calinea Tower", "Caloocan", "Caloocan", "Preselling", "2028", "High-rise Condo", ["Studio", "1BR", "2BR"], ["Investment", "Rental"], false],
  ["sage-residences", "Sage Residences", "Mandaluyong", "Mandaluyong", "Preselling", "2027", "High-rise Condo", ["1BR", "2BR"], ["Own Use", "Investment"], false],
  ["fortis-residences", "Fortis Residences", "Makati", "Makati", "Preselling", "2027", "High-rise Condo", ["1BR", "2BR", "3BR"], ["Investment", "Rental"], true],
  ["alea-residences", "Alea Residences", "Cavite", "Bacoor", "RFO", "Ready", "Mid-rise Condo", ["2BR", "3BR"], ["Family", "Own Use"], false],
  ["bristle-ridge", "Bristle Ridge", "Baguio / Benguet", "Baguio", "RFO", "Ready", "Leisure Residence", ["1BR", "2BR", "3BR"], ["Own Use", "Investment"], false],
  ["willow-park-homes", "Willow Park Homes", "Cavite", "Cavite", "Preselling", "2029", "House & Lot", ["House & Lot", "Lot"], ["Family", "Own Use"], true],
  ["verdon-parc", "Verdon Parc", "Davao", "Davao", "RFO", "Ready", "High-rise Condo", ["1BR", "2BR", "3BR"], ["Own Use", "Investment"], false],
  ["maricielo-villas", "Maricielo Villas", "Paranaque", "Paranaque", "RFO", "Ready", "Mid-rise Condo", ["2BR", "3BR"], ["Family", "Own Use"], false],
  ["brio-tower", "Brio Tower", "Makati", "Makati", "RFO", "Ready", "High-rise Condo", ["1BR", "2BR"], ["Investment", "Rental"], false],
  ["torre-de-manila", "Torre de Manila", "Manila", "Manila", "RFO", "Ready", "High-rise Condo", ["Studio", "1BR", "2BR"], ["Rental", "Investment"], false],
  ["rhapsody-residences", "Rhapsody Residences", "Muntinlupa", "Muntinlupa", "RFO", "Ready", "Mid-rise Condo", ["2BR", "3BR"], ["Family", "Own Use"], false]
].map(([slug, name, location, city, status, turnoverYear, propertyType, unitTypes, purposeTags, featured], index) => ({
  id: index + 1,
  name,
  slug,
  location,
  city,
  status,
  turnoverYear,
  propertyType,
  unitTypes,
  purposeTags,
  highlights: [
    "Buyer assistance available through Luisa Corral",
    "Updated computation available upon request",
    "Availability subject to confirmation"
  ],
  amenities: ["Pool area", "Fitness space", "Resident lounge", "Landscaped open spaces"],
  nearbyLandmarks: ["Business districts", "Schools", "Retail hubs", "Transport access"],
  description:
    `${name} is included as a buyer-assistance listing for clients comparing DMCI Homes options. Request the latest computation, current availability, and applicable payment terms before making decisions.`,
  image: placeholder(["1486406146926-c627a92ad1ab", "1512917774080-9991f1c4c750", "1494526585095-c41746248156", "1564013799919-ab600027ffc6"][index % 4]),
  gallery: [
    placeholder("1486406146926-c627a92ad1ab"),
    placeholder("1512917774080-9991f1c4c750"),
    placeholder("1564013799919-ab600027ffc6")
  ],
  videoTourUrl: "",
  mapUrl: "",
  featured,
  disclaimer: "Availability subject to confirmation. Updated price available upon request."
}));

export const statuses = ["RFO", "Preselling", "Coming Soon", "New", "Featured"];
export const unitTypes = ["Studio", "1BR", "2BR", "3BR", "House & Lot", "Lot", "Parking"];
export const propertyTypes = ["High-rise Condo", "Mid-rise Condo", "Leisure Residence", "House & Lot", "Lot"];
export const purposes = ["Own Use", "Investment", "Rental", "OFW Friendly", "Family"];
