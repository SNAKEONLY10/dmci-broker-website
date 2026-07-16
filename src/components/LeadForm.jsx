import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { contact } from "../data/contact";
import { saveSubmission, validateRequired } from "../utils/storage";
import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

const defaults = {
  fullName: "",
  contactNumber: "",
  email: "",
  location: "",
  project: "",
  unitType: "",
  budgetRange: "",
  purpose: "",
  contactMethod: "",
  nationality: "",
  currentLocation: "",
  bestTimeToContact: "",
  leadSource: "",
  message: "",
  consent: false,
  website: ""
};

const previewMessage = "Online delivery is not available in this test session. Your entries were kept on this device so you can review them, but Luisa has not received the inquiry. Please contact her directly to continue.";
const deliveredMessage = "Your inquiry has been submitted. Luisa or her team will contact you after details are confirmed.";
const sendErrorMessage = "We could not send your inquiry right now. Please try again or contact Luisa directly.";
const messageLimit = 1500;

export function DemoForm({ title, subtitle, fields, storageKey, submitLabel, initialValues = {}, required = [], inquiryType = "general", projectCatalog = [], onValuesChange, compact = false }) {
  const [values, setValues] = useState({ ...defaults, ...initialValues });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(null);
  const [status, setStatus] = useState("idle");
  const [submittedLead, setSubmittedLead] = useState(null);
  const [errorFocusRequest, setErrorFocusRequest] = useState({ name: "", requestId: 0 });
  const formRef = useRef(null);
  const requiredSet = new Set(required);
  const allFields = useMemo(() => fields.map((field) => field.name), [fields]);
  const fieldByName = useMemo(() => new Map(fields.map((field) => [field.name, field])), [fields]);
  const projectByName = useMemo(() => {
    return new Map(projectCatalog.map((project) => [project.name, project]));
  }, [projectCatalog]);
  const displayFields = useMemo(() => fields.map((field) => withContextualOptions(field, values, projectCatalog)), [fields, values, projectCatalog]);
  const selectedProject = values.project ? projectByName.get(values.project) : null;
  const projectLocationMismatch = Boolean(selectedProject && values.location && normalizeLocation(selectedProject.location) !== normalizeLocation(values.location));
  const projectLocationFeedback = selectedProject ? {
    type: projectLocationMismatch ? "warning" : "info",
    title: projectLocationMismatch
      ? `${selectedProject.name} is listed under ${selectedProject.location}.`
      : `${selectedProject.name} is connected to ${selectedProject.location}.`,
    text: projectLocationMismatch
      ? `You selected ${values.location}. You can keep it for comparison, but Luisa will confirm the correct project location before preparing your request.`
      : "The city and project now match for a cleaner computation request."
  } : null;

  useEffect(() => {
    if (!errorFocusRequest.name || typeof window === "undefined") return undefined;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const field = formRef.current?.querySelector(`#field-${errorFocusRequest.name}`);
        if (!field) return;

        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        field.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
        field.focus({ preventScroll: true });
        field.closest(".field, .consent")?.animate?.(
          [
            { boxShadow: "0 0 0 0 rgba(217, 45, 32, 0)" },
            { boxShadow: "0 0 0 5px rgba(217, 45, 32, 0.18)" },
            { boxShadow: "0 0 0 0 rgba(217, 45, 32, 0)" }
          ],
          { duration: reduceMotion ? 1 : 1050, easing: "ease-out" }
        );
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [errorFocusRequest]);

  function moveToFirstError(errorMap) {
    const order = [...new Set([...allFields, ...(allFields.includes("fullName") ? [] : ["fullName"]), "consent"])];
    const name = order.find((fieldName) => errorMap?.[fieldName]) || Object.keys(errorMap || {})[0];
    if (!name) return null;

    setErrorFocusRequest((current) => ({ name, requestId: current.requestId + 1 }));
    return {
      name,
      label: fieldByName.get(name)?.label || (name === "consent" ? "Consent" : "required field")
    };
  }

  function commitValues(nextValues) {
    setValues(nextValues);
    onValuesChange?.(nextValues);
  }

  function update(event) {
    const { name, value, type, checked } = event.target;
    const field = fieldByName.get(name);
    setValues((current) => {
      const nextValue = type === "checkbox" ? checked : sanitizeFieldValue(field, value);
      const next = { ...current, [name]: nextValue };
      const nextProject = name === "project" ? projectByName.get(nextValue) : null;
      if (nextProject && !next.location) {
        next.location = nextProject.location;
      }
      if (name === "location" && next.project) {
        const selectedProjectForCity = projectByName.get(next.project);
        if (selectedProjectForCity && normalizeLocation(selectedProjectForCity.location) !== normalizeLocation(nextValue)) {
          next.project = "";
        }
      }
      onValuesChange?.(next);
      return next;
    });
    setErrors((current) => {
      const next = { ...current, [name]: "" };
      if (name === "contactNumber" || name === "email") {
        next.contactNumber = "";
        next.email = "";
      }
      if (name === "project") {
        next.location = "";
      }
      if (name === "location") {
        next.project = "";
      }
      return next;
    });
    setNotice(null);
    setSubmittedLead(null);
  }

  function useProjectLocation() {
    if (!selectedProject) return;
    const nextValues = { ...values, location: selectedProject.location };
    commitValues(nextValues);
    setErrors((current) => ({ ...current, location: "" }));
    setNotice(null);
  }

  function clearSelectedProject() {
    const nextValues = { ...values, project: "" };
    commitValues(nextValues);
    setErrors((current) => ({ ...current, project: "" }));
    setNotice(null);
  }

  async function submit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateForm(values, required, fields, inquiryType);
    setErrors(nextErrors);
    setSubmittedLead(null);
    if (Object.keys(nextErrors).length) {
      const firstError = moveToFirstError(nextErrors);
      const count = Object.values(nextErrors).filter(Boolean).length;
      setNotice({ type: "error", text: `${count} field${count === 1 ? "" : "s"} need attention. Moving you to ${firstError?.label || "the first required field"}.` });
      return;
    }

    const payload = buildLeadPayload(values, inquiryType, allFields);
    const isComputationRequest = inquiryType === "Request Computation" || payload.inquiryType === "Request Computation";
    const endpoint = isComputationRequest ? "/api/request-computation" : "/api/leads";
    setStatus("submitting");
    setNotice(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await safeJson(response);
      const contentType = response.headers.get("content-type") || "";

      if (response.ok && data?.ok) {
        setSubmittedLead({
          referenceId: data.referenceId,
          submittedAt: data.submittedAt,
          inquiryType: payload.inquiryType,
          project: payload.projectInterestedIn,
          location: payload.cityLocation,
          preferredContactMethod: payload.preferredContactMethod
        });
        setNotice({
          type: "success",
          text: deliveredMessage
        });
        return;
      }

      const deliveryNotConfigured = data?.previewOnly || data?.code === "delivery_not_configured" || data?.code === "lead_delivery_not_configured";
      const missingLocalApi = canUseLocalPreview() && !data && (response.status === 404 || contentType.includes("text/html"));
      if (deliveryNotConfigured || missingLocalApi) {
        if (canUseLocalPreview()) {
          setNotice({ type: "warning", text: savePreviewSubmission(storageKey, payload) ? previewMessage : "Online delivery is not available in this test session, and your entries could not be kept on this device. Please contact Luisa directly to continue." });
          return;
        }

        setNotice({
          type: "error",
          text: data?.message || "Online inquiry delivery is not available right now. Please contact Luisa directly or try again later."
        });
        return;
      }

      if (data?.errors) {
        setErrors(data.errors);
        const firstError = moveToFirstError(data.errors);
        setNotice({ type: "error", text: data?.message || data?.error || `Please review ${firstError?.label || "the highlighted field"}.` });
        return;
      }
      setNotice({ type: "error", text: data?.message || data?.error || sendErrorMessage });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Lead form submission failed", error);
      }
      if (canUseLocalPreview()) {
        setNotice({ type: "warning", text: savePreviewSubmission(storageKey, payload) ? previewMessage : "Online delivery is not available in this test session, and your entries could not be kept on this device. Please contact Luisa directly to continue." });
        return;
      }
      setNotice({ type: "error", text: sendErrorMessage });
    } finally {
      setStatus("idle");
    }
  }

  function submitAnotherInquiry() {
    setSubmittedLead(null);
    setNotice(null);
    setErrors({});
    setStatus("idle");
    commitValues({ ...defaults, ...initialValues });
  }

  return (
    <form ref={formRef} className={`form-card ${compact ? "form-card-compact" : ""}`} onSubmit={submit} noValidate aria-busy={status === "submitting"}>
      <div className="form-intro">
        <span className="eyebrow">Buyer Inquiry</span>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="form-grid">
        <div className="hp-field" aria-hidden="true" hidden>
          <label htmlFor="field-website">Website</label>
          <input id="field-website" name="website" value={values.website || ""} onChange={update} tabIndex="-1" autoComplete="off" />
        </div>
        {displayFields.map((field) => (
          <Fragment key={field.name}>
            {field.section && <h3 className="form-section-label full"><span>{field.section}</span></h3>}
            <Field field={field} value={values[field.name] || ""} onChange={update} error={errors[field.name]} required={requiredSet.has(field.name)} dense={compact} />
            {field.name === "project" && selectedProject && (
              <SelectedProjectPreview project={selectedProject} mismatch={projectLocationMismatch} />
            )}
            {field.name === "project" && projectLocationFeedback && projectLocationMismatch && (
              <ProjectLocationNotice
                feedback={projectLocationFeedback}
                mismatch={projectLocationMismatch}
                onUseProjectLocation={useProjectLocation}
                onClearProject={clearSelectedProject}
              />
            )}
            {field.name === "contactMethod" && values.contactMethod && (
              <ContactMethodGuide method={values.contactMethod} hasPhone={Boolean(values.contactNumber)} hasEmail={Boolean(values.email)} />
            )}
            {field.name === "concernType" && values.concernType && <InquiryTypeGuide type={values.concernType} />}
          </Fragment>
        ))}
        <label className="consent full" htmlFor="field-consent">
          <input
            id="field-consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={update}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "field-consent-error" : undefined}
          />
          <span>I agree that Luisa may contact me about this inquiry. Prices, promos, terms, and availability will be confirmed before any reservation.</span>
        </label>
        <p className="form-note full">Your details are used only to respond to this inquiry. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
        {errors.consent && <small id="field-consent-error" className="error full">{errors.consent}</small>}
      </div>
      <p className="form-trust-note">Luisa reviews each request personally and follows up through your selected contact method.</p>
      {notice && notice.type === "success" && submittedLead ? (
        <LeadSuccessPanel info={submittedLead} onSubmitAnother={submitAnotherInquiry} />
      ) : notice && (
        <div className={`${notice.type}-message`} role={notice.type === "error" ? "alert" : "status"}>
          <p>{notice.text}</p>
          {notice.type !== "success" && (
            <DirectContactActions />
          )}
        </div>
      )}
      <Button type="submit" className="form-submit" disabled={status === "submitting"} aria-live="polite" aria-label={status === "submitting" ? "Sending inquiry" : undefined}>
        {status === "submitting" ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
}

function LeadSuccessPanel({ info, onSubmitAnother }) {
  const preferred = info.preferredContactMethod || "your preferred channel";
  const subject = info.project || info.location || "your DMCI inquiry";

  return (
    <div className="lead-success-panel" role="status" aria-live="polite">
      <div className="lead-success-header">
        <span>Inquiry received</span>
        {info.referenceId && <strong>Reference ID: {info.referenceId}</strong>}
      </div>
      <p>{deliveredMessage}</p>
      <ul className="lead-success-next" aria-label="What happens next">
        <li>Luisa reviews the details for {subject} before sharing any computation, availability, or viewing guidance.</li>
        <li>Pricing, promos, payment terms, and unit availability will be confirmed before any reservation step.</li>
        <li>Follow-up will be through {preferred}; direct contact options are also available below.</li>
      </ul>
      <DirectContactActions />
      <button type="button" className="success-secondary-action" onClick={onSubmitAnother}>
        Submit another inquiry
      </button>
    </div>
  );
}

function DirectContactActions() {
  return (
    <div className="form-direct-actions" aria-label="Direct contact options">
      <a href={contact.phoneHref}>Call</a>
      {contact.viber && <a href={contact.viber}>Viber</a>}
      <a href={contact.emailHref}>Email</a>
    </div>
  );
}

function validateForm(values, required, fields = [], inquiryType = "") {
  const requiredFields = [...new Set(["fullName", ...required, "consent"])];
  const nextErrors = validateRequired(values, requiredFields);
  const requiresContactNumber = requiredFields.includes("contactNumber");
  const requiresEmail = requiredFields.includes("email");
  const hasPhone = Boolean(String(values.contactNumber || "").trim());
  const hasEmail = Boolean(String(values.email || "").trim());
  const hasProjectOrLocation = Boolean(String(values.project || "").trim() || String(values.location || "").trim());
  const kind = inquiryKind(values.inquiryType || values.concernType || inquiryType);

  if (!String(values.fullName || "").trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }
  if (requiresContactNumber && !String(values.contactNumber || "").trim()) {
    nextErrors.contactNumber = "Please enter your mobile or contact number.";
  }
  if (requiresEmail && !String(values.email || "").trim()) {
    nextErrors.email = "Please enter your email address.";
  }
  if (!String(values.contactMethod || "").trim()) {
    nextErrors.contactMethod = "Please choose how Luisa should contact you.";
  }
  if (!hasPhone && !hasEmail) {
    nextErrors.contactNumber = "Provide a phone number or email address.";
    nextErrors.email = "Provide an email address or phone number.";
  }
  const contactKey = contactMethodKey(values.contactMethod);
  if (contactKey === "combined") {
    if (!hasPhone) nextErrors.contactNumber = "Add a mobile number for Email and Mobile follow-up.";
    if (!hasEmail) nextErrors.email = "Add an email address for Email and Mobile follow-up.";
  } else if (["call", "viber", "sms"].includes(contactKey) && !hasPhone) {
    nextErrors.contactNumber = `Add a phone number for ${values.contactMethod} follow-up.`;
  } else if (contactKey === "email" && !hasEmail) {
    nextErrors.email = "Add an email address for email follow-up.";
  }
  if ((kind === "computation" || kind === "availability") && !hasProjectOrLocation) {
    nextErrors.project = "Choose a project or project location.";
    nextErrors.location = "Choose a project location or project.";
  }
  if (kind === "viewing") {
    if (!hasProjectOrLocation) {
      nextErrors.project = "Choose a project or project location for the viewing request.";
      nextErrors.location = "Choose a project location or project for the viewing request.";
    }
    if (!String(values.preferredDate || "").trim()) {
      nextErrors.preferredDate = "Choose a preferred viewing date.";
    }
    if (!String(values.preferredTime || "").trim()) {
      nextErrors.preferredTime = "Choose a preferred viewing time.";
    }
  }
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
    nextErrors.email = "Use a valid email address.";
  }
  if (String(values.message || "").length > messageLimit) {
    nextErrors.message = `Please keep the message under ${messageLimit} characters.`;
  }
  fields.forEach((field) => {
    if (field.type !== "number" || !String(values[field.name] || "").trim()) return;
    const numericValue = Number(values[field.name]);
    const minimum = Number(field.min);
    const maximum = Number(field.max);

    if (!Number.isFinite(numericValue)) {
      nextErrors[field.name] = "Please enter a valid number.";
      return;
    }
    if (Number.isFinite(minimum) && numericValue < minimum) {
      nextErrors[field.name] = `Please enter at least ${minimum}.`;
      return;
    }
    if (Number.isFinite(maximum) && numericValue > maximum) {
      nextErrors[field.name] = `Please enter ${maximum} or less.`;
      return;
    }
    if (Number(field.step) === 1 && !Number.isInteger(numericValue)) {
      nextErrors[field.name] = "Please enter a whole number.";
    }
  });
  if (!values.consent) {
    nextErrors.consent = "Please confirm consent before sending.";
  }
  if (values.website) {
    nextErrors.website = "Please leave this field blank.";
  }

  return Object.fromEntries(Object.entries(nextErrors).filter(([, value]) => value));
}

