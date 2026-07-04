const TEST_RECIPIENT = "howardxxcelestial69@gmail.com";
// TODO: Change recipient to Luisa's official email after approval.

const defaultSender = "DMCI Broker Website <onboarding@resend.dev>";
const messageLimit = 1500;

export default async function handler(req, res) {
  res.setHeader("Allow", "POST");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  let body;
  try {
    body = parseBody(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid JSON payload." });
    return;
  }

  const { lead, errors } = normalizeComputationRequest(body);
  if (Object.keys(errors).length) {
    res.status(400).json({
      ok: false,
      error: "Please review the highlighted fields.",
      errors
    });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ ok: false, error: "Email service is not configured." });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || defaultSender,
        to: TEST_RECIPIENT,
        reply_to: lead.email,
        subject: `New DMCI Computation Request - ${lead.subjectTarget}`,
        html: buildComputationEmailHtml(lead),
        text: buildComputationEmailText(lead)
      })
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Request computation email failed", response.status, details.slice(0, 300));
      res.status(500).json({ ok: false, error: "Email could not be sent." });
      return;
    }

    const data = await safeJson(response);
    res.status(200).json({
      ok: true,
      message: "Computation request test email sent.",
      id: data?.id,
      recipient: TEST_RECIPIENT
    });
  } catch (error) {
    console.error("Request computation email failed", error?.message || error);
    res.status(500).json({ ok: false, error: "Email could not be sent." });
  }
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body;
}

function normalizeComputationRequest(payload) {
  const rawFields = payload.rawFields && typeof payload.rawFields === "object" ? payload.rawFields : {};
  const lead = {
    fullName: clean(payload.fullName || payload.name || rawFields.fullName, 120),
    contactNumber: clean(payload.contactNumber || payload.mobileNumber || payload.phone || rawFields.contactNumber || rawFields.mobileNumber, 80),
    email: clean(payload.email || rawFields.email, 160),
    messengerLink: clean(payload.messengerLink || rawFields.messengerLink, 300),
    preferredContactMethod: clean(payload.contactMethod || payload.preferredContactMethod || rawFields.contactMethod, 80),
    preferredProject: clean(payload.project || payload.preferredProject || payload.projectInterestedIn || rawFields.project || rawFields.preferredProject, 160),
    preferredLocation: clean(payload.location || payload.preferredLocation || payload.cityLocation || rawFields.location || rawFields.preferredLocation, 160),
    unitType: clean(payload.unitType || rawFields.unitType, 120),
    budgetRange: clean(payload.budgetRange || rawFields.budgetRange, 120),
    paymentPreference: clean(payload.paymentPreference || payload.paymentOption || rawFields.paymentPreference || rawFields.paymentOption, 120),
    buyerType: clean(payload.buyerType || rawFields.buyerType, 120),
    timeline: clean(payload.timeline || rawFields.timeline, 120),
    purpose: clean(payload.purpose || rawFields.purpose, 160),
    message: clean(payload.message || rawFields.message, messageLimit),
    submittedAt: clean(payload.createdAt || payload.submittedAt || new Date().toISOString(), 80),
    consent: isTruthy(payload.consent),
    sourcePage: clean(payload.sourcePage, 300),
    sourceUrl: clean(payload.sourceUrl, 500)
  };
  lead.subjectTarget = lead.preferredProject || lead.preferredLocation || "General Inquiry";

  const errors = {};
  if (!lead.fullName) errors.fullName = "Please enter your full name.";
  if (!lead.contactNumber) errors.contactNumber = "Please enter your mobile or contact number.";
  if (!lead.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(lead.email)) {
    errors.email = "Use a valid email address.";
  }
  if (String(payload.message || rawFields.message || "").length > messageLimit) {
    errors.message = `Please keep the message under ${messageLimit} characters.`;
  }
  if (!lead.consent) errors.consent = "Please confirm consent before sending.";

  return { lead, errors };
}

function buildComputationEmailText(lead) {
  return [
    "New DMCI Computation Request",
    "",
    "A website visitor requested the latest computation from the DMCI Broker website.",
    "",
    "Buyer Details:",
    `Full Name: ${lead.fullName}`,
    `Contact Number / Mobile Number: ${lead.contactNumber}`,
    `Email: ${lead.email}`,
    `Messenger Link: ${lead.messengerLink || "Not provided"}`,
    `Preferred Contact Method: ${lead.preferredContactMethod || "Not provided"}`,
    "",
    "Inquiry Details:",
    `Preferred Project: ${lead.preferredProject || "Not provided"}`,
    `Preferred Location: ${lead.preferredLocation || "Not provided"}`,
    `Unit Type: ${lead.unitType || "Not provided"}`,
    `Budget Range: ${lead.budgetRange || "Not provided"}`,
    `Payment Preference: ${lead.paymentPreference || "Not provided"}`,
    `Buyer Type: ${lead.buyerType || "Not provided"}`,
    `Timeline: ${lead.timeline || "Not provided"}`,
    `Purpose: ${lead.purpose || "Not provided"}`,
    `Message: ${lead.message || "No message provided."}`,
    "",
    "Meta:",
    "Source: DMCI Broker Website",
    "Form: Request Latest Computation",
    `Submitted At: ${formatDateTime(lead.submittedAt)}`,
    `Test Recipient: ${TEST_RECIPIENT}`,
    lead.sourcePage ? `Source Page: ${lead.sourcePage}` : "",
    lead.sourceUrl ? `Source URL: ${lead.sourceUrl}` : "",
    "",
    "This is a test notification. Final recipient should be updated to Luisa's official email after approval.",
    "Prices, availability, promos, payment terms, unit details, and turnover schedules are subject to change and final confirmation."
  ].filter(Boolean).join("\n");
}

