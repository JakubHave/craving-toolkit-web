import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Author",
  description: "Jakub Havelka — software engineer with 10+ years of personal recovery experience. Author of the Craving Toolkit, a practical guide to fighting addiction cravings.",
  alternates: {
    canonical: "https://cravingtoolkit.com/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://cravingtoolkit.com/about#author",
  name: "Jakub Havelka",
  url: "https://cravingtoolkit.com/about",
  description: "Software engineer, 10+ years in recovery, author of the Craving Toolkit",
  knowsAbout: [
    "addiction recovery",
    "craving management",
    "dopamine and addiction",
    "habit formation",
    "behavioral addiction",
    "mindfulness-based relapse prevention",
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
        <nav aria-label="Main navigation" className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
            <div className="flex gap-6">
              <Link href="/articles" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Articles</Link>
              <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            About the Author
          </h1>

          <div className="prose prose-lg prose-emerald max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              My name is Jakub Havelka. I&rsquo;m a software engineer based in Europe, and I&rsquo;ve been in recovery for over 10 years.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">My story</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I struggled with alcohol, drugs, smoking, overeating, self-harm, depression, and anxiety. I spent years in treatment, rehab, and psychotherapy. I know what it feels like when cravings take over and logic disappears. I know the shame spiral, the relapses, the feeling that nothing will ever change.
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
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Questions, feedback, or corrections: <a href="mailto:jacob@cravingtoolkit.com" className="text-emerald-700 hover:underline">jacob@cravingtoolkit.com</a>
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#pricing"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition shadow-lg"
            >
              Get the Craving Toolkit
            </Link>
          </div>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
          <div className="max-w-4xl mx-auto px-6">
            <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
