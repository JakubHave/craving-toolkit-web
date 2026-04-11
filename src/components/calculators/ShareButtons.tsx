"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
interface Props {
  annualCost: number;
}

export default function ShareButtons({ annualCost }: Props) {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://www.cravingtoolkit.com/calculators/money-saved";
  const copyUrl = typeof window !== "undefined" ? window.location.href : shareUrl;
  const amount = Math.round(annualCost).toLocaleString();

  const tweetText = `I just found out how much my habit really costs — $${amount}/year.\n\nCalculate yours →`;
  const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: prompt user to copy manually
      window.prompt("Copy this link:", copyUrl);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-slate-600" />
        <h3 className="font-semibold text-slate-800">Share your results</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
        >
          X / Twitter
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
        >
          Facebook
        </a>
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
