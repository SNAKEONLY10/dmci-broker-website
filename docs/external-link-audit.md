# External Link Audit

Generated: 2026-07-10T15:19:16.136Z

Mode: static source/data scan. This report does not make network requests, so CI stays stable. Device links such as tel, mailto, sms, and viber are reported but not treated as failures.

Production canonical: https://dmci-broker-website.vercel.app

## Summary

| Category | Unique links |
| --- | ---: |
| Device link - email | 1 |
| Device link - telephone | 2 |
| Device link - viber | 1 |
| Frontend dependency | 1 |
| Google Drive | 8 |
| Google Maps | 54 |
| Official DMCI link | 44 |
| Production canonical | 4 |
| Server delivery API | 1 |
| Virtual tour | 8 |
| YouTube | 29 |

## Notes

- Official DMCI, Google Maps, YouTube, Google Drive, and virtual-tour links are categorized for manual browser checks.
- Tel, mailto, sms, and Viber links depend on the buyer's device and installed apps.
- This audit fails only for malformed links or insecure non-local http links.

## Manual Click Checklist

| Link type | What to verify | Device note |
| --- | --- | --- |
| Official DMCI links | Open each official DMCI/dmci-online reference from project detail pages. | Desktop and mobile browser |
| Google Maps direction links | Click Get Directions and confirm the pin/search lands on the intended project or city area. | Manual browser test |
| Google Maps embedded maps | Click to load the map, then zoom and pan once. | Manual browser test |
| YouTube AVP links | Click to load/play and confirm no unavailable/private video message appears. | Manual browser test |
| Google Drive links | Open in an incognito window and confirm buyer-safe access permissions. | Manual owner test |
| Virtual tour links | Open the 360/tour link and confirm it is public, fast enough, and project-matched. | Manual browser test |
| Telephone links | Tap Call on a real phone and confirm the dialer opens the correct number. | Manual phone test required |
| Mail links | Tap Email and confirm the mail client opens the broker address. | Manual device test |
| Viber links | Tap Viber on a phone with Viber installed and confirm it opens the broker number. | Manual phone test required |

## Device link - email

| URL | Source references |
| --- | --- |
| mailto:mrcorral@dmcihomes.com | data exports.contact.emailHref, src/data/contact.js, api/leads.js |

## Device link - telephone

| URL | Source references |
| --- | --- |
| tel:+63288887777 | data exports.contact.officeHref, src/data/contact.js |
| tel:+639988658902 | data exports.contact.phoneHref, src/data/contact.js |

## Device link - viber

| URL | Source references |
| --- | --- |
| viber://chat?number=%2B639988658902 | data exports.contact.viber, src/data/contact.js |

## Frontend dependency

| URL | Source references |
| --- | --- |
| https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap | src/styles/global.css |

## Google Drive

| URL | Source references |
| --- | --- |
| https://drive.google.com/drive/folders/19CWq_YMieSFTOx9dpPIsE-dN75yUxoPr | src/pages/Showcase.jsx |
| https://drive.google.com/file/d/13yqG73S9dtdDp2U2KymJ27OyOKDCDclA/view | data exports.projects.audioVisualPresentation.links.url, src/data/theOrianaDetails.js |
| https://drive.google.com/file/d/14cs7m6M9RjVWuGOgTgdQR_9SaVFGKZos/view | data exports.projects.videoTourLinks.url, src/data/theErinHeightsDetails.js |
| https://drive.google.com/file/d/16_8Hd_G4BZTLaqRAPz6jeNvcQOGMXuU1/view | data exports.projects.audioVisualPresentation.links.url, src/data/theOrianaDetails.js |
| https://drive.google.com/file/d/1ARveq6JormcUZGQRLLd6oZAup-O_1XmX/view | data exports.projects.videoTourLinks.url, src/data/theErinHeightsDetails.js |
| https://drive.google.com/file/d/1LqAlOjQWcdb7-VQt_wHzduXpKkMWoP1W/view | data exports.projects.videoTourLinks.url, src/data/oneDeltaTerracesDetails.js |
| https://drive.google.com/file/d/1MRzWddRZdWK9z1zENevxVtDQUyuaboVk/view | data exports.projects.audioVisualPresentation.links.url, src/data/theOrianaDetails.js |
| https://drive.google.com/file/d/1y8bWiYgWHBtEp3xzRFM2XJ4ysvTSxx9k/view | data exports.projects.videoTourLinks.url, src/data/theErinHeightsDetails.js |

