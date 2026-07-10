import { randomUUID } from "node:crypto";

const messageLimit = 1500;
const allowedMethods = "POST, OPTIONS";
const defaultTestSender = "DMCI Leads <onboarding@resend.dev>";
const personalSenderDomains = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com"
]);

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

  if (body.honeypot || body.website || body.company) {
    res.status(200).json({ ok: true, referenceId: randomUUID() });
    return;
  }

  const { lead, errors } = normalizeLead(body);
  if (Object.keys(errors).length) {
    res.status(400).json({ ok: false, message: "Please review the highlighted fields.", errors });
    return;
  }

  const { providers, missingEmailEnv } = configuredProviders();
  if (!providers.length) {
    res.status(200).json({
      ok: false,
      code: "delivery_not_configured",
      previewOnly: true,
      missingEnv: missingEmailEnv,
      message: missingEmailEnv.length
        ? `Lead delivery is not configured yet. Missing server env vars: ${missingEmailEnv.join(", ")}.`
        : "Lead delivery is not configured yet. The site can save this inquiry locally for preview testing."
    });
    return;
  }

  const results = await Promise.allSettled(providers.map((provider) => provider.send(lead)));
  const delivered = results.some((result) => result.status === "fulfilled");

  if (!delivered) {
    const failures = safeProviderFailures(providers, results);
    console.error("Lead delivery failed", failures);
    const primaryFailure = failures[0] || {
      code: "email_delivery_failed",
      message: "Email delivery failed. Please contact Luisa directly using the contact details on this page."
    };
    res.status(200).json({
      ok: false,
      code: "lead_saved_email_failed",
      deliveryError: {
        code: primaryFailure.code,
        message: primaryFailure.message
      },
      message: `Your inquiry was saved in this browser, but ${primaryFailure.message}`
    });
    return;
  }

  const warnings = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason?.publicMessage || result.reason?.message || "A configured delivery provider failed.");
  const deliveredTo = providers
    .filter((provider, index) => results[index].status === "fulfilled")
    .map((provider) => provider.name);
  results.forEach((result, index) => {
    if (result.status === "fulfilled" && result.value?.messageId) {
      console.info("Lead email delivered", {
        provider: providers[index].name,
        referenceId: lead.referenceId,
        messageId: result.value.messageId
      });
    }
  });

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
    unitType: clean(payload.unitType, 120),
    budgetRange: clean(payload.budgetRange, 120),
    paymentPreference: clean(payload.paymentPreference || payload.paymentOption, 120),
    buyerType: clean(payload.buyerType, 120),
    timeline: clean(payload.timeline, 120),
    purpose: clean(payload.purpose, 160),
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
  const emailConfig = getEmailConfig();
  if (!emailConfig.missing.length) {
    providers.push({ name: "email", send: (lead) => sendEmail(lead, emailConfig) });
  }
  if (process.env.LEADS_WEBHOOK_URL) {
    providers.push({ name: "webhook", send: sendWebhook });
  }

  return { providers, missingEmailEnv: emailConfig.missing };
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const configuredFrom = firstEnvValue("LEAD_EMAIL_FROM", "RESEND_FROM");
  const from = resolveSender(configuredFrom);
  const to = firstEnvValue("LEAD_EMAIL_TO", "LEAD_TO_EMAIL");
  const replyTo = firstEnvValue("LEAD_EMAIL_REPLY_TO", "LEAD_REPLY_TO_EMAIL");
  const subjectPrefix = firstEnvValue("LEAD_EMAIL_SUBJECT_PREFIX") || "DMCI Broker Lead";
  const missing = [];

  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!to) missing.push("LEAD_EMAIL_TO or LEAD_TO_EMAIL");

  return { apiKey, from, configuredFrom, to, replyTo, subjectPrefix, missing };
}

