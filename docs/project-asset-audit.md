# DMCI Project Asset and Content Audit

Audit date: 2026-06-30

Scope: only the 18 approved priority projects are active in `src/data/projects.js`. No random Google images were added. Missing visuals rely on the existing clean `ImagePlaceholder` fallback until broker/client/official assets are provided.

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
- Complete core image sets: 5
- Partial asset sets: 0
- Official assets needed: 13
- Brochures currently present: 0
- Content status: all 18 updated with reference-only broker copy and official DMCI Homes source URLs.

`assetStatus` rules used:

- `complete`: hero, thumbnail, and at least 3 gallery images exist.
- `partial-assets`: only some image files exist.
- `official-assets-needed`: most image files are missing.

## Approved Project Checklist

| # | Project | Slug | Hero | Thumbnail | Gallery | Master Plan | Site Progress | Brochure | Asset Status | Content Status | Source URL |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | The Oriana | `the-oriana` | Present | Present | 3/3 present | Present | Present | Missing | `complete` | `full customer-ready detail added` | [DMCI Homes](https://www.dmcihomes.com/the-oriana) |
| 2 | One Delta Terraces | `one-delta-terraces` | Present | Present | 3/3 present | Present | Present | Missing | `complete` | `full customer-ready detail added` | [DMCI Homes](https://www.dmcihomes.com/one-delta-terraces) |
| 3 | The Erin Heights | `the-erin-heights` | Present | Present | 3/3 present + extras | Present | Present | Missing | `complete` | `full customer-ready detail added` | [DMCI Homes](https://www.dmcihomes.com/the-erin-heights) |
| 4 | Cameron Residences | `cameron-residences` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/cameron-residences) |
| 5 | The Valeron Tower | `the-valeron-tower` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/the-valeron-tower) |
| 6 | Allegra Garden Place | `allegra-garden-place` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/allegra-garden-place) |
| 7 | Prisma Residences | `prisma-residences` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/prisma-residences) |
| 8 | Sage Residences | `sage-residences` | Present | Present | 3/3 present | Present | Present | Missing | `complete` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/sage-residences) |
| 9 | Kai Garden Residences | `kai-garden-residences` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/kai-garden-residences) |
| 10 | Mulberry Place | `mulberry-place` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/mulberry-place) |
| 11 | Alder Residences | `alder-residences` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/alder-residences) |
| 12 | The Aston Place | `the-aston-place` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/the-aston-place) |
| 13 | The Camden Place | `the-camden-place` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/the-camden-place) |
| 14 | The Atherton | `the-atherton` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/the-atherton) |
| 15 | Calathea Place | `calathea-place` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/calathea-place) |
| 16 | Sonora Garden Residences | `sonora-garden-residences` | Missing | Missing | 0/3 present | Missing | Missing | Missing | `official-assets-needed` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/sonora-garden-residences) |
| 17 | Moncello Crest | `moncello-crest` | Present | Present | 3/3 present | Present | Present | Missing | `complete` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/moncello-crest) |
| 18 | Solmera Coast | `solmera-coast` | Present | Present | 3/3 present | Present | Present | Missing | `complete` | `official-reference-copy` | [DMCI Homes](https://www.dmcihomes.com/solmera-coast) |

## Sync Notes

- Local `main` was fast-forwarded to remote commit `098565d`, which already contained the rich The Oriana and One Delta Terraces update plus their core JPG assets.
- The remote core JPG assets were kept in place. Non-conflicting local The Oriana support assets were restored only for floorplans and optimized WebP variants.
- The Oriana customer-ready copy is wired through `src/data/theOrianaDetails.js`; One Delta Terraces rich copy remains in `src/data/projects.js`.
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

## Non-Approved Asset Folders Still On Disk

These folders are not active project data and should remain ignored unless the broker/client asks to repurpose or remove them:

- `alea-residences`
- `anissa-heights`
- `brio-tower`
- `bristle-ridge`
- `fortis-residences`
- `kalea-heights`
- `maricielo-villas`
- `mulberry-place-2`
- `rhapsody-residences`
- `the-calinea-tower`
- `torre-de-manila`
- `valeron-tower`
- `verdon-parc`
- `willow-park-homes`
