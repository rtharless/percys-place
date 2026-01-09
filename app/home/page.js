import Link from "next/link";

import { PercysLogoMark } from "@/components/brand/PercysLogo";
import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
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
            <Link href="/plan">Plan a Trip</Link>
          </Pill>
          <Pill>
            <Link href="/explore">Explore Nearby</Link>
          </Pill>
          <Pill>
            <Link href="/rewards">View Rewards</Link>
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
