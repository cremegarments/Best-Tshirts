# CRÈME Products — Corporate & Global Sourcing v2

This ZIP contains the full site and updates your existing CRÈME Vercel project when extracted into the GitHub repository root. Keep the existing domain, Vercel project and design.

## What's new
- Refined B2B homepage: corporate merchandise, custom production, global sourcing
- `/corporate`: product programs and buyer audiences
- `/sourcing`: sourcing categories, feasibility guidance and detailed sourcing inquiry form
- `/procurement`: RFQ workflow, quoting and onboarding information
- Expanded `/quote` with target budgets in KYD and delivery area
- Updated email endpoint handles sourcing-specific fields
- Mobile navigation, metadata, styling, services and positioning refreshed
- Previous `process` TypeScript collision fixed using `globalThis.process` in `lib/site.ts`

## Updating the existing GitHub + Vercel project **on your iPhone**
1. Download the included ZIP named `creme-vercel-starter.zip`. **Do not extract this ZIP for the GitHub upload.**
2. Go to your existing `cremegarments/Best-Tshirts` GitHub repository, on the Code tab.
3. Tap Add file / Upload files; select the new ZIP and commit to `main`.
4. Go to Actions > Install CREME Website > Run workflow > `main` > Run workflow.
5. After it reports Success, Vercel automatically rebuilds the connected project.

**Why this works:** the existing workflow retrieves the most recent added file named `creme-vercel-starter.zip` from git history, unpacks its inner `creme-vercel-starter/` folder into the repository and commits the new files. Do not change the ZIP filename or internal folder name. If your phone adds `(1)` to the filename, rename it first.

## Before accepting real customer requests
- Quote delivery uses Resend and requires `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, `QUOTE_TO_EMAIL`, `NEXT_PUBLIC_CONTACT_EMAIL` in Vercel environment settings. Without these, the form returns an error and **does not send an inquiry**.
- Add a tailored privacy policy, retention policy and anti-spam/rate limiting before sending traffic to the form.
- Replace demo concept illustrations with approved real project imagery.
- Confirm all business claims, company contact info and legal terms, shipping arrangements, lead times and landed-price components.
- Keep supplier costs, private partner identities, margins and credentials out of public source code.

## Testing
`npm install && npm run build` from this directory with Node.js >=20.9.
