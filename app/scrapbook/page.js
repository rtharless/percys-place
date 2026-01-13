import Link from "next/link";

import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function ScrapbookPage() {
  const entries = [
    {
      location: "Percy’s Place — Round Rock",
      date: "Jan 6",
      reflection: "Morning light, a calm stop, and a tiny detail worth keeping.",
    },
    {
      location: "Percy’s Place — Georgetown",
      date: "Jan 2",
      reflection: "A quiet detour that felt like it belonged to the day.",
    },
    {
      location: "Percy’s Place — Bastrop",
      date: "Dec 28",
      reflection: "The kind of place you’d pass by twice—just to notice more.",
    },
    {
      location: "Hidden viewpoint — one good stretch",
      date: "Dec 20",
      reflection: "Wide sky, slow miles, and a view that made the route feel new again.",
    },
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">7.2 Scrapbook</h1>

      <Phone>
        <TopBar left={<Link href="/rewards">Back</Link>} title="Scrapbook" />

        <Row>
          <div className="grid gap-3">
            {entries.map((entry) => (
              <div
                key={`${entry.location}-${entry.date}`}
                className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">{entry.location}</div>
                  <div className="shrink-0 text-xs font-semibold text-slate-600">{entry.date}</div>
                </div>
                <div className="mt-2 text-sm text-slate-700">{entry.reflection}</div>
                <Link
                  href={
                    entry.location.toLowerCase().includes("junction")
                      ? "/plan/map?focus=junction"
                      : "/plan/map?focus=round-rock"
                  }
                  className="mt-2 inline-block text-[11px] font-semibold text-slate-600"
                >
                  View on route
                </Link>
              </div>
            ))}
          </div>
        </Row>
      </Phone>
    </main>
  );
}
