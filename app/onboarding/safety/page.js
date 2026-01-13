import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";

export default function SafetyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.5 Safety & Comfort</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link href="/onboarding/route-preferences" className="text-sm font-semibold text-slate-700">
              Back
            </Link>
            <div className="text-xs font-semibold text-[#475569]">Adventure setup</div>
          </div>

          <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#E6EBF2]">
            <div className="h-full w-full bg-[#1E3A8A]" />
            <div
              className="absolute top-0 h-full w-[2px] bg-[#C8102E]"
              style={{ left: "100%" }}
            />
          </div>

          <div className="mt-5 text-[20px] font-semibold tracking-tight text-slate-900">
            What helps you feel at ease on the road?
          </div>
          <div className="mt-1 text-sm text-[#475569]">Select any</div>

          <List>
            <ListItem tone="onboarding" selected accent="red">
              Well-lit parking (on/off)
            </ListItem>
            <ListItem tone="onboarding" selected accent="red">
              Clean restrooms (on/off)
            </ListItem>
            <ListItem tone="onboarding">Indoor seating (on/off)</ListItem>
            <ListItem tone="onboarding">Pet-friendly (on/off)</ListItem>
          </List>

          <CTA>
            <Link href="/home">Start discovering</Link>
          </CTA>

          <Note>Note: Simple toggles; no long form.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
