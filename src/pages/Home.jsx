import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/Button";
import { DemoForm } from "../components/LeadForm";
import { LocationCard } from "../components/LocationCard";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { GuideCard, PromoCard, VideoTourCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projects, unitTypes, statuses } from "../data/projects";
import { locations } from "../data/locations";
import { guideCards } from "../data/guides";
import { promos } from "../data/promos";
import { contact } from "../data/contact";
import { useResponsiveProjectPageSize } from "../hooks/useResponsiveProjectPageSize";

const computationFields = [
  { name: "fullName", label: "Full Name" },
  { name: "contactNumber", label: "Mobile / Viber", type: "tel" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "location", label: "City / Location", options: locations.map((item) => item.name), helper: "This narrows Interested Project to the selected city." },
  { name: "project", label: "Interested Project", options: projects.map((item) => item.name) },
  { name: "unitType", label: "Unit Type", options: unitTypes },
  { name: "budgetRange", label: "Budget Range", options: ["Still exploring", "Under PHP 6M", "PHP 6M - 10M", "PHP 10M - 15M", "PHP 15M and above"] },
  {
    name: "purpose",
    label: "Buyer Goal",
    options: [
      { value: "Own Use", label: "For Residence" },
      { value: "Investment", label: "For Investment" },
      { value: "Family", label: "For Family Living" },
      { value: "Rental", label: "For Rental Potential" }
    ]
  },
  { name: "contactMethod", label: "Preferred Contact Method", options: ["Call", "Viber", "Email", "SMS"] },
  { name: "message", label: "Message", type: "textarea", full: true }
];

