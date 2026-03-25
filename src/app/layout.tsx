import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
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
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
