# Luisa Corral DMCI Homes Broker Website

Premium buyer assistance website concept for Luisa Corral, Sales Director of DMCI Homes, Licensed Real Estate Broker, and entrepreneur.

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

## Available Routes

- `/` - Homepage
- `/projects` - Project directory
- `/projects/:slug` - Project detail showcase page
- `/locations` - Browse by location
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
- `/showcase` - Client presentation/showcase page

## Demo Limitations

- Placeholder images only
- Placeholder contact details
- Sample project data only
- No real-time availability
- No backend or email notifications yet
- Forms save demo submissions to browser `localStorage` only
- Final pricing, availability, promos, payment terms, unit details, and turnover schedules must be confirmed by Luisa or official DMCI channels

## Asset Structure Plan

Approved project assets can be added later using this structure:

```text
public/assets/projects/[project-slug]/hero.jpg
public/assets/projects/[project-slug]/thumbnail.jpg
public/assets/projects/[project-slug]/gallery-1.jpg
public/assets/projects/[project-slug]/gallery-2.jpg
public/assets/projects/[project-slug]/gallery-3.jpg
public/assets/projects/[project-slug]/master-plan.jpg
public/assets/projects/[project-slug]/site-progress.jpg
public/assets/projects/[project-slug]/brochure.pdf
```

Images should be compressed and web-optimized before final use. Large videos should not be committed directly to the repository; use thumbnails with external links or hosted video.

## Future Phase

Backend/email integration, CRM routing, official asset replacement, Vercel preview deployment, domain connection, analytics, and optional admin lead dashboard are future phases after client approval.
