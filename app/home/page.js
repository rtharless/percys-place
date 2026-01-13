import Link from "next/link";

import { PercysLogoMark } from "@/components/brand/PercysLogo";
import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import MapPreview from "@/components/wireframe/MapPreview";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function HomeDashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">2.1 Home Dashboard</h1>

      <Phone>
        <TopBar
          left={<PercysLogoMark size={28} />}
          title=""
          right={<Link href="/profile">Profile</Link>}
        />

        <div className="my-3 rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] p-5 shadow-[0_16px_44px_rgba(2,6,23,0.10)] backdrop-blur">
            <div className="text-xs font-semibold text-slate-600">Percy, your concierge</div>
            <div className="mt-1 text-base font-semibold text-slate-900">
              Tell Percy the vibe—Percy builds the adventure.
            </div>
            <div className="mt-1 text-xs text-slate-600">
              A few signals. A curated route. Room for surprise.
            </div>

            <CTA>
              <Link href="/plan">Build my adventure</Link>
            </CTA>

            <div className="-mt-1 text-xs text-slate-600">You’ve discovered 1,240 places so far.</div>
        </div>

        <Row title="Today’s route">
          <div className="text-sm text-slate-700">Austin → Marfa</div>
          <div className="mt-3">
            <MapPreview height={140} />
          </div>
          <div className="mt-3">
            <Link href="/plan/map" className="text-xs font-semibold text-slate-700">
              Open route
            </Link>
          </div>
        </Row>

        <Row title="Featured journeys">
          <div className="text-sm text-slate-700">
            Curated escapes—built to feel like you found something.
          </div>

          <div className="mt-3 grid gap-3">
            <Link
              href="/plan/map"
              className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
            >
              <div
                className="relative h-[96px] bg-cover bg-center"
                style={{ backgroundImage: "url(/journeys/deserttowns.jpeg)", filter: "saturate(1.15) contrast(1.08)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">Desert light — quiet towns</div>
                  <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                    Perfect long weekend
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Scenic roads, small galleries, and wide-open sky.
                </div>
              </div>
            </Link>

            <Link
              href="/explore"
              className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
            >
              <div
                className="relative h-[96px] bg-cover bg-center"
                style={{ backgroundImage: "url(/journeys/local%20flavors.jpeg)", filter: "saturate(1.15) contrast(1.08)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">Local flavors — near-you finds</div>
                  <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                    Afternoon drift
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Coffee, pop-ups, and the kind of stops you text a friend about.
                </div>
              </div>
            </Link>

            <Link
              href="/location"
              className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
            >
              <div
                className="relative h-[96px] bg-cover bg-center"
                style={{ backgroundImage: "url(/journeys/hidden%20views.jpeg)", filter: "saturate(1.15) contrast(1.08)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">Hidden viewpoints — one good stretch</div>
                  <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                    7-day escape
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Slow miles, quiet overlooks, and a route that breathes.
                </div>
              </div>
            </Link>
          </div>
        </Row>

        <Row title="Next trip">
          <div className="text-base font-semibold">Austin → Marfa</div>
          <div className="mt-1 text-xs text-slate-500">Departure: Sat 9:30 AM</div>
          <CTA>
            <Link href="/plan/map">View route</Link>
          </CTA>
          <CTA variant="secondary">Edit route</CTA>
        </Row>

        <Row title="Nearby Percy’s Locations">
          <div className="my-2 rounded-xl border border-white/50 bg-white/60 p-3 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/70">
            Percy’s Place — Round Rock • 8 min • 4 fast chargers
          </div>
          <div className="my-2 rounded-xl border border-white/50 bg-white/60 p-3 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/70">
            Percy’s Place — Georgetown • 18 min • 2 fast chargers
          </div>
        </Row>

        <Row title="Primary Actions">
          <Pill>
            <Link href="/plan">Build an adventure</Link>
          </Pill>
          <Pill>
            <Link href="/explore">Explore Nearby</Link>
          </Pill>
          <Pill>
            <Link href="/rewards">Your progress</Link>
          </Pill>
        </Row>

        <CTA variant="secondary">
          <Link href="/onboarding">Start onboarding</Link>
        </CTA>

        <BottomNav activeHref="/home" />
      </Phone>
    </main>
  );
}
