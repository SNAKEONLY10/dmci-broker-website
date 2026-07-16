import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  IdCard,
  ReceiptText,
  ShieldCheck,
  Signature,
  WalletCards
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";

const reservationSteps = [
  ["Confirm the exact unit", "Verify the project, building, unit number, floor, layout, orientation, parking, and current availability."],
  ["Review a current computation", "Check the contract price, approved discount, reservation fee, down payment schedule, balance, fees, and due dates."],
  ["Confirm your document list", "Ask which buyer, co-buyer, financing, or representative documents apply to your situation."],
  ["Read the reservation documents", "Review all declared details, payment milestones, conditions, and cancellation provisions before signing."],
  ["Verify the payment channel", "Confirm the beneficiary, portal or account, payment purpose, and official receipt process."],
  ["Keep a complete record", "Retain the signed forms, computation, proof of payment, official receipt, and correspondence."]
];

const documentGroups = [
  {
    icon: IdCard,
    title: "Buyer identification",
    text: "Clear, current identification and buyer information.",
    items: ["Valid government-issued ID", "Tax Identification Number or applicable BIR document", "Current address and contact details", "Civil-status or co-buyer documents when applicable"]
  },
  {
    icon: FileText,
    title: "Unit and reservation forms",
    text: "Documents supplied for the exact unit and payment structure.",
    items: ["Current unit-specific computation", "Client registration or buyer information form", "Reservation form or agreement", "Applicable disclosures and acknowledgements"]
  },
  {
    icon: WalletCards,
    title: "Financing support",
    text: "Additional records may be requested for bank or in-house evaluation.",
    items: ["Income or employment records", "Business or bank documents when requested", "Completed lender forms", "Other credit-evaluation requirements"]
  },
  {
    icon: Globe2,
    title: "Remote or overseas buyer",
    text: "Confirm document format and representative authority early.",
    items: ["Valid passport or overseas identification", "Current overseas contact details", "SPA or representative documents when applicable", "Signing, notarization, or consular requirements if required"]
  }
];

const reservationFaqs = [
  {
    question: "Is this the final document list?",
    answer: "No. It is a preparation guide. The final requirements depend on the buyer profile, exact unit, payment option, financing route, and current developer policy."
  },
  {
    question: "Should I pay immediately after choosing a unit?",
    answer: "First confirm current availability, review the unit-specific computation and reservation documents, and verify the official payment instructions."
  },
  {
    question: "Can an overseas buyer reserve remotely?",
    answer: "Remote coordination may be possible, but signing, representative authority, document format, and payment instructions must be confirmed for the buyer's case."
  },
  {
    question: "What records should I keep?",
    answer: "Keep the final computation, signed forms, proof of payment, official receipt, submitted document copies, and important written confirmations."
  }
];

