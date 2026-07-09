import { contact } from "./contact.js";
import { locations } from "./locations.js";
import { projects } from "./projects.js";

export const SITE_URL = "https://dmci-broker-website.vercel.app";
export const DEFAULT_OG_IMAGE = "/assets/img/premium-dmci-hero.jpg";

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function slugifyLocation(name) {
  return String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

const preferredLocationSlugs = {
  "Quezon City": "quezon-city",
  Pasig: "pasig-city",
  Mandaluyong: "mandaluyong-city",
  Taguig: "taguig-city",
  Pasay: "pasay-city",
  Manila: "manila",
  "Para\u00f1aque": "paranaque-city",
  "Las Pi\u00f1as": "las-pinas-city",
  "Baguio City / Benguet": "baguio-city",
  "San Juan Batangas": "san-juan-batangas"
};

export const redirectRoutes = [
  { path: "/privacy", destination: "/privacy-policy", reason: "Canonical privacy URL" },
  { path: "/locations/pasig", destination: "/locations/pasig-city", reason: "Preferred city slug" },
  { path: "/locations/mandaluyong", destination: "/locations/mandaluyong-city", reason: "Preferred city slug" },
  { path: "/locations/taguig", destination: "/locations/taguig-city", reason: "Preferred city slug" },
  { path: "/locations/pasay", destination: "/locations/pasay-city", reason: "Preferred city slug" },
  { path: "/locations/paranaque", destination: "/locations/paranaque-city", reason: "Preferred city slug" },
  { path: "/locations/las-pinas", destination: "/locations/las-pinas-city", reason: "Preferred city slug" },
  { path: "/locations/baguio-city-benguet", destination: "/locations/baguio-city", reason: "Preferred city slug" }
];

export function citySlugForLocation(locationName) {
  return preferredLocationSlugs[locationName] || slugifyLocation(locationName);
}

export function cityPath(locationName) {
  return `/locations/${citySlugForLocation(locationName)}`;
}

export const cityPages = locations.map((location) => {
  const cityProjects = projects.filter((project) => project.location === location.name);
  const projectNames = cityProjects.map((project) => project.name).join(", ");
  const slug = citySlugForLocation(location.name);
  const legacySlug = slugifyLocation(location.name);
  return {
    path: cityPath(location.name),
    slug,
    aliasSlugs: legacySlug !== slug ? [legacySlug] : [],
    name: location.name,
    h1: `DMCI Projects in ${location.name}`,
    title: `DMCI Projects in ${location.name} | ${projectNames || "Condo Project Guide"} | Luisa Corral`,
    description: cityProjects.length
      ? `Compare DMCI projects in ${location.name}, including ${projectNames}. Request latest price guidance, availability, and viewing assistance from Luisa Corral.`
      : `Browse DMCI project guidance in ${location.name}. Request latest price guidance, availability, and viewing assistance from Luisa Corral.`,
    projects: cityProjects
  };
});

export function findCityPageBySlug(slug) {
  return cityPages.find((city) => city.slug === slug || city.aliasSlugs.includes(slug));
}

const pageMeta = {
  "/": {
    h1: "Explore DMCI Homes for Living or Investment",
    title: "DMCI Homes Broker Philippines | Luisa Corral | Condo Projects in QC, Pasig, Taguig & More",
    description:
      "Explore approved DMCI Homes projects for residence or investment with licensed broker guidance from Maria Luisa Corral.",
    cta: "/request-computation"
  },
  "/projects": {
    h1: "Find a DMCI Home That Fits Your Plan",
    title: "DMCI Homes Project Directory | Condo Projects by City | Luisa Corral",
    description:
      "Browse priority DMCI condo and leisure projects by city, status, unit type, and buyer purpose. Request latest computations and confirmed availability from Luisa Corral.",
    cta: "/contact"
  },
  "/locations": {
    h1: "Explore DMCI Projects by Location",
    title: "DMCI Projects by City | Quezon City, Pasig, Taguig, Para\u00f1aque & More",
    description:
      "Browse DMCI project pages by city and area, including Quezon City, Pasig, Mandaluyong, Taguig, Manila, Pasay, Para\u00f1aque, Las Pi\u00f1as, Baguio, and Batangas.",
    cta: "/projects"
  },
  "/availability": {
    h1: "Check Current DMCI Unit Availability",
    title: "Check DMCI Unit Availability | Luisa Corral",
    description:
      "Request current DMCI unit availability, project status, promos, and payment-term confirmation before shortlisting or reserving.",
    cta: "/contact"
  },
  "/request-computation": {
    h1: "Request Latest DMCI Computation",
    title: "Request DMCI Sample Computation | Luisa Corral",
    description:
      "Send your preferred DMCI project, unit type, buyer profile, and payment preference to request a latest sample computation from Luisa Corral.",
    cta: "/contact"
  },
  "/book-viewing": {
    h1: "Book a DMCI Site Viewing",
    title: "Book DMCI Site Viewing or Online Consultation | Luisa Corral",
    description:
      "Request a DMCI site viewing, model-unit visit, project presentation, or online consultation with broker guidance from Luisa Corral.",
    cta: "/contact"
  },
  "/buyers-guide": {
    h1: "DMCI Buyer Guide Before Reservation",
    title: "DMCI Buyer Guide | Requirements, Computation, Viewing, Reservation",
    description:
      "Read buyer-safe guidance for DMCI inquiries, computation requests, availability checks, viewing coordination, and reservation preparation.",
    cta: "/request-computation"
  },
  "/reservation-requirements": {
    h1: "DMCI Reservation Requirements Guide",
    title: "DMCI Reservation Requirements | Buyer Checklist | Luisa Corral",
    description:
      "Prepare a buyer-safe reservation checklist for DMCI inquiries. Confirm exact requirements, payment channels, and documents before paying any reservation fee.",
    cta: "/contact"
  },
  "/virtual-tours": {
    h1: "DMCI Virtual Tours and Project Media",
    title: "DMCI Virtual Tours and AVP Links | Luisa Corral",
    description:
      "Review available DMCI project AVP and virtual tour references. Request approved media links and current presentation materials from Luisa Corral.",
    cta: "/contact"
  },
  "/promos": {
    h1: "Current DMCI Promo Details for Confirmation",
    title: "DMCI Promo and Payment Term Updates | Confirm with Luisa Corral",
    description:
      "Review DMCI promo references and request latest confirmation before making a buyer decision. Promos, terms, and availability may change.",
    cta: "/request-computation"
  },
  "/resale-units": {
    h1: "DMCI Resale and Re-opened Unit Inquiries",
    title: "DMCI Resale and Re-opened Units | Availability Inquiry",
    description:
      "Ask about resale or re-opened DMCI unit references. Availability, pricing, and terms must be verified before discussion.",
    cta: "/availability"
  },
  "/about": {
    h1: contact.brokerName,
    title: "About Luisa Corral | DMCI Homes Broker Guidance",
    description:
      "Learn about Maria Luisa Corral, buyer assistance services, contact channels, and broker-guided support for DMCI Homes inquiries.",
    cta: "/contact"
  },
  "/contact": {
    h1: "Request a Private Buyer Consultation",
    title: "Contact Luisa Corral | DMCI Homes Broker Inquiry",
    description:
      "Contact Luisa Corral for DMCI project recommendations, latest computation requests, availability checks, viewing coordination, and reservation guidance.",
    cta: "/request-computation"
  },
  "/privacy-policy": {
    h1: "Privacy Policy",
    title: "Privacy Policy | My DMCI Broker | Luisa Corral",
    description:
      "Read how buyer inquiry details are handled for DMCI project assistance, computation requests, availability checks, and contact follow-up.",
    cta: "/contact"
  },
  "/disclaimer": {
    h1: "Website Disclaimer",
    title: "Disclaimer | My DMCI Broker | Luisa Corral",
    description:
      "Read the buyer assistance disclaimer for DMCI project details, pricing, availability, promos, payment terms, and official confirmation requirements.",
    cta: "/contact"
  },
  "/showcase": {
    h1: "DMCI Broker Website Showcase",
    title: "DMCI Broker Website Showcase | Internal Review",
    description:
      "Internal showcase and implementation checklist for Luisa Corral's DMCI broker website.",
    cta: "/projects",
    robots: "noindex,follow"
  }
};

export function publicStaticRoutes() {
  return [
    ...Object.entries(pageMeta).map(([path, meta]) => ({ path, ...meta })),
    ...cityPages,
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      h1: project.heroHeadline || project.name,
      title: `${project.name} in ${project.location} | DMCI Project Details, Location, Units, Inquiry`,
      description:
        `${project.name} in ${project.location}: review safe project overview, location, amenities, unit options, price guidance, and inquiry assistance. Request latest details from Luisa Corral.`,
      cta: `/request-computation?project=${encodeURIComponent(project.name)}`,
      project
    }))
  ];
}

