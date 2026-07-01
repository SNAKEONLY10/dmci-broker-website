import { useMemo, useState } from "react";
import { saveSubmission, validateRequired } from "../utils/storage";
import { Button } from "./Button";

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
const messageLimit = 1500;

export function DemoForm({ title, subtitle, fields, storageKey, submitLabel, initialValues = {}, required = [], inquiryType = "general" }) {
  const [values, setValues] = useState({ ...defaults, ...initialValues });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(null);
  const [status, setStatus] = useState("idle");
  const requiredSet = new Set(required);
  const allFields = useMemo(() => fields.map((field) => field.name), [fields]);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors((current) => {
      const next = { ...current, [name]: "" };
      if (name === "contactNumber" || name === "email") {
        next.contactNumber = "";
        next.email = "";
      }
      return next;
    });
    setNotice(null);
  }

  async function submit(event) {
    event.preventDefault();
    const nextErrors = validateForm(values, required);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setNotice({ type: "error", text: "Please review the highlighted fields before sending." });
      return;
    }

    const payload = buildLeadPayload(values, inquiryType, allFields);
    setStatus("submitting");
    setNotice(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await safeJson(response);
      const contentType = response.headers.get("content-type") || "";

      if (response.ok && data?.ok) {
        setNotice({ type: "success", text: deliveredMessage });
        setValues({ ...defaults, ...initialValues });
        return;
      }

      if (data?.previewOnly || data?.code === "lead_delivery_not_configured" || (!data && (response.status === 404 || contentType.includes("text/html")))) {
        saveSubmission(storageKey, payload);
        setNotice({ type: "success", text: previewMessage });
        setValues({ ...defaults, ...initialValues });
        return;
      }

      if (data?.errors) {
        setErrors(data.errors);
      }
      setNotice({ type: "error", text: data?.message || "Your inquiry was not delivered. Please contact Luisa directly using the contact details on this page." });
    } catch {
      saveSubmission(storageKey, payload);
      setNotice({ type: "success", text: previewMessage });
      setValues({ ...defaults, ...initialValues });
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate aria-busy={status === "submitting"}>
      <div className="form-intro">
        <span className="eyebrow">Buyer Inquiry</span>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="form-grid">
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="field-website">Website</label>
          <input id="field-website" name="website" value={values.website || ""} onChange={update} tabIndex="-1" autoComplete="off" />
        </div>
        {fields.map((field) => (
          <Field key={field.name} field={field} value={values[field.name] || ""} onChange={update} error={errors[field.name]} required={requiredSet.has(field.name)} />
        ))}
        <label className="consent full">
          <input name="consent" type="checkbox" checked={values.consent} onChange={update} />
          <span>I agree to be contacted regarding my DMCI inquiry. Project details, pricing, promos, and availability are subject to confirmation.</span>
        </label>
        <p className="form-note full">Submissions are sent through a secure backend endpoint when email/CRM credentials are configured. If delivery is not configured, the form clearly falls back to local preview storage only. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
        {errors.consent && <small className="error full">{errors.consent}</small>}
      </div>
      {notice && <div className={`${notice.type}-message`} role="status">{notice.text}</div>}
      <Button type="submit" className="form-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
}

function validateForm(values, required) {
  const requiredFields = [...new Set(["fullName", ...required, "consent"])];
  const nextErrors = validateRequired(values, requiredFields);

  if (!String(values.fullName || "").trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }
  if (!String(values.contactMethod || "").trim()) {
    nextErrors.contactMethod = "Please choose how Luisa should contact you.";
  }
  if (!String(values.contactNumber || "").trim() && !String(values.email || "").trim()) {
    nextErrors.contactNumber = "Provide a phone number or email address.";
    nextErrors.email = "Provide an email address or phone number.";
  }
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
    nextErrors.email = "Use a valid email address.";
  }
  if (String(values.message || "").length > messageLimit) {
    nextErrors.message = `Please keep the message under ${messageLimit} characters.`;
  }
  if (!values.consent) {
    nextErrors.consent = "Please confirm consent before sending.";
  }
  if (values.website) {
    nextErrors.website = "Please leave this field blank.";
  }

  return Object.fromEntries(Object.entries(nextErrors).filter(([, value]) => value));
}

function buildLeadPayload(values, inquiryType, fieldNames) {
  const sourceUrl = typeof window === "undefined" ? "" : window.location.href;
  const sourcePage = typeof window === "undefined" ? "" : `${window.location.pathname}${window.location.search}`;
  const rawFields = fieldNames.reduce((fields, name) => {
    fields[name] = values[name] ?? "";
    return fields;
  }, {});

  return {
    name: values.fullName,
    phone: values.contactNumber,
    email: values.email,
    preferredContactMethod: values.contactMethod,
    projectInterestedIn: values.project,
    cityLocation: values.location,
    inquiryType: values.inquiryType || values.concernType || inquiryType,
    message: values.message,
    sourcePage,
    sourceUrl,
    submittedAt: new Date().toISOString(),
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
  const shared = {
    id,
    name: field.name,
    value,
    onChange,
    placeholder: field.placeholder || "",
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined
  };
  return (
    <div className={`field ${field.full ? "full" : ""}`}>
      <label htmlFor={id}>{field.label}{required && <span className="required-mark"> Required</span>}</label>
      {field.type === "textarea" ? (
        <textarea {...shared} rows="5" maxLength={messageLimit} />
      ) : field.options ? (
        <select {...shared}>
          <option value="">Select {field.label}</option>
          {field.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input {...shared} type={field.type || "text"} />
      )}
      {error && <small id={errorId} className="error">{error}</small>}
    </div>
  );
}
