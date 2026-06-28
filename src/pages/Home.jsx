import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { ContactButtons } from "../components/ContactButtons";
import { DemoForm } from "../components/LeadForm";
import { LocationCard } from "../components/LocationCard";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { GuideCard, PromoCard, TestimonialCard, VideoTourCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projects, unitTypes, purposes } from "../data/projects";
import { locations } from "../data/locations";
import { guideCards } from "../data/guides";
import { promos } from "../data/promos";
import { contact } from "../data/contact";

const computationFields = [
  { name: "fullName", label: "Full Name" },
  { name: "contactNumber", label: "Contact Number", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "Preferred Location", options: locations.map((item) => item.name) },
  { name: "project", label: "Preferred Project", options: projects.map((item) => item.name) },
  { name: "unitType", label: "Unit Type", options: unitTypes },
  { name: "budgetRange", label: "Budget Range", options: ["Still checking", "Entry level", "Mid range", "Premium range"] },
  { name: "purpose", label: "Purpose", options: purposes },
  { name: "contactMethod", label: "Preferred Contact Method", options: ["Messenger", "Viber", "WhatsApp", "Call", "Email"] },
  { name: "message", label: "Message", type: "textarea", full: true }
];

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 6);
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Luisa Corral's DMCI Homes Buyer Assistance Platform</span>
            <h1>Find Your DMCI Home with a Licensed Real Estate Broker</h1>
            <p>Get guided assistance, updated computations, project availability, and site viewing support from Luisa Corral, Sales Director of DMCI Homes.</p>
            <div className="hero-stats" aria-label="Buyer assistance highlights">
              <span><strong>18</strong> project options</span>
              <span><strong>RFO</strong> & preselling guidance</span>
              <span><strong>Safe</strong> inquiry-first flow</span>
            </div>
            <div className="hero-actions">
              <Button to="/request-computation">Request Latest Computation</Button>
              <Button to="/projects" variant="secondary">Browse DMCI Projects</Button>
              <Button to="/book-viewing" variant="ghost">Book a Site Viewing</Button>
            </div>
            <div className="trust-badges">
              {["Licensed Real Estate Broker", "DMCI Homes Sales Director", "Buyer Assistance", "RFO & Preselling Guidance"].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="official-reference">
              <span>Official DMCI Homes updates</span>
              <a href={contact.officialDmciFacebook} target="_blank" rel="noopener">Facebook</a>
              <a href={contact.officialDmciWebsite} target="_blank" rel="noopener">Corporate Site</a>
            </div>
          </div>
          <div className="hero-visual premium-hero-card" aria-label="Premium property collage preview">
            <picture>
              <source media="(max-width: 760px)" srcSet="/assets/img/premium-dmci-hero-mobile.jpg" />
              <img
                src="/assets/img/premium-dmci-hero.jpg"
                alt="Premium condominium and amenities collage preview"
                width="1500"
                height="1000"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="hero-visual-badge">Premium buyer assistance</div>
            <div className="ask-card">
              <span className="mini">Quick contact</span>
              <strong>Ask Luisa</strong>
              <p>Message for computation, availability, viewing, or reservation guidance.</p>
              <ContactButtons compact />
            </div>
          </div>
        </div>
      </section>

      <QuickSearch />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Featured Projects" title="Browse Premium DMCI Homes Options" text="No fake prices here. Request latest computation and availability confirmation for any project." />
          <ProjectGrid projects={featured} />
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

      <section className="section">
        <div className="container narrow">
          <DemoForm
            title="Request Latest Computation"
            subtitle="Luisa or her team can help confirm updated computation, payment terms, and availability."
            fields={computationFields}
            storageKey="dmci_leads"
            submitLabel="Send Computation Request"
            required={["fullName", "contactNumber", "email"]}
          />
        </div>
      </section>

      <PreviewSections />
      <FinalCTA />
    </>
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
          <h2>Quick Match Search</h2>
          <p>Filter sample projects client-side, then request confirmation before deciding.</p>
        </div>
        <div className="search-fields">
          <select name="location" value={filters.location} onChange={update}><option value="">Preferred Location</option>{locations.map((item) => <option key={item.name}>{item.name}</option>)}</select>
          <select name="status" value={filters.status} onChange={update}><option value="">Status</option><option>RFO</option><option>Preselling</option><option>Coming Soon</option></select>
          <select name="unitType" value={filters.unitType} onChange={update}><option value="">Unit Type</option>{unitTypes.map((item) => <option key={item}>{item}</option>)}</select>
          <select name="purpose" value={filters.purpose} onChange={update}><option value="">Purpose</option>{purposes.map((item) => <option key={item}>{item}</option>)}</select>
          <select name="budget" value={filters.budget} onChange={update}><option value="">Budget Range</option><option>Still checking</option><option>Entry level</option><option>Mid range</option><option>Premium range</option></select>
        </div>
        <div className="search-result-row">
          <Button to="/projects">Find Matching Projects ({matches.length})</Button>
          <Link to="/contact">Not sure? Ask Luisa for recommendations</Link>
        </div>
      </div>
    </section>
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
          <img src="/assets/img/luisa-corral.jpg" alt="Luisa Corral portrait" loading="lazy" />
        </div>
        <div className="about-details">
          <span className="eyebrow">Why Work With Luisa</span>
          <h2>Compact, personal guidance from inquiry to reservation</h2>
          <p>Luisa Corral assists buyers in finding the right DMCI Homes property through updated computations, project recommendations, site viewing coordination, and reservation guidance.</p>
          <div className="credential-grid">
            {["Licensed broker guidance", "Updated computation assistance", "Project matching by budget and purpose", "Site viewing coordination", "Reservation requirements guidance", "Support for OFW and local buyers"].map((item) => <span key={item}>{item}</span>)}
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
  const steps = ["Choose preferred location/project", "Request latest computation", "Review payment terms and availability", "Schedule site viewing or online consultation", "Prepare reservation requirements", "Reserve your chosen unit"];
  return (
    <section className="section soft">
      <div className="container">
        <SectionHeader eyebrow="Buyer Journey" title="Simple Steps with Guidance" />
        <div className="timeline">{steps.map((step, index) => <div key={step}><strong>{index + 1}</strong><p>{step}</p></div>)}</div>
      </div>
    </section>
  );
}

function PreviewSections() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Virtual Tours" title="Preview Model Units and Amenities" />
          <div className="card-grid five">{["Studio Unit Tour", "1BR Model Unit", "2BR Model Unit", "3BR Model Unit", "Amenities Tour"].map((title) => <VideoTourCard key={title} title={title} unitType="Thumbnail only" />)}</div>
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
          <SectionHeader eyebrow="Testimonials" title="Client Story Placeholders" />
          <div className="card-grid">
            <TestimonialCard quote="Luisa's assistance helped us understand our options clearly." person="Placeholder Buyer" />
            <TestimonialCard quote="The computation request flow was easy to follow." person="Placeholder Investor" />
            <TestimonialCard quote="Site viewing coordination felt organized and professional." person="Placeholder Family" />
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