function inquiryKind(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized.includes("view")) return "viewing";
  if (normalized.includes("availability") || normalized.includes("available")) return "availability";
  if (normalized.includes("computation") || normalized.includes("compute")) return "computation";
  return "general";
}

function withContextualOptions(field, values, projectCatalog) {
  if (field.name !== "project" || !projectCatalog.length) {
    return field;
  }

  if (!values.location) {
    return {
      ...field,
      helper: field.helper || "Choose a Project Location first to narrow this list, or open it now to view all approved projects."
    };
  }

  const matchingProjects = projectCatalog.filter((project) => normalizeLocation(project.location) === normalizeLocation(values.location));
  const projectCount = matchingProjects.length;
  const matchingOptions = matchingProjects.map((project) => project.name);
  const optionGroups = projectCount ? [{
    label: `${values.location} projects (${projectCount})`,
    options: matchingOptions
  }] : undefined;

  return {
    ...field,
    options: matchingOptions,
    optionGroups,
    placeholder: `Select ${values.location} project`,
    helper: projectCount
      ? `${projectCount} project${projectCount === 1 ? "" : "s"} available in ${values.location}. Change Project Location to view another area.`
      : `No project is tagged under ${values.location} yet. You can still ask Luisa for nearby options.`
  };
}

function normalizeLocation(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function buildLeadPayload(values, inquiryType, fieldNames) {
  const sourceUrl = typeof window === "undefined" ? "" : window.location.href;
  const sourcePage = typeof window === "undefined" ? "" : `${window.location.pathname}${window.location.search}`;
  const submittedAt = new Date().toISOString();
  const rawFields = fieldNames.reduce((fields, name) => {
    fields[name] = values[name] ?? "";
    return fields;
  }, {});

  return {
    fullName: values.fullName,
    contactNumber: values.contactNumber,
    mobileNumber: values.mobileNumber || values.contactNumber,
    name: values.fullName,
    phone: values.contactNumber,
    email: values.email,
    contactMethod: values.contactMethod,
    preferredContactMethod: values.contactMethod,
    nationality: values.nationality,
    currentLocation: values.currentLocation,
    buyerLocation: values.currentLocation,
    bestTimeToContact: values.bestTimeToContact,
    leadSource: values.leadSource,
    project: values.project,
    preferredProject: values.preferredProject || values.project,
    projectInterestedIn: values.project,
    location: values.location,
    preferredLocation: values.preferredLocation || values.location,
    cityLocation: values.location,
    inquiryType: values.inquiryType || values.concernType || inquiryType,
    unitType: values.unitType,
    budgetRange: values.budgetRange,
    paymentPreference: values.paymentPreference || values.paymentOption,
    buyerType: values.buyerType,
    timeline: values.timeline,
    purpose: values.purpose,
    messengerLink: values.messengerLink,
    message: values.message,
    sourcePage,
    sourceUrl,
    submittedAt,
    createdAt: submittedAt,
    consent: Boolean(values.consent),
    honeypot: values.website,
    rawFields
  };
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function Field({ field, value, onChange, error, required, dense = false }) {
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;
  const describedBy = [
    field.helper ? helperId : "",
    error ? errorId : ""
  ].filter(Boolean).join(" ") || undefined;
  const shared = {
    id,
    name: field.name,
    value,
    onChange,
    placeholder: field.placeholder || placeholderFor(field),
    autoComplete: field.autoComplete,
    inputMode: field.inputMode,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy
  };
  const numberProps = field.type === "number" ? {
    min: field.min,
    max: field.max,
    step: field.step,
    inputMode: field.inputMode,
    pattern: field.pattern,
    onKeyDown: blockInvalidNumberKeys
  } : {};
  return (
    <div className={`field field-${field.name} ${field.full ? "full" : ""} ${field.compact ? "compact" : ""} ${field.mobileFull ? "mobile-full" : ""} ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{field.label}{required && <span className="required-mark"> Required</span>}</label>
      {field.type === "textarea" ? (
        <textarea {...shared} rows={dense ? 3 : 5} maxLength={messageLimit} />
      ) : field.options ? (
        <select {...shared}>
          <option value="">{field.placeholder || `Select ${field.label}`}</option>
          {field.optionGroups ? field.optionGroups.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map((option) => <option key={`${group.label}-${optionValue(option)}`} value={optionValue(option)} disabled={Boolean(option.disabled)}>{optionLabel(option)}</option>)}
            </optgroup>
          )) : field.options.map((option) => <option key={optionValue(option)} value={optionValue(option)} disabled={Boolean(option.disabled)}>{optionLabel(option)}</option>)}
        </select>
      ) : (
        <input {...shared} {...numberProps} type={field.type || "text"} />
      )}
      {field.helper && <small id={helperId} className="field-helper">{field.helper}</small>}
      {error && <small id={errorId} className="error">{error}</small>}
    </div>
  );
}

function optionValue(option) {
  return typeof option === "string" ? option : option.value;
}

function optionLabel(option) {
  return typeof option === "string" ? option : option.label;
}

function sanitizeFieldValue(field, value) {
  if (field?.type !== "number") {
    return value;
  }

  const rawValue = String(value ?? "");
  if (!rawValue) {
    return "";
  }

  const numericMatch = rawValue.match(/\d+/);
  if (!numericMatch) {
    return "";
  }

  const numericValue = Number(numericMatch[0]);
  const minimum = Number(field.min);
  const maximum = Number(field.max);

  if (Number.isFinite(minimum) && numericValue < minimum) {
    return String(minimum);
  }
  if (Number.isFinite(maximum) && numericValue > maximum) {
    return String(maximum);
  }

  return String(numericValue);
}

function blockInvalidNumberKeys(event) {
  if (["-", "+", "e", "E"].includes(event.key)) {
    event.preventDefault();
  }
}

function SelectedProjectPreview({ project, mismatch }) {
  const imageSrc = project.thumbnail || project.image;
  return (
    <div className={`selected-project-preview ${mismatch ? "mismatch" : ""} full`} aria-live="polite">
      <ImagePlaceholder src={imageSrc} label={`${project.name} project preview`} compact variant="thumbnail" />
      <div>
        <span>{mismatch ? "Review selection" : "Selected project"}</span>
        <strong>{project.name}</strong>
        <small>{project.location}</small>
      </div>
    </div>
  );
}

function ProjectLocationNotice({ feedback, mismatch, onUseProjectLocation, onClearProject }) {
  return (
    <div className={`project-location-note ${mismatch ? "warning" : "matched"} full`} role="status">
      <div>
        <strong>{feedback.title}</strong>
        <p>{feedback.text}</p>
      </div>
      {mismatch && (
        <div className="project-location-actions">
          <button type="button" onClick={onUseProjectLocation}>Use project city</button>
          <button type="button" onClick={onClearProject}>Clear project</button>
        </div>
      )}
    </div>
  );
}

function ContactMethodGuide({ method, hasPhone, hasEmail }) {
  const guide = contactMethodGuide(method, hasPhone, hasEmail);
  return (
    <div className={`contact-method-guide ${guide.key} full`} role="status" aria-live="polite">
      <span className="contact-method-dot" aria-hidden="true" />
      <div>
        <strong>{guide.title}</strong>
        <p>{guide.text}</p>
      </div>
    </div>
  );
}

function InquiryTypeGuide({ type }) {
  const normalized = String(type || "").toLowerCase();
  if (normalized.includes("customer care") || normalized.includes("existing buyer")) {
    return (
      <div className="inquiry-type-guide full" role="status">
        <strong>Existing account support</strong>
        <p>Luisa will review your concern and help route it. Account, billing, turnover, warranty, and after-sales requests may be coordinated with the appropriate DMCI Homes Customer Care team.</p>
      </div>
    );
  }
  if (normalized.includes("leasing") || normalized.includes("rent to own")) {
    return (
      <div className="inquiry-type-guide full" role="status">
        <strong>Leasing or rent-to-own guidance</strong>
        <p>Luisa can discuss suitable options; current program eligibility and leasing terms will be confirmed through the appropriate DMCI Homes channel.</p>
      </div>
    );
  }
  return null;
}

function contactMethodGuide(method, hasPhone, hasEmail) {
  const key = contactMethodKey(method);
  const guides = {
    combined: {
      key: "combined",
      title: hasPhone && hasEmail ? "Luisa can follow up by email and mobile." : "Add both email and mobile details.",
      text: "Documents can be sent by email, with quick confirmations handled by call, SMS, or Viber."
    },
    call: {
      key: "call",
      title: hasPhone ? "Luisa will call this number first." : "Add a mobile number for a call request.",
      text: "If unanswered, she may send a short SMS or Viber follow-up."
    },
    viber: {
      key: "viber",
      title: hasPhone ? "Luisa will message this number on Viber first." : "Add a mobile number for Viber.",
      text: "Enter the mobile number linked to Viber in the Phone Number field above."
    },
    email: {
      key: "email",
      title: hasEmail ? "Luisa will reply by email first." : "Add an email address for email follow-up.",
      text: "Computation references and longer details are easiest to review by email."
    },
    sms: {
      key: "sms",
      title: hasPhone ? "Luisa will send a short SMS first." : "Add a mobile number for SMS.",
      text: "Good for quick confirmation, schedule checks, and short updates."
    },
    general: {
      key: "general",
      title: "Choose how Luisa should contact you first.",
      text: "You can still provide both mobile and email so follow-up is easier."
    }
  };
  return guides[key] || guides.general;
}

function contactMethodKey(value) {
  const method = String(value || "").toLowerCase();
  if (method.includes("email and mobile")) return "combined";
  if (method.includes("viber")) return "viber";
  if (method.includes("email")) return "email";
  if (method.includes("sms") || method.includes("text")) return "sms";
  if (method.includes("call") || method.includes("phone")) return "call";
  return "general";
}

function placeholderFor(field) {
  const placeholders = {
    fullName: "First and last name",
    contactNumber: "Mobile or landline number",
    email: "you@example.com",
    currentLocation: "City and country",
    nationality: "Select nationality",
    message: "Share the details Luisa should consider.",
    preferredDate: "Select preferred date",
    preferredTime: "Select preferred time",
    guests: "Number of guests"
  };
  return placeholders[field.name] || "";
}

function canUseLocalPreview() {
  if (import.meta.env.DEV) return true;
  if (typeof window === "undefined") return false;
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function savePreviewSubmission(storageKey, payload) {
  try {
    saveSubmission(storageKey, payload);
    return true;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Preview inquiry could not be saved locally", error);
    }
    return false;
  }
}
