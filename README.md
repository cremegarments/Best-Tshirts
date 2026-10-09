# CRÈME Products — Vercel Website Starter

A premium, responsive Cayman-focused website, built with **Next.js 16 (App Router), React 19, TypeScript and hand-written CSS**. No CMS, payment processor or database is required for the initial launch.

## Included

- Home, Services, Work, Process, About, Contact and Get a Quote pages
- Mobile navigation and custom illustrated merchandise concepts
- A quote form with inputs for product, quantity, needed-by date, contact details, brief and external artwork link
- Server-side quote delivery via **Resend** when configured (no email is faked or silently discarded)
- Metadata for search and social sharing
- No real customer photos, prices, reviews, contact details or production promises have been invented

## 1 — Run locally

1. Install Node.js 20.9+ and npm.
2. Unzip this project and open a terminal in its folder.
3. Run `npm install`.
4. Run `npm run dev` and visit `http://localhost:3000`.

## 2 — Deploy to Vercel

1. Create a **private GitHub repository** (for example, `creme-production`).
2. Upload or push the contents of this folder to the **repository root** (not a parent folder).
3. Visit https://vercel.com/new, connect GitHub and import the repository.
4. Vercel detects **Next.js**. Leave build settings at their defaults, then deploy.
5. A `.vercel.app` preview URL is generated; add a custom domain through **Project → Settings → Domains**.
6. Because this is a commercial website, use a plan permitted for commercial use (Vercel's Hobby plan is personal/non-commercial only; check current Pro terms).

## 3 — Activate real quote emails (essential before launch)

The quote form is wired to a real server route but will **not send email** until configured. It returns a visible error if not configured.

1. Register at https://resend.com, add and verify a domain you own and obtain an API key.
2. In **Vercel → Project → Settings → Environment Variables**, set:

| Key | Example / purpose |
| --- | --- |
| `RESEND_API_KEY` | Secret API key, never expose to browser |
| `QUOTE_FROM_EMAIL` | `quotes@your-verified-domain.com` (must be verified by Resend) |
| `QUOTE_TO_EMAIL` | Your inbox to receive quote requests |
| `NEXT_PUBLIC_CONTACT_EMAIL` | The email address to show on the Contact page and as fallback |
| `NEXT_PUBLIC_SITE_URL` | Your deployed production URL, `https://...` |

3. Redeploy so the environment variables take effect.
4. Submit one test quote and check your inbox and spam folder.

**Important:** The demo collects contact data; add a tailored privacy policy and retention practices, plus proper bot protection/rate limits before public launch. The simple hidden-field spam trap is not sufficient by itself.

## 4 — Replace demo content

- `lib/site.ts` — business facts and services
- `app/page.tsx` — homepage copy and content
- `app/work/page.tsx` — replace concept visuals with real, approved client work and product photography
- `app/about/page.tsx` — final founder story
- `app/globals.css` — typography, colors, styling
- `components/Footer.tsx` — footer info

Check your legal business name and customer contact details before publishing. Domain not included or purchased.

## 5 — Recommended Phase 2

After real customer testing, consider private artwork uploads (Vercel Blob private storage with authorized client uploads), CRM/order statuses, deposit/invoice links, editable content, and a customer order-tracking dashboard. Do not publish factory costs or private supplier names.

## Current limitations

- Quote submissions are delivered to email, **not saved in a database**.
- File uploads are not present yet. Artwork is collected via an external link to avoid handling sensitive customer files incorrectly.
- No customer login, payment, shipping tracking or admin dashboard yet.
- Actual production, pricing and delivery dates require manual approval.
- You still need to configure business email, content, domain and launch security.
