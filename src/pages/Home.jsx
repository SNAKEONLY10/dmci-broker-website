import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/Button";
import { DemoForm } from "../components/LeadForm";
import { LocationCard } from "../components/LocationCard";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { GuideCard, PromoCard, VideoTourCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projects, unitTypes, purposes, statuses } from "../data/projects";
import { locations } from "../data/locations";
import { guideCards } from "../data/guides";
import { promos } from "../data/promos";
import { contact } from "../data/contact";
import { useResponsiveProjectPageSize } from "../hooks/useResponsiveProjectPageSize";

const computationFields = [
  { name: "fullName", label: "Full Name" },
  { name: "contactNumber", label: "Mobile / Viber", type: "tel" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "location", label: "City / Location", options: locations.map((item) => item.name) },
  { name: "project", label: "Interested Project", options: projects.map((item) => item.name) },
  { name: "unitType", label: "Unit Type", options: unitTypes },
  { name: "budgetRange", label: "Budget Range", options: ["Still checking", "Entry level", "Mid range", "Premium range"] },
  { name: "purpose", label: "Purpose", options: purposes },
  { name: "contactMethod", label: "Preferred Contact Method", options: ["Call", "Viber", "Email", "SMS"] },
  { name: "message", label: "Message", type: "textarea", full: true }
];

export default function Home() {
  const [projectPage, setProjectPage] = useState(1);
  const projectPageSize = useResponsiveProjectPageSize();
  const homepageProjects = useMemo(
    () => [...projects].sort((a, b) => (a.directoryOrder ?? 999) - (b.directoryOrder ?? 999)),
    []
  );
  const totalProjectPages = Math.ceil(homepageProjects.length / projectPageSize);
  const safeProjectPage = Math.min(projectPage, totalProjectPages || 1);
  const projectStart = (safeProjectPage - 1) * projectPageSize;
  const projectEnd = Math.min(projectStart + projectPageSize, homepageProjects.length);
  const visibleProjects = homepageProjects.slice(projectStart, projectEnd);

  useEffect(() => {
    setProjectPage((page) => Math.min(page, totalProjectPages || 1));
  }, [totalProjectPages]);

  return (
    <>
      <section className="hero-section hero-landing">
        <div className="container hero-landing-inner">
          <div className="hero-copy hero-landing-copy">
            <span className="eyebrow">{contact.brokerName} | {contact.role}</span>
            <h1>Find the right DMCI home with broker-guided assistance</h1>
            <p>Get a clearer path from project shortlist to computation, availability check, site viewing, and reservation guidance.</p>
            <div className="hero-proof">
              <span>Licensed Broker</span>
              <span>Latest Computation</span>
              <span>Site Viewing Support</span>
            </div>
            <div className="hero-actions center">
              <Button to="/request-computation">Request Computation</Button>
              <Button to="/projects" variant="secondary">Explore Projects</Button>
              <Button to="/book-viewing" variant="ghost">Book Viewing</Button>
            </div>
          </div>
        </div>
      </section>

      <QuickSearch />
      <BrokerTrustStrip />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Project Highlights" title="Browse DMCI Homes Options" text="Shortlist projects by location, turnover, and unit type. Ask Luisa for the latest computation and confirmed availability before deciding." />
          <div className="home-project-toolbar">
            <p className="pagination-summary">
              Page {safeProjectPage} of {totalProjectPages} &middot; Showing projects {projectStart + 1} to {projectEnd} of {homepageProjects.length} approved projects
            </p>
            <Link to="/projects">Open full project directory</Link>
          </div>
          <ProjectGrid projects={visibleProjects} />
          <HomeProjectPagination currentPage={safeProjectPage} totalPages={totalProjectPages} onPageChange={setProjectPage} />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeader eyebrow="Locations" title="Browse by Location" text="Explore options by city and ask Luisa for project recommendations." />
          <div className="location-grid">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} count={projects.filter((project) => project.location === location.name).length} />
            ))}
          </div>
        </div>
      </section>

      <StatusChips />
      <AboutCompact />
      <BuyerJourney />
      <HomeFAQ />

      <section className="section">
        <div className="container narrow">
          <DemoForm
            title="Request Latest Computation"
            subtitle="Luisa can help confirm updated computation, payment terms, and availability."
            fields={computationFields}
            storageKey="dmci_leads"
            submitLabel="Send Computation Request"
            required={["fullName", "location", "project", "unitType", "budgetRange", "purpose", "contactMethod", "message"]}
            inquiryType="Request Computation"
          />
        </div>
      </section>

      <PreviewSections />
      <FinalCTA />
    </>
  );
}