async function sendEmail(lead, config) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": lead.referenceId
    },
    body: JSON.stringify({
      from: config.from,
      to: splitRecipients(config.to),
      reply_to: lead.email || config.replyTo || undefined,
      subject: `${config.subjectPrefix}: ${titleCase(lead.inquiryType || "Inquiry")}${lead.projectInterestedIn ? ` - ${lead.projectInterestedIn}` : ""}`,
      text: formatLeadText(lead),
      html: formatLeadHtml(lead)
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw classifyResendError(response.status, details);
  }

  const data = await safeResponseJson(response);
  return { messageId: data?.id };
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
  const followUp = contactMethodPlan(lead);
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
    "Recommended follow-up",
    `${followUp.label}: ${followUp.text}`,
    followUp.note ? `Note: ${followUp.note}` : "",
    "",
    "Computation request details",
    `Unit type: ${lead.unitType || "Not provided"}`,
    `Budget range: ${lead.budgetRange || "Not provided"}`,
    `Payment preference: ${lead.paymentPreference || "Not provided"}`,
    `Buyer type: ${lead.buyerType || "Not provided"}`,
    `Timeline: ${lead.timeline || "Not provided"}`,
    `Purpose: ${lead.purpose || "Not provided"}`,
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
  const followUp = contactMethodPlan(lead);
  const logoUrl = "https://dmci-broker-website.vercel.app/assets/img/dmci-broker-mark.png";
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
  const computationRows = [
    ["Unit type", lead.unitType || "Not provided"],
    ["Budget range", lead.budgetRange || "Not provided"],
    ["Payment preference", lead.paymentPreference || "Not provided"],
    ["Buyer type", lead.buyerType || "Not provided"],
    ["Timeline", lead.timeline || "Not provided"],
    ["Purpose", lead.purpose || "Not provided"]
  ];
  const projectRows = [
    ["Project name", lead.projectInterestedIn || "Not provided"],
    ["City/location", lead.cityLocation || "Not provided"],
    ["Inquiry type", titleCase(lead.inquiryType || "General Inquiry")],
    ["Source route/page", lead.sourcePage || lead.sourceUrl || "Not provided"]
  ];
  const actions = [
    lead.phone ? actionButton(telHref(lead.phone), "Call lead", "phone", followUp.key === "call" || followUp.key === "viber" || followUp.key === "sms") : "",
    lead.email ? actionButton(`mailto:${lead.email}`, "Reply by email", "email", followUp.key === "email") : "",
    sourceUrl ? actionButton(sourceUrl, "Open source page", "source", false) : ""
  ].filter(Boolean).join("");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#eef4f6;color:#102a45;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#eef4f6;padding:30px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="width:100%;max-width:680px;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #dfe7ec;border-radius:20px;overflow:hidden;box-shadow:0 18px 44px rgba(16,42,69,0.10);">
                <tr>
                  <td style="padding:28px 30px 26px;background:#0d2740;color:#ffffff;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0 0 12px;color:#e5c264;font-size:11px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;">Maria Luisa Corral DMCI Broker Website</p>
                          <h1 style="margin:0;color:#ffffff;font-size:29px;line-height:1.14;font-weight:800;">New qualified inquiry</h1>
                          <p style="margin:11px 0 0;color:#dce8ef;font-size:14px;line-height:1.55;">Review the buyer details, confirm availability, then reply using the preferred channel.</p>
                        </td>
                        <td align="right" style="width:78px;vertical-align:top;">
                          <img src="${logoUrl}" width="58" height="58" alt="DMCI broker logo" style="display:block;width:58px;height:58px;border-radius:14px;background:#ffffff;border:1px solid #e8d9ac;">
                        </td>
                      </tr>
                    </table>
                    <div style="margin-top:20px;padding:13px 16px;border:1px solid rgba(229,194,100,0.34);border-radius:14px;background:#173a5a;">
                      <p style="margin:0;color:#e9f2f7;font-size:13px;line-height:1.55;">Submitted <strong style="color:#ffffff;">${escapeHtml(submittedLabel)}</strong></p>
                      <p style="margin:4px 0 0;color:#dce8ef;font-size:12px;line-height:1.55;">Reference ID: ${escapeHtml(lead.referenceId)}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 30px 8px;">
                    ${sectionTitle("Priority Summary")}
                    ${priorityStrip(lead)}
                    ${summaryCard(summaryRows)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 30px 0;">
                    ${sectionTitle("Recommended Follow-up")}
                    ${followUpCard(followUp)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 30px 0;">
                    ${sectionTitle("Lead Information")}
                    ${infoTable(leadRows)}
                    <div style="margin-top:16px;padding:17px 18px;background:#f8fbfc;border:1px solid #e5edf2;border-radius:14px;">
                      <p style="margin:0 0 8px;color:#486176;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.9px;">Message</p>
                      <p style="margin:0;color:#102a45;font-size:15px;line-height:1.7;">${escapeHtml(lead.message || "No message provided.").replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 30px 0;">
                    ${sectionTitle("Computation Request Details")}
                    ${infoTable(computationRows)}
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
                    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;width:100%;">
                      <tr><td>${actions || '<span style="color:#667085;font-size:14px;">No quick action links available.</span>'}</td></tr>
                    </table>
                    ${followUp.note ? `<p style="margin:8px 0 0;color:#5c6f80;font-size:12px;line-height:1.55;">${escapeHtml(followUp.note)}</p>` : ""}
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

function priorityStrip(lead) {
  const inquiry = titleCase(lead.inquiryType || "General Inquiry");
  const project = lead.projectInterestedIn || "No project selected";
  const method = lead.preferredContactMethod || "No method selected";
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:separate;border-spacing:8px 0;margin:0 -8px 14px;">
      <tr>
        ${miniPill("Inquiry", inquiry, "#fff7df", "#9d7420")}
        ${miniPill("Project", project, "#edf7f2", "#0b6b45")}
        ${miniPill("Reply via", method, "#eef5fb", "#0f4d78")}
      </tr>
    </table>
  `;
}

function miniPill(label, value, background, color) {
  return `
    <td style="width:33.33%;padding:0;">
      <div style="padding:12px 13px;border:1px solid #e4edf2;border-radius:14px;background:${background};">
        <p style="margin:0 0 4px;color:#667085;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;">${escapeHtml(label)}</p>
        <p style="margin:0;color:${color};font-size:13px;line-height:1.35;font-weight:800;">${escapeHtml(value)}</p>
      </div>
    </td>
  `;
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

function followUpCard(plan) {
  return `
    <div style="padding:18px 18px 17px;border:1px solid ${plan.border};border-radius:16px;background:${plan.background};box-shadow:inset 4px 0 0 ${plan.accent};">
      <p style="margin:0;color:${plan.accent};font-size:11px;font-weight:800;letter-spacing:.9px;text-transform:uppercase;">${escapeHtml(plan.label)}</p>
      <p style="margin:7px 0 0;color:#102a45;font-size:16px;line-height:1.55;font-weight:800;">${escapeHtml(plan.title)}</p>
      <p style="margin:6px 0 0;color:#52687a;font-size:14px;line-height:1.65;">${escapeHtml(plan.text)}</p>
    </div>
  `;
}

function actionButton(href, label, type, highlighted = false) {
  const styles = {
    phone: highlighted
      ? { background: "#d8b65d", border: "#d8b65d", color: "#102a45", prefix: "Priority" }
      : { background: "#ffffff", border: "#d7e2e8", color: "#102a45", prefix: "Action" },
    email: highlighted
      ? { background: "#0f6b4b", border: "#0f6b4b", color: "#ffffff", prefix: "Preferred" }
      : { background: "#ffffff", border: "#d7e2e8", color: "#102a45", prefix: "Action" },
    source: { background: "#ffffff", border: "#d7e2e8", color: "#102a45", prefix: "Review" }
  };
  const tone = styles[type] || styles.source;
  return `
    <a href="${escapeAttribute(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:12px 16px;border-radius:999px;background:${tone.background};border:1px solid ${tone.border};color:${tone.color};font-size:13px;font-weight:800;text-decoration:none;">
      <span style="display:inline-block;margin-right:8px;color:${tone.color};font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;">${escapeHtml(tone.prefix)}</span>${escapeHtml(label)}
    </a>
  `;
}

function contactMethodPlan(lead) {
  const key = contactMethodKey(lead.preferredContactMethod);
  const missingPhone = !lead.phone;
  const missingEmail = !lead.email;
  const common = {
    key,
    background: "#f8fbfc",
    border: "#dfe9ef",
    accent: "#0f4d78",
    note: ""
  };

  if (key === "email") {
    return {
      ...common,
      label: "Email preferred",
      title: "Reply by email first.",
      text: missingEmail
        ? "The buyer selected email but did not provide an email address. Use the phone number, then request the correct email."
        : "Send the computation or next-step confirmation by email, then use the phone number only for urgent timing or viewing coordination.",
      note: missingEmail ? "Email was selected, but no buyer email was included." : "",
      background: "#edf7f2",
      border: "#cfe7db",
      accent: "#0f6b4b"
    };
  }

  if (key === "viber") {
    return {
      ...common,
      label: "Viber preferred",
      title: "Use the mobile number on Viber first.",
      text: missingPhone
        ? "The buyer selected Viber but no mobile number was provided. Reply by email if available."
        : "Send a short Viber message with your name, the project, and the confirmation needed before sharing computations.",
      note: "Viber deep links are not forced in the email because device support varies. Use the Phone / Viber number shown above.",
      background: "#f4effb",
      border: "#ded0f2",
      accent: "#6f4ab8"
    };
  }

  if (key === "sms") {
    return {
      ...common,
      label: "SMS preferred",
      title: "Send a short SMS first.",
      text: missingPhone
        ? "The buyer selected SMS but no mobile number was provided. Reply by email if available."
        : "Confirm receipt, project name, and best time to continue the conversation. Call only if the request is time-sensitive.",
      note: missingPhone ? "SMS was selected, but no mobile number was included." : "",
      background: "#eef5fb",
      border: "#cfe0ed",
      accent: "#0f4d78"
    };
  }

  if (key === "call") {
    return {
      ...common,
      label: "Call preferred",
      title: "Call the buyer first.",
      text: missingPhone
        ? "The buyer selected call but no phone number was provided. Reply by email if available."
        : "Call during reasonable hours. If unanswered, follow up with a short SMS or Viber message.",
      note: missingPhone ? "Call was selected, but no phone number was included." : "",
      background: "#fff7df",
      border: "#ead8a8",
      accent: "#b1841e"
    };
  }

  return {
    ...common,
    key: "general",
    label: "Contact method",
    title: "Use the preferred method shown in the lead.",
    text: "Confirm the project, availability, pricing, promos, and next step before sending final buyer guidance.",
    note: missingEmail && missingPhone ? "No direct contact channel was included." : ""
  };
}

function contactMethodKey(value) {
  const method = String(value || "").toLowerCase();
  if (method.includes("viber")) return "viber";
  if (method.includes("email")) return "email";
  if (method.includes("sms") || method.includes("text")) return "sms";
  if (method.includes("call") || method.includes("phone")) return "call";
  return "general";
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

function firstEnvValue(...names) {
  for (const name of names) {
    const value = process.env[name];
    if (value && String(value).trim()) return String(value).trim();
  }
  return "";
}

function resolveSender(configuredFrom) {
  if (!configuredFrom) return defaultTestSender;
  const email = extractEmailAddress(configuredFrom);
  const domain = email.split("@")[1]?.toLowerCase();

  // Resend cannot send from ordinary mailbox domains unless that domain is verified.
  if (!domain || personalSenderDomains.has(domain)) {
    return defaultTestSender;
  }

  return configuredFrom;
}

function extractEmailAddress(value) {
  const text = String(value || "").trim();
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim().toLowerCase();
}

async function safeResponseJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function classifyResendError(status, rawDetails) {
  let parsed = null;
  try {
    parsed = JSON.parse(rawDetails);
  } catch {
    parsed = null;
  }

  const detailText = [
    parsed?.message,
    parsed?.name,
    rawDetails
  ].filter(Boolean).join(" ");
  const lower = detailText.toLowerCase();
  let code = "email_delivery_failed";
  let publicMessage = "Email delivery failed. Please contact Luisa directly using the contact details on this page.";

  if (lower.includes("domain is not verified") || lower.includes("verify your domain")) {
    code = "resend_domain_not_verified";
    publicMessage = "Email delivery failed: sender domain is not verified.";
  } else if (lower.includes("only send testing emails to your own email address")) {
    code = "resend_test_recipient_not_allowed";
    publicMessage = "Email delivery failed: Resend test sender can only send to the verified account email.";
  } else if (lower.includes("from") && (lower.includes("not allowed") || lower.includes("sender"))) {
    code = "resend_sender_not_allowed";
    publicMessage = "Email delivery failed: Resend sender is not allowed.";
  } else if (status === 401 || status === 403) {
    code = "resend_auth_or_sender_rejected";
    publicMessage = "Email delivery failed: Resend rejected the sender or API credentials.";
  }

  const error = new Error(`Email provider failed with ${status}: ${parsed?.message || "Resend request failed"}`);
  error.code = code;
  error.publicMessage = publicMessage;
  error.status = status;
  error.provider = "resend";
  return error;
}

function safeProviderFailures(providers, results) {
  return results
    .map((result, index) => {
      if (result.status !== "rejected") return null;
      return {
        provider: providers[index]?.name || "unknown",
        code: result.reason?.code || "email_delivery_failed",
        status: result.reason?.status || undefined,
        message: result.reason?.publicMessage || "Email delivery failed. Please contact Luisa directly using the contact details on this page."
      };
    })
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
