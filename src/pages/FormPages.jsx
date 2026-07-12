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
const inquiryTypes = ["Sales Inquiry", "Request Computation", "Check Availability", "Book a Site Viewing", "Rent to Own Inquiry", "Leasing Inquiry", "Resale Inquiry", "Reservation Concern", "Existing Buyer / Customer Care Concern", "Other Concern"];
const inquiryTypeGroups = [
  { label: "Buying a Property", options: inquiryTypes.slice(0, 4) },
  { label: "Other Property Services", options: inquiryTypes.slice(4, 8) },
  { label: "Existing Buyer Support", options: [inquiryTypes[8]] },
  { label: "Other", options: [inquiryTypes[9]] }
];
const contactMethodOptions = ["Email and Mobile", "Call", "Viber", "Email", "SMS"];
const bestTimeOptions = ["Anytime", "Morning (Philippine time)", "Afternoon (Philippine time)", "Evening (Philippine time)"];
const leadSourceOptions = ["Facebook", "Google", "TikTok", "Instagram", "Referral", "Website", "Viber", "Other"];
const nationalityOptions = ["Filipino", "Dual citizen", "Foreign national", "Prefer not to say"];
const buyerProfileOptions = ["Homebuyer / end-user", "First-time buyer", "Property investor", "OFW / overseas Filipino", "Overseas-based buyer", "Existing DMCI buyer", "Still exploring"];
const budgetOptions = ["Still exploring", "Below PHP 6M", "PHP 6M - 10M", "PHP 10M - 15M", "PHP 15M and above"];
const paymentOptions = ["Cash", "Bank financing", "In-house financing", "Still comparing options"];
const projectByName = new Map(projects.map((project) => [project.name, project]));

const fullNameField = () => ({ ...f("fullName", "Full Name"), autoComplete: "name" });
const phoneField = () => ({ ...f("contactNumber", "Phone Number", "tel"), autoComplete: "tel", inputMode: "tel", helper: "Use the number where Luisa can reach you. Include the country code if you are overseas." });
const emailField = () => ({ ...f("email", "Email Address", "email"), autoComplete: "email" });
const nationalityField = () => s("nationality", "Nationality", nationalityOptions);
const contactPreferenceFields = () => [
  { ...s("contactMethod", "Preferred Contact Method", contactMethodOptions), section: "Contact Preference", placeholder: "Choose a contact method" },
  { ...s("bestTimeToContact", "Best Time to Contact", bestTimeOptions), placeholder: "Choose a contact time" },
  { ...s("leadSource", "How Did You Find This Website?", leadSourceOptions), placeholder: "Choose a source" }
];

export function Availability() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Check Current Availability"
    text="Tell Luisa which project and unit type you are considering so she can verify the latest available options."
    panel={{
      eyebrow: "Availability Support",
      title: "Confirm units before deciding",
      text: "Inventory, promos, and payment terms can change quickly. Send your shortlist and ask for the latest confirmed details.",
      cta: "Request Availability Check"
    }}
  >
    <DemoForm title="Check Availability with Luisa" fields={[
      { ...fullNameField(), section: "Your Details" }, phoneField(), emailField(),
      { ...s("location", "Project Location", locationOptions), section: "Property Preferences", helper: "Select an area to see its approved projects." },
      s("project", "Project Interested In", projectOptions), s("unitType", "Unit Type", unitTypes),
      f("preferredSize", "Preferred Floor or Size"), s("budgetRange", "Budget Range", budgetOptions),
      s("paymentOption", "Payment Preference", paymentOptions), s("urgency", "Purchase Timeline", ["Just researching", "Within 1-3 months", "Within 3-6 months", "Ready once details are confirmed"]),
      nationalityField(), ...contactPreferenceFields(),
      { ...t("Additional Details"), section: "Message", placeholder: "Share a preferred floor, unit size, move-in timing, or question." }
    ]} storageKey="dmci_availability_requests" submitLabel="Check Availability with Luisa" initialValues={initialValues} required={["fullName", "contactMethod"]} inquiryType="Check Availability" projectCatalog={projects} />
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
    text="Share your preferred project, unit type, budget, and payment plan for a current computation reference."
    selectedProject={selectedProject}
    panel={{
      eyebrow: "Computation Request",
      title: "Get a clear computation before reserving",
      text: "Share your project, unit type, budget, and payment preference. Luisa will confirm pricing, promos, fees, and terms before you decide.",
      cta: "Send Computation Request"
    }}
  >
    <DemoForm title="Computation Details" fields={[
      { ...fullNameField(), mobileFull: true, section: "Your Details" },
      { ...phoneField(), compact: true },
      { ...emailField(), compact: true },
      { ...s("location", "Project Location", locationOptions), section: "Property Preferences", helper: "Select an area to see its approved projects." },
      s("project", "Project Interested In", projectOptions),
      { ...s("unitType", "Unit Type", unitTypes), compact: true, placeholder: "Choose unit" },
      { ...s("budgetRange", "Budget Range", budgetOptions), compact: true, placeholder: "Choose range" },
      { ...s("paymentPreference", "Payment Preference", paymentOptions), compact: true, placeholder: "Choose payment" },
      { ...s("buyerType", "Buyer Profile", buyerProfileOptions), compact: true, placeholder: "Choose profile" },
      { ...s("timeline", "Purchase Timeline", ["As soon as possible", "Within 1-3 months", "Within 3-6 months", "More than 6 months", "Still exploring"]), compact: true, placeholder: "Choose timeline" },
      { ...nationalityField(), compact: true },
      { ...s("contactMethod", "Preferred Contact Method", contactMethodOptions), compact: true, section: "Contact Preference", placeholder: "Choose method" },
      { ...s("bestTimeToContact", "Best Time to Contact", bestTimeOptions), compact: true },
      { ...s("leadSource", "How Did You Find This Website?", leadSourceOptions), compact: true },
      { ...t("Additional Details"), section: "Message", placeholder: "Share your preferred payment term or anything Luisa should consider." }
    ]} storageKey="dmci_computation_requests" submitLabel="Send Computation Request" initialValues={initialValues} required={["fullName", "contactMethod"]} inquiryType="Request Computation" projectCatalog={projects} onValuesChange={setPreviewValues} compact />
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
    text="Choose a project and preferred schedule. Luisa will confirm the available slot, access details, and meeting instructions."
    selectedProject={selectedProject}
    panel={{
      eyebrow: "Viewing Request",
      title: "Plan a smoother project visit",
      text: "Choose a project and preferred schedule. Luisa will help confirm viewing availability, access requirements, and the best visit setup.",
      cta: "Request Viewing Schedule"
    }}
  >
    <DemoForm title="Viewing Details" fields={[
      { ...fullNameField(), mobileFull: true, section: "Your Details" },
      { ...phoneField(), compact: true },
      { ...emailField(), compact: true },
      { ...s("location", "Project Location", locationOptions), section: "Viewing Preferences", helper: "Select an area to see its approved projects." },
      s("project", "Project Interested In", projectOptions),
      { ...s("viewingType", "Viewing Type", ["Model unit / showroom", "Project presentation", "Online consultation", "Phone / Viber call"]), compact: true, placeholder: "Choose visit" },
      { ...f("preferredDate", "Preferred Date", "date"), compact: true },
      { ...f("preferredTime", "Preferred Time", "time"), compact: true },
      { ...f("guests", "Guests", "number"), compact: true, min: 1, step: 1, inputMode: "numeric", placeholder: "1" },
      { ...nationalityField(), compact: true },
      { ...s("contactMethod", "Preferred Contact Method", contactMethodOptions), compact: true, section: "Contact Preference", placeholder: "Choose method" },
      { ...s("bestTimeToContact", "Best Time to Contact", bestTimeOptions), compact: true },
      { ...s("leadSource", "How Did You Find This Website?", leadSourceOptions), compact: true },
      { ...t("Viewing Notes"), section: "Message", placeholder: "Share access needs, unit preferences, or scheduling notes." }
    ]} storageKey="dmci_viewing_requests" submitLabel="Request Viewing Schedule" initialValues={initialValues} required={["fullName", "preferredDate", "preferredTime", "contactMethod"]} inquiryType="Book a Site Viewing" projectCatalog={projects} onValuesChange={setPreviewValues} compact />
  </FormShell>;
}

