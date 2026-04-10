import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Craving Toolkit articles are created, fact-checked, and maintained. Our standards for sources, accuracy, and medical disclaimers.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/editorial-policy",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
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
          Editorial Policy
        </h1>

        <div className="prose prose-lg prose-emerald max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Craving Toolkit publishes educational content about addiction recovery. Because this is a health-related topic, we hold ourselves to high standards of accuracy and transparency.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Content creation</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            All articles are written by <Link href="/about" className="text-emerald-700 hover:underline">Jakub Havelka</Link>, drawing on over a decade of personal recovery experience and extensive reading of peer-reviewed addiction research. Articles combine lived experience with findings from published scientific literature to provide practical, evidence-informed guidance.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Source standards</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We cite the following types of sources:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
            <li>Peer-reviewed journal articles indexed in PubMed</li>
            <li>Government health agencies (NIDA, SAMHSA, NIH)</li>
            <li>Published books by credentialed researchers and clinicians</li>
            <li>Recognized medical organizations and treatment bodies</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Each article includes a Sources section listing the specific studies, books, and references used. Where possible, we link directly to PubMed entries or official publications.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Fact-checking</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            All statistical claims are verified against original sources. Study author names, publication years, and specific findings are cross-referenced with the cited papers. When research findings are nuanced or contested, we note the limitations and avoid presenting preliminary results as established fact.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Medical disclaimer</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            All content on this site is educational. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support. The author is not a licensed therapist or physician. Readers should always consult a qualified healthcare professional for medical decisions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Every article includes a visible medical disclaimer linking to <a href="https://www.samhsa.gov/find-help/national-helpline" className="text-emerald-700 hover:underline" rel="noopener" target="_blank">SAMHSA&rsquo;s National Helpline</a> (1-800-662-4357) for anyone who needs immediate help.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">Updates and corrections</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Articles are reviewed periodically for accuracy. When substantive updates are made, the article&rsquo;s &ldquo;Updated&rdquo; date is changed to reflect the modification. We do not update dates for minor formatting or typographical fixes.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you find an error in any article, please contact us at <a href="mailto:jacob@cravingtoolkit.com" className="text-emerald-700 hover:underline">jacob@cravingtoolkit.com</a>. Corrections are made promptly.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">AI disclosure</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            AI tools may be used to assist with drafting, research organization, and editing. All content is reviewed, fact-checked, and approved by the author before publication. The author takes full responsibility for the accuracy and quality of all published material.
          </p>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
