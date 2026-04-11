import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Craving Toolkit website and digital ebook. Learn how we handle your data, cookies, and payment information.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/privacy",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/privacy",
  },
};

const sections = [
  {
    title: "1. Overview",
    paragraphs: [
      "This Privacy Policy explains how information may be collected, used, and shared when you visit the Craving Toolkit website or purchase the Craving Toolkit ebook and related digital materials.",
      "This site is a simple marketing and sales website for a digital product. It does not currently provide account registration, member dashboards, or on-site contact forms.",
    ],
  },
  {
    title: "2. Information collected automatically",
    paragraphs: [
      "Like most websites, basic technical information may be collected automatically when you visit the site. This can include your IP address, browser type, device information, referring pages, and general access logs collected by the hosting provider.",
      "This information is typically used for site delivery, security, performance, and troubleshooting rather than for building detailed personal profiles.",
    ],
  },
  {
    title: "3. Purchases and checkout providers",
    paragraphs: [
      "If you buy the ebook, checkout, payment processing, taxes, and digital delivery are handled by Gumroad or Paddle or another third-party checkout provider displayed at the time of purchase.",
      "That provider may collect information such as your name, email address, billing details, payment information, country, and transaction data in accordance with its own privacy policy. Craving Toolkit does not need to receive your full payment card details directly to sell the product.",
    ],
  },
  {
    title: "4. How information may be used",
    paragraphs: [
      "Information may be used to operate the website, process purchases, deliver the digital product, prevent fraud, maintain security, comply with legal obligations, and handle support or order issues.",
      "If support is requested through a third-party checkout provider, the information you provide through that channel may be used to respond to your request and resolve the issue.",
    ],
  },
  {
    title: "5. Cookies and similar technologies",
    paragraphs: [
      "This website does not currently use a custom analytics or advertising stack. However, the hosting platform or third-party checkout provider may use cookies or similar technologies that are necessary for site delivery, fraud prevention, checkout, or service functionality.",
      "If you interact with third-party services linked from this site, their cookie and privacy practices will apply to your use of those services.",
    ],
  },
  {
    title: "6. Sharing of information",
    paragraphs: [
      "Information may be shared with service providers involved in hosting, checkout, payment processing, tax handling, fraud prevention, and digital delivery when needed to operate the website and fulfill purchases.",
      "Information may also be disclosed if required by law, legal process, or to protect rights, safety, and security.",
    ],
  },
  {
    title: "7. Data retention",
    paragraphs: [
      "Information is generally retained only as long as reasonably necessary for the purposes described in this policy, including order fulfillment, recordkeeping, dispute handling, legal compliance, and security.",
      "Retention periods may vary depending on the hosting provider, checkout provider, and applicable legal obligations.",
    ],
  },
  {
    title: "8. International processing",
    paragraphs: [
      "The website, hosting provider, or checkout provider may process or store information in countries other than your own. By using the site or purchasing the product, you understand that information may be processed where those providers operate.",
      "If you want details about a third-party provider's data location or transfer practices, review that provider's own privacy documentation.",
    ],
  },
  {
    title: "9. Your rights",
    paragraphs: [
      "Depending on your location, you may have rights relating to access, correction, deletion, restriction, objection, or data portability with respect to personal information processed about you.",
      "If your purchase was processed through a third-party checkout platform, some requests may need to be directed to that provider because it controls key purchase and payment records.",
    ],
  },
  {
    title: "10. Children's privacy",
    paragraphs: [
      "This website and product are not intended for children, and the site is not designed to knowingly collect personal information directly from children.",
      "If you believe personal information from a child has been collected improperly through a connected service, the relevant provider should be contacted promptly.",
    ],
  },
  {
    title: "11. Changes to this policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time. The most current version will be posted on this page with the updated effective date.",
      "Continuing to use the website after changes are posted means you accept the updated policy.",
    ],
  },
  {
    title: "12. Contact",
    paragraphs: [
      "For questions about a purchase, delivery issue, or request connected to your order, you can email jacob@cravingtoolkit.com or use the contact route provided by the checkout platform or in your purchase confirmation.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">
            Craving Toolkit
          </Link>
          <div className="flex gap-6">
            <Link
              href="/articles"
              className="text-base font-semibold text-slate-700 hover:text-emerald-700 transition"
            >
              Articles
            </Link>
            <Link
              href="/calculators"
              className="text-base font-semibold text-slate-700 hover:text-emerald-700 transition"
            >
              Calculators
            </Link>
            <Link
              href="/#pricing"
              className="hidden sm:inline-block text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              Get the Guide
            </Link>
          </div>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          This policy explains what information may be collected through the website and
          third-party checkout flow, and how that information may be used.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Last updated March 21, 2026
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 md:p-10 mb-10 shadow-xl shadow-emerald-950/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-emerald-100 mb-6">
            <Link href="/terms" className="hover:text-white transition">
              Guide Terms of Service
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Guide Privacy Policy</span>
          </div>
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

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-base">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            <strong>Disclaimer:</strong> This guide is educational and based on lived experience and modern addiction science. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <Link href="/terms" className="text-slate-300 hover:text-white transition">Guide Terms of Service</Link>
            <span aria-hidden="true" className="text-slate-500">/</span>
            <Link href="/privacy" className="text-slate-300 hover:text-white transition">Guide Privacy Policy</Link>
            <span aria-hidden="true" className="text-slate-500">/</span>
            <Link href="/app-terms" className="text-slate-300 hover:text-white transition">App Terms of Use</Link>
            <span aria-hidden="true" className="text-slate-500">/</span>
            <Link href="/app-privacy" className="text-slate-300 hover:text-white transition">App Privacy Policy</Link>
          </div>
          <p className="mb-4">Contact: <a href="mailto:jacob@cravingtoolkit.com" className="text-slate-300 hover:text-white transition">jacob@cravingtoolkit.com</a></p>
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