export function Contact() {
  const initialValues = useInquiryDefaults();
  return <FormShell
    title="Request a Private Buyer Consultation"
    text="Tell Luisa what you are looking for. She will review your inquiry and reply through your preferred contact method."
    panel={{
      eyebrow: "Contact Luisa",
      title: "Share Your Property Requirements",
      text: "Receive broker-guided assistance for project shortlisting, updated computations, availability confirmation, viewing coordination, and reservation preparation.",
      cta: ""
    }}
  >
    <DemoForm title="Buyer Inquiry Details" fields={[
      { ...s("concernType", "Inquiry Type", inquiryTypes), section: "Inquiry", placeholder: "Choose an inquiry type", optionGroups: inquiryTypeGroups },
      s("location", "Preferred Project Location", locationOptions), s("project", "Project Interested In", projectOptions),
      { ...fullNameField(), section: "Your Details" }, phoneField(), emailField(),
      { ...s("buyerType", "Buyer Profile", buyerProfileOptions), placeholder: "Choose a profile" },
      nationalityField(),
      { ...f("currentLocation", "Current City / Country"), autoComplete: "address-level2", placeholder: "City and country" },
      ...contactPreferenceFields(),
      { ...t("How Can Luisa Help?"), section: "Message", placeholder: "Tell Luisa what you are looking for or what support you need." }
    ]} storageKey="dmci_contact_requests" submitLabel="Submit Consultation Request" initialValues={initialValues} required={["fullName", "concernType", "contactMethod"]} inquiryType="General Inquiry" projectCatalog={projects} />
  </FormShell>;
}

function useInquiryDefaults() {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get("project") || "";
  const locationParam = searchParams.get("location") || "";
  const purposeParam = normalizePurpose(searchParams.get("purpose") || "");
  const inquiryType = normalizeInquiryType(searchParams.get("inquiryType") || "");
  const matchedProject = projects.find((project) => (
    project.name.toLowerCase() === projectParam.toLowerCase() ||
    project.slug.toLowerCase() === projectParam.toLowerCase()
  ));

  return {
    project: matchedProject?.name || projectParam,
    location: matchedProject?.location || locationParam,
    purpose: purposeParam,
    buyerType: purposeParam === "Investment" ? "Property investor" : purposeParam === "Own Use" ? "Homebuyer / end-user" : "",
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
            {panelContent.cta && <Button to="/contact" variant="secondary">{panelContent.cta}</Button>}
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
    "site viewing": "Book a Site Viewing",
    viewing: "Book a Site Viewing",
    reservation: "General Inquiry",
    other: "General Inquiry"
  };
  return map[normalized] || value;
}

function normalizePurpose(value) {
  const normalized = value.trim().toLowerCase();
  const map = {
    residence: "Own Use",
    home: "Own Use",
    "own use": "Own Use",
    investment: "Investment",
    investor: "Investment"
  };
  return map[normalized] || value;
}
