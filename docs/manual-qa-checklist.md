# Manual QA Checklist

## Lead Field Coverage

- Verify optional Nationality, Current City / Country, Best Time to Contact, and How Did You Find This Website fields where applicable.
- Verify Email and Mobile requires both contact details; Email requires email; Call, Viber, and SMS require a phone number.
- Verify the phone placeholder stays concise and overseas buyers are told to include their country code.
- Verify Philippine-time contact windows are clear to overseas buyers.
- Verify Existing Buyer / Customer Care guidance directs account, billing, turnover, warranty, and after-sales matters to official confirmation where needed.
- Verify resale cards open Contact with the project and Resale Inquiry preselected.
- Confirm broker emails show request-specific details plus any optional buyer context provided.

Use this checklist after `npm run qa:production` passes and after every production redeploy.

## Public Route Checks

Open each route directly, refresh, and click the main CTA:

- `/`
- `/projects`
- `/projects/the-oriana`
- `/projects/one-delta-terraces`
- `/projects/the-erin-heights`
- `/projects/cameron-residences`
- `/projects/the-valeron-tower`
- `/projects/allegra-garden-place`
- `/projects/prisma-residences`
- `/projects/sage-residences`
- `/projects/kai-garden-residences`
- `/projects/mulberry-place`
- `/projects/alder-residences`
- `/projects/the-aston-place`
- `/projects/the-camden-place`
- `/projects/the-atherton`
- `/projects/calathea-place`
- `/projects/sonora-garden-residences`
- `/projects/moncello-crest`
- `/projects/solmera-coast`
- `/locations`
- `/locations/quezon-city`
- `/availability`
- `/request-computation`
- `/book-viewing`
- `/buyers-guide`
- `/reservation-requirements`
- `/virtual-tours`
- `/promos`
- `/resale-units`
- `/about`
- `/contact`
- `/privacy-policy`
- `/disclaimer`
- An intentionally unknown URL, which must return the custom 404 page and `noindex,follow` metadata

`/showcase` must remain noindex and must not be linked from public navigation.

## Viewport Matrix

Check:

- 375px phone
- 390px iPhone width
- 430px Android width
- 760px tablet
- 1100px laptop/tablet landscape
- 1366px desktop
- 1920px large desktop

Look for:

- No horizontal overflow
- No sticky CTA overlap on forms
- Buttons remain tappable
- Headings do not collide with badges or images
- Project cards stay readable
- Tables show the swipe hint on mobile
- Footer links remain visible above sticky CTAs

## Forms

Run these on `/request-computation`, `/availability`, `/book-viewing`, and `/contact`:

- Submit empty form and confirm field errors are readable.
- Submit with missing consent and confirm no email is sent.
- Submit with phone only.
- Submit with email only.
- Submit with both phone and email.
- Submit selected project and matching city.
- Confirm Project Location is not confused with the buyer's optional Current City / Country.
- Change city after selecting a project and confirm the project resets or warns clearly.
- Book Viewing requires preferred date and time.
- Submit twice quickly and confirm double submission is blocked while sending.
- After success, confirm the buyer sees the reference ID and next steps.
- Click Submit another inquiry and confirm the form clears only after that action.

## Email Delivery

Manual inbox checks:

- Request Computation email includes computation fields, reference ID, buyer contact, project, source page, and disclaimer.
- Check Availability email includes availability fields only.
- Book Viewing email includes viewing type, date, time, guests, project/location, and message.
- Contact email does not show irrelevant "Not provided" computation rows.
- Reply-to uses the buyer email if the buyer supplied one.
- Sender uses a verified Resend domain for production.

## External Links

Click manually:

- Official DMCI and dmci-online links
- Google Maps direction links
- Click-to-load embedded Google Maps
- YouTube AVP click-to-load embeds
- Google Drive links in incognito to confirm access
- Virtual tour links
- `tel:` Call links on a real phone
- `mailto:` Email links on desktop and phone
- Viber links on a phone with Viber installed

Device-dependent links are not fully testable in desktop Chrome. Mark them passed only after real phone testing.

## Accessibility

Check:

- Mobile menu opens with the menu button.
- Escape closes mobile menu and returns focus to the menu button.
- Tab order inside the mobile menu is logical.
- Image lightbox opens from a gallery image.
- Escape closes the lightbox and returns focus to the image trigger.
- Lightbox close button has a clear accessible name.
- Form field errors are announced or connected with `aria-describedby` where practical.
- Consent checkbox is reachable by keyboard.
- Focus rings are visible.
- Gold text and footer text have enough contrast.
- Buttons and links have understandable names.

## SEO And Domain

Confirm:

- `SITE_URL` matches the final public domain.
- Canonical URLs use the final domain.
- OG/Twitter image URLs use the final domain.
- `/sitemap.xml` is current.
- `/robots.txt` allows public routes and keeps internal routes noindex/blocked as intended.
- Direct route refresh works on project and city pages.

## Buyer Trust And Legal Copy

Spot-check:

- No page says pricing is guaranteed.
- No page says availability is guaranteed.
- No page says promos are guaranteed.
- Turnover dates are presented as subject to confirmation.
- The site is positioned as broker-assisted, not official DMCI corporate.
- Reservation/payment copy tells buyers to confirm through authorized channels first.
- Privacy and consent copy matches the lead delivery setup.

## Final Owner Confirmation

Before launch, the owner must confirm:

- Final recipient inbox for leads.
- Final sender domain in Resend.
- Broker contact details.
- PRC license number.
- Final custom domain, if any.
- Whether analytics should be Vercel Analytics or Google Analytics.
