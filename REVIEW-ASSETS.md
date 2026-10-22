# Approved imagery audit

Source: `creme-approved-image-extracts.zip`, supplied by the owner on 22 October 2026. These are flattened mockup extracts, not clean original photographs. No stock or generated images are used. Package README statements were treated as asset metadata; the user's request defines scope.

The 709 × 1536 master reference establishes the layout: white compact header, full-width apparel hero, four capability pillars, dark three-industry section, full-width C2C ship panel, then three service thumbnails. The implementation preserves complete approved image frames without destructive cropping. Live copy uses Arial/Helvetica and Georgia italic to approximate the reference; no font files were supplied. CAPKY positioning and inquiry routing remain available below the reference composition.

| File | Pixels | Limitations and use |
| --- | --- | --- |
| 00-approved-master-reference.png | 709 × 1536 | Reference only; includes text and UI. Bottom service copy is cut off. Not used as a whole-page screenshot. |
| 01-hero-apparel-studio.png | 709 × 447 | Embedded headline, body, buttons, gradient and process labels. Used whole, with accessible heading/copy and functional button hit areas. |
| 02-industry-apparel.png | 221 × 198 | Embedded caption and arrow; used whole as inquiry link. |
| 03-industry-automotive.png | 222 × 198 | Embedded caption and arrow; used whole as inquiry link. CAPKY details remain live below. |
| 04-industry-construction.png | 221 × 198 | Embedded caption and arrow; used whole as inquiry link. |
| 05-c2c-container-ship.png | 709 × 316 | Embedded headline, copy, route labels and CTA. Used whole with accessible description and functional CTA. |
| 06-service-consulting.png | 203 × 87 | Low-resolution thumbnail; homepage consulting card. |
| 07-service-product-development.png | 202 × 87 | Low-resolution thumbnail; homepage development card. |
| 08-service-manufacturing.png | 206 × 87 | Low-resolution thumbnail; homepage sourcing/manufacturing card. |

All extracts have limited resolution: at the 1100px maximum composition width, the 709px panels and ~221px industry tiles are enlarged about 1.55×; service thumbnails about 1.53×. They will soften on desktop and high-density screens. Higher-resolution originals are needed for crisp large displays; nothing was silently substituted or AI-upscaled.

Embedded text cannot reflow, be localized or precisely match live typography. On narrow screens hero and C2C retain a 600px-wide scrollable frame so their text remains legible; equivalent functional text links are provided below. Industry and service cards stack on mobile. Embedded button artwork remains visible alongside the mobile links. This is an explicit compromise pending clean source images. The hero/industry/C2C typography is exactly the supplied raster artwork; surrounding live typography is approximate.

Only the review branch and draft PR are updated. No merge or production deployment.
