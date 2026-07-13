# 18-Project Content Audit

Checked: July 13, 2026

Scope: Maria Luisa Corral buyer-assistance website compared with the current official developer project pages. Official/developer pages were used only as internal QA references. The customer-facing website does not link buyers to those project pages.

## Result

- All 18 local project records now use the audited high-level status, price range, unit types, land area, architectural theme, and address where published.
- Detailed local buyer guidance, galleries, floor-plan references, payment examples, reservation guidance, and Maria Luisa inquiry actions remain in place.
- Exact live inventory and buyer-specific computations remain confirmation-only because they can change after the audit date.
- 16 projects use a verified YouTube AVP in a ready inline player.
- One Delta Terraces and The Aston Place use a polished in-site “request approved presentation” state because no verified YouTube AVP was published in the audited project material.
- Customer-facing project links to DMCI Homes, DMCI Online, Google Drive, ViewIn360, and other property/tour pages are removed. YouTube is the only external project-media destination.

## Audited snapshot

| Project | Audited status | Audited price range | Audited unit types | Video state |
| --- | --- | --- | --- | --- |
| The Oriana | Ready for Occupancy | ₱4,678,000 - ₱10,369,000 | Studio, 1 BR, 2 BR | YouTube ready |
| One Delta Terraces | New | ₱6,953,000 - ₱22,147,000 | Studio, 2 BR, 3 BR | Request via Luisa |
| The Erin Heights | Under Construction | ₱4,930,000 - ₱30,140,000 | Studio, 2 BR, 3 BR | YouTube ready |
| Cameron Residences | Ready for Occupancy | ₱5,171,000 - ₱12,603,000 | 1 BR, 2 BR, 3 BR | YouTube ready |
| The Valeron Tower | New | ₱6,975,000 - ₱18,014,000 | Studio, 1 BR, 2 BR, 3 BR | YouTube ready |
| Allegra Garden Place | Under Construction | ₱4,958,000 - ₱13,889,000 | Studio, 1 BR, 2 BR, 3 BR | YouTube ready |
| Prisma Residences | Ready for Occupancy | ₱4,701,000 - ₱12,542,000 | 1 BR, 2 BR, 3 BR | YouTube ready |
| Sage Residences | Under Construction | ₱6,513,000 - ₱16,077,000 | Studio, 1 BR, 2 BR, 3 BR | YouTube ready |
| Kai Garden Residences | Ready for Occupancy | ₱5,472,000 - ₱14,834,000 | 1 BR, 2 BR, 3 BR | YouTube ready |
| Mulberry Place | Ready for Occupancy | ₱7,822,000 - ₱26,361,000 | 2 BR, 3 BR, 4 BR | YouTube ready |
| Alder Residences | Ready for Occupancy | ₱8,994,000 - ₱21,178,000 | 2 BR, 3 BR, 4 BR | YouTube ready |
| The Aston Place | Ready for Occupancy | ₱6,391,000 - ₱14,429,000 | 1 BR, 2 BR, 3 BR | Request via Luisa |
| The Camden Place | Under Construction | ₱5,143,800 - ₱9,918,800 | Studio, 1 BR, 2 BR | YouTube ready |
| The Atherton | Ready for Occupancy | ₱4,237,000 - ₱8,374,000 | 1 BR, 2 BR | YouTube ready |
| Calathea Place | Ready for Occupancy | ₱4,232,000 - ₱5,527,000 | 1 BR, 2 BR | YouTube ready |
| Sonora Garden Residences | Ready for Occupancy | ₱4,556,000 - ₱11,208,000 | 1 BR, 2 BR, 3 BR | YouTube ready |
| Moncello Crest | New | ₱8,050,000 - ₱18,270,000 | Studio, 1 BR, 2 BR | YouTube ready |
| Solmera Coast | Under Construction | ₱6,621,000 - ₱20,004,000 | Studio, 1 BR, 2 BR | YouTube ready |

## Important corrections applied

- Allegra Garden Place and The Camden Place are normalized to Under Construction.
- One Delta Terraces is normalized to Asian Contemporary.
- Sage Residences is normalized to Modern Tropical.
- Sonora Garden Residences uses Talon Tres in the audited address.
- Moncello Crest is normalized to New.
- Old project AVP IDs were replaced with the verified July 13, 2026 YouTube IDs.

## Ongoing QA rule

Run `npm run qa:project-link-policy` before production deployment. It fails if the 18-project export contains a customer-facing DMCI Homes, DMCI Online, Drive, 360-tour, or third-party property link.
