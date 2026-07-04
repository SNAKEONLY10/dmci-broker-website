import { DemoForm } from "../components/LeadForm";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { projects, unitTypes } from "../data/projects";
import { locations } from "../data/locations";
import { contact } from "../data/contact";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const projectOptions = projects.map((project) => project.name);
const locationOptions = locations.map((location) => location.name);
const inquiryTypes = ["Request Computation", "Check Availability", "Book Site Viewing", "General Inquiry"];
const contactMethodOptions = ["Call", "Viber", "Email", "SMS"];
const projectByName = new Map(projects.map((project) => [project.name, project]));

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
  const [previewValues, setPreviewValues] = useState(initialValues);
  const selectedProject = previewValues.project ? projectByName.get(previewValues.project) : null;

  useEffect(() => {
    setPreviewValues(initialValues);
  }, [initialValues.project, initialValues.location, initialValues.inquiryType]);

  return <FormShell
    title="Request Latest Computation"
    text="Tell Luisa your preferred project, unit type, payment preference, and timeline so she can prepare the right computation reference."
    selectedProject={selectedProject}
    panel={{
      eyebrow: "Computation Request",
      title: "Get a clear computation before reserving",
      text: "Share your project, unit type, budget, and payment preference. Luisa will confirm pricing, promos, fees, and terms before you decide.",
      cta: "Send Computation Request"
    }}
  >
    <DemoForm title="Computation Details" fields={[
      { ...f("fullName", "Full Name"), mobileFull: true },
      { ...f("contactNumber", "Mobile / Viber", "tel"), compact: true },
      { ...f("email", "Email Address", "email"), compact: true },
      { ...s("location", "City / Location", locationOptions), helper: "This narrows Interested Project to the selected city." },
      s("project", "Interested Project", projectOptions),
      { ...s("unitType", "Unit Type", unitTypes), compact: true, placeholder: "Choose unit" },
      { ...s("budgetRange", "Budget Range", ["Still checking", "Entry level", "Mid range", "Premium range"]), compact: true, placeholder: "Choose range" },
      { ...s("paymentPreference", "Payment", ["Cash", "In-house", "Bank Financing", "Not sure"]), compact: true, placeholder: "Choose term" },
      { ...s("buyerType", "Buyer Type", ["Local", "OFW", "Investor", "First-time buyer", "Family use"]), compact: true, placeholder: "Choose type" },
      { ...s("timeline", "Timeline", ["Immediately", "1-3 months", "3-6 months", "Still exploring"]), compact: true, placeholder: "Choose timing" },
      { ...s("contactMethod", "Contact Method", contactMethodOptions), compact: true, placeholder: "Choose method" },
      t()
    ]} storageKey="dmci_computation_requests" submitLabel="Send Computation Request" initialValues={initialValues} required={["fullName", "contactNumber", "email", "contactMethod"]} inquiryType="Request Computation" projectCatalog={projects} onValuesChange={setPreviewValues} compact />
  </FormShell>;
}

export function BookViewing() {
  const initialValues = useInquiryDefaults();
  const [previewValues, setPreviewValues] = useState(initialValues);
  const selectedProject = previewValues.project ? projectByName.get(previewValues.project) : null;

  useEffect(() => {
    setPreviewValues(initialValues);
  }, [initialValues.project, initialValues.location, initialValues.inquiryType]);

  return <FormShell
    title="Book a Site Viewing"
    text="Share your preferred project, schedule, and viewing setup. Luisa will confirm access, available slots, and visit instructions before the appointment."
    selectedProject={selectedProject}
    panel={{
      eyebrow: "Viewing Request",
      title: "Plan a smoother project visit",
      text: "Choose a project and preferred schedule. Luisa will help confirm viewing availability, access requirements, and the best visit setup.",
      cta: "Request Viewing Schedule"
    }}
  >
    <DemoForm title="Viewing Details" fields={[
      { ...f("fullName", "Full Name"), mobileFull: true },
      { ...f("contactNumber", "Mobile / Viber", "tel"), compact: true },
      { ...f("email", "Email Address", "email"), compact: true },
      { ...s("location", "City / Location", locationOptions), helper: "This narrows Interested Project to the selected city." },
      s("project", "Interested Project", projectOptions),
      { ...s("viewingType", "Viewing Type", ["Model unit / showroom", "Project presentation", "Online consultation", "Phone / Viber call"]), compact: true, placeholder: "Choose visit" },
      { ...f("preferredDate", "Preferred Date", "date"), compact: true },
      { ...f("preferredTime", "Preferred Time", "time"), compact: true },
      { ...f("guests", "Guests", "number"), compact: true, min: 1, step: 1, inputMode: "numeric", placeholder: "1" },
      { ...s("contactMethod", "Contact Method", contactMethodOptions), compact: true, placeholder: "Choose method" },
      t("Viewing notes")
    ]} storageKey="dmci_viewing_requests" submitLabel="Request Viewing Schedule" initialValues={initialValues} required={["fullName", "contactNumber", "contactMethod"]} inquiryType="Book Site Viewing" projectCatalog={projects} onValuesChange={setPreviewValues} compact />
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

function FormShell({ title, text, panel, children, selectedProject }) {
  const panelContent = {
    eyebrow: "Buyer Support",
    title: "Get guided before deciding",
    text: "Ask for updated details, current availability, and buyer requirements before choosing a project.",
    cta: "Message Luisa",
    ...panel
  };
  const media = selectedProject ? {
    src: selectedProject.image,
    alt: `${selectedProject.name} project preview`,
    eyebrow: "Selected Project",
    title: selectedProject.name,
    meta: selectedProject.location
  } : {
    src: "/assets/img/luisa-corral.jpg",
    alt: "Maria Luisa Corral",
    eyebrow: "Broker Guidance",
    title: "Maria Luisa Corral",
    meta: "Sales Director, DMCI Homes"
  };

  const sectionStyle = selectedProject ? { "--form-project-bg": `url(${selectedProject.image})` } : undefined;

  return (
    <section className={`page-section form-page ${selectedProject ? "has-project-background" : ""}`} style={sectionStyle}>
      <div className="container form-shell-grid">
        <aside className="form-broker-panel">
          <div className={`form-broker-image ${selectedProject ? "has-project-preview" : ""}`}>
            <ImagePlaceholder key={media.src} src={media.src} label={media.alt} compact variant={selectedProject ? "hero" : "card"} />
            <div className="form-media-caption" aria-live="polite">
              <span>{media.eyebrow}</span>
              <strong>{media.title}</strong>
              <small>{media.meta}</small>
            </div>
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
