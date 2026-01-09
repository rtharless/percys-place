export default function OnboardingSplash({ children }) {
  return (
    <div className="relative -mx-4 -mt-10 h-[780px] overflow-hidden bg-slate-950/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(220,38,38,0.28),_transparent_60%),linear-gradient(180deg,_rgba(15,23,42,0.06),_rgba(255,255,255,0.85))]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-24 h-56 w-56 rounded-[52px] border-2 border-fuchsia-300/70 bg-fuchsia-400/10 blur-[0.2px]" />
        <div className="absolute -left-28 bottom-24 h-56 w-56 rounded-full border-2 border-blue-200/70 bg-blue-400/10" />
        <div className="absolute left-1/2 top-44 h-32 w-32 -translate-x-1/2 rounded-[28px] border border-white/60 bg-white/10 backdrop-blur-sm" />
      </div>

      <div className="relative h-full px-4 pb-6 pt-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-full bg-white/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 backdrop-blur">
            AMERICAN ROAD TRIP EDITION
          </div>
          <div className="rounded-full bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
            Percy's Place
          </div>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white/70 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.14)] backdrop-blur">
          {children}
        </div>
      </div>
    </div>
  );
}
