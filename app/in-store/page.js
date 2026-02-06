import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function InStoreCountdownPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.1 Live Charging Countdown</h1>

      <Phone>
        <TopBar left={<Link href="/location">Back</Link>} title="In‑Store" />

        <Row title="Charging Timer">
          <div>Countdown: [mm:ss]</div>
          <div>Progress: [bar placeholder]</div>
          <div>Current % / Target % / Est. range added</div>
        </Row>

        <Row title="A small break">
          <div className="text-sm text-slate-700">If you’re waiting, here are a few quiet games.</div>
          <CTA variant="secondary">
            <Link href="/in-store/games">Open games</Link>
          </CTA>
        </Row>

        <Row title="Quick Actions">
          <Pill>
            <Link href="/in-store/store-layout">Store Layout</Link>
          </Pill>
          <Pill>
            <Link href="/in-store/menu">Menu + Order Ahead</Link>
          </Pill>
          <Pill>
            <Link href="/in-store/tables">Table Availability</Link>
          </Pill>
          <Pill>
            <Link href="/in-store/restrooms">Restroom Status</Link>
          </Pill>
          <Pill>
            <Link href="/in-store/local-products">Recommended Local Products</Link>
          </Pill>
        </Row>

        <Note>Note: Designed for quick glance while waiting.</Note>
        <div className="mt-2 px-2 text-center text-[11px] text-slate-500">
          Disclaimer: Demo only. No real charging telemetry, live tracking, or payments.
        </div>
      </Phone>
    </main>
  );
}
