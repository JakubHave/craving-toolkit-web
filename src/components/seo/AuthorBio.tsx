import Link from "next/link";

// Single source of truth for the inline author bio shown at the bottom of
// articles. The canonical, full bio lives on /about; if you change anything
// substantive about Jakub, update both.
export function AuthorBio() {
  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">About the Author</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Jakub Havelka is a software engineer based in Europe with over a decade of personal
        recovery experience across multiple substances and behaviors. He built the Craving Toolkit
        from what actually helped — combining lived experience with research from Anna Lembke,
        Marc Lewis, Judson Brewer, Gabor Maté, and Charles Duhigg.{" "}
        <Link href="/about" className="text-emerald-700 hover:underline">Learn more</Link>
      </p>
    </section>
  );
}
