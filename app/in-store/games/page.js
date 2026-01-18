import Link from "next/link";

import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";
import GamesHub from "@/components/wireframe/GamesHub";

export default function InStoreGamesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.2 Quiet Games</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Games" />

        <Row title="A small break">
          <div className="text-sm text-slate-700">No timers. No pressure. Just something gentle while you wait.</div>
        </Row>

        <GamesHub />
      </Phone>
    </main>
  );
}
