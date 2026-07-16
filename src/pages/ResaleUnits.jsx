import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  FileSearch,
  HandCoins,
  House,
  KeyRound,
  Scale,
  SearchCheck,
  ShieldCheck
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const resalePaths = [
  {
    icon: HandCoins,
    label: "Owner resale",
    title: "A unit offered by its current owner",
    text: "The seller's authority, property status, price basis, payment history, taxes, fees, and transfer process require separate verification."
  },
  {
    icon: KeyRound,
    label: "Re-opened unit",
    title: "A unit returned to current project inventory",
    text: "Luisa will check whether the unit has returned to current DMCI Homes inventory and confirm its price, term, condition, and reservation process."
  }
];

const verificationSteps = [
  [SearchCheck, "Identify the exact property", "Confirm the project, building, unit number, floor, size, parking, and current occupancy or turnover status."],
  [BadgeCheck, "Verify who may offer it", "Confirm the owner, authorized representative, or current DMCI Homes inventory status before discussing payment."],
  [FileSearch, "Review documents and account status", "Check the applicable title, contract, payment, association, tax, financing, and transfer records with qualified parties."],
  [Scale, "Compare the complete cost", "Include the agreed price, unpaid balance, taxes, transfer expenses, fees, financing, and timing in the review."],
  [ShieldCheck, "Use a documented transaction process", "Do not release money until the authority, documents, conditions, and verified payment instructions are clear."]
];

const diligenceItems = [
  "Seller or representative identity and authority",
  "Exact unit, parking, inclusions, and current condition",
  "Ownership, contract, payment, and encumbrance status",
  "Association dues, utilities, taxes, and other unsettled amounts",
  "Transfer, cancellation, assignment, or DMCI Homes approval requirements",
  "Complete price, fees, due dates, financing, and payment instructions"
];

export default function ResaleUnits() {
  const [selectedSlug, setSelectedSlug] = useState(projects[0]?.slug || "");
  const selectedProject = projects.find((project) => project.slug === selectedSlug) || projects[0];
  const inquiryQuery = new URLSearchParams({
    project: selectedProject.name,
    location: selectedProject.location,
    inquiryType: "Resale Inquiry",
    message: `Please check whether there is a verified resale or re-opened unit reference for ${selectedProject.name}.`
  }).toString();

  return (
    <div className="support-page resale-page">
      <section className="support-hero resale-hero">
        <div className="container support-hero-inner">
          <nav className="support-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Resale &amp; Re-opened Units</span>
          </nav>
          <div className="support-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Secondary-Market Guidance</span>
            <h1>Verify the unit before treating it as available.</h1>
            <p>
              Resale and re-opened units follow different transaction paths. Start with the exact property,
              source, documents, complete cost, and current authority to offer it.
            </p>
            <ul className="support-hero-points" aria-label="Resale guidance priorities">
              <li><Building2 size={17} aria-hidden="true" /> Exact property identification</li>
              <li><FileSearch size={17} aria-hidden="true" /> Document and account review</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Verified transaction process</li>
            </ul>
            <div className="support-hero-actions">
              <Button to="#project-interest">Start an Inquiry <ArrowRight size={17} aria-hidden="true" /></Button>
              <Button to="/projects" variant="secondary">Browse Approved Projects</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="resale-availability-notice" role="note">
        <div className="container">
          <CircleAlert size={22} aria-hidden="true" />
          <p><strong>No live resale inventory is published on this website.</strong> An inquiry starts a verification request; it does not hold a unit or confirm that one is available.</p>
        </div>
      </div>

      <nav className="support-jump-nav" aria-label="Resale guidance sections">
        <div className="container">
          <strong>On this page</strong>
          <div>
            <a href="#resale-paths">Know the Difference</a>
            <a href="#project-interest">Project Inquiry</a>
            <a href="#verification-process">Verification Process</a>
            <a href="#due-diligence">Due Diligence</a>
          </div>
        </div>
      </nav>

      <section className="section resale-paths" id="resale-paths">
        <div className="container">
          <SectionHeader
            eyebrow="Start With the Right Path"
            title="Resale and re-opened do not mean the same thing"
            text="The source of the unit determines what must be verified and which transaction process may apply."
          />
          <div className="resale-path-grid">
            {resalePaths.map(({ icon: Icon, label, title, text }) => (
              <article key={label} data-reveal="card">
                <span><Icon size={25} aria-hidden="true" /></span>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft resale-project-interest" id="project-interest">
        <div className="container resale-project-layout">
          <div className="resale-project-controls" data-reveal="text-group">
            <span className="eyebrow">Project Interest</span>
            <h2>Choose a project to begin verification.</h2>
            <p>
              Select one of the 18 approved projects. Luisa can check whether a credible resale or re-opened
              unit reference is available for review.
            </p>
            <label htmlFor="resale-project-select">Approved project</label>
            <select id="resale-project-select" value={selectedSlug} onChange={(event) => setSelectedSlug(event.target.value)}>
              {[...new Set(projects.map((project) => project.location))].map((location) => (
                <optgroup label={location} key={location}>
                  {projects.filter((project) => project.location === location).map((project) => (
                    <option value={project.slug} key={project.slug}>{project.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="resale-project-actions">
              <Button to={`/contact?${inquiryQuery}`}>Ask About This Project</Button>
              <Button to={`/projects/${selectedProject.slug}`} variant="secondary">View Project Details</Button>
            </div>
          </div>

          <article className="resale-selected-project" data-reveal="section">
            <div className="resale-selected-visual">
              <ImagePlaceholder
                src={selectedProject.thumbnail || selectedProject.image}
                label={`${selectedProject.name} project preview`}
                compact
                variant="gallery"
              />
            </div>
            <div>
              <small>{selectedProject.location}</small>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.status} | {selectedProject.unitTypes.slice(0, 4).join(", ")}</p>
              <div className="resale-selected-note">
                <CircleAlert size={18} aria-hidden="true" />
                <span><strong>Inquiry only.</strong> No resale or re-opened unit is confirmed by this selection.</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section resale-verification" id="verification-process">
        <div className="container resale-verification-layout">
          <div className="support-section-heading" data-reveal="text-group">
            <span className="eyebrow">Verification Process</span>
            <h2>Move from a lead to a reviewable property.</h2>
            <p>A screenshot or forwarded message is not enough. Each step should produce a clearer, document-backed answer.</p>
          </div>
          <ol className="resale-verification-list">
            {verificationSteps.map(([Icon, title, text], index) => (
              <li key={title} data-reveal="text">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={22} aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section soft resale-diligence" id="due-diligence">
        <div className="container resale-diligence-layout">
          <div data-reveal="text-group">
            <span className="eyebrow">Before Commitment</span>
            <h2>Build a complete due-diligence file.</h2>
            <p>
              The exact legal, tax, DMCI Homes, financing, and transfer requirements depend on the property
              and transaction. Engage qualified professionals where necessary.
            </p>
            <Button to="/contact?inquiryType=Resale%20Inquiry">Discuss a Resale Inquiry</Button>
          </div>
          <ul className="resale-diligence-list" data-reveal="section">
            {diligenceItems.map((item) => <li key={item}><Check size={17} aria-hidden="true" /> {item}</li>)}
          </ul>
        </div>
      </section>

      <div className="container support-disclaimer-wrap">
        <DisclaimerBanner text="This page is for inquiry and planning support only. It is not live inventory, a property listing, legal advice, or a confirmed offer. Verify ownership or authority, documents, account status, price, fees, availability, and payment instructions before proceeding." />
      </div>
    </div>
  );
}
