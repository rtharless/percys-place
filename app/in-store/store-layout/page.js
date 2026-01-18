import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function StoreLayoutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.2 Store Layout Overview</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Store Layout" />

        <Row>
          <div className="rounded-2xl border border-white/55 bg-white/55 p-3 shadow-sm backdrop-blur">
            <div className="text-xs font-semibold text-slate-700">Floor plan</div>
            <div className="mt-2 overflow-hidden rounded-xl border border-slate-900/10 bg-gradient-to-b from-slate-900/5 to-white/45">
              <svg viewBox="0 0 320 160" className="block h-auto w-full">
                <defs>
                  <linearGradient id="ppFloor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(15,23,42,0.04)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.65)" />
                  </linearGradient>
                </defs>

                <rect x="10" y="10" width="300" height="140" rx="16" fill="url(#ppFloor)" stroke="rgba(15,23,42,0.18)" />

                <rect x="18" y="18" width="88" height="52" rx="12" fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.55)" />
                <text x="62" y="48" textAnchor="middle" fontSize="12" fill="rgba(15,23,42,0.72)" fontFamily="ui-sans-serif, system-ui">Cafe</text>

                <rect x="214" y="18" width="88" height="52" rx="12" fill="rgba(251,113,133,0.16)" stroke="rgba(251,113,133,0.55)" />
                <text x="258" y="42" textAnchor="middle" fontSize="12" fill="rgba(15,23,42,0.72)" fontFamily="ui-sans-serif, system-ui">Restrooms</text>
                <text x="258" y="58" textAnchor="middle" fontSize="10" fill="rgba(15,23,42,0.55)" fontFamily="ui-sans-serif, system-ui">→</text>

                <rect x="18" y="78" width="284" height="60" rx="14" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.35)" />
                <text x="160" y="106" textAnchor="middle" fontSize="12" fill="rgba(15,23,42,0.72)" fontFamily="ui-sans-serif, system-ui">Seating</text>

                <g fill="rgba(15,23,42,0.20)">
                  <circle cx="84" cy="104" r="3" />
                  <circle cx="108" cy="104" r="3" />
                  <circle cx="132" cy="104" r="3" />
                  <circle cx="156" cy="104" r="3" />
                  <circle cx="180" cy="104" r="3" />
                  <circle cx="204" cy="104" r="3" />
                  <circle cx="228" cy="104" r="3" />
                </g>

                <rect x="140" y="146" width="40" height="6" rx="3" fill="rgba(15,23,42,0.25)" />
                <text x="160" y="140" textAnchor="middle" fontSize="10" fill="rgba(15,23,42,0.55)" fontFamily="ui-sans-serif, system-ui">Entrance</text>
              </svg>
            </div>
            <div className="mt-2 text-[11px] text-slate-600">A simple overview for quick orientation.</div>
          </div>
        </Row>

        <Row title="Key Areas">
          <List>
            <ListItem>Restrooms: status (available/busy/cleaning)</ListItem>
            <ListItem>Cafe Counter: location</ListItem>
            <ListItem>Seating Area: table availability</ListItem>
          </List>
        </Row>

        <Row title="A small break">
          <div className="text-sm text-slate-700">If you’re waiting, here are a few quiet games.</div>
          <CTA variant="secondary">
            <Link href="/in-store/games">Open games</Link>
          </CTA>
        </Row>

        <Note>Note: Reduce wandering; quick answers.</Note>
      </Phone>
    </main>
  );
}
