import { CheckCircle2, ArrowRight, Shield, BookOpen, Headphones } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</div>
          <a href="#pricing" className="text-base font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Practical tools to fight cravings, <br className="hidden md:block" />
          <span className="text-emerald-600">stop spirals, and stay in recovery.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A short, experience-based guide for people dealing with addiction urges, compulsive behavior, and relapse momentum.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center gap-2">
            Get the guide <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-4 text-base text-slate-500">Instant PDF download. Secure checkout via Gumroad.</p>
      </header>

      {/* Problem Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">When cravings hit, most advice is useless.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                People say things like "just stay strong" or "focus on your goals." But in a real craving spiral, that often isn't enough. Logic disappears, and old patterns take over.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                What people need is something practical for the exact moment the brain stops feeling trustworthy.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-xl mb-4">This guide helps you:</h3>
              <ul className="space-y-3">
                {[
                  "Know what to do in the first 5 minutes",
                  "Interrupt the routine before relapse happens",
                  "Handle stress, loneliness, shame, and boredom",
                  "Recover quickly after a slip instead of giving up"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-emerald-900 text-emerald-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Shield className="w-12 h-12 mx-auto mb-6 text-emerald-400 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">I'm not writing this from theory alone.</h2>
          <p className="text-xl leading-relaxed text-emerald-100 mb-6">
            I've lived through addiction, treatment, relapse patterns, shame, and the long work of recovery. I struggled with overeating, alcohol, and drugs, and I've now been clean for over 10 years.
          </p>
          <p className="text-xl leading-relaxed text-emerald-100">
            This guide is my attempt to share the practical tools that actually help when cravings hit — integrating lived experience with the best modern addiction science.
          </p>
        </div>
      </section>

      {/* Pricing / Product Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get the Craving Toolkit</h2>
            <p className="text-xl text-slate-600">You do not need perfect motivation to start. You just need better tools.</p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">The Complete Guide</h3>
              <p className="text-slate-500 mb-6">Everything you need to interrupt the spiral.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">€24</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700"><BookOpen className="w-5 h-5 text-emerald-500" /> Instant PDF Download</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Short, actionable chapters</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Practical emergency exercises</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Personal anti-craving plan templates</li>
              </ul>

              <a 
                href="https://gumroad.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 text-white rounded-xl py-4 font-bold text-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
              >
                Buy Now & Download
              </a>
              <p className="text-center text-base text-slate-400 mt-4">Secure payment, tax, and delivery handled by Gumroad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Legal */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-base">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            <strong>Disclaimer:</strong> This guide is educational and based on lived experience. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support.
          </p>
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
