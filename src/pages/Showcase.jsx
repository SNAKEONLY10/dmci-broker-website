import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projectChecklist, projectCompletionPlan } from "../data/projectChecklist";

const audiences = ["Local buyers", "OFWs", "Investors", "Families", "First-time condo buyers", "Buyers comparing RFO and preselling projects"];

const journey = [
  "Facebook/Instagram visitor",
  "Website homepage",
  "Search projects by location/unit/status",
  "View project detail",
  "Request latest computation",
  "Check availability",
  "Book site viewing",
  "Message Luisa",
  "Reservation guidance"
];

const features = [
  "Premium broker homepage",
  "DMCI-style project directory",
  "Project detail pages",
  "Location browsing",
  "Status/turnover browsing",
  "Check availability form",
  "Request computation form",
  "Book viewing form",
  "Buyer's guide",
  "Reservation requirements",
  "Virtual tours section",
  "Promos & updates",
  "Resale units page",
  "Mobile sticky CTA"
];

const pages = [
  ["Home", "/", "Premium first impression with buyer actions and broker contact."],
  ["Projects", "/projects", "Searchable project directory with safe availability and computation CTAs."],
  ["Project Detail", "/projects/kalea-heights", "Full showcase page for each project with overview, units, amenities, and inquiry flow."],
  ["Locations", "/locations", "Browse project options by city or area."],
  ["Availability", "/availability", "Form for asking Luisa to confirm current unit availability."],
  ["Request Computation", "/request-computation", "Lead form for latest computation and payment term requests."],
  ["Book Viewing", "/book-viewing", "Viewing request form for site visits or online consultations."],
  ["Buyer's Guide", "/buyers-guide", "Educational content for buyers before reserving."],
  ["Reservation Requirements", "/reservation-requirements", "Checklist-style guidance for reservation preparation."],
  ["Virtual Tours", "/virtual-tours", "Lightweight section for future tour links and thumbnails."],
  ["Promos", "/promos", "Safe promo/update page with confirmation reminders."],
  ["Resale Units", "/resale-units", "Future-friendly page for resale inquiries."],
  ["About Luisa", "/about", "Broker profile and buyer assistance promise."],
  ["Contact", "/contact", "Message and inquiry options for Luisa."]
];

const demoLinks = [
  ["Homepage", "/"],
  ["Projects", "/projects"],
  ["Kalea Heights sample", "/projects/kalea-heights"],
  ["Request Computation", "/request-computation"],
  ["Check Availability", "/availability"],
  ["Book Viewing", "/book-viewing"]
];

const workingItems = [
  "Responsive broker-branded homepage",
  "Searchable project directory",
  "Shared project detail template for every project",
  "Rich Kalea Heights reference sample",
  "Frontend lead forms with validation",
  "Mobile sticky CTA",
  "Vercel SPA routing configuration"
];

const demoOnlyItems = [
  "Placeholder images until approved Drive assets are selected",
  "Sample project content except rich Kalea reference data",
  "Demo contact details until Luisa confirms final links",
  "Forms save to browser localStorage only",
  "No live inventory or guaranteed price feed"
];

const driveFolders = ["RFO Projects", "KLH", "ODT", "MCC", "ANH", "SLC", "MLP 2", "Rent-to-own", "Other project/code folders"];

const limitations = [
  "Placeholder images only",
  "Placeholder contact details",
  "Sample project data only",
  "No real-time availability yet",
  "No backend/email notifications yet",
  "Forms currently save demo submissions to browser localStorage only",
  "Final pricing/availability must be confirmed by Luisa or official DMCI channels"
];

const assetPaths = [
  "public/assets/projects/[project-slug]/hero.jpg",
  "public/assets/projects/[project-slug]/thumbnail.jpg",
  "public/assets/projects/[project-slug]/gallery-1.jpg",
  "public/assets/projects/[project-slug]/gallery-2.jpg",
  "public/assets/projects/[project-slug]/master-plan.jpg",
  "public/assets/projects/[project-slug]/site-progress.jpg",
  "public/assets/projects/[project-slug]/brochure.pdf"
];

const checklist = [
  "Professional profile photo",
  "Official phone number",
  "Email address",
  "Facebook/Messenger link",
  "Viber/WhatsApp number",
  "Instagram link",
  "Preferred website/domain",
  "Preferred brand name/logo",
  "Priority DMCI projects",
  "Approved project photos",
  "Approved project videos/virtual tours",
  "Current promos if any",
  "Real testimonials if available",
  "Final disclaimer/contact details"
];

const nextPhase = [
  "Replace placeholders with official photos",
  "Finalize project list",
  "Finalize project info",
  "Connect contact links",
  "Connect forms to email/CRM/backend",
  "Add Vercel preview deployment",
  "Connect domain",
  "Optional future admin lead dashboard"
];

