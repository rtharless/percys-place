"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import { getTripsFromLocal } from "@/demo/data";

const TABS = [
  { id: "upcoming", label: "Upcoming" },
  { id: "saved", label: "Aspirational" },
  { id: "past", label: "Past" },
];

function readTrips() {
  try {
    return getTripsFromLocal();
  } catch {
    return [];
  }
}

export default function TripsPage() {
  const [tab, setTab] = useState("upcoming");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(readTrips());
  }, []);

  const filtered = useMemo(() => {
    const t = trips || [];
    if (tab === "past") return t.filter((x) => x.status === "past" || x.status === "completed");
    if (tab === "saved") return t.filter((x) => x.status === "saved");
    return t.filter((x) => x.status === "upcoming" || !x.status);
  }, [tab, trips]);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.0 Trips</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Trips" />

        <Row title="Trip lifecycle">
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <Pill key={t.id} onClick={() => setTab(t.id)}>
                <span className={tab === t.id ? "font-semibold" : ""}>{t.label}</span>
              </Pill>
            ))}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Finite and curated. Your trips become memory artifacts.
          </div>
        </Row>

        <Row title={TABS.find((t) => t.id === tab)?.label || "Trips"}>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              No trips here yet.
              <div className="mt-3">
                <CTA>
                  <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
                </CTA>
              </div>
            </div>
          ) : (
            <div className="mt-2 grid gap-3">
              {filtered.slice(0, 8).map((trip) => (
                <Link
                  key={trip.id}
                  href={tab === "past" ? `/scrapbook?tripId=${trip.id}` : `/trips/${trip.id}`}
                  className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-sm font-semibold text-slate-900">{trip.title}</div>
                      <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                        {trip.duration || "Trip"}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-slate-600">{trip.subtitle}</div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(trip.interests || []).slice(0, 5).map((id) => (
                        <span
                          key={id}
                          className="rounded-full border border-slate-200 bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                        >
                          {id.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>

                    {tab === "past" ? (
                      <div className="mt-3 text-xs font-semibold text-slate-700">Open scrapbook →</div>
                    ) : (
                      <div className="mt-3 text-xs font-semibold text-slate-700">Open trip →</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Row>

        <BottomNav activeHref="/trips" />
        <Note>Demo: trips are stored locally in your browser.</Note>
      </Phone>
    </main>
  );
}
