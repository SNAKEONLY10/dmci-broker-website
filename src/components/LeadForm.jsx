import { Fragment, useMemo, useState } from "react";
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
  message: "",
  consent: false,
  website: ""
};

const previewMessage = "Preview mode: your inquiry was saved locally for testing. Email/CRM delivery is not connected yet.";
const deliveredMessage = "Your inquiry has been submitted. Luisa or her team will contact you after details are confirmed.";
const sendErrorMessage = "We could not send your inquiry right now. Please try again or contact Luisa directly.";
const messageLimit = 1500;

export function DemoForm({ title, subtitle, fields, storageKey, submitLabel, initialValues = {}, required = [], inquiryType = "general", projectCatalog = [], onValuesChange, compact = false }) {
  const [values, setValues] = useState({ ...defaults, ...initialValues });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(null);
  const [status, setStatus] = useState("idle");
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
      ? `You selected ${values.location}. You can keep it for comparison, but Luisa will confirm the correct project location before preparing computation.`
      : "The city and project now match for a cleaner computation request."
  } : null;

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
    if (Object.keys(nextErrors).length) {
      setNotice({ type: "error", text: "Please review the highlighted fields before sending." });
      return;
    }

    const payload = buildLeadPayload(values, inquiryType, allFields);
    const isComputationRequest = inquiryType === "Request Computation" || payload.inquiryType === "Request Computation";
    const endpoint = isComputationRequest ? "/api/request-computation" : "/api/leads";
    setStatus("submitting");
    setNotice(null);
    saveSubmission(storageKey, payload);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await safeJson(response);
      const contentType = response.headers.get("content-type") || "";

      if (response.ok && data?.ok) {
        setNotice({
          type: "success",
          text: data.referenceId
            ? `${deliveredMessage} Reference ID: ${data.referenceId}.`
            : deliveredMessage
        });
        commitValues({ ...defaults, ...initialValues });
        return;
      }

      const deliveryNotConfigured = data?.previewOnly || data?.code === "delivery_not_configured" || data?.code === "lead_delivery_not_configured";
      const missingLocalApi = canUseLocalPreview() && !data && (response.status === 404 || contentType.includes("text/html"));
      if (deliveryNotConfigured || missingLocalApi) {
        if (canUseLocalPreview()) {
          setNotice({ type: "warning", text: previewMessage });
          commitValues({ ...defaults, ...initialValues });
          return;
        }

        setNotice({
          type: "error",
          text: data?.message || "Email/CRM delivery is not configured yet. Please contact Luisa directly or try again later."
        });
        return;
      }

      if (data?.errors) {
        setErrors(data.errors);
        setNotice({ type: "error", text: data?.message || data?.error || "Please review the highlighted fields before sending." });
        return;
      }
      setNotice({ type: "error", text: data?.message || data?.error || sendErrorMessage });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Lead form submission failed", error);
      }
      if (canUseLocalPreview()) {
        setNotice({ type: "warning", text: previewMessage });
        commitValues({ ...defaults, ...initialValues });
        return;
      }
      setNotice({ type: "error", text: sendErrorMessage });
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form className={`form-card ${compact ? "form-card-compact" : ""}`} onSubmit={submit} noValidate aria-busy={status === "submitting"}>
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
            <Field field={field} value={values[field.name] || ""} onChange={update} error={errors[field.name]} required={requiredSet.has(field.name)} />
            {field.name === "project" && selectedProject && (
              <SelectedProjectPreview project={selectedProject} mismatch={projectLocationMismatch} />
            )}
            {field.name === "project" && projectLocationFeedback && (
              <ProjectLocationNotice
                feedback={projectLocationFeedback}
                mismatch={projectLocationMismatch}
                onUseProjectLocation={useProjectLocation}
                onClearProject={clearSelectedProject}
              />
            )}
            {field.name === "contactMethod" && (
              <ContactMethodGuide method={values.contactMethod} hasPhone={Boolean(values.contactNumber)} hasEmail={Boolean(values.email)} />
            )}
          </Fragment>
        ))}
        <label className="consent full" htmlFor="field-consent">
          <input id="field-consent" name="consent" type="checkbox" checked={values.consent} onChange={update} />
          <span>I agree to be contacted regarding my DMCI inquiry. Project details, pricing, promos, and availability are subject to confirmation.</span>
        </label>
        <p className="form-note full">Your inquiry details are used for DMCI Homes buyer assistance and contact follow-up. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
        {errors.consent && <small className="error full">{errors.consent}</small>}
      </div>
      <p className="form-trust-note">Luisa reviews each inquiry before sharing project references, computations, or viewing guidance. Final pricing, promos, and availability are confirmed through authorized sales channels.</p>
      {notice && (
        <div className={`${notice.type}-message`} role={notice.type === "error" ? "alert" : "status"}>
          <p>{notice.text}</p>
          {notice.type !== "success" && (
            <div className="form-direct-actions" aria-label="Direct contact options">
              <a href={contact.phoneHref}>Call Luisa</a>
              <a href={contact.emailHref}>Email Luisa</a>
            </div>
          )}
        </div>
      )}
      <Button type="submit" className="form-submit" disabled={status === "submitting"} aria-live="polite" aria-label={status === "submitting" ? "Sending inquiry" : undefined}>
        {status === "submitting" ? "Sending..." : submitLabel}
      </Button>
    </form>
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
  if ((kind === "computation" || kind === "availability") && !hasProjectOrLocation) {
    nextErrors.project = "Choose a project or city/location.";
    nextErrors.location = "Choose a city/location or project.";
  }
  if (kind === "viewing") {
    if (!hasProjectOrLocation) {
      nextErrors.project = "Choose a project or city/location for the viewing request.";
      nextErrors.location = "Choose a city/location or project for the viewing request.";
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
      helper: field.helper || "Choose a City / Location first to narrow this list, or open it now to view all approved projects."
    };
  }

  const matchingProjects = projectCatalog.filter((project) => normalizeLocation(project.location) === normalizeLocation(values.location));
  const otherProjects = projectCatalog.filter((project) => normalizeLocation(project.location) !== normalizeLocation(values.location));
  const optionGroups = [
    { label: `${values.location} Projects`, options: matchingProjects.map((project) => project.name) },
    {
      label: "Other approved projects - change city first",
      options: otherProjects.map((project) => ({
        value: project.name,
        label: `${project.name} - ${project.location}`,
        disabled: true
      }))
    }
  ].filter((group) => group.options.length);
  const projectCount = matchingProjects.length;

  return {
    ...field,
    options: matchingProjects.length ? matchingProjects.map((project) => project.name) : field.options,
    optionGroups: matchingProjects.length ? optionGroups : undefined,
    placeholder: `Select ${values.location} project`,
    helper: matchingProjects.length
      ? `Showing ${projectCount} ${values.location} project${projectCount === 1 ? "" : "s"}. Change City / Location to update this shortlist.`
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

function Field({ field, value, onChange, error, required }) {
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
    <div className={`field ${field.full ? "full" : ""} ${field.compact ? "compact" : ""} ${field.mobileFull ? "mobile-full" : ""}`}>
      <label htmlFor={id}>{field.label}{required && <span className="required-mark"> Required</span>}</label>
      {field.type === "textarea" ? (
        <textarea {...shared} rows="5" maxLength={messageLimit} />
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

function contactMethodGuide(method, hasPhone, hasEmail) {
  const key = contactMethodKey(method);
  const guides = {
    call: {
      key: "call",
      title: hasPhone ? "Luisa will call this number first." : "Add a mobile number for a call request.",
      text: "If unanswered, she may send a short SMS or Viber follow-up."
    },
    viber: {
      key: "viber",
      title: hasPhone ? "Luisa will message this number on Viber first." : "Add a mobile number for Viber.",
      text: "Use the same Mobile / Viber field above. No separate Viber link is required."
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
  if (method.includes("viber")) return "viber";
  if (method.includes("email")) return "email";
  if (method.includes("sms") || method.includes("text")) return "sms";
  if (method.includes("call") || method.includes("phone")) return "call";
  return "general";
}

function placeholderFor(field) {
  const placeholders = {
    fullName: "Your full name",
    contactNumber: "09XX XXX XXXX",
    email: "name@email.com",
    message: "Preferred unit, budget, schedule, or questions.",
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
