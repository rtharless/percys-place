export default function Row({ title, children }) {
  return (
    <div className="my-3 rounded-2xl border border-white/50 bg-white/70 p-4 text-sm shadow-[0_10px_24px_rgba(15,23,42,0.10)] backdrop-blur transition hover:bg-white/80">
      {title ? (
        <div className="mb-2 text-xs font-semibold tracking-wide text-slate-600">
          {title}
        </div>
      ) : null}
      <div className="text-slate-900">{children}</div>
    </div>
  );
}
