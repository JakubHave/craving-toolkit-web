import Link from "next/link";

type Props = {
  publishedAt: string;
  modifiedAt?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Byline({ publishedAt, modifiedAt }: Props) {
  return (
    <div className="mb-8 text-sm text-slate-600">
      <div className="text-slate-500 mb-2">
        <time dateTime={publishedAt}>Published {formatDate(publishedAt)}</time>
        {modifiedAt && modifiedAt !== publishedAt && (
          <span>
            {" "}
            · Updated{" "}
            <time dateTime={modifiedAt}>{formatDate(modifiedAt)}</time>
          </span>
        )}
      </div>
      <p className="font-medium text-slate-800">
        Written by{" "}
        <Link href="/about" className="text-emerald-700 hover:underline">
          Jakub Havelka
        </Link>
        <span className="inline-flex items-center gap-2 ml-3 align-middle">
          <a
            href="https://x.com/cravingtoolkit"
            target="_blank"
            rel="noopener"
            aria-label="Author on X"
            className="text-slate-400 hover:text-slate-600"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/craving.toolkit/"
            target="_blank"
            rel="noopener"
            aria-label="Author on Instagram"
            className="text-slate-400 hover:text-slate-600"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </span>
      </p>
      <p className="text-slate-500">
        Software engineer · 10+ years in recovery · Author of the Craving
        Toolkit
      </p>
    </div>
  );
}