export default function ReservationRequirements() {
  return (
    <div className="support-page reservation-page">
      <section className="support-hero reservation-hero">
        <div className="container support-hero-inner">
          <nav className="support-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <Link to="/buyers-guide">Buyer&apos;s Guide</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Reservation</span>
          </nav>
          <div className="support-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Reservation Preparation</span>
            <h1>Verify first. Pay through the right channel.</h1>
            <p>
              Use this practical checklist to prepare the exact unit details, current computation,
              buyer documents, and verified payment instructions before reservation.
            </p>
            <ul className="support-hero-points" aria-label="Reservation priorities">
              <li><ClipboardCheck size={17} aria-hidden="true" /> Exact unit and computation</li>
              <li><FileCheck2 size={17} aria-hidden="true" /> Buyer-specific documents</li>
              <li><ShieldCheck size={17} aria-hidden="true" /> Verified payment channel</li>
            </ul>
            <div className="support-hero-actions">
              <Button to="#before-paying">Review the Checks <ArrowRight size={17} aria-hidden="true" /></Button>
              <Button to="/request-computation" variant="secondary">Request Current Computation</Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="support-jump-nav" aria-label="Reservation guide sections">
        <div className="container">
          <strong>On this page</strong>
          <div>
            <a href="#before-paying">Before Paying</a>
            <a href="#reservation-steps">Reservation Steps</a>
            <a href="#document-guide">Document Guide</a>
            <a href="#payment-safety">Payment Safety</a>
            <a href="#reservation-faq">FAQs</a>
          </div>
        </div>
      </nav>

      <section className="section reservation-first-checks" id="before-paying">
        <div className="container">
          <SectionHeader
            eyebrow="Before You Pay"
            title="Three items should agree with each other"
            text="The unit, computation, and payment instructions should all refer to the same verified reservation."
          />
          <div className="reservation-verification-grid">
            {[
              [BadgeCheck, "1. Exact unit", "Project, building, unit number, floor, layout, parking, and availability are confirmed."],
              [ReceiptText, "2. Current computation", "Price, discounts, fees, down payment, balance, financing assumptions, and due dates are clear."],
              [ShieldCheck, "3. Official instructions", "Payment amount, beneficiary or portal, purpose, deadline, and receipt process are verified."]
            ].map(([Icon, title, text]) => (
              <article key={title} data-reveal="card">
                <Icon size={26} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="reservation-stop-note" data-reveal="section">
            <ShieldCheck size={28} aria-hidden="true" />
            <p><strong>Pause when a detail does not match.</strong> Do not send a reservation fee based only on a chat message, screenshot, or unverified account instruction.</p>
          </div>
        </div>
      </section>

      <section className="section soft reservation-process" id="reservation-steps">
        <div className="container reservation-process-layout">
          <div className="support-section-heading" data-reveal="text-group">
            <span className="eyebrow">Reservation Sequence</span>
            <h2>A clear process from unit check to record keeping.</h2>
            <p>Complete each check in order so the documents and payment refer to the same current offer.</p>
            <Button to="/availability" variant="secondary">Check Current Availability</Button>
          </div>
          <ol className="reservation-process-list">
            {reservationSteps.map(([title, text], index) => (
              <li key={title} data-reveal="text">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section reservation-documents" id="document-guide">
        <div className="container">
          <SectionHeader
            eyebrow="Preparation Guide"
            title="Organize documents by purpose"
            text="Prepare readable copies, but wait for the final buyer-specific list before completing or notarizing forms."
          />
          <div className="reservation-document-grid">
            {documentGroups.map(({ icon: Icon, title, text, items }) => (
              <article key={title} data-reveal="card">
                <div className="reservation-document-heading">
                  <Icon size={24} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
                <ul>
                  {items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft reservation-payment-safety" id="payment-safety">
        <div className="container reservation-safety-layout">
          <div data-reveal="text-group">
            <span className="eyebrow">Payment Safety</span>
            <h2>Know exactly what you are paying for.</h2>
            <p>Before authorizing payment, ask for a written confirmation that identifies the reservation and explains the official receipt process.</p>
            <div className="support-hero-actions">
              <Button to="/contact?inquiryType=Reservation%20Concern">Ask Luisa to Review the Next Step</Button>
              <Button to="/disclaimer" variant="secondary">Read Buyer Safety Notes</Button>
            </div>
          </div>
          <aside data-reveal="section">
            <strong>Confirm before sending funds</strong>
            <ul>
              <li><Check size={16} aria-hidden="true" /> Exact amount and payment purpose</li>
              <li><Check size={16} aria-hidden="true" /> Authorized beneficiary or payment portal</li>
              <li><Check size={16} aria-hidden="true" /> Payment deadline and reference details</li>
              <li><Check size={16} aria-hidden="true" /> Official receipt and record process</li>
            </ul>
            <div><Signature size={20} aria-hidden="true" /> Read documents before signing or paying.</div>
          </aside>
        </div>
      </section>

      <section className="section reservation-faq" id="reservation-faq">
        <div className="container reservation-faq-layout">
          <div className="support-section-heading" data-reveal="text-group">
            <span className="eyebrow">Common Questions</span>
            <h2>Prepare with the right expectations.</h2>
            <p>Final requirements and procedures can change by unit, buyer profile, and payment method.</p>
          </div>
          <div className="support-faq-list">
            {reservationFaqs.map((faq) => (
              <details key={faq.question} data-reveal="text">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="container support-disclaimer-wrap">
        <DisclaimerBanner text="This is a planning checklist, not a final documentary or payment instruction. Confirm the exact requirements, forms, availability, computation, and authorized payment channel for the selected unit before reservation." />
      </div>
    </div>
  );
}
