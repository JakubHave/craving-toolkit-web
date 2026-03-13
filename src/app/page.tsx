import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      <nav className="border-b border-emerald-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-emerald-900 font-serif">Craving Toolkit</Link>
          <div className="flex gap-8 items-center">
            <Link href="/articles" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition">Free Articles</Link>
            <Link href="/#pricing" className="bg-emerald-900 text-emerald-50 px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition shadow-sm">Get the Guide</Link>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white pt-20 pb-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200 shadow-sm">
              Launch Special: Now €19
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] font-serif">
              Practical tools to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800">stop spirals.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              A short, experience-based field manual for people dealing with addiction urges and the dangerous window between craving and action.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/#pricing" className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-900 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                Get the PDF Guide <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-500 flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant PDF download.
            </p>
          </div>
          
          <div className="relative mx-auto w-full max-w-md perspective-1000">
            <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <img 
                src="/cover.jpg" 
                alt="Craving Toolkit Book Cover" 
                className="w-full rounded-r-2xl rounded-l-md shadow-2xl border-l-[12px] border-emerald-950/20"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif text-slate-900">When cravings hit, most advice is useless.</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              People say things like "just stay strong" but in a real craving spiral, logic disappears.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The First 10 Minutes", desc: "Know exactly what to do in the immediate window of an urge." },
              { title: "Handle Every Trigger", desc: "Specific frameworks for stress, loneliness, shame, and boredom." },
              { title: "Stop the Spiral", desc: "How to recover quickly after a slip instead of letting the \"screw it\" mentality take over." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-slate-900">Get the Craving Toolkit</h2>
            <p className="text-xl text-slate-600">You do not need perfect motivation.</p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-200 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-600"></div>
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">The Complete Guide</h3>
              <p className="text-slate-500 mb-8">Everything you need to interrupt the spiral.</p>
              
              <div className="mb-2 flex items-baseline gap-3">
                <span className="text-6xl font-extrabold text-slate-900 tracking-tight">€19</span>
                <span className="text-2xl font-bold text-slate-400 line-through">€24</span>
              </div>
              <div className="mb-8">
                <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wide">New Release Special</span>
              </div>

              <Link 
                href="https://jakubhaven.gumroad.com/l/lqdlu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white rounded-xl py-4 font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-slate-200"
              >
                Buy Now & Download <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-sm text-slate-400 mt-4 font-medium">Secure payment via Gumroad.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-16 text-center text-sm border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-6 leading-relaxed max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> This guide is educational and based on lived experience. Not medical advice.
          </p>
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
