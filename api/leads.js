import { randomUUID } from "node:crypto";

const messageLimit = 1500;
const maxPayloadBytes = 24 * 1024;
const allowedMethods = "POST, OPTIONS";
const defaultTestSender = "Maria Luisa Leads <onboarding@resend.dev>";
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
const publicSiteUrl = "https://dmci-broker-website.vercel.app";
const projectVisuals = [
  { name: "The Oriana", slug: "the-oriana", location: "Quezon City", aliases: ["Oriana"] },
  { name: "One Delta Terraces", slug: "one-delta-terraces", location: "Quezon City" },
  { name: "The Erin Heights", slug: "the-erin-heights", location: "Quezon City", aliases: ["Erin Heights"] },
  { name: "Cameron Residences", slug: "cameron-residences", location: "Quezon City" },
  { name: "The Valeron Tower", slug: "the-valeron-tower", location: "Pasig", aliases: ["Valeron Tower"] },
  { name: "Allegra Garden Place", slug: "allegra-garden-place", location: "Pasig" },
  { name: "Prisma Residences", slug: "prisma-residences", location: "Pasig" },
  { name: "Sage Residences", slug: "sage-residences", location: "Mandaluyong" },
  { name: "Kai Garden Residences", slug: "kai-garden-residences", location: "Mandaluyong" },
  { name: "Mulberry Place 2", slug: "mulberry-place-2", location: "Taguig", aliases: ["Mulberry Place"] },
  { name: "Alder Residences", slug: "alder-residences", location: "Taguig" },
  { name: "The Aston Place", slug: "the-aston-place", location: "Pasay", aliases: ["Aston Place"] },
  { name: "The Camden Place", slug: "the-camden-place", location: "Manila", aliases: ["Camden Place"] },
  { name: "The Atherton", slug: "the-atherton", location: "Paranaque", aliases: ["Atherton"] },
  { name: "Calathea Place", slug: "calathea-place", location: "Paranaque" },
  { name: "Sonora Garden Residences", slug: "sonora-garden-residences", location: "Las Pinas" },
  { name: "Moncello Crest", slug: "moncello-crest", location: "Baguio City / Benguet" },
  { name: "Solmera Coast", slug: "solmera-coast", location: "San Juan, Batangas" }
];

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

  if (payloadTooLarge(req.body)) {
    res.status(413).json({ ok: false, message: "Inquiry payload is too large. Please shorten the message and try again." });
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
        : "Lead delivery is not configured yet. No email or webhook provider is available."
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
      code: "lead_delivery_failed",
      deliveryError: {
        code: primaryFailure.code,
        message: primaryFailure.message
      },
      message: primaryFailure.message
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
    nationality: clean(payload.nationality, 80),
    buyerLocation: clean(payload.buyerLocation || payload.currentLocation, 160),
    bestTimeToContact: clean(payload.bestTimeToContact || payload.bestContactTime, 80),
    leadSource: clean(payload.leadSource || payload.howDidYouHear, 120),
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
  const contactMethod = lead.preferredContactMethod.toLowerCase();
  if (contactMethod.includes("email and mobile")) {
    if (!lead.phone) errors.contactNumber = "Add a mobile number for Email and Mobile follow-up.";
    if (!lead.email) errors.email = "Add an email address for Email and Mobile follow-up.";
  } else if ((contactMethod.includes("call") || contactMethod.includes("viber") || contactMethod.includes("sms") || contactMethod.includes("text")) && !lead.phone) {
    errors.contactNumber = `Add a phone number for ${lead.preferredContactMethod} follow-up.`;
  } else if (contactMethod.includes("email") && !lead.email) {
    errors.email = "Add an email address for email follow-up.";
  }
  const kind = inquiryKind(lead.inquiryType);
  if ((kind === "computation" || kind === "availability") && !lead.projectInterestedIn && !lead.cityLocation) {
    errors.project = "Choose a project or project location.";
    errors.location = "Choose a project location or project.";
  }
  if (kind === "viewing") {
    if (!lead.projectInterestedIn && !lead.cityLocation) {
      errors.project = "Choose a project or project location for the viewing request.";
      errors.location = "Choose a project location or project for the viewing request.";
    }
    if (!clean(lead.rawFields?.preferredDate, 80)) {
      errors.preferredDate = "Choose a preferred viewing date.";
    }
    if (!clean(lead.rawFields?.preferredTime, 80)) {
      errors.preferredTime = "Choose a preferred viewing time.";
    }
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

function payloadTooLarge(body) {
  if (!body) return false;
  if (typeof body === "string") return Buffer.byteLength(body, "utf8") > maxPayloadBytes;
  try {
    return Buffer.byteLength(JSON.stringify(body), "utf8") > maxPayloadBytes;
  } catch {
    return true;
  }
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
      subject: formatEmailSubject(lead, config.subjectPrefix),
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

function formatEmailSubject(lead, subjectPrefix = "") {
  const label = shortInquiryLabel(lead.inquiryType);
  const project = lead.projectInterestedIn || "DMCI Homes";
  const buyer = lead.name || "New buyer";
  const configuredPrefix = String(subjectPrefix || "").trim();
  const prefix = /^(dmci broker lead|dmci leads|new lead)$/i.test(configuredPrefix) ? "" : configuredPrefix;
  const subject = [prefix, label, project, buyer].filter(Boolean).join(" · ");
  return subject.length > 92 ? `${subject.slice(0, 89).trimEnd()}…` : subject;
}

function shortInquiryLabel(value) {
  const type = inquiryKind(value);
  if (type === "viewing") return "Viewing request";
  if (type === "availability") return "Availability check";
  if (type === "computation") return "Computation request";
  return "Sales inquiry";
}

function formatLeadText(lead) {
  const followUp = contactMethodPlan(lead);
  const requestRows = buildRequestRows(lead);
  const nextStep = nextStepPlan(lead);
  const quickActions = [
    lead.email ? `Email: mailto:${lead.email}` : "",
    lead.phone ? `Call: ${telHref(lead.phone)}` : "",
    safeUrl(lead.sourceUrl) ? `Inquiry page: ${lead.sourceUrl}` : ""
  ].filter(Boolean);

  return [
    `${shortInquiryLabel(lead.inquiryType)} · ${lead.projectInterestedIn || "Project not selected"}`,
    "",
    `Buyer: ${lead.name}`,
    `Phone / Viber: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `Preferred contact: ${lead.preferredContactMethod || "Not provided"}`,
    `Message: ${lead.message || "No buyer message provided."}`,
    "",
    "Follow-up",
    `${followUp.title}: ${followUp.text}`,
    `Verify first: ${nextStep.text}`,
    ...(requestRows.length ? [
      "",
      "Request details",
      ...requestRows.map(([label, value]) => `${label}: ${value}`),
    ] : []),
    "",
    "Record",
    `Submitted: ${formatDateTime(lead.submittedAt)}`,
    `Reference: ${lead.referenceId}`,
    `Source: ${lead.sourcePage || lead.sourceUrl || "Not provided"}`,
    `Consent checked: ${lead.consent ? "Yes" : "No"}`,
    "Project details, pricing, availability, promos, and terms are subject to confirmation.",
    "",
    "Actions",
    ...(quickActions.length ? quickActions : ["No quick action links available."]),
    "",
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
  const nextStep = nextStepPlan(lead);
  const logoUrl = `${publicSiteUrl}/assets/img/dmci-broker-mark.png`;
  const requestRows = buildRequestRows(lead);
  const requestTypeLabel = shortInquiryLabel(lead.inquiryType);
  const projectVisual = projectHeaderVisual(lead);
  const actions = buildActionButtons(lead, followUp, sourceUrl);
  const preheader = `${lead.projectInterestedIn || "DMCI Homes"} · ${lead.name || "New buyer"} · ${followUp.label}`;
  const requestDetailsSection = requestRows.length ? `
                <tr>
                  <td class="mp" style="padding:20px 30px 0 30px;">
                    ${requestDetailsCard(requestRows, requestTypeLabel)}
                  </td>
                </tr>
  ` : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${escapeHtml(formatEmailSubject(lead))}</title>
        <style type="text/css">
          body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
          table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
          img { -ms-interpolation-mode:bicubic; }
          @media only screen and (max-width: 640px) {
            .email-body { width: 100% !important; min-width: 0 !important; }
            .outer-pad { padding:0 !important; }
            .email-body { border-radius:0 !important; border-left:0 !important; border-right:0 !important; }
            .mp { padding-left:20px !important; padding-right:20px !important; }
            .mc { text-align: center !important; }
            .sg-cell { display: block !important; width: 100% !important; border-right: none !important; }
            .sg-cell + .sg-cell { border-top:1px solid #E6E8EB !important; }
            .contact-row { display:block !important; width:100% !important; border-right:0 !important; }
            .contact-row-first { border-bottom:1px solid #E6E8EB !important; }
            .dl { width:38% !important; padding-left:16px !important; padding-right:10px !important; }
            .dv { width:62% !important; padding-left:10px !important; padding-right:16px !important; }
            .lead-copy { padding-right:14px !important; }
            .project-visual-card { width:96px !important; max-width:96px !important; }
            .project-visual-img { width:96px !important; max-width:96px !important; height:72px !important; }
            .abtn-td { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
            .footer-col { display:block !important; width:100% !important; text-align:left !important; }
            .footer-contact { padding-top:6px !important; }
            .hide-mobile { display: none !important; }
          }
          @media only screen and (max-width: 420px) {
            .mp { padding-left:16px !important; padding-right:16px !important; }
            .brand-role { display:none !important; }
            .lead-copy, .lead-art { display:block !important; width:100% !important; padding-right:0 !important; }
            .lead-art { padding-top:14px !important; text-align:left !important; }
            .project-visual-card { width:100% !important; max-width:100% !important; }
            .project-visual-img { width:100% !important; max-width:100% !important; height:auto !important; max-height:116px !important; }
            .meta-cell { display:block !important; width:100% !important; padding:0 0 8px 0 !important; text-align:left !important; }
            .dl { width:42% !important; }
            .dv { width:58% !important; }
          }
        </style>
      </head>
      <body style="margin:0;padding:0;background-color:#F3F4F6;color:#202124;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
        <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#F3F4F6;">
          ${escapeHtml(preheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#F3F4F6;">
          <tr>
            <td class="outer-pad" align="center" style="padding:28px 12px;">
              <table role="presentation" class="email-body" width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background-color:#FFFFFF;border-radius:16px;border-collapse:separate;border-spacing:0;border:1px solid #E0E2E5;box-shadow:0 8px 24px rgba(32,33,36,0.08);overflow:hidden;">
                <tr>
                  <td style="height:4px;background-color:#B88A2B;font-size:0;line-height:0;border-radius:16px 16px 0 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td class="mp" style="padding:18px 30px 16px 30px;border-bottom:1px solid #ECEDEF;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="46" style="width:46px;vertical-align:middle;">
                          <img src="${logoUrl}" width="40" height="40" alt="Maria Luisa Corral" style="display:block;width:40px;height:40px;border-radius:10px;background:#FFFFFF;border:1px solid #E3D5B1;">
                        </td>
                        <td style="vertical-align:middle;padding-left:10px;">
                          <div style="font-size:15px;font-weight:750;color:#202124;line-height:1.3;">Maria Luisa Corral</div>
                          <div class="brand-role" style="font-size:11px;color:#6B7078;letter-spacing:.7px;text-transform:uppercase;padding-top:3px;line-height:1.35;">Sales Director · DMCI Homes</div>
                        </td>
                        <td align="right" style="vertical-align:middle;">
                          <span style="display:inline-block;padding:5px 9px;border-radius:999px;background-color:#F5F0E4;color:#7A5A18;font-size:10px;font-weight:800;letter-spacing:.7px;text-transform:uppercase;line-height:1;">New lead</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:24px 30px 0 30px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="lead-copy" width="${projectVisual ? "72%" : "100%"}" style="vertical-align:top;padding-right:${projectVisual ? "18px" : "0"};">
                          <div style="font-size:11px;font-weight:800;color:#8A681F;letter-spacing:1px;text-transform:uppercase;line-height:1.4;">${escapeHtml(requestTypeLabel)}</div>
                          <div style="font-size:27px;font-weight:750;color:#202124;line-height:1.2;padding-top:5px;letter-spacing:-.35px;">${escapeHtml(lead.name)}</div>
                          <div style="font-size:14px;color:#5F6368;line-height:1.5;padding-top:7px;">${escapeHtml(lead.projectInterestedIn || "No project selected")} <span style="color:#B7B9BD;">·</span> ${escapeHtml(lead.cityLocation || "Location not provided")}</div>
                        </td>
                        ${projectVisual ? `<td class="lead-art" width="28%" align="right" style="vertical-align:top;">${projectVisual}</td>` : ""}
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;border-top:1px solid #ECEDEF;">
                      <tr>
                        <td class="meta-cell" width="60%" style="padding-top:11px;font-size:11px;color:#757980;line-height:1.5;">Submitted ${escapeHtml(submittedLabel)}</td>
                        <td class="meta-cell" width="40%" align="right" style="padding-top:11px;font-size:10px;color:#8A8E94;font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace;line-height:1.5;">${escapeHtml(lead.referenceId)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:20px 30px 0 30px;">
                    ${buyerContactBlock(lead)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:16px 30px 0 30px;">
                    ${actions || '<span style="color:#5F6368;font-size:14px;">No action links available.</span>'}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:20px 30px 0 30px;">
                    ${inquirySnapshot(lead)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:16px 30px 0 30px;">
                    ${followUpCard(followUp, nextStep)}
                  </td>
                </tr>
                ${requestDetailsSection}
                <tr>
                  <td class="mp" style="padding:18px 30px 24px 30px;">
                    ${consentBlock(lead)}
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#F8F8F7;padding:0;border-top:1px solid #E6E7E9;border-radius:0 0 16px 16px;">
                    ${footerBlock()}
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

function sectionLabel(label) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="font-size:11px;font-weight:800;color:#74787F;letter-spacing:.9px;text-transform:uppercase;padding-bottom:9px;">${escapeHtml(label)}</td>
      </tr>
    </table>
  `;
}

function projectHeaderVisual(lead) {
  const visual = projectVisualForLead(lead);
  if (!visual) return "";

  const alt = `${visual.name} project preview`;
  const caption = lead.cityLocation || visual.location || "DMCI Homes";

  return `
    <table role="presentation" class="project-visual-card" width="132" cellpadding="0" cellspacing="0" border="0" style="width:132px;max-width:132px;background-color:#F8F8F7;border:1px solid #E2E3E5;border-radius:10px;overflow:hidden;">
      <tr>
        <td style="padding:0;">
          <a href="${escapeAttribute(visual.pageUrl)}" target="_blank" style="text-decoration:none;border:0;display:block;">
            <img class="project-visual-img" src="${escapeAttribute(visual.imageUrl)}" width="132" height="82" alt="${escapeAttribute(alt)}" style="display:block;width:132px;max-width:132px;height:82px;object-fit:cover;border:0;line-height:0;">
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 10px 9px 10px;background-color:#F8F8F7;">
          <div style="font-size:10px;color:#4F5358;font-weight:700;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(visual.name)}</div>
          <div style="font-size:9px;color:#8A8E94;line-height:1.4;padding-top:1px;">${escapeHtml(caption)}</div>
        </td>
      </tr>
    </table>
  `;
}

function projectVisualForLead(lead) {
  const selected = normalizeProjectName(lead.projectInterestedIn);
  if (!selected) return null;

  const visual = projectVisuals.find((project) => {
    const keys = [project.name, ...(project.aliases || [])].map(normalizeProjectName);
    return keys.some((key) => selected === key || selected.includes(key) || key.includes(selected));
  });

  if (!visual) return null;

  return {
    ...visual,
    imageUrl: `${publicSiteUrl}/assets/projects/${visual.slug}/hero.jpg`,
    pageUrl: `${publicSiteUrl}/projects/${visual.slug}`
  };
}

function normalizeProjectName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function inquirySnapshot(lead) {
  const inquiry = titleCase(lead.inquiryType || "General Inquiry");
  const project = lead.projectInterestedIn || "No project selected";
  const method = lead.preferredContactMethod || "No method selected";
  const location = lead.cityLocation || "Not provided";
  const methodTone = contactTone(contactMethodKey(method));

  return `
    ${sectionLabel("Inquiry summary")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAFAF9;border-radius:10px;border:1px solid #E2E3E5;overflow:hidden;">
      <tr>
        ${snapshotCell("Inquiry Type", inquiry, true)}
        ${snapshotCell("Project", project)}
      </tr>
      <tr>
        ${snapshotCell("Location", location, true, true)}
        ${snapshotCell("Reply Via", `<span style="color:${methodTone.color};">&#9679;</span>&nbsp;<span style="color:#202124;">${escapeHtml(method)}</span>`, false, true, true)}
      </tr>
    </table>
  `;
}

function snapshotCell(label, value, rightBorder = false, topBorder = false, allowHtml = false) {
  return `
    <td class="sg-cell${topBorder ? " sg-cell-bottom" : ""}" width="50%" style="padding:13px 16px;${rightBorder ? "border-right:1px solid #E6E8EB;" : ""}${topBorder ? "border-top:1px solid #E6E8EB;" : ""}vertical-align:top;">
      <span style="font-size:10px;color:#85898F;text-transform:uppercase;letter-spacing:.65px;font-weight:800;display:block;margin-bottom:4px;">${escapeHtml(label)}</span>
      <span style="font-size:14px;color:#202124;font-weight:700;line-height:1.4;word-break:break-word;">${allowHtml ? value : escapeHtml(value)}</span>
    </td>
  `;
}

function buyerContactBlock(lead) {
  const phone = lead.phone || "Not provided";
  const email = lead.email || "Not provided";
  const message = lead.message || "No buyer message provided.";
  const phoneValue = lead.phone
    ? `<a href="${escapeAttribute(telHref(lead.phone))}" style="font-size:14px;color:#202124;font-weight:750;line-height:1.4;word-break:break-word;text-decoration:none;">${escapeHtml(phone)}</a>`
    : `<span style="font-size:14px;color:#74787F;font-weight:700;line-height:1.4;">${escapeHtml(phone)}</span>`;
  const emailValue = lead.email
    ? `<a href="mailto:${escapeAttribute(lead.email)}" style="font-size:14px;color:#4F6282;font-weight:750;line-height:1.4;word-break:break-word;text-decoration:none;">${escapeHtml(email)}</a>`
    : `<span style="font-size:14px;color:#74787F;font-weight:700;line-height:1.4;">${escapeHtml(email)}</span>`;

  return `
    ${sectionLabel("Contact details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E2E3E5;border-radius:10px;overflow:hidden;">
      <tr>
        <td class="contact-row contact-row-first" width="50%" style="padding:13px 16px;vertical-align:top;border-right:1px solid #E6E8EB;">
          <span style="font-size:10px;color:#85898F;text-transform:uppercase;letter-spacing:.65px;font-weight:800;display:block;margin-bottom:4px;">Phone / Viber</span>
          ${phoneValue}
        </td>
        <td class="contact-row" width="50%" style="padding:13px 16px;vertical-align:top;">
          <span style="font-size:10px;color:#85898F;text-transform:uppercase;letter-spacing:.65px;font-weight:800;display:block;margin-bottom:4px;">Email</span>
          ${emailValue}
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;background-color:#FBF8F1;border-radius:10px;border:1px solid #E6D8B5;">
      <tr>
        <td style="padding:13px 16px;">
          <div style="font-size:10px;color:#8A681F;text-transform:uppercase;letter-spacing:.65px;font-weight:800;padding-bottom:5px;">Buyer message</div>
          <div style="font-size:14px;color:#34373B;line-height:1.55;">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
        </td>
      </tr>
    </table>
  `;
}

function requestDetailsCard(rows, typeLabel) {
  return `
    ${sectionLabel("Request details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E2E3E5;border-radius:10px;overflow:hidden;">
      <tr>
        <td style="background-color:#FAFAF9;padding:10px 16px;border-bottom:1px solid #E6E8EB;">
          <span style="font-size:10px;color:#85898F;letter-spacing:.65px;text-transform:uppercase;font-weight:800;">${escapeHtml(typeLabel)}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${rows.map(([label, value], index) => detailRow(label, value, index === rows.length - 1)).join("")}
          </table>
        </td>
      </tr>
    </table>
  `;
}

function detailRow(label, value, last = false) {
  const border = last ? "" : "border-bottom:1px solid #ECEDEF;";
  return `
    <tr>
      <td class="dl" width="40%" style="padding:11px 16px;font-size:10px;color:#74787F;text-transform:uppercase;letter-spacing:.5px;font-weight:800;${border}background-color:#FAFAF9;vertical-align:top;">${escapeHtml(label)}</td>
      <td class="dv" width="60%" style="padding:11px 16px;font-size:13px;color:#202124;font-weight:700;line-height:1.45;${border}vertical-align:top;word-break:break-word;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function followUpCard(plan, nextStep) {
  const tone = contactTone(plan.key);
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F8F6;border-radius:10px;border:1px solid #D7E5DC;">
      <tr>
        <td width="4" style="background-color:${tone.color};border-radius:10px 0 0 10px;font-size:0;line-height:0;">&nbsp;</td>
        <td style="padding:14px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size:11px;color:#5B7564;text-transform:uppercase;letter-spacing:.7px;font-weight:800;line-height:1.4;">Recommended follow-up</td>
              <td align="right" style="font-size:12px;color:${tone.color};font-weight:800;line-height:1.4;">${tone.icon}&nbsp; ${escapeHtml(plan.title)}</td>
            </tr>
          </table>
          <p style="margin:8px 0 0;color:#343A36;font-size:13px;line-height:1.55;">${escapeHtml(plan.text)}</p>
          <p style="margin:7px 0 0;padding-top:7px;border-top:1px solid #DFE9E2;color:#68706B;font-size:12px;line-height:1.5;"><strong style="color:#4E5751;">Verify:</strong> ${escapeHtml(nextStep.text)}</p>
          ${plan.note ? `<p style="margin:5px 0 0;color:#747B76;font-size:11px;line-height:1.45;">${escapeHtml(plan.note)}</p>` : ""}
        </td>
      </tr>
    </table>
  `;
}

function consentBlock(lead) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #ECEDEF;">
      <tr>
        <td style="padding-top:14px;font-size:11px;color:#7A7E84;line-height:1.55;">
          <span style="color:#2E7650;font-weight:800;">&#10003; Consent ${lead.consent ? "confirmed" : "not confirmed"}</span>
          <span style="color:#C7C9CC;">&nbsp;·&nbsp;</span>
          Pricing, availability, promos, and terms require confirmation.
        </td>
      </tr>
    </table>
  `;
}

function buildActionButtons(lead, followUp, sourceUrl) {
  const tel = lead.phone ? telHref(lead.phone) : "";
  const sms = lead.phone ? smsHref(lead.phone) : "";
  const email = lead.email ? `mailto:${lead.email}` : "";
  const primary = preferredAction(lead, followUp, { tel, sms, email });
  const secondary = [];

  if (email && primary?.href !== email) secondary.push({ href: email, label: "Email buyer", icon: "&#9993;" });
  if (tel && primary?.href !== tel) secondary.push({ href: tel, label: followUp.key === "sms" ? "Call buyer" : "Call buyer", icon: "&#9742;" });
  if (sourceUrl) secondary.push({ href: sourceUrl, label: "View inquiry", icon: "&#8599;" });

  if (!primary && !secondary.length) return "";

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${primary ? primaryActionButton(primary) : ""}
      ${secondary.length ? secondaryActionsGrid(secondary) : ""}
    </table>
  `;
}

function preferredAction(lead, followUp, links) {
  if (followUp.key === "email" && links.email) return { href: links.email, label: "Email buyer", icon: "&#9993;" };
  if (followUp.key === "call" && links.tel) return { href: links.tel, label: "Call buyer", icon: "&#9742;" };
  if (followUp.key === "viber" && links.tel) return { href: links.tel, label: "Open phone / Viber", icon: "&#9742;" };
  if (followUp.key === "sms" && links.sms) return { href: links.sms, label: "Send SMS", icon: "&#9993;" };
  if (links.email) return { href: links.email, label: "Email buyer", icon: "&#9993;" };
  if (links.tel) return { href: links.tel, label: "Call buyer", icon: "&#9742;" };
  return null;
}

function primaryActionButton(action) {
  return `
    <tr>
      <td style="padding-bottom:8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="background-color:#B88A2B;border-radius:9px;border:1px solid #A77B22;">
              <a href="${escapeAttribute(action.href)}" target="_blank" style="display:block;padding:12px 18px;font-size:14px;font-weight:800;color:#FFFFFF;text-decoration:none;letter-spacing:.05px;">${action.icon}&nbsp;&nbsp;${escapeHtml(action.label)}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function secondaryActionsGrid(actions) {
  const cells = actions.map((action) => `
    <td class="abtn-td" width="50%" style="padding:0 5px 8px 5px;vertical-align:top;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="background-color:#FFFFFF;border:1px solid #D7D9DC;border-radius:9px;">
            <a href="${escapeAttribute(action.href)}" target="_blank" style="display:block;padding:10px 12px;font-size:13px;font-weight:750;color:#34373B;text-decoration:none;">${action.icon}&nbsp;&nbsp;${escapeHtml(action.label)}</a>
          </td>
        </tr>
      </table>
    </td>
  `);

  const rows = [];
  for (let index = 0; index < cells.length; index += 2) {
    rows.push(`<tr>${cells[index]}${cells[index + 1] || '<td class="abtn-td" width="50%" style="padding:0 5px 8px 5px;">&nbsp;</td>'}</tr>`);
  }

  return `
    <tr>
      <td style="padding-top:6px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${rows.join("")}
        </table>
      </td>
    </tr>
  `;
}

function footerBlock() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="mp" style="padding:17px 30px 19px 30px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="footer-col" width="48%" style="vertical-align:top;">
                <div style="font-size:13px;font-weight:750;color:#42454A;line-height:1.4;">Maria Luisa Corral</div>
                <div style="font-size:11px;color:#7A7E84;line-height:1.65;padding-top:2px;">Sales Director · DMCI Homes · PRC 0003253</div>
              </td>
              <td class="footer-col footer-contact" width="52%" align="right" style="vertical-align:top;font-size:11px;color:#696D73;line-height:1.65;">
                <a href="mailto:mrcorral@dmcihomes.com" style="color:#5B6577;text-decoration:none;">mrcorral@dmcihomes.com</a><br>
                0998 865 8902 · (02) 8888 7777 loc. 5860
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function contactTone(key) {
  const tones = {
    combined: { color: "#0F6B4B", icon: "&#10003;" },
    email: { color: "#2B6CB0", icon: "&#9993;" },
    call: { color: "#2F855A", icon: "&#9742;" },
    viber: { color: "#7360F2", icon: "&#9993;" },
    sms: { color: "#319795", icon: "&#9993;" },
    general: { color: "#C8A951", icon: "&#8594;" }
  };
  return tones[key] || tones.general;
}

function buildRequestRows(lead) {
  const raw = lead.rawFields || {};
  const type = inquiryKind(lead.inquiryType);
  const profileRows = [
    ["Nationality", lead.nationality || raw.nationality],
    ["Current city/country", lead.buyerLocation || raw.currentLocation],
    ["Best time to contact", lead.bestTimeToContact || raw.bestTimeToContact],
    ["Lead source", lead.leadSource || raw.leadSource]
  ];
  const rowsByType = {
    viewing: [
      ["Viewing type", raw.viewingType],
      ["Preferred date", formatDateOnly(raw.preferredDate)],
      ["Preferred time", formatTimeOnly(raw.preferredTime)],
      ["Guests", raw.guests]
    ],
    availability: [
      ["Unit type", lead.unitType || raw.unitType],
      ["Preferred floor/size", raw.preferredSize],
      ["Budget range", lead.budgetRange || raw.budgetRange],
      ["Payment option", lead.paymentPreference || raw.paymentPreference || raw.paymentOption],
      ["Urgency", raw.urgency],
      ["Buyer type", lead.buyerType || raw.buyerType],
      ["Purpose", lead.purpose || raw.purpose]
    ],
    computation: [
      ["Unit type", lead.unitType || raw.unitType],
      ["Budget range", lead.budgetRange || raw.budgetRange],
      ["Payment preference", lead.paymentPreference || raw.paymentPreference],
      ["Buyer type", lead.buyerType || raw.buyerType],
      ["Timeline", lead.timeline || raw.timeline],
      ["Purpose", lead.purpose || raw.purpose]
    ],
    general: [
      ["Inquiry type", raw.concernType],
      ["Buyer type", lead.buyerType || raw.buyerType],
      ["Purpose", lead.purpose || raw.purpose],
      ["Unit type", lead.unitType || raw.unitType],
      ["Budget range", lead.budgetRange || raw.budgetRange],
      ["Payment preference", lead.paymentPreference || raw.paymentPreference || raw.paymentOption],
      ["Timeline", lead.timeline || raw.timeline || raw.urgency]
    ]
  };

  const rows = uniqueRows([...profileRows, ...(rowsByType[type] || rowsByType.general)].map(([label, value]) => [label, cleanDetail(value)]));
  if (rows.length) return rows;

  const skipped = new Set([
    "fullName",
    "contactNumber",
    "email",
    "location",
    "project",
    "contactMethod",
    "nationality",
    "currentLocation",
    "bestTimeToContact",
    "leadSource",
    "message",
    "consent",
    "website"
  ]);

  return uniqueRows(Object.entries(raw)
    .filter(([key]) => !skipped.has(key))
    .map(([key, value]) => [labelForRawField(key), cleanDetail(value)]));
}

function uniqueRows(rows) {
  const seen = new Set();
  return rows.filter(([label, value]) => {
    if (!value) return false;
    const key = `${label}:${value}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function cleanDetail(value) {
  const cleaned = clean(value, 160);
  if (!cleaned || cleaned.toLowerCase() === "not provided") return "";
  return cleaned;
}

function labelForRawField(key) {
  const labels = {
    viewingType: "Viewing type",
    preferredDate: "Preferred date",
    preferredTime: "Preferred time",
    preferredSize: "Preferred floor/size",
    paymentOption: "Payment option",
    paymentPreference: "Payment preference",
    budgetRange: "Budget range",
    buyerType: "Buyer type",
    concernType: "Inquiry type",
    nationality: "Nationality",
    currentLocation: "Current city/country",
    bestTimeToContact: "Best time to contact",
    leadSource: "Lead source",
    unitType: "Unit type"
  };
  return labels[key] || titleCase(String(key).replace(/([a-z])([A-Z])/g, "$1 $2"));
}

function inquiryKind(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized.includes("customer care") || normalized.includes("existing buyer")) return "customer-care";
  if (normalized.includes("view")) return "viewing";
  if (normalized.includes("availability") || normalized.includes("available")) return "availability";
  if (normalized.includes("computation") || normalized.includes("compute")) return "computation";
  return "general";
}

function nextStepPlan(lead) {
  const type = inquiryKind(lead.inquiryType);
  if (type === "customer-care") {
    return { text: "Assist where appropriate, then direct official account, turnover, billing, warranty, or after-sales concerns to the applicable DMCI Homes Customer Care channel for confirmation." };
  }
  if (type === "viewing") {
    return { text: "Confirm the viewing slot, access instructions, and meeting point before asking the buyer to travel." };
  }
  if (type === "availability") {
    return { text: "Verify current unit status, promo terms, and reservation timing before confirming availability." };
  }
  if (type === "computation") {
    return { text: "Confirm the latest price, down payment term, fees, and promo validity before sending figures." };
  }
  return { text: "Clarify the buyer goal, preferred location, budget, and timeline before preparing a shortlist." };
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

  if (key === "combined") {
    return {
      ...common,
      label: "Email and mobile preferred",
      title: "Send details by email, then confirm by mobile.",
      text: missingEmail || missingPhone
        ? "One requested contact channel is missing. Use the available channel and confirm the other contact detail."
        : "Send documents or detailed figures by email, then use the mobile number for a short confirmation.",
      note: missingEmail || missingPhone ? "The buyer selected Email and Mobile, but one contact detail is missing." : "",
      background: "#edf7f2",
      border: "#cfe7db",
      accent: "#0f6b4b"
    };
  }

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
      note: missingPhone ? "SMS was selected, but no mobile number was included." : "The SMS button may open a message app on mobile. On desktop, copy the Phone / Viber number above.",
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
  if (method.includes("email and mobile")) return "combined";
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

function smsHref(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  const normalized = digits.startsWith("0") ? `+63${digits.slice(1)}` : digits.startsWith("63") ? `+${digits}` : `+${digits}`;
  return `sms:${normalized}`;
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

function formatDateOnly(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("en-PH", {
      dateStyle: "medium",
      timeZone: "Asia/Manila"
    }).format(new Date(`${value}T00:00:00+08:00`));
  } catch {
    return value;
  }
}

function formatTimeOnly(value) {
  if (!value) return "";
  const match = String(value).match(/^(\d{1,2}):(\d{2})/);
  if (!match) return value;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return value;
  const date = new Date(Date.UTC(2026, 0, 1, hours, minutes));
  try {
    return new Intl.DateTimeFormat("en-PH", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC"
    }).format(date);
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
