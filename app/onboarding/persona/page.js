import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";

export default function PersonaPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.2 Persona Selection</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link href="/onboarding/welcome" className="text-sm font-semibold text-slate-700">
              Back
            </Link>
            <div className="text-xs font-semibold text-[#475569]">Adventure setup</div>
          </div>

          <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#E6EBF2]">
            <div className="h-full w-[40%] bg-[#1E3A8A]" />
            <div
              className="absolute top-0 h-full w-[2px] bg-[#C8102E]"
              style={{ left: "25%" }}
            />
          </div>

          <div className="mt-5 text-[20px] font-semibold tracking-tight text-slate-900">
            How do you like to explore?
          </div>
          <div className="mt-1 text-sm text-[#475569]">Select one</div>

          <List>
            <ListItem tone="onboarding" selected accent="blue">
              Steady & scenic (default)
            </ListItem>
            <ListItem tone="onboarding">Comfort stops & easy wins</ListItem>
            <ListItem tone="onboarding" accent="sand">Slow wander & small-town charm</ListItem>
            <ListItem tone="onboarding" accent="red">Curious detours & surprise finds</ListItem>
          </List>

          <CTA>
            <Link href="/onboarding/interests">Continue</Link>
          </CTA>

          <Note>Note: Large cards for easy selection while traveling.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
