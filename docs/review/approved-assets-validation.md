# Approved assets validation — October 22, 2026

- Production build: `npm run build` passed (Next.js 16.4.2).
- TypeScript: `npm run lint` (`tsc --noEmit`) passed.
- Chromium production-server checks: 13 public routes at 320, 390, 768 and 1440 CSS pixels, 52 total. All returned 200 with no horizontal overflow, broken images or browser page errors.
- Reviewed fresh full-page desktop and iPhone-size homepage screenshots and CAPKY screenshots.
- All six service cards and all approved hero/industry/C2C photographs loaded successfully.
- Automotive homepage link reaches `/automotive`; CAPKY external link is `https://capky.net`; automotive inquiry preselects `Automotive / parts`.
- Mobile menu open, Escape and link dismissal passed. Fifteen unique homepage internal destinations returned below 400.
- Empty quote form fails native validation; empty API inquiry returns 400; unauthenticated admin API returns 401.
- All ten supplied WebP files match extracted ZIP bytes. SHA-256 manifest accompanies this report.

Browser checks use Chromium emulation, not physical iPhone/Safari. Live email delivery was not exercised. Existing API handlers, inquiry forms and admin code are unchanged.

Earlier screenshots and reports in this directory predate the approved photographs; files prefixed `approved-` document this revision.
