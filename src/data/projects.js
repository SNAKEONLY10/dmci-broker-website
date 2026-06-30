import { theOrianaDetails } from "./theOrianaDetails.js";

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
    unitTypes: ["Studio", "1BR", "2BR", "3BR Tandem"],
    assetStatus: "complete",
    contentLevel: "rich",
    contentStatus: "full customer-ready detail added",
    targetRfo: "North Tower: April 2026; South Tower: November 2027",
    tagline: "The Oriana by DMCI: Urban Elegance in the Heart of Quezon City",
    priceRangeLabel: "Studio from 4.8M, 1BR from 4.9M, 2BR from 7.2M",
    priceSourceNote: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.",
    overview: "Experience premier urban living at The Oriana by DMCI Homes, located along Aurora Boulevard in Quezon City. This high-rise residential condominium development offers two towers with modern tropical architecture, transit-oriented access, and thoughtfully designed units that maximize space, natural light, and ventilation.",
    aboutLocation: "The Oriana by DMCI is ideally situated on Aurora Boulevard, Quezon City, surrounded by vibrant neighborhoods such as Katipunan Avenue, Anonas, and Araneta City. This prime location offers easy access to key areas in Metro Manila via the LRT-2 Anonas/Katipunan corridor and the upcoming Metro Manila Subway.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Quezon City",
      "Modern Tropical architectural theme",
      "Studio, 1BR, and 2BR unit options subject to latest availability"
    ],
    amenities: ["Basketball Court/Playcourt", "Sky Promenade", "Amenity Core", "Sky Patio", "Picnic Area", "Coworking Space", "Kiddie Pool", "Lap Pool", "Leisure Pool", "Sky Bridge", "24-hour Security", "Alfresco"],
    buildingFeatures: ["24-hour Security", "Sky Promenade", "Sky Patio", "Sky Bridge", "Amenity Core", "Building and parking details for confirmation"],
    nearbyLandmarks: ["LRT-2 Anonas Station (250 m)", "Gateway Mall (1.7 km)", "Ateneo de Manila University (2.0 km)", "World Citi Medical Center (500 m)", "Araneta Center (2.6 km)", "Eastwood City (3.9 km)"],
    sourceUrl: "https://www.dmcihomes.com/the-oriana",
    locationMapImage: "/assets/projects/the-oriana/location-map.jpg",
    galleryLabels: ["The Oriana DMCI Leisure Pool", "The Oriana DMCI Game Area", "The Oriana DMCI Snack Bar", "The Oriana Site Development Plan", "The Oriana Site Progress"],
    projectFacts: [
      { label: "Location", value: "Aurora Boulevard, Quezon City" },
      { label: "Land Area", value: "9,314 sqm" },
      { label: "Development Type", value: "High-Rise Residential Condominium" },
      { label: "Architectural Theme", value: "Modern Tropical" },
      { label: "Buildings", value: "2 Towers, North and South" },
      { label: "Levels", value: "North Tower: 54 Residential Levels" },
      { label: "Parking", value: "7 Basement Parking Levels" },
      { label: "Turnover", value: "North Tower: April 2026; South Tower: November 2027" }
    ],
    summaryPricing: [
      { type: "Studio", floorArea: "30.00 - 30.50 sqm", range: "4.8M - 5.9M", monthlyDp: "12% DP: 15.1k - 19.0k /mo", status: "Available", note: "Reference only" },
      { type: "1BR", floorArea: "29.00 - 35.50 sqm", range: "4.9M - 7.0M", monthlyDp: "12% DP: 15.5k - 22.5k /mo", status: "Available", note: "Reference only" },
      { type: "2BR", floorArea: "54.50 - 81.50 sqm", range: "7.2M - 9.9M", monthlyDp: "12% DP: 23.3k - 32.1k /mo", status: "Available", note: "Reference only" }
    ],
    summaryPricingNote: "Do not present these ranges as guaranteed current prices. Ask Luisa for latest inventory and computation before buyer presentation.",
    introParagraphs: [
      "The Oriana is a DMCI Homes high-rise residential condominium along Aurora Boulevard in Quezon City, planned as a two-tower modern tropical development.",
      "Its location places residents near Anonas, Katipunan, Araneta City, schools, hospitals, malls, and rail access, making it practical for end-use and investment shortlisting."
    ],
    locationDetails: {
      title: "Prime Location: The Oriana in Quezon City",
      text: "The Oriana sits in a transit-oriented community near LRT-2 Anonas Station, Katipunan Avenue, Araneta City, and the upcoming Metro Manila Subway corridor.",
      exactAddress: "Aurora Boulevard, Quezon City",
      note: "Travel times, distances, and map pins are approximate and subject to verification."
    },
    nearbyDestinations: [
      { group: "Business Districts", items: ["Araneta Center (2.6 km)", "Eastwood City (3.9 km)", "UP-Ayala Technohub (5.7 km)", "Ortigas Center (7.2 km)"] },
      { group: "Malls & Supermarkets", items: ["Gateway Mall (1.7 km)", "Riverbank Mall (2.3 km)", "Eastwood Mall (5.6 km)", "Hi-top Supermart (200 m)", "Super Metro Gaisano (300 m)", "Aurora Market (350 m)"] },
      { group: "Schools", items: ["Ateneo de Manila University (2.0 km)", "Miriam College (2.4 km)", "National College of Business and Arts (50 m)", "Philippine School of Business Administration (550 m)"] },
      { group: "Hospitals", items: ["World Citi Medical Center (500 m)", "Quirino Memorial Medical Center (1.2 km)", "St. Luke's Medical Center (5.6 km)"] },
      { group: "Transportation", items: ["LRT-2 Anonas Station (250 m)", "MRT Cubao Station (4.4 km)", "Araneta Center Bus Terminal (2.5 km)"] }
    ],
    siteDevelopment: {
      title: "Site Development Plan",
      paragraphs: ["The Oriana features a comprehensive 9,314 sqm site development plan with two high-rise towers, lifestyle amenities, and open spaces designed for daily comfort and leisure."],
      keyStats: [
        { label: "Land Area", value: "9,314 sqm" },
        { label: "Towers", value: "North and South" },
        { label: "Parking", value: "7 basement levels" }
      ]
    },
    viewHighlights: [
      { title: "Audio Visual Presentation", text: "Official DMCI AVP reference is available and should be loaded only after buyer action." },
      { title: "360 Virtual Tour", text: "Virtual tour link should be requested from Luisa if no current public approved link is available." }
    ],
    videoTourTitle: "Audio Visual Presentation and 360 Virtual Tour",
    videoTourCopy: "Official AVP/virtual tour materials are available by request. Large video embeds are not auto-loaded so the page stays fast on mobile.",
    videoTourUrl: "https://www.youtube.com/watch?v=iRCL-SM7Ktg",
    videoTourNote: "Virtual tour available upon request.",
    amenityGroups: [
      { group: "Outdoor Amenities", items: ["Lap Pool", "Kiddie Pool", "Leisure Pool", "Pool Deck", "Lawn & Picnic Area", "Covered Basketball Court", "Children's Play Area", "Sky Promenade", "Sky Patio"] },
      { group: "Indoor Amenities", items: ["Fitness Gym", "Function Hall", "Entertainment Room", "Game Area", "Snack Bar", "Open Lounge Lobby", "Sky Lounge & Promenade"] },
      { group: "Facilities", items: ["24-hour Security", "Perimeter Fence", "Provision for CCTV Cameras", "Water Station", "WiFi Access", "Convenience Store", "Card-Operated Laundry Station", "High-speed Elevators", "100% Emergency Back-up Power", "Property Management Office"] }
    ],
    amenityNote: "Amenity availability, final design, and operating rules are subject to DMCI Homes confirmation.",
    unitIntro: "Explore studio, 1-bedroom, 2-bedroom, and 3-bedroom tandem options at The Oriana. Availability must be checked with Luisa/DMCI before presenting options to a buyer.",
    unitSections: [
      { title: "Studio Units", description: "Efficient layouts for singles or young professionals.", layouts: ["30.00 sqm", "30.50 sqm"], rows: [
        { layout: "STUDIO", floorArea: "30.00 sqm", priceRange: "5.1M - 5.9M", status: "Available", monthlyDp: "16.2k - 19.0k /mo" },
        { layout: "STUDIO", floorArea: "30.50 sqm", priceRange: "4.8M - 5.8M", status: "Available", monthlyDp: "15.1k - 18.6k /mo" }
      ] },
      { title: "1-Bedroom Units", description: "Practical layouts for individuals or couples.", layouts: ["29.00 sqm", "32.50 sqm", "33.50 sqm", "35.00 sqm", "35.50 sqm"], rows: [
        { layout: "1BR", floorArea: "29.00 sqm", priceRange: "4.9M - 5.0M", status: "Few left", monthlyDp: "15.5k - 15.9k /mo" },
        { layout: "1BR", floorArea: "32.50 sqm", priceRange: "5.9M", status: "Few left", monthlyDp: "18.9k /mo" },
        { layout: "1BR", floorArea: "33.50 sqm", priceRange: "5.8M - 6.2M", status: "Available", monthlyDp: "18.6k - 19.9k /mo" },
        { layout: "1BR", floorArea: "35.00 sqm", priceRange: "5.9M - 6.3M", status: "Few left", monthlyDp: "18.8k - 20.1k /mo" },
        { layout: "1BR", floorArea: "35.50 sqm", priceRange: "5.8M - 7.0M", status: "Available", monthlyDp: "18.7k - 22.5k /mo" }
      ] },
      { title: "2-Bedroom Units", description: "Larger options for families or buyers needing extra space.", layouts: ["54.50 sqm", "57.00 sqm", "58.50 sqm", "60.00 sqm", "60.50 sqm", "61.50 sqm", "70.00 sqm", "79.00 sqm", "81.50 sqm"], rows: [
        { layout: "2BR", floorArea: "54.50 sqm", priceRange: "7.2M - 9.1M", status: "Available", monthlyDp: "23.3k - 29.4k /mo" },
        { layout: "2BR", floorArea: "57.00 sqm", priceRange: "7.5M - 8.5M", status: "Limited", monthlyDp: "24.3k - 27.5k /mo" },
        { layout: "2BR", floorArea: "58.50 sqm", priceRange: "8.0M - 9.0M", status: "Available", monthlyDp: "25.9k - 29.1k /mo" },
        { layout: "2BR", floorArea: "60.00 sqm", priceRange: "7.7M - 8.9M", status: "Available", monthlyDp: "24.7k - 28.9k /mo" },
        { layout: "2BR", floorArea: "61.50 sqm", priceRange: "7.8M - 9.5M", status: "Available", monthlyDp: "25.1k - 30.9k /mo" },
        { layout: "2BR", floorArea: "70.00 sqm", priceRange: "8.6M - 9.9M", status: "Available", monthlyDp: "27.7k - 32.1k /mo" },
        { layout: "2BR", floorArea: "79.00 sqm", priceRange: "9.4M - 9.5M", status: "Few left", monthlyDp: "30.5k - 31.0k /mo" }
      ] },
      { title: "3-Bedroom Tandem Units", description: "Tandem configurations combine adjacent 2BR units, subject to availability and deadlines per floor/building.", layouts: ["3BR B (113 SQM)", "3BR A (123 SQM)"], rows: [] }
    ],
    floorPlansTitle: "Floor Plans and Unit Layouts",
    floorPlansDescription: "Request official layout sheets for specific unit cuts before buyer presentation.",
    floorPlans: [
      { title: "Studio A (30 SQM)", text: "The Oriana South Tower Studio" },
      { title: "1BR Layouts", text: "1BR A, B, C, D, E, and F layouts from 29 sqm to 35.5 sqm." },
      { title: "2BR Layouts", text: "2BR layouts from 50.5 sqm to 81.5 sqm including A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, and R labels." },
      { title: "3BR Tandem Layouts", text: "3BR Tandem A and B layouts subject to availability." },
      { title: "Building Floor Plans", text: "Atrium floor, levels above atrium, North Building, and South Building floor plans." }
    ],
    paymentTerms: {
      title: "Payment Terms and Sample Computation",
      text: "The reference material mentions promotional down payment structures, special discounts, and options for in-house or bank financing. All payment terms, discounts, and monthly computations must be verified with Luisa/DMCI.",
      rfoSchedule: [{ label: "North Tower", value: "April 2026" }, { label: "South Tower", value: "November 2027" }],
      sampleComputation: [{ label: "Sample Unit", value: "C- North 1120A" }, { label: "Type", value: "STUDIO" }, { label: "Size", value: "30.50 sqm" }, { label: "List Price", value: "4,781,000.00" }, { label: "RFO Date", value: "Apr-2026" }, { label: "Downpayment", value: "12% over 36 months" }],
      monthlyAmortization: [{ label: "10 years at 7.0%", value: "54,132.00 monthly" }, { label: "15 years at 7.0%", value: "41,905.10 monthly" }, { label: "20 years at 7.0%", value: "36,145.93 monthly" }],
      contractBreakdown: [{ label: "Special Discount", value: "1.0% / 47,810.00" }, { label: "Total Contract Price", value: "4,733,190.00" }, { label: "Closing Fee", value: "10.5% / 496,984.95" }, { label: "Total with Closing Fee", value: "5,230,174.95" }],
      downPaymentBreakdown: [{ label: "Downpayment", value: "12.0% / 567,982.80" }, { label: "Less Reservation Fee", value: "30,000.00" }, { label: "Monthly DP", value: "36 months / 14,943.97 per month" }],
      balanceBreakdown: [{ label: "Balance", value: "88.0% / 4,165,207.20" }, { label: "Total Balance + Closing Fee", value: "4,662,192.15" }],
      importantNotes: ["Sample Computation Only / Subject to Confirmation", "Prices, promos, availability, terms, turnover dates, and computations may change without prior notice.", "Promo Ends: July 31, 2026; Scope: All Units"],
      promoCards: [{ title: "12% DP Promo", items: ["Special Discount: 1.0% discount on DP Promo Term", "Down payment may be spread over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }],
      sampleAvailableComputations: [
        { type: "2BR", size: "54.50 sqm", price: "7,507,000", rfo: "Apr-2026", note: "Not applicable" },
        { type: "STUDIO", size: "30.50 sqm", price: "4,794,000", rfo: "Apr-2026", note: "Not applicable" },
        { type: "2BR", size: "60.00 sqm", price: "7,710,000", rfo: "Apr-2026", note: "Not applicable" }
      ],
      promoReference: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes."
    },
    unitHoldingPortal: {
      title: "Unit Holding and Client Registration",
      text: "Philippines buyers can hold units up to 24 hours. International clients can hold units up to 72 hours, subject to final confirmation and availability.",
      steps: ["Online Client Registration", "Submit valid IDs and Philippine TIN", "Complete Online Reservation Agreement Form", "Pay reservation fee only through approved payment channels"],
      notes: ["Residential unit reservation fee: PHP 30,000", "Parking reservation fee: PHP 10,000", "Accepted payment options and tie-in banks must be confirmed with Luisa/DMCI."]
    },
    reservationRequirements: [
      "Online Client Registration",
      "Valid IDs",
      "Philippine TIN Number",
      "Online Reservation Agreement Form",
      "Reservation Fee: PHP 30,000 for unit",
      "Parking Reservation Fee: PHP 10,000",
      "Proof of Billing Address after reservation",
      "Preferred Mode of Payment for Down Payment",
      "PDCs / Post-Dated Checks or Auto Debit Arrangement",
      "International remittance/bills payment options subject to confirmation"
    ],
    reservationNote: "Do not send payment without official confirmation and verified payment instructions from Luisa/DMCI.",
    ...theOrianaDetails
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
    architecturalTheme: "Modern Contemporary",
    landArea: "For confirmation",
    address: "West Avenue corner Quezon Avenue, Quezon City",
    unitTypes: ["Studio", "2BR", "3BR"],
    assetStatus: "complete",
    contentLevel: "rich",
    contentStatus: "full customer-ready detail added",
    targetRfo: "November 2029",
    tagline: "Introduction to One Delta Terraces by DMCI",
    priceRangeLabel: "Studio from 7.0M, 2BR from 11.2M, 3BR from 17.4M",
    priceSourceNote: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.",
    overview: "Discover One Delta Terraces by DMCI Homes, a new high-rise residential condominium project in Quezon City. With modern tropical architecture, this development offers comfortable and luxurious living at the corner of West Avenue and Quezon Avenue.",
    aboutLocation: "One Delta Terraces is located at the corner of West Avenue and Quezon Avenue in Quezon City. This prime location offers easy access to business districts, shopping centers, schools, hospitals, and transit routes.",
    highlights: [
      "New DMCI Homes high-rise condominium in Quezon City",
      "Asian Contemporary architectural theme",
      "Studio, 2BR, and 3BR options subject to latest availability"
    ],
    amenities: ["24-hour Security", "Children's Playground", "Convenience Store", "Entertainment Room", "Fitness Gym", "Game Area", "Gazebo/ Cabana", "Jogging/ Biking Path", "Kiddie Pool", "Landscaped Gardens", "Skydeck Pool", "Laundry Station"],
    buildingFeatures: ["57 storeys", "6 basement parking levels", "4 podium levels", "Amenity floor on 6th floor", "Roof deck amenities", "51 residential floors"],
    nearbyLandmarks: ["Fisher Mall (850 m)", "Providence Hospital (650 m)", "MRT Quezon Avenue Station (1.5 km)", "Solaire North (2.2 km)", "Trinoma (3.0 km)", "SM North EDSA (3.3 km)"],
    sourceUrl: "https://www.dmcihomes.com/one-delta-terraces",
    locationMapImage: "/assets/projects/one-delta-terraces/location-map.jpg",
    galleryLabels: ["One Delta Terraces DMCI Sky Pool", "One Delta Terraces DMCI Roof Deck", "One Delta Terraces DMCI Drop Off", "One Delta Terraces Site Development Plan", "One Delta Terraces Site Progress"],
    projectFacts: [
      { label: "Location", value: "West Avenue corner Quezon Avenue, Quezon City" },
      { label: "Architectural Theme", value: "Modern Contemporary" },
      { label: "Development Type", value: "High-Rise Residential Condominium" },
      { label: "Number of Storeys", value: "57 Storeys" },
      { label: "Parking", value: "6 Basement Parking Levels" },
      { label: "Amenities", value: "GF amenities, 4 podium levels, 6th-floor amenity deck, roof deck amenities" },
      { label: "Residential Floors", value: "51 Residential Floors" },
      { label: "Amenity Ratio", value: "72%" },
      { label: "Target RFO Date", value: "November 2029" }
    ],
    summaryPricing: [
      { type: "Studio", floorArea: "28.50 - 37.00 sqm", range: "7.0M - 10.2M", monthlyDp: "12% DP: 20.2k - 29.9k /mo", status: "Available", note: "Reference only" },
      { type: "2BR", floorArea: "50.00 - 86.00 sqm", range: "11.2M - 19.9M", monthlyDp: "12% DP: 32.9k - 58.9k /mo", status: "Available", note: "Reference only" },
      { type: "3BR", floorArea: "85.50 - 95.50 sqm", range: "17.4M - 21.7M", monthlyDp: "12% DP: 51.4k - 64.5k /mo", status: "Available", note: "Reference only" }
    ],
    summaryPricingNote: "Displayed ranges are not guaranteed current prices. Ask Luisa for latest availability, promos, and computation.",
    introParagraphs: [
      "One Delta Terraces is a new high-rise residential condominium by DMCI Homes in Quezon City, designed with modern contemporary/tropical living in mind.",
      "The project offers studio, 2-bedroom, and 3-bedroom units with extensive amenities across the ground floor, 6th-floor amenity deck, and roof deck."
    ],
    locationDetails: {
      title: "Location",
      text: "One Delta Terraces is located at the corner of West Avenue and Quezon Avenue in Quezon City, close to retail, schools, hospitals, and transit access.",
      exactAddress: "West Avenue corner Quezon Avenue, Quezon City",
      note: "Travel times, distances, and map pins are approximate and subject to verification."
    },
    nearbyDestinations: [
      { group: "Schools", items: ["St. Mary's College - 500 m", "St. Joseph's College - 2.3 km", "Philippine Science High School - 2.8 km", "UP Diliman - 5.2 km", "University of Sto. Tomas - 5.3 km", "Far Eastern University - 5.9 km", "Miriam College - 7.9 km", "Ateneo de Manila - 8.3 km"] },
      { group: "Retail & Entertainment", items: ["Fisher Mall - 850 m", "Solaire North - 2.2 km", "Vertis North - 2.5 km", "Eton Centris - 2.9 km", "Trinoma - 3.0 km", "SM North EDSA - 3.3 km"] },
      { group: "Healthcare", items: ["Providence Hospital - 650 m", "Capitol Medical Center - 800 m", "St. Luke's Medical Center - QC - 2.2 km", "Philippine Children's Hospital - 2.6 km", "East Avenue Medical Center - 2.8 km", "Veteran's Memorial Medical Center - 3.0 km", "National Kidney & Transplant Institute - 3.0 km", "Philippine Heart Center - 3.0 km", "V. Luna Medical Center - 3.5 km"] },
      { group: "Transportation", items: ["MRT Quezon Avenue Station - 1.5 km", "Skyway Quezon Avenue - 1.9 km", "MRT Kamuning Station - 2.1 km", "MRT North Avenue Station - 2.4 km", "LRT 1 FPJ Station - 3.1 km"] }
    ],
    siteDevelopment: {
      title: "Site Development Plan",
      paragraphs: ["One Delta Terraces is a meticulously planned high-rise residential development at West Avenue corner Quezon Avenue, designed to provide a blend of comfort, convenience, and elevated city living."],
      keyStats: [
        { label: "Storeys", value: "57" },
        { label: "Residential Floors", value: "51" },
        { label: "Amenity Ratio", value: "72%" }
      ]
    },
    viewHighlights: [
      { title: "Audio Visual Presentation", text: "No public official/static AVP URL was found in the available materials. Request the approved AVP link from Luisa." },
      { title: "Virtual 360-Degree Tour", text: "Experience One Delta Terraces through an approved tour link when available; request the current link from Luisa." }
    ],
    videoTourTitle: "AVP and 360 Virtual Tour Available Upon Request",
    videoTourCopy: "Large AVP/360 media is not auto-loaded. Ask Luisa for the approved current video or tour link.",
    videoTourNote: "AVP and virtual tour available upon request.",
    amenityGroups: [
      { group: "Ground Floor", items: ["Reception Lobby", "Open Lounge", "Utility Area", "Commercial Area"] },
      { group: "Amenity Floor, 6th Floor", items: ["Game Area", "Play Area", "Outdoor Fitness Area", "Fitness Gym", "Entertainment Room", "Kiddie Pool", "Leisure Pool"] },
      { group: "Roof Deck", items: ["Sky Promenade", "Open Sky Lounge", "Snack Bar", "Lap Pool with Lounge Pool"] }
    ],
    amenityNote: "Amenities are distributed across several building levels and must be verified against final official materials.",
    unitIntro: "One Delta Terraces offers studio, 2-bedroom, and 3-bedroom units for different lifestyles and household sizes.",
    unitSections: [
      { title: "Studio Units", description: "Compact yet functional living spaces for singles or young professionals.", layouts: ["28.50 sqm", "29.00 sqm", "29.50 sqm", "30.00 sqm", "31.50 sqm", "32.00 sqm", "36.00 sqm", "37.00 sqm"], rows: [
        { layout: "STUDIO", floorArea: "28.50 sqm", priceRange: "7.2M - 7.5M", status: "Few left", monthlyDp: "20.8k - 21.8k /mo" },
        { layout: "STUDIO", floorArea: "29.00 sqm", priceRange: "7.0M - 7.8M", status: "Limited", monthlyDp: "20.2k - 22.6k /mo" },
        { layout: "STUDIO", floorArea: "29.50 sqm", priceRange: "7.0M - 8.0M", status: "Available", monthlyDp: "20.3k - 23.3k /mo" },
        { layout: "STUDIO", floorArea: "30.00 sqm", priceRange: "7.1M - 7.8M", status: "Available", monthlyDp: "20.7k - 22.7k /mo" },
        { layout: "STUDIO", floorArea: "32.00 sqm", priceRange: "8.3M - 8.6M", status: "Few left", monthlyDp: "24.1k - 25.2k /mo" },
        { layout: "STUDIO", floorArea: "37.00 sqm", priceRange: "8.8M - 10.2M", status: "Limited", monthlyDp: "25.5k - 29.9k /mo" }
      ] },
      { title: "2-Bedroom Units", description: "For small families or buyers needing extra work-from-home space.", layouts: ["50.00 sqm", "52.50 sqm", "53.00 sqm", "56.00 sqm", "56.50 sqm", "57.50 sqm", "59.00 sqm", "59.50 sqm", "60.00 sqm", "61.00 sqm", "61.50 sqm", "62.00 sqm", "63.50 sqm", "64.50 sqm", "65.00 sqm", "71.00 sqm", "86.00 sqm"], rows: [
        { layout: "2BR", floorArea: "50.00 sqm", priceRange: "11.7M - 12.4M", status: "Few left", monthlyDp: "34.5k - 36.3k /mo" },
        { layout: "2BR", floorArea: "52.50 sqm", priceRange: "11.2M - 11.3M", status: "Few left", monthlyDp: "32.9k - 33.0k /mo" },
        { layout: "2BR", floorArea: "53.00 sqm", priceRange: "11.5M - 12.8M", status: "Limited", monthlyDp: "33.8k - 37.8k /mo" },
        { layout: "2BR", floorArea: "56.00 sqm", priceRange: "12.1M - 13.0M", status: "Available", monthlyDp: "35.5k - 38.1k /mo" },
        { layout: "2BR", floorArea: "57.50 sqm", priceRange: "12.3M - 14.8M", status: "Available", monthlyDp: "36.3k - 43.7k /mo" },
        { layout: "2BR", floorArea: "61.50 sqm", priceRange: "12.8M - 14.9M", status: "Available", monthlyDp: "37.7k - 44.0k /mo" },
        { layout: "2BR", floorArea: "65.00 sqm", priceRange: "13.5M - 16.5M", status: "Available", monthlyDp: "39.7k - 48.7k /mo" },
        { layout: "2BR", floorArea: "86.00 sqm", priceRange: "17.5M - 19.9M", status: "Available", monthlyDp: "51.7k - 58.9k /mo" }
      ] },
      { title: "3-Bedroom Units", description: "Expansive options for larger families.", layouts: ["85.50 sqm", "95.50 sqm"], rows: [
        { layout: "3BR", floorArea: "85.50 sqm", priceRange: "17.4M - 20.1M", status: "Available", monthlyDp: "51.4k - 59.6k /mo" },
        { layout: "3BR", floorArea: "95.50 sqm", priceRange: "19.4M - 21.7M", status: "Limited", monthlyDp: "57.3k - 64.5k /mo" }
      ] }
    ],
    floorPlansTitle: "Floor Plans",
    floorPlansDescription: "Request official layout sheets and floor plans before buyer presentation.",
    floorPlans: [
      { title: "Studio Layout", text: "One Delta Terraces DMCI Studio" },
      { title: "2 Bedroom Layout", text: "One Delta Terraces DMCI 2 Bedroom" },
      { title: "3 Bedroom Layout", text: "One Delta Terraces DMCI 3 Bedroom" },
      { title: "Typical / Atrium / Delta Building Plans", text: "Floor Plan, Typical Floor Plan, Atrium Floor Plan, and Delta Building Floor Plans" }
    ],
    paymentTerms: {
      title: "Payment Terms and Sample Computation",
      text: "The standard payment term requires a 30% minimum down payment until RFO. Reference materials also mention launch promos such as 12% and 15% down payment options, subject to final confirmation.",
      rfoSchedule: [{ label: "Target RFO", value: "November 2029" }],
      sampleComputation: [{ label: "Sample Unit", value: "C- Delta 1021A" }, { label: "Type", value: "STUDIO" }, { label: "Size", value: "29.00 sqm" }, { label: "List Price", value: "6,971,000.00" }, { label: "RFO Date", value: "Nov-2029" }, { label: "Downpayment", value: "12% over 40 months" }],
      monthlyAmortization: [{ label: "10 years at 7.0%", value: "79,725.13 monthly" }, { label: "15 years at 7.0%", value: "61,717.46 monthly" }, { label: "20 years at 7.0%", value: "53,235.40 monthly" }],
      contractBreakdown: [{ label: "Total Contract Price", value: "6,971,000.00" }, { label: "Closing Fee", value: "10.5% / 731,955.00" }, { label: "Total with Closing Fee", value: "7,702,955.00" }],
      downPaymentBreakdown: [{ label: "Downpayment", value: "12.0% / 836,520.00" }, { label: "Less Reservation Fee", value: "30,000.00" }, { label: "Monthly DP", value: "40 months / 20,163.00 per month" }],
      balanceBreakdown: [{ label: "Balance", value: "88.0% / 6,134,480.00" }, { label: "Total Balance + Closing Fee", value: "6,866,435.00" }],
      importantNotes: ["Sample Computation Only / Subject to Confirmation", "Prices, promos, availability, terms, turnover dates, and computations may change without prior notice.", "Promo Ends: July 31, 2026; Scope: All Units"],
      promoCards: [
        { title: "12% DP Promo", items: ["Promo ends July 31, 2026", "Scope: All Units"] },
        { title: "15% DP Promo", items: ["Special Discount: 2.0% discount on DP Promo Term", "Promo ends July 31, 2026", "Scope: All Units"] }
      ],
      sampleAvailableComputations: [
        { type: "3BR", size: "85.50 sqm", price: "18,035,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "2BR", size: "53.00 sqm", price: "11,684,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "STUDIO", size: "32.00 sqm", price: "8,612,000", rfo: "Nov-2029", note: "Not applicable" }
      ],
      promoReference: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes."
    },
    unitHoldingPortal: {
      title: "Unit Holding Portal and Client Registration",
      text: "One Delta Terraces offers a dedicated Unit Holding Portal during launch, allowing prospective buyers to temporarily secure preferred units online before final decision.",
      steps: ["Register online", "Submit valid IDs and Philippine TIN", "Complete reservation agreement form", "Pay reservation fee only through approved channels"],
      notes: ["If no direct registration link is available, use Luisa's inquiry/contact flow.", "Holding rules and launch procedures are subject to current DMCI confirmation."]
    },
    reservationRequirements: [
      "Online Client Registration",
      "Submit Valid IDs",
      "Philippine TIN Number",
      "Reservation Agreement Form",
      "Reservation Fee: PHP 30,000 for the residential unit",
      "Parking Reservation Fee: PHP 10,000, if applicable",
      "Proof of Billing after reservation",
      "Preferred Mode of Payment",
      "Post-dated checks / PDCs or auto-debit arrangement with partnered banks"
    ],
    reservationNote: "Confirm computation, availability, payment method, and official requirements with Luisa before making any reservation decision."
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
