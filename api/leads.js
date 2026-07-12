import { randomUUID } from "node:crypto";

const messageLimit = 1500;
const maxPayloadBytes = 24 * 1024;
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
  const requestRows = buildRequestRows(lead);
  const nextStep = nextStepPlan(lead);
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
    "Inquiry snapshot",
    `Inquiry type: ${titleCase(lead.inquiryType || "General Inquiry")}`,
    `Interested project: ${lead.projectInterestedIn || "Not provided"}`,
    `City/location: ${lead.cityLocation || "Not provided"}`,
    `Preferred contact method: ${lead.preferredContactMethod || "Not provided"}`,
    `Best time to contact: ${lead.bestTimeToContact || "Not provided"}`,
    `Nationality: ${lead.nationality || "Not provided"}`,
    `Current city/country: ${lead.buyerLocation || "Not provided"}`,
    `Lead source: ${lead.leadSource || "Not provided"}`,
    `Source page: ${lead.sourcePage || lead.sourceUrl || "Not provided"}`,
    "",
    "Recommended follow-up",
    `${followUp.label}: ${followUp.text}`,
    followUp.note ? `Note: ${followUp.note}` : "",
    `Before replying: ${nextStep.text}`,
    "",
    ...(requestRows.length ? [
      "Request details",
      ...requestRows.map(([label, value]) => `${label}: ${value}`),
      ""
    ] : []),
    "Lead information",
    `Name: ${lead.name}`,
    `Phone / Viber: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `Message: ${lead.message || "No message provided."}`,
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
  const nextStep = nextStepPlan(lead);
  const logoUrl = `${publicSiteUrl}/assets/img/dmci-broker-mark.png`;
  const requestRows = buildRequestRows(lead);
  const requestTypeLabel = titleCase(lead.inquiryType || "General Inquiry");
  const projectVisual = projectHeaderVisual(lead);
  const actions = buildActionButtons(lead, followUp, sourceUrl);
  const requestDetailsSection = requestRows.length ? `
                <tr>
                  <td class="mp" style="padding:24px 40px 0 40px;">
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
        <title>New DMCI broker inquiry</title>
        <style type="text/css">
          @media only screen and (max-width: 760px) {
            .email-body { width: 100% !important; min-width: 0 !important; }
            .mp { padding-left: 22px !important; padding-right: 22px !important; }
            .mc { text-align: center !important; }
            .sg-cell { display: block !important; width: 100% !important; border-right: none !important; }
            .sg-cell-bottom { border-top: 1px solid #CBD6E2 !important; }
            .contact-row { display: block !important; width: 100% !important; padding-bottom: 12px !important; }
            .dl { width: 40% !important; }
            .dv { width: 60% !important; }
            .hero-copy, .hero-art { display: block !important; width: 100% !important; }
            .hero-art { padding-left: 0 !important; padding-top: 18px !important; }
            .project-visual-card { width: 100% !important; max-width: 100% !important; }
            .project-visual-img { width: 100% !important; max-width: 100% !important; height: auto !important; }
            .abtn-td { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
            .hide-mobile { display: none !important; }
          }
        </style>
      </head>
      <body style="margin:0;padding:0;background-color:#D7DFE8;color:#0D1B2A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
        <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#D7DFE8;">
          ${escapeHtml(requestTypeLabel)} inquiry for ${escapeHtml(lead.projectInterestedIn || "DMCI Homes")} from ${escapeHtml(lead.name || "a buyer")}. Reply via ${escapeHtml(lead.preferredContactMethod || "preferred channel")}. Ref: ${escapeHtml(lead.referenceId)}
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#D7DFE8;">
          <tr>
            <td align="center" style="padding:32px 12px;">
              <table role="presentation" class="email-body" width="720" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;min-width:720px;background-color:#FFFFFF;border-radius:8px;border-collapse:separate;border-spacing:0;border:1px solid #B9C7D6;box-shadow:0 16px 42px rgba(10,22,40,0.16);overflow:hidden;">
                <tr>
                  <td style="background-color:#0D1B2A;padding:0;border-radius:8px 8px 0 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="height:4px;background-color:#C8A951;font-size:0;line-height:0;">&nbsp;</td></tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="mp" style="padding:30px 40px 0 40px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="vertical-align:top;">
                                <div style="font-family:Georgia,'Times New Roman',Times,serif;font-size:19px;color:#FFFFFF;letter-spacing:0.3px;line-height:1.3;">Maria Luisa Corral</div>
                                <div style="font-size:10px;color:#C8A951;letter-spacing:2.3px;text-transform:uppercase;padding-top:5px;line-height:1.4;">Sales Director | DMCI Homes</div>
                              </td>
                              <td align="right" style="width:58px;vertical-align:top;">
                                <img src="${logoUrl}" width="48" height="48" alt="DMCI broker logo" style="display:block;width:48px;height:48px;border-radius:12px;background:#FFFFFF;border:1px solid rgba(200,169,81,0.72);">
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td class="mp" style="padding:26px 40px 0 40px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td class="hero-copy" width="${projectVisual ? "58%" : "100%"}" style="vertical-align:top;">
                                <div style="font-size:28px;font-weight:700;color:#FFFFFF;line-height:1.22;">New buyer inquiry</div>
                                <div style="font-size:15px;color:#E5ECF3;line-height:1.65;padding-top:10px;max-width:520px;">Review the buyer details, verify the project information, then reply through the requested channel.</div>
                              </td>
                              ${projectVisual ? `<td class="hero-art" width="42%" align="right" style="vertical-align:top;padding-left:24px;">${projectVisual}</td>` : ""}
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td class="mp" style="padding:18px 40px 28px 40px;">
                          <div style="font-size:13px;color:#E5ECF3;line-height:1.9;">
                            Submitted ${escapeHtml(submittedLabel)}<br>
                            <span style="color:#C8A951;font-family:'Courier New',Courier,monospace;font-size:10.5px;letter-spacing:1.1px;">REF: ${escapeHtml(lead.referenceId)}</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="height:3px;background-color:#C8A951;font-size:0;line-height:0;">&nbsp;</td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:28px 40px 0 40px;">
                    ${sectionLabel("Inquiry Snapshot")}
                    ${inquirySnapshot(lead)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:24px 40px 0 40px;">
                    ${followUpCard(followUp)}
                    ${nextStepCard(nextStep)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:24px 40px 0 40px;">
                    ${buyerContactBlock(lead)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:24px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="height:1px;background-color:#E8EBF0;font-size:0;line-height:0;">&nbsp;</td></tr>
                    </table>
                  </td>
                </tr>
                ${requestDetailsSection}
                <tr>
                  <td class="mp" style="padding:20px 40px 0 40px;">
                    ${consentBlock(lead)}
                  </td>
                </tr>
                <tr>
                  <td class="mp" style="padding:24px 40px 32px 40px;">
                    ${sectionLabel("Quick Actions")}
                    ${actions || '<span style="color:#34465A;font-size:15px;font-weight:700;">No quick action links available.</span>'}
                    ${followUp.note ? `<p style="margin:10px 0 0;color:#34465A;font-size:14px;line-height:1.65;">${escapeHtml(followUp.note)}</p>` : ""}
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#0D1B2A;padding:0;border-radius:0 0 8px 8px;">
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
        <td style="font-size:13px;font-weight:850;color:#34465A;letter-spacing:1.35px;text-transform:uppercase;padding-bottom:12px;">${escapeHtml(label)}</td>
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
    <table role="presentation" class="project-visual-card" width="238" cellpadding="0" cellspacing="0" border="0" style="width:238px;max-width:238px;background-color:#071421;border:1px solid rgba(229,236,243,0.22);border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:0;">
          <a href="${escapeAttribute(visual.pageUrl)}" target="_blank" style="text-decoration:none;border:0;display:block;">
            <img class="project-visual-img" src="${escapeAttribute(visual.imageUrl)}" width="238" alt="${escapeAttribute(alt)}" style="display:block;width:238px;max-width:238px;height:auto;border:0;line-height:0;">
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:11px 13px 13px 13px;background-color:#071421;">
          <div style="font-size:10px;color:#C8A951;letter-spacing:1.35px;text-transform:uppercase;font-weight:850;line-height:1.3;">Selected Project</div>
          <div style="font-size:16px;color:#FFFFFF;font-weight:800;line-height:1.35;padding-top:4px;">${escapeHtml(visual.name)}</div>
          <div style="font-size:12px;color:#C8D4E0;line-height:1.45;padding-top:2px;">${escapeHtml(caption)}</div>
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
  const source = lead.sourcePage || lead.sourceUrl || "Not provided";
  const methodTone = contactTone(contactMethodKey(method));

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EFF4F8;border-radius:6px;border:1px solid #B8C6D6;overflow:hidden;">
      <tr>
        ${snapshotCell("Inquiry Type", inquiry, true)}
        ${snapshotCell("Project", project)}
      </tr>
      <tr>
        ${snapshotCell("Location", location, true, true)}
        ${snapshotCell("Reply Via", `<span style="color:${methodTone.color};">&#9679;</span>&nbsp;<span style="color:#0D1B2A;">${escapeHtml(method)}</span>`, false, true, true)}
      </tr>
      <tr>
        <td colspan="2" style="padding:17px 22px;border-top:1px solid #B8C6D6;vertical-align:top;">
          <span style="font-size:12px;color:#3C4E62;text-transform:uppercase;letter-spacing:.85px;font-weight:850;display:block;margin-bottom:6px;">Source Page</span>
          <span style="font-family:'Courier New',Courier,monospace;font-size:14px;color:#142A40;font-weight:700;line-height:1.55;word-break:break-word;">${escapeHtml(source)}</span>
        </td>
      </tr>
    </table>
  `;
}

function snapshotCell(label, value, rightBorder = false, topBorder = false, allowHtml = false) {
  return `
    <td class="sg-cell${topBorder ? " sg-cell-bottom" : ""}" width="50%" style="padding:17px 22px;${rightBorder ? "border-right:1px solid #B8C6D6;" : ""}${topBorder ? "border-top:1px solid #B8C6D6;" : ""}vertical-align:top;">
      <span style="font-size:12px;color:#3C4E62;text-transform:uppercase;letter-spacing:.85px;font-weight:850;display:block;margin-bottom:6px;">${escapeHtml(label)}</span>
      <span style="font-size:16px;color:#071D33;font-weight:800;line-height:1.45;word-break:break-word;">${allowHtml ? value : escapeHtml(value)}</span>
    </td>
  `;
}

function buyerContactBlock(lead) {
  const phone = lead.phone || "Not provided";
  const email = lead.email || "Not provided";
  const message = lead.message || "No buyer message provided.";

  return `
    ${sectionLabel("Buyer Contact")}
    <div style="font-size:24px;color:#071D33;font-weight:800;line-height:1.3;padding-bottom:16px;">${escapeHtml(lead.name)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="contact-row" width="50%" style="padding-bottom:4px;padding-right:12px;vertical-align:top;">
          <span style="font-size:12px;color:#3C4E62;text-transform:uppercase;letter-spacing:.85px;font-weight:850;display:block;margin-bottom:5px;">Phone / Viber</span>
          <span style="font-size:16px;color:#071D33;font-weight:800;line-height:1.45;word-break:break-word;">${escapeHtml(phone)}</span>
        </td>
        <td class="contact-row" width="50%" style="padding-bottom:4px;vertical-align:top;">
          <span style="font-size:12px;color:#3C4E62;text-transform:uppercase;letter-spacing:.85px;font-weight:850;display:block;margin-bottom:5px;">Email</span>
          <span style="font-size:16px;color:#0B5D9E;font-weight:800;line-height:1.45;word-break:break-word;">${escapeHtml(email)}</span>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;background-color:#F6F8FA;border-radius:6px;border:1px solid #B8C6D6;border-left:5px solid #C8A951;">
      <tr>
        <td style="padding:18px 20px;font-size:16px;color:#142A40;line-height:1.7;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
      </tr>
    </table>
  `;
}

function requestDetailsCard(rows, typeLabel) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #B8C6D6;border-radius:6px;overflow:hidden;">
      <tr>
        <td style="background-color:#EAF0F6;padding:15px 22px;border-bottom:1px solid #B8C6D6;">
          <span style="font-size:13px;font-weight:850;color:#34465A;letter-spacing:1.35px;text-transform:uppercase;">Request Details</span>
          <span style="font-size:12px;color:#4A5E73;letter-spacing:.8px;text-transform:uppercase;margin-left:10px;font-weight:800;">${escapeHtml(typeLabel)}</span>
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
  const border = last ? "" : "border-bottom:1px solid #DDE5EE;";
  return `
    <tr>
      <td class="dl" width="40%" style="padding:15px 22px;font-size:12px;color:#34465A;text-transform:uppercase;letter-spacing:.55px;font-weight:850;${border}background-color:#F5F8FB;vertical-align:top;">${escapeHtml(label)}</td>
      <td class="dv" width="60%" style="padding:15px 22px;font-size:16px;color:#071D33;font-weight:800;line-height:1.5;${border}vertical-align:top;word-break:break-word;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function followUpCard(plan) {
  const tone = contactTone(plan.key);
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFF7DE;border-radius:6px;border:1px solid #CDB772;">
      <tr>
        <td width="4" style="background-color:#C8A951;border-radius:6px 0 0 6px;font-size:0;line-height:0;">&nbsp;</td>
        <td style="padding:22px 26px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="font-size:13px;font-weight:850;color:#76520F;letter-spacing:1.35px;text-transform:uppercase;padding-bottom:14px;border-bottom:1px solid #D9C47F;">Recommended Follow-up</td></tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
            <tr>
              <td width="36" height="36" style="background-color:${tone.color};border-radius:50%;text-align:center;vertical-align:middle;font-size:16px;color:#FFFFFF;line-height:36px;">${tone.icon}</td>
              <td style="padding-left:14px;font-size:18px;color:#071D33;font-weight:800;line-height:1.4;">${escapeHtml(plan.title)}</td>
            </tr>
          </table>
          <p style="margin:12px 0 0;color:#142A40;font-size:16px;line-height:1.7;">${escapeHtml(plan.text)}</p>
        </td>
      </tr>
    </table>
  `;
}

function nextStepCard(plan) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;background-color:#F6F8FA;border:1px solid #B8C6D6;border-radius:6px;">
      <tr>
        <td style="padding:16px 20px;">
          <div style="font-size:13px;color:#34465A;text-transform:uppercase;letter-spacing:1.15px;font-weight:850;padding-bottom:8px;">Before replying, verify</div>
          <div style="font-size:15px;color:#142A40;line-height:1.7;">${escapeHtml(plan.text)}</div>
        </td>
      </tr>
    </table>
  `;
}

function consentBlock(lead) {
  return `
    <div style="font-size:15px;color:#34465A;line-height:1.75;">
      <span style="color:#1F7A4D;font-weight:800;">&#10003; Consent checked: ${lead.consent ? "Yes" : "No"}</span><br>
      Project details, pricing, availability, promos, and terms are subject to confirmation.
    </div>
  `;
}

function buildActionButtons(lead, followUp, sourceUrl) {
  const tel = lead.phone ? telHref(lead.phone) : "";
  const sms = lead.phone ? smsHref(lead.phone) : "";
  const email = lead.email ? `mailto:${lead.email}` : "";
  const primary = preferredAction(lead, followUp, { tel, sms, email });
  const secondary = [];

  if (email && primary?.href !== email) secondary.push({ href: email, label: "Reply by Email", icon: "&#9993;" });
  if (tel && primary?.href !== tel) secondary.push({ href: tel, label: followUp.key === "sms" ? "Call if Urgent" : "Call Lead", icon: "&#9742;" });
  if (sourceUrl) secondary.push({ href: sourceUrl, label: "Open Source Page", icon: "&#8599;" });

  if (!primary && !secondary.length) return "";

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${primary ? primaryActionButton(primary) : ""}
      ${secondary.length ? secondaryActionsGrid(secondary) : ""}
    </table>
  `;
}

function preferredAction(lead, followUp, links) {
  if (followUp.key === "email" && links.email) return { href: links.email, label: "Reply by Email", icon: "&#9993;" };
  if (followUp.key === "call" && links.tel) return { href: links.tel, label: "Call Lead", icon: "&#9742;" };
  if (followUp.key === "viber" && links.tel) return { href: links.tel, label: "Use Phone / Viber Number", icon: "&#9742;" };
  if (followUp.key === "sms" && links.sms) return { href: links.sms, label: "Send SMS", icon: "&#9993;" };
  if (links.email) return { href: links.email, label: "Reply by Email", icon: "&#9993;" };
  if (links.tel) return { href: links.tel, label: "Call Lead", icon: "&#9742;" };
  return null;
}

function primaryActionButton(action) {
  return `
    <tr>
      <td style="padding-bottom:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="background-color:#C8A951;border-radius:6px;border:1px solid #A98524;">
              <a href="${escapeAttribute(action.href)}" target="_blank" style="display:block;padding:17px 24px;font-size:16px;font-weight:850;color:#071D33;text-decoration:none;letter-spacing:.15px;">${action.icon}&nbsp;&nbsp;${escapeHtml(action.label)}</a>
            </td>
          </tr>
        </table>
        <div style="text-align:center;padding-top:7px;font-size:11px;color:#8A6719;letter-spacing:1.25px;text-transform:uppercase;font-weight:850;">Preferred Action</div>
      </td>
    </tr>
  `;
}

function secondaryActionsGrid(actions) {
  const cells = actions.map((action) => `
    <td class="abtn-td" width="50%" style="padding:0 5px 8px 5px;vertical-align:top;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="background-color:#F7F9FB;border:1px solid #B8C6D6;border-radius:6px;">
            <a href="${escapeAttribute(action.href)}" target="_blank" style="display:block;padding:14px 16px;font-size:15px;font-weight:800;color:#071D33;text-decoration:none;">${action.icon}&nbsp;&nbsp;${escapeHtml(action.label)}</a>
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
      <tr><td style="height:3px;background-color:#C8A951;font-size:0;line-height:0;">&nbsp;</td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="mp mc" style="padding:28px 40px 32px 40px;">
          <div style="font-family:Georgia,'Times New Roman',Times,serif;font-size:18px;color:#FFFFFF;padding-bottom:14px;line-height:1.3;">Maria Luisa Corral</div>
          <div style="font-size:14px;color:#D8E1EA;line-height:2;">
            <a href="mailto:mrcorral@dmcihomes.com" style="color:#C8A951;text-decoration:none;">mrcorral@dmcihomes.com</a><br>
            Mobile/Viber: <span style="color:#FFFFFF;">0998 865 8902</span><br>
            Office: <span style="color:#FFFFFF;">02 8888 7777</span> local 5860<br>
            <span style="color:#D8E1EA;font-size:13px;">PRC License No. 0003253</span>
          </div>
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