## Google Maps

| URL | Source references |
| --- | --- |
| https://www.google.com/maps?q=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City&output=embed | data exports.projects.locationDetails.mapEmbedUrl, src/data/theErinHeightsDetails.js |
| https://www.google.com/maps?q=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City&output=embed | data exports.projects.locationDetails.mapEmbedUrl, src/data/theOrianaDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.directionsUrl, src/data/projects.js |
| https://www.google.com/maps/dir/?api=1&destination=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.directionsUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Calathea%20Place%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.directionsUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Cameron%20Residences%20Mapalad%20St%20Roosevelt%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl, src/data/cameronResidencesDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Kai%20Garden%20Residences%20M.%20Vicente%20St%20near%20Boni%20Ave%20Mandaluyong | data exports.projects.locationDetails.directionsUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Moncello%20Crest%20Tuba%20Benguet | data exports.projects.locationDetails.directionsUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Mulberry%20Place%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.directionsUrl, src/data/projects.js |
| https://www.google.com/maps/dir/?api=1&destination=One%20Delta%20Terraces%20West%20Avenue%20corner%20Quezon%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl, src/data/oneDeltaTerracesDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.directionsUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Sage%20Residences%20Domingo%20M.%20Guevarra%20Sinag%20Streets%20Mandaluyong | data exports.projects.locationDetails.directionsUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Solmera%20Coast%20San%20Juan%20Batangas | data exports.projects.locationDetails.directionsUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=Sonora%20Garden%20Residences%20Alabang-Zapote%20Road%20Talon%20Uno%20Las%20Pinas | data exports.projects.locationDetails.directionsUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Aston%20Place%20Dominga%20Street%20Pasay | data exports.projects.locationDetails.directionsUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.directionsUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila | data exports.projects.locationDetails.directionsUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City | data exports.projects.locationDetails.directionsUrl, src/data/theErinHeightsDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City | data exports.projects.locationDetails.directionsUrl, src/data/theOrianaDetails.js |
| https://www.google.com/maps/dir/?api=1&destination=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig | data exports.projects.locationDetails.directionsUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7069778034393!2d120.55295327453491!3d16.388882584337846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1b5c7bff59b%3A0x78b4e71ef6852fe3!2sMoncello%20Crest!5e0!3m2!1sen!2sph!4v1713869880485!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3175740392203!2d121.02182317582773!3d14.637905739710934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b711d14e83d3%3A0xe4661e652b410182!2sOne%20Delta%20Terraces!5e0!3m2!1sen!2sph!4v1724305962339!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/oneDeltaTerracesDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3801936151126!2d121.01451951384114!3d14.63434688978095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b644794258d1%3A0x946bb234d84e8307!2sCameron+Residences!5e0!3m2!1sen!2sph!4v1552300116633 | data exports.projects.locationDetails.mapEmbedUrl, src/data/cameronResidencesDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.298358628538!2d121.07435657450776!3d14.582067385902057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98d3563a4a3%3A0xa8343ae9e8ae6d02!2sThe%20Valeron%20Tower!5e0!3m2!1sen!2sph!4v1710584617871!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3301596613633!2d121.04400837448463!3d14.580253377575712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c979f464a405%3A0xb971e62dd194a128!2sSage%20Residences!5e0!3m2!1sen!2sph!4v1715494459759!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.625515696215!2d121.0648922138399!3d14.563394989826152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95bdada688d%3A0xf70a005047faf001!2sAllegra%20Garden%20Place!5e0!3m2!1sen!2sph!4v1571739304572!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.62610577957!2d121.06569881384002!3d14.563361289826235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c864c8d01471%3A0xc5ef7af1ad1dc4c9!2sPrisma%20Residences!5e0!3m2!1sen!2sph!4v1582183035794!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.65688281535!2d120.99486561404646!3d14.561603489827304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a28af8ff7%3A0xcdd2ecbeae448c1e!2sThe%20Camden%20Place!5e0!3m2!1sen!2sph!4v1606455279946!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.716708564559!2d120.99833949472877!3d14.558186007121835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a9aa46b3f%3A0x17eafb9720942b59!2sAston+Residences!5e0!3m2!1sen!2sph!4v1536517359082 | data exports.projects.locationDetails.mapEmbedUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3337495493397!2d121.06340507450646!3d14.522892285954283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8ba65934bf1%3A0xdbdfb95e72840811!2sMulberry%20Place!5e0!3m2!1sen!2sph!4v1711778455334!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/projects.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3689859329224!2d121.06664211372616!3d14.520874289853218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c98ff5291a17%3A0xb27a801f407ea74f!2sAlder%20Residences!5e0!3m2!1sen!2sph!4v1598622371430!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/projects.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3635804957826!2d121.01951617445938!3d14.463799986006528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6f7afb6151%3A0xad447e5a68b0bb9f!2sCalathea%20Place!5e0!3m2!1sen!2sph!4v1716977383908!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.393538617637!2d121.02477802959226!3d14.462077434801797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce49016062d9%3A0x2b31130ee33368fb!2sThe+Atherton!5e0!3m2!1sen!2sph!4v1530289695711 | data exports.projects.locationDetails.mapEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6910089054645!2d120.99686001383799!3d14.444962389901699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf42c0172695%3A0xf48e38a4a6f17a60!2sSonora%20Garden%20Residences!5e0!3m2!1sen!2sph!4v1575636446201!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.759770188719!2d121.43338747448969!3d13.732988986656897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd3b349ce86ad7%3A0xa4d2b999aa83eb4d!2sSolmera%20Coast!5e0!3m2!1sen!2sph!4v1710670453636!5m2!1sen!2sph | data exports.projects.locationDetails.mapEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.13932862529!2d121.0450915069755!3d14.57567345707918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c848a62ba9b3%3A0xb68c1b0710c542f!2sKai+Garden+Residences!5e0!3m2!1sen!2sph!4v1498403297632 | data exports.projects.locationDetails.mapEmbedUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Alder%20Residences%20Banyan%20Road%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.mapUrl, src/data/projects.js |
| https://www.google.com/maps/search/?api=1&query=Allegra%20Garden%20Place%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.mapUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Calathea%20Place%20Paranaque | data exports.projects.locationDetails.mapUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Cameron%20Residences%20Mapalad%20St%20Roosevelt%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl, src/data/cameronResidencesDetails.js |
| https://www.google.com/maps/search/?api=1&query=Kai%20Garden%20Residences%20Mandaluyong | data exports.projects.locationDetails.mapUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Moncello%20Crest%20Tuba%20Benguet | data exports.projects.locationDetails.mapUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Mulberry%20Place%20Acacia%20Estates%20Taguig | data exports.projects.locationDetails.mapUrl, src/data/projects.js |
| https://www.google.com/maps/search/?api=1&query=One%20Delta%20Terraces%20West%20Avenue%20corner%20Quezon%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl, src/data/oneDeltaTerracesDetails.js |
| https://www.google.com/maps/search/?api=1&query=Prisma%20Residences%20Pasig%20Boulevard%20Bagong%20Ilog%20Pasig | data exports.projects.locationDetails.mapUrl, src/data/pasigProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Sage%20Residences%20Mandaluyong | data exports.projects.locationDetails.mapUrl, src/data/mandaluyongProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Solmera%20Coast%20San%20Juan%20Batangas | data exports.projects.locationDetails.mapUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=Sonora%20Garden%20Residences%20Las%20Pinas | data exports.projects.locationDetails.mapUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Aston%20Place%20Dominga%20Street%20Pasay | data exports.projects.locationDetails.mapUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Atherton%20Dr.%20A.%20Santos%20Avenue%20Paranaque | data exports.projects.locationDetails.mapUrl, src/data/regionalProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Camden%20Place%20Dominga%20Street%20Malate%20Manila | data exports.projects.locationDetails.mapUrl, src/data/metroProjectDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Erin%20Heights%20Commonwealth%20Avenue%20corner%20Tandang%20Sora%20Avenue%20Quezon%20City | data exports.projects.locationDetails.mapUrl, src/data/theErinHeightsDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Oriana%20DMCI%20Aurora%20Boulevard%20Quezon%20City | data exports.projects.locationDetails.mapUrl, src/data/theOrianaDetails.js |
| https://www.google.com/maps/search/?api=1&query=The%20Valeron%20Tower%20C-5%20P.E.%20Antonio%20St%20Pasig | data exports.projects.locationDetails.mapUrl, src/data/pasigProjectDetails.js |

