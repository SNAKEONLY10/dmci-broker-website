# DMCI Project Asset and Content Audit

Audit date: 2026-07-01

Scope: only the 18 approved priority projects are active in `src/data/projects.js`. No random Google images were added. All active priority projects now have official/client/DMCI Online image coverage for the customer-facing project pages.

Asset convention checked:

- `public/assets/projects/[slug]/hero.jpg`
- `public/assets/projects/[slug]/thumbnail.jpg`
- `public/assets/projects/[slug]/gallery-1.jpg`
- `public/assets/projects/[slug]/gallery-2.jpg`
- `public/assets/projects/[slug]/gallery-3.jpg`
- `public/assets/projects/[slug]/master-plan.jpg`
- `public/assets/projects/[slug]/site-progress.jpg`
- `public/assets/projects/[slug]/brochure.pdf`

## Summary

- Active approved projects: 18
- Complete core image sets: 18
- Partial asset sets: 0
- Official assets needed: 0
- Brochures currently present: 0
- Content status: 18 projects now have rich customer-ready reference pages with official/source media, maps, and buyer-safe computation references.
- The Oriana content status: full customer-ready detail added, no missing unit rows after QA.
- One Delta Terraces content status: full customer-ready detail added, no missing unit rows after QA.
- Mulberry Place 2 content status: full customer-ready detail added from supplied Phase 2 reference, with complete unit rows and payment details.
- Alder Residences content status: full customer-ready detail added from supplied reference, with available 2BR rows, sold-out 3BR/4BR waitlist details, and payment details.
- Map status: Google Maps iframes enabled on rich project detail pages when an official/source map embed is available; static location map fallback remains available.
- Video status: YouTube embeds enabled for rich pages with approved/source AVP iframe references; Moncello Crest and Solmera Coast include official YouTube AVP embeds plus external virtual community tour links.

`assetStatus` rules used:

- `complete`: hero, thumbnail, and at least 3 gallery images exist.
- `partial-assets`: only some image files exist.
- `official-assets-needed`: most image files are missing.

## Approved Project Checklist

