import { DemoForm } from "../components/LeadForm";
import { SectionHeader } from "../components/SectionHeader";
import { projects, unitTypes } from "../data/projects";
import { locations } from "../data/locations";

const projectOptions = projects.map((project) => project.name);
const locationOptions = locations.map((location) => location.name);

export function Availability() {
  return <FormShell title="Check Availability" text="Ask Luisa to check current unit availability, pricing, promos, and payment terms.">
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
  return <FormShell title="Request Latest Computation" text="No hardcoded prices. Submit your preferences and request updated computation.">
    <DemoForm title="Full Computation Request" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Mobile Number", "tel"), f("email", "Email Address", "email"), f("messengerLink", "Facebook/Messenger Link Optional"),
      s("location", "Preferred Location", locationOptions), s("project", "Preferred Project", projectOptions), s("unitType", "Unit Type", unitTypes),
      s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]),
      s("paymentPreference", "Payment Preference", ["Cash", "In-house", "Bank Financing", "Not sure"]),
      s("buyerType", "Buyer Type", ["Local", "OFW", "Investor", "First-time buyer", "Family use"]),
      s("timeline", "Timeline", ["Immediately", "1-3 months", "3-6 months", "Still exploring"]), t()
    ]} storageKey="dmci_computation_requests" submitLabel="Send Computation Request" required={["fullName", "contactNumber", "email"]} />
  </FormShell>;
}

export function BookViewing() {
  return <FormShell title="Book a Site Viewing" text="Schedule confirmation depends on project availability and broker confirmation.">
    <DemoForm title="Request Viewing Schedule" fields={[
      f("fullName", "Full Name"), f("contactNumber", "Contact Number", "tel"), s("project", "Preferred Project", projectOptions), s("location", "Preferred Location", locationOptions),
      s("viewingType", "Viewing Type", ["On-site model unit viewing", "Online consultation", "Phone call", "Zoom/Google Meet"]),
      f("preferredDate", "Preferred Date", "date"), f("preferredTime", "Preferred Time", "time"), f("guests", "Number of Guests", "number"), t()
    ]} storageKey="dmci_viewing_requests" submitLabel="Request Viewing Schedule" required={["fullName", "contactNumber"]} />
  </FormShell>;
}

export function Contact() {
  return <FormShell title="Contact Luisa" text="Choose the concern type and send a buyer-assistance inquiry.">
    <DemoForm title="Inquiry Form" fields={[
      f("fullName", "Name"), f("contactNumber", "Contact", "tel"),
      s("concernType", "Concern Type", ["Computation", "Availability", "Site viewing", "Reservation requirements", "Promo", "Resale unit", "Other"]), t()
    ]} storageKey="dmci_contact_requests" submitLabel="Send Inquiry" required={["fullName", "contactNumber"]} />
  </FormShell>;
}

function FormShell({ title, text, children }) {
  return <section className="page-section"><div className="container narrow"><SectionHeader eyebrow="Buyer Assistance" title={title} text={text} />{children}</div></section>;
}
function f(name, label, type = "text") { return { name, label, type }; }
function s(name, label, options) { return { name, label, options }; }
function t() { return { name: "message", label: "Message", type: "textarea", full: true }; }
