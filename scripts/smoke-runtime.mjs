const args = parseArgs(process.argv.slice(2));

const baseUrl = normalizeBaseUrl(args.get("--base-url") || process.env.SMOKE_BASE_URL || "http://127.0.0.1:4173");
const includeValid = args.has("--include-valid") && process.env.DMCI_SMOKE_SEND_VALID === "true";
const failures = [];

const getRoutes = [
  "/",
  "/projects",
  "/projects/the-oriana",
  "/request-computation"
];

const invalidPayload = {
  name: "",
  phone: "",
  email: "",
  preferredContactMethod: "",
  inquiryType: "",
  consent: false,
  honeypot: ""
};

const safeHoneypotPayload = {
  name: "Bot Smoke Test",
  phone: "09170000000",
  preferredContactMethod: "Email",
  inquiryType: "General Inquiry",
  consent: true,
  honeypot: "filled-by-bot"
};

const validLeadPayload = {
  name: "Runtime Smoke Test",
  phone: "09170000000",
  email: "qa@example.com",
  preferredContactMethod: "Email",
  projectInterestedIn: "The Oriana",
  cityLocation: "Quezon City",
  inquiryType: "General Inquiry",
  message: "Runtime smoke test. Do not treat this as a buyer inquiry.",
  sourcePage: "/smoke-runtime",
  sourceUrl: `${baseUrl}/smoke-runtime`,
  consent: true,
  honeypot: ""
};

for (const route of getRoutes) {
  await checkGet(route);
}

await checkPost("/api/leads", invalidPayload, { expectedStatus: 400, label: "invalid lead payload" });
await checkPost("/api/request-computation", invalidPayload, { expectedStatus: 400, label: "invalid computation payload" });
await checkPost("/api/leads", safeHoneypotPayload, { expectedStatus: 200, label: "honeypot lead payload" });

if (includeValid) {
  await checkPost("/api/leads", validLeadPayload, { expectedStatus: 200, label: "valid lead payload", expectOk: true });
  await checkPost("/api/request-computation", { ...validLeadPayload, inquiryType: "Request Computation" }, { expectedStatus: 200, label: "valid computation payload", expectOk: true });
} else {
  console.log("Skipped valid lead POSTs. Set DMCI_SMOKE_SEND_VALID=true and pass --include-valid to send test emails intentionally.");
}

if (failures.length) {
  console.error("Runtime smoke QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Runtime smoke QA passed for ${baseUrl}.`);

async function checkGet(route) {
  const url = new URL(route, baseUrl);
  try {
    const response = await fetch(url, { redirect: "manual" });
    if (response.status !== 200) {
      failures.push(`GET ${route} returned ${response.status}, expected 200.`);
      return;
    }
    console.log(`GET ${route}: 200`);
  } catch (error) {
    failures.push(`GET ${route} failed: ${error.message}`);
  }
}

async function checkPost(route, payload, options) {
  const url = new URL(route, baseUrl);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await safeJson(response);

    if (response.status !== options.expectedStatus) {
      failures.push(`POST ${route} (${options.label}) returned ${response.status}, expected ${options.expectedStatus}.`);
      return;
    }

    if (options.expectedStatus === 400 && data?.ok !== false) {
      failures.push(`POST ${route} (${options.label}) did not return ok:false for invalid payload.`);
      return;
    }

    if (options.expectOk && data?.ok !== true) {
      failures.push(`POST ${route} (${options.label}) returned ${data?.code || "ok:false"}, expected ok:true delivery.`);
      return;
    }

    console.log(`POST ${route} (${options.label}): ${response.status}${data?.code ? ` ${data.code}` : ""}`);
  } catch (error) {
    failures.push(`POST ${route} (${options.label}) failed: ${error.message}`);
  }
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function normalizeBaseUrl(value) {
  return String(value || "").replace(/\/+$/g, "");
}

function parseArgs(argv) {
  const parsed = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    if (arg.includes("=")) {
      const [key, ...rest] = arg.split("=");
      parsed.set(key, rest.join("=") || "true");
      continue;
    }
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      parsed.set(arg, next);
      index += 1;
    } else {
      parsed.set(arg, "true");
    }
  }
  return parsed;
}
