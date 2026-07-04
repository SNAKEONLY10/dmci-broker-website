import { DemoForm } from "../components/LeadForm";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import { projects, unitTypes } from "../data/projects";
import { locations } from "../data/locations";
import { contact } from "../data/contact";
import { useSearchParams } from "react-router-dom";

const projectOptions = projects.map((project) => project.name);
const locationOptions = locations.map((location) => location.name);
const inquiryTypes = ["Request Computation", "Check Availability", "Book Site Viewing", "General Inquiry"];
const contactMethodOptions = ["Call", "Viber", "Email", "SMS"];

export function Availability() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Check Current Availability"
    text="Share the project and unit type you are considering. Luisa can help verify current availability, promos, and payment terms before you shortlist."
    panel={{
      eyebrow: "Availability Support",
      title: "Confirm units before deciding",
      text: "Inventory, promos, and payment terms can change quickly. Send your shortlist and ask for the latest confirmed details.",
      cta: "Request Availability Check"
    }}
  >
    <DemoForm title="Check Availability with Luisa" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile / Viber", "tel"), f("email", "Email Address", "email"),
      s("project", "Interested Project", projectOptions), s("location", "City / Location", locationOptions), s("unitType", "Unit Type", unitTypes),
      f("preferredSize", "Preferred Floor/Size if any"), s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]),
      s("paymentOption", "Payment Option", ["Cash", "In-house", "Bank Financing", "Not sure"]), s("urgency", "Urgency", ["Just checking", "This week", "Ready to reserve"]),
      s("contactMethod", "Preferred Contact Method", contactMethodOptions), t()
    ]} storageKey="dmci_availability_requests" submitLabel="Check Availability with Luisa" initialValues={initialValues} required={["fullName", "contactMethod"]} inquiryType="Check Availability" />
  </FormShell>;
}

export function RequestComputation() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Request Latest Computation"
    text="Tell Luisa your preferred project, unit type, payment preference, and timeline so she can prepare the right computation reference."
    panel={{
      eyebrow: "Computation Request",
      title: "Get numbers that match your buyer profile",
      text: "Request updated sample computation, payment terms, fees, and reservation guidance before making a decision.",
      cta: "Send Computation Request"
    }}
  >
    <DemoForm title="Computation Request Details" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile / Viber", "tel"), f("email", "Email Address", "email"),
      s("location", "City / Location", locationOptions), s("project", "Interested Project", projectOptions), s("unitType", "Unit Type", unitTypes),
      s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]),
      s("paymentPreference", "Payment Preference", ["Cash", "In-house", "Bank Financing", "Not sure"]),
      s("buyerType", "Buyer Type", ["Local", "OFW", "Investor", "First-time buyer", "Family use"]),
      s("inquiryType", "Inquiry Type", inquiryTypes),
      s("timeline", "Timeline", ["Immediately", "1-3 months", "3-6 months", "Still exploring"]),
      s("contactMethod", "Preferred Contact Method", contactMethodOptions), t()
    ]} storageKey="dmci_computation_requests" submitLabel="Send Computation Request" initialValues={initialValues} required={["fullName", "contactNumber", "email", "contactMethod"]} inquiryType="Request Computation" />
  </FormShell>;
}

export function BookViewing() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Book a Site Viewing"
    text="Choose your preferred viewing setup and schedule. Luisa can help coordinate based on project access and available slots."
    panel={{
      eyebrow: "Viewing Coordination",
      title: "Plan your visit with broker guidance",
      text: "Ask for a model unit visit, project presentation, or online consultation before reserving.",
      cta: "Book Viewing"
    }}
  >
    <DemoForm title="Viewing Request Details" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile / Viber", "tel"), f("email", "Email Address", "email"), s("project", "Interested Project", projectOptions), s("location", "City / Location", locationOptions),
      s("viewingType", "Viewing Type", ["On-site model unit viewing", "Online consultation", "Phone call", "Zoom/Google Meet"]),
      f("preferredDate", "Preferred Date", "date"), f("preferredTime", "Preferred Time", "time"), f("guests", "Number of Guests", "number"), s("contactMethod", "Preferred Contact Method", contactMethodOptions), t("Notes or questions")
    ]} storageKey="dmci_viewing_requests" submitLabel="Request Viewing Schedule" initialValues={initialValues} required={["fullName", "contactMethod"]} inquiryType="Book Site Viewing" />
  </FormShell>;
}

