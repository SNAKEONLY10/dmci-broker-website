import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CalendarCheck2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  SearchCheck,
  ShieldCheck
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { contact } from "../data/contact";

const assistanceAreas = [
  {
    icon: SearchCheck,
    title: "Project shortlisting",
    text: "Compare approved projects by location, unit fit, status, buyer goal, and target timing."
  },
  {
    icon: Calculator,
    title: "Current computation review",
    text: "Request a unit-specific price and payment reference, including the key fees and due dates to compare."
  },
  {
    icon: CalendarCheck2,
    title: "Viewing coordination",
    text: "Arrange a site visit, model-unit viewing, online presentation, or project discussion when available."
  },
  {
    icon: ClipboardCheck,
    title: "Reservation preparation",
    text: "Confirm the exact unit, documents, verified payment instructions, and next steps before reservation."
  }
];

const workingSteps = [
  ["Share your priorities", "Location, purpose, unit type, budget, payment preference, and timing."],
  ["Review a focused shortlist", "Compare the options that fit your plan instead of reviewing every project equally."],
  ["Confirm current details", "Request the exact computation, availability, project materials, and viewing options."],
  ["Proceed through verified channels", "Review the documents and official instructions before signing or paying."]
];

export default function About() {
  return (
    <div className="about-profile-page">
      <section className="about-profile-hero">
        <div className="container about-profile-hero-inner">
          <nav className="about-profile-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">About Luisa</span>
          </nav>
          <div className="about-profile-visual" data-reveal="image">
            <img src="/assets/img/luisa-corral.jpg" alt={`${contact.brokerName}, ${contact.role}`} />
            <div>
              <BadgeCheck size={18} aria-hidden="true" />
              <span><strong>PRC Licensed Broker</strong>{contact.prcLicense}</span>
            </div>
          </div>
          <div className="about-profile-copy" data-reveal="hero-text">
            <span className="eyebrow">Licensed Broker Guidance</span>
            <h1>{contact.brokerName}</h1>
            <p className="about-profile-role">{contact.role}</p>
            <p>
              Luisa provides one point of contact for buyers comparing DMCI Homes projects, requesting
              current computations, checking availability, coordinating viewings, and preparing for reservation.
            </p>
            <dl className="about-profile-credentials">
              <div><dt>PRC License</dt><dd>{contact.prcLicense}</dd></div>
              <div><dt>Mobile / Viber</dt><dd>{contact.phone}</dd></div>
              <div><dt>Office</dt><dd>{contact.office}</dd></div>
            </dl>
            <div className="about-profile-actions">
              <Button to="/contact">Request a Private Consultation <ArrowRight size={17} aria-hidden="true" /></Button>
              <Button href={contact.phoneHref} variant="secondary"><Phone size={17} aria-hidden="true" /> Call Luisa</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-assistance">
        <div className="container">
          <div className="about-section-heading" data-reveal="text-group">
            <span className="eyebrow">Buyer Assistance</span>
            <h2>Clear support at the points that matter.</h2>
            <p>Each service is designed to move a buyer from a broad search to a verified, project-specific next step.</p>
          </div>
          <div className="about-assistance-grid">
            {assistanceAreas.map(({ icon: Icon, title, text }) => (
              <article key={title} data-reveal="card">
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft about-working-process">
        <div className="container about-working-layout">
          <div data-reveal="text-group">
            <span className="eyebrow">How Luisa Works With Buyers</span>
            <h2>A focused conversation, followed by current details.</h2>
            <p>
              The goal is not to push every project. It is to understand the buyer&apos;s priorities,
              narrow the options, and confirm the information needed for a sound decision.
            </p>
            <Button to="/projects" variant="secondary">Browse Approved Projects</Button>
          </div>
          <ol className="about-working-steps">
            {workingSteps.map(([title, text], index) => (
              <li key={title} data-reveal="text">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-scope">
        <div className="container about-scope-layout">
          <div className="about-scope-main" data-reveal="section">
            <ShieldCheck size={30} aria-hidden="true" />
            <span className="eyebrow">Professional Scope</span>
            <h2>Direct broker guidance, with clear responsibilities.</h2>
            <p>
              Luisa handles project inquiries and sales coordination. Existing account support, final bank decisions,
              legal advice, and formal DMCI Homes documents remain with the responsible institution or team.
            </p>
            <ul>
              <li><Check size={16} aria-hidden="true" /> Luisa confirms prices, promos, terms, and availability for the exact unit.</li>
              <li><Check size={16} aria-hidden="true" /> Reservation payments follow verified DMCI Homes instructions.</li>
              <li><Check size={16} aria-hidden="true" /> Luisa can help route account, billing, turnover, warranty, or after-sales concerns to the appropriate team.</li>
            </ul>
          </div>
          <aside className="about-contact-panel" data-reveal="section">
            <span className="eyebrow">Direct Contact</span>
            <h3>Speak with Luisa</h3>
            <a href={contact.phoneHref}><Phone size={18} aria-hidden="true" /><span><small>Mobile / Viber</small>{contact.phone}</span></a>
            <a href={contact.emailHref}><Mail size={18} aria-hidden="true" /><span><small>Email</small>{contact.email}</span></a>
            <div><MapPinned size={18} aria-hidden="true" /><span><small>Meetings</small>{contact.businessHours}</span></div>
            <Button to="/contact"><MessageCircle size={17} aria-hidden="true" /> Send an Inquiry</Button>
          </aside>
        </div>
      </section>

      <div className="container support-disclaimer-wrap">
        <DisclaimerBanner />
      </div>
    </div>
  );
}
