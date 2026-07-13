const pricingDisclaimer =
  "Prices, promos, availability, payment terms, unit details, turnover schedules, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.";

const regionalAsset = (slug, file) => `/assets/projects/${slug}/${file}`;

const commonReservationRequirements = [
  "Online Client Registration",
  "Valid government-issued IDs",
  "Philippine TIN Number",
  "Online Reservation Agreement Form",
  "Reservation Fee: PHP 30,000 for the unit",
  "Parking Reservation Fee: PHP 10,000, if applicable",
  "Proof of Billing Address after reservation",
  "Preferred mode of payment for down payment",
  "PDCs or Auto Debit Arrangement using DMCI-PDI tie-in banks",
  "International bills payment or remittance options subject to confirmation"
];

const unitHoldingNotes = [
  "Philippine-based clients can hold units for 24 hours.",
  "International clients can hold units for 72 hours.",
  "Holding is not a reservation and must be confirmed through the current official process."
];

const bankList = [
  "Bank of Commerce",
  "BDO",
  "BPI",
  "Chinabank",
  "EastWest Bank",
  "Metrobank",
  "PNB",
  "Robinsons Bank",
  "Security Bank",
  "Sterling Bank",
  "UnionBank"
];

const commonPromoNotes = [
  "Sample computation only and subject to confirmation.",
  "Promo terms, discounts, and inventory can change without prior notice.",
  `Accredited bank/payment references include ${bankList.join(", ")} and others subject to confirmation.`
];

