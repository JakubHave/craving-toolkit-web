import { CheckCircle } from "lucide-react";

export default function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  // In a real implementation, we'd verify the session_id server-side here.
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Invalid Session</h1>
          <p className="text-slate-600">We couldn't verify your purchase session.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-slate-600 mb-8">
          Thank you for purchasing the Craving Toolkit. Your PDF is ready for download.
        </p>
        <a 
          href={`/api/download?session_id=${sessionId}`}
          className="block w-full bg-emerald-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
        >
          Download PDF Now
        </a>
        <p className="text-sm text-slate-500 mt-6">
          A receipt has also been sent to your email.
        </p>
      </div>
    </div>
  );
}
