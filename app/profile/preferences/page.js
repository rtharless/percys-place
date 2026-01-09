"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function PreferencesPage() {
  const personaOptions = useMemo(
    () => ["EV Driver", "Family", "Retiree", "Adventurous Couple / Solo"],
    [],
  );
  const interestOptions = useMemo(
    () => [
      "Scenic routes",
      "Local food",
      "Nature & parks",
      "History & culture",
      "Art & music",
      "Shopping",
      "Outdoor activities",
    ],
    [],
  );

  const [persona, setPersona] = useState(personaOptions[0]);
  const [interests, setInterests] = useState(["Scenic routes", "Local food"]);

  function toggleInterest(label) {
    setInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">8.2 Preferences</h1>

      <Phone>
        <TopBar left={<Link href="/profile">Back</Link>} title="Preferences" />

        <Row title="Persona">
          <div className="text-xs text-slate-600">Choose what best fits your trip.</div>
          <div className="mt-2">
            <select
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              className="w-full rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-800 shadow-sm backdrop-blur"
            >
              {personaOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </Row>

        <Row title="Interests">
          <div className="text-xs text-slate-600">Pick a few. We’ll tailor stops and suggestions.</div>
          <div className="mt-2">
            {interestOptions.map((label) => {
              const selected = interests.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleInterest(label)}
                  className={
                    selected
                      ? "mr-2 mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm active:scale-[0.99]"
                      : "mr-2 mt-2 inline-flex items-center rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white/70 active:scale-[0.99]"
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="mt-3">
            {interests.length ? (
              interests.map((i) => <Pill key={i}>{i}</Pill>)
            ) : (
              <div className="text-xs text-slate-500">No interests selected.</div>
            )}
          </div>
        </Row>

        <Row title="Route Preferences">
          <div>EV model</div>
          <div>Charging preference</div>
          <div>Typical stop duration</div>
        </Row>

        <Row title="Safety & Comfort">
          <div>Toggle list (same as onboarding)</div>
        </Row>

        <Note>
          Note: Mirrors onboarding; editable without re-onboarding.
        </Note>
      </Phone>
    </main>
  );
}
