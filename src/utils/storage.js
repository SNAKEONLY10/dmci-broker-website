export function saveSubmission(key, payload) {
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  const record = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload
  };
  localStorage.setItem(key, JSON.stringify([record, ...existing]));
  return record;
}

export function validateRequired(values, fields) {
  return fields.reduce((errors, field) => {
    if (!String(values[field] || "").trim()) {
      errors[field] = "This field is required.";
    }
    return errors;
  }, {});
}
