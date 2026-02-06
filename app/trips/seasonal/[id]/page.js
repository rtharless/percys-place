"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import { getSeasonalTrips } from "@/demo/data";

export default function SeasonalTripDetailPage() {
  const params = useParams();
  const seasonalId = typeof params?.id === "string" ? params.id : params?.id?.[0];

  const [trip, setTrip] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const seasonal = await getSeasonalTrips();
      const found = seasonal.find((t) => t.id === seasonalId) || null;
      if (mounted) setTrip(found);
    })();
    return () => {
      mounted = false;
    };
  }, [seasonalId]);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.2 Seasonal Trip</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Seasonal Trip" />

        {!trip ? (
          <Row>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              Trip not found.
              <div className="mt-3">
                <CTA>
                  <Link href="/home">Back to Home</Link>
                </CTA>
              </div>
            </div>
          </Row>
        ) : (
          <>
            <Row>
              <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
                <div
                  className="relative h-[140px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.image})`,
                    filter: "saturate(1.15) contrast(1.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-slate-600">Seasonal escape</div>
                  <div className="mt-1 text-base font-semibold text-slate-900">{trip.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{trip.subtitle}</div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                      {trip.duration}
                    </span>
                    <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                      {trip.distance}
                    </span>
                    <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                      {trip.bestTime}
                    </span>
                  </div>

                  <div className="mt-3 text-xs text-slate-600">
                    Curated and finite. This is a preset—build with concierge to generate a full itinerary.
                  </div>

                  <div className="mt-4">
                    <CTA>
                      <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
                    </CTA>
                  </div>
                </div>
              </div>
            </Row>
          </>
        )}

        <BottomNav activeHref="/trips" />
        <Note>Demo: seasonal trips are static curated presets.</Note>
      </Phone>
    </main>
  );
}
