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
const previews = [];

const base = {
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
  consent: true
};

const variants = [
  {
    slug: "contact",
    label: "Contact",
    payload: {
      ...base,
      inquiryType: "Sales Inquiry",
      buyerType: "Still exploring",
      message: "I am comparing two-bedroom options and would like help choosing the best fit.",
      sourcePage: "/contact",
      sourceUrl: "https://dmci-broker-website.vercel.app/contact",
      rawFields: { concernType: "Sales Inquiry", buyerType: "Still exploring" }
    }
  },
  {
    slug: "computation",
    label: "Request Computation",
    payload: {
      ...base,
      inquiryType: "Request Computation",
      unitType: "2 Bedroom",
      budgetRange: "PHP 7M to 9M",
      paymentPreference: "Bank financing",
      buyerType: "OFW / overseas Filipino",
      timeline: "Within 3 to 6 months",
      purpose: "Primary home",
      message: "Please send the latest sample computation and available two-bedroom options.",
      sourcePage: "/request-computation",
      sourceUrl: "https://dmci-broker-website.vercel.app/request-computation?project=The%20Oriana",
      rawFields: {
        unitType: "2 Bedroom",
        budgetRange: "PHP 7M to 9M",
        paymentPreference: "Bank financing",
        buyerType: "OFW / overseas Filipino",
        timeline: "Within 3 to 6 months",
        purpose: "Primary home"
      }
    }
  },
  {
    slug: "availability",
    label: "Availability",
    payload: {
      ...base,
      inquiryType: "Check Availability",
      unitType: "2 Bedroom",
      budgetRange: "PHP 7M to 9M",
      paymentPreference: "Bank financing",
      message: "Please check the latest available mid-floor units and turnover schedule.",
      sourcePage: "/availability",
      sourceUrl: "https://dmci-broker-website.vercel.app/availability?project=The%20Oriana",
      rawFields: {
        unitType: "2 Bedroom",
        preferredSize: "Mid-floor unit",
        budgetRange: "PHP 7M to 9M",
        paymentOption: "Bank financing",
        urgency: "Within 3 to 6 months"
      }
    }
  },
  {
    slug: "viewing",
    label: "Book Viewing",
    payload: {
      ...base,
      inquiryType: "Book a Site Viewing",
      preferredContactMethod: "Mobile / Viber",
      message: "I would like an online consultation before scheduling an on-site visit.",
      sourcePage: "/book-viewing",
      sourceUrl: "https://dmci-broker-website.vercel.app/book-viewing?project=The%20Oriana",
      rawFields: {
        viewingType: "Online consultation",
        preferredDate: "2026-07-20",
        preferredTime: "14:00",
        guests: "1"
      }
    }
  }
];

try {
  console.info = () => {};
  process.env.RESEND_API_KEY = "preview_only";
  process.env.LEAD_EMAIL_FROM = "Maria Luisa Leads <leads@example.com>";
  process.env.LEAD_EMAIL_TO = "mrcorral@dmcihomes.com";
  process.env.LEAD_EMAIL_REPLY_TO = "mrcorral@dmcihomes.com";
  process.env.LEAD_EMAIL_SUBJECT_PREFIX = "DMCI Broker Lead";
  delete process.env.LEADS_WEBHOOK_URL;

  globalThis.fetch = async (_url, options) => {
    const email = JSON.parse(options.body);
    previews.push({ subject: email.subject, html: email.html });
    return {
      ok: true,
      status: 200,
      json: async () => ({ id: `email_preview_${previews.length}` }),
      text: async () => ""
    };
  };

  for (const variant of variants) {
    await leadsHandler({ method: "POST", body: variant.payload }, mockResponse());
  }

  if (previews.length !== variants.length) {
    throw new Error(`Expected ${variants.length} email previews; generated ${previews.length}.`);
  }

  const outputDir = path.resolve("dist", "email-previews");
  await mkdir(outputDir, { recursive: true });
  const entries = [];
  for (const [index, variant] of variants.entries()) {
    const file = `${variant.slug}.html`;
    validatePreview(variant, previews[index]);
    await writeFile(path.join(outputDir, file), previews[index].html, "utf8");
    entries.push({ label: variant.label, file, subject: previews[index].subject });
  }

  await writeFile(path.resolve("dist", "email-preview.html"), previews[1].html, "utf8");
  await writeFile(path.join(outputDir, "index.html"), previewIndex(entries), "utf8");
  console.log(`Four lead email previews written to ${path.relative(process.cwd(), outputDir).replace(/\\/g, "/")}.`);
  entries.forEach((entry) => console.log(`${entry.label}: ${entry.subject}`));
} finally {
  globalThis.fetch = originalFetch;
  console.info = originalConsoleInfo;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
}

function previewIndex(entries) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Lead email previews</title>
    <style>
      body{margin:0;background:#eceef1;color:#202124;font:14px system-ui,sans-serif}
      header{position:sticky;top:0;z-index:1;display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 14px;background:#fff;border-bottom:1px solid #dfe1e5}
      button{border:1px solid #d2d5da;border-radius:8px;background:#fff;padding:8px 11px;font:inherit;cursor:pointer}
      button.active{background:#b88a2b;color:#fff;border-color:#b88a2b}
      .subject{margin-left:auto;color:#5f6368;font-size:12px;max-width:48%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      iframe{display:block;width:100%;height:calc(100vh - 58px);border:0}
    </style>
  </head>
  <body>
    <header>
      ${entries.map((entry, index) => `<button${index === 0 ? ' class="active"' : ""} data-file="${entry.file}" data-subject="${escapeIndexHtml(entry.subject)}">${entry.label}</button>`).join("")}
      <span class="subject">${escapeIndexHtml(entries[0].subject)}</span>
    </header>
    <iframe title="Email preview" src="${entries[0].file}"></iframe>
    <script>
      const frame=document.querySelector('iframe');
      const subject=document.querySelector('.subject');
      document.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');frame.src=button.dataset.file;subject.textContent=button.dataset.subject;
      }));
    </script>
  </body>
</html>`;
}

function escapeIndexHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function validatePreview(variant, preview) {
  if (!preview.subject || preview.subject.length > 92) {
    throw new Error(`${variant.label} has an empty or oversized email subject.`);
  }
  if (!preview.html.includes('@media only screen and (max-width: 640px)') ||
      !preview.html.includes('@media only screen and (max-width: 420px)')) {
    throw new Error(`${variant.label} is missing the responsive email breakpoints.`);
  }
  if (!preview.html.includes("Segoe UI Variable Text") ||
      !preview.html.includes("color:#17191C") ||
      !preview.html.includes("PHT")) {
    throw new Error(`${variant.label} is missing the approved typography, contrast, or Manila timezone label.`);
  }
  if (/#0D1B2A|Georgia|New buyer inquiry|Open Source Page/.test(preview.html)) {
    throw new Error(`${variant.label} still contains the retired dark-theme email design.`);
  }
  if (!preview.html.includes("Contact details") ||
      !preview.html.includes("Recommended follow-up") ||
      !preview.html.includes("View inquiry")) {
    throw new Error(`${variant.label} is missing a critical email section or action.`);
  }
}

function mockResponse() {
  return {
    status() { return this; },
    json() { return this; },
    setHeader() {},
    end() {}
  };
}
