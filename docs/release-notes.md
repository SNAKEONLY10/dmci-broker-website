# Release Notes

## July 12, 2026 - Inclusive Buyer Form Polish

- Replaced sample-number-heavy phone placeholders with a concise Phone Number field and overseas country-code guidance.
- Grouped contact inquiries into buying, property services, existing buyer support, and other concerns.
- Separated preferred project location from the buyer's optional current city/country.
- Added inclusive nationality and buyer-profile choices for local, overseas, first-time, investor, and existing DMCI buyers.
- Replaced vague budget tiers with clear PHP ranges and aligned payment/timeline wording across forms.
- Added Philippine-time labels to contact windows for overseas buyers.
- Added contextual guidance for Viber, email, leasing, rent-to-own, and official Customer Care concerns.
- Enforced contact-channel matching in the browser and API: email needs an email address; Call, Viber, and SMS need a phone number.
- Added current city/country to broker email summaries when the buyer provides it.
- Removed mobile text truncation from form page introductions and added quiet section dividers for easier scanning.

## July 11, 2026 - Broker Inquiry Flow Alignment

- Added optional nationality, best contact time, and lead source fields without expanding the minimum submission requirements.
- Added buyer-relevant sales, resale, leasing, rent-to-own, reservation, computation, availability, and viewing categories.
- Added an Email and Mobile preference with matching frontend and API validation.
- Updated resale inquiry links to preselect the project and resale category.
- Added the new buyer context to HTML and plain-text broker email notifications.

## July 10, 2026 - Final Launch Hardening

### Improved

- Added a buyer-facing success panel after form submission with reference ID, next steps, direct Call/Viber/Email actions, and a Submit another inquiry action.
- Form submissions no longer reset immediately after a successful send, so buyers can read the confirmation.
- Updated preview fallback wording to avoid technical `localStorage` language in the buyer UI.
- Added a backend payload-size guard for lead endpoints.
- Added build diagnostics output for deployment freshness checks.
- Added a runtime smoke test script for pages and API validation.
- Added manual external-link click checklist to the generated external link audit.
- Added production email setup documentation.
- Added manual QA checklist for routes, forms, email, devices, accessibility, and buyer-safe content.
- Refreshed the production launch checklist with final domain, analytics, security, performance, and owner-confirmation gates.

### Email Readiness

- Email delivery stays server-side through `/api/leads` and `/api/request-computation`.
- Supported env vars are documented in `docs/email-production-setup.md`.
- Production must use a Resend-verified sender domain.
- Resend test sender remains limited to the verified Resend account email.
- No secret values are committed.

### QA Commands

Run before deployment:

```bash
npm run qa:production
```

Optional runtime smoke check:

```bash
npm run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app
```

Valid lead smoke tests are opt-in only:

```bash
DMCI_SMOKE_SEND_VALID=true npm run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app --include-valid
```

PowerShell:

```powershell
$env:DMCI_SMOKE_SEND_VALID = "true"
npm.cmd run smoke:runtime -- --base-url https://dmci-broker-website.vercel.app --include-valid
Remove-Item Env:\DMCI_SMOKE_SEND_VALID
```

### Remaining Manual Checks

- Confirm final Resend sender domain.
- Confirm production recipient inbox.
- Confirm the live site is serving the newest `/build-info.json`.
- Confirm Call and Viber links on a real phone.
- Confirm Google Drive and virtual tour permissions in incognito.
- Confirm final custom domain before changing `SITE_URL`.
