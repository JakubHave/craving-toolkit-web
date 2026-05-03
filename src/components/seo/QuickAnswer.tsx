type Props = { children: React.ReactNode };

export function QuickAnswer({ children }: Props) {
  return (
    <aside
      role="note"
      aria-label="Quick answer"
      className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 mb-8 text-base leading-relaxed text-slate-800"
    >
      <strong className="text-emerald-700 mr-1">Quick answer.</strong>
      {children}
    </aside>
  );
}
