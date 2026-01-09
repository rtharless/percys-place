export function List({ children }) {
  return (
    <div className="my-3 rounded-2xl border border-white/50 bg-white/70 p-2 text-sm shadow-[0_10px_24px_rgba(15,23,42,0.10)] backdrop-blur">
      {children}
    </div>
  );
}

export function ListItem({ children }) {
  return (
    <div className="my-2 rounded-xl border border-white/50 bg-gradient-to-b from-white/70 to-slate-50/70 p-3 text-sm text-slate-800 shadow-sm transition hover:bg-white/80 active:scale-[0.995]">
      {children}
    </div>
  );
}
