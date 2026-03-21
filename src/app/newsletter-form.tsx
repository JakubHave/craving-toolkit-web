"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 bg-emerald-900 text-emerald-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay updated</h2>
        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
          Get notified about guide updates and the upcoming Craving Toolkit mobile app for iOS and Android.
        </p>

        {status === "success" ? (
          <p className="text-lg font-semibold text-emerald-300">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-emerald-800 border border-emerald-700 text-white placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-emerald-800 border border-emerald-700 text-white placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-100 transition disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
            >
              {status === "loading" ? "..." : <>Subscribe <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-300">{message}</p>
        )}
      </div>
    </section>
  );
}
