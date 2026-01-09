export default function Phone({ children }) {
  return (
    <div className="w-full">
      <div className="mx-auto w-[390px] origin-top scale-[0.95] sm:scale-100 md:scale-[1.1] lg:scale-[1.2]">
        <div className="relative h-[780px] overflow-hidden rounded-[32px] border border-white/60 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(220,38,38,0.16),_transparent_60%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(255,255,255,0.86))] shadow-device">
          <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900/10" />
          <div className="h-full overflow-y-auto px-4 pb-24 pt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
