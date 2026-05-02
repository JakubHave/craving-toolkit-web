import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the Craving Toolkit website and digital ebook. Read our policies on purchases, refunds, and acceptable use.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/terms",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/terms",
  },
};

const sections = [
  {
    title: "1. Acceptance of these terms",
    paragraphs: [
      "By accessing this website, purchasing the Craving Toolkit ebook, or using any related content, you agree to these Terms of Service. If you do not agree, do not use the site or purchase the product.",
      "These terms apply to the website, the ebook, any included worksheets, and related digital materials made available through the Craving Toolkit storefront.",
    ],
  },
  {
    title: "2. Product description",
    paragraphs: [
      "Craving Toolkit is a digital educational product focused on addiction recovery, craving management, and relapse prevention. It is sold as downloadable content and may be updated over time.",
      "The product is intended for personal use only. Purchasing the ebook gives you a limited, non-exclusive, non-transferable license to download and use it for your own private use.",
    ],
  },
  {
    title: "3. Orders, payments, and delivery",
    paragraphs: [
      "Checkout, payment processing, taxes, and digital delivery are handled through Gumroad or Paddle or another checkout platform shown at the time of purchase.",
      "By completing a purchase, you also agree to the applicable terms, policies, and checkout requirements of that third-party platform.",
    ],
  },
  {
    title: "4. Acceptable use and license limits",
    paragraphs: [
      "You may not resell, redistribute, upload, publicly share, sublicense, or commercially exploit the ebook or related materials without prior written permission.",
      "You may not remove ownership notices, copy substantial parts into another product, or use the content in a way that is misleading, unlawful, or harmful to others.",
    ],
  },
  {
    title: "5. Educational use only",
    paragraphs: [
      "Craving Toolkit is educational and informational. It is based on lived experience, recovery reading, and practical treatment frameworks. It is not medical advice and is not a substitute for professional treatment, therapy, detox, diagnosis, or emergency support.",
      "If you are in immediate danger, experiencing severe withdrawal, at risk of overdose, or may harm yourself or someone else, seek emergency help or contact local emergency services immediately.",
    ],
  },
  {
    title: "6. No guarantee of outcomes",
    paragraphs: [
      "Recovery outcomes vary from person to person. We do not promise that using this website or ebook will produce any specific medical, psychological, behavioral, or financial result.",
      "Any examples, frameworks, or strategies are provided for general educational use and must be applied with personal judgment and, where appropriate, professional support.",
    ],
  },
  {
    title: "7. Refunds",
    paragraphs: [
      "If you are not satisfied with your purchase, you may request a full refund within 30 days of the original purchase date — no questions asked. Refund requests are handled through the checkout platform used at the time of purchase.",
      "Refunds will be processed through the original payment method. After the 30-day window, sales are final unless otherwise required by applicable law.",
    ],
  },
  {
    title: "8. Intellectual property",
    paragraphs: [
      "The website content, ebook text, worksheets, branding, and related materials are owned by Craving Toolkit or used with permission and are protected by applicable intellectual property laws.",
      "No ownership rights are transferred to you by purchasing or downloading the ebook.",
    ],
  },
  {
    title: "9. Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by law, Craving Toolkit will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website or the digital product.",
      "Nothing in these terms limits rights that cannot be waived under applicable consumer protection law.",
    ],
  },
  {
    title: "10. Third-party links and services",
    paragraphs: [
      "This website may link to third-party services, including checkout providers and external resources. We are not responsible for the content, availability, or policies of third-party sites or services.",
      "Your use of those services is governed by their own terms and policies.",
    ],
  },
  {
    title: "11. Changes to these terms",
    paragraphs: [
      "We may update these Terms of Service from time to time. The most current version will be posted on this page with the updated effective date.",
      "Continuing to use the website after changes are posted means you accept the revised terms.",
    ],
  },
  {
    title: "12. Contact",
    paragraphs: [
      "For support relating to your purchase, delivery, or access issues, you can email jacob@cravingtoolkit.com or use the contact route provided on the checkout page or in your purchase receipt.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SiteNav />

      <header className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <FileText className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          These terms govern use of the Craving Toolkit website and the purchase and use
          of the Craving Toolkit ebook and related digital materials.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Last updated March 21, 2026
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 md:p-10 mb-10 shadow-xl shadow-emerald-950/10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-emerald-100 mb-6">
            <span className="text-white">Guide Terms of Service</span>
            <span aria-hidden="true">/</span>
            <Link href="/privacy" className="hover:text-white transition">Guide Privacy Policy</Link>
          </div>
          <p className="text-lg leading-relaxed text-emerald-100">
            Please read these terms carefully before using the site or purchasing the
            ebook. They are designed to clarify how the product may be used and what it
            does and does not provide.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-5">{section.title}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
