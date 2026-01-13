export function List({ children }) {
  return (
    <div className="my-3 rounded-2xl border border-white/40 bg-gradient-to-b from-[#FFFCF5] to-[#F7F2E8] p-2 text-sm shadow-[0_10px_28px_rgba(2,6,23,0.08)]">
      {children}
    </div>
  );
}

export function ListItem({ children, selected = false, tone = "default", accent = "blue" }) {
  const accentColor =
    accent === "red" ? "#C8102E" : accent === "sand" ? "#F4E8D8" : "#1E3A8A";

  const className =
    tone === "onboarding"
      ? "my-2 flex items-center gap-3 rounded-xl border bg-white p-4 text-[13px] text-[#0F172A] shadow-[0_10px_24px_rgba(2,6,23,0.06)] transition hover:shadow-[0_12px_28px_rgba(2,6,23,0.08)] active:scale-[0.995]"
      : selected
        ? "my-3 rounded-xl border border-indigo-300/50 bg-gradient-to-b from-indigo-50/80 to-white p-4 text-sm text-slate-900 shadow-[0_12px_26px_rgba(30,58,138,0.14)] ring-1 ring-inset ring-indigo-500/10 transition hover:shadow-[0_14px_30px_rgba(30,58,138,0.16)] active:scale-[0.995]"
        : "my-3 rounded-xl border border-white/35 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] p-4 text-sm text-slate-800 shadow-[0_8px_18px_rgba(2,6,23,0.06)] transition hover:shadow-[0_10px_22px_rgba(2,6,23,0.08)] active:scale-[0.995]";

  return (
    <div
      className={className}
      style={
        tone === "onboarding"
          ? {
              borderColor: "#E6EBF2",
              borderLeftWidth: selected ? 4 : 1,
              borderLeftColor: selected ? accentColor : "#E6EBF2",
            }
          : undefined
      }
    >
      {tone === "onboarding" ? (
        <>
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: selected ? accentColor : "#E6EBF2" }}
          />
          <span className={selected ? "font-semibold" : "font-medium"}>{children}</span>
        </>
      ) : (
        children
      )}
    </div>
  );
}
