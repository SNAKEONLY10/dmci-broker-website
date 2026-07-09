# DMCI Broker Website Production Launch Checklist

This checklist is for the personal DMCI broker / buyer-assistance website for Maria Luisa Corral. It is not an official DMCI corporate site. Project details, pricing, promos, availability, turnover, payment terms, and unit details must stay subject to confirmation.

## What Works Without Vercel Env Vars

- Static public routes and SEO fallbacks can build and deploy.
- Project directory and project detail pages can be browsed.
- Forms render and validate required fields in the browser.
- On localhost or local preview only, form submissions can be saved to localStorage for testing.

## What Requires Vercel Env Vars

Real lead delivery requires at least:

```text
RESEND_API_KEY
LEAD_EMAIL_TO
```

Optional production variables:

```text
LEAD_EMAIL_FROM
LEAD_EMAIL_REPLY_TO
LEAD_EMAIL_SUBJECT_PREFIX
LEADS_WEBHOOK_URL
LEADS_WEBHOOK_SECRET
```

If these are missing on the production domain, the form must show a delivery configuration error. It must not show a fake "sent to broker" success state.

## What Requires a Verified Sender Domain

For real production email sending, Resend needs a verified sender domain controlled by the site owner.

Do not use ordinary personal mailbox domains such as Gmail, Yahoo, Outlook, or iCloud as `LEAD_EMAIL_FROM`.

Do not use `mrcorral@dmcihomes.com` as `LEAD_EMAIL_FROM` unless `dmcihomes.com` is verified in Resend and legally/technically approved.

Recommended production pattern:

```text
LEAD_EMAIL_FROM=DMCI Broker Leads <leads@verified-domain.com>
LEAD_EMAIL_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_REPLY_TO=mrcorral@dmcihomes.com
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Lead]
```

Temporary testing with Resend may use:

```text
LEAD_EMAIL_FROM=DMCI Leads <onboarding@resend.dev>
```

But Resend test mode can only send to the verified Resend account email.

## After Every Production Redeploy

1. Open `/`, `/projects`, one project detail page, `/request-computation`, `/availability`, `/book-viewing`, and `/contact`.
2. Confirm direct refresh works on each route.
3. Confirm `/sitemap.xml` and `/robots.txt` load.
4. Submit an invalid form and confirm field errors are readable.
5. Submit a valid test lead and confirm the UI success state only appears after backend delivery succeeds.
6. Check Vercel Function logs for `/api/leads` and `/api/request-computation`.
7. Confirm the recipient inbox or webhook received the lead.
8. Check mobile widths around 360px, 390px, and 414px for no horizontal overflow.
9. Check tablet and desktop layouts for readable project cards, forms, footer, and sticky CTAs.

## Vercel Logs To Check

- Function logs for `/api/leads`.
- Function logs for `/api/request-computation`.
- Deployment build logs for route/asset failures.
- Resend dashboard logs for rejected sender, unverified domain, or blocked test recipient errors.

## Known Launch Blockers Outside Code

- A final custom domain has not been connected yet; canonical URLs currently use `https://dmci-broker-website.vercel.app`.
- Final production email sender needs a verified sender domain in Resend.
- Lead delivery must be tested after production env vars are added or rotated.
- If a Resend API key was ever pasted into chat or screenshots, rotate it before launch.
