import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  House,
  Landmark,
  ListChecks,
  SearchCheck,
  ShieldCheck
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const julyReferenceProjects = projects.filter((project) =>
  project.paymentTerms?.promoCards?.some((card) => card.items?.some((item) => item.includes("July 31, 2026")))
);

const bankLinkedProjects = projects.filter((project) =>
  project.paymentTerms?.promoCards?.some((card) => card.title.includes("Chinabank"))
);

const standardTermProjects = projects.filter((project) =>
  project.paymentTerms?.promoCards?.some((card) => card.title === "Standard Term")
);

const referenceGroups = [
  {
    id: "extended-dp",
    eyebrow: "Dated references",
    title: "Extended down payment structures",
    summary:
      "Selected project records include 12% or 15% down payment references. The payment period, discount, building scope, and eligible units differ by project.",
    status: "Reference expiry: July 31, 2026",
    projects: julyReferenceProjects,
    icon: CalendarDays,
    tone: "gold"
  },
  {
    id: "bank-linked",
    eyebrow: "Bank-linked references",
    title: "5% down payment references",
    summary:
      "Selected project records include a Chinabank-linked structure. Buyer eligibility, bank approval, project scope, and final financing terms still need confirmation.",
    status: "Reference expiry: November 30, 2026",
    projects: bankLinkedProjects,
    icon: Landmark,
    tone: "green"
  },
  {
    id: "standard-term",
    eyebrow: "Standard reference",
    title: "Regular payment structure",
    summary:
      "When a dated promo is not listed, request the current standard computation. The down payment schedule and financing balance still depend on the selected unit.",
    status: "No promo should be assumed",
    projects: standardTermProjects,
    icon: Banknote,
    tone: "blue"
  }
];

const comparisonChecks = [
  ["Exact unit and building", "Confirm the unit number, floor, layout, parking, building, and current availability."],
  ["Price and discount basis", "Review the list price, approved discount, net contract price, and whether the discount has conditions."],
  ["Down payment schedule", "Check the required percentage, reservation deduction, monthly amount, lump sums, and exact due dates."],
  ["Balance and financing", "Confirm the remaining balance, bank or in-house route, indicative rates, and approval requirements."],
  ["Fees beyond the headline", "Include closing fees, move-in charges, taxes, and other applicable costs in the comparison."],
  ["Expiry and eligibility", "Verify the reservation deadline, eligible units, buyer qualifications, and whether offers can be combined."]
];

const programTypes = [
  {
    icon: CircleDollarSign,
    title: "Project sales promo",
    text: "A time-bound offer may adjust the down payment schedule or approved discount for selected units. Always compare the complete computation, not only the headline percentage."
  },
  {
    icon: Landmark,
    title: "Bank-linked offer",
    text: "A lower initial down payment may be tied to a partner bank and its approval process. Financing eligibility and the final balance are separate from unit availability."
  },
  {
    icon: House,
    title: "HomeReady rent-to-own",
    text: "This begins as a lease with an option to buy later. Ask Luisa which completed properties participate and how the lease, purchase option, and credited payments work for the selected unit."
  }
];

const agreementComparison = [
  {
    icon: FileCheck2,
    label: "Purchase commitment first",
    title: "Early move-in",
    text: "The buyer enters the purchase process before moving in. The Contract to Sell, down payment schedule, financing balance, and other purchase obligations apply even though occupancy starts earlier."
  },
  {
    icon: House,
    label: "Lease first, option to buy",
    title: "HomeReady rent-to-own",
    text: "The buyer starts with a lease and receives an option to purchase later. Participating properties, lease credits, purchase price protection, deadlines, and exit terms must be reviewed for the exact offer."
  }
];

const agreementQuestions = [
  "Which agreement will I sign first?",
  "Am I already committed to buy when I move in?",
  "Which payments may be credited toward the purchase?",
  "What happens if I do not continue with the purchase?",
  "Which project, unit, and offer period are currently eligible?"
];

const promoFaqs = [
  {
    question: "Are the promo references on this page guaranteed?",
    answer:
      "No. They are dated references from the approved projects on this website. Luisa will confirm the selected unit, current term, deadline, and unit-specific computation before you rely on an offer."
  },
  {
    question: "Why can two units in the same project have different terms?",
    answer:
      "Terms may depend on the building, unit type, inventory status, turnover schedule, reservation date, and buyer or bank eligibility. A project-level promo does not automatically apply to every unit."
  },
  {
    question: "Can I combine a promo with another discount?",
    answer:
      "Do not assume that offers can be combined. Ask for one written computation showing the approved discount and payment structure for the exact unit."
  },
  {
    question: "Does a lower down payment mean a lower total cost?",
    answer:
      "Not necessarily. Compare the total contract price, closing fees, remaining balance, financing cost, payment dates, and any bank conditions before deciding."
  },
  {
    question: "What happens when a reference date has passed?",
    answer:
      "Treat the reference as expired unless Luisa confirms a current computation with an extension or replacement offer."
  }
];

