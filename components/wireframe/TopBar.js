export default function TopBar({ left, title, right }) {
  return (
    <div className="sticky top-0 z-10 -mx-1 mb-3 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-[56px] text-sm text-slate-600">{left}</div>
        <div className="flex-1 text-center text-sm font-semibold text-slate-900">
          {title}
        </div>
        <div className="min-w-[56px] text-right text-sm text-slate-600">
          {right}
        </div>
      </div>
    </div>
  );
}