## Official DMCI link

| URL | Source references |
| --- | --- |
| https://www.dmci-online.com/alder-residences-dmci-taguig/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, src/data/projects.js |
| https://www.dmci-online.com/allegra-garden-place-pasig/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/pasigProjectDetails.js |
| https://www.dmci-online.com/aston-place-dmci-pasay/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/metroProjectDetails.js |
| https://www.dmci-online.com/atherton-dmci-sucat-paranaque/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/buyers-guide/dmci-homes-virtual-tour-units/ | data exports.projects.videoTourLinks.url, data exports.projects.videoTourUrl, src/data/cameronResidencesDetails.js, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/calathea-place-paranaque-city/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/cameron-residences-quezon-city/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/cameronResidencesDetails.js |
| https://www.dmci-online.com/kai-garden-residences-mandaluyong/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/mandaluyongProjectDetails.js |
| https://www.dmci-online.com/moncello-crest-tuba-benguet-baguio/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/mulberry-place-dmci-taguig/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, src/data/projects.js |
| https://www.dmci-online.com/one-delta-terraces-dmci-quezon-city/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/oneDeltaTerracesDetails.js |
| https://www.dmci-online.com/prisma-residences-dmci-pasig/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/pasigProjectDetails.js |
| https://www.dmci-online.com/sage-residences-mandaluyong/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/mandaluyongProjectDetails.js |
| https://www.dmci-online.com/solmera-coast-dmci-batangas-city/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/sonora-garden-residences/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/metroProjectDetails.js |
| https://www.dmci-online.com/the-camden-place-manila/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/metroProjectDetails.js |
| https://www.dmci-online.com/the-erin-heights-dmci-quezon-city/ | data exports.projects.newsMedia.url, data exports.projects.referenceUrl, src/data/theErinHeightsDetails.js |
| https://www.dmci-online.com/the-oriana-dmci-quezon-city/ | data exports.projects.newsMedia.url, data exports.projects.referenceUrl, src/data/theOrianaDetails.js |
| https://www.dmci-online.com/valeron-tower-dmci-pasig-city/ | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, data exports.projects.referenceUrl, src/data/pasigProjectDetails.js |
| https://www.dmci-online.com/virtual-community-tour/?option=Acacia | data exports.projects.videoTourLinks.url, src/data/projects.js |
| https://www.dmci-online.com/virtual-community-tour/?option=ALD | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/projects.js |
| https://www.dmci-online.com/virtual-community-tour/?option=CLP | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/virtual-community-tour/?option=MCC | data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/virtual-community-tour/?option=MLP | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/projects.js |
| https://www.dmci-online.com/virtual-community-tour/?option=ORI | data exports.projects.virtualTour.url, data exports.projects.virtualTour.links.url, src/data/theOrianaDetails.js |
| https://www.dmci-online.com/virtual-community-tour/?option=SLC | data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.dmci-online.com/virtual-community-tour/?option=SON | data exports.projects.videoTourLinks.url, src/data/metroProjectDetails.js |
| https://www.dmcihomes.com/ | data exports.contact.officialDmciWebsite, src/data/contact.js |
| https://www.dmcihomes.com/allegra-garden-place | src/data/projects.js |
| https://www.dmcihomes.com/calathea-place | src/data/projects.js |
| https://www.dmcihomes.com/cameron-residences | src/data/projects.js |
| https://www.dmcihomes.com/kai-garden-residences | src/data/projects.js |
| https://www.dmcihomes.com/moncello-crest | src/data/projects.js |
| https://www.dmcihomes.com/one-delta-terraces | src/data/projects.js |
| https://www.dmcihomes.com/prisma-residences | src/data/projects.js |
| https://www.dmcihomes.com/sage-residences | src/data/projects.js |
| https://www.dmcihomes.com/solmera-coast | src/data/projects.js |
| https://www.dmcihomes.com/sonora-garden-residences | src/data/projects.js |
| https://www.dmcihomes.com/the-aston-place | src/data/projects.js |
| https://www.dmcihomes.com/the-atherton | src/data/projects.js |
| https://www.dmcihomes.com/the-camden-place | src/data/projects.js |
| https://www.dmcihomes.com/the-erin-heights | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, src/data/projects.js, src/data/theErinHeightsDetails.js |
| https://www.dmcihomes.com/the-oriana | data exports.projects.newsMedia.url, data exports.projects.sourceUrl, src/data/projects.js, src/data/theOrianaDetails.js |
| https://www.dmcihomes.com/the-valeron-tower | src/data/projects.js |

