# External Link Audit

Generated: 2026-07-16T17:06:14.214Z

Mode: static source/data scan. This report does not make network requests, so CI stays stable. Device links such as tel, mailto, sms, and viber are reported but not treated as failures.

Production canonical: https://dmci-broker-website.vercel.app

## Summary

| Category | Unique links |
| --- | ---: |
| Device link - email | 1 |
| Device link - telephone | 2 |
| Device link - viber | 1 |
| Frontend dependency | 1 |
| Google Maps | 54 |
| Production canonical | 4 |
| Server delivery API | 1 |
| YouTube | 32 |

## Notes

- Runtime project exports and customer-facing UI are scanned. Archived source references that are normalized out before rendering are intentionally excluded.
- Customer-facing project media is YouTube-only. DMCI Homes, DMCI Online, Drive, 360-tour, and third-party property-page redirects are blocked by the project link-policy QA.
- Google Maps and YouTube links are categorized for manual browser checks.
- Tel, mailto, sms, and Viber links depend on the buyer's device and installed apps.
- This audit fails only for malformed links or insecure non-local http links.

## Manual Click Checklist

| Link type | What to verify | Device note |
| --- | --- | --- |
| Google Maps direction links | Click Get Directions and confirm the pin/search lands on the intended project or city area. | Manual browser test |
| Google Maps embedded maps | Click to load the map, then zoom and pan once. | Manual browser test |
| YouTube AVP links | Click to load/play and confirm no unavailable/private video message appears. | Manual browser test |
| Telephone links | Tap Call on a real phone and confirm the dialer opens the correct number. | Manual phone test required |
| Mail links | Tap Email and confirm the mail client opens the broker address. | Manual device test |
| Viber links | Tap Viber on a phone with Viber installed and confirm it opens the broker number. | Manual phone test required |

## Device link - email

| URL | Source references |
| --- | --- |
| mailto:mrcorral@dmcihomes.com | data exports.contact.emailHref, api/leads.js |

## Device link - telephone

| URL | Source references |
| --- | --- |
| tel:+63288887777 | data exports.contact.officeHref |
| tel:+639988658902 | data exports.contact.phoneHref |

## Device link - viber

| URL | Source references |
| --- | --- |
| viber://chat?number=%2B639988658902 | data exports.contact.viber |

## Frontend dependency

| URL | Source references |
| --- | --- |
| https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap | src/styles/global.css |

## Google Maps

