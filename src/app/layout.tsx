import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const siteUrl = "https://www.cravingtoolkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Craving Toolkit | Stop Cravings & Stay in Recovery",
    template: "%s | Craving Toolkit",
  },
  description: "Practical recovery tools for the moment cravings take over. A free, offline mobile app and a 40-page guide with emergency strategies, urge surfing, and worksheets.",
  keywords: [
    "craving toolkit",
    "addiction recovery app",
    "recovery tools",
    "how to stop cravings",
    "craving management",
    "relapse prevention",
    "addiction urge help",
    "urge surfing",
    "stop relapse spiral",
    "addiction recovery guide",
    "fight addiction urges",
    "sobriety tools",
    "addiction worksheets",
    "compulsive behavior help",
    "addiction emergency plan",
    "offline recovery app",
  ],
  authors: [{ name: "Craving Toolkit" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Craving Toolkit",
    title: "Craving Toolkit | Stop Cravings & Stay in Recovery",
    description: "Practical recovery tools for the moment cravings take over. A free, offline mobile app and a 40-page guide with emergency strategies and worksheets.",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Craving Toolkit — recovery tools for the moment cravings take over",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craving Toolkit | Stop Cravings & Stay in Recovery",
    description: "Practical recovery tools for the moment cravings take over. A free, offline mobile app and a 40-page guide with emergency strategies and worksheets.",
    images: ["/cover.jpg"],
    creator: "@cravingtoolkit",
    site: "@cravingtoolkit",
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
  "@id": "https://www.cravingtoolkit.com/#organization",
  name: "Craving Toolkit",
  url: "https://www.cravingtoolkit.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.cravingtoolkit.com/icon-512.png",
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://x.com/cravingtoolkit",
    "https://www.instagram.com/craving.toolkit/",
  ],
  description: "Practical recovery tools for the moment cravings take over — a free offline mobile app and a 40-page guide with emergency protocols, urge surfing, daily practices, and worksheets grounded in modern addiction science.",
  foundingDate: "2025",
  founder: { "@id": "https://www.cravingtoolkit.com/about#author" },
  publishingPrinciples: "https://www.cravingtoolkit.com/editorial-policy",
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
