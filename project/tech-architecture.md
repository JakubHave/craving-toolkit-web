# Tech Architecture

## Goal
Build a simple, trustworthy product site that sells a PDF and optionally an audiobook, with Stripe payments and automatic fulfillment.

## Recommended Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Stripe Checkout
- Vercel for deployment

## V1 Principle
Keep V1 simple. The main job is to validate demand and make delivery reliable.

## Simplest Implementation Path
### Option A: Ultra-Lean Server-Side Verification
- static Next.js landing page
- Stripe Checkout session
- success redirect with secure server-side verification (`/download?session_id=...`)
- No external email service (Stripe handles receipt, website handles instant download)
- No user accounts or database needed for V1

Pros:
- fastest to ship
- fewest moving parts (zero cost beyond domain)
- no email deliverability headaches

## Core Pages
- `/` landing page
- `/success` (payment success page, verifies Stripe session and serves PDF)
- `/privacy`
- `/terms`

## Stripe Flow
1. user clicks buy
2. redirect to Stripe Checkout
3. user pays
4. Stripe redirects user to `/success?session_id=cs_live_...`
5. Next.js server securely calls Stripe API to verify the `session_id` is paid
6. If paid, page renders the "Download PDF" button or directly serves the file.
7. Stripe automatically emails the receipt (which we can configure to include the same success link).

## File Delivery Options
### Option 1: Signed storage URLs
- store PDF/audio in private bucket
- generate time-limited signed URL after verified purchase

### Option 2: App-mediated download
- customer hits tokenized route
- server verifies token
- streams file or redirects to signed URL

Recommended: app-mediated token route that issues signed URLs.

## Email Flow
Use Resend to send:
- purchase confirmation
- download link
- support / contact line
- disclaimer note

## Useful Analytics
- page views
- checkout clicks
- completed purchases
- conversion rate
- source attribution if possible

You can start with Plausible, PostHog, or even just basic Vercel analytics.

## Trust / Conversion Elements
- author story and credibility
- clear disclaimer
- money-back policy if you want lower friction
- sample pages or preview section
- FAQ
- plain design, not scammy marketing vibes

## Security / Anti-Abuse
- private file storage
- signed download tokens
- webhook signature verification
- rate limit download endpoints if needed
- do not expose raw permanent asset URLs publicly

## Future Expansions
- audiobook streaming access
- worksheets bundle
- email sequence
- affiliate / referral tracking
- multilingual versions
- admin dashboard for purchases and fulfillment
- testimonials and case studies

## Suggested Build Order
1. landing page copy and design
2. Stripe product + checkout
3. success page
4. webhook fulfillment
5. email delivery
6. secure download route
7. analytics + legal pages
