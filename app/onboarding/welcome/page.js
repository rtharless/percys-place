import Link from "next/link";

import PercysLogo from "@/components/brand/PercysLogo";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";

export default function WelcomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.1 Welcome</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between gap-3">
            <PercysLogo />
            <div className="shrink-0 rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-ink">
              Demo
            </div>
          </div>

          <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            Plan smarter stops.
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            Charging, food, and local favorites—picked for your route.
          </div>

          <div className="mt-3">
            <Pill>Fast chargers</Pill>
            <Pill>Local eats</Pill>
            <Pill>Curated stops</Pill>
          </div>

          <div className="mt-4">
            <CTA>
              <Link href="/onboarding/persona">Get started</Link>
            </CTA>
            <div className="mt-1 text-center text-sm font-semibold text-slate-700">
              <Link href="/home">Sign in</Link>
            </div>
          </div>

          <Row>
            <div className="text-xs text-slate-600">
              Percy's Place finds the best quick stops along your drive—with room
              for spontaneity.
            </div>
          </Row>

          <Note>Note: Single primary action to keep onboarding calm.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
