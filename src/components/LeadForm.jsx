import { useState } from "react";
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
  contactMethod: "Viber",
  message: "",
  consent: false
};

export function DemoForm({ title, subtitle, fields, storageKey, submitLabel, initialValues = {}, required = [] }) {
  const [values, setValues] = useState({ ...defaults, ...initialValues });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const requiredSet = new Set(required);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  function submit(event) {
    event.preventDefault();
    const nextErrors = validateRequired(values, [...required, "consent"]);
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Use a valid email address.";
    }
    if (!values.consent) {
      nextErrors.consent = "Please confirm consent before sending.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // TODO: Connect to backend email/CRM endpoint later.
    saveSubmission(storageKey, values);
    setSuccess("Preview mode: this inquiry is saved locally in this browser for testing. Email/CRM delivery to Luisa is not connected yet.");
    setValues({ ...defaults, ...initialValues });
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="form-intro">
        <span className="eyebrow">Buyer Inquiry</span>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="form-grid">
        {fields.map((field) => (
          <Field key={field.name} field={field} value={values[field.name] || ""} onChange={update} error={errors[field.name]} required={requiredSet.has(field.name)} />
        ))}
        <label className="consent full">
          <input name="consent" type="checkbox" checked={values.consent} onChange={update} />
          <span>I agree to be contacted by Luisa regarding my inquiry and understand that project details are subject to confirmation.</span>
        </label>
        <p className="form-note full">Form submissions are currently stored locally for preview validation until a production email, CRM, or database endpoint is connected. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
        {errors.consent && <small className="error full">{errors.consent}</small>}
      </div>
      {success && <div className="success-message">{success}</div>}
      <Button type="submit" className="form-submit">{submitLabel}</Button>
    </form>
  );
}

function Field({ field, value, onChange, error, required }) {
  const id = `field-${field.name}`;
  const shared = { id, name: field.name, value, onChange, placeholder: field.placeholder || "", required };
  return (
    <div className={`field ${field.full ? "full" : ""}`}>
      <label htmlFor={id}>{field.label}{required && <span className="required-mark"> Required</span>}</label>
      {field.type === "textarea" ? (
        <textarea {...shared} rows="5" />
      ) : field.options ? (
        <select {...shared}>
          <option value="">Select {field.label}</option>
          {field.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input {...shared} type={field.type || "text"} />
      )}
      {error && <small className="error">{error}</small>}
    </div>
  );
}
