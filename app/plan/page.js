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
        </Row>
        <Row title="Destination">
          <div className="rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-sm text-slate-700 shadow-sm backdrop-blur transition hover:bg-white/70">
            Marfa, TX
          </div>
        </Row>

        <Row title="Route mood">
          <Pill>Scenic route (recommended)</Pill>
          <Pill>Direct route</Pill>
        </Row>

        <Row title="Stops">
          <div className="text-sm text-slate-700">
            Let Percy add a few finds (on)
          </div>
          <div className="mt-1 text-xs text-slate-500">
            We'll weave in places that match your vibe—with room for surprise.
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
