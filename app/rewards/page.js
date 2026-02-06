"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import {
  ACHIEVEMENTS,
  checkAchievements,
  generateScrapbook,
  getInterestsFromLocal,
  getTripsFromLocal,
} from "@/demo/data";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function RewardsPage() {
  const [trips, setTrips] = useState([]);
  const [interestIds, setInterestIds] = useState([]);

  useEffect(() => {
    setTrips(getTripsFromLocal());
    setInterestIds(getInterestsFromLocal());
  }, []);

  const progress = useMemo(() => {
    const pastTrips = (trips || []).filter((t) => t.status === "past" || t.status === "completed");
    const upcomingTrips = (trips || []).filter((t) => t.status === "upcoming" || !t.status);

    let markersVisited = 0;
    let photoSpotsVisited = 0;
    let scenicStops = 0;
    let placesDiscovered = 0;
    let maxTripDays = 0;

    for (const trip of pastTrips) {
      const sb = generateScrapbook(trip);
      markersVisited += sb?.seenAndMissed?.seen?.length || 0;
      photoSpotsVisited += sb?.collage?.photoSpots?.length || 0;
      scenicStops += clamp(trip?.photoSpots?.length || 0, 0, 10);
      maxTripDays = Math.max(maxTripDays, trip?.itinerary?.length || 0);

      const stopCount = (trip?.historicMarkers?.length || 0) + (trip?.photoSpots?.length || 0);
      placesDiscovered += clamp(stopCount, 2, 12);
    }

    const interestsSelected = interestIds.length;

    return {
      tripsCompleted: pastTrips.length,
      tripsUpcoming: upcomingTrips.length,
      markersVisited,
      photoSpotsVisited,
      scenicStops,
      interestsSelected,
      maxTripDays,
      placesDiscovered,
    };
  }, [interestIds.length, trips]);

  const earned = useMemo(() => checkAchievements(progress), [progress]);
  const earnedIds = useMemo(() => new Set(earned.map((a) => a.id)), [earned]);

  const progressTotal = 50;
  const progressPct = clamp(Math.round((progress.placesDiscovered / progressTotal) * 100), 0, 100);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">7.1 Rewards</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Rewards" />

        <Row title="Your progress">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-slate-900">{progress.placesDiscovered}</div>
              <div className="mt-1 text-xs text-slate-500">Places discovered</div>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-slate-900">{progress.tripsCompleted}</div>
              <div className="mt-1 text-xs text-slate-500">Trips completed</div>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-slate-900">{progress.scenicStops}</div>
              <div className="mt-1 text-xs text-slate-500">Scenic stops</div>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-slate-900">{progress.markersVisited}</div>
              <div className="mt-1 text-xs text-slate-500">Historic markers</div>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-slate-900">{progress.photoSpotsVisited}</div>
              <div className="mt-1 text-xs text-slate-500">Photo spots</div>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Finite progression—just enough to feel momentum.
          </div>

          <div className="mt-3">
            <div className="h-[6px] w-full overflow-hidden rounded-full bg-slate-900/10">
              <div
                className="h-full bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A]"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </Row>

        <Row title="Achievements">
          <div className="text-sm text-slate-700">Single-player, no comparisons.</div>
          <div className="mt-1 text-xs text-slate-500">
            Earned {earned.length} / {ACHIEVEMENTS.length}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {ACHIEVEMENTS.slice(0, 6).map((a) => {
              const isEarned = earnedIds.has(a.id);
              return (
                <div
                  key={a.id}
                  className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-3 py-3 shadow-sm backdrop-blur"
                >
                  <div
                    className={
                      "grid h-9 w-9 place-items-center rounded-xl text-xs font-semibold shadow-[0_10px_22px_rgba(30,58,138,0.18)] " +
                      (isEarned
                        ? "bg-gradient-to-br from-[#0B1F3A] to-[#1E3A8A] text-white"
                        : "bg-slate-200/60 text-slate-600")
                    }
                  >
                    {isEarned ? "✦" : "🔒"}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-800">{a.name}</div>
                    <div className="mt-1 text-[11px] font-semibold text-slate-600">
                      {a.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Row>

        <Row title="Your scrapbook">
          <div className="text-sm text-slate-700">A quiet record of what you found</div>

          <div className="mt-2 rounded-2xl border border-white/50 bg-white/60 p-4 text-xs text-slate-600 shadow-sm backdrop-blur">
            Completed trips link to scrapbooks.
          </div>

          <div className="mt-3 grid gap-3">
            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Round Rock</div>
              <div className="mt-0.5 text-xs text-slate-600">Jan 6</div>
              <div className="mt-2 text-xs text-slate-700">
                Morning light, a calm stop, and a tiny detail worth keeping.
              </div>
              <Link href="/plan/map?focus=round-rock" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Georgetown</div>
              <div className="mt-0.5 text-xs text-slate-600">Jan 2</div>
              <div className="mt-2 text-xs text-slate-700">
                A quiet detour that felt like it belonged to the day.
              </div>
              <Link href="/plan/map?focus=junction" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Bastrop</div>
              <div className="mt-0.5 text-xs text-slate-600">Dec 28</div>
              <div className="mt-2 text-xs text-slate-700">
                The kind of place you’d pass by twice—just to notice more.
              </div>
              <Link href="/plan/map?focus=round-rock" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>
          </div>

          <CTA variant="secondary">
            <Link href="/trips">View trips</Link>
          </CTA>
        </Row>

        <Row title="Quick actions">
          <CTA>
            <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
          </CTA>
          <CTA variant="secondary">
            <Link href="/explore">Explore nearby</Link>
          </CTA>
        </Row>

        <BottomNav activeHref="/rewards" />
        <Note>Note: Clear, calm progress. No leaderboards.</Note>
      </Phone>
    </main>
  );
}
