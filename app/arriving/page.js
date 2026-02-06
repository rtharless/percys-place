"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function ArrivingPage() {
  const searchParams = useSearchParams();
  const tripId = searchParams?.get("tripId") || "";

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.9 Arriving Moment</h1>

      <Phone>
        <TopBar
          left={<Link href={tripId ? `/trips/${tripId}` : "/home"}>Back</Link>}
          title="Arriving at Percy’s Place"
        />

        <Row>
          <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
            <div className="p-5">
              <div className="text-xs font-semibold text-slate-600">Arrival transition</div>
              <div className="mt-1 text-base font-semibold text-slate-900">
                Welcome. Take a breath.
              </div>
              <div className="mt-1 text-xs text-slate-600">
                This moment is designed to feel intentional and calm.
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Check in</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Confirm you’ve arrived. (Demo UI only)
                  </div>
                  <div className="mt-3">
                    <CTA variant="secondary">
                      <button type="button" className="w-full">I’m here</button>
                    </CTA>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Pre-order</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Coffee, tea, or a light snack—ready when you walk in.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>Cold brew</Pill>
                    <Pill>Herbal tea</Pill>
                    <Pill>Breakfast sandwich</Pill>
                    <Pill>Fruit + yogurt</Pill>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Seat preference</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Pick the vibe for your stop.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>Quiet corner</Pill>
                    <Pill>Window seat</Pill>
                    <Pill>Community table</Pill>
                    <Pill>Outdoor patio</Pill>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/50 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">Ambient settings</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Small preferences that shape the moment.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>Warm lighting</Pill>
                    <Pill>Low music</Pill>
                    <Pill>Focus mode</Pill>
                    <Pill>Social mode</Pill>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <CTA>
                  <Link href={tripId ? `/scrapbook?tripId=${tripId}` : "/scrapbook"}>Continue →</Link>
                </CTA>
              </div>

              <div className="mt-3 text-[11px] text-slate-500">
                Demo: no payments, no real ordering, no real in-store integrations.
              </div>
            </div>
          </div>
        </Row>

        <Note>Demo screen. UI only.</Note>
      </Phone>
    </main>
  );
}
