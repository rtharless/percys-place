import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function ExploreNearbyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.1 Curated Experiences List</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Explore Nearby" />

        <Row title="Near you">
          <div className="text-sm text-slate-700">Along your route to Marfa</div>
          <div className="mt-1 text-xs text-slate-500">Curated, finite list. No doom-scroll.</div>
        </Row>

        <Row title="Historic markers">
          <div className="rounded-2xl border border-white/50 bg-white/60 px-3 py-3 text-xs text-slate-700 shadow-sm backdrop-blur">
            <div className="font-semibold text-slate-900">Little stories along the way</div>
            <div className="mt-1 text-slate-600">
              Percy can surface historic markers on your route–what you saw, what you almost passed,
              and what you might want to loop back for.
            </div>
            <div className="mt-2 text-slate-600">[No data yet–this is a future signal.]</div>
          </div>
        </Row>

        <Row title="Experience Cards (curated)">
          <ListItem>
            <div className="font-semibold">Scenic Overlook</div>
            <div className="mt-1 text-xs text-slate-500">
              Short stop for photos • +12 min • 2.1 mi
            </div>
            <div className="mt-2 text-xs text-slate-600">Save / Add to route</div>
          </ListItem>
          <ListItem>
            <div className="font-semibold">Local Bakery Pop‑Up</div>
            <div className="mt-1 text-xs text-slate-500">
              Fresh coffee + pastries • +18 min • 4.7 mi
            </div>
            <div className="mt-2 text-xs text-slate-600">Save / Add to route</div>
          </ListItem>
          <ListItem>
            <div className="font-semibold">Tiny Museum</div>
            <div className="mt-1 text-xs text-slate-500">
              Quick culture hit • +25 min • 0.9 mi
            </div>
            <div className="mt-2 text-xs text-slate-600">Save / Add to route</div>
          </ListItem>
        </Row>

        <Row>
          <Link href="/explore/experience">Experience details</Link>
        </Row>

        <BottomNav activeHref="/explore" />
        <Note>Note: No infinite scroll; curated list only.</Note>
      </Phone>
    </main>
  );
}
