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
      code: "delivery_not_configured",
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
    inquiryType: clean(payload.inquiryType, 80),
    message: clean(payload.message, messageLimit),
    sourcePage: clean(payload.sourcePage, 300),
    sourceUrl: clean(payload.sourceUrl, 500),
    submittedAt: new Date().toISOString(),
    clientSubmittedAt: clean(payload.submittedAt, 80),
    consent: isTruthy(payload.consent),
    rawFields: sanitizeRawFields(payload.rawFields)
  };

  if (!lead.name) errors.fullName = "Please enter your full name.";
  if (!lead.inquiryType) errors.inquiryType = "Please choose an inquiry type.";
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
      "Content-Type": "application/json",
      "Idempotency-Key": lead.referenceId
    },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM,
      to: splitRecipients(process.env.LEAD_EMAIL_TO),
      reply_to: lead.email || process.env.LEAD_EMAIL_REPLY_TO || undefined,
      subject: `${subjectPrefix}: ${titleCase(lead.inquiryType || "Inquiry")}${lead.projectInterestedIn ? ` - ${lead.projectInterestedIn}` : ""}`,
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
  const quickActions = [
    lead.phone ? `Call lead: ${telHref(lead.phone)}` : "",
    lead.email ? `Reply by email: mailto:${lead.email}` : "",
    safeUrl(lead.sourceUrl) ? `Open source page: ${lead.sourceUrl}` : ""
  ].filter(Boolean);

  return [
    "New DMCI broker inquiry",
    "Lead submitted from Maria Luisa Corral's DMCI broker website",
    "",
    `Reference ID: ${lead.referenceId}`,
    `Submitted at: ${lead.submittedAt}`,
    "",
    "Priority summary",
    `Inquiry type: ${titleCase(lead.inquiryType || "General Inquiry")}`,
    `Interested project: ${lead.projectInterestedIn || "Not provided"}`,
    `City/location: ${lead.cityLocation || "Not provided"}`,
    `Preferred contact method: ${lead.preferredContactMethod || "Not provided"}`,
    `Source page: ${lead.sourcePage || lead.sourceUrl || "Not provided"}`,
    "",
    "Lead information",
    `Name: ${lead.name}`,
    `Phone / Viber: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `Message: ${lead.message || "No message provided."}`,
    "",
    "Project interest",
    `Project: ${lead.projectInterestedIn || "Not provided"}`,
    `Location: ${lead.cityLocation || "Not provided"}`,
    `Inquiry type: ${titleCase(lead.inquiryType || "General Inquiry")}`,
    `Source page: ${lead.sourcePage || lead.sourceUrl || "Not provided"}`,
    "",
    "Consent and compliance",
    `Consent checked: ${lead.consent ? "Yes" : "No"}`,
    "Project details, pricing, availability, promos, and terms are subject to confirmation.",
    "",
    "Quick actions",
    ...(quickActions.length ? quickActions : ["No quick action links available."]),
    "",
    "Broker footer",
    "Maria Luisa Corral",
    "mrcorral@dmcihomes.com",
    "Mobile/Viber: 0998 865 8902",
    "Office: 02 8888 7777 local 5860",
    "PRC License No. 0003253"
  ].join("\n");
}

function formatLeadHtml(lead) {
  const submittedLabel = formatDateTime(lead.submittedAt);
  const sourceUrl = safeUrl(lead.sourceUrl);
  const summaryRows = [
    ["Inquiry type", titleCase(lead.inquiryType || "General Inquiry")],
    ["Interested project", lead.projectInterestedIn || "Not provided"],
    ["City/location", lead.cityLocation || "Not provided"],
    ["Preferred contact", lead.preferredContactMethod || "Not provided"],
    ["Source page", lead.sourcePage || lead.sourceUrl || "Not provided"]
  ];
  const leadRows = [
    ["Full name", lead.name],
    ["Phone / Viber", lead.phone || "Not provided"],
    ["Email", lead.email || "Not provided"],
    ["Preferred contact method", lead.preferredContactMethod || "Not provided"]
  ];
  const projectRows = [
    ["Project name", lead.projectInterestedIn || "Not provided"],
    ["City/location", lead.cityLocation || "Not provided"],
    ["Inquiry type", titleCase(lead.inquiryType || "General Inquiry")],
    ["Source route/page", lead.sourcePage || lead.sourceUrl || "Not provided"]
  ];
  const actions = [
    lead.phone ? buttonLink(telHref(lead.phone), "Call lead") : "",
    lead.email ? buttonLink(`mailto:${lead.email}`, "Reply by email", true) : "",
    sourceUrl ? buttonLink(sourceUrl, "Open source page", true) : ""
  ].filter(Boolean).join("");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f4f7f8;color:#102a45;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#f4f7f8;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #dfe7ec;border-radius:18px;overflow:hidden;box-shadow:0 18px 44px rgba(16,42,69,0.10);">
                <tr>
                  <td style="padding:30px 30px 24px;background:#0f2a43;color:#ffffff;">
                    <p style="margin:0 0 10px;color:#d8b65d;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">Maria Luisa Corral DMCI Broker Website</p>
                    <h1 style="margin:0;font-size:28px;line-height:1.18;font-weight:750;">New DMCI Broker Inquiry</h1>
                    <p style="margin:10px 0 0;color:#dbe7ef;font-size:14px;line-height:1.55;">Lead submitted from Maria Luisa Corral's DMCI broker website</p>
                    <p style="margin:14px 0 0;color:#ffffff;font-size:13px;">Submitted: <strong>${escapeHtml(submittedLabel)}</strong></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:26px 30px 8px;">
                    ${sectionTitle("Priority Summary")}
                    ${summaryCard(summaryRows)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 30px 0;">
                    ${sectionTitle("Lead Information")}
                    ${infoTable(leadRows)}
                    <div style="margin-top:16px;padding:16px 18px;background:#f8fbfc;border:1px solid #e5edf2;border-radius:14px;">
                      <p style="margin:0 0 8px;color:#486176;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.9px;">Message</p>
                      <p style="margin:0;color:#102a45;font-size:15px;line-height:1.7;">${escapeHtml(lead.message || "No message provided.").replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 30px 0;">
                    ${sectionTitle("Project Interest")}
                    ${infoTable(projectRows)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 30px 0;">
                    ${sectionTitle("Consent and Compliance")}
                    <div style="padding:16px 18px;background:#fffaf0;border:1px solid #ead8a8;border-radius:14px;">
                      <p style="margin:0 0 8px;color:#102a45;font-size:15px;"><strong>Consent checked:</strong> ${lead.consent ? "Yes" : "No"}</p>
                      <p style="margin:0;color:#5d6b78;font-size:13px;line-height:1.6;">Project details, pricing, availability, promos, and terms are subject to confirmation.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 30px 4px;">
                    ${sectionTitle("Quick Actions")}
                    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                      <tr><td>${actions || '<span style="color:#667085;font-size:14px;">No quick action links available.</span>'}</td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 30px 30px;">
                    <div style="border-top:1px solid #e8eef2;padding-top:20px;">
                      <p style="margin:0 0 8px;color:#102a45;font-size:16px;font-weight:800;">Maria Luisa Corral</p>
                      <p style="margin:0;color:#5c6f80;font-size:13px;line-height:1.7;">
                        mrcorral@dmcihomes.com<br>
                        Mobile/Viber: 0998 865 8902<br>
                        Office: 02 8888 7777 local 5860<br>
                        PRC License No. 0003253
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function sectionTitle(label) {
  return `<h2 style="margin:0 0 12px;color:#102a45;font-size:17px;line-height:1.35;">${escapeHtml(label)}</h2>`;
}

function summaryCard(rows) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:separate;border-spacing:0;background:#f8fbfc;border:1px solid #e4edf2;border-radius:14px;">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e8eef2;color:#667085;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;width:38%;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e8eef2;color:#102a45;font-size:15px;font-weight:700;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function infoTable(rows) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:10px 0;color:#667085;font-size:13px;width:42%;border-bottom:1px solid #edf2f5;">${escapeHtml(label)}</td>
          <td style="padding:10px 0;color:#102a45;font-size:14px;font-weight:700;border-bottom:1px solid #edf2f5;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function buttonLink(href, label, secondary = false) {
  const background = secondary ? "#ffffff" : "#d8b65d";
  const color = secondary ? "#102a45" : "#102a45";
  const border = secondary ? "1px solid #cbd8df" : "1px solid #d8b65d";
  return `<a href="${escapeAttribute(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 16px;border-radius:999px;background:${background};border:${border};color:${color};font-size:13px;font-weight:800;text-decoration:none;">${escapeHtml(label)}</a>`;
}

function telHref(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  const normalized = digits.startsWith("0") ? `+63${digits.slice(1)}` : digits.startsWith("63") ? `+${digits}` : `+${digits}`;
  return `tel:${normalized}`;
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") return url.toString();
  } catch {
    return "";
  }
  return "";
}

function formatDateTime(value) {
  try {
    return new Intl.DateTimeFormat("en-PH", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Manila"
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
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

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
