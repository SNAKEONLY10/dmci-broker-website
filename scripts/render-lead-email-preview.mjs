import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import leadsHandler from "../api/leads.js";

const envKeys = [
  "RESEND_API_KEY",
  "LEAD_EMAIL_FROM",
  "LEAD_EMAIL_TO",
  "LEAD_EMAIL_REPLY_TO",
  "LEAD_EMAIL_SUBJECT_PREFIX",
  "LEADS_WEBHOOK_URL"
];
const originalEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;
const originalConsoleInfo = console.info;
let emailHtml = "";

try {
  console.info = () => {};
  process.env.RESEND_API_KEY = "preview_only";
  process.env.LEAD_EMAIL_FROM = "DMCI Leads <leads@example.com>";
  process.env.LEAD_EMAIL_TO = "mrcorral@dmcihomes.com";
  process.env.LEAD_EMAIL_REPLY_TO = "mrcorral@dmcihomes.com";
  process.env.LEAD_EMAIL_SUBJECT_PREFIX = "DMCI Broker Lead";
  delete process.env.LEADS_WEBHOOK_URL;

  globalThis.fetch = async (_url, options) => {
    emailHtml = JSON.parse(options.body).html;
    return {
      ok: true,
      status: 200,
      json: async () => ({ id: "email_preview" }),
      text: async () => ""
    };
  };

  await leadsHandler({
    method: "POST",
    body: {
      name: "Alexandra Reyes",
      phone: "+63 917 123 4567",
      email: "alexandra@example.com",
      preferredContactMethod: "Email and Mobile",
      nationality: "Filipino",
      buyerLocation: "Singapore",
      bestTimeToContact: "Evening (Philippine time)",
      leadSource: "Google",
      projectInterestedIn: "The Oriana",
      cityLocation: "Quezon City",
      inquiryType: "Request Computation",
      unitType: "2 Bedroom",
      budgetRange: "PHP 7M to 9M",
      paymentPreference: "Bank financing",
      buyerType: "OFW / overseas Filipino",
      timeline: "Within 3 to 6 months",
      purpose: "Primary home",
      message: "Please send the latest sample computation and available 2-bedroom options.",
      sourcePage: "/request-computation",
      sourceUrl: "https://dmci-broker-website.vercel.app/request-computation?project=The%20Oriana",
      consent: true,
      rawFields: {
        unitType: "2 Bedroom",
        budgetRange: "PHP 7M to 9M",
        paymentPreference: "Bank financing",
        buyerType: "OFW / overseas Filipino",
        timeline: "Within 3 to 6 months",
        purpose: "Primary home"
      }
    }
  }, mockResponse());

  if (!emailHtml) throw new Error("Email preview HTML was not generated.");
  const output = path.resolve("dist", "email-preview.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, emailHtml, "utf8");
  console.log(`Lead email preview written to ${path.relative(process.cwd(), output).replace(/\\/g, "/")}.`);
} finally {
  globalThis.fetch = originalFetch;
  console.info = originalConsoleInfo;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
}

function mockResponse() {
  return {
    status() {
      return this;
    },
    json() {
      return this;
    },
    setHeader() {},
    end() {}
  };
}
