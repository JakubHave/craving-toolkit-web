import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Free Preview",
  description: "Read the first pages of the Craving Toolkit free — no signup, no payment. See the emergency tools, craving strategies, and worksheets inside.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/preview",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/preview",
  },
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SiteNav />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug text-slate-900">Free Preview</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Read the first pages free — no signup, no payment. See exactly what you&rsquo;re getting.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 shadow-lg overflow-hidden bg-slate-100">
          <iframe
            src="/craving-toolkit-preview.pdf"
            className="w-full h-[70vh] min-h-[500px]"
            title="Craving Toolkit – Free Preview"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="/craving-toolkit-preview.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Download Preview PDF
          </a>
          <a
            href="https://jacobhavelka.gumroad.com/l/lqdlu"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 text-sm"
          >
            Get the Full Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <section className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What&rsquo;s inside the full guide?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The Craving Toolkit is a 40-page PDF packed with practical, science-backed strategies for the exact moments when cravings take over and willpower fails. It&rsquo;s not theory — it&rsquo;s a field manual built from over 10 years of personal recovery experience combined with modern addiction research.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The full guide covers emergency craving protocols you can use in the first 10 minutes of an urge, techniques like urge surfing and the Ulysses Contract, detailed breakdowns of different trigger types (stress, boredom, loneliness, shame), and how your specific personality style creates unique weak spots.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            You&rsquo;ll also get 6 printable worksheets: the Habit Loop Mapper, Craving Log, Cost-Benefit Check, Top 5 Addictive Lies, Slip Review, and an Emergency Craving Card to build your personal anti-craving plan.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Every strategy is grounded in research from leading addiction scientists including Anna Lembke, Judson Brewer, Marc Lewis, and Gabor Mat&eacute;. Read more about the author and the research behind the toolkit on the <Link href="/about" className="text-emerald-700 hover:underline">About page</Link>, or explore our <Link href="/articles" className="text-emerald-700 hover:underline">free recovery articles</Link> for practical strategies you can start using today.
          </p>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