export function Contact() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Request a Private Buyer Consultation"
    text="Share your preferred location, budget, timeline, and contact details so Luisa can prepare suitable DMCI Homes options and next steps."
    panel={{
      eyebrow: "Contact Luisa",
      title: "Share Your Property Requirements",
      text: "Receive broker-guided assistance for project shortlisting, updated computations, availability confirmation, viewing coordination, and reservation preparation.",
      cta: "Start Consultation"
    }}
  >
    <DemoForm title="Buyer Inquiry Details" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile / Viber", "tel"), f("email", "Email Address", "email"),
      s("project", "Interested Project", projectOptions),
      s("concernType", "Inquiry Type", inquiryTypes),
      s("buyerType", "Buyer Type", ["Local buyer", "OFW", "Investor", "Family use", "First-time buyer", "Still exploring"]),
      s("contactMethod", "Preferred Contact Method", contactMethodOptions),
      t("Message / Buyer Requirement")
    ]} storageKey="dmci_contact_requests" submitLabel="Submit Consultation Request" initialValues={initialValues} required={["fullName", "concernType", "contactMethod"]} inquiryType="General Inquiry" />
  </FormShell>;
}

function useInquiryDefaults() {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get("project") || "";
  const locationParam = searchParams.get("location") || "";
  const inquiryType = normalizeInquiryType(searchParams.get("inquiryType") || "");
  const matchedProject = projects.find((project) => (
    project.name.toLowerCase() === projectParam.toLowerCase() ||
    project.slug.toLowerCase() === projectParam.toLowerCase()
  ));

  return {
    project: matchedProject?.name || projectParam,
    location: matchedProject?.location || locationParam,
    inquiryType,
    concernType: inquiryType
  };
}

function FormShell({ title, text, panel, children }) {
  const panelContent = {
    eyebrow: "Buyer Support",
    title: "Get guided before deciding",
    text: "Ask for updated details, current availability, and buyer requirements before choosing a project.",
    cta: "Message Luisa",
    ...panel
  };
  return (
    <section className="page-section form-page">
      <div className="container form-shell-grid">
        <aside className="form-broker-panel">
          <div className="form-broker-image">
            <img src="/assets/img/luisa-corral.jpg" alt="Maria Luisa Corral" />
          </div>
          <div className="form-broker-copy">
            <span className="eyebrow">{panelContent.eyebrow}</span>
            <h2>{panelContent.title}</h2>
            <p>{panelContent.text}</p>
            <ul className="form-benefits">
              <li>Curated DMCI Homes recommendations</li>
              <li>Updated availability and payment computations</li>
              <li>Guided viewing, reservation, and documentation support</li>
            </ul>
            <div className="official-contact-list" aria-label="Official contact details">
              <span><strong>Mobile / Viber</strong>{contact.phone}</span>
              <span><strong>Email</strong>{contact.email}</span>
              <span><strong>Office</strong>{contact.office}</span>
              <span><strong>PRC License</strong>{contact.prcLicense}</span>
            </div>
            <Button to="/contact" variant="secondary">{panelContent.cta}</Button>
          </div>
        </aside>
        <div className="form-shell-content">
          <SectionHeader as="h1" align="left" eyebrow="Buyer Assistance" title={title} text={text} />
          {children}
        </div>
      </div>
    </section>
  );
}
function f(name, label, type = "text") { return { name, label, type }; }
function s(name, label, options) { return { name, label, options }; }
function t(label = "Message") { return { name: "message", label, type: "textarea", full: true }; }

function normalizeInquiryType(value) {
  const normalized = value.trim().toLowerCase();
  const map = {
    computation: "Request Computation",
    availability: "Check Availability",
    "site viewing": "Book Site Viewing",
    viewing: "Book Site Viewing",
    reservation: "General Inquiry",
    other: "General Inquiry"
  };
  return map[normalized] || value;
}
