# Email Production Setup

Lead notifications include the reference ID, inquiry category, project, town/city, buyer contact details, optional nationality, preferred contact method, best contact time, optional lead source, request-specific details, message, source route, consent, and buyer-safe confirmation disclaimer. When a buyer provides an email address, it remains the Reply-To address.

This site sends lead notifications from Vercel serverless functions. The frontend must never contain API keys or private sender settings.

## Active Endpoints

- `POST /api/leads`
- `POST /api/request-computation`

`/api/request-computation` forwards to the same delivery logic as `/api/leads` and defaults the inquiry type to `Request Computation`.

## Environment Variables Used By The App

Required for email delivery:

```text
RESEND_API_KEY
LEAD_EMAIL_TO
```

Sender and reply configuration:

```text
LEAD_EMAIL_FROM
RESEND_FROM
LEAD_EMAIL_REPLY_TO
LEAD_REPLY_TO_EMAIL
LEAD_EMAIL_SUBJECT_PREFIX
```

Optional webhook delivery:

```text
LEADS_WEBHOOK_URL
LEADS_WEBHOOK_SECRET
```

Accepted aliases:

- `LEAD_EMAIL_FROM` is preferred. `RESEND_FROM` is accepted as a fallback.
- `LEAD_EMAIL_TO` is preferred. `LEAD_TO_EMAIL` is accepted as a fallback.
- `LEAD_EMAIL_REPLY_TO` is preferred. `LEAD_REPLY_TO_EMAIL` is accepted as a fallback.

## Sender Rules

For production, `LEAD_EMAIL_FROM` must use a sender address on a domain verified in Resend.

Good production pattern:

```text
LEAD_EMAIL_FROM=DMCI Broker Leads <leads@verified-site-domain.com>
LEAD_EMAIL_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_REPLY_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Lead]
```

Do not use a Gmail, Yahoo, Outlook, iCloud, or other personal mailbox as `LEAD_EMAIL_FROM`. Resend will reject unverified senders.

Do not use `mrcorral@dmcihomes.com` as `LEAD_EMAIL_FROM` unless `dmcihomes.com` is verified in Resend and legally/technically approved. Use it as the recipient and fallback reply-to instead.

## Resend Test Mode

Without a custom verified domain, Resend's test sender can be used only for the verified account email:

```text
LEAD_EMAIL_FROM=DMCI Leads <onboarding@resend.dev>
LEAD_EMAIL_TO=<verified Resend account email>
LEAD_EMAIL_REPLY_TO=<verified Resend account email>
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Test Lead]
```

If `LEAD_EMAIL_TO` is not the verified Resend account email, Resend returns a test-sender restriction error. That is expected behavior, not a website bug.

## Safe Fallback Behavior

If `RESEND_API_KEY` or `LEAD_EMAIL_TO` is missing, the API returns:

```json
{
  "ok": false,
  "code": "delivery_not_configured",
  "previewOnly": true
}
```

On localhost, the UI can show a preview/test warning. On production, the UI must not say the inquiry was sent. It should show an honest delivery error and direct Call, Viber, and Email options.

If Resend is configured but rejects the email, the API returns:

```json
{
  "ok": false,
  "code": "lead_delivery_failed"
}
```

The user-facing copy must not expose the API key, raw stack traces, or private logs.

## Broker Email Contents

The broker/admin email should include:

- Reference ID
- Inquiry type
- Buyer full name
- Phone / Viber
- Email
- Interested project
- City/location
- Unit type
- Budget range
- Payment preference
- Buyer type or purpose when provided
- Timeline
- Viewing type, preferred date, preferred time, and guest count for viewing requests
- Buyer message
- Source page or route
- Safe pricing/availability disclaimer
- Quick action links for phone, email, and source page when available

Reply-to behavior:

- If the buyer provides an email, Resend uses the buyer email as `reply_to`.
- If the buyer does not provide an email, Resend falls back to `LEAD_EMAIL_REPLY_TO`.
- The buyer email is never used as `from`.

## Visual Email Preview

Generate a safe sample of the real broker email without contacting Resend:

```bash
npm run build
npm run email:preview
```

Open `dist/email-preview.html` and inspect it at desktop and mobile widths. The preview uses sample buyer details and a mocked delivery response; it does not send an email.

## Vercel Dashboard Setup

1. Open the DMCI Vercel project.
2. Go to Settings -> Environment Variables.
3. Add each variable under Production.
4. Add Preview/Development variables only if preview deployments should send test email.
5. Redeploy after changing env vars.
6. Submit a test inquiry and confirm the inbox plus Vercel Function logs.

## Vercel CLI Setup

Only use the CLI after authenticating into the correct Vercel team/project.

```bash
vercel env add RESEND_API_KEY production
vercel env add LEAD_EMAIL_FROM production
vercel env add LEAD_EMAIL_TO production
vercel env add LEAD_EMAIL_REPLY_TO production
vercel env add LEAD_EMAIL_SUBJECT_PREFIX production
vercel --prod
```

Never paste secret values into GitHub, docs, screenshots, route inventory, comments, or frontend code.

## Manual Email Test Checklist

Run this after every sender/env change:

| Form | Test case | Expected result |
| --- | --- | --- |
| Request Computation | Valid project, phone, email, consent | Broker email arrives with computation fields and reference ID |
| Check Availability | Valid project or location, preferred contact, consent | Broker email arrives with availability fields |
| Book Viewing | Project or location, preferred date/time, guest count, consent | Broker email arrives with viewing schedule fields only |
| Contact | General inquiry with phone or email and consent | Broker email arrives without irrelevant computation rows |
| Any form | Missing consent | Field error, no email |
| Any form | Missing phone and email | Field error, no email |
| Any form | Honeypot filled | Neutral response, no email |

## Troubleshooting

- Test sender can only send to verified account email: use that email as `LEAD_EMAIL_TO` or verify a custom domain.
- Sender domain not verified: verify the sender domain in Resend, then set `LEAD_EMAIL_FROM` to that domain.
- Production still uses old settings: redeploy after env changes.
- Email not in inbox: check spam, Resend logs, and Vercel Function logs.
- API key was exposed: rotate the key, update Vercel, redeploy, then revoke the old key.

## Production Launch Requirement

Before final public launch, confirm:

- A verified sender domain exists in Resend.
- Production env vars are set on the correct DMCI Vercel project.
- A real test email reaches the intended recipient.
- The form success panel appears only after backend delivery succeeds.
- No secret values appear in the repository.