export default function Home() {
  const [buyerGoal, setBuyerGoal] = useState("Own Use");
  const projectPageSize = useResponsiveProjectPageSize();
  const homepageProjects = useMemo(
    () => projects
      .filter((project) => project.purposeTags.includes(buyerGoal))
      .sort((a, b) => (a.directoryOrder ?? 999) - (b.directoryOrder ?? 999)),
    [buyerGoal]
  );
  const visibleProjects = homepageProjects.slice(0, projectPageSize);
  const goalCopy = buyerGoal === "Investment"
    ? {
      title: "Compare DMCI properties with your investment goals in mind",
      text: "Review location, turnover, unit mix, and payment options with current details confirmed before you decide.",
      projectTitle: "Projects for investment consideration",
      projectText: "A focused shortlist for comparing location, turnover, unit options, and payment terms.",
      button: "View Investment Options"
    }
    : {
      title: "Find a DMCI home that fits the way you live",
      text: "Explore communities by location, unit type, and turnover, with clear guidance from shortlist to viewing.",
      projectTitle: "Homes selected for residence",
      projectText: "Compare communities, unit options, and turnover schedules for your own use.",
      button: "View Residence Options"
    };
  const projectDirectoryLink = `/projects?purpose=${encodeURIComponent(buyerGoal)}`;

  return (
    <>
      <section className="hero-section hero-landing">
        <div className="container hero-landing-inner">
          <div className="hero-copy hero-landing-copy" data-reveal="hero-text">
            <span className="eyebrow">{contact.brokerName} | Licensed Real Estate Broker</span>
            <h1>{goalCopy.title}</h1>
            <p>{goalCopy.text}</p>
            <div className="home-intent-switch" role="group" aria-label="Choose your property goal">
              <button
                type="button"
                className={buyerGoal === "Own Use" ? "active" : ""}
                aria-pressed={buyerGoal === "Own Use"}
                onClick={() => setBuyerGoal("Own Use")}
              >
                <span>Residence</span>
                <small>A home to live in</small>
              </button>
              <button
                type="button"
                className={buyerGoal === "Investment" ? "active" : ""}
                aria-pressed={buyerGoal === "Investment"}
                onClick={() => setBuyerGoal("Investment")}
              >
                <span>Investment</span>
                <small>A property to compare</small>
              </button>
            </div>
            <div className="hero-proof">
              <span>PRC Licensed Broker</span>
              <span>Direct DMCI Guidance</span>
            </div>
            <div className="hero-actions center">
              <Button to={projectDirectoryLink}>{goalCopy.button}</Button>
              <Button to="/request-computation" variant="secondary">Request Computation</Button>
            </div>
          </div>
        </div>
      </section>

      <QuickSearch buyerGoal={buyerGoal} onBuyerGoalChange={setBuyerGoal} />
      <BrokerTrustStrip />

      <section className="section home-featured-projects">
        <div className="container">
          <SectionHeader eyebrow="Selected Projects" title={goalCopy.projectTitle} text={goalCopy.projectText} />
          <div className="home-project-toolbar" data-reveal="text-group">
            <p className="pagination-summary" aria-live="polite">
              Showing {visibleProjects.length} of {homepageProjects.length} approved projects for this goal
            </p>
            <Link to={projectDirectoryLink}>View the complete shortlist</Link>
          </div>
          <ProjectGrid key={`home-projects-${buyerGoal}-${projectPageSize}`} projects={visibleProjects} />
        </div>
      </section>

      <section className="section soft home-locations">
        <div className="container">
          <SectionHeader eyebrow="Locations" title="Explore by city" text="See approved DMCI projects in the areas that matter to you." />
          <div className="location-grid">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} count={projects.filter((project) => project.location === location.name).length} />
            ))}
          </div>
        </div>
      </section>

      <AboutCompact />
      <BuyerJourney />
      <HomeFAQ />

      <section className="section">
        <div className="container narrow">
          <DemoForm
            title="Request a current computation"
            subtitle="Share your preferred project and unit type. Luisa will confirm the latest figures, terms, and availability."
            fields={computationFields}
            storageKey="dmci_leads"
            submitLabel="Send Computation Request"
            required={["fullName", "contactNumber", "email", "location", "project", "unitType", "budgetRange", "purpose", "contactMethod", "message"]}
            inquiryType="Request Computation"
            projectCatalog={projects}
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
        <div className="content-panel trust-panel" data-reveal="text-group">
          <div>
            <span className="eyebrow">Professional Guidance</span>
            <h2 id="broker-trust-heading">Licensed guidance, direct answers</h2>
            <p>Work directly with Luisa to compare projects, review current figures, and coordinate your next step.</p>
          </div>
          <div className="trust-fact-grid">
            {trustItems.map((item) => (
              <span key={item.label}><strong>{item.label}</strong>{item.value}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Button to="/about" variant="secondary">View Broker Profile</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickSearch({ buyerGoal, onBuyerGoalChange }) {
  const [filters, setFilters] = useState({ location: "", status: "", unitType: "", purpose: buyerGoal });
  const matches = useMemo(() => projects.filter((project) => (
    (!filters.location || project.location === filters.location) &&
    (!filters.status || project.status === filters.status) &&
    (!filters.unitType || project.unitTypes.includes(filters.unitType)) &&
    (!filters.purpose || project.purposeTags.includes(filters.purpose))
  )), [filters]);

  useEffect(() => {
    setFilters((current) => ({ ...current, purpose: buyerGoal }));
  }, [buyerGoal]);

  function update(event) {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
    if (name === "purpose" && value) onBuyerGoalChange(value);
  }

  const query = new URLSearchParams(
    Object.entries(filters).filter(([, value]) => value)
  ).toString();
  const projectSearchLink = query ? `/projects?${query}` : "/projects";

  return (
    <section className="quick-search">
      <div className="container search-panel" data-reveal="text-group">
        <div>
          <span className="eyebrow">Refine Your Shortlist</span>
          <h2>Find projects suited to your plans</h2>
          <p>Filter the approved directory by location, status, unit type, and buyer goal.</p>
        </div>
        <div className="search-fields">
          <label className="sr-only" htmlFor="quick-location">Preferred Location</label>
          <select id="quick-location" name="location" value={filters.location} onChange={update}><option value="">Preferred Location</option>{locations.map((item) => <option key={item.name}>{item.name}</option>)}</select>
          <label className="sr-only" htmlFor="quick-status">Project Status</label>
          <select id="quick-status" name="status" value={filters.status} onChange={update}><option value="">Status</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-unit-type">Unit Type</label>
          <select id="quick-unit-type" name="unitType" value={filters.unitType} onChange={update}><option value="">Unit Type</option>{unitTypes.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-purpose">Buyer Purpose</label>
          <select id="quick-purpose" name="purpose" value={filters.purpose} onChange={update}>
            <option value="Own Use">For Residence</option>
            <option value="Investment">For Investment</option>
          </select>
        </div>
        <div className="search-result-row">
          <Button to={projectSearchLink}>View {matches.length} Matching Projects</Button>
          <Link to="/contact">Ask Luisa to help refine the shortlist</Link>
        </div>
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
        <div className="about-details" data-reveal="text-group">
          <span className="eyebrow">Your DMCI Broker</span>
          <h2>One point of contact, from shortlist to reservation</h2>
          <p>Luisa helps you compare projects, review current computations, confirm availability, and arrange viewings.</p>
          <div className="credential-grid">
            {["PRC licensed", "Current computations", "Viewing coordination", "Local and OFW buyers"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions">
            <Button to="/contact">Speak with Luisa</Button>
            <Button to="/about" variant="secondary">View Credentials</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyerJourney() {
  const steps = [
    "Share your priorities",
    "Compare a focused shortlist",
    "Review current figures and availability",
    "Arrange a viewing and next steps"
  ];
  return (
    <section className="section soft">
      <div className="container">
        <SectionHeader eyebrow="How It Works" title="A clear path from shortlist to viewing" />
        <div className="timeline" data-reveal="text-group">{steps.map((step, index) => <div key={step}><strong>{index + 1}</strong><p>{step}</p></div>)}</div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const faqs = [
    {
      question: "Are prices and promos current?",
      answer: "Published figures are guides. Luisa confirms the latest price, payment terms, promos, and availability for the unit you are considering."
    },
    {
      question: "Can I reserve a unit online?",
      answer: "Luisa will first confirm availability and the official computation, then guide you through DMCI Homes' authorized reservation process."
    },
    {
      question: "Can Luisa help me compare projects?",
      answer: "Yes. Share your preferred location, budget, unit type, timeline, and goal so she can prepare a focused comparison."
    }
  ];

  return (
    <section className="section">
      <div className="container" data-reveal="text-group">
        <SectionHeader eyebrow="Before You Decide" title="Important questions, answered clearly" />
        <div className="card-grid">
          {faqs.map((faq) => (
            <article className="info-card" key={faq.question} data-reveal="card">
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
      <section className="section home-tours">
        <div className="container">
          <SectionHeader eyebrow="Virtual Tours" title="See the properties before your visit" />
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
          <SectionHeader eyebrow="Buyer's Guide" title="Essential reading before reserving" />
          <div className="card-grid">{guideCards.slice(0, 6).map((guide) => <GuideCard key={guide.id} {...guide} />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Promos & Updates" title="Current offers and payment terms" text="Luisa will confirm the applicable promo for your preferred unit." />
          <div className="card-grid">{promos.map((promo) => <PromoCard key={promo.id} promo={promo} />)}</div>
        </div>
      </section>
    </>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container" data-reveal="text-group">
        <h2>Ready to discuss your shortlist?</h2>
        <p>Send your preferences and receive current project details from Luisa.</p>
        <div className="hero-actions center">
          <Button to="/request-computation">Request Computation</Button>
          <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
        </div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}
