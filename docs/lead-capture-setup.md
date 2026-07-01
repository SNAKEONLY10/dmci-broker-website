# Lead Capture Setup

This site uses a secure serverless endpoint at `POST /api/leads`. The frontend never contains private API keys.

## Chosen Approach

The production-ready path is email delivery first, with an optional webhook for Google Sheets, CRM, or another lead system.

- Email: Resend API from the backend function.
- Google Sheets or CRM: secure webhook from the backend function.
- Both can be enabled at the same time.
- If no delivery provider is configured, the endpoint returns `ok:false`, `lead_delivery_not_configured`, and `previewOnly:true`; the UI falls back to local preview storage only.

## Required Environment Variables

Set these in Vercel Project Settings -> Environment Variables.

### Email Delivery

Required for email delivery:

```text
RESEND_API_KEY=...
LEAD_EMAIL_FROM=DMCI Leads <leads@your-verified-domain.com>
LEAD_EMAIL_TO=mrcorral@dmcihomes.com
```

Optional:

```text
LEAD_EMAIL_REPLY_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_SUBJECT_PREFIX=DMCI Broker Lead
```

`LEAD_EMAIL_FROM` must use a sender domain verified in Resend.

### Webhook Delivery

Use this for Google Sheets through Apps Script, a CRM webhook, Make, Zapier, or another secure lead endpoint.

```text
LEADS_WEBHOOK_URL=https://...
LEADS_WEBHOOK_SECRET=...
```

If `LEADS_WEBHOOK_SECRET` is set, the backend sends:

```text
Authorization: Bearer <LEADS_WEBHOOK_SECRET>
```

## Payload

The frontend posts this normalized lead payload:

```json
{
  "name": "Buyer Name",
  "phone": "0917...",
  "email": "buyer@example.com",
  "preferredContactMethod": "Viber",
  "projectInterestedIn": "The Erin Heights",
  "cityLocation": "Quezon City",
  "inquiryType": "computation",
  "message": "Please send latest computation.",
  "sourcePage": "/request-computation?project=The%20Erin%20Heights",
  "sourceUrl": "https://dmci-broker-website.vercel.app/request-computation?project=...",
  "submittedAt": "client timestamp",
  "consent": true,
  "honeypot": "",
  "rawFields": {}
}
```

The backend generates the final `referenceId` and server `submittedAt`.

## Validation

Both the frontend and backend validate:

- Required full name.
- Preferred contact method.
- At least one real contact channel: phone or email.
- Valid email format when email is provided.
- Consent checkbox required.
- Message limit: 1500 characters.
- Spam honeypot must be empty.

## Local Testing

Use Vercel dev for API testing because Vite dev alone does not run Vercel Functions:

```bash
npm run build
vercel dev
```

Then submit a form or call the endpoint directly:

```bash
curl -i http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test Buyer\",\"phone\":\"09171234567\",\"email\":\"buyer@example.com\",\"preferredContactMethod\":\"Viber\",\"projectInterestedIn\":\"The Erin Heights\",\"cityLocation\":\"Quezon City\",\"inquiryType\":\"computation\",\"message\":\"Testing lead capture.\",\"sourcePage\":\"/request-computation\",\"submittedAt\":\"2026-07-01T00:00:00.000Z\",\"consent\":true,\"honeypot\":\"\"}"
```

Expected without env vars:

```json
{
  "ok": false,
  "code": "lead_delivery_not_configured",
  "previewOnly": true
}
```

This response intentionally uses HTTP 200 to avoid noisy browser console errors during preview mode. The `ok:false` and `previewOnly:true` flags are what the UI uses to avoid fake delivery success.

Expected with valid email or webhook env vars:

```json
{
  "ok": true,
  "referenceId": "...",
  "deliveredTo": ["email"]
}
```

## Vercel Testing

After setting env vars:

1. Redeploy the project.
2. Open `/request-computation`.
3. Submit a test lead using a real test email/phone.
4. Check Vercel Function logs for `/api/leads`.
5. Confirm the email inbox or Google Sheet/CRM received the lead.
6. Confirm the browser success message says the inquiry was submitted.

Without env vars, the production UI must show:

```text
Preview mode: your inquiry was saved locally for testing. Email/CRM delivery is not connected yet.
```

## Fallback Behavior

If `/api/leads` is missing, unavailable, or reports `lead_delivery_not_configured`, the form saves to localStorage and shows a preview-only message.

If a provider is configured but delivery fails, the form does not show a fake success. It shows an error and tells the buyer to contact Luisa directly.

## Known Limitations

- No credentials are committed to the repo.
- Delivery remains preview/local only until Vercel env vars are configured.
- Google Sheets delivery requires a secure webhook or Apps Script endpoint owned by the broker/client.
- There is no admin dashboard yet.
- Spam protection is a basic honeypot only; add CAPTCHA or rate limiting later if spam starts.