| # | Project | Slug | Hero | Thumbnail | Gallery | Master Plan | Site Progress | Brochure | Asset Status | Content Status | Source URL |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | The Oriana | `the-oriana` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive media links | `complete` | `full customer-ready detail added, Drive extras optimized` | [DMCI Homes](https://www.dmcihomes.com/the-oriana) |
| 2 | One Delta Terraces | `one-delta-terraces` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive/360 media links | `complete` | `full customer-ready detail added, Drive extras optimized` | [DMCI Online](https://www.dmci-online.com/one-delta-terraces-dmci-quezon-city/) |
| 3 | The Erin Heights | `the-erin-heights` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive media links | `complete` | `full customer-ready detail added, Drive extras optimized` | [DMCI Homes](https://www.dmcihomes.com/the-erin-heights) |
| 4 | Cameron Residences | `cameron-residences` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube media link | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/cameron-residences-quezon-city/) |
| 5 | The Valeron Tower | `the-valeron-tower` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive/360 media links | `complete` | `full customer-ready detail added, Drive/official assets optimized` | [DMCI Online](https://www.dmci-online.com/valeron-tower-dmci-pasig-city/) |
| 6 | Allegra Garden Place | `allegra-garden-place` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive/360 media links | `complete` | `full customer-ready detail added, Drive/official assets optimized` | [DMCI Online](https://www.dmci-online.com/allegra-garden-place-pasig/) |
| 7 | Prisma Residences | `prisma-residences` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive/360 media links | `complete` | `full customer-ready detail added, Drive/official assets optimized` | [DMCI Online](https://www.dmci-online.com/prisma-residences-dmci-pasig/) |
| 8 | Sage Residences | `sage-residences` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/Drive/360 media links | `complete` | `full customer-ready detail added, Drive/official assets optimized` | [DMCI Online](https://www.dmci-online.com/sage-residences-mandaluyong/) |
| 9 | Kai Garden Residences | `kai-garden-residences` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube media link | `complete` | `full customer-ready detail added, Drive/official assets optimized` | [DMCI Online](https://www.dmci-online.com/kai-garden-residences-mandaluyong/) |
| 10 | Mulberry Place 2 | `mulberry-place` | Present via `mulberry-place-2` | Present via `mulberry-place-2` | 3/3 present via `mulberry-place-2` + floorplans | Present via `mulberry-place-2` | Present via `mulberry-place-2` | Embedded Google map + YouTube/360 media links | `complete` | `full customer-ready detail added; no missing unit rows; Google Maps iframe; YouTube AVP embed; virtual tour links` | [DMCI Online](https://www.dmci-online.com/mulberry-place-dmci-taguig/) |
| 11 | Alder Residences | `alder-residences` | Present | Present | 3/3 present + floorplans | Present | Present | Embedded Google map + YouTube/360 media links | `complete` | `full customer-ready detail added; 2BR rows complete; 3BR/4BR waitlist details; Google Maps iframe; YouTube AVP embed; virtual tour links` | [DMCI Online](https://www.dmci-online.com/alder-residences-dmci-taguig/) |
| 12 | The Aston Place | `the-aston-place` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + approved visual media note | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/aston-place-dmci-pasay/) |
| 13 | The Camden Place | `the-camden-place` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube media link | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/the-camden-place-manila/) |
| 14 | The Atherton | `the-atherton` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + official 360 guide/source links | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/atherton-dmci-sucat-paranaque/) |
| 15 | Calathea Place | `calathea-place` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + virtual tour link | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/calathea-place-paranaque-city/) |
| 16 | Sonora Garden Residences | `sonora-garden-residences` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/virtual tour media links | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/sonora-garden-residences/) |
| 17 | Moncello Crest | `moncello-crest` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/virtual tour media links | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/moncello-crest-tuba-benguet-baguio/) |
| 18 | Solmera Coast | `solmera-coast` | Present | Present | 3/3 present + extras | Present | Present | Embedded Google map + YouTube/virtual tour media links | `complete` | `full customer-ready detail added, official assets optimized` | [DMCI Online](https://www.dmci-online.com/solmera-coast-dmci-batangas-city/) |

## Sync Notes

- Local `main` was fast-forwarded to remote commit `098565d`, which already contained the rich The Oriana and One Delta Terraces update plus their core JPG assets.
- The remote core JPG assets were kept in place. Non-conflicting local The Oriana support assets were restored only for floorplans and optimized WebP variants.
- The Oriana customer-ready copy is wired through `src/data/theOrianaDetails.js`; One Delta Terraces and Cameron Residences are wired through dedicated rich detail files.
- No duplicate active project entry was added. The active project count remains 18.

### The Oriana Additional Local Support Assets

- `floorplan-studio-a.jpg`
- `floorplan-1br-a.jpg`
- `floorplan-2br-a.jpg`
- `floorplan-3br-a.jpg`
- `floorplan-north-typical.jpg`
- `hero-640.webp`, `hero-960.webp`, `hero-1440.webp`
- `thumbnail-480.webp`, `thumbnail-768.webp`, `thumbnail-960.webp`
- `gallery-1-480.webp`, `gallery-1-960.webp`, `gallery-1-1280.webp`
- `gallery-2-480.webp`, `gallery-2-960.webp`, `gallery-2-1280.webp`
- `gallery-3-480.webp`, `gallery-3-960.webp`, `gallery-3-1280.webp`
- `master-plan-480.webp`, `master-plan-960.webp`, `master-plan-1280.webp`

### One Delta Terraces Additional Local Support Assets

- Official Drive perspective, interior, unit, and seller assets were compressed into local JPG/WebP files.
- Official DMCI Online floor plan and site development images were added for the floor plan section.
- Google Maps embed, directions button, YouTube AVP, Drive AVP backup, and 360-tour links are wired in `src/data/oneDeltaTerracesDetails.js`.

### Cameron Residences Additional Local Support Assets

- CAR Drive/official Cameron logo and DMCI Online Cameron images were compressed into local JPG/WebP files.
- DMCI Online floor plan, location, amenity, and site development images were added for full buyer reference.
- Google Maps embed, directions button, and YouTube AVP are wired in `src/data/cameronResidencesDetails.js`.
- No Cameron-specific 360-tour link was found in the available CAR Drive folder or official Cameron page during this update, so the page links only to the verified AVP and official virtual-tour guide.

### Pasig Project Rich Page Update

- VAL, AGP, and PMR Drive folders plus official DMCI Online pages were used for Valeron Tower, Allegra Garden Place, and Prisma Residences.
- Official project images were compressed into local JPG/WebP variants under `public/assets/projects/the-valeron-tower`, `public/assets/projects/allegra-garden-place`, and `public/assets/projects/prisma-residences`.
- Google Maps embeds, Get Directions buttons, YouTube AVPs, and verified 360-tour links are wired in `src/data/pasigProjectDetails.js`.
- Pricing, promo, sample computation, unit mix, nearby establishment, amenity, floor plan, unit holding, and reservation copy are reference-only and require final confirmation before buyer presentation.

### Mandaluyong Project Rich Page Update

- SGR and KGR Drive folders plus official DMCI Online pages were used for Sage Residences and Kai Garden Residences.
- Sage Drive 360-tour documentation was verified and wired with the official YouTube AVP and Google Maps embed.
- Kai Drive supplied logo assets; official DMCI Online imagery supplied the complete hero, gallery, site development, site progress, floor plan, turnover finish, YouTube AVP, and Google Maps references.
- Official project images were compressed into local JPG/PNG plus WebP variants under `public/assets/projects/sage-residences` and `public/assets/projects/kai-garden-residences`.
- No verified Kai-specific 360-tour link was found in the available KGR Drive folder or official Kai page during this update, so Kai links only to the verified AVP and map.

### Manila, Pasay, and Las Pinas Rich Page Update

- DMCI Online official pages were used for The Camden Place, The Aston Place, and Sonora Garden Residences after Drive searches did not return matching project asset folders.
- Official project images were compressed into local JPG/PNG plus WebP variants under `public/assets/projects/the-camden-place`, `public/assets/projects/the-aston-place`, and `public/assets/projects/sonora-garden-residences`.
- The Camden Place has an embedded Google map and verified YouTube AVP from the official page.
- The Aston Place has an embedded Google map and complete official visual references; no verified official YouTube AVP was found on the official page during this update, so the page requests the approved AVP/link from Luisa instead of embedding a third-party walkthrough.
- Sonora Garden Residences has an embedded Google map, verified YouTube AVP, and official virtual community tour link.

### Atherton, Calathea, Moncello, and Solmera Rich Page Update

- DMCI Online official pages were used for The Atherton, Calathea Place, Moncello Crest, and Solmera Coast.
- Official project images were compressed into local JPG/PNG plus complete WebP responsive variants under `public/assets/projects/the-atherton`, `public/assets/projects/calathea-place`, `public/assets/projects/moncello-crest`, and `public/assets/projects/solmera-coast`.
- The Atherton and Calathea Place now include rich buyer copy, official maps, official location/site/floor-plan visuals, payment samples, unit holding/reservation references, and source/virtual links where exposed by DMCI Online.
- Moncello Crest and Solmera Coast now include rich buyer copy, official Google Maps embeds, official YouTube AVP embeds, official virtual community tour links, rental pool program sections, amenity galleries, floor-plan cards, and payment samples.
- Local browser QA passed on phone and desktop for all four pages and their related listing filters: no placeholders, no broken images, no failed local project asset requests, no horizontal overflow, maps present on detail pages, and YouTube embeds present for Moncello/Solmera.

## Non-Approved Asset Folders Still On Disk

These folders are not active project data and should remain ignored unless the broker/client asks to repurpose or remove them. Exception: `mulberry-place-2` is intentionally reused by the approved `mulberry-place` route through `assetSlug`.

- `alea-residences`
- `anissa-heights`
- `brio-tower`
- `bristle-ridge`
- `fortis-residences`
- `kalea-heights`
- `maricielo-villas`
- `rhapsody-residences`
- `the-calinea-tower`
- `torre-de-manila`
- `valeron-tower`
- `verdon-parc`
- `willow-park-homes`
