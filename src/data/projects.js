import { theOrianaDetails } from "./theOrianaDetails.js";
import { theErinHeightsDetails } from "./theErinHeightsDetails.js";
import { oneDeltaTerracesDetails } from "./oneDeltaTerracesDetails.js";
import { cameronResidencesDetails } from "./cameronResidencesDetails.js";
import { valeronTowerDetails, allegraGardenPlaceDetails, prismaResidencesDetails } from "./pasigProjectDetails.js";
import { sageResidencesDetails, kaiGardenResidencesDetails } from "./mandaluyongProjectDetails.js";

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
    mapCoordinates: [14.628392, 121.068418],
    mapZoom: 16,
    mapPinNote: "Map pin is approximate and for reference only.",
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
    videoEmbed: {
      type: "youtube",
      id: "iRCL-SM7Ktg",
      externalUrl: "https://www.youtube.com/watch?v=iRCL-SM7Ktg",
      label: "Play Audio Visual Presentation"
    },
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
        { layout: "2BR", floorArea: "60.50 sqm", priceRange: "8.4M - 9.2M", status: "Available", monthlyDp: "27.3k - 29.8k /mo" },
        { layout: "2BR", floorArea: "61.50 sqm", priceRange: "7.8M - 9.5M", status: "Available", monthlyDp: "25.1k - 30.9k /mo" },
        { layout: "2BR", floorArea: "70.00 sqm", priceRange: "8.6M - 9.9M", status: "Available", monthlyDp: "27.7k - 32.1k /mo" },
        { layout: "2BR", floorArea: "79.00 sqm", priceRange: "9.4M - 9.5M", status: "Few left", monthlyDp: "30.5k - 31.0k /mo" },
        { layout: "2BR", floorArea: "81.50 sqm", priceRange: "8.9M - 9.3M", status: "Few left", monthlyDp: "29.0k - 30.2k /mo" }
      ] },
      { title: "3-Bedroom Tandem Units", description: "Tandem configurations combine adjacent 2BR units, subject to availability and deadlines per floor/building.", layouts: ["3BR B (113 SQM)", "3BR A (123 SQM)"], rows: [] }
    ],
    floorPlansTitle: "Floor Plans and Unit Layouts",
    floorPlansDescription: "Request official layout sheets for specific unit cuts before buyer presentation.",
    floorPlans: [
      { title: "Studio A (30 SQM)", text: "The Oriana South Tower Studio" },
      { title: "1BR Layouts", text: "1BR A, B, C, D, E, and F layouts from 29 sqm to 35.5 sqm." },
      { title: "2BR M (50.5 SQM)", text: "The Oriana South Tower 2-bedroom layout M." },
      { title: "2BR A (54.5 SQM)", text: "The Oriana South Tower 2-bedroom layout A." },
      { title: "2BR F (54.5 SQM)", text: "The Oriana South Tower 2-bedroom layout F." },
      { title: "2BR G (56.5 SQM)", text: "The Oriana South Tower 2-bedroom layout G." },
      { title: "2BR B (57 SQM)", text: "The Oriana South Tower 2-bedroom layout B." },
      { title: "2BR K (58.5 SQM)", text: "The Oriana South Tower 2-bedroom layout K." },
      { title: "2BR L (58.5 SQM)", text: "The Oriana South Tower 2-bedroom layout L." },
      { title: "2BR C (60 SQM)", text: "The Oriana South Tower 2-bedroom layout C." },
      { title: "2BR D (61.5 SQM)", text: "The Oriana South Tower 2-bedroom layout D." },
      { title: "2BR E (61.5 SQM)", text: "The Oriana South Tower 2-bedroom layout E." },
      { title: "2BR R (61.5 SQM)", text: "The Oriana South Tower 2-bedroom layout R." },
      { title: "2BR J (62.5 SQM)", text: "The Oriana South Tower 2-bedroom layout J." },
      { title: "2BR N (65 SQM)", text: "The Oriana South Tower 2-bedroom layout N." },
      { title: "2BR I (65.5 SQM)", text: "The Oriana South Tower 2-bedroom layout I." },
      { title: "2BR H (70 SQM)", text: "The Oriana South Tower 2-bedroom layout H." },
      { title: "2BR O (79 SQM)", text: "The Oriana South Tower 2-bedroom layout O." },
      { title: "2BR P (81.5 SQM)", text: "The Oriana South Tower 2-bedroom layout P." },
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
    mapCoordinates: [14.637997, 121.026696],
    mapZoom: 16,
    mapPinNote: "Map pin is approximate and for reference only.",
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
    videoRequestCtas: ["AVP available upon request", "Virtual tour available upon request"],
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
        { layout: "STUDIO", floorArea: "31.50 sqm", priceRange: "8.0M - 8.4M", status: "Few left", monthlyDp: "23.2k - 24.3k /mo" },
        { layout: "STUDIO", floorArea: "32.00 sqm", priceRange: "8.3M - 8.6M", status: "Few left", monthlyDp: "24.1k - 25.2k /mo" },
        { layout: "STUDIO", floorArea: "36.00 sqm", priceRange: "8.7M - 9.0M", status: "Few left", monthlyDp: "25.2k - 26.3k /mo" },
        { layout: "STUDIO", floorArea: "37.00 sqm", priceRange: "8.8M - 10.2M", status: "Limited", monthlyDp: "25.5k - 29.9k /mo" }
      ] },
      { title: "2-Bedroom Units", description: "For small families or buyers needing extra work-from-home space.", layouts: ["50.00 sqm", "52.50 sqm", "53.00 sqm", "56.00 sqm", "56.50 sqm", "57.50 sqm", "59.00 sqm", "59.50 sqm", "60.00 sqm", "61.00 sqm", "61.50 sqm", "62.00 sqm", "63.50 sqm", "64.50 sqm", "65.00 sqm", "71.00 sqm", "86.00 sqm"], rows: [
        { layout: "2BR", floorArea: "50.00 sqm", priceRange: "11.7M - 12.4M", status: "Few left", monthlyDp: "34.5k - 36.3k /mo" },
        { layout: "2BR", floorArea: "52.50 sqm", priceRange: "11.2M - 11.3M", status: "Few left", monthlyDp: "32.9k - 33.0k /mo" },
        { layout: "2BR", floorArea: "53.00 sqm", priceRange: "11.5M - 12.8M", status: "Limited", monthlyDp: "33.8k - 37.8k /mo" },
        { layout: "2BR", floorArea: "56.00 sqm", priceRange: "12.1M - 13.0M", status: "Available", monthlyDp: "35.5k - 38.1k /mo" },
        { layout: "2BR", floorArea: "56.50 sqm", priceRange: "12.4M - 13.3M", status: "Available", monthlyDp: "36.4k - 39.1k /mo" },
        { layout: "2BR", floorArea: "57.50 sqm", priceRange: "12.3M - 14.8M", status: "Available", monthlyDp: "36.3k - 43.7k /mo" },
        { layout: "2BR", floorArea: "59.00 sqm", priceRange: "12.7M - 13.9M", status: "Available", monthlyDp: "37.4k - 41.0k /mo" },
        { layout: "2BR", floorArea: "59.50 sqm", priceRange: "12.7M - 14.3M", status: "Available", monthlyDp: "37.5k - 42.2k /mo" },
        { layout: "2BR", floorArea: "60.00 sqm", priceRange: "12.9M - 14.3M", status: "Available", monthlyDp: "38.0k - 42.1k /mo" },
        { layout: "2BR", floorArea: "61.00 sqm", priceRange: "12.9M - 14.5M", status: "Available", monthlyDp: "38.1k - 42.7k /mo" },
        { layout: "2BR", floorArea: "61.50 sqm", priceRange: "12.8M - 14.9M", status: "Available", monthlyDp: "37.7k - 44.0k /mo" },
        { layout: "2BR", floorArea: "62.00 sqm", priceRange: "13.2M - 14.9M", status: "Available", monthlyDp: "38.9k - 43.8k /mo" },
        { layout: "2BR", floorArea: "63.50 sqm", priceRange: "13.3M - 15.3M", status: "Available", monthlyDp: "39.3k - 45.1k /mo" },
        { layout: "2BR", floorArea: "64.50 sqm", priceRange: "13.5M - 15.9M", status: "Available", monthlyDp: "39.9k - 46.9k /mo" },
        { layout: "2BR", floorArea: "65.00 sqm", priceRange: "13.5M - 16.5M", status: "Available", monthlyDp: "39.7k - 48.7k /mo" },
        { layout: "2BR", floorArea: "71.00 sqm", priceRange: "14.9M - 17.3M", status: "Available", monthlyDp: "43.9k - 51.1k /mo" },
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
      contractBreakdown: [{ label: "Special Discount", value: "0.00" }, { label: "Regular Discount", value: "0.00" }, { label: "Additional Discount", value: "0.00" }, { label: "Total Contract Price", value: "6,971,000.00" }, { label: "Closing Fee", value: "10.5% / 731,955.00" }, { label: "Total with Closing Fee", value: "7,702,955.00" }],
      downPaymentBreakdown: [{ label: "Downpayment", value: "12.0% / 836,520.00" }, { label: "Less Reservation Fee", value: "30,000.00" }, { label: "Net Downpayment", value: "806,520.00" }, { label: "Monthly DP", value: "40 months / 20,163.00 per month" }],
      balanceBreakdown: [{ label: "Balance", value: "88.0% / 6,134,480.00" }, { label: "Total Balance + Closing Fee", value: "6,866,435.00" }],
      importantNotes: ["Sample Computation Only / Subject to Confirmation", "Prices, promos, availability, terms, turnover dates, and computations may change without prior notice.", "Promo Ends: July 31, 2026; Scope: All Units"],
      promoCards: [
        { title: "12% DP Promo", items: ["Promo ends July 31, 2026", "Scope: All Units"] },
        { title: "15% DP Promo", items: ["Special Discount: 2.0% discount on DP Promo Term", "Promo ends July 31, 2026", "Scope: All Units"] }
      ],
      sampleAvailableComputations: [
        { type: "3BR", size: "85.50 sqm", price: "18,035,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "2BR", size: "53.00 sqm", price: "11,684,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "2BR", size: "57.50 sqm", price: "13,080,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "STUDIO", size: "32.00 sqm", price: "8,612,000", rfo: "Nov-2029", note: "Not applicable" },
        { type: "STUDIO", size: "29.00 sqm", price: "7,763,000", rfo: "Nov-2029", note: "Not applicable" }
      ],
      promoReference: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes."
    },
    unitHoldingPortal: {
      title: "Unit Holding Portal and Client Registration",
      text: "One Delta Terraces offers a dedicated Unit Holding Portal during launch, allowing prospective buyers to temporarily secure preferred units online before final decision.",
      steps: ["Register online", "Submit valid IDs and Philippine TIN", "Complete reservation agreement form", "Pay reservation fee only through approved channels"],
      notes: ["Unit holding is temporary and subject to current launch inventory confirmation.", "Residential unit reservation fee: PHP 30,000.", "Parking reservation fee: PHP 10,000, if applicable.", "If no direct registration link is available, use Luisa's inquiry/contact flow.", "Holding rules and launch procedures are subject to current DMCI confirmation."]
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
    reservationNote: "Confirm computation, availability, payment method, and official requirements with Luisa before making any reservation decision.",
    ...oneDeltaTerracesDetails
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
    sourceUrl: "https://www.dmcihomes.com/the-erin-heights",
    ...theErinHeightsDetails
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
    sourceUrl: "https://www.dmcihomes.com/cameron-residences",
    ...cameronResidencesDetails
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
    sourceUrl: "https://www.dmcihomes.com/the-valeron-tower",
    ...valeronTowerDetails
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
    sourceUrl: "https://www.dmcihomes.com/allegra-garden-place",
    ...allegraGardenPlaceDetails
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
    sourceUrl: "https://www.dmcihomes.com/prisma-residences",
    ...prismaResidencesDetails
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
    sourceUrl: "https://www.dmcihomes.com/sage-residences",
    ...sageResidencesDetails
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
    sourceUrl: "https://www.dmcihomes.com/kai-garden-residences",
    ...kaiGardenResidencesDetails
  },
  {
    slug: "mulberry-place",
    name: "Mulberry Place 2",
    location: "Taguig",
    city: "Taguig City",
    status: "Ready for Occupancy",
    turnoverYear: "Ready",
    propertyType: "Mid Rise Condominiums, High Rise Condominiums",
    developmentType: "Mid Rise Condominiums, High Rise Condominiums",
    architecturalTheme: "Asian Tropical",
    landArea: "36,474 sqm.",
    address: "Acacia Estates, Taguig City",
    unitTypes: ["2BR", "3BR", "4BR"],
    purposeTags: ["Own Use", "Family"],
    assetStatus: "complete",
    assetSlug: "mulberry-place-2",
    contentLevel: "rich",
    contentStatus: "full customer-ready detail added",
    targetRfo: "Phase 2: Paisley October 2026; Shantung June 2027; Taffeta August 2028; Zephyr October 2028",
    tagline: "Mulberry Place Phase 2: A sanctuary of modern living in Acacia Estates",
    priceRangeLabel: "2BR from 8.9M, 3BR from 12.1M, 4BR from 23.7M",
    priceSourceNote: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.",
    overview: "Mulberry Place Phase 2 continues the Acacia Estates community in Taguig City with Asian Tropical architecture, spacious 2BR to 4BR unit options, landscaped open spaces, and proximity to BGC, McKinley Hill, schools, retail, and airport access.",
    aboutLocation: "Located in Acacia Estates, Taguig City, Mulberry Place Phase 2 is positioned between Town Center and Mahogany Place 2 with convenient access to McKinley Hill, Bonifacio Global City, SM Aura, St. Luke's BGC, and NAIA Terminal 3.",
    highlights: [
      "Ready-for-occupancy and pre-selling Phase 2 DMCI Homes community in Taguig City",
      "Asian Tropical architectural theme",
      "2BR, 3BR, and 4BR options subject to latest availability",
      "Phase 2 buildings include Paisley, Shantung, Taffeta, and Zephyr"
    ],
    amenities: ["Lap Pool", "Kiddie Pool", "Play Area", "Picnic Area", "Sky Promenade", "Sky Patio", "Jogging Path", "Landscaped Garden", "Sky Lounge", "Fitness Center", "Function Room", "Barbecue Areas", "Convenience Store", "Laundry Station"],
    buildingFeatures: ["Phase 2 Shantung: High Rise", "Phase 2 Taffeta: High Rise", "Phase 2 Paisley: Mid Rise", "Phase 2 Zephyr: Mid Rise", "Mid Rise: 6 Levels", "High Rise: 18 Levels", "Lumiventt natural lighting and ventilation references"],
    nearbyLandmarks: ["McKinley Hill (4 km / 15 mins)", "St. Luke's BGC (5.4 km / 15 mins)", "International School Manila (6.1 km / 15 mins)", "SM Aura (3.5 km / 10 mins)", "NAIA Terminal 3 (10.5 km / 20 mins)"],
    sourceUrl: "https://www.dmci-online.com/mulberry-place-dmci-taguig/",
    mapCoordinates: [14.5213, 121.0614],
    mapZoom: 15,
    mapPinNote: "Map pin is approximate and for reference only.",
    galleryLabels: ["Mulberry Place 2 DMCI Taguig", "Mulberry Place 2 Amenities", "Mulberry Place 2 Outdoor Spaces", "Mulberry Place 2 Site Development Plan", "Mulberry Place 2 Site Progress"],
    projectFacts: [
      { label: "Location", value: "Acacia Estates, Taguig City" },
      { label: "Land Area", value: "36,474 sqm" },
      { label: "Development Type", value: "Mid Rise Condominiums, High Rise Condominiums" },
      { label: "Architectural Theme", value: "Asian Tropical" },
      { label: "Buildings", value: "Phase 2: Shantung, Taffeta, Paisley, Zephyr" },
      { label: "Levels", value: "Mid Rise: 6 Levels; High Rise: 18 Levels" },
      { label: "Unit Types", value: "2BR, 3BR, 4BR" },
      { label: "Turnover", value: "Ready For Occupancy; Phase 2 through October 2028" }
    ],
    summaryPricing: [
      { type: "2BR", floorArea: "57.50 - 73.00 sqm", range: "8.9M - 11.5M", monthlyDp: "12% DP: 20.8k - 27.1k /mo", status: "Available", note: "Reference only" },
      { type: "3BR", floorArea: "78.50 - 120.00 sqm", range: "12.1M - 19.6M", monthlyDp: "12% DP: 28.5k - 46.5k /mo", status: "Available", note: "Reference only" },
      { type: "4BR", floorArea: "144.00 - 152.00 sqm", range: "23.7M - 26.0M", monthlyDp: "12% DP: 56.4k - 61.7k /mo", status: "Limited", note: "Reference only" }
    ],
    summaryPricingNote: "Displayed ranges are not guaranteed current prices. Ask Luisa for latest availability, promos, and computation.",
    introParagraphs: [
      "Mulberry Place Phase 2 is a DMCI Homes development in Acacia Estates, Taguig City, designed with Asian Tropical inspiration and a community layout that blends nature with urban convenience.",
      "The page uses the supplied reference content for buyer shortlisting while keeping all prices, terms, promos, and inventory subject to Luisa/DMCI confirmation."
    ],
    locationDetails: {
      title: "Strategic Location of Mulberry Place Phase 2",
      text: "Mulberry Place Phase 2 is nestled in Acacia Estates, Taguig City, strategically between Town Center and Mahogany Place 2, with access to business districts such as Bonifacio Global City and McKinley Hill.",
      exactAddress: "Acacia Estates, Taguig City",
      note: "Travel times, distances, and map pins are approximate and subject to verification.",
      mapTitle: "Mulberry Place 2 Location Map",
      mapText: "Use the embedded Google Map for a location reference only. Confirm routes, travel times, and viewing instructions with Luisa before visiting.",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3337495493397!2d121.06340507450646!3d14.522892285954283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8ba65934bf1%3A0xdbdfb95e72840811!2sMulberry%20Place!5e0!3m2!1sen!2sph!4v1711778455334!5m2!1sen!2sph",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mulberry%20Place%20Acacia%20Estates%20Taguig",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mulberry%20Place%20Acacia%20Estates%20Taguig"
    },
    nearbyDestinations: [
      { group: "Business & Commercial Hubs", items: ["McKinley Hill - 4 km / 15 mins", "Bonifacio Global City access for confirmation"] },
      { group: "Medical Institutions", items: ["St. Luke's BGC - 5.4 km / 15 mins"] },
      { group: "Schools", items: ["International School Manila - 6.1 km / 15 mins"] },
      { group: "Retail", items: ["SM Aura - 3.5 km / 10 mins", "SM Savemore and Grace Mall nearby", "Vista Mall for confirmation"] },
      { group: "Airport Terminals", items: ["NAIA Terminal 3 - 10.5 km / 20 mins"] }
    ],
    siteDevelopment: {
      title: "Site Development Plan for Mulberry Place Phase 2",
      paragraphs: ["Mulberry Place Phase 2 features residential buildings set amid landscaped open spaces, pedestrian-friendly pathways, swimming pools, a children's play area, and recreational amenities."],
      keyStats: [
        { label: "Paisley", value: "October 2026" },
        { label: "Shantung", value: "June 2027" },
        { label: "Taffeta", value: "August 2028" },
        { label: "Zephyr", value: "October 2028" }
      ]
    },
    viewHighlights: [
      { title: "Audio Visual Presentation", text: "AVP is referenced in the supplied material; request the approved current AVP link from Luisa before sharing." },
      { title: "Virtual Tour of Acacia Estates", text: "A community tour reference is available from DMCI Online. Confirm the current approved tour link before sending to buyers." },
      { title: "360 Virtual Tour", text: "Use as an external reference only; large tour media is not auto-loaded on this page." }
    ],
    videoTourTitle: "AVP and Virtual Tour",
    videoTourCopy: "Official AVP and virtual tour references are loaded lazily so the page stays fast. Use external tour links only as buyer references and confirm current approved materials with Luisa.",
    videoTourEmbedUrl: "https://www.youtube.com/embed/voLKgWQalo4?rel=0",
    videoTourUrl: "https://www.dmci-online.com/virtual-community-tour/?option=MLP",
    videoTourLinks: [
      { label: "Open Mulberry 360 Virtual Tour", url: "https://www.dmci-online.com/virtual-community-tour/?option=MLP", variant: "secondary" },
      { label: "Open Acacia Estates Tour", url: "https://www.dmci-online.com/virtual-community-tour/?option=Acacia", variant: "ghost" }
    ],
    videoTourNote: "AVP and virtual tour links are subject to final confirmation.",
    amenityGroups: [
      { group: "Outdoor Amenities", items: ["Lap Pool", "Kiddie Pool", "Play Area", "Picnic Area", "Sky Promenade", "Sky Patio", "Jogging Path", "Landscaped Garden", "Sky Lounge"] },
      { group: "Indoor / Shared Spaces", items: ["Fitness Center", "Function Room", "Communal Areas", "Barbecue Areas"] },
      { group: "Facilities", items: ["Convenience Store", "Laundry Station", "Managed common areas"] }
    ],
    amenityNote: "Amenity availability, final design, and operating rules are subject to DMCI Homes confirmation.",
    unitIntro: "Mulberry Place Phase 2 offers 2-bedroom, 3-bedroom, and 4-bedroom configurations. Availability must be checked with Luisa/DMCI before presenting options to a buyer.",
    unitSections: [
      { title: "2-Bedroom Units", description: "Practical layouts for small families or professionals.", layouts: ["57.50 sqm", "60.00 sqm", "64.50 sqm", "65.00 sqm", "67.00 sqm", "69.00 sqm", "73.00 sqm"], rows: [
        { layout: "2BR", floorArea: "57.50 sqm", priceRange: "8.9M - 9.2M", status: "Available", monthlyDp: "20.8k - 21.5k /mo" },
        { layout: "2BR", floorArea: "60.00 sqm", priceRange: "9.8M - 10.1M", status: "Few left", monthlyDp: "22.8k - 23.7k /mo" },
        { layout: "2BR", floorArea: "64.50 sqm", priceRange: "9.4M - 9.5M", status: "Few left", monthlyDp: "21.9k - 22.2k /mo" },
        { layout: "2BR", floorArea: "65.00 sqm", priceRange: "9.8M - 10.1M", status: "Limited", monthlyDp: "23.0k - 23.7k /mo" },
        { layout: "2BR", floorArea: "67.00 sqm", priceRange: "9.8M - 11.4M", status: "Available", monthlyDp: "22.9k - 26.7k /mo" },
        { layout: "2BR", floorArea: "69.00 sqm", priceRange: "9.8M - 11.2M", status: "Available", monthlyDp: "23.0k - 26.3k /mo" },
        { layout: "2BR", floorArea: "73.00 sqm", priceRange: "10.3M - 11.5M", status: "Available", monthlyDp: "24.2k - 27.1k /mo" }
      ] },
      { title: "3-Bedroom Units", description: "Spacious options for growing families or buyers needing extra room.", layouts: ["78.50 sqm", "81.00 sqm", "85.00 sqm", "101.50 sqm", "115.00 sqm", "118.00 sqm", "120.00 sqm"], rows: [
        { layout: "3BR", floorArea: "78.50 sqm", priceRange: "12.8M", status: "Few left", monthlyDp: "30.2k /mo" },
        { layout: "3BR", floorArea: "81.00 sqm", priceRange: "12.9M", status: "Few left", monthlyDp: "30.3k /mo" },
        { layout: "3BR", floorArea: "85.00 sqm", priceRange: "12.1M - 13.7M", status: "Available", monthlyDp: "28.5k - 32.3k /mo" },
        { layout: "3BR", floorArea: "101.50 sqm", priceRange: "15.5M - 16.4M", status: "Few left", monthlyDp: "36.6k - 38.9k /mo" },
        { layout: "3BR", floorArea: "115.00 sqm", priceRange: "18.5M - 18.6M", status: "Few left", monthlyDp: "43.9k - 44.1k /mo" },
        { layout: "3BR", floorArea: "118.00 sqm", priceRange: "18.2M - 18.6M", status: "Few left", monthlyDp: "43.0k - 44.1k /mo" },
        { layout: "3BR", floorArea: "120.00 sqm", priceRange: "19.5M - 19.6M", status: "Few left", monthlyDp: "46.2k - 46.5k /mo" }
      ] },
      { title: "4-Bedroom Units", description: "Expansive layouts for larger families.", layouts: ["144.00 sqm", "152.00 sqm"], rows: [
        { layout: "4BR", floorArea: "144.00 sqm", priceRange: "23.7M - 23.9M", status: "Few left", monthlyDp: "56.4k - 56.7k /mo" },
        { layout: "4BR", floorArea: "152.00 sqm", priceRange: "24.9M - 26.0M", status: "Few left", monthlyDp: "59.1k - 61.7k /mo" }
      ] }
    ],
    floorPlansTitle: "Floor Plans at Mulberry Place Phase 2",
    floorPlansDescription: "Request official layout sheets and building floor plans before buyer presentation.",
    floorPlans: [
      { title: "2 Bedroom F", text: "Mulberry Place 2 two-bedroom layout F.", src: "/assets/projects/mulberry-place-2/floorplan-2br-f.jpg" },
      { title: "2 Bedroom A", text: "Mulberry Place 2 two-bedroom layout A.", src: "/assets/projects/mulberry-place-2/floorplan-2br-a.jpg" },
      { title: "2 Bedroom E", text: "Mulberry Place 2 two-bedroom layout E.", src: "/assets/projects/mulberry-place-2/floorplan-2br-e.jpg" },
      { title: "2 Bedroom C", text: "Mulberry Place 2 two-bedroom layout C.", src: "/assets/projects/mulberry-place-2/floorplan-2br-c.jpg" },
      { title: "3 Bedroom C", text: "Mulberry Place 2 three-bedroom layout C.", src: "/assets/projects/mulberry-place-2/floorplan-3br-c-shantung.jpg" },
      { title: "3 Bedroom B", text: "Mulberry Place 2 three-bedroom layout B.", src: "/assets/projects/mulberry-place-2/floorplan-3br-b.jpg" },
      { title: "3 Bedroom D", text: "Mulberry Place 2 three-bedroom layout D.", src: "/assets/projects/mulberry-place-2/floorplan-3br-d.jpg" },
      { title: "4 Bedroom A", text: "Mulberry Place 2 four-bedroom layout A.", src: "/assets/projects/mulberry-place-2/floorplan-4br-a.jpg" },
      { title: "4 Bedroom C", text: "Mulberry Place 2 four-bedroom layout C.", src: "/assets/projects/mulberry-place-2/floorplan-4br-c-shantung.jpg" },
      { title: "Paisley Building Floor Plan", text: "Paisley building floor plan reference.", src: "/assets/projects/mulberry-place-2/floorplan-paisley-6th.jpg" },
      { title: "Shantung Building Floor Plan", text: "Shantung building floor plan reference.", src: "/assets/projects/mulberry-place-2/floorplan-shantung-7th.jpg" },
      { title: "Taffeta Building Floor Plan", text: "Taffeta building floor plan reference.", src: "/assets/projects/mulberry-place-2/floorplan-taffeta.jpg" },
      { title: "Zephyr Building Floor Plan", text: "Zephyr building floor plan reference.", src: "/assets/projects/mulberry-place-2/floorplan-zephyr.jpg" }
    ],
    paymentTerms: {
      title: "Payment Term Options and Sample Computation",
      text: "Reference payment terms mention regular 30% down payment, promotional lower down payment terms, and balance through bank or in-house financing. All computations must be confirmed with Luisa/DMCI.",
      rfoSchedule: [{ label: "Paisley", value: "October 2026" }, { label: "Shantung", value: "June 2027" }, { label: "Taffeta", value: "August 2028" }, { label: "Zephyr", value: "October 2028" }],
      sampleComputation: [{ label: "Sample Unit", value: "C- Paisley 611" }, { label: "Type", value: "2BR" }, { label: "Size", value: "57.50 sqm" }, { label: "List Price", value: "8,924,000.00" }, { label: "RFO Date", value: "Oct-2026" }, { label: "Downpayment", value: "12% over 36 months" }],
      monthlyAmortization: [{ label: "10 years at 7.0%", value: "101,040.37 monthly" }, { label: "15 years at 7.0%", value: "78,218.18 monthly" }, { label: "20 years at 7.0%", value: "67,468.36 monthly" }],
      contractBreakdown: [{ label: "Special Discount", value: "1.0% / 89,240.00" }, { label: "Regular Discount", value: "0.00" }, { label: "Additional Discount", value: "0.00" }, { label: "Total Contract Price", value: "8,834,760.00" }, { label: "Closing Fee", value: "10.5% / 927,649.80" }, { label: "Total with Closing Fee", value: "9,762,409.80" }],
      downPaymentBreakdown: [{ label: "Downpayment", value: "12.0% / 1,060,171.20" }, { label: "Less Reservation Fee", value: "30,000.00" }, { label: "Net Downpayment", value: "1,030,171.20" }, { label: "Monthly DP", value: "36 months / 28,615.87 per month" }],
      balanceBreakdown: [{ label: "Balance", value: "88.0% / 7,774,588.80" }, { label: "Closing Fee", value: "927,649.80" }, { label: "Total Balance + Closing Fee", value: "8,702,238.60" }],
      importantNotes: ["Sample Computation Only / Subject to Confirmation", "Prices, promos, availability, terms, turnover dates, and computations may change without prior notice.", "Promo Ends: July 31, 2026"],
      promoCards: [
        { title: "12% DP Promo", items: ["Special Discount: 1.0% discount on DP Promo Term", "Down payment may be spread over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] },
        { title: "12% DP Promo - Taffeta / Zephyr", items: ["Down payment may be spread over 50 fixed months", "Promo ends July 31, 2026", "Scope: Building Taffeta and Building Zephyr"] },
        { title: "15% DP Promo - Taffeta / Zephyr", items: ["Down payment may be spread over 50 fixed months", "Promo ends July 31, 2026", "Scope: Building Taffeta and Building Zephyr"] }
      ],
      sampleAvailableComputations: [
        { type: "3BR", size: "120.00 sqm", price: "19,489,000", rfo: "Oct-2026", note: "Not applicable" },
        { type: "2BR", size: "60.00 sqm", price: "10,124,000", rfo: "Oct-2026", note: "Not applicable" },
        { type: "3BR", size: "120.00 sqm", price: "19,637,000", rfo: "Oct-2026", note: "Not applicable" },
        { type: "3BR", size: "115.00 sqm", price: "18,549,000", rfo: "Oct-2026", note: "Not applicable" },
        { type: "3BR", size: "115.00 sqm", price: "18,579,000", rfo: "Oct-2026", note: "Not applicable" }
      ],
      promoReference: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes."
    },
    unitHoldingPortal: {
      title: "Unit Holding Portal for Mulberry Place Phase 2",
      text: "The online unit holding portal lets prospective buyers temporarily hold a preferred unit for free, subject to current inventory and system rules.",
      steps: ["Online Client Registration", "Submit valid IDs and Philippine TIN", "Complete Online Reservation Agreement Form", "Pay reservation fee only through approved payment channels"],
      notes: ["Unit allocations are subject to availability and first-come, first-served/system rules.", "Residential unit reservation fee: PHP 30,000.", "Parking reservation fee: PHP 10,000.", "Credit card or BPI Online Banking payment gateway reference must be confirmed before use."]
    },
    reservationRequirements: [
      "Online Client Registration",
      "Valid government-issued IDs",
      "Philippine TIN Number",
      "Online Reservation Agreement Form",
      "Reservation Fee: PHP 30,000 for the unit",
      "Parking Reservation Fee: PHP 10,000 for parking, if applicable",
      "Proof of billing address after initial reservation",
      "Official payment instructions must be verified before sending payment"
    ],
    reservationNote: "Do not send payment without official confirmation and verified payment instructions from Luisa/DMCI."
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
    unitTypes: ["2BR", "3BR", "4BR"],
    assetStatus: "complete",
    contentLevel: "rich",
    contentStatus: "full customer-ready detail added",
    targetRfo: "Andea June 2024; Manzuria September 2024; Oregon March 2025; Sylvan December 2025",
    tagline: "Resort-inspired high-rise living in Acacia Estates, Taguig",
    priceRangeLabel: "2BR from 9.3M; 3BR and 4BR sold out in supplied reference",
    priceSourceNote: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes. Displayed figures are for reference only and may change without prior notice.",
    overview: "Alder Residences is a resort-inspired high-rise condominium along Banyan Road in Acacia Estates, Taguig City. It features four 18-storey buildings, Modern Artisanal design, a broad amenity mix, and current supplied inventory focused on 2BR units.",
    aboutLocation: "The official address is Banyan Road, Acacia Estates, Taguig City, with access to C5 Road, BGC, Makati, SM Aura, Bonifacio High Street, Market! Market!, schools, and daily retail destinations.",
    highlights: [
      "Ready-for-occupancy DMCI Homes high-rise condominium in Taguig City",
      "Modern Artisanal architectural theme",
      "2BR units available in supplied reference; 3BR and 4BR sold out / waitlist",
      "Four 18-storey buildings: Andea, Manzuria, Oregon, and Sylvan"
    ],
    amenities: ["Open Lounge", "Co-working Space", "Game Room", "Fitness Gym", "Entertainment Room", "Snack Bar", "Sky Lounge", "Lap Pool", "Kiddie Pool", "Leisure Pool", "Jogging Path", "Children's Play Area", "Sky Promenade", "Linear Park", "Picnic Area"],
    buildingFeatures: ["4 Buildings", "18 Storeys", "1,515 Units", "1,217 Parking Slots", "Card-operated laundry", "Convenience Store", "Water Station", "Guarded gate and entrance", "24-hour roving personnel", "Taxi call-in service"],
    nearbyLandmarks: ["SM Savemore (500 m / 3 mins)", "Grace Mall (1.5 km / 5 mins)", "Vista Mall (3.3 km / 8 mins)", "SM Aura (3.8 km / 8 mins)", "Venice Grand Canal Mall (4.1 km / 10 mins)", "Market! Market! (4.6 km / 11 mins)", "International School Manila (6.1 km / 12 mins)"],
    sourceUrl: "https://www.dmci-online.com/alder-residences-dmci-taguig/",
    locationMapImage: "/assets/projects/alder-residences/location-map.jpg",
    mapCoordinates: [14.5199, 121.0627],
    mapZoom: 15,
    mapPinNote: "Map pin is approximate and for reference only.",
    galleryLabels: ["Alder Residences Amenity View", "Alder Residences Basketball Court", "Alder Residences Lap Pool", "Alder Residences Leisure Pool", "Alder Residences Site Development Plan"],
    projectFacts: [
      { label: "Location", value: "Banyan Road, Acacia Estates, Taguig City" },
      { label: "Lot Area", value: "28,607 sqm" },
      { label: "Development Type", value: "High Rise Condominium" },
      { label: "Buildings", value: "4 Buildings" },
      { label: "Floors", value: "18 Storeys" },
      { label: "Units / Parking", value: "1,515 Units, 1,217 Parking Slots" },
      { label: "Unit Mix", value: "2BR, 3BR, 4BR" },
      { label: "Turnover", value: "Andea June 2024; Manzuria September 2024; Oregon March 2025; Sylvan December 2025" }
    ],
    summaryPricing: [
      { type: "2BR", floorArea: "64.50 - 71.50 sqm", range: "9.3M - 10.7M", monthlyDp: "5% DP: 36.1k - 42.0k /mo", status: "Available", note: "Reference only" },
      { type: "3BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa to join waitlist" },
      { type: "4BR", floorArea: "For waitlist", range: "Sold out", monthlyDp: "-", status: "Sold out", note: "Message Luisa to join waitlist" }
    ],
    summaryPricingNote: "Displayed ranges are not guaranteed current prices. Ask Luisa for latest availability, promos, and computation.",
    introParagraphs: [
      "Alder Residences combines resort-inspired amenities, Modern Artisanal design, and Acacia Estates access for buyers comparing Taguig residential communities.",
      "The supplied customer-facing reference currently shows available 2BR cuts and marks 3BR/4BR as sold out, with waitlist messaging for reopening units."
    ],
    locationDetails: {
      title: "Prime Location of Alder Residences",
      text: "Alder Residences is situated at Banyan Road, Acacia Estates, Taguig City, with access to C5 Road and proximity to commercial hubs such as SM Aura, Bonifacio High Street, and Market! Market!.",
      exactAddress: "Banyan Road, Acacia Estates, Taguig City",
      note: "Travel times, distances, and map pins are approximate and subject to verification.",
      mapTitle: "Alder Residences Location Map",
      mapText: "Use the embedded Google Map for a location reference only. Confirm routes, travel times, and viewing instructions with Luisa before visiting.",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3689859329224!2d121.06664211372616!3d14.520874289853218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98ff5291a17%3A0xb27a801f407ea74f!2sAlder%20Residences!5e0!3m2!1sen!2sph!4v1598622371430!5m2!1sen!2sph",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig"
    },
    nearbyDestinations: [
      { group: "Retail & Daily Needs", items: ["SM Savemore - 500 m / 3 mins", "Grace Mall - 1.5 km / 5 mins", "Vista Mall - 3.3 km / 8 mins"] },
      { group: "Lifestyle & Commercial", items: ["SM Aura - 3.8 km / 8 mins", "Venice Grand Canal Mall - 4.1 km / 10 mins", "Market! Market! - 4.6 km / 11 mins", "Uptown Mall - 5.8 km / 11 mins", "Bonifacio High Street - 5.9 km / 14 mins"] },
      { group: "Schools", items: ["International School Manila - 6.1 km / 12 mins", "British School Manila - 5.6 km / 11 mins"] }
    ],
    siteDevelopment: {
      title: "Site Development Plan for Alder Residences",
      paragraphs: ["Alder Residences features four 18-storey high-rise buildings with landscaped open areas, multiple leisure pools, a lap pool, children's play areas, picnic areas, a linear park, and active play spaces."],
      keyStats: [
        { label: "Andea", value: "June 2024" },
        { label: "Manzuria", value: "September 2024" },
        { label: "Oregon", value: "March 2025" },
        { label: "Sylvan", value: "December 2025" }
      ]
    },
    viewHighlights: [
      { title: "Audio Visual Presentation", text: "AVP is referenced in the supplied material; request the approved current AVP link from Luisa before sharing." },
      { title: "Virtual Tour of Acacia Estates", text: "A community tour reference is available from DMCI Online. Confirm the current approved tour link before sending to buyers." },
      { title: "360 Virtual Tour of Alder Residences", text: "Use as an external reference only; large tour media is not auto-loaded on this page." }
    ],
    videoTourTitle: "AVP and 360 Virtual Tour",
    videoTourCopy: "Official AVP and virtual tour references are loaded lazily so the page stays fast. Use external tour links only as buyer references and confirm current approved materials with Luisa.",
    videoTourEmbedUrl: "https://www.youtube.com/embed/DDIe8FhqZdU?rel=0",
    videoTourUrl: "https://www.dmci-online.com/virtual-community-tour/?option=ALD",
    videoTourLinks: [
      { label: "Open Alder 360 Virtual Tour", url: "https://www.dmci-online.com/virtual-community-tour/?option=ALD", variant: "secondary" },
      { label: "Open Acacia Estates Tour", url: "https://www.dmci-online.com/virtual-community-tour/?option=Acacia", variant: "ghost" }
    ],
    videoTourNote: "AVP and virtual tour links are subject to final confirmation.",
    amenityGroups: [
      { group: "Indoor Amenities", items: ["Open Lounge (Ground Floor)", "Co-working Space", "Game Room", "Fitness Gym", "Entertainment Room", "Snack Bar"] },
      { group: "Outdoor Amenities", items: ["Sky Lounge", "Lap Pool", "Kiddie Pool", "Leisure Pool", "Jogging Path", "Children's Play Area", "Sky Promenade", "Linear Park", "Picnic Area"] },
      { group: "Facilities and PMO Services", items: ["Card-operated laundry", "Convenience Store", "Water Station", "Guarded gate and entrance", "24-hour roving personnel", "Maintenance of landscaped areas", "Taxi call-in service"] }
    ],
    amenityNote: "Amenity availability, final design, and operating rules are subject to DMCI Homes confirmation.",
    unitIntro: "Alder Residences currently shows available 2BR options in the supplied reference. 3BR and 4BR are marked sold out, with waitlist messaging for reopening units.",
    unitSections: [
      { title: "2-Bedroom Units", description: "Well-appointed units for small families or working professionals.", layouts: ["64.50 sqm", "67.00 sqm", "70.50 sqm", "71.50 sqm"], rows: [
        { layout: "2BR", floorArea: "64.50 sqm", priceRange: "9.3M - 10.0M", status: "Few left", monthlyDp: "36.2k - 39.1k /mo" },
        { layout: "2BR", floorArea: "67.00 sqm", priceRange: "9.3M - 10.2M", status: "Available", monthlyDp: "36.1k - 40.1k /mo" },
        { layout: "2BR", floorArea: "70.50 sqm", priceRange: "10.2M - 10.7M", status: "Few left", monthlyDp: "40.1k - 42.0k /mo" },
        { layout: "2BR", floorArea: "71.50 sqm", priceRange: "10.4M", status: "Few left", monthlyDp: "41.0k /mo" }
      ] },
      { title: "3-Bedroom Units", description: "Spacious units ranging from 70.00 to 121.00 sqm in the supplied reference.", layouts: ["3BR A", "3BR B", "3BR C", "3BR D"], rows: [
        { layout: "3BR", floorArea: "70.00 - 121.00 sqm", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Message Luisa for reopening units" }
      ] },
      { title: "4-Bedroom Units", description: "Larger family layouts in the supplied reference.", layouts: ["4BR A"], rows: [
        { layout: "4BR", floorArea: "For confirmation", priceRange: "Sold out", status: "Waitlist", monthlyDp: "Message Luisa for reopening units" }
      ] }
    ],
    floorPlansTitle: "Floor Plans at Alder Residences",
    floorPlansDescription: "Request official layout sheets and building floor plans before buyer presentation.",
    floorPlans: [
      { title: "2BR A", text: "Alder Residences two-bedroom layout A.", src: "/assets/projects/alder-residences/floorplan-2br-a.jpg" },
      { title: "2BR B", text: "Alder Residences two-bedroom layout B.", src: "/assets/projects/alder-residences/floorplan-2br-b.jpg" },
      { title: "2BR C", text: "Alder Residences two-bedroom layout C.", src: "/assets/projects/alder-residences/floorplan-2br-c.jpg" },
      { title: "2BR D", text: "Alder Residences two-bedroom layout D.", src: "/assets/projects/alder-residences/floorplan-2br-d.jpg" },
      { title: "2BR E", text: "Alder Residences two-bedroom layout E.", src: "/assets/projects/alder-residences/floorplan-2br-e.jpg" },
      { title: "3BR A", text: "Alder Residences three-bedroom layout A, subject to reopening/waitlist.", src: "/assets/projects/alder-residences/floorplan-3br-a.jpg" },
      { title: "3BR B", text: "Alder Residences three-bedroom layout B, subject to reopening/waitlist.", src: "/assets/projects/alder-residences/floorplan-3br-b.jpg" },
      { title: "3BR C", text: "Alder Residences three-bedroom layout C, subject to reopening/waitlist.", src: "/assets/projects/alder-residences/floorplan-3br-c.jpg" },
      { title: "3BR D", text: "Alder Residences three-bedroom layout D, subject to reopening/waitlist.", src: "/assets/projects/alder-residences/floorplan-3br-d.jpg" },
      { title: "4BR A", text: "Alder Residences four-bedroom layout A, subject to reopening/waitlist.", src: "/assets/projects/alder-residences/floorplan-4br-a.jpg" },
      { title: "Andea Building Floor Plans", text: "Andea building floor plan reference.", src: "/assets/projects/alder-residences/floorplan-2nd.jpg" },
      { title: "Manzuria Building Floor Plans", text: "Manzuria building floor plan reference.", src: "/assets/projects/alder-residences/floorplan-5th-7th.jpg" },
      { title: "Oregon Building Floor Plans", text: "Oregon building floor plan reference.", src: "/assets/projects/alder-residences/floorplan-14th.jpg" },
      { title: "Sylvan Building Floor Plans", text: "Sylvan building floor plan reference.", src: "/assets/projects/alder-residences/floorplan-17th.jpg" }
    ],
    paymentTerms: {
      title: "Payment Terms at Alder Residences",
      text: "Reference payment terms mention a 5% DP Chinabank promo, 12% DP promo, and bank financing balance. All computations must be confirmed with Luisa/DMCI.",
      rfoSchedule: [{ label: "Andea", value: "June 2024" }, { label: "Manzuria", value: "September 2024" }, { label: "Oregon", value: "March 2025" }, { label: "Sylvan", value: "December 2025" }],
      sampleComputation: [{ label: "Sample Unit", value: "C- Sylvan 202" }, { label: "Type", value: "2BR" }, { label: "Size", value: "67.00 sqm" }, { label: "List Price", value: "9,255,000.00" }, { label: "RFO Date", value: "Dec-2025" }, { label: "Downpayment", value: "5% over 12 months" }],
      monthlyAmortization: [{ label: "10 years at 7.0%", value: "111,101.24 monthly" }, { label: "15 years at 7.0%", value: "86,006.58 monthly" }, { label: "20 years at 7.0%", value: "74,186.37 monthly" }],
      contractBreakdown: [{ label: "Special Discount", value: "2.0% / 185,100.00" }, { label: "Regular Discount", value: "0.00" }, { label: "Additional Discount", value: "0.00" }, { label: "Total Contract Price", value: "9,069,900.00" }, { label: "Closing Fee", value: "10.5% / 952,339.50" }, { label: "Total with Closing Fee", value: "10,022,239.50" }],
      downPaymentBreakdown: [{ label: "Downpayment", value: "5.0% / 453,495.00" }, { label: "Less Reservation Fee", value: "30,000.00" }, { label: "Net Downpayment", value: "423,495.00" }, { label: "Monthly DP", value: "12 months / 35,291.25 per month" }],
      balanceBreakdown: [{ label: "Balance", value: "95.0% / 8,616,405.00" }, { label: "Closing Fee", value: "952,339.50" }, { label: "Total Balance + Closing Fee", value: "9,568,744.50" }],
      importantNotes: ["Sample Computation Only / Subject to Confirmation", "Prices, promos, availability, terms, turnover dates, and computations may change without prior notice.", "5% DP Chinabank Promo ends November 30, 2026", "12% DP Promo ends July 31, 2026"],
      promoCards: [
        { title: "5% DP Chinabank Promo", items: ["Down Payment Promo: 5% DP", "Special Discount: 2.0% discount on DP Promo Term", "Down payment may be spread over 12 fixed months", "Promo ends November 30, 2026", "Scope: All Units"] },
        { title: "12% DP Promo", items: ["Down Payment Promo: 12% DP", "Special Discount: 1.0% discount on DP Promo Term", "Down payment may be spread over 36 fixed months", "Promo ends July 31, 2026", "Scope: All Units"] }
      ],
      sampleAvailableComputations: [
        { type: "2BR", size: "67.00 sqm", price: "9,588,000", rfo: "Sep-2024", note: "Rent-to-Own PHP 30,000 / mo" },
        { type: "2BR", size: "67.00 sqm", price: "9,516,000", rfo: "Sep-2024", note: "Rent-to-Own PHP 30,000 / mo" },
        { type: "2BR", size: "64.50 sqm", price: "9,677,000", rfo: "Sep-2024", note: "Rent-to-Own PHP 30,000 / mo" },
        { type: "2BR", size: "70.50 sqm", price: "10,685,000", rfo: "Sep-2024", note: "Rent-to-Own PHP 30,000 / mo" },
        { type: "2BR", size: "67.00 sqm", price: "9,508,000", rfo: "Sep-2024", note: "Rent-to-Own PHP 30,000 / mo" }
      ],
      promoReference: "Prices, promos, availability, terms, turnover dates, and computations are subject to final confirmation with Luisa/DMCI Homes."
    },
    unitHoldingPortal: {
      title: "Unit Holding Portal for Alder Residences",
      text: "Clients can register on the portal and hold a unit for free for 24 hours if based in the Philippines or up to 72 hours for international clients, subject to current system rules and availability.",
      steps: ["Online Client Registration", "Submit valid IDs and Philippine TIN", "Complete reservation agreement form", "Confirm unit slotting and reservation steps with Luisa"],
      notes: ["Unit slotting and holding rules are subject to current DMCI confirmation.", "Residential unit reservation fee is typically PHP 30,000 when proceeding to reservation.", "Parking reservation fee is typically PHP 10,000, if applicable."]
    },
    reservationRequirements: [
      "Online Client Registration",
      "Valid government-issued IDs",
      "Philippine TIN Number",
      "Reservation Agreement Form",
      "Reservation Fee: PHP 30,000 for the residential unit, subject to confirmation",
      "Parking Reservation Fee: PHP 10,000, if applicable",
      "Proof of billing and payment method requirements to be confirmed before reservation"
    ],
    reservationNote: "Confirm computation, availability, payment method, and official requirements with Luisa before making any reservation decision."
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
  const projectAssetSlug = project.assetSlug || project.slug;
  const gallery = hasCoreImages
    ? [
      assetPath(projectAssetSlug, "gallery-1.jpg"),
      assetPath(projectAssetSlug, "gallery-2.jpg"),
      assetPath(projectAssetSlug, "gallery-3.jpg"),
      assetPath(projectAssetSlug, "master-plan.jpg"),
      assetPath(projectAssetSlug, "site-progress.jpg")
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
    image: hasCoreImages ? assetPath(projectAssetSlug, "hero.jpg") : "",
    thumbnail: hasCoreImages ? assetPath(projectAssetSlug, "thumbnail.jpg") : "",
    gallery,
    masterPlanImage: hasCoreImages ? assetPath(projectAssetSlug, "master-plan.jpg") : "",
    siteProgressImage: hasCoreImages ? assetPath(projectAssetSlug, "site-progress.jpg") : "",
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
