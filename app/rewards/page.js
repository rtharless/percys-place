import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RewardsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">7.1 Rewards</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Rewards" />

        <Row title="Your progress">
          <div className="text-3xl font-semibold text-slate-900">1,240</div>
          <div className="mt-1 text-xs text-slate-500">Things you've discovered</div>
          <div className="mt-3 rounded-xl border border-white/50 bg-white/60 px-3 py-3 text-xs text-slate-700 shadow-sm backdrop-blur">
            Next theme emerging: [bar placeholder]
          </div>
          <div className="mt-2 text-sm text-slate-700">
            A quiet record of the places you’ve explored—and the kinds of stops you’re drawn to.
          </div>
        </Row>

        <Row title="Recent discoveries (finite list)">
          <ListItem>Percy’s Place — Round Rock • Jan 6 • +120</ListItem>
          <ListItem>Percy’s Place — Georgetown • Jan 2 • +80</ListItem>
          <ListItem>Percy’s Place — Bastrop • Dec 28 • +140</ListItem>
        </Row>

        <BottomNav activeHref="/rewards" />
        <Note>Note: Clear, calm rewards. No gamified extras.</Note>
      </Phone>
    </main>
  );
}
