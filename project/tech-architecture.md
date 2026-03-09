# Tech Architecture

## Goal
Build a simple, trustworthy product site that sells a PDF and optionally an audiobook, with Stripe payments and automatic fulfillment.

## Recommended Stack
- Next.js
- TypeScript
- Tailwind CSS
- Stripe Checkout
- Stripe Webhooks
- Postgres via Supabase or Neon (optional for V1)
- Resend for transactional email
- Object storage for downloadable files
- Vercel for deployment

## V1 Principle
Keep V1 simple. The main job is to validate demand and make delivery reliable.

## V1 Functional Requirements
- landing page
- product page / checkout CTA
- Stripe payment flow
- success page
- automatic delivery of PDF after payment
- optional email with download link
- simple analytics
- legal pages: terms, privacy, disclaimer

## Simplest Implementation Path
### Option A: Very Lean
- static Next.js site
- Stripe payment link or hosted Checkout
- success redirect with signed download link
- webhook sends email with delivery link
- no user accounts

Pros:
- fastest to ship
- fewer moving parts

Cons:
- less flexible later

### Option B: Slightly More Structured
- Next.js app router
- Stripe Checkout session
- webhook stores purchase record in DB
- email delivery + protected download route

Pros:
- better audit trail
- easier to expand later

Cons:
- slightly more setup

## Recommended Choice
Start with **Option B** if you want a clean engineering foundation without overbuilding.

## Core Pages
- `/` landing page
- `/buy` or checkout CTA section on homepage
- `/success` payment success page
- `/download/[token]` secure-ish file delivery route
- `/privacy`
- `/terms`
- `/disclaimer`

## Data Model (Optional V1 DB)
### purchases
- id
- stripe_session_id
- stripe_customer_email
- product_type
- amount
- currency
- status
- created_at

### download_tokens
- id
- purchase_id
- token
- expires_at
- download_count
- created_at

## Stripe Flow
1. user clicks buy
2. create Stripe Checkout session
3. user pays
4. Stripe webhook confirms checkout completion
5. system stores purchase record
6. system creates download token
7. system emails customer the download link
8. success page also shows access instructions

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