function buildComputationEmailHtml(lead) {
  const buyerRows = [
    ["Full Name", lead.fullName],
    ["Contact Number / Mobile Number", lead.contactNumber],
    ["Email", lead.email],
    ["Messenger Link", lead.messengerLink || "Not provided"],
    ["Preferred Contact Method", lead.preferredContactMethod || "Not provided"]
  ];
  const inquiryRows = [
    ["Preferred Project", lead.preferredProject || "Not provided"],
    ["Preferred Location", lead.preferredLocation || "Not provided"],
    ["Unit Type", lead.unitType || "Not provided"],
    ["Budget Range", lead.budgetRange || "Not provided"],
    ["Payment Preference", lead.paymentPreference || "Not provided"],
    ["Buyer Type", lead.buyerType || "Not provided"],
    ["Timeline", lead.timeline || "Not provided"],
    ["Purpose", lead.purpose || "Not provided"],
    ["Message", lead.message || "No message provided."]
  ];
  const metaRows = [
    ["Source", "DMCI Broker Website"],
    ["Form", "Request Latest Computation"],
    ["Submitted At", formatDateTime(lead.submittedAt)],
    ["Test Recipient", TEST_RECIPIENT],
    ["Source Page", lead.sourcePage || "Not provided"]
  ];

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f7f8;color:#102a45;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#f4f7f8;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #dfe7ec;border-radius:18px;overflow:hidden;box-shadow:0 18px 44px rgba(16,42,69,0.10);">
            <tr>
              <td style="padding:30px 30px 24px;background:#0f2a43;color:#ffffff;border-bottom:4px solid #d8b65d;">
                <p style="margin:0 0 10px;color:#d8b65d;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">DMCI Broker Website</p>
                <h1 style="margin:0;font-size:28px;line-height:1.18;font-weight:750;">New DMCI Computation Request</h1>
                <p style="margin:10px 0 0;color:#dbe7ef;font-size:14px;line-height:1.55;">A website visitor requested the latest computation from the DMCI Broker website.</p>
              </td>
            </tr>
            <tr><td style="padding:26px 30px 8px;">${sectionTitle("Buyer Details")}${infoTable(buyerRows)}</td></tr>
            <tr><td style="padding:22px 30px 8px;">${sectionTitle("Inquiry Details")}${infoTable(inquiryRows)}</td></tr>
            <tr><td style="padding:22px 30px 8px;">${sectionTitle("Meta")}${infoTable(metaRows)}</td></tr>
            <tr>
              <td style="padding:20px 30px 0;">
                <div style="padding:16px 18px;background:#fffaf0;border:1px solid #ead8a8;border-radius:14px;color:#102a45;">
                  <p style="margin:0 0 8px;font-size:14px;line-height:1.6;"><strong>Test notification:</strong> Final recipient should be updated to Luisa's official email after approval.</p>
                  <p style="margin:0;font-size:13px;line-height:1.6;color:#5d6b78;">Prices, availability, promos, payment terms, unit details, and turnover schedules are subject to change and final confirmation.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 30px 30px;">
                <div style="border-top:1px solid #e8eef2;padding-top:18px;">
                  <p style="margin:0;color:#5c6f80;font-size:13px;line-height:1.7;">This email was generated by the Request Latest Computation form for testing.</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function sectionTitle(label) {
  return `<h2 style="margin:0 0 12px;color:#102a45;font-size:17px;line-height:1.35;">${escapeHtml(label)}</h2>`;
}

function infoTable(rows) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
    ${rows.map(([label, value]) => `
      <tr>
        <td style="padding:10px 0;color:#667085;font-size:13px;width:42%;border-bottom:1px solid #edf2f5;">${escapeHtml(label)}</td>
        <td style="padding:10px 0;color:#102a45;font-size:14px;font-weight:700;border-bottom:1px solid #edf2f5;">${escapeHtml(value)}</td>
      </tr>
    `).join("")}
  </table>`;
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
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

function clean(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
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
