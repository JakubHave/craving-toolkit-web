import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About the Author",
  description: "Jakub Havelka — software engineer with 10+ years of personal recovery experience. Author of the Craving Toolkit, a practical guide to fighting cravings.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/about",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.cravingtoolkit.com/about#author",
  name: "Jakub Havelka",
  url: "https://www.cravingtoolkit.com/about",
  description: "Software engineer, 10+ years in recovery, author of the Craving Toolkit",
  knowsAbout: [
    "addiction recovery",
    "craving management",
    "dopamine and addiction",
    "habit formation",
    "behavioral addiction",
    "mindfulness-based relapse prevention",
  ],
  sameAs: [
    "https://x.com/cravingtoolkit",
    "https://www.instagram.com/craving.toolkit/",
  ],
  jobTitle: "Software Engineer & Recovery Toolkit Creator",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <SiteNav />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <Image
            src="/jakub.jpg"
            alt="Jakub Havelka"
            width={200}
            height={200}
            className="rounded-full mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            About the Author
          </h1>

          <div className="prose prose-lg prose-emerald max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              My name is Jakub Havelka. I&rsquo;m a software engineer based in Europe, and I&rsquo;ve been in recovery for over 10 years.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">My story</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I struggled with alcohol, drugs, smoking, overeating, depression, and anxiety. I spent years in treatment, rehab, and psychotherapy. I know what it feels like when cravings take over and logic disappears. I know the shame spiral, the relapses, the feeling that nothing will ever change.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Today, I live a stable and fulfilling life. Not because I found a magic formula, but because I eventually found tools and frameworks that actually worked in the moments when willpower didn&rsquo;t. That&rsquo;s what the Craving Toolkit is — the distillation of everything that helped, organized for the exact moments when you need it most.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">What I am (and what I&rsquo;m not)</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>I am:</strong> A person in long-term recovery. A software engineer who builds recovery tools. Self-taught in addiction neuroscience through years of reading peer-reviewed research and the work of leading addiction scientists.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>I am not:</strong> A licensed therapist, a physician, or a certified addiction counselor. The Craving Toolkit is educational, not clinical. It&rsquo;s based on lived experience and modern addiction science — not on a medical license.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              If you need professional treatment, please seek it. This toolkit is a complement to professional care, not a replacement.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">The research behind the Toolkit</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The Craving Toolkit draws on the work of researchers and clinicians who have shaped modern understanding of addiction:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
              <li><strong>Anna Lembke</strong> — Stanford addiction medicine chief, author of <em>Dopamine Nation</em></li>
              <li><strong>Marc Lewis</strong> — neuroscientist and recovered addict, author of <em>The Biology of Desire</em></li>
              <li><strong>Judson Brewer</strong> — Brown University psychiatrist, author of <em>The Craving Mind</em></li>
              <li><strong>Gabor Mat&eacute;</strong> — physician, author of <em>In the Realm of Hungry Ghosts</em></li>
              <li><strong>Charles Duhigg</strong> — journalist, author of <em>The Power of Habit</em></li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Every claim in the articles and the guide is grounded in peer-reviewed research or the published work of these experts. You can read more about how content is created in our{" "}
              <Link href="/editorial-policy" className="text-emerald-700 hover:underline">editorial policy</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Contact</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Questions, feedback, or corrections: <a href="mailto:jacob@cravingtoolkit.com" className="text-emerald-700 hover:underline">jacob@cravingtoolkit.com</a>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-3">
              Follow my recovery and tech journey:
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://x.com/cravingtoolkit"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @cravingtoolkit
              </a>
              <a
                href="https://www.instagram.com/craving.toolkit/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @craving.toolkit
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/guide#pricing"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition shadow-lg"
            >
              Get the Craving Toolkit Guide
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
