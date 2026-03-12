import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craving Toolkit | Practical Tools to Stop Cravings & Stay in Recovery",
  description: "A short, experience-based guide for people dealing with addiction urges, compulsive behavior, and relapse momentum. Learn exactly what to do in the first 10 minutes of a craving.",
  keywords: [
    "addiction recovery", 
    "stop cravings", 
    "manage urges", 
    "relapse prevention", 
    "compulsive behavior tools", 
    "overeating recovery", 
    "alcohol addiction help",
    "dopamine reset",
    "habit loop interruption"
  ],
  authors: [{ name: "Craving Toolkit" }],
  openGraph: {
    title: "Craving Toolkit | Stop Cravings & Stay in Recovery",
    description: "Practical tools to fight cravings, stop spirals, and stay in recovery. Based on lived experience and modern addiction science.",
    url: "https://cravingtoolkit.com",
    siteName: "Craving Toolkit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craving Toolkit | Stop Cravings & Stay in Recovery",
    description: "Practical tools to fight cravings, stop spirals, and stay in recovery. Based on lived experience and modern addiction science.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
