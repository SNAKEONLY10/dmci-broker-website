import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarCheck2,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  House,
  Landmark,
  MapPin,
  Search,
  ShieldCheck,
  UserRoundCheck,
  WalletCards
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";
import { contact } from "../data/contact";
import {
  buyerDecisionPoints,
  buyerFaqs,
  buyerJourneySteps,
  documentProfiles,
  guideCards,
  paymentOptions
} from "../data/guides";

const guideIconMap = {
  reservation: ClipboardCheck,
  documents: FileText,
  payment: Landmark,
  ofw: Globe2,
  shortlist: Search,
  faq: BadgeCheck
};

const decisionIconMap = {
  map: MapPin,
  home: House,
  calendar: CalendarCheck2,
  wallet: WalletCards
};

const paymentIconMap = {
  cash: Banknote,
  bank: Landmark,
  "in-house": CircleDollarSign
};

export default function BuyersGuide() {
  const [activeProfile, setActiveProfile] = useState(documentProfiles[0].id);
  const selectedProfile = documentProfiles.find((profile) => profile.id === activeProfile) || documentProfiles[0];

  function handleProfileKeyDown(event, currentIndex) {
    const lastIndex = documentProfiles.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    else if (event.key === "ArrowLeft") nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    const nextProfile = documentProfiles[nextIndex];
    document.getElementById(`document-tab-${nextProfile.id}`)?.focus();
    setActiveProfile(nextProfile.id);
  }

  return (
    <div className="buyer-guide-page">
      <section className="buyer-guide-hero">
        <div className="container buyer-guide-hero-inner">
          <nav className="buyer-guide-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Buyer&apos;s Guide</span>
          </nav>

          <div className="buyer-guide-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Buyer&apos;s Guide</span>
            <h1>Buy with a clear plan, not guesswork.</h1>
            <p>
              Understand what to compare, what to prepare, and what to confirm before reserving a DMCI home.
            </p>
            <ul className="buyer-guide-hero-points" aria-label="Guide priorities">
              <li><Search size={17} aria-hidden="true" /> Compare the right details</li>
              <li><FileCheck2 size={17} aria-hidden="true" /> Prepare buyer documents</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Use verified payment channels</li>
            </ul>
            <div className="buyer-guide-hero-actions">
              <Button to="/request-computation">
                Request Current Computation <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button to="/availability" variant="secondary">Check Availability</Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="buyer-guide-jump-nav" aria-label="Buyer guide sections">
        <div className="container">
          <strong>On this page</strong>
          <div className="buyer-guide-jump-links">
            <a href="#journey">Buying Steps</a>
            <a href="#compare">What to Compare</a>
            <a href="#reservation-process">Reservation</a>
            <a href="#documents">Documents</a>
            <a href="#payment-options">Payment Options</a>
            <a href="#questions">FAQs</a>
          </div>
        </div>
      </nav>

      <section className="section buyer-guide-start" id="journey">
        <div className="container">
          <SectionHeader
            eyebrow="Start Here"
            title="A practical path from shortlist to reservation"
            text="Each step should answer a specific buyer question before you move forward."
          />
          <ol className="buyer-journey-steps" data-reveal="text-group">
            {buyerJourneySteps.map((step, index) => (
              <li key={step.title}>
                <span className="buyer-journey-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section soft buyer-guide-paths">
        <div className="container">
          <SectionHeader
            eyebrow="Find Your Starting Point"
            title="Go directly to the guidance you need"
            text="Choose a topic now, then return to the full process whenever you are ready."
          />
          <div className="buyer-guide-path-grid">
            {guideCards.map((guide) => {
              const Icon = guideIconMap[guide.id] || FileText;
              const href = guide.to.replace("/buyers-guide", "") || "#journey";
              return (
                <a className="buyer-guide-path-card" href={href} key={guide.id} data-reveal="card">
                  <span className="buyer-guide-path-icon"><Icon size={22} aria-hidden="true" /></span>
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.summary}</small>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section buyer-guide-compare" id="compare">
        <div className="container">
          <div className="buyer-guide-section-heading" data-reveal="text-group">
            <span className="eyebrow">Before You Shortlist</span>
            <h2>Compare the decision, not just the brochure.</h2>
            <p>
              A good shortlist balances daily fit, timing, and the complete financial commitment.
            </p>
          </div>
          <div className="buyer-decision-grid">
            {buyerDecisionPoints.map((point) => {
              const Icon = decisionIconMap[point.icon] || Check;
              return (
                <article key={point.title} data-reveal="card">
                  <Icon size={24} aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              );
            })}
          </div>
          <div className="buyer-guide-computation-note" data-reveal="section">
            <div>
              <CalculatorMark />
              <span>
                <strong>Do not compare monthly down payment alone.</strong>
                <small>Review the total contract price, fees, payment schedule, financing balance, and due dates together.</small>
              </span>
            </div>
            <Button to="/request-computation" variant="secondary">Request a Unit-Specific Computation</Button>
          </div>
        </div>
      </section>

      <section className="section buyer-guide-reservation" id="reservation-process">
        <div className="container buyer-guide-reservation-layout">
          <div>
            <div className="buyer-guide-section-heading" data-reveal="text-group">
              <span className="eyebrow">Reservation Process</span>
              <h2>Five checks before you pay.</h2>
              <p>Use this sequence to reduce avoidable surprises and incomplete submissions.</p>
            </div>
            <ol className="reservation-checks">
              {[
                ["Confirm the exact unit", "Verify current availability, unit number, floor, orientation, layout, parking, and project status."],
                ["Review the current computation", "Check the price, applicable promo, reservation fee, down payment, balance, fees, and due dates."],
                ["Confirm the document list", "Ask which forms and supporting documents apply to your buyer profile and payment option."],
                ["Read before signing", "Review the reservation documents, declared buyer information, payment schedule, and cancellation terms."],
                ["Verify payment instructions", "Pay only through the confirmed official channel and retain the official receipt and document copies."]
              ].map(([title, text], index) => (
                <li key={title} data-reveal="text">
                  <span>{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="reservation-safety-panel" data-reveal="section">
            <ShieldCheck size={30} aria-hidden="true" />
            <span className="mini">Payment Safety</span>
            <h3>Pause if any detail is unclear.</h3>
            <p>Before sending money, confirm all of the following:</p>
            <ul>
              <li><Check size={16} aria-hidden="true" /> Exact project and unit</li>
              <li><Check size={16} aria-hidden="true" /> Amount and payment purpose</li>
              <li><Check size={16} aria-hidden="true" /> Authorized beneficiary or portal</li>
              <li><Check size={16} aria-hidden="true" /> Official receipt process</li>
            </ul>
            <Button to="/contact" variant="ghost">Ask Luisa to Verify the Next Step</Button>
          </aside>
        </div>
      </section>

      <section className="section soft buyer-guide-documents" id="documents">
        <div className="container">
          <SectionHeader
            eyebrow="Document Preparation"
            title="Prepare according to your buyer profile"
            text="These are planning checklists, not a final documentary requirement list."
          />
          <div className="document-profile-shell" data-reveal="section">
            <div className="document-profile-tabs" role="tablist" aria-label="Choose buyer profile">
              {documentProfiles.map((profile, index) => (
                <button
                  key={profile.id}
                  id={`document-tab-${profile.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeProfile === profile.id}
                  aria-controls={`document-panel-${profile.id}`}
                  className={activeProfile === profile.id ? "active" : ""}
                  tabIndex={activeProfile === profile.id ? 0 : -1}
                  onClick={() => setActiveProfile(profile.id)}
                  onKeyDown={(event) => handleProfileKeyDown(event, index)}
                >
                  {profile.id === "local" && <UserRoundCheck size={18} aria-hidden="true" />}
                  {profile.id === "overseas" && <Globe2 size={18} aria-hidden="true" />}
                  {profile.id === "financing" && <Landmark size={18} aria-hidden="true" />}
                  {profile.label}
                </button>
              ))}
            </div>

            <div
              className="document-profile-panel"
              id={`document-panel-${selectedProfile.id}`}
              role="tabpanel"
              aria-labelledby={`document-tab-${selectedProfile.id}`}
              tabIndex={0}
            >
              <div>
                <span className="mini">Preparation Checklist</span>
                <h3>{selectedProfile.title}</h3>
                <p>{selectedProfile.intro}</p>
              </div>
              <ul>
                {selectedProfile.items.map((item) => (
                  <li key={item}><Check size={17} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
              <aside>
                <FileCheck2 size={20} aria-hidden="true" />
                <p>Confirm the final format, validity, signing, and submission deadline before preparing originals or notarized documents.</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section buyer-guide-payments" id="payment-options">
        <div className="container">
          <SectionHeader
            eyebrow="Payment Planning"
            title="Choose a payment path after seeing the full numbers"
            text="The right option depends on your cash flow, timeline, eligibility, and the terms available for the exact unit."
          />
          <div className="payment-option-grid">
            {paymentOptions.map((option) => {
              const Icon = paymentIconMap[option.id] || WalletCards;
              return (
                <article key={option.id} data-reveal="card">
                  <div className="payment-option-heading">
                    <span><Icon size={22} aria-hidden="true" /></span>
                    <h3>{option.title}</h3>
                  </div>
                  <p>{option.bestFor}</p>
                  <strong>Review</strong>
                  <ul>
                    {option.review.map((item) => <li key={item}><Check size={15} aria-hidden="true" /> {item}</li>)}
                  </ul>
                  <small>{option.confirm}</small>
                </article>
              );
            })}
          </div>
          <p className="payment-comparison-caption">
            These summaries are for comparison only. Request an updated computation before selecting a payment option.
          </p>
        </div>
      </section>

      <section className="section soft buyer-guide-faq" id="questions">
        <div className="container buyer-guide-faq-layout">
          <div className="buyer-guide-section-heading" data-reveal="text-group">
            <span className="eyebrow">Buyer Questions</span>
            <h2>Clear answers before you commit.</h2>
            <p>Open a question to review the practical answer.</p>
          </div>
          <div className="buyer-guide-faq-list" data-reveal="text-group">
            {buyerFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="buyer-guide-final-cta">
        <div className="container buyer-guide-final-cta-inner" data-reveal="text-group">
          <div>
            <span className="eyebrow">Broker-Guided Next Step</span>
            <h2>Ready for a unit-specific review?</h2>
            <p>
              Share your preferred project, unit type, budget, and timeline. Luisa can help verify the current computation, availability, and next requirements.
            </p>
          </div>
          <div className="buyer-guide-final-actions">
            <Button to="/request-computation">Request Current Computation</Button>
            <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
            <a href={contact.phoneHref}>Call {contact.phone}</a>
          </div>
        </div>
      </section>

      <section className="buyer-guide-source-note">
        <div className="container">
          <DisclaimerBanner text="Requirements, availability, prices, promos, payment terms, and procedures may change by project, unit, and buyer profile. Luisa will confirm the final details before reservation." />
          <p>
            Need a buyer-specific document list or help with an existing account concern? Luisa can confirm the next requirement or help route the concern to the appropriate DMCI Homes team.
            {" "}<Link to="/contact?inquiryType=Existing%20Buyer%20%2F%20Customer%20Care%20Concern">Ask Luisa for guidance</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

function CalculatorMark() {
  return (
    <span className="buyer-guide-calculator-mark" aria-hidden="true">
      <CircleDollarSign size={25} />
    </span>
  );
}
