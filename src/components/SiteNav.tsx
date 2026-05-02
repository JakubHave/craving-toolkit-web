"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/guide", label: "Guide" },
  { href: "/articles", label: "Articles" },
  { href: "/calculators", label: "Calculators" },
];

export default function SiteNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex items-center gap-1.5 sm:gap-2 font-semibold text-base sm:text-xl tracking-tight text-emerald-800 shrink-0"
        >
          <Image src="/icon_1024.webp" alt="Craving Toolkit logo" width={32} height={32} className="rounded-lg w-7 h-7 sm:w-8 sm:h-8" />
          <span className="hidden sm:inline">Craving Toolkit</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm sm:text-base font-semibold transition-colors ${
                  active ? "text-emerald-700" : "text-slate-700 hover:text-emerald-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#download"
            className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}
