import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function PlanTripPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">3.1 Start & Destination Input</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Build an adventure" />

        <Row title="Starting location">
          <div className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-700 shadow-sm backdrop-blur transition hover:bg-white/70">
            Austin, TX (current)
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Percy will handle the details—stops, timing, and small surprises—so you can keep this simple.
          </div>
        </Row>
        <Row title="Destination">
          <div className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-700 shadow-sm backdrop-blur transition hover:bg-white/70">
            Marfa, TX
          </div>
        </Row>

        <Row title="Route mood">
          <Pill>Scenic route (recommended)</Pill>
          <Pill>Direct route</Pill>
          <div className="mt-3">
            <Link href="/profile/preferences" className="text-xs font-semibold text-slate-700">
              Tune this later
            </Link>
          </div>
        </Row>

        <CTA>
          <Link href="/plan/map">Show my adventure</Link>
        </CTA>

        <BottomNav activeHref="/plan" />
        <Note>Note: Short inputs; no long forms.</Note>
      </Phone>
    </main>
  );
}
