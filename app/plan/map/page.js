import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RouteMapPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">3.2 Map View (Stops Highlighted)</h1>

      <Phone>
        <TopBar left={<Link href="/plan">Back</Link>} title="Route Map" />

        <div className="relative my-2 h-[280px] overflow-hidden rounded-3xl border border-white/50 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(220,38,38,0.18),_transparent_60%),linear-gradient(180deg,_rgba(255,255,255,0.75),_rgba(255,255,255,0.30))] shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
          <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply [background-image:linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

          <svg
            viewBox="0 0 390 280"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M35,230 C70,175 95,190 120,150 C145,110 175,120 205,85 C235,50 270,60 305,40 C330,25 350,20 365,25"
              fill="none"
              stroke="rgba(37,99,235,0.85)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M35,230 C70,175 95,190 120,150 C145,110 175,120 205,85 C235,50 270,60 305,40 C330,25 350,20 365,25"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute left-6 top-8 rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
            Austin → Marfa
          </div>
          <div className="absolute right-6 top-8 rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
            Percy finds
          </div>

          <div className="absolute left-6 top-[52px] rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
            Google Maps API embed TK
          </div>

          <div className="absolute left-[26px] top-[214px] h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(255,255,255,0.75)]" />
          <div className="absolute left-[118px] top-[132px] h-5 w-5 rounded-full bg-brand-red shadow-[0_0_0_4px_rgba(255,255,255,0.75)]" />
          <div className="absolute left-[196px] top-[72px] h-5 w-5 rounded-full bg-brand-red shadow-[0_0_0_4px_rgba(255,255,255,0.75)]" />
          <div className="absolute left-[352px] top-[18px] h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_4px_rgba(255,255,255,0.75)]" />

          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-xs text-slate-700 shadow-sm backdrop-blur">
            <div className="font-semibold text-slate-900">2 stops added</div>
            <div className="mt-0.5">Quiet views • Local flavors</div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              Layers
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              Recenter
            </div>
          </div>
        </div>

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