const projectLocations = [...new Set(projects.map((project) => project.location))];

function getComputationLink(project) {
  const query = new URLSearchParams({
    project: project.name,
    inquiryType: "Request Computation",
    message: "Please include the current promo and payment terms that apply to this unit."
  });
  return `/request-computation?${query.toString()}`;
}

export default function Promos() {
  const [selectedSlug, setSelectedSlug] = useState(projects[0]?.slug || "");
  const selectedProject = projects.find((project) => project.slug === selectedSlug) || projects[0];
  const selectedTerms = selectedProject?.paymentTerms?.promoCards || [];

  return (
    <div className="promos-page">
      <section className="promos-hero">
        <div className="container promos-hero-inner">
          <nav className="promos-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Promos &amp; Terms</span>
          </nav>

          <div className="promos-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Promo &amp; Payment Term Guide</span>
            <h1>See the full offer before you decide.</h1>
            <p>
              Review dated project references, compare the complete payment structure, and request a
              unit-specific computation before reserving.
            </p>
            <ul className="promos-hero-points" aria-label="Promo guide priorities">
              <li><Building2 size={17} aria-hidden="true" /> 18 approved projects</li>
              <li><FileCheck2 size={17} aria-hidden="true" /> Unit-specific verification</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Buyer-safe next steps</li>
            </ul>
            <div className="promos-hero-actions">
              <Button to="/request-computation?inquiryType=Request%20Computation">
                Request Current Computation <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button to="/availability" variant="secondary">Check Availability</Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="promos-jump-nav" aria-label="Promo guide sections">
        <div className="container">
          <strong>On this page</strong>
          <div className="promos-jump-links">
            <a href="#current-references">Current References</a>
            <a href="#project-terms">Project Terms</a>
            <a href="#compare-terms">What to Compare</a>
            <a href="#program-types">Program Types</a>
            <a href="#rent-to-own-guide">Rent-to-Own Guide</a>
            <a href="#promo-questions">FAQs</a>
          </div>
        </div>
      </nav>

      <section className="section promos-references" id="current-references">
        <div className="container">
          <SectionHeader
            eyebrow="Website Reference Library"
            title="Start with the date, then verify the unit."
            text="These groups organize the dated terms shown across the 18 approved projects. Luisa will verify the exact unit and current offer before you rely on a reference."
          />
          <div className="promo-reference-grid">
            {referenceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className={`promo-reference-card tone-${group.tone}`} key={group.id} data-reveal="card">
                  <div className="promo-reference-heading">
                    <span><Icon size={22} aria-hidden="true" /></span>
                    <small>{group.eyebrow}</small>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <div className="promo-reference-status">
                    <CalendarDays size={16} aria-hidden="true" />
                    <strong>{group.status}</strong>
                  </div>
                  <details>
                    <summary>
                      <span>{group.projects.length} project{group.projects.length === 1 ? "" : "s"} in this reference</span>
                      <ChevronDown size={17} aria-hidden="true" />
                    </summary>
                    <ul>
                      {group.projects.map((project) => (
                        <li key={project.slug}>
                          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                          <span>{project.location}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft promo-project-finder" id="project-terms">
        <div className="container promo-project-layout">
          <div className="promo-project-controls" data-reveal="text-group">
            <span className="eyebrow">Project Term Finder</span>
            <h2>Review the reference attached to your project.</h2>
            <p>
              Choose one approved project to review the payment-term references currently shown for it.
            </p>
            <label htmlFor="promo-project-select">Approved project</label>
            <select
              id="promo-project-select"
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
            >
              {projectLocations.map((location) => (
                <optgroup label={location} key={location}>
                  {projects.filter((project) => project.location === location).map((project) => (
                    <option value={project.slug} key={project.slug}>{project.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="promo-finder-note">
              <SearchCheck size={20} aria-hidden="true" />
              <p>
                <strong>Reference first, computation next.</strong>
                A current computation is still required for the exact unit, fees, due dates, and financing balance.
              </p>
            </div>
          </div>

          <article className="selected-promo-project" aria-live="polite" data-reveal="section">
            <div className="selected-promo-visual">
              <ImagePlaceholder
                src={selectedProject.thumbnail || selectedProject.image}
                label={`${selectedProject.name} property reference`}
                compact
                variant="gallery"
              />
              <div>
                <small>Selected project</small>
                <h3>{selectedProject.name}</h3>
                <span>{selectedProject.location}</span>
              </div>
            </div>
            <div className="selected-promo-terms">
              {selectedTerms.length ? selectedTerms.map((term) => (
                <section key={term.title}>
                  <div>
                    <BadgeCheck size={18} aria-hidden="true" />
                    <h4>{term.title}</h4>
                  </div>
                  <ul>
                    {term.items.map((item) => (
                      <li key={item}><Check size={15} aria-hidden="true" /> <span>{item}</span></li>
                    ))}
                  </ul>
                </section>
              )) : (
                <section>
                  <div><FileCheck2 size={18} aria-hidden="true" /><h4>Current terms needed</h4></div>
                  <p>No dated promo card is published for this project. Request the current standard computation.</p>
                </section>
              )}
            </div>
            <div className="selected-promo-actions">
              <Button to={getComputationLink(selectedProject)}>
                Request {selectedProject.name} Computation <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Link to={`/projects/${selectedProject.slug}`}>View project details</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section promo-comparison" id="compare-terms">
        <div className="container">
          <div className="promos-section-heading" data-reveal="text-group">
            <span className="eyebrow">Before You Compare</span>
            <h2>A promo is more than its down payment percentage.</h2>
            <p>Use one complete computation to compare the amount due now, the amount due later, and every condition in between.</p>
          </div>
          <div className="promo-check-grid">
            {comparisonChecks.map(([title, text], index) => (
              <article key={title} data-reveal="card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <aside className="promo-comparison-note" data-reveal="section">
            <ListChecks size={26} aria-hidden="true" />
            <div>
              <strong>Best document to request: a unit-specific sample computation.</strong>
              <p>It should show the unit, list price, approved discount, down payment schedule, fees, balance, and validity date together.</p>
            </div>
            <Button to="/request-computation" variant="secondary">Request One Now</Button>
          </aside>
        </div>
      </section>

      <section className="section soft promo-programs" id="program-types">
        <div className="container">
          <SectionHeader
            eyebrow="Know the Structure"
            title="Similar headlines can mean different commitments."
            text="Identify the program first so you know which documents, approvals, and timelines to ask about."
          />
          <div className="promo-program-grid">
            {programTypes.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title} data-reveal="card">
                  <span><Icon size={23} aria-hidden="true" /></span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </article>
              );
            })}
          </div>
          <div className="promo-program-clarifier" data-reveal="section">
            <ShieldCheck size={23} aria-hidden="true" />
            <p>
              <strong>Rent-to-own and early move-in are not the same.</strong> Ask which agreement applies, when ownership documents are signed, what payments are credited, and what happens if you do not proceed.
            </p>
            <a href="#rent-to-own-guide">
              Compare the two options <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section promo-agreement-guide" id="rent-to-own-guide">
        <div className="container">
          <div className="promos-section-heading" data-reveal="text-group">
            <span className="eyebrow">Before You Choose</span>
            <h2>Early move-in and rent-to-own begin with different agreements.</h2>
            <p>Focus on the contract you sign first, when the purchase commitment begins, and how each payment is treated.</p>
          </div>
          <div className="promo-agreement-grid">
            {agreementComparison.map(({ icon: Icon, label, title, text }) => (
              <article key={title} data-reveal="card">
                <div className="promo-agreement-heading">
                  <span><Icon size={23} aria-hidden="true" /></span>
                  <small>{label}</small>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="promo-agreement-checklist" data-reveal="section">
            <div>
              <span className="eyebrow">Ask Before Signing</span>
              <h3>Five questions that clarify the commitment.</h3>
            </div>
            <ul>
              {agreementQuestions.map((question) => (
                <li key={question}><Check size={16} aria-hidden="true" /> {question}</li>
              ))}
            </ul>
            <Button to="/contact?inquiryType=Rent%20to%20Own%20Inquiry">Ask Luisa About Rent-to-Own</Button>
          </div>
        </div>
      </section>

      <section className="section promo-faq" id="promo-questions">
        <div className="container promo-faq-layout">
          <div className="promos-section-heading" data-reveal="text-group">
            <span className="eyebrow">Common Questions</span>
            <h2>Clear answers before you rely on an offer.</h2>
            <p>If a detail is not shown in the current unit computation, ask before paying or signing.</p>
          </div>
          <div className="promo-faq-list" data-reveal="text-group">
            {promoFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="promos-final-cta">
        <div className="container promos-final-cta-inner" data-reveal="text-group">
          <div>
            <span className="eyebrow">Ready to Verify</span>
            <h2>Turn a promo headline into a complete buyer decision.</h2>
            <p>Send the project, preferred unit, budget, and payment preference. Luisa can request the current applicable computation for review.</p>
          </div>
          <div className="promos-final-actions">
            <Button to="/request-computation">Request Current Computation</Button>
            <Button to="/contact" variant="secondary">Ask Luisa a Question</Button>
          </div>
        </div>
      </section>

      <section className="promos-source-note">
        <div className="container">
          <DisclaimerBanner text="Promo references, payment terms, discounts, eligible units, bank approvals, and validity dates may change. Ask Luisa to confirm the exact unit and current computation before paying any reservation fee." />
          <p>
            Need the current offer for one unit? Send Luisa the project, unit type, and payment preference so she can confirm the applicable term, deadline, and eligibility.
            {" "}<Link to="/request-computation">Request a current computation</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
