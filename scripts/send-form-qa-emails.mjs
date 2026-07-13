import leadsHandler from "../api/leads.js";
import computationHandler from "../api/request-computation.js";
import { contact } from "../src/data/contact.js";

const mode = process.argv[2] || "check";
const baseUrl = new URL(process.env.QA_BASE_URL || "https://dmci-broker-website.vercel.app");

if (!['check', 'send'].includes(mode)) {
  throw new Error('Use mode "check" or explicit mode "send".');
}

const date = new Date();
date.setDate(date.getDate() + 7);
const preferredDate = date.toISOString().slice(0, 10);
const base = {
  name: "[QA TEST] Maria Luisa Corral",
  fullName: "[QA TEST] Maria Luisa Corral",
  phone: contact.phoneHref.replace("tel:", ""),
  contactNumber: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  preferredContactMethod: "Email and Mobile",
  contactMethod: "Email and Mobile",
  nationality: "Filipino",
  buyerLocation: "QA Review",
  currentLocation: "QA Review",
  bestTimeToContact: "Anytime",
  leadSource: "Website QA",
  projectInterestedIn: "The Oriana",
  project: "The Oriana",
  cityLocation: "Quezon City",
  location: "Quezon City",
  consent: true,
  honeypot: "",
  submittedAt: new Date().toISOString()
};

const tests = [
  {
    label: "Contact",
    route: "/api/leads",
    payload: {
      ...base,
      inquiryType: "Sales Inquiry",
      buyerType: "Still exploring",
      message: "[QA TEST - DO NOT TREAT AS A BUYER LEAD] Contact form delivery and premium email design review.",
      sourcePage: "/contact",
      sourceUrl: new URL("/contact", baseUrl).href,
      rawFields: {
        concernType: "Sales Inquiry",
        buyerType: "Still exploring",
        nationality: "Filipino",
        currentLocation: "QA Review",
        bestTimeToContact: "Anytime",
        leadSource: "Website QA"
      }
    }
  },
  {
    label: "Request Computation",
    route: "/api/request-computation",
    payload: {
      ...base,
      inquiryType: "Request Computation",
      unitType: "2 Bedroom",
      budgetRange: "PHP 6M - 10M",
      paymentPreference: "Bank financing",
      buyerType: "Property investor",
      timeline: "Within 3-6 months",
      message: "[QA TEST - DO NOT TREAT AS A BUYER LEAD] Computation form field and email layout review.",
      sourcePage: "/request-computation",
      sourceUrl: new URL("/request-computation?project=The%20Oriana", baseUrl).href,
      rawFields: {
        unitType: "2 Bedroom",
        budgetRange: "PHP 6M - 10M",
        paymentPreference: "Bank financing",
        buyerType: "Property investor",
        timeline: "Within 3-6 months",
        nationality: "Filipino",
        bestTimeToContact: "Anytime",
        leadSource: "Website QA"
      }
    }
  },
  {
    label: "Availability",
    route: "/api/leads",
    payload: {
      ...base,
      inquiryType: "Check Availability",
      unitType: "2 Bedroom",
      budgetRange: "PHP 6M - 10M",
      paymentPreference: "Bank financing",
      message: "[QA TEST - DO NOT TREAT AS A BUYER LEAD] Availability form field and email layout review.",
      sourcePage: "/availability",
      sourceUrl: new URL("/availability?project=The%20Oriana", baseUrl).href,
      rawFields: {
        unitType: "2 Bedroom",
        preferredSize: "Mid-floor sample",
        budgetRange: "PHP 6M - 10M",
        paymentOption: "Bank financing",
        urgency: "Within 3-6 months",
        nationality: "Filipino",
        bestTimeToContact: "Anytime",
        leadSource: "Website QA"
      }
    }
  },
  {
    label: "Book Viewing",
    route: "/api/leads",
    payload: {
      ...base,
      inquiryType: "Book a Site Viewing",
      message: "[QA TEST - DO NOT TREAT AS A BUYER LEAD] Viewing form schedule and email layout review.",
      sourcePage: "/book-viewing",
      sourceUrl: new URL("/book-viewing?project=The%20Oriana", baseUrl).href,
      rawFields: {
        viewingType: "Online consultation",
        preferredDate,
        preferredTime: "14:00",
        guests: "1",
        nationality: "Filipino",
        bestTimeToContact: "Anytime",
        leadSource: "Website QA"
      }
    }
  }
];

await verifyRequiredValidation();

if (mode === "check") {
  console.log(`Live email delivery was not triggered. Explicit send target: ${baseUrl.origin}.`);
  process.exit(0);
}

const delivered = [];
for (const test of tests) {
  const response = await fetch(new URL(test.route, baseUrl), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(test.payload)
  });
  const text = await response.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = null;
  }

  if (!response.ok || body?.ok !== true) {
    console.error(`${test.label} QA delivery failed: ${body?.code || response.status} - ${body?.message || "Unknown error"}`);
    process.exit(1);
  }

  delivered.push({
    form: test.label,
    route: test.route,
    referenceId: body.referenceId,
    deliveredTo: body.deliveredTo
  });
  console.log(`${test.label} QA email sent. Reference: ${body.referenceId}.`);
}

console.log(JSON.stringify({ ok: true, target: baseUrl.origin, delivered }, null, 2));

async function verifyRequiredValidation() {
  const cases = [
    { label: "Contact", handler: leadsHandler, body: { inquiryType: "Sales Inquiry" }, expected: ["fullName", "contactMethod", "consent"] },
    { label: "Request Computation", handler: computationHandler, body: {}, expected: ["fullName", "contactMethod", "consent"] },
    { label: "Availability", handler: leadsHandler, body: { inquiryType: "Check Availability" }, expected: ["fullName", "contactMethod", "project", "location", "consent"] },
    { label: "Book Viewing", handler: leadsHandler, body: { inquiryType: "Book a Site Viewing", rawFields: {} }, expected: ["fullName", "contactMethod", "project", "location", "preferredDate", "preferredTime", "consent"] }
  ];

  for (const test of cases) {
    const response = await runHandler(test.handler, { method: "POST", body: test.body });
    if (response.statusCode !== 400 || response.body?.ok !== false) {
      throw new Error(`${test.label} required-field QA did not return the expected 400 response.`);
    }
    for (const field of test.expected) {
      if (!response.body.errors?.[field]) throw new Error(`${test.label} required-field QA is missing ${field}.`);
    }
  }

  console.log("Required-field API validation passed for Contact, Request Computation, Availability, and Book Viewing.");
}

async function runHandler(handler, request) {
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
  await handler(request, response);
  return response;
}
