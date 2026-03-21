import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, BookOpen } from "lucide-react";
import NewsletterForm from "./newsletter-form";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
          <div className="flex items-center gap-6">
            <Link href="/articles" className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors">Articles</Link>
            <a href="#pricing" className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-colors">Get the Guide</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
          <h1 className="animate-fade-in-up font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Practical tools to fight cravings and urges, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">stop spirals, and stay in recovery.</span>
          </h1>
          <p className="animate-fade-in-up-delay-1 text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            A short, experience-based guide for people dealing with addiction urges, compulsive behavior, and relapse momentum.
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 flex items-center gap-2">
              Get the guide <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="animate-fade-in-up-delay-3 mt-5 text-sm text-slate-400 tracking-wide">Instant PDF download. Secure checkout via Paddle.</p>
        </div>
      </header>

      {/* Problem Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center leading-snug">When cravings hit, most advice is useless.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                People say things like &ldquo;just stay strong&rdquo; or &ldquo;focus on your goals.&rdquo; But in a real craving spiral, that often isn&rsquo;t enough. Logic disappears, and old patterns take over.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                What people need is something practical for the exact moment the brain stops feeling trustworthy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="font-semibold text-xl mb-5">This guide helps you:</h3>
              <ul className="space-y-4">
                {[
                  "Know what to do in the first 10 minutes",
                  "Interrupt the routine before relapse happens",
                  "Handle stress, loneliness, shame, and boredom",
                  "Recover quickly after a slip instead of giving up"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center leading-snug">What is inside the guide?</h2>
          <p className="text-lg text-center text-slate-500 mb-14 max-w-2xl mx-auto leading-relaxed">
            A concise, fluff-free, 40-page PDF packed with actionable frameworks. Here is exactly what is covered across the 15 chapters and 6 worksheets:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Emergency Tools & Craving Mechanics",
                desc: "Understand why cravings defy logic. Learn exactly what to do in the first 10 minutes, how to \"urge surf,\" and how to shut down the addictive voice."
              },
              {
                num: "02",
                title: "Triggers & Personality Styles",
                desc: "Detailed breakdowns of different triggers (stress, loneliness, boredom), different addiction patterns, and how your specific personality style creates unique weak spots."
              },
              {
                num: "03",
                title: "Breaking the Relapse Spiral",
                desc: "How to handle shame, slips, and the dangerous \"screw it\" mentality. Learn the daily practices that actually weaken your cravings over the long term."
              },
              {
                num: "04",
                title: "Six Practical Worksheets",
                desc: "Includes the Habit Loop Mapper, Craving Log, Cost-Benefit Check, Top 5 Addictive Lies, Slip Review, and an Emergency Craving Card to build your personal plan."
              }
            ].map((card) => (
              <div key={card.num} className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200/60 transition-all duration-300">
                <div className="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-3">{card.num}</div>
                <h3 className="font-semibold text-xl mb-3 text-slate-800 group-hover:text-emerald-800 transition-colors">{card.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="animate-subtle-float inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-800/50 border border-emerald-700/50 mb-8">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">I&rsquo;m not writing this from theory alone.</h2>
          <p className="text-lg leading-relaxed text-emerald-100/90 mb-6">
            I&rsquo;ve lived through addiction, treatment, relapse patterns, shame, and the long work of recovery. I struggled with overeating, alcohol, and drugs, and I&rsquo;ve now been clean for over 10 years.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100/90">
            This guide is my attempt to share the practical tools that actually help when cravings hit — integrating lived experience with the best modern addiction science.
          </p>
        </div>
      </section>

      {/* Pricing / Product Section */}
      <section id="pricing" className="relative py-28 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug">Get the Craving Toolkit</h2>
            <p className="text-lg text-slate-500">You do not need perfect motivation to start. You just need better tools.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 p-[1px] shadow-2xl shadow-emerald-900/10">
              <div className="bg-white rounded-3xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-500" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">The Complete Guide</h3>
                  <p className="text-slate-500 mb-6">Everything you need to interrupt the spiral.</p>
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-slate-900">$19</span>
                    <span className="text-2xl font-bold text-slate-300 line-through">$24</span>
                  </div>
                  <div className="mb-8">
                    <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full border border-emerald-200">
                      New Release Special: Price increases soon
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><BookOpen className="w-5 h-5 text-emerald-500" /> Instant PDF Download</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Short, actionable chapters</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Practical emergency exercises</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Personal anti-craving plan templates</li>
                  </ul>

                  <a
                    href="https://jakubhaven.gumroad.com/l/lqdlu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full text-center bg-emerald-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                  >
                    Buy Now & Download
                  </a>
                  <p className="text-center text-sm text-slate-400 mt-4">Secure payment, tax, and delivery handled by Paddle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />

      {/* Footer / Legal */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-block font-semibold text-lg text-white/80 mb-6">Craving Toolkit</Link>
          <p className="mb-6 max-w-2xl mx-auto leading-relaxed text-slate-500">
            <strong className="text-slate-400">Disclaimer:</strong> This guide is educational and based on lived experience. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <p className="mb-4">Contact: <a href="mailto:jacob@cravingtoolkit.com" className="text-slate-400 hover:text-white transition-colors">jacob@cravingtoolkit.com</a></p>
          <p className="text-slate-600">© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
