export default function Pill({ children, selected = false, tone = "default", accent = "blue" }) {
  const label = typeof children === "string" ? children.toLowerCase() : "";

  const tintClass =
    label.includes("local") || label.includes("flavor")
      ? "border-amber-200/60 bg-amber-100/60 text-amber-900/80"
      : label.includes("hidden")
        ? "border-sky-200/60 bg-sky-100/60 text-sky-900/80"
        : label.includes("serenity") || label.includes("quiet")
          ? "border-emerald-200/60 bg-emerald-100/55 text-emerald-900/80"
          : label.includes("history")
            ? "border-rose-200/60 bg-rose-100/55 text-rose-900/80"
            : "border-white/50 bg-white/55 text-slate-700";

  const accentColor =
    accent === "red" ? "#C8102E" : accent === "sand" ? "#F4E8D8" : "#1E3A8A";

  const selectedClass =
    tone === "onboarding"
      ? "border-[#E6EBF2] bg-white text-[#0F172A]"
      : "border-indigo-300/60 bg-indigo-600 text-white shadow-[0_10px_22px_rgba(30,58,138,0.22)]";

  const baseClass =
    tone === "onboarding"
      ? "border-[#E6EBF2] bg-white text-[#475569]"
      : tintClass;

  return (
    <span
      className={
        "mr-3 mt-3 inline-flex items-center rounded-xl border px-3 py-1 text-[11px] font-medium tracking-wide shadow-[0_6px_14px_rgba(2,6,23,0.06)] " +
        (selected ? selectedClass : baseClass) +
        (tone === "onboarding" ? " gap-2" : "")
      }
      style={
        tone === "onboarding" && selected
          ? { borderColor: accentColor }
          : tone === "onboarding"
            ? { borderColor: "#E6EBF2" }
            : undefined
      }
    >
      {tone === "onboarding" ? (
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full"
          style={{ background: selected ? accentColor : "#E6EBF2" }}
        />
      ) : null}
      {children}
    </span>
  );
}
