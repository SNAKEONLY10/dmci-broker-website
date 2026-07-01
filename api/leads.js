import { randomUUID } from "node:crypto";

const messageLimit = 1500;
const allowedMethods = "POST, OPTIONS";

export default async function handler(req, res) {
  setHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed." });
    return;
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ ok: false, message: "Invalid JSON payload." });
      return;
    }
  }

  if (body.honeypot) {
    res.status(200).json({ ok: true, referenceId: randomUUID() });
    return;
  }

  const { lead, errors } = normalizeLead(body);
  if (Object.keys(errors).length) {
    res.status(400).json({ ok: false, message: "Please review the highlighted fields.", errors });
    return;
  }

  const providers = configuredProviders();
  if (!providers.length) {
    res.status(200).json({
      ok: false,
      code: "lead_delivery_not_configured",
      previewOnly: true,
      message: "Lead delivery is not configured yet. The site can save this inquiry locally for preview testing."
    });
    return;
  }

  const results = await Promise.allSettled(providers.map((provider) => provider.send(lead)));
  const delivered = results.some((result) => result.status === "fulfilled");

  if (!delivered) {
    console.error("Lead delivery failed", results.map((result) => result.reason?.message || "Unknown error"));
    res.status(502).json({
      ok: false,
      code: "lead_delivery_failed",
      message: "Your inquiry could not be delivered right now. Please contact Luisa directly using the contact details on this page."
    });
    return;
  }

  const warnings = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason?.message || "A configured delivery provider failed.");
  const deliveredTo = providers
    .filter((provider, index) => results[index].status === "fulfilled")
    .map((provider) => provider.name);

  res.status(200).json({
    ok: true,
    referenceId: lead.referenceId,
    submittedAt: lead.submittedAt,
    deliveredTo,
    warnings
  });
}

function setHeaders(res) {
  res.setHeader("Allow", allowedMethods);
  res.setHeader("Cache-Control", "no-store");
}

function normalizeLead(payload) {
  const errors = {};
  const lead = {
    referenceId: randomUUID(),
    name: clean(payload.name || payload.fullName, 120),
    phone: clean(payload.phone || payload.contactNumber, 60),
    email: clean(payload.email, 160),
    preferredContactMethod: clean(payload.preferredContactMethod || payload.contactMethod, 80),
    projectInterestedIn: clean(payload.projectInterestedIn || payload.project, 160),
    cityLocation: clean(payload.cityLocation || payload.location, 160),
    inquiryType: clean(payload.inquiryType || "general", 80),
    message: clean(payload.message, messageLimit),
    sourcePage: clean(payload.sourcePage, 300),
    sourceUrl: clean(payload.sourceUrl, 500),
    submittedAt: new Date().toISOString(),
    clientSubmittedAt: clean(payload.submittedAt, 80),
    consent: isTruthy(payload.consent),
    rawFields: sanitizeRawFields(payload.rawFields)
  };

  if (!lead.name) errors.fullName = "Please enter your full name.";
  if (!lead.preferredContactMethod) errors.contactMethod = "Please choose how Luisa should contact you.";
  if (!lead.phone && !lead.email) {
    errors.contactNumber = "Provide a phone number or email address.";
    errors.email = "Provide an email address or phone number.";
  }
  if (lead.email && !/^\S+@\S+\.\S+$/.test(lead.email)) {
    errors.email = "Use a valid email address.";
  }
  if (String(payload.message || "").length > messageLimit) {
    errors.message = `Please keep the message under ${messageLimit} characters.`;
  }
  if (!lead.consent) errors.consent = "Please confirm consent before sending.";

  return { lead, errors };
}

function configuredProviders() {
  const providers = [];
  if (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_TO && process.env.LEAD_EMAIL_FROM) {
    providers.push({ name: "email", send: sendEmail });
  }
  if (process.env.LEADS_WEBHOOK_URL) {
    providers.push({ name: "webhook", send: sendWebhook });
  }
  return providers;
}

async function sendEmail(lead) {
  const subjectPrefix = process.env.LEAD_EMAIL_SUBJECT_PREFIX || "DMCI Broker Lead";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM,
      to: splitRecipients(process.env.LEAD_EMAIL_TO),
      reply_to: lead.email || process.env.LEAD_EMAIL_REPLY_TO || undefined,
      subject: `${subjectPrefix}: ${lead.inquiryType || "Inquiry"}${lead.projectInterestedIn ? ` - ${lead.projectInterestedIn}` : ""}`,
      text: formatLeadText(lead),
      html: formatLeadHtml(lead)
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Email provider failed with ${response.status}: ${details.slice(0, 300)}`);
  }
}

async function sendWebhook(lead) {
  const headers = { "Content-Type": "application/json" };
  if (process.env.LEADS_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.LEADS_WEBHOOK_SECRET}`;
  }

  const response = await fetch(process.env.LEADS_WEBHOOK_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ lead })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Lead webhook failed with ${response.status}: ${details.slice(0, 300)}`);
  }
}

function formatLeadText(lead) {
  return [
    "New DMCI broker inquiry",
    "",
    `Reference ID: ${lead.referenceId}`,
    `Submitted at: ${lead.submittedAt}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `Preferred contact method: ${lead.preferredContactMethod || "Not provided"}`,
    `Project: ${lead.projectInterestedIn || "Not provided"}`,
    `Location: ${lead.cityLocation || "Not provided"}`,
    `Inquiry type: ${lead.inquiryType || "general"}`,
    `Source page: ${lead.sourcePage || lead.sourceUrl || "Not provided"}`,
    "",
    "Message:",
    lead.message || "No message provided.",
    "",
    "Reminder: Project details, pricing, promos, terms, and availability are subject to confirmation."
  ].join("\n");
}

function formatLeadHtml(lead) {
  const rows = [
    ["Reference ID", lead.referenceId],
    ["Submitted at", lead.submittedAt],
    ["Name", lead.name],
    ["Phone", lead.phone || "Not provided"],
    ["Email", lead.email || "Not provided"],
    ["Preferred contact method", lead.preferredContactMethod || "Not provided"],
    ["Project", lead.projectInterestedIn || "Not provided"],
    ["Location", lead.cityLocation || "Not provided"],
    ["Inquiry type", lead.inquiryType || "general"],
    ["Source page", lead.sourcePage || lead.sourceUrl || "Not provided"]
  ];
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#102a45">
      <h2>New DMCI broker inquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb">
        ${rows.map(([label, value]) => `<tr><th align="left" style="border:1px solid #e5e7eb;background:#f7fbfd">${escapeHtml(label)}</th><td style="border:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`).join("")}
      </table>
      <h3>Message</h3>
      <p>${escapeHtml(lead.message || "No message provided.").replace(/\n/g, "<br>")}</p>
      <p><strong>Reminder:</strong> Project details, pricing, promos, terms, and availability are subject to confirmation.</p>
    </div>
  `;
}

function clean(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function sanitizeRawFields(rawFields) {
  if (!rawFields || typeof rawFields !== "object") return {};
  return Object.fromEntries(
    Object.entries(rawFields).map(([key, value]) => [clean(key, 80), clean(value, 500)])
  );
}

function splitRecipients(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function isTruthy(value) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
