export default function Pill({ children }) {
  return (
    <span className="mr-2 mt-2 inline-flex items-center rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white/70">
      {children}
    </span>
  );
}
