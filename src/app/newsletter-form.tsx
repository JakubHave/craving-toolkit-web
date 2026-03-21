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
      setMessage("You're in! We'll keep you posted.");
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
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">Stay updated</h2>
        <p className="text-lg text-emerald-100/80 mb-10 leading-relaxed">
          Get notified about guide updates and the upcoming Craving Toolkit mobile app for iOS and Android.
        </p>

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
              {status === "loading" ? "..." : <>Subscribe <ArrowRight className="w-4 h-4" /></>}
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