## Production canonical

| URL | Source references |
| --- | --- |
| https://dmci-broker-website.vercel.app | data exports.SITE_URL, src/data/seo.js, api/leads.js |
| https://dmci-broker-website.vercel.app/ | index.html |
| https://dmci-broker-website.vercel.app/assets/img/premium-dmci-hero.jpg | index.html |
| https://dmci-broker-website.vercel.app/sitemap.xml | public/robots.txt |

## Server delivery API

| URL | Source references |
| --- | --- |
| https://api.resend.com/emails | api/leads.js |

## Virtual tour

| URL | Source references |
| --- | --- |
| https://dmcihomes.viewin360.co/share/collection/792MF?logo=bWVkaWEvMTUwOTU1LzYwMjAtZGVhNC1jZjA2LTc0MzYucG5n&info=0&logosize=200&fs=1&vr=1&sd=1&initload=0&thumbs=1 | data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://dmcihomes.viewin360.co/share/collection/794vs?logo=bWVkaWEvMTUwOTU1LzYzMWQtODdkYi0zODg3LTM5NjkucG5n&info=0&logosize=200&fs=1&vr=0&sd=1&gyro=0&thumbs=1&keys=0 | data exports.projects.videoTourLinks.url, src/data/mandaluyongProjectDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7D9sf?logo=bWVkaWEvMTUwOTU1LzY2YzQtMDkwMy02ZjlmLWIzNTkucG5n&info=0&logosize=200&fs=1&vr=1&sd=1&gyro=0&initload=0&thumbs=1 | data exports.projects.videoTourLinks.url, src/data/oneDeltaTerracesDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7Dg66?logo=bWVkaWEvMTUwOTU1LzY4YTUtYTNhYi0xMmU5LTk3NTYucG5n&info=0&logosize=200&fs=1&vr=1&sd=1&gyro=0&initload=0&thumbs=1 | data exports.projects.videoTourLinks.url, src/data/oneDeltaTerracesDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7vkdw?logo=bWVkaWEvMTUwOTU1LzYyOTUtYTQ2Ni1jM2U2LTkzNzUucG5n&info=0&fs=1&vr=1&sd=1&gyro=0&initload=0&thumbs=1&keys=0 | data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7vkjm?logo=bWVkaWEvMTUwOTU1LzYyOTUtYTQ2Ni1jM2U2LTkzNzUucG5n&info=0&logosize=200&fs=1&vr=0&sd=1&gyro=0&thumbs=1&keys=0 | data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7vknn?logo=bWVkaWEvMTUwOTU1LzYyOTUtYTQ2Ni1jM2U2LTkzNzUucG5n&info=0&fs=1&vr=1&sd=1&gyro=0&initload=0&thumbs=1&keys=0 | data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://dmcihomes.viewin360.co/share/collection/7XzCD?logo=bWVkaWEvMTUwOTU1LzY1OTYtNjA3NC02NDgxLWYxMzYucG5n&info=0&logosize=200&fs=0&vr=1&sd=1&gyro=0&initload=0&autopalt=1&thumbs=1 | data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |

