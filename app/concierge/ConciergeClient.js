"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import {
  generateTripItinerary,
  getDemoRoutePreset,
  getInterests,
  saveInterestsToLocal,
  saveTripToLocal,
} from "@/demo/data";

const DURATIONS = [
  { id: "afternoon", label: "Afternoon" },
  { id: "weekend", label: "Long weekend" },
  { id: "seven-days", label: "7 days" },
];

function formatDateInputValue(date) {
  if (!date) return "";
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function ConciergeClient({ preset }) {
  const router = useRouter();

  const demoPreset = useMemo(() => getDemoRoutePreset(), []);

  const [loading, setLoading] = useState(false);
  const [allInterests, setAllInterests] = useState([]);

  const [startName, setStartName] = useState(demoPreset.startLocation.name);
  const [endName, setEndName] = useState(demoPreset.endLocation.name);
  const [duration, setDuration] = useState("weekend");

  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return formatDateInputValue(d);
  });

  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return formatDateInputValue(d);
  });

  const [selectedInterests, setSelectedInterests] = useState(demoPreset.suggestedInterests);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const interests = await getInterests();
      if (mounted) setAllInterests(interests);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (preset === "cape-charles-dc") {
      setStartName(demoPreset.startLocation.name);
      setEndName(demoPreset.endLocation.name);
      setSelectedInterests(demoPreset.suggestedInterests);
      setDuration("weekend");
    }
  }, [demoPreset.endLocation.name, demoPreset.startLocation.name, demoPreset.suggestedInterests, preset]);

  function toggleInterest(id) {
    setSelectedInterests((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  }

  async function onBuild() {
    if (loading) return;
    setLoading(true);

    try {
      const trip = await generateTripItinerary({
        startLocation: { name: startName },
        endLocation: { name: endName },
        startDate,
        endDate,
        interests: selectedInterests,
        duration,
      });

      saveInterestsToLocal(selectedInterests);
      saveTripToLocal(trip);
      router.push(`/trips/${trip.id}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">3.0 AI Concierge</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Build my trip" />

        <Row title="Demo route (one click)">
          <div className="rounded-2xl border border-white/45 bg-white/60 p-4 shadow-sm backdrop-blur">
            <div className="text-sm font-semibold text-slate-800">{demoPreset.name}</div>
            <div className="mt-1 text-xs text-slate-600">{demoPreset.description}</div>
            <div className="mt-3">
              <CTA variant="secondary">
                <Link href="/concierge?preset=cape-charles-dc">Use demo preset</Link>
              </CTA>
            </div>
          </div>
        </Row>

        <Row title="Start">
          <div className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-700 shadow-sm backdrop-blur">
            {startName}
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Demo input. In production this would support search or current location.
          </div>
        </Row>

        <Row title="Destination">
          <div className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-700 shadow-sm backdrop-blur">
            {endName}
          </div>
        </Row>

        <Row title="When">
          <div className="grid grid-cols-2 gap-3">
            <label className="text-xs font-semibold text-slate-600">
              Start
              <input
                className="mt-1 w-full rounded-xl border border-white/55 bg-white/60 px-3 py-2 text-sm text-slate-700 shadow-sm outline-none"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label className="text-xs font-semibold text-slate-600">
              End
              <input
                className="mt-1 w-full rounded-xl border border-white/55 bg-white/60 px-3 py-2 text-sm text-slate-700 shadow-sm outline-none"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </div>
        </Row>

        <Row title="Duration preset">
          <div className="flex flex-wrap gap-2">
            {DURATIONS.map((d) => (
              <Pill key={d.id} onClick={() => setDuration(d.id)}>
                <span className={duration === d.id ? "font-semibold" : ""}>{d.label}</span>
              </Pill>
            ))}
          </div>
          <div className="mt-2 text-xs text-slate-500">You edit by preference, not configuration.</div>
        </Row>

        <Row title="Interests">
          <div className="text-sm text-slate-700">Pick a few signals. Percy curates the rest.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {allInterests.slice(0, 12).map((interest) => {
              const active = selectedInterests.includes(interest.id);
              return (
                <Pill key={interest.id} onClick={() => toggleInterest(interest.id)}>
                  <span className={active ? "font-semibold" : ""}>{interest.label}</span>
                </Pill>
              );
            })}
          </div>
          <div className="mt-3 text-xs text-slate-500">Finite and curated. No endless feed.</div>
        </Row>

        <CTA>
          <button type="button" onClick={onBuild} className="w-full" disabled={loading}>
            {loading ? "Building…" : "Generate my itinerary"}
          </button>
        </CTA>

        <BottomNav activeHref="/trips" />
        <Note>Demo: AI concierge is mocked. No third-party APIs.</Note>
      </Phone>
    </main>
  );
}
