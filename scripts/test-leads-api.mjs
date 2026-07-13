import assert from "node:assert/strict";
import leadsHandler from "../api/leads.js";

const envKeys = [
  "RESEND_API_KEY",
  "LEAD_EMAIL_FROM",
  "RESEND_FROM",
  "LEAD_EMAIL_TO",
  "LEAD_TO_EMAIL",
  "LEAD_EMAIL_REPLY_TO",
  "LEAD_REPLY_TO_EMAIL",
  "LEAD_EMAIL_SUBJECT_PREFIX",
  "LEADS_WEBHOOK_URL",
  "LEADS_WEBHOOK_SECRET"
];
const originalEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;
const originalConsoleInfo = console.info;
const originalConsoleError = console.error;

try {
  console.info = () => {};
  console.error = () => {};
  clearDeliveryEnv();

  const methodResponse = await runHandler({ method: "GET" });
  assert.equal(methodResponse.statusCode, 405);
  assert.equal(methodResponse.headers.Allow, "POST, OPTIONS");
  assert.equal(methodResponse.headers["Cache-Control"], "no-store");

  const invalidResponse = await runHandler({ method: "POST", body: {} });
  assert.equal(invalidResponse.statusCode, 400);
  assert.equal(invalidResponse.body.ok, false);
  assert.ok(invalidResponse.body.errors.fullName);
  assert.ok(invalidResponse.body.errors.consent);

  const oversizedResponse = await runHandler({
    method: "POST",
    body: { message: "x".repeat(25 * 1024) }
  });
  assert.equal(oversizedResponse.statusCode, 413);

  let fetchCalls = 0;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    throw new Error("Honeypot submissions must not reach a provider.");
  };
  const honeypotResponse = await runHandler({
    method: "POST",
    body: { website: "https://spam.example" }
  });
  assert.equal(honeypotResponse.statusCode, 200);
  assert.equal(honeypotResponse.body.ok, true);
  assert.equal(fetchCalls, 0);

  const unconfiguredResponse = await runHandler({ method: "POST", body: validLead() });
  assert.equal(unconfiguredResponse.statusCode, 200);
  assert.equal(unconfiguredResponse.body.ok, false);
  assert.equal(unconfiguredResponse.body.code, "delivery_not_configured");
  assert.ok(unconfiguredResponse.body.missingEnv.includes("RESEND_API_KEY"));

  configureEmail();
  let emailRequest;
  globalThis.fetch = async (url, options) => {
    emailRequest = { url, options };
    return {
      ok: true,
      status: 200,
      json: async () => ({ id: "email_test_123" }),
      text: async () => ""
    };
  };

  const deliveredResponse = await runHandler({ method: "POST", body: validLead() });
  assert.equal(deliveredResponse.statusCode, 200);
  assert.equal(deliveredResponse.body.ok, true);
  assert.deepEqual(deliveredResponse.body.deliveredTo, ["email"]);
  assert.equal(emailRequest.url, "https://api.resend.com/emails");
  assert.equal(emailRequest.options.headers["Idempotency-Key"], deliveredResponse.body.referenceId);

  const outboundEmail = JSON.parse(emailRequest.options.body);
  assert.equal(outboundEmail.reply_to, "buyer@example.com");
  assert.match(outboundEmail.subject, /The Oriana/);
  assert.match(outboundEmail.subject, /^Sales inquiry · The Oriana · /);
  assert.ok(outboundEmail.subject.length <= 92, "Inbox subject should remain compact.");
  assert.match(outboundEmail.text, /<Buyer & Co>/);
  assert.match(outboundEmail.html, /&lt;Buyer &amp; Co&gt;/);
  assert.doesNotMatch(outboundEmail.html, /<Buyer & Co>/);
  assert.match(outboundEmail.html, /background-color:#F3F4F6/);
  assert.match(outboundEmail.html, /Recommended follow-up/);
  assert.match(outboundEmail.html, /View inquiry/);
  assert.doesNotMatch(outboundEmail.html, /#0D1B2A|Georgia|New buyer inquiry|Open Source Page/);
  const preheader = outboundEmail.html.match(/<div style="display:none[^>]*>([\s\S]*?)<\/div>/)?.[1] || "";
  assert.match(preheader, /The Oriana/);
  assert.doesNotMatch(preheader, /Ref:|Reference:/i);

  globalThis.fetch = async () => ({
    ok: false,
    status: 403,
    json: async () => ({}),
    text: async () => JSON.stringify({ message: "The example.com domain is not verified." })
  });
  const failedResponse = await runHandler({ method: "POST", body: validLead() });
  assert.equal(failedResponse.statusCode, 200);
  assert.equal(failedResponse.body.ok, false);
  assert.equal(failedResponse.body.code, "lead_delivery_failed");
  assert.doesNotMatch(failedResponse.body.message, /saved in this browser/i);

  console.log("Lead API regression QA passed: method, validation, payload guard, honeypot, configuration, email, escaping, and provider failure.");
} finally {
  globalThis.fetch = originalFetch;
  console.info = originalConsoleInfo;
  console.error = originalConsoleError;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
}

function validLead() {
  return {
    name: "<Buyer & Co>",
    phone: "09170000000",
    email: "buyer@example.com",
    preferredContactMethod: "Email",
    projectInterestedIn: "The Oriana",
    cityLocation: "Quezon City",
    inquiryType: "General Inquiry",
    message: "Please send the latest project details.",
    sourcePage: "/contact",
    sourceUrl: "https://dmci-broker-website.vercel.app/contact",
    consent: true,
    honeypot: ""
  };
}

function configureEmail() {
  process.env.RESEND_API_KEY = "re_test_key";
  process.env.LEAD_EMAIL_TO = "mrcorral@dmcihomes.com";
  process.env.LEAD_EMAIL_FROM = "DMCI Leads <leads@example.com>";
  process.env.LEAD_EMAIL_REPLY_TO = "mrcorral@dmcihomes.com";
}

function clearDeliveryEnv() {
  envKeys.forEach((key) => delete process.env[key]);
}

async function runHandler(request) {
  const response = {
    headers: {},
    statusCode: 200,
    body: undefined,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
    end() {
      return this;
    }
  };

  await leadsHandler(request, response);
  return response;
}
