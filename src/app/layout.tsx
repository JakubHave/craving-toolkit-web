import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const siteUrl = "https://cravingtoolkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Craving Toolkit | Practical Tools to Stop Cravings and Stay in Recovery",
    template: "%s | Craving Toolkit",
  },
  description: "A practical, experience-based guide with emergency tools to fight addiction cravings, stop relapse spirals, and stay in recovery. 40-page PDF with actionable strategies and worksheets for managing urges from alcohol, drugs, overeating, and compulsive behaviors.",
  keywords: [
    "addiction recovery tools",
    "how to stop cravings",
    "craving management",
    "relapse prevention",
    "addiction urge help",
    "stop relapse spiral",
    "addiction recovery guide",
    "craving toolkit",
    "fight addiction urges",
    "sobriety tools",
    "addiction worksheets",
    "how to resist cravings",
    "compulsive behavior help",
    "urge surfing",
    "addiction emergency plan",
  ],
  authors: [{ name: "Craving Toolkit" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Craving Toolkit",
    title: "Craving Toolkit | Practical Tools to Stop Cravings and Stay in Recovery",
    description: "A practical, experience-based guide with emergency tools to fight addiction cravings, stop relapse spirals, and stay in recovery. 40-page PDF with actionable strategies and worksheets.",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Craving Toolkit – Practical addiction recovery guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craving Toolkit | Practical Tools to Stop Cravings and Stay in Recovery",
    description: "Emergency tools to fight addiction cravings, stop relapse spirals, and stay in recovery. A 40-page experience-based guide with worksheets.",
    images: ["/cover.jpg"],
    creator: "@JacobHavelka",
    site: "@JacobHavelka",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cravingtoolkit.com/#organization",
  name: "Craving Toolkit",
  url: "https://cravingtoolkit.com",
  logo: {
    "@type": "ImageObject",
    url: "https://cravingtoolkit.com/icon-512.png",
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://x.com/JacobHavelka",
    "https://www.instagram.com/havelkajacob/",
  ],
  description: "Practical tools for addiction recovery — emergency craving protocols, daily practices, and worksheets grounded in modern addiction science.",
  foundingDate: "2025",
  publishingPrinciples: "https://cravingtoolkit.com/editorial-policy",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "jacob@cravingtoolkit.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://gumroad.com" />
        <link rel="dns-prefetch" href="https://gumroad.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} font-sans`}>{children}<Analytics /></body>
    </html>
  );
}