export const theAthertonDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "The Atherton DMCI Para\u00f1aque",
  heroHeadline: "The Atherton by DMCI Homes",
  tagline: "Ready-for-occupancy modern tropical living along Dr. A. Santos Avenue",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: regionalAsset("the-atherton", "logo.png"),
  image: regionalAsset("the-atherton", "hero.jpg"),
  thumbnail: regionalAsset("the-atherton", "thumbnail.jpg"),
  masterPlanImage: regionalAsset("the-atherton", "master-plan.jpg"),
  siteProgressImage: regionalAsset("the-atherton", "site-progress.jpg"),
  locationMapImage: regionalAsset("the-atherton", "location-map.jpg"),
  gallery: [
    regionalAsset("the-atherton", "hero.jpg"),
    regionalAsset("the-atherton", "location-map.jpg"),
    regionalAsset("the-atherton", "master-plan.jpg"),
    regionalAsset("the-atherton", "site-progress.jpg"),
    regionalAsset("the-atherton", "lounge-pool.jpg"),
    regionalAsset("the-atherton", "lap-pool.jpg"),
    regionalAsset("the-atherton", "open-lawn.jpg"),
    regionalAsset("the-atherton", "sunken-garden.jpg"),
    regionalAsset("the-atherton", "reception-lobby.jpg"),
    regionalAsset("the-atherton", "lounge-area.jpg"),
    regionalAsset("the-atherton", "lounge-area-2.jpg"),
    regionalAsset("the-atherton", "jogging-path.jpg"),
    regionalAsset("the-atherton", "garden.jpg"),
    regionalAsset("the-atherton", "game-area.jpg"),
    regionalAsset("the-atherton", "drop-off-area.jpg")
  ],
  galleryLabels: [
    "The Atherton community",
    "The Atherton location map",
    "The Atherton site development plan",
    "The Atherton site development overview",
    "The Atherton lounge pool",
    "The Atherton lap pool",
    "The Atherton open lawn",
    "The Atherton sunken garden",
    "The Atherton reception lobby",
    "The Atherton lounge area",
    "The Atherton lounge area reference",
    "The Atherton jogging path",
    "The Atherton landscaped garden",
    "The Atherton game area",
    "The Atherton drop-off area"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready",
  targetRfo: "August 2023",
  unitTypes: ["1BR", "2BR", "3BR Tandem", "4BR Tandem"],
  landArea: "1.7 hectares",
  address: "Dr. A. Santos Avenue, Para\u00f1aque City",
  developmentType: "High-rise Residential Condominium",
  propertyType: "High-rise Condominium",
  architecturalTheme: "Modern Tropical",
  priceRangeLabel: "1BR few left at 4.7M; 2BR and 3BR sold out / waitlist",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "The Atherton by DMCI Homes is a ready-for-occupancy modern tropical high-rise community along Dr. A. Santos Avenue in Para\u00f1aque City. The development spans 1.7 hectares with three 15-floor buildings and a strong open-space program for buyers who want a southern Metro Manila address with resort-inspired amenities.",
  introParagraphs: [
    "The Atherton is positioned for buyers who want an RFO DMCI Homes community near Sucat, BF Para\u00f1aque, schools, hospitals, shopping centers, and southern business districts.",
    "Current guide material shows 1BR units as the active inventory reference, while 2BR and tandem units are marked sold out and should be checked through waitlist or reopening with Luisa."
  ],
  highlights: [
    "Ready-for-occupancy high-rise community on Dr. A. Santos Avenue",
    "Three 15-floor buildings: Almond, Helicia, and Oak",
    "69% outdoor amenity/open-space reference with pools, gardens, sports courts, lounge areas, and Lumiventt design features"
  ],
  whyInvest: [
    "RFO timing lets buyers inspect the community and move faster compared with long pre-selling timelines, subject to current unit availability.",
    "Dr. A. Santos Avenue gives practical access to SM BF Para\u00f1aque, Sucat retail centers, hospitals, schools, Skyway/Sucat routes, Alabang, Makati, and BGC access corridors.",
    "The amenity plan includes lap pool, lounge pool, kiddie pool, sunken garden, jogging path, roof garden, fitness gym, game area, AV room, badminton court, and sky lounge.",
    "Official DMCI Online images, location map, site development plan, floor plans, payment samples, and Google Maps embed are wired for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Dr. A. Santos Avenue, Para\u00f1aque City" },
    { label: "Lot Area", value: "1.7 hectares" },
    { label: "Development Type", value: "High-rise residential condominium" },
    { label: "Buildings", value: "Almond, Helicia, and Oak" },
    { label: "Floors", value: "15 floors per building" },
    { label: "Unit Mix", value: "1BR, 2BR, 3BR and 4BR tandem units" },
    { label: "Open Space", value: "69% outdoor amenity/open-space reference" },
    { label: "RFO Reference", value: "August 2023" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "29.00 sqm", range: "4.7M", monthlyDp: "5% DP: 17.1k /mo", status: "Few left", note: "Reference only" },
    { type: "2BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" },
    { type: "3BR / 4BR Tandem", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" }
  ],
  summaryPricingNote:
    "Use these guide figures only for shortlisting. Request Luisa's current availability sheet and official computation before buyer presentation or reservation.",
  locationDetails: {
    title: "Prime Location of The Atherton",
    text:
      "The Atherton sits along Dr. A. Santos Avenue in Para\u00f1aque City, placing residents near SM BF Para\u00f1aque, Shopwise Sucat, Santana Grove, SM City Sucat, schools, hospitals, and southern Metro Manila business routes.",
    exactAddress: "Dr. A. Santos Avenue, Para\u00f1aque City, National Capital Region, 1700",
    image: regionalAsset("the-atherton", "location-map.jpg"),
    imageLabel: "The Atherton location map",
    note: "Travel times and distances are reference points only and should be checked with live traffic before site viewing.",
    mapTitle: "The Atherton on Google Maps",
    mapText: "Open Google Maps for live routes to The Atherton along Dr. A. Santos Avenue.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.393538617637!2d121.02477802959226!3d14.462077434801797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce49016062d9%3A0x2b31130ee33368fb!2sThe+Atherton!5e0!3m2!1sen!2sph!4v1530289695711"
  },
  nearbyDestinations: [
    { group: "Shopping Centers", items: ["SM BF Para\u00f1aque - about 0.9 km / 3 mins", "Shopwise Sucat", "Santana Grove", "SM Hypermarket Sucat", "Waltermart Sucat", "SM City Sucat", "Festival Mall - about 7.8 km / 16 mins"] },
    { group: "Educational Institutions", items: ["Para\u00f1aque Municipal High School", "UP South School", "APEC Schools Sta. Rita", "Betty's Vermillion Academy", "PATTS College of Aeronautics", "Olivarez College", "San Beda College Alabang"] },
    { group: "Medical Facilities", items: ["Unihealth Para\u00f1aque Hospital", "Para\u00f1aque City Medical Center", "Olivarez Hospital", "Para\u00f1aque Doctor's Hospital", "Asian Hospital and Medical Center"] },
    { group: "Business Districts", items: ["Northgate Cyberzone - about 8.0 km / 15 mins", "Madrigal Business District", "Ayala Business District - about 14 km / 30 mins"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of The Atherton",
    paragraphs: [
      "The Atherton spans 1.7 hectares and is planned with three high-rise buildings: Almond, Helicia, and Oak.",
      "Outdoor amenities occupy a large share of the development, giving residents access to pools, gardens, play areas, a picnic area, activity lawn, basketball court, gazebo, jogging path, and roof garden."
    ],
    keyStats: [
      { label: "Buildings", value: "Almond, Helicia, Oak" },
      { label: "Floors", value: "15 floors each" },
      { label: "Outdoor Amenities", value: "69% development reference" },
      { label: "Design Feature", value: "Lumiventt technology and landscaped atriums" }
    ]
  },
  viewHighlights: [
    { title: "Official Visuals", text: "Official DMCI Online project visuals are compressed locally for fast review on mobile and desktop." },
    { title: "Map and Site Plan", text: "The official Google Maps embed, location map, and site development plan are wired for buyer route checks and project orientation." }
  ],
  videoTourTitle: "Official Presentation Visuals",
  videoTourCopy: "The current official source page provides project images, maps, plans, and a generic DMCI 360 guide. Ask Luisa for the latest approved Atherton AVP if a fresh link is needed for presentation.",
  videoTourImage: regionalAsset("the-atherton", "lounge-pool.jpg"),
  videoTourUrl: "",
  videoTourLinks: [
    { label: "Open DMCI 360 Guide", url: "", variant: "secondary" },
    { label: "Open Official Source", url: "", variant: "ghost" }
  ],
  videoTourNote: "No project-specific public YouTube iframe was found on the official Atherton page during this update.",
  amenityGroups: [
    { group: "Outdoor Amenities", items: ["Lap pool", "Leisure pool", "Kiddie pool", "Play area", "Picnic area", "Activity lawn", "Basketball court", "Gazebo", "Jogging path", "Roof garden"] },
    { group: "Indoor Amenities", items: ["Lounge areas", "Fitness gym", "Game area", "Audio visual room", "Badminton court", "Sky lounge", "Extended sky patio", "Snack bar and kitchen"] },
    { group: "Convenience Facilities", items: ["Convenience store", "Water refilling station", "Laundry station", "Mail area"] },
    { group: "Building Features", items: ["Lumiventt technology", "Landscaped garden atriums", "Full back-up power", "Provision for CCTV", "Fire detection, alarm, and suppression system"] }
  ],
  amenityNote: "Final amenity operations, schedules, and access rules must be confirmed through Luisa or the official project presentation.",
  unitIntro:
    "The Atherton guide material includes 1BR, 2BR, and tandem unit references. Current active guide inventory is 1BR, while 2BR and tandem units are marked sold out and should be handled through waitlist or reopening checks.",
  unitSections: [
    { title: "1 Bedroom Units", description: "Compact RFO layouts for end-users or investors looking for a Para\u00f1aque address.", layouts: ["29.00 sqm"], rows: [
      { layout: "1BR", floorArea: "29.00 sqm", priceRange: "4.7M", status: "Few left", monthlyDp: "5% DP: 17.1k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom layouts are shown as reference plans but are currently marked sold out in the supplied material.", layouts: ["2BR A", "2BR B", "2BR C", "2BR D", "2BR E"], rows: [
      { layout: "2BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] },
    { title: "Tandem Units", description: "Larger tandem layouts are shown as reference plans and should be checked through reopening/waitlist.", layouts: ["3BR Tandem A", "4BR Tandem B"], rows: [
      { layout: "3BR / 4BR Tandem", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "The Atherton Floor Plans",
  floorPlansDescription: "Use these official layout images as references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "1BR Layout A", text: "One-bedroom unit layout reference.", src: regionalAsset("the-atherton", "floorplan-1br-a.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("the-atherton", "floorplan-2br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("the-atherton", "floorplan-2br-b.jpg") },
    { title: "2BR Layout C", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("the-atherton", "floorplan-2br-c.jpg") },
    { title: "2BR Layout D", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("the-atherton", "floorplan-2br-d.jpg") },
    { title: "2BR Layout E", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("the-atherton", "floorplan-2br-e.jpg") },
    { title: "Tandem Layout A", text: "Tandem layout reference.", src: regionalAsset("the-atherton", "floorplan-tandem-a.jpg") },
    { title: "Tandem Layout B", text: "Tandem layout reference.", src: regionalAsset("the-atherton", "floorplan-tandem-b.jpg") },
    { title: "Ground Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-ground.jpg") },
    { title: "2nd to 3rd Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-2nd-3rd.jpg") },
    { title: "4th to 5th Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-4th-5th.jpg") },
    { title: "6th Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-6th.jpg") },
    { title: "7th to 8th Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-7th-8th.jpg") },
    { title: "11th Floor Plan", text: "Building floor plan reference.", src: regionalAsset("the-atherton", "floorplan-11th.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The supplied Atherton reference includes a 5% DP Chinabank promo and a 12% DP promo. Remaining balance may be handled through Chinabank or other confirmed financing options depending on the selected term.",
    sampleComputation: [
      { label: "Sample Unit", value: "C-Almond 214" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "29.00 sqm" },
      { label: "List Price", value: "4,698,000.00" },
      { label: "RFO Date", value: "Aug-2023" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 56,396.93 monthly" },
      { label: "15 years", value: "7.0% rate / 43,658.45 monthly" },
      { label: "20 years", value: "7.0% rate / 37,658.30 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "4,698,000.00" },
      { label: "Special Discount", value: "2.0% / 93,960.00" },
      { label: "Total Contract Price", value: "4,604,040.00" },
      { label: "Closing Fee", value: "10.5% / 483,424.20" },
      { label: "Total with Closing Fee", value: "5,087,464.20" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 230,202.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "200,202.00" },
      { label: "Monthly DP", value: "12 months / 16,683.50 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 4,373,838.00" },
      { label: "Closing Fee", value: "483,424.20" },
      { label: "Total Balance + Closing Fee", value: "4,857,262.20" }
    ],
    importantNotes: commonPromoNotes,
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "Down payment over 40 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "29.00 sqm", price: "4,698,000", rfo: "Aug-2023", note: "HomeReady: Not applicable" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal for The Atherton",
    text: "The Atherton uses a unit holding portal so buyers can register, review current inventory, and temporarily hold a unit before reservation.",
    steps: ["Register online", "Check latest availability and computation", "Temporarily hold a selected unit for free", "Proceed to reservation only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationTitle: "Reservation Requirements for The Atherton",
  reservationNote: "Confirm the exact unit, computation, payment channel, and reservation documents with Luisa before paying any reservation fee."
};

export const calatheaPlaceDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Calathea Place DMCI Para\u00f1aque City",
  heroHeadline: "Calathea Place by DMCI Homes",
  tagline: "Ready-for-occupancy modern tropical mid-rise living along Dr. A. Santos Avenue",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: regionalAsset("calathea-place", "logo.jpg"),
  image: regionalAsset("calathea-place", "hero.jpg"),
  thumbnail: regionalAsset("calathea-place", "thumbnail.jpg"),
  masterPlanImage: regionalAsset("calathea-place", "master-plan.jpg"),
  siteProgressImage: regionalAsset("calathea-place", "site-progress.jpg"),
  locationMapImage: regionalAsset("calathea-place", "location-map.jpg"),
  gallery: [
    regionalAsset("calathea-place", "hero.jpg"),
    regionalAsset("calathea-place", "location-map.jpg"),
    regionalAsset("calathea-place", "master-plan.jpg"),
    regionalAsset("calathea-place", "site-progress.jpg"),
    regionalAsset("calathea-place", "snack-bar.jpg"),
    regionalAsset("calathea-place", "reception-area.jpg"),
    regionalAsset("calathea-place", "lounge-pool.jpg"),
    regionalAsset("calathea-place", "lounge.jpg"),
    regionalAsset("calathea-place", "lap-pool.jpg"),
    regionalAsset("calathea-place", "kiddie-pool.jpg"),
    regionalAsset("calathea-place", "jogging-path.jpg"),
    regionalAsset("calathea-place", "gazebo.jpg"),
    regionalAsset("calathea-place", "gate-guardhouse.jpg"),
    regionalAsset("calathea-place", "game-area.jpg"),
    regionalAsset("calathea-place", "play-area.jpg"),
    regionalAsset("calathea-place", "basketball-court.jpg")
  ],
  galleryLabels: [
    "Calathea Place building facade",
    "Calathea Place location map",
    "Calathea Place building turnover plan",
    "Calathea Place amenity site plan",
    "Calathea Place snack bar",
    "Calathea Place reception area",
    "Calathea Place lounge pool",
    "Calathea Place lounge",
    "Calathea Place lap pool",
    "Calathea Place kiddie pool",
    "Calathea Place jogging path",
    "Calathea Place gazebo",
    "Calathea Place gate and guardhouse",
    "Calathea Place game area",
    "Calathea Place children's play area",
    "Calathea Place basketball court"
  ],
  status: "Ready for Occupancy",
  turnoverYear: "Ready",
  targetRfo: "Available Now",
  unitTypes: ["1BR", "2BR", "Tandem"],
  landArea: "15,414 sqm",
  address: "Dr. A. Santos Avenue, Para\u00f1aque City",
  developmentType: "Mid-rise Condominium",
  propertyType: "Mid-rise Condominium",
  architecturalTheme: "Modern Tropical",
  priceRangeLabel: "1BR from 4.2M to 4.6M; 2BR sold out / waitlist",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Calathea Place by DMCI Homes is a ready-for-occupancy modern tropical mid-rise community along Dr. A. Santos Avenue in Para\u00f1aque City. It features four six-level buildings, podium and basement parking, resort-inspired amenities, and practical access to Sucat, BF Para\u00f1aque, airport, school, hospital, and retail routes.",
  introParagraphs: [
    "Calathea Place is designed for buyers who prefer a lower-density mid-rise environment with landscaped spaces, pools, recreation areas, and everyday conveniences.",
    "Current guide material shows 1BR units as active inventory, while 2BR and tandem units are displayed as sold out/waitlist references."
  ],
  highlights: [
    "Ready-for-occupancy mid-rise condominium along Dr. A. Santos Avenue",
    "Four buildings: Zebrina, Leonia, Lavender, and Marantina",
    "1BR active guide inventory with virtual community tour, official map, official amenities, and full floor-plan references"
  ],
  whyInvest: [
    "RFO status lets buyers evaluate the actual community, travel routes, and unit options before proceeding.",
    "Dr. A. Santos Avenue connects buyers to SM City BF Para\u00f1aque, Walter Mart Sucat, Sucat Skyway Exit, NAIA, schools, hospitals, and southern Metro Manila destinations.",
    "The mid-rise format and amenity set suit buyers who want a calmer neighborhood feel with pools, lounge spaces, fitness, game room, landscaped gardens, and sports areas.",
    "Official DMCI Online images, Google Maps embed, virtual tour link, floor plans, and payment samples are wired for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Dr. A. Santos Avenue, Para\u00f1aque City" },
    { label: "Land Area", value: "15,414 sqm" },
    { label: "Development Type", value: "Mid-rise condominium" },
    { label: "Buildings", value: "Zebrina, Leonia, Lavender, Marantina" },
    { label: "Levels", value: "6 residential levels" },
    { label: "Parking", value: "Podium and basement parking" },
    { label: "Unit Mix", value: "1BR and 2BR units, with tandem references" },
    { label: "RFO", value: "Available now" }
  ],
  summaryPricing: [
    { type: "1BR", floorArea: "28.50 - 31.00 sqm", range: "4.2M - 4.6M", monthlyDp: "5% DP: 15.1k - 16.5k /mo", status: "Few left", note: "Reference only" },
    { type: "2BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa for reopening units" },
    { type: "Tandem", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Waitlist", note: "Layout reference only" }
  ],
  summaryPricingNote:
    "Use these guide figures only for shortlisting. Request Luisa's latest availability sheet and official computation before buyer presentation or reservation.",
  locationDetails: {
    title: "Prime Location of Calathea Place",
    text:
      "Calathea Place is located along Dr. A. Santos Avenue in Para\u00f1aque City, close to Sucat retail hubs, schools, hospitals, airport access, and southern Metro Manila routes.",
    exactAddress: "Dr. A. Santos Avenue, Para\u00f1aque City",
    image: regionalAsset("calathea-place", "location-map.jpg"),
    imageLabel: "Calathea Place location map",
    note: "Travel times and distances are reference points only and should be checked with live traffic before site viewing.",
    mapTitle: "Calathea Place on Google Maps",
    mapText: "Open Google Maps for live routes to Calathea Place along Dr. A. Santos Avenue.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Calathea%20Place%20Dr.%20A.%20Santos%20Avenue%20Paranaque",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Calathea%20Place%20Paranaque",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3635804957826!2d121.01951617445938!3d14.463799986006528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6f7afb6151%3A0xad447e5a68b0bb9f!2sCalathea%20Place!5e0!3m2!1sen!2sph!4v1716977383908!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Educational Institutions", items: ["PATTS College of Aeronautics - about 1.5 to 4.0 km / 5 to 15 mins", "Olivarez College", "Southville International School"] },
    { group: "Shopping Centers", items: ["SM City BF Para\u00f1aque - about 1.0 to 3.5 km / 5 to 10 mins", "Walter Mart Sucat", "Puregold Sucat"] },
    { group: "Medical Facilities", items: ["Olivarez General Hospital - about 1.8 to 6.0 km / 10 to 20 mins", "Medical Center Para\u00f1aque", "Asian Hospital and Medical Center"] },
    { group: "Transport and Leisure", items: ["Sucat Skyway Exit - about 3.0 to 7.0 km / 10 to 20 mins", "Ninoy Aquino International Airport", "Para\u00f1aque Sports Complex", "Manila Memorial Park", "SM Southmall"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Calathea Place",
    paragraphs: [
      "Calathea Place spans 15,414 sqm and is arranged around four mid-rise buildings with six residential levels each.",
      "The official site visuals highlight the building turnover plan and amenity zones, including pools, landscaped gardens, play areas, recreation spaces, and convenience facilities."
    ],
    keyStats: [
      { label: "Buildings", value: "Zebrina, Leonia, Lavender, Marantina" },
      { label: "Levels", value: "6 residential levels" },
      { label: "Parking", value: "Podium and basement parking" },
      { label: "Theme", value: "Modern Tropical" }
    ]
  },
  viewHighlights: [
    { title: "Virtual Community Tour", text: "The official Calathea Place virtual community tour link is available from DMCI Online." },
    { title: "Official Visuals", text: "Project maps, amenity images, unit plans, and building plans are compressed locally for fast buyer browsing." }
  ],
  videoTourTitle: "Virtual Community Tour",
  videoTourCopy: "Open the official Calathea Place virtual community tour when buyers want to explore the community online.",
  videoTourImage: regionalAsset("calathea-place", "lounge-pool.jpg"),
  videoTourUrl: "",
  videoTourLinks: [
    { label: "Open Virtual Tour", url: "", variant: "secondary" },
    { label: "Open Official Source", url: "", variant: "ghost" }
  ],
  videoTourNote: "No project-specific public YouTube iframe was found on the official Calathea page during this update.",
  amenityGroups: [
    { group: "Outdoor Amenities", items: ["Lap pool", "Kiddie pool", "Leisure pool", "Landscaped gardens", "Jogging / biking path", "Gazebo / cabana", "Playground", "Picnic area"] },
    { group: "Indoor Amenities", items: ["Fitness gym", "Function hall", "Game room", "Multi-purpose area"] },
    { group: "Facilities", items: ["Reception lobby", "Convenience store", "Laundry station", "Water station", "Mailbox area"] },
    { group: "Building and Security", items: ["Guarded entrance with 24-hour security", "WiFi access in common areas", "Provision for CCTV cameras", "Fire alarm and sprinkler system"] }
  ],
  amenityNote: "Final amenities, operating rules, and access schedules must be confirmed through Luisa or the official project presentation.",
  unitIntro:
    "Calathea Place includes 1BR, 2BR, and tandem layout references. Current active guide inventory is 1BR, with 2BR and tandem units handled through reopening/waitlist confirmation.",
  unitSections: [
    { title: "1 Bedroom Units", description: "Efficient RFO layouts for buyers who want a ready Para\u00f1aque home or investment unit.", layouts: ["28.50 sqm", "31.00 sqm"], rows: [
      { layout: "1BR", floorArea: "28.50 sqm", priceRange: "4.2M", status: "Few left", monthlyDp: "5% DP: 15.1k /mo" },
      { layout: "1BR", floorArea: "31.00 sqm", priceRange: "4.5M - 4.6M", status: "Few left", monthlyDp: "5% DP: 16.4k - 16.5k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom layouts are shown for reference and are currently marked sold out in the supplied material.", layouts: ["2BR A", "2BR B", "2BR C", "2BR D", "2BR E", "2BR F"], rows: [
      { layout: "2BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] },
    { title: "Tandem Units", description: "Tandem layouts are shown for larger household references and reopening checks.", layouts: ["2BR with Den", "3BR Tandem A", "3BR Tandem B"], rows: [
      { layout: "Tandem", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Ask Luisa" }
    ] }
  ],
  floorPlansTitle: "Calathea Place Floor Plans",
  floorPlansDescription: "Use these official layout images as references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "1BR Layout A", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-a.jpg") },
    { title: "1BR Layout B", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-b.jpg") },
    { title: "1BR Layout C", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-c.jpg") },
    { title: "1BR Layout D", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-d.jpg") },
    { title: "1BR Layout E", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-e.jpg") },
    { title: "1BR Layout F", text: "One-bedroom layout reference.", src: regionalAsset("calathea-place", "floorplan-1br-f.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-b.jpg") },
    { title: "2BR Layout C", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-c.jpg") },
    { title: "2BR Layout D", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-d.jpg") },
    { title: "2BR Layout E", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-e.jpg") },
    { title: "2BR Layout F", text: "Two-bedroom layout reference for waitlist/reopening checks.", src: regionalAsset("calathea-place", "floorplan-2br-f.jpg") },
    { title: "2BR with Den Tandem", text: "Tandem layout reference.", src: regionalAsset("calathea-place", "floorplan-2br-den-tandem.jpg") },
    { title: "3BR Tandem A", text: "Tandem layout reference.", src: regionalAsset("calathea-place", "floorplan-3br-a-tandem.jpg") },
    { title: "3BR Tandem B", text: "Tandem layout reference.", src: regionalAsset("calathea-place", "floorplan-3br-b-tandem.jpg") },
    { title: "Zebrina and Leonia Floor Plan", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-zebrina-leonia.jpg") },
    { title: "Marantina and Lavender Floor Plan", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-marantina-lavender.jpg") },
    { title: "Building Floor Plan 3", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-building-3.jpg") },
    { title: "Building Floor Plan 4", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-building-4.jpg") },
    { title: "Building Floor Plan 5", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-building-5.jpg") },
    { title: "Building Floor Plan 6", text: "Building floor plan reference.", src: regionalAsset("calathea-place", "floorplan-building-6.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms for Calathea Place",
    text: "The supplied Calathea reference includes a 5% DP Chinabank promo and a 12% DP promo option. Remaining balance can be handled through confirmed bank or in-house financing options.",
    sampleComputation: [
      { label: "Sample Unit", value: "C-Zebrina 705" },
      { label: "Type", value: "1BR" },
      { label: "Size", value: "28.50 sqm" },
      { label: "List Price", value: "4,232,000.00" },
      { label: "RFO Date", value: "Feb-2019" },
      { label: "Downpayment", value: "5%" },
      { label: "Number of Months", value: "12 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 50,802.86 monthly" },
      { label: "15 years", value: "7.0% rate / 39,327.91 monthly" },
      { label: "20 years", value: "7.0% rate / 33,922.93 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "4,232,000.00" },
      { label: "Special Discount", value: "2.0% / 84,640.00" },
      { label: "Total Contract Price", value: "4,147,360.00" },
      { label: "Closing Fee", value: "10.5% / 435,472.80" },
      { label: "Total with Closing Fee", value: "4,582,832.80" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "5.0% / 207,368.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "177,368.00" },
      { label: "Monthly DP", value: "12 months / 14,780.67 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "95.0% / 3,939,992.00" },
      { label: "Closing Fee", value: "435,472.80" },
      { label: "Total Balance + Closing Fee", value: "4,375,464.80" }
    ],
    importantNotes: commonPromoNotes,
    promoCards: [
      { title: "5% DP Chinabank Promo", items: ["5% down payment", "2.0% special discount on DP promo term", "Down payment over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
      { title: "12% DP Promo", items: ["12% down payment", "1.0% special discount on DP promo term", "Down payment over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "1BR", size: "28.50 sqm", price: "4,232,000", rfo: "Feb-2019", note: "HomeReady: Rent-to-Own PHP 20,000 / mo" },
      { type: "1BR", size: "28.50 sqm", price: "4,232,000", rfo: "Oct-2019", note: "HomeReady: Rent-to-Own PHP 20,000 / mo" },
      { type: "1BR", size: "31.00 sqm", price: "4,564,000", rfo: "Nov-2020", note: "HomeReady: Rent-to-Own PHP 20,000 / mo" },
      { type: "1BR", size: "31.00 sqm", price: "4,529,000", rfo: "Aug-2020", note: "HomeReady: Rent-to-Own PHP 20,000 / mo" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal and Reopen Unit Queuing for Calathea Place",
    text: "Calathea Place uses a unit holding portal so buyers can register, review current availability, temporarily hold a unit, and queue for reopen units if a desired cut is sold out.",
    steps: ["Register online", "Review latest availability and computation", "Temporarily hold a selected unit", "Queue for reopen units when applicable", "Complete reservation only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationTitle: "Reservation Requirements for Calathea Place",
  reservationNote: "Confirm the exact unit, computation, payment channel, and reservation documents with Luisa before paying any reservation fee."
};

export const moncelloCrestDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Moncello Crest DMCI Tuba Benguet",
  heroHeadline: "Moncello Crest by DMCI Homes",
  tagline: "Eco-agricultural mountain resort condotel living near Baguio",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: regionalAsset("moncello-crest", "logo.png"),
  image: regionalAsset("moncello-crest", "hero.jpg"),
  thumbnail: regionalAsset("moncello-crest", "thumbnail.jpg"),
  masterPlanImage: regionalAsset("moncello-crest", "master-plan.jpg"),
  siteProgressImage: regionalAsset("moncello-crest", "site-progress.jpg"),
  locationMapImage: regionalAsset("moncello-crest", "location-map.png"),
  gallery: [
    regionalAsset("moncello-crest", "hero.jpg"),
    regionalAsset("moncello-crest", "location-map.png"),
    regionalAsset("moncello-crest", "master-plan.jpg"),
    regionalAsset("moncello-crest", "gallery-1.jpg"),
    regionalAsset("moncello-crest", "gallery-2.jpg"),
    regionalAsset("moncello-crest", "gallery-3.jpg"),
    regionalAsset("moncello-crest", "amenity-core.jpg"),
    regionalAsset("moncello-crest", "sky-promenade-ciela.jpg"),
    regionalAsset("moncello-crest", "sky-promenade-blanca.jpg"),
    regionalAsset("moncello-crest", "building-facade-detail.jpg"),
    regionalAsset("moncello-crest", "balcony-view.jpg"),
    regionalAsset("moncello-crest", "sky-patio.jpg"),
    regionalAsset("moncello-crest", "boardwalk.jpg"),
    regionalAsset("moncello-crest", "boardwalk-garden.jpg"),
    regionalAsset("moncello-crest", "firepit.jpg"),
    regionalAsset("moncello-crest", "play-area.jpg"),
    regionalAsset("moncello-crest", "viewing-deck.jpg"),
    regionalAsset("moncello-crest", "outdoor-jacuzzi.jpg"),
    regionalAsset("moncello-crest", "water-garden.jpg"),
    regionalAsset("moncello-crest", "basketball-court.jpg"),
    regionalAsset("moncello-crest", "rental-pool-program.jpg"),
    regionalAsset("moncello-crest", "rental-revenue-sharing.jpg"),
    regionalAsset("moncello-crest", "rental-income.jpg"),
    regionalAsset("moncello-crest", "rental-leisure-plus.jpg")
  ],
  galleryLabels: [
    "Moncello Crest building facade",
    "Moncello Crest location map",
    "Moncello Crest site development plan",
    "Moncello Crest sky promenade",
    "Moncello Crest sky patio",
    "Moncello Crest outdoor jacuzzi",
    "Moncello Crest amenity core",
    "Moncello Crest Ciela sky promenade",
    "Moncello Crest Blanca sky promenade",
    "Moncello Crest facade detail",
    "Moncello Crest balcony view",
    "Moncello Crest sky patio",
    "Moncello Crest elevated boardwalk",
    "Moncello Crest boardwalk gardens",
    "Moncello Crest fire pit",
    "Moncello Crest children's play area",
    "Moncello Crest viewing deck",
    "Moncello Crest outdoor jacuzzi",
    "Moncello Crest water garden",
    "Moncello Crest basketball court",
    "Moncello Crest rental pool program",
    "Moncello Crest revenue sharing",
    "Moncello Crest rental income reference",
    "Moncello Crest leisure plus program"
  ],
  status: "Pre-selling",
  turnoverYear: "2028",
  targetRfo: "Blanca: November 2028; Silva and Ciela: August 2029",
  unitTypes: ["Studio", "1BR", "2BR"],
  landArea: "40,768 sqm",
  address: "Sitio Bato, via Bontiway, Barangay Poblacion, Tuba, Benguet",
  developmentType: "Leisure Residences",
  propertyType: "Leisure Residences",
  architecturalTheme: "Modern Filipino",
  priceRangeLabel: "Studio from 8.1M, 1BR from 12.8M, 2BR from 14.3M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Moncello Crest by DMCI Homes is an eco-agricultural mountain resort condotel and leisure residence in Tuba, Benguet. The project combines cool-climate mountain living, modern Filipino architecture, condotel investment references, a rental pool program, fully furnished deliverables, and access to Baguio destinations.",
  introParagraphs: [
    "Moncello Crest is positioned for buyers who want a leisure property near Baguio with scenic mountain views, resort amenities, and managed condotel investment potential.",
    "The development includes Blanca and Silva condotel buildings plus the Ciela residential building, with studio, one-bedroom, and two-bedroom unit references."
  ],
  highlights: [
    "Eco-agricultural mountain resort condotel in Tuba, Benguet",
    "Blanca, Ciela, and Silva buildings with 2028 to 2029 turnover references",
    "Official YouTube AVP, Google Maps embed, virtual community tour, rental pool references, and fully furnished deliverables"
  ],
  whyInvest: [
    "Mountain leisure positioning near Baguio attractions gives Moncello Crest a distinct use case for personal stays, hospitality exposure, and long-term leisure demand.",
    "The project includes a mandatory individual rental pool program for condotel units, professionally managed by DMCI-PDI Hotels subject to final program terms.",
    "Fully furnished deliverable references include bedroom furniture, living essentials, terrace furniture, lighting, and bathroom accessories.",
    "Official DMCI Online AVP, 360 tour, map, amenity visuals, rental pool slides, and layout images are wired for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Sitio Bato via Bontiway, Brgy. Poblacion, Tuba, Benguet" },
    { label: "Land Area", value: "40,768 sqm" },
    { label: "Development Type", value: "Leisure residences / eco-agri mountain resort condotel" },
    { label: "Buildings", value: "Blanca and Silva condotel buildings; Ciela residential building" },
    { label: "Levels", value: "Blanca 18 residential levels; Ciela 20; Silva 22" },
    { label: "Unit Mix", value: "Studio, 1BR, and 2BR units" },
    { label: "Turnover", value: "Blanca Nov 2028; Silva and Ciela Aug 2029" },
    { label: "Architecture", value: "Modern Filipino" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "34.50 - 45.00 sqm", range: "8.1M - 9.3M", monthlyDp: "15% DP: 32.0k - 47.9k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "62.50 - 68.00 sqm", range: "12.8M - 13.1M", monthlyDp: "15% DP: 50.9k - 68.8k /mo", status: "Available", note: "Reference only" },
    { type: "2BR", floorArea: "69.00 - 91.50 sqm", range: "14.3M - 18.1M", monthlyDp: "15% DP: 57.1k - 92.9k /mo", status: "Available", note: "Reference only" }
  ],
  summaryPricingNote:
    "Use these guide figures only for shortlisting. Request Luisa's current availability sheet and official computation before buyer presentation or reservation.",
  locationDetails: {
    title: "Project Location and Accessibility",
    text:
      "Moncello Crest is located in Sitio Bato via Bontiway, Barangay Poblacion, Tuba, Benguet. It is positioned for access to Marcos Highway and Baguio destinations while keeping a calmer mountain resort setting.",
    exactAddress: "Sitio Bato, via Bontiway, Barangay Poblacion, Tuba, Benguet",
    image: regionalAsset("moncello-crest", "location-map.png"),
    imageLabel: "Moncello Crest location map",
    note: "Mountain travel times, weather, and road access should be checked before site viewing.",
    mapTitle: "Moncello Crest on Google Maps",
    mapText: "Open Google Maps for live route options to Moncello Crest in Tuba, Benguet.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Moncello%20Crest%20Tuba%20Benguet",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Moncello%20Crest%20Tuba%20Benguet",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7069778034393!2d120.55295327453491!3d16.388882584337846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1b5c7bff59b%3A0x78b4e71ef6852fe3!2sMoncello%20Crest!5e0!3m2!1sen!2sph!4v1713869880485!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Nearby Establishments", items: ["Burnham Park - 6.2 km / 14 mins", "SM City Baguio - 6.6 km / 14 mins", "UP Baguio - 6.1 km / 13 mins", "Baguio Center Mall - 7.2 km / 17 mins", "Camp John Hay - 8.0 km / 18 mins", "Baguio City Market - 7.1 km / 19 mins", "Baguio Loakan Airport - 9.0 km / 20 mins"] },
    { group: "Schools", items: ["UP Baguio - 6.1 km / 13 mins", "Philippine Women's University - 7.0 km / 17 mins", "Baguio College of Technology - 7.1 km / 17 mins", "University of Baguio - 7.1 km / 17 mins", "St. Louis University - 7.6 km / 19 mins", "Pines City Colleges - 8.6 km / 21 mins"] },
    { group: "Hospitals and Security", items: ["Baguio General Hospital and Medical Center - 5.5 km / 13 mins", "Notre Dame de Chartres Hospital - 7.1 km / 17 mins", "SLU Sacred Heart Medical Center - 7.4 km / 19 mins", "Tuba Fire Station - 1.1 km / 3 mins", "Tuba Central Police Station - 1.3 km / 4 mins"] },
    { group: "Tourist Spots", items: ["BenCab Museum - 8.0 km / 17 mins", "Wright Park - 9.0 km / 19 mins", "The Mansion - 9.7 km / 20 mins", "Mirador Heritage and Eco Park - 6.9 km / 21 mins", "Mines View Park - 10.6 km / 22 mins", "Lion's Head - 11.5 km / 25 mins"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Moncello Crest",
    paragraphs: [
      "Moncello Crest is planned around the natural terrain, with wide open spaces, scenic pathways, amenity cores, elevated boardwalks, water gardens, and view-oriented decks.",
      "The site plan supports a mountain resort lifestyle while separating condotel and residential uses across Blanca, Silva, and Ciela."
    ],
    keyStats: [
      { label: "Land Area", value: "40,768 sqm" },
      { label: "Condotel Buildings", value: "Blanca and Silva" },
      { label: "Residential Building", value: "Ciela" },
      { label: "Turnover Range", value: "2028 to 2029" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official Moncello Crest YouTube AVP as a guided project introduction." },
    { title: "360-Degree Virtual Tour", text: "Open the official virtual community tour for immersive buyer viewing when needed." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360-Degree Tour",
  videoTourCopy: "Watch the official Moncello Crest AVP, then open the virtual community tour for a more immersive view of the mountain resort setting.",
  videoTourImage: regionalAsset("moncello-crest", "sky-patio.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=rMI-beJXoTU",
  videoTourEmbedUrl: "https://www.youtube.com/embed/rMI-beJXoTU",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=rMI-beJXoTU", variant: "secondary" },
    { label: "Open Virtual Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large media is embedded lightly so the page stays usable on mobile.",
  amenityGroups: [
    { group: "Indoor Amenities", items: ["Restaurant building", "Game room", "KTV rooms", "Wellness spa", "Fitness gym", "Daycare center", "Clinic"] },
    { group: "Outdoor Leisure", items: ["Children's play area", "Tree houses", "Elevated boardwalks", "Outdoor jacuzzi", "Fire pits", "Water garden", "Viewing deck", "Basketball court"] },
    { group: "Mountain Lifestyle", items: ["Sky promenade", "Sky patio", "Balcony view areas", "Roof deck spaces", "Deck gardens"] },
    { group: "Condotel Support", items: ["Professionally managed hospitality operations", "Rental pool program references", "Common area management", "Buyer assistance through Luisa"] }
  ],
  amenityNote: "Final amenity operations, rental pool rules, complimentary-night use, and access schedules must be confirmed through Luisa or the official project presentation.",
  rentalPoolProgram: {
    title: "Individual Rental Pool Program",
    intro: "Moncello Crest includes an individual rental pool program reference for condotel units, professionally managed by DMCI-PDI Hotels and designed to distribute revenue based on pooled hotel operations.",
    cards: [
      { title: "Revenue Allocation", items: ["Unit owners receive 30% of gross room revenue generated by all units in the rental pool.", "The Condominium Corporation receives 5% for association dues and maintenance.", "The hotel operator receives 65% for operations and property upkeep."] },
      { title: "Owner Share Computation", items: ["Owner revenue is proportioned by the unit's floor area relative to total saleable floor area of all condotel units.", "A 5% withholding tax is deducted from the owner revenue share before distribution.", "Program details, occupancy assumptions, and projections must be confirmed before presentation."] },
      { title: "Program Highlights", items: ["Mandatory participation keeps uniform hotel standards.", "DMCI-PDI Hotels manages guest services and maintenance.", "Long-term lease reference with automatic renewal, subject to final documents.", "Complimentary room-night and reciprocity references are available for confirmation."] }
    ],
    warning: "Rental income projections are not guaranteed. Ask Luisa for the latest official rental pool documents, tax treatment, and program mechanics before buyer decisions."
  },
  unitIntro:
    "Moncello Crest offers fully furnished studio, 1BR, and 2BR units. Deliverable references include bathroom accessories, bed frame, heavy curtains, ceiling fan, TV cabinet, desk set, terrace furniture, complete lighting, and other furnishings subject to final turnover specifications.",
  unitSections: [
    { title: "Studio Units", description: "Efficient mountain resort layouts for leisure use or condotel investment.", layouts: ["34.50 sqm", "35.00 sqm", "41.50 sqm", "45.00 sqm"], rows: [
      { layout: "Studio", floorArea: "34.50 sqm", priceRange: "8.1M", status: "Available", monthlyDp: "15% DP: 32.0k /mo" },
      { layout: "Studio", floorArea: "35.00 sqm", priceRange: "8.1M", status: "Available", monthlyDp: "15% DP: 42.1k /mo" },
      { layout: "Studio", floorArea: "41.50 sqm", priceRange: "9.2M", status: "Limited", monthlyDp: "15% DP: 47.9k /mo" },
      { layout: "Studio", floorArea: "45.00 sqm", priceRange: "9.3M", status: "Available", monthlyDp: "15% DP: 36.9k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "Larger furnished layouts for buyers who want more separation and comfort.", layouts: ["62.50 sqm", "68.00 sqm"], rows: [
      { layout: "1BR", floorArea: "62.50 sqm", priceRange: "12.8M", status: "Limited", monthlyDp: "15% DP: 50.9k /mo" },
      { layout: "1BR", floorArea: "68.00 sqm", priceRange: "13.1M", status: "Limited", monthlyDp: "15% DP: 68.8k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom references for families, groups, and larger leisure ownership needs.", layouts: ["69.00 sqm", "84.50 sqm", "90.50 sqm", "91.50 sqm"], rows: [
      { layout: "2BR", floorArea: "69.00 sqm", priceRange: "14.3M - 14.4M", status: "Limited", monthlyDp: "15% DP: 57.1k - 57.6k /mo" },
      { layout: "2BR", floorArea: "84.50 sqm", priceRange: "16.4M - 16.7M", status: "Available", monthlyDp: "15% DP: 65.5k - 66.7k /mo" },
      { layout: "2BR", floorArea: "90.50 sqm", priceRange: "17.6M - 18.1M", status: "Limited", monthlyDp: "15% DP: 70.3k - 72.6k /mo" },
      { layout: "2BR", floorArea: "91.50 sqm", priceRange: "17.6M", status: "Few left", monthlyDp: "15% DP: 92.9k /mo" }
    ] }
  ],
  floorPlansTitle: "Moncello Crest Floor Plans",
  floorPlansDescription: "Use these official layout images as references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "Studio Layout A", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-a.png") },
    { title: "Studio Layout B", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-b.jpg") },
    { title: "Studio Layout C", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-c.jpg") },
    { title: "Studio Layout D", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-d.jpg") },
    { title: "Studio Layout E", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-e.jpg") },
    { title: "Studio Layout F", text: "Studio layout reference.", src: regionalAsset("moncello-crest", "floorplan-studio-f.jpg") },
    { title: "1BR Layout A", text: "One-bedroom layout reference.", src: regionalAsset("moncello-crest", "floorplan-1br-a.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference.", src: regionalAsset("moncello-crest", "floorplan-2br-a.jpg") },
    { title: "Blanca Building Floor Plan", text: "Blanca building floor plan reference.", src: regionalAsset("moncello-crest", "floorplan-blanca.jpg") },
    { title: "Silva Building Floor Plan", text: "Silva building floor plan reference.", src: regionalAsset("moncello-crest", "floorplan-silva.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The current promo reference allows 15% down payment spread until the RFO date, with the remaining 85% balance through bank financing, subject to final eligibility and approval.",
    sampleComputation: [
      { label: "Sample Unit", value: "C-Blanca 204" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "35.00 sqm" },
      { label: "List Price", value: "8,050,000.00" },
      { label: "RFO Date", value: "Nov-2028" },
      { label: "Downpayment", value: "15%" },
      { label: "Number of Months", value: "27 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 89,261.30 monthly" },
      { label: "15 years", value: "7.0% rate / 69,099.67 monthly" },
      { label: "20 years", value: "7.0% rate / 59,603.04 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "8,050,000.00" },
      { label: "Total Contract Price", value: "8,050,000.00" },
      { label: "Closing Fee", value: "10.5% / 845,250.00" },
      { label: "Total with Closing Fee", value: "8,895,250.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "15.0% / 1,207,500.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "1,177,500.00" },
      { label: "Monthly DP", value: "27 months / 43,611.11 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "85.0% / 6,842,500.00" },
      { label: "Closing Fee", value: "845,250.00" },
      { label: "Total Balance + Closing Fee", value: "7,687,750.00" }
    ],
    importantNotes: commonPromoNotes,
    promoCards: [
      { title: "15% DP Promo", items: ["15% down payment", "Balance 85% through bank financing", "Promo ends July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableComputations: [
      { type: "Studio", size: "41.50 sqm", price: "9,150,000", rfo: "Nov-2028", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "35.00 sqm", price: "8,050,000", rfo: "Nov-2028", note: "HomeReady: Not applicable" },
      { type: "1BR", size: "68.00 sqm", price: "13,050,000", rfo: "Nov-2028", note: "HomeReady: Not applicable" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Unit Holding Portal and Reopen Unit Queuing for Moncello Crest",
    text: "Moncello Crest uses a unit holding portal so buyers can register, review current availability, temporarily hold a unit, and queue for reopen units when applicable.",
    steps: ["Register online", "Review latest inventory and computation", "Temporarily hold a selected unit for free", "Queue for reopen units if needed", "Proceed only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationTitle: "Reservation Requirements for Moncello Crest",
  reservationNote: "Confirm the exact unit, condotel/residential classification, rental pool applicability, computation, payment channel, and reservation documents with Luisa before paying any reservation fee."
};

export const solmeraCoastDetails = {
  contentLevel: "rich",
  richProjectType: "standard",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "Solmera Coast DMCI Batangas City",
  heroHeadline: "Solmera Coast by DMCI Homes",
  tagline: "Beach park condotel and coastal leisure living in San Juan, Batangas",
  referenceUrl: "",
  sourceUrl: "",
  logoImage: regionalAsset("solmera-coast", "logo.png"),
  image: regionalAsset("solmera-coast", "hero.jpg"),
  thumbnail: regionalAsset("solmera-coast", "thumbnail.jpg"),
  masterPlanImage: regionalAsset("solmera-coast", "master-plan.jpg"),
  siteProgressImage: regionalAsset("solmera-coast", "site-progress.jpg"),
  locationMapImage: regionalAsset("solmera-coast", "location-map.jpg"),
  gallery: [
    regionalAsset("solmera-coast", "hero.jpg"),
    regionalAsset("solmera-coast", "location-map.jpg"),
    regionalAsset("solmera-coast", "location-map-2.jpg"),
    regionalAsset("solmera-coast", "master-plan.jpg"),
    regionalAsset("solmera-coast", "gallery-1.jpg"),
    regionalAsset("solmera-coast", "gallery-2.jpg"),
    regionalAsset("solmera-coast", "gallery-3.jpg"),
    regionalAsset("solmera-coast", "restaurant-2.jpg"),
    regionalAsset("solmera-coast", "restaurant-1.jpg"),
    regionalAsset("solmera-coast", "sky-lounge-2.jpg"),
    regionalAsset("solmera-coast", "sky-lounge-1.jpg"),
    regionalAsset("solmera-coast", "snack-bar.jpg"),
    regionalAsset("solmera-coast", "open-lounge.jpg"),
    regionalAsset("solmera-coast", "sky-promenade.jpg"),
    regionalAsset("solmera-coast", "beach-dining.jpg"),
    regionalAsset("solmera-coast", "roofdeck-pool.jpg"),
    regionalAsset("solmera-coast", "lap-pool.jpg"),
    regionalAsset("solmera-coast", "kiddie-pool.jpg"),
    regionalAsset("solmera-coast", "infinity-pool.jpg"),
    regionalAsset("solmera-coast", "pool-pavilion.jpg"),
    regionalAsset("solmera-coast", "activity-lawn.jpg"),
    regionalAsset("solmera-coast", "drop-off.jpg"),
    regionalAsset("solmera-coast", "balcony-view.jpg"),
    regionalAsset("solmera-coast", "facade-detail.jpg"),
    regionalAsset("solmera-coast", "facade-matahari.jpg")
  ],
  galleryLabels: [
    "Solmera Coast beach-facing facade",
    "Solmera Coast location map",
    "Solmera Coast wider location map",
    "Solmera Coast site development plan",
    "Solmera Coast infinity pool",
    "Solmera Coast beach dining area",
    "Solmera Coast sky lounge",
    "Solmera Coast restaurant",
    "Solmera Coast restaurant interior",
    "Solmera Coast sky lounge view",
    "Solmera Coast sky lounge",
    "Solmera Coast snack bar",
    "Solmera Coast open lounge",
    "Solmera Coast sky promenade",
    "Solmera Coast beach dining area",
    "Solmera Coast roof deck pool",
    "Solmera Coast lap pool",
    "Solmera Coast kiddie pool",
    "Solmera Coast infinity pool",
    "Solmera Coast pool pavilion",
    "Solmera Coast activity lawn",
    "Solmera Coast drop-off area",
    "Solmera Coast balcony view",
    "Solmera Coast facade detail",
    "Solmera Coast Matahari facade"
  ],
  status: "Under Construction",
  turnoverYear: "2027",
  targetRfo: "Matahari Feb 2027; Kartika May 2027; Bumi Aug 2027; Asri Nov 2027; Nusa Feb 2028",
  unitTypes: ["Studio", "1BR", "2BR"],
  landArea: "75,367 sqm",
  address: "Barangay Subukin and Barangay Calubcub II, San Juan, Batangas",
  developmentType: "Beach Park Condotel Complex",
  propertyType: "Leisure Residences",
  architecturalTheme: "Asian Tropical",
  priceRangeLabel: "Studio from 6.6M, 1BR from 15.3M, 2BR from 12.2M",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Solmera Coast by DMCI Homes is a beach park condotel and coastal leisure community in San Juan, Batangas. It is positioned for buyers who want a beach-oriented residence or investment reference with condotel operations, Asian Tropical architecture, extensive pool amenities, dining spaces, and access to Laiya/San Juan tourism.",
  introParagraphs: [
    "Solmera Coast brings DMCI's leisure residence format into San Juan, Batangas with five mid-rise buildings, a beach park setting, studio to two-bedroom units, and resort-style amenity zones.",
    "The supplied reference includes individual rental pool program details for condotel buildings, official AVP, official virtual tour, Google Maps embed, unit ranges, floor plans, and payment samples."
  ],
  highlights: [
    "Beach park condotel complex in San Juan, Batangas",
    "Five seven-storey mid-rise buildings with 2027 to 2028 turnover references",
    "Official YouTube AVP, Google Maps embed, virtual community tour, coastal amenity visuals, floor plans, and rental pool program references"
  ],
  whyInvest: [
    "San Juan, Batangas is known for beach tourism, Laiya access, marine activities, resort stays, and leisure travel from Metro Manila.",
    "The project combines personal beach use with condotel investment references through a professionally managed rental pool program for selected buildings.",
    "Amenity programming includes infinity pool, kiddie pool, lap pool, roof deck pool, sky lounge, restaurants, beach dining, snack bar, open lounge, convention center, welcome pavilion, and multi-purpose lawn.",
    "Official DMCI Online AVP, virtual tour, maps, location images, floor plans, amenity visuals, and payment samples are wired for buyer review."
  ],
  projectFacts: [
    { label: "Location", value: "Barangay Subukin and Barangay Calubcub II, San Juan, Batangas" },
    { label: "Development Type", value: "Beach park condotel complex" },
    { label: "Buildings", value: "5 mid-rise buildings" },
    { label: "Floors", value: "7 storeys: 6 residential floors and 1 basement level" },
    { label: "Architectural Theme", value: "Asian Tropical" },
    { label: "Unit Mix", value: "Studio, 1BR, and 2BR units" },
    { label: "Turnover", value: "Matahari Feb 2027; Kartika May 2027; Bumi Aug 2027; Asri Nov 2027; Nusa Feb 2028" },
    { label: "Investment Feature", value: "Rental pool program references for condotel buildings" }
  ],
  summaryPricing: [
    { type: "Studio", floorArea: "31.00 - 49.50 sqm", range: "6.6M - 10.9M", monthlyDp: "15% DP: 64.2k - 240.6k /mo", status: "Available", note: "Reference only" },
    { type: "1BR", floorArea: "69.00 - 70.00 sqm", range: "15.3M - 15.4M", monthlyDp: "15% DP: 125.7k - 251.4k /mo", status: "Limited", note: "Reference only" },
    { type: "2BR", floorArea: "63.00 - 92.00 sqm", range: "12.2M - 19.3M", monthlyDp: "15% DP: 120.0k - 476.4k /mo", status: "Available", note: "Reference only" }
  ],
  summaryPricingNote:
    "Use these guide figures only for shortlisting. Request Luisa's current availability sheet and official computation before buyer presentation or reservation.",
  locationDetails: {
    title: "Project Location of Solmera Coast",
    text:
      "Solmera Coast is located in Barangay Subukin and Barangay Calubcub II in San Juan, Batangas, a beach destination known for Laiya tourism, aquatic activities, mangrove/ecotourism areas, and leisure travel.",
    exactAddress: "Barangay Subukin and Barangay Calubcub II, San Juan, Batangas",
    image: regionalAsset("solmera-coast", "location-map.jpg"),
    imageLabel: "Solmera Coast location map",
    note: "Beach/community access, road travel, site viewing schedules, and resort rules should be confirmed before buyer trips.",
    mapTitle: "Solmera Coast on Google Maps",
    mapText: "Open Google Maps for live route options to Solmera Coast in San Juan, Batangas.",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Solmera%20Coast%20San%20Juan%20Batangas",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Solmera%20Coast%20San%20Juan%20Batangas",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.759770188719!2d121.43338747448969!3d13.732988986656897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd3b349ce86ad7%3A0xa4d2b999aa83eb4d!2sSolmera%20Coast!5e0!3m2!1sen!2sph!4v1710670453636!5m2!1sen!2sph"
  },
  nearbyDestinations: [
    { group: "Beach and Tourism", items: ["Laiya beach corridor", "San Juan coastal tourism areas", "Marine and aquatic activity destinations", "Beach resorts and leisure stays"] },
    { group: "Nature and Adventure", items: ["Mangrove forests for ecotourism", "Mountain hiking routes", "Coastal sightseeing routes", "Nature and outdoor activity areas"] },
    { group: "Heritage and Local Stops", items: ["San Juan Nepomuceno Church", "San Juan town services", "Local dining and tourism support areas"] },
    { group: "Buyer Notes", items: ["Travel time depends on Metro Manila starting point and weekend traffic", "Check resort/community access and site viewing schedule before trip", "Confirm condotel building, rental pool scope, and personal-use rules before reservation"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan of Solmera Coast",
    paragraphs: [
      "Solmera Coast is planned as a coastal resort community with mid-rise buildings, beach-oriented amenities, restaurants, pool zones, sky lounge spaces, and open leisure areas.",
      "The development includes Matahari, Kartika, Bumi, Asri, and Nusa buildings, with turnover references from February 2027 to February 2028."
    ],
    keyStats: [
      { label: "Buildings", value: "Matahari, Kartika, Bumi, Asri, Nusa" },
      { label: "Floors", value: "7 storeys with 6 residential floors and 1 basement" },
      { label: "Theme", value: "Asian Tropical" },
      { label: "Turnover Range", value: "2027 to 2028" }
    ]
  },
  viewHighlights: [
    { title: "Audio Visual Presentation", text: "Use the official Solmera Coast YouTube AVP as a guided project introduction." },
    { title: "360-Degree Virtual Tour", text: "Open the official virtual community tour for immersive buyer viewing when needed." }
  ],
  videoTourTitle: "Audio Visual Presentation and 360-Degree Tour",
  videoTourCopy: "Watch the official Solmera Coast AVP, then open the official virtual community tour to preview the beach park lifestyle.",
  videoTourImage: regionalAsset("solmera-coast", "infinity-pool.jpg"),
  videoTourUrl: "https://www.youtube.com/watch?v=eZFZzBVUYKM",
  videoTourEmbedUrl: "https://www.youtube.com/embed/eZFZzBVUYKM",
  videoTourLinks: [
    { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=eZFZzBVUYKM", variant: "secondary" },
    { label: "Open Virtual Tour", url: "", variant: "ghost" }
  ],
  videoTourNote: "Large media is embedded lightly so the page stays usable on mobile.",
  amenityGroups: [
    { group: "Pool and Beach Amenities", items: ["Infinity pool", "Kiddie pool", "Lap pool", "Leisure pool", "Roof deck pool", "Pool pavilion", "Beach dining area"] },
    { group: "Lifestyle and Dining", items: ["Sky lounge", "Game area", "Restaurants", "Snack bar", "Open lounge", "Sky promenade", "Convention center", "Welcome pavilion"] },
    { group: "Outdoor Spaces", items: ["Multi-purpose lawn", "Activity lawn", "Balcony view areas", "Drop-off area", "Beach park open spaces"] },
    { group: "Condotel Support", items: ["Professionally managed hospitality operations", "Rental pool program references", "Personal use and complimentary room-night references subject to confirmation"] }
  ],
  amenityNote: "Final amenity operations, rental pool rules, complimentary-night use, personal-use rules, and access schedules must be confirmed through Luisa or the official project presentation.",
  rentalPoolProgram: {
    title: "Individual Rental Pool Program",
    intro: "Solmera Coast includes an individual rental pool program reference for selected condotel buildings, intended to support passive-income potential through pooled hotel operations managed by DMCI PDI Hotels.",
    cards: [
      { title: "Program Scope", items: ["Rental pool program references apply to selected condotel buildings such as Matahari, Kartika, Bumi, and Nusa, subject to final documents.", "Independent short-term leases by unit owners are not permitted under the supplied program reference.", "Asri is listed as a residential building in the supplied RFO table."] },
      { title: "Revenue Sharing", items: ["Owners receive a share of gross room revenue generated from the entire hotel operation, not just their individual unit.", "Professional management covers marketing, guest services, operations, and maintenance.", "Income depends on occupancy, rates, expenses, taxes, and final program rules."] },
      { title: "Owner Perks", items: ["Complimentary room-night references are included in the supplied material.", "Use may apply to Solmera Coast or exchange stays at other DMCI Homes leisure properties, subject to confirmation.", "Owners can use the property personally under final program-use rules."] }
    ],
    warning: "Rental income projections are not guaranteed. Ask Luisa for the latest official rental pool documents, tax treatment, and program mechanics before buyer decisions."
  },
  unitIntro:
    "Solmera Coast offers studio, 1BR, and 2BR unit references for coastal leisure use and investment shortlisting. Exact building, view, condotel/residential classification, rental pool scope, computation, and availability must be confirmed.",
  unitSections: [
    { title: "Studio Units", description: "Efficient coastal units for personal getaways or condotel investment references.", layouts: ["31.00 sqm", "31.50 sqm", "34.00 sqm", "34.50 sqm", "35.00 sqm", "42.00 sqm", "49.50 sqm"], rows: [
      { layout: "Studio", floorArea: "31.00 sqm", priceRange: "6.6M - 7.1M", status: "Available", monthlyDp: "15% DP: 64.2k - 69.3k /mo" },
      { layout: "Studio", floorArea: "31.50 sqm", priceRange: "6.6M - 7.1M", status: "Few left", monthlyDp: "15% DP: 64.5k - 69.3k /mo" },
      { layout: "Studio", floorArea: "34.00 sqm", priceRange: "8.1M", status: "Limited", monthlyDp: "15% DP: 98.4k - 131.2k /mo" },
      { layout: "Studio", floorArea: "34.50 sqm", priceRange: "8.1M", status: "Limited", monthlyDp: "15% DP: 66.1k - 198.3k /mo" },
      { layout: "Studio", floorArea: "35.00 sqm", priceRange: "8.2M", status: "Available", monthlyDp: "15% DP: 66.6k - 199.7k /mo" },
      { layout: "Studio", floorArea: "42.00 sqm", priceRange: "9.8M", status: "Limited", monthlyDp: "15% DP: 80.2k - 240.6k /mo" },
      { layout: "Studio", floorArea: "49.50 sqm", priceRange: "10.9M", status: "Few left", monthlyDp: "15% DP: 89.0k - 178.0k /mo" }
    ] },
    { title: "1 Bedroom Units", description: "One-bedroom coastal layouts with more room for personal leisure use.", layouts: ["69.00 sqm", "70.00 sqm"], rows: [
      { layout: "1BR", floorArea: "69.00 sqm", priceRange: "15.3M", status: "Few left", monthlyDp: "15% DP: 125.7k - 251.4k /mo" },
      { layout: "1BR", floorArea: "70.00 sqm", priceRange: "15.4M", status: "Few left", monthlyDp: "15% DP: 126.6k - 190.0k /mo" }
    ] },
    { title: "2 Bedroom Units", description: "Two-bedroom layouts for families, groups, and larger beach-residence use cases.", layouts: ["63.00 sqm", "91.50 sqm", "92.00 sqm"], rows: [
      { layout: "2BR", floorArea: "63.00 sqm", priceRange: "12.2M - 14.1M", status: "Available", monthlyDp: "15% DP: 120.0k - 138.6k /mo" },
      { layout: "2BR", floorArea: "91.50 sqm", priceRange: "19.3M", status: "Available", monthlyDp: "15% DP: 158.8k - 476.4k /mo" },
      { layout: "2BR", floorArea: "92.00 sqm", priceRange: "17.4M - 19.2M", status: "Limited", monthlyDp: "15% DP: 172.1k - 189.6k /mo" }
    ] }
  ],
  floorPlansTitle: "Solmera Coast Floor Plans",
  floorPlansDescription: "Use these official layout images as references only. Request the official layout sheet for the exact unit before buyer presentation.",
  floorPlans: [
    { title: "Studio Layout A", text: "Studio layout reference.", src: regionalAsset("solmera-coast", "floorplan-studio-a.jpg") },
    { title: "Studio Layout B", text: "Studio layout reference.", src: regionalAsset("solmera-coast", "floorplan-studio-b.jpg") },
    { title: "Studio Layout C", text: "Studio layout reference.", src: regionalAsset("solmera-coast", "floorplan-studio-c.jpg") },
    { title: "1BR Layout A", text: "One-bedroom layout reference.", src: regionalAsset("solmera-coast", "floorplan-1br-a.jpg") },
    { title: "2BR Layout A", text: "Two-bedroom layout reference.", src: regionalAsset("solmera-coast", "floorplan-2br-a.jpg") },
    { title: "2BR Layout B", text: "Two-bedroom layout reference.", src: regionalAsset("solmera-coast", "floorplan-2br-b.jpg") },
    { title: "Matahari Building Floor Plan", text: "Matahari building floor plan reference.", src: regionalAsset("solmera-coast", "floorplan-matahari.jpg") },
    { title: "Kartika Building Floor Plan", text: "Kartika building floor plan reference.", src: regionalAsset("solmera-coast", "floorplan-kartika.jpg") },
    { title: "Bumi Building Floor Plan", text: "Bumi building floor plan reference.", src: regionalAsset("solmera-coast", "floorplan-bumi.jpg") },
    { title: "Asri Building Floor Plan", text: "Asri building floor plan reference.", src: regionalAsset("solmera-coast", "floorplan-asri.jpg") },
    { title: "Nusa Building Floor Plan", text: "Nusa building floor plan reference.", src: regionalAsset("solmera-coast", "floorplan-nusa.jpg") }
  ],
  paymentTerms: {
    title: "Payment Terms and Sample Computation",
    text: "The standard reference starts at 20% down payment until RFO with 80% bank financing. The promo reference allows 15% down payment until RFO with the remaining 85% through bank financing, subject to final eligibility.",
    rfoSchedule: [
      { label: "Matahari", value: "Feb 2027 / Condotel" },
      { label: "Kartika", value: "May 2027 / Condotel" },
      { label: "Bumi", value: "Aug 2027 / Condotel" },
      { label: "Asri", value: "Nov 2027 / Residential" },
      { label: "Nusa", value: "Feb 2028 / Condotel" }
    ],
    sampleComputation: [
      { label: "Sample Unit", value: "C-Asri 218" },
      { label: "Type", value: "Studio" },
      { label: "Size", value: "31.00 sqm" },
      { label: "List Price", value: "6,621,000.00" },
      { label: "RFO Date", value: "Nov-2027" },
      { label: "Downpayment", value: "15%" },
      { label: "Number of Months", value: "15 months" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 73,416.03 monthly" },
      { label: "15 years", value: "7.0% rate / 56,833.41 monthly" },
      { label: "20 years", value: "7.0% rate / 49,022.58 monthly" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "6,621,000.00" },
      { label: "Total Contract Price", value: "6,621,000.00" },
      { label: "Closing Fee", value: "10.5% / 695,205.00" },
      { label: "Total with Closing Fee", value: "7,316,205.00" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "15.0% / 993,150.00" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "963,150.00" },
      { label: "Monthly DP", value: "15 months / 64,210.00 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "85.0% / 5,627,850.00" },
      { label: "Closing Fee", value: "695,205.00" },
      { label: "Total Balance + Closing Fee", value: "6,323,055.00" }
    ],
    importantNotes: commonPromoNotes,
    promoCards: [
      { title: "15% DP Promo", items: ["15% down payment", "Balance 85% through bank financing", "Promo ends July 31, 2026", "Scope: Building Asri in supplied sample"] }
    ],
    sampleAvailableComputations: [
      { type: "2BR", size: "91.50 sqm", price: "19,255,000", rfo: "Feb-2027", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "34.50 sqm", price: "8,130,000", rfo: "Feb-2027", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "35.00 sqm", price: "8,188,000", rfo: "Feb-2027", note: "HomeReady: Not applicable" },
      { type: "Studio", size: "42.00 sqm", price: "9,822,000", rfo: "Feb-2027", note: "HomeReady: Not applicable" }
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Solmera Coast Unit Holding Portal",
    text: "Solmera Coast uses a unit holding portal so buyers can register, review inventory, and temporarily hold a preferred unit before deciding.",
    steps: ["Register online", "Review latest inventory and computation", "Temporarily hold a preferred unit", "Confirm condotel/residential classification and rental pool scope", "Proceed to reservation only after official confirmation"],
    notes: unitHoldingNotes
  },
  reservationRequirements: commonReservationRequirements,
  reservationTitle: "Reservation Requirements for Solmera Coast",
  reservationNote: "Confirm the exact unit, building, condotel/residential classification, rental pool applicability, computation, payment channel, and reservation documents with Luisa before paying any reservation fee."
};
