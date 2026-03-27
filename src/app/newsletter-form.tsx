"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list! We'll let you know when the app is ready.");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-teal-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-800/50 border border-emerald-700/50 mb-6">
          <Mail className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">Join the waiting list</h2>
        <p className="text-lg text-emerald-100/80 mb-4 leading-relaxed">
          Your pocket-sized recovery companion — with real-time tools, exercises, sober days and craving trackers to help you break free from addiction.
        </p>
        <p className="text-lg text-emerald-100/80 mb-4 leading-relaxed">
          Be the first to get it.
        </p>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-300/80">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            iOS
          </span>
          <span className="text-emerald-700/60">&</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-300/80">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2.226l1.392-2.092a.461.461 0 00-.152-.63.465.465 0 00-.634.152L16.7 1.834a8.982 8.982 0 00-4.7-1.313 8.982 8.982 0 00-4.7 1.313L5.871-.344a.465.465 0 00-.634-.152.461.461 0 00-.152.63l1.392 2.092C3.534 3.952 1.5 6.974 1.5 10.5h21c0-3.526-2.034-6.548-4.977-8.274zM7.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM1.5 12v7.5c0 .828.672 1.5 1.5 1.5h1.5v3a1.5 1.5 0 003 0v-3h9v3a1.5 1.5 0 003 0v-3H21c.828 0 1.5-.672 1.5-1.5V12h-21z"/></svg>
            Android
          </span>
        </div>

        {status === "success" ? (
          <div className="bg-emerald-800/30 border border-emerald-700/40 rounded-2xl p-6">
            <p className="text-lg font-semibold text-emerald-300">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-emerald-700/50 text-white placeholder:text-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 transition-all backdrop-blur-sm"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-emerald-700/50 text-white placeholder:text-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 transition-all backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-black/10 hover:-translate-y-0.5"
            >
              {status === "loading" ? "..." : <>Join <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        )}

        {status === "error" && (
          <div className="mt-4 bg-red-900/20 border border-red-800/30 rounded-xl px-4 py-2 inline-block">
            <p className="text-sm text-red-300">{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}