function BrokerTrustStrip() {
  const trustItems = [
    { label: "Broker", value: contact.brokerName },
    { label: "Role", value: contact.role },
    { label: "PRC License", value: contact.prcLicense },
    { label: "Office", value: contact.office }
  ];

  return (
    <section className="section compact-section broker-trust-strip" aria-labelledby="broker-trust-heading">
      <div className="container">
        <div className="content-panel trust-panel">
          <div>
            <span className="eyebrow">Broker Trust</span>
            <h2 id="broker-trust-heading">Licensed buyer assistance for DMCI inquiries</h2>
            <p>Use this website to shortlist projects, request current details, and coordinate next steps with Luisa. Final prices, promos, availability, and terms must still be confirmed.</p>
          </div>
          <div className="trust-fact-grid">
            {trustItems.map((item) => (
              <span key={item.label}><strong>{item.label}</strong>{item.value}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Button to="/about" variant="secondary">About Luisa</Button>
            <Button to="/disclaimer" variant="ghost">Read Disclaimer</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickSearch() {
  const [filters, setFilters] = useState({ location: "", status: "", unitType: "", purpose: "", budget: "" });
  const matches = useMemo(() => projects.filter((project) => (
    (!filters.location || project.location === filters.location) &&
    (!filters.status || project.status === filters.status) &&
    (!filters.unitType || project.unitTypes.includes(filters.unitType)) &&
    (!filters.purpose || project.purposeTags.includes(filters.purpose))
  )), [filters]);

  function update(event) {
    setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  return (
    <section className="quick-search">
      <div className="container search-panel">
        <div>
          <span className="eyebrow">Find Your Property</span>
          <h2>Search Your DMCI Home</h2>
          <p>Filter project options by location, unit type, status, purpose, and budget range.</p>
        </div>
        <div className="search-fields">
          <label className="sr-only" htmlFor="quick-location">Preferred Location</label>
          <select id="quick-location" name="location" value={filters.location} onChange={update}><option value="">Preferred Location</option>{locations.map((item) => <option key={item.name}>{item.name}</option>)}</select>
          <label className="sr-only" htmlFor="quick-status">Project Status</label>
          <select id="quick-status" name="status" value={filters.status} onChange={update}><option value="">Status</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-unit-type">Unit Type</label>
          <select id="quick-unit-type" name="unitType" value={filters.unitType} onChange={update}><option value="">Unit Type</option>{unitTypes.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-purpose">Buyer Purpose</label>
          <select id="quick-purpose" name="purpose" value={filters.purpose} onChange={update}><option value="">Purpose</option>{purposes.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-budget">Budget Range</label>
          <select id="quick-budget" name="budget" value={filters.budget} onChange={update}><option value="">Budget Range</option><option>Still checking</option><option>Entry level</option><option>Mid range</option><option>Premium range</option></select>
        </div>
        <div className="search-result-row">
          <Button to="/projects">Find Matching Projects ({matches.length})</Button>
          <Link to="/contact">Not sure? Ask Luisa for recommendations</Link>
        </div>
      </div>
    </section>
  );
}

function HomeProjectPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination home-pagination" aria-label="Homepage project pagination">
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={page === currentPage ? "active" : ""}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={`Show homepage projects page ${page}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </nav>
  );
}

function StatusChips() {
  const chips = ["Ready For Occupancy", "Preselling", "2026 Turnover", "2027 Turnover", "2028 Turnover", "2029 Turnover", "Coming Soon"];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Status / Turnover" title="Browse by Timeline" />
        <div className="status-chips">{chips.map((chip) => <Link key={chip} to="/projects">{chip}</Link>)}</div>
      </div>
    </section>
  );
}

export function AboutCompact() {
  return (
    <section className="section about-compact">
      <div className="container about-card">
        <div className="portrait-panel">
          <img src="/assets/img/luisa-corral.jpg" alt={`${contact.brokerName} portrait`} loading="lazy" />
        </div>
        <div className="about-details">
          <span className="eyebrow">Why Work With Luisa</span>
          <h2>Guidance from inquiry to reservation</h2>
          <p>Project matching, computations, availability checks, viewing, and reservation support.</p>
          <div className="credential-grid">
            {["Licensed broker", "Latest computation", "Project matching", "Viewing support", "Reservation guide", "OFW/local buyers"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions">
            <Button to="/contact">Talk to Luisa</Button>
            <Button to="/about" variant="secondary">About Luisa</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyerJourney() {
  const steps = ["Social media visitor", "Browse projects", "Request latest computation", "Check availability", "Book viewing or talk to Luisa", "Reservation guidance"];
  return (
    <section className="section soft">
      <div className="container">
        <SectionHeader eyebrow="Buyer Journey" title="Simple Steps with Guidance" />
        <div className="timeline">{steps.map((step, index) => <div key={step}><strong>{index + 1}</strong><p>{step}</p></div>)}</div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const faqs = [
    {
      question: "Are the prices and promos final?",
      answer: "No. Prices, promos, terms, and availability can change. Ask Luisa for the latest confirmed computation before making a decision."
    },
    {
      question: "Can I reserve from this website?",
      answer: "This site is for inquiry assistance and preparation. Reservation should proceed only after confirmed availability, official computation, and verified payment instructions."
    },
    {
      question: "Can Luisa help compare projects by city?",
      answer: "Yes. Share your location, budget, unit type, timeline, and buyer purpose so Luisa can recommend projects to compare."
    },
    {
      question: "Are online form submissions live leads already?",
      answer: "The current forms are validated for preview and local storage. A production email, CRM, or database endpoint should be connected before relying on online submissions operationally."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Buyer Questions Before You Decide" text="Quick checks for safer inquiry, computation, viewing, and reservation preparation." />
        <div className="card-grid">
          {faqs.map((faq) => (
            <article className="info-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewSections() {
  const tourProjects = projects
    .filter((project) => (project.videoTourUrl || project.videoTourEmbedUrl) && (project.thumbnail || project.image))
    .slice(0, 5);

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Virtual Tours" title="Preview Model Units and Amenities" />
          <div className="card-grid five">
            {tourProjects.map((project) => (
              <VideoTourCard
                key={project.slug}
                title={`${project.name} AVP / Virtual Tour`}
                unitType={project.location}
                image={project.thumbnail || project.image}
                to={`/projects/${project.slug}#views`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHeader eyebrow="Buyer's Guide" title="Read Before Reserving" />
          <div className="card-grid">{guideCards.slice(0, 6).map((guide) => <GuideCard key={guide.id} {...guide} />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Promos & Updates" title="Ask for Current Terms" text="Promo details subject to confirmation." />
          <div className="card-grid">{promos.map((promo) => <PromoCard key={promo.id} promo={promo} />)}</div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHeader eyebrow="Buyer Assistance" title="What You Can Ask Luisa" text="Use this site as a safe inquiry starting point before making any reservation decision." />
          <div className="card-grid">
            <article className="info-card"><h3>Computation Review</h3><p>Ask for updated sample computation, payment terms, and promo confirmation.</p></article>
            <article className="info-card"><h3>Availability Check</h3><p>Request current unit availability and turnover details before shortlisting.</p></article>
            <article className="info-card"><h3>Viewing Coordination</h3><p>Schedule an on-site viewing or online consultation with broker guidance.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to find the right DMCI property?</h2>
        <p>Start with a safe inquiry and request updated details before deciding.</p>
        <div className="hero-actions center">
          <Button to="/request-computation">Request Latest Computation</Button>
          <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
          <Button to="/contact" variant="ghost">Message Luisa</Button>
        </div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}
