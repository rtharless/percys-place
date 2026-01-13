import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";

export default function RoutePreferencesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.4 Route Preferences</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link href="/onboarding/interests" className="text-sm font-semibold text-slate-700">
              Back
            </Link>
            <div className="text-xs font-semibold text-[#475569]">Adventure setup</div>
          </div>

          <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#E6EBF2]">
            <div className="h-full w-[80%] bg-[#1E3A8A]" />
            <div
              className="absolute top-0 h-full w-[2px] bg-[#C8102E]"
              style={{ left: "75%" }}
            />
          </div>

          <div className="mt-5 text-[20px] font-semibold tracking-tight text-slate-900">
            A few route preferences.
          </div>
          <div className="mt-1 text-sm text-[#475569]">Just enough to shape the vibe.</div>

          <div className="mt-4">
            <div className="text-xs font-semibold tracking-wide text-[#475569]">Vehicle</div>
            <div className="mt-1 text-sm font-medium text-[#0F172A]">Select EV model</div>
          </div>

          <div className="mt-5">
            <div className="text-xs font-semibold tracking-wide text-[#475569]">Charging style</div>
            <div className="mt-1">
              <Pill tone="onboarding" selected accent="blue">Fast charging</Pill>
              <Pill tone="onboarding">Standard</Pill>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-xs font-semibold tracking-wide text-[#475569]">How long do you like to stop?</div>
            <div className="mt-1">
              <Pill tone="onboarding">15–30 min</Pill>
              <Pill tone="onboarding" selected accent="blue">30–60 min</Pill>
              <Pill tone="onboarding">60+ min</Pill>
            </div>
          </div>

          <CTA>
            <Link href="/onboarding/safety">Continue</Link>
          </CTA>

          <Note>
            Note: Just enough to shape the vibe—Percy handles the details.
          </Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
