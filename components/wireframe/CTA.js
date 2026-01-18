export default function CTA({ children, variant = "primary" }) {
  const className =
    variant === "secondary"
      ? "group my-3 w-full rounded-2xl border border-white/60 bg-white/55 px-4 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-[0_10px_22px_rgba(2,6,23,0.06)] backdrop-blur transition hover:bg-white/65 hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)] active:scale-[0.99] [&>a]:block [&>a]:w-full"
      : "group my-3 w-full rounded-2xl border border-white/35 bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A] px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_28px_rgba(30,58,138,0.18)] ring-1 ring-inset ring-white/18 transition hover:brightness-[1.03] active:scale-[0.99] [&>a]:block [&>a]:w-full";

  return <div className={className}>{children}</div>;
}