## YouTube

| URL | Source references |
| --- | --- |
| https://www.youtube.com/embed/05wObUYI310 | data exports.projects.videoTourEmbedUrl, src/data/cameronResidencesDetails.js |
| https://www.youtube.com/embed/C4M2T9cc5tI | data exports.projects.videoTourEmbedUrl, src/data/metroProjectDetails.js |
| https://www.youtube.com/embed/D3ffIj6QMV8 | data exports.projects.videoTourEmbedUrl, src/data/theErinHeightsDetails.js |
| https://www.youtube.com/embed/DDIe8FhqZdU?rel=0 | data exports.projects.videoTourEmbedUrl, src/data/projects.js |
| https://www.youtube.com/embed/eRDLUXEDfAk | data exports.projects.videoTourEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.youtube.com/embed/eZFZzBVUYKM | data exports.projects.videoTourEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.youtube.com/embed/IF99Kg2xu1I | data exports.projects.audioVisualPresentation.embedUrl, src/data/theOrianaDetails.js |
| https://www.youtube.com/embed/J4DKUxkPkKk | data exports.projects.videoTourEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.youtube.com/embed/m3LkY82XjKI | data exports.projects.videoTourEmbedUrl, src/data/oneDeltaTerracesDetails.js |
| https://www.youtube.com/embed/oBzOVj3qXv4 | data exports.projects.videoTourEmbedUrl, src/data/pasigProjectDetails.js |
| https://www.youtube.com/embed/rMI-beJXoTU | data exports.projects.videoTourEmbedUrl, src/data/regionalProjectDetails.js |
| https://www.youtube.com/embed/RRLGJTOJ48k | data exports.projects.videoTourEmbedUrl, src/data/mandaluyongProjectDetails.js |
| https://www.youtube.com/embed/rZJdHyCzUS8 | data exports.projects.videoTourEmbedUrl, src/data/mandaluyongProjectDetails.js |
| https://www.youtube.com/embed/voLKgWQalo4?rel=0 | data exports.projects.videoTourEmbedUrl, src/data/projects.js |
| https://www.youtube.com/embed/YB1T5evkmSY | data exports.projects.videoTourEmbedUrl, src/data/metroProjectDetails.js |
| https://www.youtube.com/watch?v=05wObUYI310 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/cameronResidencesDetails.js |
| https://www.youtube.com/watch?v=C4M2T9cc5tI | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/metroProjectDetails.js |
| https://www.youtube.com/watch?v=D3ffIj6QMV8 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/theErinHeightsDetails.js |
| https://www.youtube.com/watch?v=eRDLUXEDfAk | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://www.youtube.com/watch?v=eZFZzBVUYKM | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.youtube.com/watch?v=IF99Kg2xu1I | data exports.projects.audioVisualPresentation.url, data exports.projects.audioVisualPresentation.links.url, data exports.projects.virtualTour.links.url, src/data/theOrianaDetails.js |
| https://www.youtube.com/watch?v=iRCL-SM7Ktg | data exports.projects.videoTourUrl, data exports.projects.videoEmbed.externalUrl, src/data/projects.js |
| https://www.youtube.com/watch?v=J4DKUxkPkKk | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://www.youtube.com/watch?v=m3LkY82XjKI | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/oneDeltaTerracesDetails.js |
| https://www.youtube.com/watch?v=oBzOVj3qXv4 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/pasigProjectDetails.js |
| https://www.youtube.com/watch?v=rMI-beJXoTU | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/regionalProjectDetails.js |
| https://www.youtube.com/watch?v=RRLGJTOJ48k | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/mandaluyongProjectDetails.js |
| https://www.youtube.com/watch?v=rZJdHyCzUS8 | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/mandaluyongProjectDetails.js |
| https://www.youtube.com/watch?v=YB1T5evkmSY | data exports.projects.videoTourUrl, data exports.projects.videoTourLinks.url, src/data/metroProjectDetails.js |