export function resolveSeo(pathname = "/", search = "") {
  const normalizedPath = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const params = new URLSearchParams(search || "");

  if (normalizedPath === "/projects" && params.get("location")) {
    const location = locations.find((item) => item.name === params.get("location"));
    if (location) {
      const city = cityPages.find((item) => item.name === location.name);
      return finalizeMeta({ ...city, canonicalPath: city.path });
    }
  }

  const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    if (project) {
      return finalizeMeta({
        path: normalizedPath,
        h1: project.heroHeadline || project.name,
        title: `${project.name} in ${project.location} | DMCI Project Details, Location, Units, Inquiry`,
        description:
          `${project.name} in ${project.location}: review safe project overview, location, amenities, unit options, price guidance, and inquiry assistance. Request latest details from Luisa Corral.`,
        image: project.image || project.thumbnail,
        cta: `/request-computation?project=${encodeURIComponent(project.name)}`
      });
    }
  }

  const cityMatch = normalizedPath.match(/^\/locations\/([^/]+)$/);
  if (cityMatch) {
    const city = findCityPageBySlug(cityMatch[1]);
    if (city) return finalizeMeta({ ...city, canonicalPath: city.path });
  }

  return finalizeMeta({ path: normalizedPath, ...(pageMeta[normalizedPath] || pageMeta["/"]) });
}

function finalizeMeta(meta) {
  const path = meta.canonicalPath || meta.path || "/";
  const image = meta.image || DEFAULT_OG_IMAGE;
  return {
    ...meta,
    path,
    canonical: absoluteUrl(path),
    ogImage: absoluteUrl(image),
    robots: meta.robots || "index,follow"
  };
}
