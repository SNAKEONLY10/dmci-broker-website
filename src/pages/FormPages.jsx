import { DemoForm } from "../components/LeadForm";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import { projects, unitTypes } from "../data/projects";
import { locations } from "../data/locations";

const projectOptions = projects.map((project) => project.name);
const locationOptions = locations.map((location) => location.name);
const inquiryTypes = ["Computation", "Availability", "Site viewing", "Reservation requirements", "Promo", "Resale unit", "Other"];

export function Availability() {
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
      f("fullName", "Full Name"), f("contactNumber", "Contact Number", "tel"), f("email", "Email", "email"),
      s("project", "Preferred Project", projectOptions), s("location", "Preferred Location", locationOptions), s("unitType", "Unit Type", unitTypes),
      f("preferredSize", "Preferred Floor/Size if any"), s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]),
      s("paymentOption", "Payment Option", ["Cash", "In-house", "Bank Financing", "Not sure"]), s("urgency", "Urgency", ["Just checking", "This week", "Ready to reserve"]),
      s("contactMethod", "Preferred Contact Method", ["Messenger", "Viber", "WhatsApp", "Call", "Email"]), t()
    ]} storageKey="dmci_availability_requests" submitLabel="Check Availability with Luisa" required={["fullName", "contactNumber", "email"]} />
  </FormShell>;
}

export function RequestComputation() {
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
      f("fullName", "Full Name"), f("contactNumber", "Mobile Number", "tel"), f("email", "Email Address", "email"), f("messengerLink", "Facebook/Messenger Link"),
      s("location", "Preferred Location", locationOptions), s("project", "Preferred Project", projectOptions), s("unitType", "Unit Type", unitTypes),
      s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]),
      s("paymentPreference", "Payment Preference", ["Cash", "In-house", "Bank Financing", "Not sure"]),
      s("buyerType", "Buyer Type", ["Local", "OFW", "Investor", "First-time buyer", "Family use"]),
      s("inquiryType", "Inquiry Type", inquiryTypes),
      s("timeline", "Timeline", ["Immediately", "1-3 months", "3-6 months", "Still exploring"]), t()
    ]} storageKey="dmci_computation_requests" submitLabel="Send Computation Request" required={["fullName", "contactNumber", "email"]} />
  </FormShell>;
}

export function BookViewing() {
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
      f("fullName", "Full Name"), f("contactNumber", "Contact Number", "tel"), f("email", "Email Address", "email"), s("project", "Preferred Project", projectOptions), s("location", "Preferred Location", locationOptions),
      s("viewingType", "Viewing Type", ["On-site model unit viewing", "Online consultation", "Phone call", "Zoom/Google Meet"]),
      f("preferredDate", "Preferred Date", "date"), f("preferredTime", "Preferred Time", "time"), f("guests", "Number of Guests", "number"), s("contactMethod", "Preferred Contact Method", ["Messenger", "Viber", "WhatsApp", "Call", "Email"]), t("Notes or questions")
    ]} storageKey="dmci_viewing_requests" submitLabel="Request Viewing Schedule" required={["fullName", "contactNumber", "email"]} />
  </FormShell>;
}

export function Contact() {
  return <FormShell
    title="Talk to Luisa"
    text="Send your question or buyer requirement. This helps Luisa recommend the right project, unit type, computation, or next step."
    panel={{
      eyebrow: "Direct Broker Contact",
      title: "Start with a clear buyer inquiry",
      text: "Share where you want to buy, your timeline, and how you prefer to be contacted. Luisa can guide the next step.",
      cta: "Message Luisa"
    }}
  >
    <DemoForm title="Buyer Inquiry Details" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile Number", "tel"), f("email", "Email Address", "email"),
      s("project", "Project Inquired", projectOptions),
      s("concernType", "Inquiry Type", inquiryTypes),
      s("buyerType", "Buyer Type", ["Local buyer", "OFW", "Investor", "Family use", "First-time buyer", "Still exploring"]),
      s("contactMethod", "Preferred Contact Method", ["Messenger", "Viber", "WhatsApp", "Call", "Email"]),
      t("Message / Buyer Requirement")
    ]} storageKey="dmci_contact_requests" submitLabel="Send Buyer Inquiry" required={["fullName", "contactNumber", "email", "concernType"]} />
  </FormShell>;
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
            <img src="/assets/img/luisa-corral.jpg" alt="Luisa Corral" />
          </div>
          <div className="form-broker-copy">
            <span className="eyebrow">{panelContent.eyebrow}</span>
            <h2>{panelContent.title}</h2>
            <p>{panelContent.text}</p>
            <ul className="form-benefits">
              <li>Updated details upon request</li>
              <li>Availability subject to confirmation</li>
              <li>Buyer assistance from inquiry to reservation</li>
            </ul>
            <Button to="/contact" variant="secondary">{panelContent.cta}</Button>
          </div>
        </aside>
        <div className="form-shell-content">
          <SectionHeader align="left" eyebrow="Buyer Assistance" title={title} text={text} />
          {children}
        </div>
      </div>
    </section>
  );
}
function f(name, label, type = "text") { return { name, label, type }; }
function s(name, label, options) { return { name, label, options }; }
function t(label = "Message") { return { name: "message", label, type: "textarea", full: true }; }
