export default function Phone({ children }) {
  return (
    <div className="w-full">
      <div className="mx-auto w-[390px] origin-top scale-[0.95] sm:scale-100 md:scale-[1.1] lg:scale-[1.2]">
        <div className="relative h-[780px] overflow-hidden rounded-[30px] border border-white/60 bg-[radial-gradient(900px_520px_at_18%_0%,_rgba(60,130,190,0.18),_transparent_62%),radial-gradient(800px_520px_at_88%_8%,_rgba(240,164,96,0.16),_transparent_60%),linear-gradient(180deg,_rgba(255,253,247,0.96),_rgba(247,243,234,0.96))] shadow-device">
          <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900/10" />
          <div className="h-full overflow-y-auto px-4 pb-24 pt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
