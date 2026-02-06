"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";

import {
  getInterests,
  getInterestsFromLocal,
  saveInterestsToLocal,
} from "@/demo/data";

export default function InterestsPage() {
  const router = useRouter();
  const [allInterests, setAllInterests] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const interests = await getInterests();
      if (!mounted) return;
      setAllInterests(interests);
      setSelected(getInterestsFromLocal());
    })();
    return () => {
      mounted = false;
    };
  }, []);

  function toggle(id) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  }

  function onContinue() {
    saveInterestsToLocal(selected);
    router.push("/onboarding/permissions");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.3 Travel Style & Interests</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link
              href="/onboarding/persona"
              className="inline-flex items-center rounded-2xl border border-white/60 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_22px_rgba(2,6,23,0.06)] backdrop-blur transition hover:bg-white/65 hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)] active:scale-[0.99]"
            >
              Back
            </Link>
            <div className="text-xs font-semibold text-[#475569]">Adventure setup</div>
          </div>

          <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#E6EBF2]">
            <div className="h-full w-[60%] bg-[#1E3A8A]" />
            <div
              className="absolute top-0 h-full w-[2px] bg-[#C8102E]"
              style={{ left: "50%" }}
            />
          </div>

          <div className="mt-5 text-[20px] font-semibold tracking-tight text-slate-900">
            What should Percy watch for?
          </div>
          <div className="mt-1 text-sm text-[#475569]">Select any</div>

          <div className="mt-2">
            {allInterests.map((interest) => {
              const isSelected = selected.includes(interest.id);
              return (
                <Pill
                  key={interest.id}
                  tone="onboarding"
                  selected={isSelected}
                  accent={isSelected ? "blue" : undefined}
                  onClick={() => toggle(interest.id)}
                >
                  {interest.label}
                </Pill>
              );
            })}
          </div>

          <CTA>
            <button type="button" className="w-full" onClick={onContinue}>
              Continue
            </button>
          </CTA>

          <Note>Note: Chip UI reduces form friction.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
