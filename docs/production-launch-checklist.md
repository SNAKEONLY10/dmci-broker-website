# DMCI Broker Website Production Launch Checklist

This checklist is for the personal DMCI broker / buyer-assistance website for Maria Luisa Corral. It is not an official DMCI corporate website. Pricing, promos, availability, turnover dates, payment terms, and unit details must remain subject to final confirmation.

Last hardening update: July 10, 2026.

## Current Production-Ready Foundation

- Approved 18-project directory is preserved.
- Static routes, SEO fallbacks, sitemap, robots, and route inventory are covered by QA commands.
- Project images are validated by the image QA script.
- Internal links are validated by the internal link QA script.
- External links are categorized by the external-link audit.
- YouTube and Google Maps embeds are click-to-load.
- Forms have frontend and backend validation.
- Honeypot spam protection is enabled.
- Mobile menu Escape/focus return and image lightbox focus return are implemented.
- Lead email delivery uses backend-only environment variables.

## Required Commands Before Deployment

```bash
npm run build
npm run qa:routes
npm run qa:images
npm run qa:links
npm run qa:external-links
npm run inventory:routes
```

Full local gate:

```bash
npm run qa:production
```

Optional runtime smoke check after a local preview or production deploy:

```bash
npm run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app
```

By default, runtime smoke tests do not send valid lead emails. To intentionally send valid test leads:

```bash
DMCI_SMOKE_SEND_VALID=true npm run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app --include-valid
```

Use the valid-email mode only when the recipient inbox is ready for test messages. In this mode, the smoke script expects backend `ok:true` delivery and fails if email delivery is not configured.

PowerShell equivalent:

```powershell
$env:DMCI_SMOKE_SEND_VALID = "true"
npm.cmd run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app --include-valid
Remove-Item Env:\DMCI_SMOKE_SEND_VALID
```

## Production Email Gate

Read `docs/email-production-setup.md` before launch.

Production email requires:

```text
RESEND_API_KEY
LEAD_EMAIL_TO
LEAD_EMAIL_FROM or RESEND_FROM
LEAD_EMAIL_REPLY_TO
LEAD_EMAIL_SUBJECT_PREFIX
```

The active code requires `RESEND_API_KEY` and `LEAD_EMAIL_TO` for email delivery. `LEAD_EMAIL_FROM` falls back to `RESEND_FROM`, then to Resend's test sender. Production must still use a verified sender domain.

Do not use personal Gmail/Yahoo/Outlook/iCloud addresses as `LEAD_EMAIL_FROM`.

Do not use `mrcorral@dmcihomes.com` as `LEAD_EMAIL_FROM` unless `dmcihomes.com` is verified in Resend and legally/technically approved.

## Build Freshness Marker

Each build writes:

- `/build-info.json`
- `/launch-diagnostics.txt`

These files include app version, commit SHA, branch, build date, QA date, and dirty flag. They are not public navigation links. Use them only to confirm the live deployment is serving the newest build.

## Runtime/API Smoke Coverage

Documented and scripted checks:

- `GET /`
- `GET /projects`
- `GET /projects/the-oriana`
- `GET /request-computation`
- `POST /api/leads` invalid payload
- `POST /api/leads` honeypot payload
- `POST /api/leads` valid payload only with explicit opt-in
- `POST /api/request-computation` invalid payload
- `POST /api/request-computation` valid payload only with explicit opt-in

## Manual QA Gate

Run `docs/manual-qa-checklist.md` after deployment. Required manual categories:

- Route navigation and direct refresh
- Mobile/tablet/desktop viewport checks
- Form validation and success state checks
- Email inbox delivery checks
- Official DMCI links
- Google Maps direction links and map embeds
- YouTube AVP links
- Google Drive and virtual tour links
- Phone, mailto, and Viber links on real devices
- Accessibility keyboard flow
- Buyer-safe legal copy

## SEO And Domain Gate

Current canonical domain:

```text
https://dmci-broker-website.vercel.app
```

If a custom domain is launched, update:

- `SITE_URL`
- canonical URLs
- OG URLs
- Twitter image URLs
- sitemap
- robots
- `index.html` static fallback
- route inventory docs
- email source-page expectations if needed

`/showcase` must remain noindex/internal and not publicly linked.

## Analytics Readiness

Recommended launch-safe analytics:

- Vercel Analytics for page views and Web Vitals, or Google Analytics if the owner prefers.
- Track only non-sensitive events such as CTA clicks, project detail views, form submit success/failure, and availability/computation/viewing CTA clicks.
- Do not send names, phone numbers, emails, messages, budget notes, or reference IDs to analytics events.

## Security And Abuse Readiness

Implemented:

- Backend validation for required fields.
- Email format validation.
- Consent requirement.
- Honeypot spam protection.
- Payload size guard.
- No frontend API keys.
- No raw stack traces in buyer-facing messages.
- Lead email HTML escapes buyer-provided values.

Recommended if traffic or spam increases:

- Add IP/rate limiting at Vercel Firewall or another edge layer.
- Add Turnstile or reCAPTCHA only if spam becomes real.
- Add server log monitoring for repeated failed submissions.
- Add webhook signing verification if a CRM/Sheets webhook is enabled.

## Performance Gate

Before launch, confirm:

- Project hero images are compressed and have WebP variants.
- Repeated gallery images lazy-load.
- YouTube and Google Maps stay click-to-load on mobile.
- Fonts are limited to the current project set.
- Animations respect `prefers-reduced-motion`.
- No layout shift from project cards, forms, or image galleries.

## Remaining Owner Confirmations

High importance:

- Final production recipient inbox.
- Verified Resend sender domain.
- Final custom domain decision.
- Final broker contact details and license.

Medium importance:

- Analytics provider choice.
- Whether webhook/Google Sheets backup is needed.
- Real phone test for Call and Viber links.

Low importance:

- Additional custom OG image polish after final domain.
- Future admin dashboard for leads.
