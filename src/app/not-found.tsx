import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-slate-50">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Go Home
          </Link>
          <Link href="/articles" className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors">
            Browse Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
