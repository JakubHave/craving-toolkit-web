# Tech Architecture

## Goal
Build a simple, trustworthy product site that sells a PDF and optionally an audiobook, with automatic global tax compliance and fulfillment.

## Recommended Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel or Cloudflare Pages for free deployment
- **Gumroad or Lemon Squeezy** (Merchant of Record for payments, VAT, and file delivery)

## V1 Principle
Keep V1 simple. The main job is to validate demand, make delivery reliable, and eliminate legal/tax overhead.

## Simplest Implementation Path
### The MoR (Merchant of Record) Approach
- static Next.js landing page
- "Buy Now" button links directly to Gumroad/Lemon Squeezy checkout
- Gumroad handles VAT calculation, global tax compliance, and payment processing
- Gumroad handles secure PDF delivery via email and success page
- Payouts sent cleanly to Slovak bank account in EUR

Pros:
- fastest to ship
- fewest moving parts (zero backend code required)
- 100% tax compliant globally (US sales tax, EU VAT) handled automatically
- easy accounting (one monthly payout under Slovak Copyright Act / Autorský zákon)

## Core Pages
- `/` landing page (redirects to MoR for checkout)

## Checkout Flow
1. user clicks buy on Next.js site
2. user is taken to Gumroad/Lemon Squeezy checkout page
3. user pays
4. Gumroad automatically emails the receipt and secure download link
