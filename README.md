# Maria Luisa Corral DMCI Homes Broker Website

Premium buyer assistance website concept for Maria Luisa Corral, Sales Director of DMCI Homes and Real Estate Broker PRC License No. 0003253.

This project is a personal broker website inspired by professional DMCI Homes-style property discovery flows. It is not an official DMCI corporate clone. The site focuses on project browsing, buyer education, computation requests, availability checks, site viewing booking, and direct broker contact.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

Build check:

```bash
npm run build
```

Route/SEO validation:

```bash
npm run qa:routes
```

Route inventory:

```bash
npm run inventory:routes
```

## Available Routes

- `/` - Homepage
- `/projects` - Project directory
- `/projects/:slug` - Project detail showcase page
- `/locations` - Browse by location
- `/locations/:locationSlug` - Crawlable city/location project page
- `/availability` - Check availability form
- `/request-computation` - Request latest computation form
- `/book-viewing` - Book a site viewing form
- `/buyers-guide` - Buyer's guide
- `/reservation-requirements` - Reservation requirements
- `/virtual-tours` - Virtual tours section
- `/promos` - Promos and updates
- `/resale-units` - Resale unit inquiries
- `/about` - About Luisa
- `/contact` - Contact page
- `/privacy-policy` - Privacy policy and lead data handling notes
- `/disclaimer` - Buyer safety disclaimer
- `/showcase` - Client presentation/showcase page

The production build generates static HTML fallbacks for public routes, `sitemap.xml`, and `robots.txt` after Vite builds.

## Demo Limitations

- Approved project images are used where available; missing official visuals should remain graceful request states until assets are confirmed
- Project data is buyer guidance only and must be confirmed before presentation or reservation
- No real-time availability
- The Request Latest Computation form can send a test email notification when server-side email env vars are configured
- Forms still save demo submissions to browser `localStorage` for testing and fallback behavior
- Final pricing, availability, promos, payment terms, unit details, and turnover schedules must be confirmed by Luisa or official DMCI channels

## Email Notification Test Setup

The `/request-computation` form posts to the secure Vercel serverless function at `/api/request-computation`. The Resend API key must stay server-side only.

Required Vercel environment variables:

```text
RESEND_API_KEY=your_resend_api_key
LEAD_EMAIL_TO=howardxxcelestial69@gmail.com
LEAD_EMAIL_FROM=DMCI Leads <leads@your-verified-dmci-domain.com>
```

Optional:

```text
LEAD_EMAIL_REPLY_TO=howardxxcelestial69@gmail.com
LEAD_EMAIL_SUBJECT_PREFIX=[DMCI Broker Test Lead]
```

For immediate Resend test mode only, this sender can be used:

```text
LEAD_EMAIL_FROM=DMCI Leads <onboarding@resend.dev>
```

Resend only allows `onboarding@resend.dev` to send to the verified account owner email. If the account owner is not Howard's Gmail, verify a DMCI-owned sender domain in Resend and use that verified sender instead.

Setup steps:

1. Add `RESEND_API_KEY` in Vercel Project Settings -> Environment Variables.
2. Add `LEAD_EMAIL_TO` as Howard's Gmail for testing.
3. Add `LEAD_EMAIL_FROM` using either Resend's allowed test sender or a verified DMCI sender domain.
4. Deploy the site.
5. Open `/request-computation`.
6. Submit a test request.
7. Check Howard's Gmail inbox and spam folder for the test email.
8. After approval, change the API recipient to Luisa's official email.

Never expose `RESEND_API_KEY` in frontend code, public docs, screenshots, route inventory, comments, or browser bundles.

## Asset Structure Plan

Confirmed Google Drive folder:

Marketing Materials:
https://drive.google.com/drive/folders/19CWq_YMieSFTOx9dpPIsE-dN75yUxoPr

This folder contains project/marketing folders such as `RFO Projects`, `KLH`, `ODT`, `MCC`, `ANH`, `SLC`, `MLP 2`, `Rent-to-own`, and more.

Approved project assets are imported through an optimized source-to-web workflow. Put selected raw images here first:

```text
public/assets/project-source/[project-slug]/hero.jpg
public/assets/project-source/[project-slug]/thumbnail.jpg
public/assets/project-source/[project-slug]/gallery-1.jpg
public/assets/project-source/[project-slug]/gallery-2.jpg
public/assets/project-source/[project-slug]/gallery-3.jpg
public/assets/project-source/[project-slug]/master-plan.jpg
public/assets/project-source/[project-slug]/site-progress.jpg
```

Then run:

```bash
npm run assets:optimize
```

The script outputs responsive, web-optimized JPG/WebP assets here:

```text
public/assets/projects/[project-slug]/hero.jpg
public/assets/projects/[project-slug]/hero-640.webp
public/assets/projects/[project-slug]/hero-960.webp
public/assets/projects/[project-slug]/hero-1440.webp
public/assets/projects/[project-slug]/thumbnail.jpg
public/assets/projects/[project-slug]/thumbnail-480.webp
public/assets/projects/[project-slug]/thumbnail-768.webp
public/assets/projects/[project-slug]/thumbnail-960.webp
public/assets/projects/[project-slug]/gallery-1.jpg
public/assets/projects/[project-slug]/gallery-2.jpg
public/assets/projects/[project-slug]/gallery-3.jpg
public/assets/projects/[project-slug]/master-plan.jpg
public/assets/projects/[project-slug]/site-progress.jpg
public/assets/projects/[project-slug]/brochure.pdf
```

Raw files under `public/assets/project-source/` are ignored by git. Commit only the optimized files under `public/assets/projects/`. Large videos should not be committed directly to the repository; use thumbnails with external links or hosted video.

Asset mapping rules:

- Use only client-approved assets from Google Drive.
- Compress images before committing by running `npm run assets:optimize`.
- Do not commit huge videos.
- Use thumbnails and external links for large videos or 360 tours.
- Rename assets consistently by project slug.
- If an asset is missing, use the graceful placeholder UI.
- Do not use random Google images.

See `docs/google-drive-asset-inventory.md` for the current Drive inventory notes.

## Pricing and Availability Disclaimer

Prices, availability, promos, payment terms, unit details, and turnover schedules are subject to change and final confirmation. This website is maintained for buyer assistance and inquiry purposes.

## Future Phase

Backend/email integration, CRM routing, official asset replacement, Vercel preview deployment, domain connection, analytics, and optional admin lead dashboard are future phases after client approval.