export default function Showcase() {
  return (
    <>
      <section className="showcase-hero">
        <div className="container showcase-hero-grid">
          <div>
            <span className="eyebrow">Client Presentation</span>
            <h1>DMCI Broker Website Showcase</h1>
            <p>A premium DMCI Homes-style buyer assistance website concept for Luisa Corral, Sales Director and Licensed Real Estate Broker.</p>
            <div className="hero-actions">
              <Button to="/">View Homepage</Button>
              <Button to="/projects" variant="secondary">Browse Projects</Button>
              <Button to="/request-computation" variant="ghost">Test Computation Form</Button>
            </div>
          </div>
          <div className="showcase-summary-card">
            <strong>Positioning</strong>
            <p>Inspired by property discovery workflows, personalized for Luisa as the broker, and focused on buyer trust and lead generation.</p>
          </div>
        </div>
      </section>

      <ShowcaseSection eyebrow="Concept" title="Website Concept">
        <div className="content-panel showcase-copy">
          <p>This website is designed as a personal buyer assistance platform for DMCI Homes clients. It combines project browsing, location search, buyer education, computation requests, availability checks, site viewing booking, and direct broker contact with Luisa Corral.</p>
          <div className="showcase-points">
            <span>Inspired by DMCI Homes-style project discovery</span>
            <span>Personalized for Luisa as broker</span>
            <span>Not an official corporate clone</span>
            <span>Focused on buyer trust and lead generation</span>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Demo Pages" title="Open Important Demo Pages">
        <div className="quick-link-grid">
          {demoLinks.map(([label, to]) => <Button key={to} to={to} variant="secondary">{label}</Button>)}
        </div>
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Current Build" title="What Is Already Working">
        <CardGrid items={workingItems} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Demo Scope" title="What Is Demo Only">
        <Checklist items={demoOnlyItems} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Audience" title="Target Audience">
        <CardGrid items={audiences} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Buyer Flow" title="Buyer Journey">
        <div className="showcase-timeline">{journey.map((item, index) => <div key={item}><strong>{index + 1}</strong><p>{item}</p></div>)}</div>
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Features" title="Key Features Included">
        <CardGrid items={features} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Pages" title="Pages Included">
        <div className="page-map-grid">
          {pages.map(([label, to, text]) => (
            <article className="info-card" key={to}>
              <h3>{label}</h3>
              <p>{text}</p>
              <Button to={to} variant="secondary">Open Page</Button>
            </article>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Demo Scope" title="Demo Limitations">
        <Checklist items={limitations} />
        <DisclaimerBanner />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Assets" title="Google Drive Asset Plan">
        <div className="content-panel">
          <p>The Google Drive Marketing Materials folder is confirmed. Official photos and videos from this folder can be used after selecting approved assets. Images should be compressed and web-optimized before final use. Large videos should not be committed directly to the repo; use thumbnails and external links or hosted video.</p>
          <p><strong>Confirmed folder:</strong> <a href="https://drive.google.com/drive/folders/19CWq_YMieSFTOx9dpPIsE-dN75yUxoPr" target="_blank" rel="noopener">Marketing Materials</a></p>
          <div className="showcase-points">
            {driveFolders.map((folder) => <span key={folder}>{folder}</span>)}
          </div>
          <pre className="asset-plan">{assetPaths.join("\n")}</pre>
        </div>
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Checklist" title="Asset Checklist Needed From Luisa">
        <Checklist items={checklist} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Project System" title="Project Content Completion Plan">
        <div className="content-panel showcase-copy">
          <p>The website is designed so projects can be completed in batches. Kalea Heights can be used as the rich sample. Other projects use the same professional template while official details and Google Drive assets are collected.</p>
          <div className="completion-plan-grid">
            {projectCompletionPlan.map((item) => (
              <article className="info-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
          <p className="safety-note">This avoids manually rebuilding every project page. We only update data and assets per project.</p>
        </div>
        <h3 className="showcase-subheading">Per-Project Checklist</h3>
        <Checklist items={projectChecklist} />
      </ShowcaseSection>

      <ShowcaseSection eyebrow="Approval" title="Next Phase After Approval">
        <CardGrid items={nextPhase} />
      </ShowcaseSection>

      <section className="final-cta">
        <div className="container">
          <h2>Ready for the next phase?</h2>
          <p>After design approval, we can replace placeholders, finalize details, and connect real inquiry workflows.</p>
          <div className="hero-actions center">
            <Button to="/contact">Approve Design Direction</Button>
            <Button to="/contact" variant="secondary">Request Revisions</Button>
            <Button to="/showcase" variant="ghost">Prepare Official Assets</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ShowcaseSection({ eyebrow, title, children }) {
  return (
    <section className="section showcase-section">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ items }) {
  return <div className="showcase-card-grid">{items.map((item) => <article className="info-card" key={item}><h3>{item}</h3></article>)}</div>;
}

function Checklist({ items }) {
  return <div className="showcase-checklist">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}
