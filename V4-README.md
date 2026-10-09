# CRÈME V4 — Corporate Client Experience

Prepared for the existing `cremegarments/Best-Tshirts` repository. Applies **on top of the working V3 website**.

## Immediately available after deployment (using existing Resend variables)
- Branded HTML owner inquiry notifications, with reference IDs and proper HTML escaping.
- Corporate RFQ submission remains compatible with current Resend settings.
- One small attachment per request (PDF/JPG/PNG; max 2MB), delivered as an email attachment. No public links or storage.
- Updated mobile form text/field layout and cleaner upload controls.
- Dedicated repeat order path: `/corporate/request?need=repeat`, including prior invoice/order reference.
- Corporate page "Reorder products" link.

## Optional features that must be configured before they work
**Private RFQ management dashboard**: `/admin/requests`. It will not show any customer data until its credentials and separate Redis store are configured.

Use Upstash Redis (or another API-compatible Upstash REST Redis instance) for private server-only request records. Add to Vercel > creme-product > Settings > Environment Variables > Production:

- `UPSTASH_REDIS_REST_URL` = your Redis REST URL (Secret)
- `UPSTASH_REDIS_REST_TOKEN` = your Redis REST token (Secret)
- `RFQ_ADMIN_PASSWORD` = a unique strong password, **at least 20 characters** (Secret)
- `RFQ_SESSION_SECRET` = a randomly generated, unique secret **at least 32 characters** (Secret)

Do not send any of these credentials to anyone or include them in screenshots. Never use `NEXT_PUBLIC_` for secrets. After adding variables, redeploy.

Owner dashboard: open `https://cremeky.com/admin/requests`, sign in with the password set above, then review and update inquiry statuses. Only requests **submitted after enabling storage** will be listed. Emails remain the primary source if Redis fails. Records expire after 180 days. Dashboard shows only the 200 most recent records, and the index holds up to 500.

**Automatic customer email acknowledgment**: optional, off by default to reduce spam abuse. Once Redis request rate limiting is configured, add `QUOTE_AUTO_REPLY` = `true` (Config, Production), redeploy, and send a real test. The existing owner email works regardless. Abuse protections should be strengthened with a CAPTCHA/WAF before promoting publicly to a large audience.

## Installation via iPhone (same workflow as V3)
1. Upload `creme-v4-upgrade.zip` to root of `cremegarments/Best-Tshirts` on `main` using GitHub > Add file > Upload files. Do not unzip on the iPhone.
2. Upload `install-creme-v4.yml` inside `.github/workflows` (NOT in the repository root).
3. Open `https://github.com/cremegarments/Best-Tshirts/actions/workflows/install-creme-v4.yml`, select `Run workflow` > `main` > `Run workflow`.
4. Wait for green Success. Then confirm Vercel Production deployment `Ready` on commit created by the workflow.
5. Test a small corporate RFQ and read the owner notification. Also test `/corporate/request?need=repeat` and a **non-sensitive** small PDF/image attachment. If using auto acknowledgments, confirm the buyer test email arrives.

Only install once, and **do not rerun the old V2 or V3 website installers afterward**. The installation workflow checks required files, overlays only the V4 source paths, and then commits them. It deliberately doesn't touch Wix DNS, existing email keys, or historical quotes.

## Data/security notes
- Files are submitted through Vercel to Resend by email, **not uploaded to public cloud storage**, and they aren't indexed by the dashboard; the dashboard lists their filenames only.
- Do not request sensitive personal/financial credentials in RFQs. Handle supplied customer files carefully, and scan unexpected attachments before opening.
- Redis, if enabled, holds RFQ contact details and project requirements for 180 days. Handle this data according to your privacy obligations and maintain restricted access to Vercel/Redis accounts.
- Production hardening still recommended: WAF/CAPTCHA, monitoring, backups/exports and stricter vendor data processing controls. No online checkout, client login, ERP, or shipping tracking is provided.
- The working site in Vercel remains unchanged until you explicitly run the installer and Vercel successfully deploys.
