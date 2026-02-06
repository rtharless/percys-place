import Link from "next/link";

import { PercysLogoMark } from "@/components/brand/PercysLogo";
import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import { getFeaturedTrips, getSeasonalTrips } from "@/demo/data";

export default async function HomeDashboardPage() {
  const featuredTrips = await getFeaturedTrips();
  const seasonalTrips = await getSeasonalTrips();

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
          <div className="text-xs font-semibold text-slate-600">Percy, your AI concierge</div>
          <div className="mt-1 text-base font-semibold text-slate-900">
            Tell Percy the vibe—Percy builds the trip.
          </div>
          <div className="mt-1 text-xs text-slate-600">
            A few signals. A curated itinerary. Room for surprise.
          </div>

          <CTA>
            <Link href="/concierge">Build my trip</Link>
          </CTA>

          <div className="-mt-1 text-xs text-slate-600">Curated discovery. No infinite scroll.</div>
        </div>

        <Row title="Featured Trips">
          <div className="text-sm text-slate-700">Handpicked escapes with a clear theme.</div>

          <div className="mt-3 grid gap-3">
            {featuredTrips.slice(0, 5).map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
              >
                <div
                  className="relative h-[104px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.image})`,
                    filter: "saturate(1.15) contrast(1.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">{trip.title}</div>
                    <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                      {trip.duration}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-slate-600">{trip.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
        </Row>

        <Row title="Seasonal Trips">
          <div className="text-sm text-slate-700">Curated for right now—only a few.</div>

          <div className="mt-3 grid gap-3">
            {seasonalTrips.slice(0, 6).map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/seasonal/${trip.id}`}
                className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
              >
                <div
                  className="relative h-[96px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${trip.image})`,
                    filter: "saturate(1.15) contrast(1.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">{trip.title}</div>
                    <div className="shrink-0 rounded-full border border-white/55 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                      {trip.duration}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-slate-600">{trip.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
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
            <Link href="/concierge">Build my trip</Link>
          </Pill>
          <Pill>
            <Link href="/explore">Explore Nearby</Link>
          </Pill>
          <Pill>
            <Link href="/rewards">Your progress</Link>
          </Pill>
        </Row>

        <BottomNav activeHref="/home" />
      </Phone>
    </main>
  );
}
