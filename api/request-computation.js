import leadsHandler from "./leads.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = parseBody(req.body);
    req.body = {
      ...body,
      inquiryType: body.inquiryType || "Request Computation"
    };
  }

  return leadsHandler(req, res);
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body !== "string") return body;

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}
