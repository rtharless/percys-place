"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import {
  getFeaturedTripById,
  getInterests,
  getTripsFromLocal,
  saveInterestsToLocal,
  saveTripToLocal,
} from "@/demo/data";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "safety", label: "Safety" },
];

function replaceTripInLocal(nextTrip) {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(localStorage.getItem("percy_trips") || "[]");
  const idx = existing.findIndex((t) => t.id === nextTrip.id);
  if (idx >= 0) existing[idx] = nextTrip;
  else existing.push(nextTrip);
  localStorage.setItem("percy_trips", JSON.stringify(existing));
}

export default function TripDetailPage() {
  const params = useParams();
  const router = useRouter();

  const tripId = typeof params?.id === "string" ? params.id : params?.id?.[0];

  const [tab, setTab] = useState("overview");
  const [trip, setTrip] = useState(null);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [editInterestsOpen, setEditInterestsOpen] = useState(false);
  const [allInterests, setAllInterests] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const local = getTripsFromLocal();
      const found = local.find((t) => t.id === tripId);
      if (found) {
        if (mounted) setTrip(found);
        return;
      }

      const featured = await getFeaturedTripById(tripId);
      if (mounted) {
        if (featured) {
          setTrip({
            ...featured,
            startLocation: { name: "Cape Charles, VA" },
            endLocation: { name: "Washington, DC" },
            interests: [],
            itinerary: [],
            status: "saved",
          });
        } else {
          setTrip(null);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [tripId]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const interests = await getInterests();
      if (!mounted) return;
      setAllInterests(interests);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const hasItinerary = (trip?.itinerary || []).length > 0;

  const headerPills = useMemo(() => {
    const list = [];
    if (trip?.duration) list.push(trip.duration);
    if (trip?.distance) list.push(trip.distance);
    if (trip?.stops) list.push(`${trip.stops} stops`);
    return list;
  }, [trip]);

  function markCompleted() {
    if (!trip) return;
    const next = { ...trip, status: "past" };
    replaceTripInLocal(next);
    setTrip(next);
    router.push(`/scrapbook?tripId=${next.id}`);
  }

  function ensureSaved() {
    if (!trip) return;
    const local = getTripsFromLocal();
    if (!local.find((t) => t.id === trip.id)) {
      saveTripToLocal(trip);
    }
  }

  function toggleTripInterest(id) {
    if (!trip) return;
    const current = Array.isArray(trip.interests) ? trip.interests : [];
    const nextInterests = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    const nextTrip = { ...trip, interests: nextInterests };
    replaceTripInLocal(nextTrip);
    setTrip(nextTrip);
    saveInterestsToLocal(nextInterests);
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.1 Trip Detail</h1>

      <Phone>
        <TopBar left={<Link href="/trips">Back</Link>} title="Trip" />

        {!trip ? (
          <Row>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              Trip not found.
              <div className="mt-3">
                <CTA>
                  <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
                </CTA>
              </div>
            </div>
          </Row>
        ) : (
          <>
            <Row>
              <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
                <div
                  className="relative h-[120px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.image || "/journeys/hidden%20views.jpeg"})`,
                    filter: "saturate(1.15) contrast(1.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-slate-900">{trip.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{trip.subtitle}</div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {headerPills.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(trip?.interests || []).length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {trip.interests.slice(0, 8).map((id) => (
                        <span
                          key={id}
                          className="rounded-full border border-slate-200 bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                        >
                          {id.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Row>

            <Row title="Tabs">
              <div className="flex flex-wrap gap-2">
                {TABS.map((t) => (
                  <Pill key={t.id} onClick={() => setTab(t.id)}>
                    <span className={tab === t.id ? "font-semibold" : ""}>{t.label}</span>
                  </Pill>
                ))}
                <Pill onClick={() => setEditInterestsOpen(true)}>
                  <span className="font-semibold">Edit interests</span>
                </Pill>
                <Pill onClick={() => setConciergeOpen(true)}>
                  <span className="font-semibold">Contact concierge</span>
                </Pill>
              </div>
            </Row>

            {tab === "overview" ? (
              <Row title="Overview">
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
                  <div className="font-semibold text-slate-900">The trip is built first.</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Edit by preference later—swap vibes, not spreadsheets.
                  </div>

                  <div className="mt-4 grid gap-2">
                    <CTA variant="secondary">
                      <Link href={`/scrapbook?tripId=${trip.id}`}>Open scrapbook</Link>
                    </CTA>
                    <CTA variant="secondary">
                      <Link href={`/arriving?tripId=${trip.id}`}>Arriving at Percy’s Place</Link>
                    </CTA>
                    <CTA>
                      <button type="button" className="w-full" onClick={markCompleted}>
                        Mark as completed → Generate scrapbook
                      </button>
                    </CTA>
                    <button
                      type="button"
                      onClick={ensureSaved}
                      className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                    >
                      Save to my trips
                    </button>
                  </div>
                </div>

                {!hasItinerary ? (
                  <div className="mt-3 text-xs text-slate-500">
                    This is a preset trip card. Build with concierge to see a full itinerary.
                  </div>
                ) : null}
              </Row>
            ) : null}

            {tab === "itinerary" ? (
              <Row title="Itinerary">
                {hasItinerary ? (
                  <div className="grid gap-3">
                    {trip.itinerary.map((day) => (
                      <div
                        key={day.dayNumber}
                        className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur"
                      >
                        <div className="text-xs font-semibold text-slate-600">Day {day.dayNumber}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{day.theme}</div>

                        <div className="mt-3 grid gap-2">
                          {(day.stops || []).slice(0, 6).map((s) => (
                            <div
                              key={`${s.type}-${s.id}`}
                              className="rounded-xl border border-white/55 bg-white/70 px-3 py-2 text-xs text-slate-700"
                            >
                              <span className="font-semibold">{s.name}</span>
                              <span className="text-slate-500"> • {s.type.replace(/-/g, " ")}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
                    No itinerary yet.
                    <div className="mt-3">
                      <CTA>
                        <Link href="/concierge?preset=cape-charles-dc">Build with concierge</Link>
                      </CTA>
                    </div>
                  </div>
                )}
              </Row>
            ) : null}

            {tab === "safety" ? (
              <Row title="Safety">
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
                  <div className="font-semibold text-slate-900">Roadside guidance</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Keep interactions minimal while driving. Use voice and pull over when needed.
                  </div>
                  <div className="mt-3 grid gap-2 text-xs">
                    <a className="font-semibold text-slate-700" href="#">
                      Emergency: Call 911
                    </a>
                    <a className="font-semibold text-slate-700" href="#">
                      Roadside assistance (placeholder)
                    </a>
                    <a className="font-semibold text-slate-700" href="#">
                      Safety tips (placeholder)
                    </a>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Disclaimer: Demo only. No real routing, tracking, or emergency services.
                  </div>
                </div>
              </Row>
            ) : null}

            {conciergeOpen ? (
              <Row>
                <div className="rounded-2xl border border-white/50 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Contact concierge</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Placeholder experience. In production this could be chat or voice.
                  </div>
                  <div className="mt-3 grid gap-2">
                    <button
                      type="button"
                      className="rounded-xl border border-white/55 bg-white/70 px-3 py-3 text-xs font-semibold text-slate-700"
                      onClick={() => setConciergeOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="rounded-xl border border-white/55 bg-white/70 px-3 py-3 text-xs font-semibold text-slate-700"
                      onClick={() => setConciergeOpen(false)}
                    >
                      Voice concierge (coming soon)
                    </button>
                  </div>
                </div>
              </Row>
            ) : null}

            {editInterestsOpen ? (
              <Row title="Interests">
                <div className="rounded-2xl border border-white/50 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Edit by preference</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Tap tags to re-shape the trip. Demo updates local state only.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {allInterests.slice(0, 14).map((i) => {
                      const active = (trip?.interests || []).includes(i.id);
                      return (
                        <Pill key={i.id} onClick={() => toggleTripInterest(i.id)}>
                          <span className={active ? "font-semibold" : ""}>{i.label}</span>
                        </Pill>
                      );
                    })}
                  </div>

                  <div className="mt-3 grid gap-2">
                    <button
                      type="button"
                      className="rounded-xl border border-white/55 bg-white/70 px-3 py-3 text-xs font-semibold text-slate-700"
                      onClick={() => setEditInterestsOpen(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </Row>
            ) : null}
          </>
        )}

        <BottomNav activeHref="/trips" />
        <Note>Demo: no real maps, payments, or sharing.</Note>
      </Phone>
    </main>
  );
}
