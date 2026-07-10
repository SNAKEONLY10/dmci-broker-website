const pricingDisclaimer =
  "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.";

const orianaAsset = (file) => `/assets/projects/the-oriana/${file}`;

export const theOrianaDetails = {
  contentLevel: "rich",
  richProjectType: "oriana",
  contentStatus: "customer-ready-reference-copy",
  assetStatus: "complete",
  detailTitle: "The Oriana DMCI Quezon City",
  heroHeadline: "The Oriana by DMCI: Urban Elegance in the Heart of Quezon City",
  tagline: "Modern tropical high-rise living along Aurora Boulevard, Quezon City",
  referenceUrl: "https://www.dmci-online.com/the-oriana-dmci-quezon-city/",
  logoImage: orianaAsset("logo.png"),
  image: orianaAsset("hero.jpg"),
  thumbnail: orianaAsset("thumbnail.jpg"),
  gallery: [
    orianaAsset("gallery-1.jpg"),
    orianaAsset("gallery-2.jpg"),
    orianaAsset("gallery-3.jpg"),
    orianaAsset("master-plan.jpg"),
    orianaAsset("site-progress.jpg"),
    orianaAsset("lounge.jpg"),
    orianaAsset("snack-bar.jpg"),
    orianaAsset("leisure-pool-2025.jpg"),
    orianaAsset("game-area.jpg"),
    orianaAsset("garden-view.jpg"),
    orianaAsset("sky-bridge.jpg"),
    orianaAsset("community-tour-poster.png"),
    orianaAsset("aerial-location.png")
  ],
  galleryLabels: [
    "The Oriana DMCI Drop Off",
    "The Oriana DMCI Lap Pool",
    "Amenity Core",
    "The Oriana Site Development Plan",
    "The Oriana Site Progress",
    "The Oriana Lounge",
    "The Oriana Snack Bar",
    "The Oriana Leisure Pool",
    "The Oriana Game Area",
    "The Oriana Garden View",
    "The Oriana Sky Bridge",
    "The Oriana Community Tour Preview",
    "The Oriana Aerial Location"
  ],
  masterPlanImage: orianaAsset("master-plan.jpg"),
  siteProgressImage: orianaAsset("site-progress.jpg"),
  status: "Ready for Occupancy",
  turnoverYear: "2026 / 2027",
  unitTypes: ["Studio", "1BR", "2BR", "3-Bedroom Tandem Units"],
  landArea: "9,314 sqm",
  address: "Aurora Boulevard, Quezon City",
  developmentType: "High-Rise Residential Condominium",
  propertyType: "High-Rise Residential Condominium",
  architecturalTheme: "Modern Tropical",
  priceRangeLabel: "Request latest computation",
  priceSourceNote: pricingDisclaimer,
  disclaimer: pricingDisclaimer,
  overview:
    "Experience premier urban living at The Oriana by DMCI Homes, located along Aurora Boulevard in Quezon City. This high-rise residential condominium development offers two towers with modern tropical architecture. Positioned in a transit-oriented community, it provides convenient access to major transportation hubs, educational institutions, business centers, and shopping malls. Each unit is thoughtfully designed to maximize space, natural light, and ventilation, ensuring a comfortable and stylish living environment.",
  introParagraphs: [
    "Experience premier urban living at The Oriana by DMCI Homes, located along Aurora Boulevard in Quezon City. This high-rise residential condominium development offers two towers with modern tropical architecture.",
    "Positioned in a transit-oriented community, it provides convenient access to major transportation hubs, educational institutions, business centers, and shopping malls. Each unit is thoughtfully designed to maximize space, natural light, and ventilation, ensuring a comfortable and stylish living environment."
  ],
  highlights: [
    "Two-tower high-rise residential condominium along Aurora Boulevard",
    "Modern Tropical architecture with North and South Tower turnover references",
    "Studio, 1BR, 2BR, and 3-bedroom tandem options subject to latest availability"
  ],
  whyInvest: [
    "Located on Aurora Boulevard near Katipunan Avenue, Anonas, and Araneta City.",
    "Transit-oriented setting near LRT-2 Anonas Station and the upcoming Anonas Station of the Metro Manila Subway.",
    "Designed with modern tropical architecture, open amenities, and layouts planned for natural light and ventilation.",
    "Reference pricing and availability are shown for buyer shortlisting; final computations must be confirmed with Luisa/DMCI Homes."
  ],
  projectFacts: [
    { label: "Location", value: "Aurora Boulevard, Quezon City" },
    { label: "Land Area", value: "9,314 sqm" },
    { label: "Development Type", value: "High-Rise Residential Condominium" },
    { label: "Architectural Theme", value: "Modern Tropical" },
    { label: "Number of Buildings", value: "2 Towers, North and South" },
    { label: "North Tower Levels", value: "54 Residential Levels" },
    { label: "Parking", value: "7 Basement Parking Levels" },
    { label: "Turnover", value: "North Tower: April 2026; South Tower: November 2027" }
  ],
  sectionLinks: [
    ["Facts", "facts"],
    ["Availability", "pricing"],
    ["Overview", "overview"],
    ["AVP", "audio-visual-presentation"],
    ["Location", "location"],
    ["Nearby", "nearby-establishments"],
    ["Site Plan", "site-development"],
    ["360 Tour", "virtual-tour"],
    ["Amenities", "amenities"],
    ["Units", "unit-options"],
    ["Floor Plans", "floor-plans"],
    ["Payment", "payment"],
    ["Unit Holding", "unit-holding"],
    ["Reservation", "reservation"],
    ["Gallery", "gallery"],
    ["Contact", "contact-project"]
  ],
  heroCtas: [
    { label: "Check Availability", to: "/availability?project=The%20Oriana&inquiryType=Availability", variant: "primary" },
    { label: "Request Latest Computation", to: "/request-computation?project=The%20Oriana&inquiryType=Computation", variant: "secondary" },
    { label: "Ask About Reservation", to: "/contact?project=The%20Oriana&inquiryType=Reservation", variant: "ghost" }
  ],
  availabilitySummary: {
    title: "Main Availability Summary",
    note: pricingDisclaimer,
    columns: [
      { key: "type", label: "Type" },
      { key: "status", label: "Status" },
      { key: "price", label: "Price" },
      { key: "dp", label: "12% DP" }
    ],
    rows: [
      { type: "Studio (30.00 - 30.50 sqm)", status: "Available", price: "4.8M - 5.9M", dp: "15.1k - 19.0k /mo" },
      { type: "1BR (29.00 - 35.50 sqm)", status: "Available", price: "4.9M - 7.0M", dp: "15.5k - 22.5k /mo" },
      { type: "2BR (54.50 - 81.50 sqm)", status: "Available", price: "7.2M - 9.9M", dp: "23.3k - 32.1k /mo" }
    ]
  },
  audioVisualPresentation: {
    title: "Audio Visual Presentation",
    text: "Watch the project AVP for a guided visual introduction to The Oriana. Use this as a presentation aid only; final details should still be confirmed with Luisa/DMCI Homes.",
    url: "https://www.youtube.com/watch?v=IF99Kg2xu1I",
    embedUrl: "https://www.youtube.com/embed/IF99Kg2xu1I",
    label: "Open The Oriana AVP",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=IF99Kg2xu1I", variant: "secondary" },
      { label: "Drive AVP Backup", url: "https://drive.google.com/file/d/1MRzWddRZdWK9z1zENevxVtDQUyuaboVk/view", variant: "ghost" },
      { label: "TOD AVP Part 1", url: "https://drive.google.com/file/d/13yqG73S9dtdDp2U2KymJ27OyOKDCDclA/view", variant: "ghost" },
      { label: "TOD AVP Part 2", url: "https://drive.google.com/file/d/16_8Hd_G4BZTLaqRAPz6jeNvcQOGMXuU1/view", variant: "ghost" }
    ]
  },
  locationDetails: {
    title: "Prime Location: The Oriana in Quezon City",
    text:
      "The Oriana by DMCI is ideally situated on Aurora Boulevard, Quezon City, surrounded by vibrant neighborhoods such as Katipunan Avenue, Anonas, and Araneta City. This prime location offers easy access to key areas in Metro Manila via the LRT-2 Katipunan Station and the upcoming Anonas Station of the Metro Manila Subway, enhancing connectivity and convenience for residents.",
    exactAddress: "Aurora Boulevard, Quezon City",
    image: orianaAsset("aerial-location.png"),
    imageLabel: "The Oriana DMCI Location",
    mapTitle: "The Oriana on Google Maps",
    mapText: "Use the map to zoom, check nearby roads and transit points, and open live directions before scheduling a site visit.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City",
    mapEmbedUrl: "https://www.google.com/maps?q=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City&output=embed"
  },
  nearbyIntro:
    "Situated in Project 4, Quezon City, The Oriana offers unmatched proximity to essential establishments like Araneta Center and Eastwood, Libis. Additionally, residents have easy access to Gateway Mall, Hi-top Supermart, and more, enhancing convenience and connectivity.",
  nearbyEstablishments: [
    { group: "Business Districts", items: ["Araneta Center (2.6 km)", "Eastwood City (3.9 km)", "UP-Ayala Technohub (5.7 km)", "Ortigas Center (7.2 km)"] },
    { group: "Malls & Supermarkets", items: ["Gateway Mall (1.7 km)", "Riverbank Mall (2.3 km)", "Eastwood Mall (5.6 km)", "Hi-top Supermart (200 m)", "Super Metro Gaisano (300 m)", "Aurora Market (350 m)"] },
    { group: "Schools", items: ["Ateneo de Manila University (2.0 km)", "Miriam College (2.4 km)", "National College of Business and Arts (50 m)", "Philippine School of Business Administration (550 m)"] },
    { group: "Hospitals", items: ["World Citi Medical Center (500 m)", "Quirino Memorial Medical Center (1.2 km)", "St. Luke's Medical Center (5.6 km)"] },
    { group: "Transportation", items: ["LRT-2 Anonas Station (250 m)", "MRT Cubao Station (4.4 km)", "Araneta Center Bus Terminal (2.5 km)"] }
  ],
  siteDevelopment: {
    title: "Site Development Plan: A Bird's Eye View of The Oriana",
    text:
      "The Oriana features a comprehensive site development plan, encompassing 9,314 square meters with two high-rise towers. The project is designed with a modern tropical theme, providing a refreshing and aesthetically pleasing environment. It includes various lifestyle amenities and open spaces that promote relaxation and leisure for its residents.",
    imageLabel: "The Oriana Site Development Plan",
    keyStats: [
      { label: "Site Area", value: "9,314 sqm" },
      { label: "Towers", value: "North and South" },
      { label: "Theme", value: "Modern Tropical" },
      { label: "Parking", value: "7 Basement Parking Levels" }
    ]
  },
  virtualTour: {
    title: "360 Virtual Tour: Experience The Oriana Virtually",
    text:
      "Step inside The Oriana with our interactive 360 Virtual Tour, exploring the property from every angle at home. Additionally, this immersive experience showcases our sophisticated spaces and comprehensive amenities, offering a detailed view of our luxurious development.",
    image: orianaAsset("community-tour-poster.png"),
    url: "https://www.dmci-online.com/virtual-community-tour/?option=ORI",
    label: "VIRTUAL TOUR",
    links: [
      { label: "Open 360 Virtual Tour", url: "https://www.dmci-online.com/virtual-community-tour/?option=ORI", variant: "secondary" },
      { label: "Watch AVP on YouTube", url: "https://www.youtube.com/watch?v=IF99Kg2xu1I", variant: "ghost" }
    ]
  },
  amenityIntro: "The Oriana offers a range of amenities and facilities that enhance the lifestyle of its residents.",
  amenityGroups: [
    { group: "Outdoor Amenities", items: ["Lap Pool", "Kiddie Pool", "Leisure Pool", "Pool Deck", "Lawn & Picnic Area", "Covered Basketball Court", "Children's Play Area", "Sky Promenade", "Sky Patio"] },
    { group: "Indoor Amenities", items: ["Fitness Gym", "Function Hall", "Entertainment Room", "Game Area", "Snack Bar", "Open Lounge Lobby", "Sky Lounge & Promenade"] },
    { group: "Facilities", items: ["24-hour Security", "Perimeter Fence", "Provision for CCTV Cameras", "Water Station", "WiFi Access", "Convenience Store", "Card-Operated Laundry Station", "High-speed Elevators", "100% Emergency Back-up Power", "Property Management Office"] }
  ],
  amenityGallery: [
    { label: "The Oriana DMCI Drop Off", src: orianaAsset("gallery-1.jpg") },
    { label: "The Oriana DMCI Lap Pool", src: orianaAsset("gallery-2.jpg") },
    { label: "Amenity Core", src: orianaAsset("gallery-3.jpg") },
    { label: "The Oriana Lounge", src: orianaAsset("lounge.jpg") },
    { label: "The Oriana Snack Bar", src: orianaAsset("snack-bar.jpg") },
    { label: "The Oriana Leisure Pool", src: orianaAsset("leisure-pool-2025.jpg") },
    { label: "The Oriana Game Area", src: orianaAsset("game-area.jpg") },
    { label: "The Oriana Garden View", src: orianaAsset("garden-view.jpg") },
    { label: "The Oriana Sky Bridge", src: orianaAsset("sky-bridge.jpg") }
  ],
  amenityImageLabels: [
    "The Oriana DMCI Drop Off",
    "The Oriana DMCI Reception",
    "The Oriana DMCI Lounge",
    "The Oriana DMCI Lounge Area",
    "The Oriana DMCI Lap Pool",
    "The Oriana DMCI Leisure Pool",
    "The Oriana DMCI Kiddie Pool",
    "The Oriana DMCI Picnic Area",
    "The Oriana DMCI Basketball",
    "The Oriana DMCI Play Area",
    "The Oriana DMCI Elevated Garden",
    "The Oriana DMCI Upper Deck Garden",
    "The Oriana DMCI Upper Deck",
    "Amenity Core"
  ],
  unitIntro:
    "Explore the diverse unit options at The Oriana by DMCI Homes, each tailored to different needs and lifestyles. The offerings include sleek studios and spacious three-bedroom apartments, designed with modern aesthetics and practical layouts. Availability should be checked with Luisa/DMCI to find the current unit options that match comfort, convenience, and lifestyle needs.",
  unitTypeDetails: [
    {
      title: "Studio Units",
      copy:
        "Experience the perfect blend of style and functionality with Studio Units at The Oriana. These well-designed spaces offer a comfortable, efficient living environment, ideal for young professionals or singles looking for a modern urban retreat.",
      image: orianaAsset("floorplan-studio-a.jpg"),
      imageLabel: "The Oriana South Tower Studio - STUDIO A (30 SQM)",
      rows: [
        { type: "STUDIO (30.00 sqm)", status: "Available", price: "5.1M - 5.9M", dp: "16.2k - 19.0k /mo" },
        { type: "STUDIO (30.50 sqm)", status: "Available", price: "4.8M - 5.8M", dp: "15.1k - 18.6k /mo" }
      ],
      labels: ["The Oriana South Tower Studio", "STUDIO A (30 SQM)"]
    },
    {
      title: "1-Bedroom Units: Spacious Living",
      copy:
        "Discover the spacious elegance of the 1-bedroom units at The Oriana, designed for those who appreciate a blend of luxury and functionality. These units offer ample space, modern amenities, and thoughtful layouts, perfect for individuals or couples seeking a sophisticated urban lifestyle.",
      image: orianaAsset("floorplan-1br-a.jpg"),
      imageLabel: "The Oriana 1BR A - 1BR A (29 SQM)",
      rows: [
        { type: "1BR (29.00 sqm)", status: "Few left", price: "4.9M - 5.0M", dp: "15.5k - 15.9k /mo" },
        { type: "1BR (32.50 sqm)", status: "Few left", price: "5.9M", dp: "18.9k /mo" },
        { type: "1BR (33.50 sqm)", status: "Available", price: "5.8M - 6.2M", dp: "18.6k - 19.9k /mo" },
        { type: "1BR (35.00 sqm)", status: "Few left", price: "5.9M - 6.3M", dp: "18.8k - 20.1k /mo" },
        { type: "1BR (35.50 sqm)", status: "Available", price: "5.8M - 7.0M", dp: "18.7k - 22.5k /mo" }
      ],
      labels: ["The Oriana 1BR A - 1BR A (29 SQM)", "The Oriana 1BR D - 1BR D (32.5 SQM)", "The Oriana 1BR B - 1BR B (33.5 SQM)", "The Oriana 1BR E - 1BR E (35 SQM)", "The Oriana 1BR C - 1BR C (35.5 SQM)", "The Oriana 1BR F - 1BR F (35.5 SQM)"]
    },
    {
      title: "2-Bedroom Units: Ideal Family Living",
      copy:
        "Explore the comfort and style of The Oriana's 2-bedroom units, designed for families or buyers seeking extra space. These units blend functionality with modern elegance, offering an ideal environment for both relaxation and entertaining.",
      image: orianaAsset("floorplan-2br-a.jpg"),
      imageLabel: "The Oriana 2BR A - 2BR A (54.5 SQM)",
      rows: [
        { type: "2BR (54.50 sqm)", status: "Available", price: "7.2M - 9.1M", dp: "23.3k - 29.4k /mo" },
        { type: "2BR (57.00 sqm)", status: "Limited", price: "7.5M - 8.5M", dp: "24.3k - 27.5k /mo" },
        { type: "2BR (58.50 sqm)", status: "Available", price: "8.0M - 9.0M", dp: "25.9k - 29.1k /mo" },
        { type: "2BR (60.00 sqm)", status: "Available", price: "7.7M - 8.9M", dp: "24.7k - 28.9k /mo" },
        { type: "2BR (60.50 sqm)", status: "Available", price: "8.4M - 9.2M", dp: "27.3k - 29.8k /mo" },
        { type: "2BR (61.50 sqm)", status: "Available", price: "7.8M - 9.5M", dp: "25.1k - 30.9k /mo" },
        { type: "2BR (70.00 sqm)", status: "Available", price: "8.6M - 9.9M", dp: "27.7k - 32.1k /mo" },
        { type: "2BR (79.00 sqm)", status: "Few left", price: "9.4M - 9.5M", dp: "30.5k - 31.0k /mo" },
        { type: "2BR (81.50 sqm)", status: "Few left", price: "8.9M - 9.3M", dp: "29.0k - 30.2k /mo" }
      ],
      labels: ["The Oriana 2BR M - 2BR M (50.5 SQM)", "The Oriana 2BR A - 2BR A (54.5 SQM)", "The Oriana 2BR F - 2BR F (54.5 SQM)", "The Oriana 2BR G - 2BR G (56.5 SQM)", "The Oriana 2BR B - 2BR B (57 SQM)", "The Oriana 2BR K1 - 2BR K (58.5 SQM)", "The Oriana 2BR L1 - 2BR L (58.5 SQM)", "The Oriana 2BR C - 2BR C (60 SQM)", "The Oriana 2BR D1 - 2BR D (61.5 SQM)", "The Oriana 2BR E - 2BR E (61.5 SQM)", "The Oriana 2BR D - 2BR D (61.5 SQM)", "The Oriana 2BR R - 2BR R (61.5 SQM)", "The Oriana 2BR J - 2BR J (62.5 SQM)", "The Oriana 2BR N - 2BR N (65 SQM)", "The Oriana 2BR I - 2BR I (65.5 SQM)", "The Oriana 2BR H - 2BR H (70 SQM)", "The Oriana 2BR O - 2BR O (79 SQM)", "The Oriana 2BR P - 2BR P (81.5 SQM)"]
    },
    {
      title: "3-Bedroom Tandem Units: Expansive Living",
      copy:
        "Discover the expansive 3-bedroom Tandem Units at The Oriana, created by combining two adjacent 2-bedroom units. These unique configurations provide exceptionally spacious living areas, ideal for larger families or buyers who desire more space. Requests for tandem units are subject to availability and specific deadlines per floor in each building.",
      image: orianaAsset("floorplan-3br-a.jpg"),
      imageLabel: "The Oriana 3BR Tandem A - 3BR A (123 SQM)",
      rows: [],
      labels: ["The Oriana 3BR Tandem B - 3BR B (113 SQM)", "The Oriana 3BR Tandem A - 3BR A (123 SQM)"]
    }
  ],
  floorPlansTitle: "Floor Plans: Tailored Spaces",
  floorPlansDescription:
    "The floor plans at The Oriana are designed to maximize space and comfort. The units range from studio to 3-bedroom configurations, catering to different family sizes and lifestyle preferences. Each floor plan emphasizes natural light and ventilation, ensuring a pleasant living experience.",
  floorPlans: [
    { title: "ATRIUM FLOOR", text: "Atrium-level planning reference for buyer review.", src: orianaAsset("floorplan-north-typical.jpg") },
    { title: "1ST LEVEL ABOVE ATRIUM", text: "North Tower 2F availability-plan reference from the Drive materials.", src: orianaAsset("floorplan-1st-level.jpg") },
    { title: "2ND LEVEL ABOVE ATRIUM", text: "North Tower 3F availability-plan reference from the Drive materials.", src: orianaAsset("floorplan-2nd-level.jpg") },
    { title: "3RD-5TH LEVELS ABOVE ATRIUM", text: "North Tower typical availability-plan reference from the Drive materials.", src: orianaAsset("floorplan-3rd-5th-levels.jpg") },
    { title: "North Building Floor Plans", text: "North Tower floor plan references are available in the official presentation set.", src: orianaAsset("floorplan-north-typical.jpg") },
    { title: "South Building Floor Plans", text: "South Tower preview reference from the Drive materials. Request the official layout sheet before buyer presentation.", src: orianaAsset("floorplan-south-tower.png") }
  ],
  paymentTerms: {
    title: "Payment Terms: Flexible Options at The Oriana",
    text:
      "The Oriana offers flexible payment terms designed to accommodate buyer needs. The reference material mentions a promotional down payment structure, special discounts, and options for in-house or bank financing. All payment terms, discounts, and monthly computations must be verified with Luisa/DMCI before presentation to a buyer.",
    warning: "Sample Computation Only / Subject to Confirmation",
    sampleComputation: [
      { label: "Sample Unit", value: "C- North 1120A" },
      { label: "Type", value: "STUDIO" },
      { label: "Size", value: "30.50 sqm" },
      { label: "List Price", value: "4,781,000.00" },
      { label: "RFO Date", value: "Apr-2026" },
      { label: "Select Your Downpayment", value: "12%" },
      { label: "Number of Months to Pay", value: "36 months" }
    ],
    contractBreakdown: [
      { label: "List Price", value: "4,781,000.00" },
      { label: "Special Discount", value: "1.0% / 47,810.00" },
      { label: "Net", value: "4,733,190.00" },
      { label: "Regular Discount", value: "0.0% / 0.00" },
      { label: "Additional Discount", value: "0.0% / 0.00" },
      { label: "Total Contract Price", value: "4,733,190.00" },
      { label: "Closing Fee", value: "10.5% / 496,984.95" },
      { label: "Total with Closing Fee", value: "5,230,174.95" }
    ],
    downPaymentBreakdown: [
      { label: "Downpayment", value: "12.0% / 567,982.80" },
      { label: "Less Reservation Fee", value: "30,000.00" },
      { label: "Net Downpayment", value: "537,982.80" },
      { label: "Monthly DP", value: "36 months / 14,943.97 per month" }
    ],
    balanceBreakdown: [
      { label: "Balance", value: "88.0% / 4,165,207.20" },
      { label: "Closing Fee", value: "496,984.95" },
      { label: "Total Balance + Closing Fee", value: "4,662,192.15" }
    ],
    monthlyAmortization: [
      { label: "10 years", value: "7.0% rate / 54,132.00 monthly" },
      { label: "15 years", value: "7.0% rate / 41,905.10 monthly" },
      { label: "20 years", value: "7.0% rate / 36,145.93 monthly" }
    ],
    promoCards: [
      { title: "Promo Details", items: ["Promo: 12% DP Promo", "Down Payment Promo: 12% DP", "Special Discount: 1.0% discount on DP Promo Term", "Flexible Down Payment: option to spread down payment over 36 fixed months", "Promo Ends: July 31, 2026", "Scope: All Units"] }
    ],
    sampleAvailableUnits: {
      columns: [
        { key: "unit", label: "Unit" },
        { key: "type", label: "Type" },
        { key: "size", label: "Size" },
        { key: "price", label: "Price" },
        { key: "turnover", label: "Turnover" },
        { key: "homeReady", label: "HomeReady\u2122" }
      ],
      rows: [
        { unit: "Sample Unit", type: "2BR", size: "54.50", price: "7,507,000", turnover: "Apr-2026", homeReady: "Not applicable" },
        { unit: "Sample Unit", type: "STUDIO", size: "30.50", price: "4,794,000", turnover: "Apr-2026", homeReady: "Not applicable" },
        { unit: "Sample Unit", type: "2BR", size: "54.50", price: "7,353,000", turnover: "Apr-2026", homeReady: "Not applicable" },
        { unit: "Sample Unit", type: "2BR", size: "60.00", price: "7,710,000", turnover: "Apr-2026", homeReady: "Not applicable" },
        { unit: "Sample Unit", type: "2BR", size: "54.50", price: "7,244,000", turnover: "Apr-2026", homeReady: "Not applicable" }
      ]
    },
    importantNotes: [
      pricingDisclaimer,
      "Get current availability and computations from Luisa before presenting figures to a buyer."
    ],
    promoReference: pricingDisclaimer
  },
  unitHoldingPortal: {
    title: "Reserve Your Space: Unit Holding Portal for The Oriana",
    text:
      "Secure your future home at The Oriana with ease using the unit holding portal. This online platform allows buyers to temporarily reserve a preferred unit, giving them time to make an informed decision. For residents in the Philippines, units can be held for up to 24 hours, while international clients may hold units for up to 72 hours. This helps buyers take the next step toward owning a home at The Oriana in Quezon City.",
    steps: ["Choose a preferred unit with Luisa.", "Confirm current availability and computation.", "Hold the unit through the appropriate inquiry or reservation flow.", "Complete reservation requirements within the allowed holding period."],
    notes: ["Philippines-based clients: units may be held for up to 24 hours.", "International clients: units may be held for up to 72 hours.", "Holding rules and deadlines are subject to confirmation."],
    ctaLabel: "REGISTER NOW",
    ctaTo: "/contact?project=The%20Oriana&inquiryType=Reservation"
  },
  reservationTitle: "Reservation and Requirements for The Oriana",
  reservationNote:
    "To reserve a unit at The Oriana by DMCI, buyers should prepare the necessary documents and complete the required reservation steps. Confirm all requirements, payment channels, and reservation instructions with Luisa/DMCI before paying.",
  reservationRequirements: [
    { title: "Reservation Steps", items: ["Online Client Registration", "Valid IDs", "Philippine TIN Number", "Online Reservation Agreement Form", "Reservation Fee"] },
    { title: "Reservation Fee", items: ["PHP 30,000 for the unit", "PHP 10,000 for parking"] },
    { title: "Payment Options Mentioned", items: ["Online payment gateway using debit/credit card", "BPI Online Banking", "Cash", "GCash", "Dated Check payable to DMCI-PDI"] },
    { title: "After Reservation Requirements", items: ["Proof of Billing Address", "Preferred Mode of Payments for the Down Payment", "PDCs or Post-Dated Checks", "Auto Debit Arrangement using DMCI-PDI tie-in banks"] },
    { title: "Tie-in Banks", items: ["Bank of Commerce", "BDO", "BPI", "Metrobank", "EastWest Bank", "PNB", "Security Bank", "Sterling Bank", "UnionBank", "Robinsons Bank", "Chinabank"] },
    { title: "For International Clients", items: ["Bills Payment options through tie-in banks with the DMCI-PDI biller", "Remittance through Robinsons Bank Virtual Account"] }
  ],
  newsMedia: [
    {
      title: "Official DMCI Homes project page",
      label: "Review official DMCI Homes project reference",
      url: "https://www.dmcihomes.com/the-oriana"
    },
    {
      title: "Supplied The Oriana reference page",
      label: "Reference page used for full project content, media labels, AVP, virtual tour, and pricing tables",
      url: "https://www.dmci-online.com/the-oriana-dmci-quezon-city/"
    }
  ]
};
