import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function InCarModePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.8 In‑Car Mode (Placeholder)</h1>

      <Phone>
        <TopBar left={<Link href="/trips">Back</Link>} title="In‑car mode" />

        <Row>
          <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
            <div className="p-5">
              <div className="text-xs font-semibold text-slate-600">UI only</div>
              <div className="mt-1 text-base font-semibold text-slate-900">Glanceable. Calm. Minimal.</div>
              <div className="mt-1 text-xs text-slate-600">
                A CarPlay / Android Auto style experience is planned. This demo shows the layout direction only.
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Supported platforms (planned)</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>Apple CarPlay</Pill>
                    <Pill>Android Auto</Pill>
                    <Pill>Built‑in vehicle OS</Pill>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    No integrations in demo. No vehicle permissions. No background tracking.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">What you’d see</div>
                  <div className="mt-2 grid gap-2 text-xs text-slate-700">
                    <div>Next curated stop</div>
                    <div>Photo spot / historic marker prompts</div>
                    <div>Arrival moment shortcut</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <CTA>
                  <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
                </CTA>
              </div>

              <div className="mt-3 text-[11px] text-slate-500">
                Disclaimer: Demo only. Do not use while driving.
              </div>
            </div>
          </div>
        </Row>

        <Note>Demo screen. UI only.</Note>
      </Phone>
    </main>
  );
}
