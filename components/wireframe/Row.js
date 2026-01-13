export default function Row({ title, children }) {
  return (
    <div className="my-4 rounded-2xl border border-white/40 bg-gradient-to-b from-[#FFFCF5] to-[#F7F2E8] p-5 text-sm shadow-[0_10px_28px_rgba(2,6,23,0.08)] backdrop-blur transition hover:shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
      {title ? (
        <div className="mb-2 text-[11px] font-semibold tracking-wide text-slate-600">
          {title}
        </div>
      ) : null}
      <div className="text-slate-800 leading-6">{children}</div>
    </div>
  );
}
