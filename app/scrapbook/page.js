"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import CTA from "@/components/wireframe/CTA";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import { generateScrapbook, getTripsFromLocal } from "@/demo/data";

export default function ScrapbookPage() {
  const searchParams = useSearchParams();
  const tripId = searchParams?.get("tripId") || "";

  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (!tripId) return;
    const trips = getTripsFromLocal();
    setTrip(trips.find((t) => t.id === tripId) || null);
  }, [tripId]);

  const scrapbook = useMemo(() => {
    if (!trip) return null;
    return generateScrapbook(trip);
  }, [trip]);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">7.2 Scrapbook</h1>

      <Phone>
        <TopBar left={<Link href={tripId ? `/trips/${tripId}` : "/trips"}>Back</Link>} title="Scrapbook" />

        <Row>
          {!trip || !scrapbook ? (
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              No scrapbook yet.
              <div className="mt-2 text-xs text-slate-600">
                Build a trip with concierge, then mark it completed.
              </div>
              <div className="mt-3">
                <CTA>
                  <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
                </CTA>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
                <div
                  className="relative h-[140px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.image || "/journeys/hidden%20views.jpeg"})`,
                    filter: "saturate(1.15) contrast(1.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-slate-600">Scrapbook cover</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{scrapbook.title}</div>
                  <div className="mt-1 text-xs text-slate-600">
                    {scrapbook.dates.start} → {scrapbook.dates.end}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-600">Highlights</div>
                <div className="mt-2 grid gap-2">
                  {scrapbook.collage.highlights.slice(0, 3).map((h) => (
                    <div key={h} className="text-sm text-slate-700">
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Historic markers</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">Seen vs missed</div>
                  </div>
                  <div className="shrink-0 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700">
                    Seen {scrapbook.seenAndMissed.seen.length} / {scrapbook.seenAndMissed.seen.length + scrapbook.seenAndMissed.missed.length}
                  </div>
                </div>

                <div className="mt-3 grid gap-2">
                  {scrapbook.seenAndMissed.seen.slice(0, 4).map((m) => (
                    <div
                      key={m.id}
                      className="rounded-xl border border-white/55 bg-white/70 px-3 py-2 text-xs text-slate-700"
                    >
                      <span className="font-semibold">Seen:</span> {m.name}
                    </div>
                  ))}
                  {scrapbook.seenAndMissed.missed.slice(0, 2).map((m) => (
                    <div
                      key={m.id}
                      className="rounded-xl border border-white/55 bg-white/70 px-3 py-2 text-xs text-slate-700"
                    >
                      <span className="font-semibold">Missed:</span> {m.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-600">Ready to post</div>
                <div className="mt-1 text-sm text-slate-700">
                  A shareable moment—UI only in the demo.
                </div>
                <div className="mt-3">
                  <CTA>
                    <button type="button" className="w-full">Ready to post</button>
                  </CTA>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">No real sharing/export in this demo.</div>
              </div>
            </div>
          )}
        </Row>
      </Phone>
    </main>
  );
}
