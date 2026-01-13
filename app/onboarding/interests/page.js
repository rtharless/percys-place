import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";

export default function InterestsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.3 Travel Style & Interests</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link href="/onboarding/persona" className="text-sm font-semibold text-slate-700">
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
            <Pill tone="onboarding">Natural beauty</Pill>
            <Pill tone="onboarding" selected accent="blue">Hidden attractions</Pill>
            <Pill tone="onboarding" selected accent="blue">Local flavors</Pill>
            <Pill tone="onboarding">What locals do</Pill>
            <Pill tone="onboarding">Historical significance</Pill>
            <Pill tone="onboarding">Ultimate serenity</Pill>
            <Pill tone="onboarding">Wildlife</Pill>
            <Pill tone="onboarding">Temporary events</Pill>
          </div>

          <CTA>
            <Link href="/onboarding/route-preferences">Continue</Link>
          </CTA>

          <Note>Note: Chip UI reduces form friction.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
