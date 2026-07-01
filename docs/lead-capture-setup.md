# Lead Capture Setup

This site uses a secure serverless endpoint at `POST /api/leads`. The frontend never contains private API keys.

## Chosen Approach

The production-ready path is email delivery first, with an optional webhook for Google Sheets, CRM, or another lead system.

- Email: Resend API from the backend function.
- Google Sheets or CRM: secure webhook from the backend function.
- Both can be enabled at the same time.
- If no delivery provider is configured, the endpoint returns `ok:false`, `delivery_not_configured`, and `previewOnly:true`; the UI falls back to local preview storage only.

## Required Environment Variables

Set these in Vercel Project Settings -> Environment Variables.

Never commit API keys or secrets to GitHub, docs, screenshots, code comments, or route inventories. Environment variables that are not prefixed with `VITE_` stay server-side for `/api/leads`; frontend code must never receive the Resend API key.

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
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Lead]
```

`LEAD_EMAIL_FROM` must use a sender domain verified in Resend. Do not use `mrcorral@dmcihomes.com` as the sender unless `dmcihomes.com` is verified in Resend and legally/technically allowed. Use `mrcorral@dmcihomes.com` as `LEAD_EMAIL_TO` and as fallback reply-to.

Safe sender examples after domain verification:

```text
LEAD_EMAIL_FROM=DMCI Broker Leads <leads@luisacorralproperties.com>
LEAD_EMAIL_FROM=DMCI Broker Leads <inquiries@luisacorralproperties.com>
```

If no verified sender domain exists yet, leave email delivery unconfigured. The website will show the preview/local fallback message and will not claim the lead was sent.

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

## Add Env Vars in Vercel Dashboard

1. Open the Vercel project.
2. Go to Settings -> Environment Variables.
3. Add each variable under Production. Add Preview/Development too only if you need test deployments or `vercel dev` to use the same delivery path.
4. Redeploy after changing env vars.
5. Submit a test lead and check both the inbox and Vercel Function logs.

## Add Env Vars with Vercel CLI

Use the CLI only with a rotated key that has not been pasted into chat or committed anywhere.

```bash
vercel env add RESEND_API_KEY production --sensitive
vercel env add LEAD_EMAIL_FROM production
vercel env add LEAD_EMAIL_TO production
vercel env add LEAD_EMAIL_REPLY_TO production
vercel env add LEAD_EMAIL_SUBJECT_PREFIX production
```

For local testing with Vercel Functions:

```bash
vercel env pull .env.local --yes
vercel dev
```

Do not commit `.env.local`.

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
  "code": "delivery_not_configured",
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

Expected delivery failure when Resend rejects the request:

```json
{
  "ok": false,
  "code": "lead_delivery_failed",
  "message": "Your inquiry could not be delivered right now. Please contact Luisa directly using the contact details on this page."
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

If `/api/leads` is missing, unavailable, or reports `delivery_not_configured`, the form saves to localStorage and shows a preview-only message.

The current frontend recognizes both `delivery_not_configured` and the older `lead_delivery_not_configured` code for compatibility.

If a provider is configured but delivery fails, the form does not show a fake success. It shows an error and tells the buyer to contact Luisa directly.

## Known Limitations

- No credentials are committed to the repo.
- Delivery remains preview/local only until Vercel env vars are configured.
- Google Sheets delivery requires a secure webhook or Apps Script endpoint owned by the broker/client.
- There is no admin dashboard yet.
- Spam protection is a basic honeypot only; add CAPTCHA or rate limiting later if spam starts.

## Final Launch Domain and Sender Plan

For final launch, use a custom website domain owned by the site owner, for example:

```text
luisacorralproperties.com
```

After the domain is verified in Resend, use a sender on that verified domain:

```text
LEAD_EMAIL_FROM=DMCI Broker Leads <leads@luisacorralproperties.com>
```

Production lead delivery should send to Luisa:

```text
LEAD_EMAIL_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_REPLY_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Lead]
```

Do not use `mrcorral@dmcihomes.com` as `LEAD_EMAIL_FROM` unless `dmcihomes.com` is verified in Resend and legally/technically allowed. The broker email should normally be the recipient and fallback reply-to, while the sender should be a verified domain controlled by the site owner.

## Troubleshooting Resend

- `403` or domain errors: verify the sender domain in Resend and confirm `LEAD_EMAIL_FROM` uses that verified domain.
- No email arrived: check spam, Resend dashboard logs, and Vercel Function logs for `/api/leads`.
- Reply-to looks wrong: confirm the buyer supplied an email; otherwise the endpoint falls back to `LEAD_EMAIL_REPLY_TO`.
- Production still shows preview mode: confirm `RESEND_API_KEY`, `LEAD_EMAIL_FROM`, and `LEAD_EMAIL_TO` exist in the Production environment and redeploy.
- Resend API key was pasted into chat or exposed: revoke it in Resend, generate a new key, update Vercel env vars, and redeploy.

## Rotate API Keys

1. Create a new Resend API key.
2. Add the new key to Vercel as `RESEND_API_KEY`.
3. Redeploy and submit a test lead.
4. Confirm the test email arrives.
5. Revoke the old key in Resend.
6. Never paste the new key into chat, docs, screenshots, or GitHub.
