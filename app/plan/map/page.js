import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import RouteMapInteractive from "@/components/wireframe/RouteMapInteractive";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RouteMapPage({ searchParams }) {
  const focusedStopId = typeof searchParams?.focus === "string" ? searchParams.focus : undefined;

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">3.2 Map View (Stops Highlighted)</h1>

      <Phone>
        <TopBar left={<Link href="/plan">Back</Link>} title="Route Map" />

        <RouteMapInteractive focusedStopId={focusedStopId} />

        <div className="relative my-2 rounded-3xl border border-white/50 bg-white/70 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur">
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-900/10" />

          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-slate-900">Trip summary</div>
              <div className="mt-1 text-xs text-slate-600">
                ETA 6h 45m • 430 mi • Depart 9:30 AM
              </div>
            </div>
            <div className="shrink-0 rounded-2xl bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              EV-friendly
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 text-xs text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">Next stop</div>
              <div className="mt-1">Percy’s Place • Round Rock</div>
              <div className="mt-1 text-slate-600">In 22m • 18 min charge</div>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 text-xs text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">Arrival</div>
              <div className="mt-1">Marfa</div>
              <div className="mt-1 text-slate-600">~4:15 PM • 18% battery</div>
            </div>
          </div>

          <div className="mt-3">
            <div id="stop-round-rock">
              <ListItem>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">Percy’s Place — Round Rock</div>
                  <div className="mt-1 text-xs text-slate-500">
                    +0 min detour • Arrive 9:52 • Charge 18 min
                  </div>
                </div>
                <div className="rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-semibold text-brand-red">
                  Stop
                </div>
              </div>
              </ListItem>
            </div>
            <div id="stop-junction">
              <ListItem>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">Percy’s Place — Junction</div>
                  <div className="mt-1 text-xs text-slate-500">
                    +8 min detour • Arrive 12:18 • Charge 22 min
                  </div>
                </div>
                <div className="rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-semibold text-brand-red">
                  Stop
                </div>
              </div>
              </ListItem>
            </div>
          </div>

          <CTA>
            <Link href="/in-store">Start trip</Link>
          </CTA>
        </div>

        <Row>
          <Link href="/plan/add-stop">Add a stop</Link>
        </Row>

        <Note>Note: Map + bottom sheet keeps UI uncluttered.</Note>
      </Phone>
    </main>
  );
}
