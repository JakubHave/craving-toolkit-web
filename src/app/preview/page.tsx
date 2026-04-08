import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Preview",
  description: "Read the first pages of the Craving Toolkit free — no signup, no payment. See the emergency tools, craving strategies, and worksheets inside.",
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
          <a href="https://jacobhavelka.gumroad.com/l/lqdlu" target="_blank" rel="nofollow noopener noreferrer" className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-colors">
            Get the Full Guide
          </a>
        </div>
      </nav>

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
      </div>
    </div>
  );
}
