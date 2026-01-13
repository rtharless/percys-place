import Link from "next/link";

const items = [
  { href: "/home", label: "Home" },
  { href: "/plan", label: "Plan" },
  { href: "/explore", label: "Explore" },
  { href: "/rewards", label: "Rewards" },
  { href: "/profile", label: "Profile" },
];

export default function BottomNav({ activeHref }) {
  return (
    <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/45 bg-white/55 p-2 text-xs shadow-[0_16px_40px_rgba(2,6,23,0.14)] backdrop-blur">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.href === activeHref
                ? "rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A] px-2 py-2 text-center font-semibold text-white shadow-[0_10px_22px_rgba(30,58,138,0.22)]"
                : "rounded-xl px-2 py-2 text-center font-medium text-slate-700 transition hover:bg-white/50 active:scale-[0.99]"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