| URL | Source references |
| --- | --- |
| https://www.google.com/maps?q=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City&output=embed | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps?q=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City&output=embed | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/dir/?api=1&destination=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Calathea%20Place%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Cameron%20Residences%20Mapalad%20St%20Roosevelt%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Kai%20Garden%20Residences%20M.%20Vicente%20St%20near%20Boni%20Ave%20Mandaluyong | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Moncello%20Crest%20Tuba%20Benguet | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Mulberry%20Place%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=One%20Delta%20Terraces%20West%20Avenue%20corner%20Quezon%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Sage%20Residences%20Domingo%20M.%20Guevarra%20Sinag%20Streets%20Mandaluyong | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Solmera%20Coast%20San%20Juan%20Batangas | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=Sonora%20Garden%20Residences%20Alabang-Zapote%20Road%20Talon%20Uno%20Las%20Pinas | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Aston%20Place%20Dominga%20Street%20Pasay | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/dir/?api=1&destination=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig | data exports.projects.locationDetails.directionsUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7069778034393!2d120.55295327453491!3d16.388882584337846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1b5c7bff59b%3A0x78b4e71ef6852fe3!2sMoncello%20Crest!5e0!3m2!1sen!2sph!4v1713869880485!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3175740392203!2d121.02182317582773!3d14.637905739710934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b711d14e83d3%3A0xe4661e652b410182!2sOne%20Delta%20Terraces!5e0!3m2!1sen!2sph!4v1724305962339!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3801936151126!2d121.01451951384114!3d14.63434688978095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b644794258d1%3A0x946bb234d84e8307!2sCameron+Residences!5e0!3m2!1sen!2sph!4v1552300116633 | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.298358628538!2d121.07435657450776!3d14.582067385902057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98d3563a4a3%3A0xa8343ae9e8ae6d02!2sThe%20Valeron%20Tower!5e0!3m2!1sen!2sph!4v1710584617871!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3301596613633!2d121.04400837448463!3d14.580253377575712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c979f464a405%3A0xb971e62dd194a128!2sSage%20Residences!5e0!3m2!1sen!2sph!4v1715494459759!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.625515696215!2d121.0648922138399!3d14.563394989826152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95bdada688d%3A0xf70a005047faf001!2sAllegra%20Garden%20Place!5e0!3m2!1sen!2sph!4v1571739304572!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.62610577957!2d121.06569881384002!3d14.563361289826235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c864c8d01471%3A0xc5ef7af1ad1dc4c9!2sPrisma%20Residences!5e0!3m2!1sen!2sph!4v1582183035794!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.65688281535!2d120.99486561404646!3d14.561603489827304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a28af8ff7%3A0xcdd2ecbeae448c1e!2sThe%20Camden%20Place!5e0!3m2!1sen!2sph!4v1606455279946!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.716708564559!2d120.99833949472877!3d14.558186007121835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a9aa46b3f%3A0x17eafb9720942b59!2sAston+Residences!5e0!3m2!1sen!2sph!4v1536517359082 | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3337495493397!2d121.06340507450646!3d14.522892285954283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8ba65934bf1%3A0xdbdfb95e72840811!2sMulberry%20Place!5e0!3m2!1sen!2sph!4v1711778455334!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3689859329224!2d121.06664211372616!3d14.520874289853218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98ff5291a17%3A0xb27a801f407ea74f!2sAlder%20Residences!5e0!3m2!1sen!2sph!4v1598622371430!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3635804957826!2d121.01951617445938!3d14.463799986006528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6f7afb6151%3A0xad447e5a68b0bb9f!2sCalathea%20Place!5e0!3m2!1sen!2sph!4v1716977383908!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.393538617637!2d121.02477802959226!3d14.462077434801797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce49016062d9%3A0x2b31130ee33368fb!2sThe+Atherton!5e0!3m2!1sen!2sph!4v1530289695711 | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6910089054645!2d120.99686001383799!3d14.444962389901699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf42c0172695%3A0xf48e38a4a6f17a60!2sSonora%20Garden%20Residences!5e0!3m2!1sen!2sph!4v1575636446201!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.759770188719!2d121.43338747448969!3d13.732988986656897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd3b349ce86ad7%3A0xa4d2b999aa83eb4d!2sSolmera%20Coast!5e0!3m2!1sen!2sph!4v1710670453636!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.13932862529!2d121.0450915069755!3d14.57567345707918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c848a62ba9b3%3A0xb68c1b0710c542f!2sKai+Garden+Residences!5e0!3m2!1sen!2sph!4v1498403297632 | data exports.projects.locationDetails.mapEmbedUrl |
| https://www.google.com/maps/search/?api=1&query=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Calathea%20Place%20Paranaque | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Cameron%20Residences%20Mapalad%20St%20Roosevelt%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Kai%20Garden%20Residences%20Mandaluyong | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Moncello%20Crest%20Tuba%20Benguet | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Mulberry%20Place%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=One%20Delta%20Terraces%20West%20Avenue%20corner%20Quezon%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Sage%20Residences%20Mandaluyong | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Solmera%20Coast%20San%20Juan%20Batangas | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=Sonora%20Garden%20Residences%20Las%20Pinas | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Aston%20Place%20Dominga%20Street%20Pasay | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City | data exports.projects.locationDetails.mapUrl |
| https://www.google.com/maps/search/?api=1&query=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig | data exports.projects.locationDetails.mapUrl |

## Production canonical

| URL | Source references |
| --- | --- |
| https://dmci-broker-website.vercel.app | data exports.SITE_URL, api/leads.js |
| https://dmci-broker-website.vercel.app/ | index.html |
| https://dmci-broker-website.vercel.app/assets/img/premium-dmci-hero.jpg | index.html |
| https://dmci-broker-website.vercel.app/sitemap.xml | public/robots.txt |

## Server delivery API

| URL | Source references |
| --- | --- |
| https://api.resend.com/emails | api/leads.js |

## YouTube

| URL | Source references |
| --- | --- |
| https://www.youtube-nocookie.com/embed/5_jb7qfpM9I?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/5CXZ6iiv5QA?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/5sHTpdMwkTc?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/7II8QCsZTNw?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/7NaVqLDqrM8?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/DaHnqCseG1s?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/dJVi8Hp9j2Y?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/iRCL-SM7Ktg?rel=0 | data exports.projects.audioVisualPresentation.embedUrl, data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/O_BPKmONDkw?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/p0wxndMBuLs?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/p8BK6I6GDf0?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/Qa6JosbEFi8?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/raCcLavx5us?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/Uae1IjKfLY0?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/wbhQrfJApSw?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube-nocookie.com/embed/ZunigkMvfsw?rel=0 | data exports.projects.videoTourEmbedUrl |
| https://www.youtube.com/watch?v=5_jb7qfpM9I | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=5CXZ6iiv5QA | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=5sHTpdMwkTc | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=7II8QCsZTNw | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=7NaVqLDqrM8 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=DaHnqCseG1s | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=dJVi8Hp9j2Y | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=iRCL-SM7Ktg | data exports.projects.videoTourUrl, data exports.projects.videoEmbed.externalUrl, data exports.projects.audioVisualPresentation.url, data exports.projects.audioVisualPresentation.links.url, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=O_BPKmONDkw | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=p0wxndMBuLs | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=p8BK6I6GDf0 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=Qa6JosbEFi8 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=raCcLavx5us | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=Uae1IjKfLY0 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=wbhQrfJApSw | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
| https://www.youtube.com/watch?v=ZunigkMvfsw | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url |
