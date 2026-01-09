export default function CTA({ children, variant = "primary" }) {
  const className =
    variant === "secondary"
      ? "group my-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow active:scale-[0.99] [&>a]:block [&>a]:w-full"
      : "group my-3 w-full rounded-2xl bg-gradient-to-r from-brand-blue to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/25 transition hover:brightness-[1.03] hover:shadow-md active:scale-[0.99] [&>a]:block [&>a]:w-full";

  return <div className={className}>{children}</div>;
}
