import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

function badge(text) {
  return (
    <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
      {text}
    </span>
  );
}

export default function ExperienceDetailPage({ searchParams }) {
  const kind = typeof searchParams?.kind === "string" ? searchParams.kind : "";
  const id = typeof searchParams?.id === "string" ? searchParams.id : "";
  const title = typeof searchParams?.title === "string" ? searchParams.title : "Curated stop";

  const isPhoto = kind === "photo";
  const badgeText = isPhoto ? "Best photo stop" : kind === "historic" ? "Historic marker" : "Curated";

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.2 Experience Detail</h1>

      <Phone>
        <TopBar left={<Link href="/explore">Back</Link>} title="Experience" />

        <Row>
          <div className="overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)]">
            <div
              className="relative h-[140px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${isPhoto ? "/images/placeholders/trip-scenic.svg" : "/images/placeholders/trip-historic.svg"})`,
                filter: "saturate(1.15) contrast(1.08)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              <div className="absolute left-3 top-3">{badge(badgeText)}</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-semibold text-slate-600">Preview</div>
              <div className="mt-1 text-base font-semibold text-slate-900">{title}</div>
              <div className="mt-1 text-[11px] text-slate-500">ID: {id || "demo"}</div>
            </div>
          </div>
        </Row>

        <Row title="Experience Name">
          <div className="text-sm text-slate-700">{title}</div>
          <div className="mt-1 text-xs text-slate-500">Distance + time impact (mocked)</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {badge(isPhoto ? "Photo spot" : "Historic")}
            {badge("Handpicked")}
          </div>
        </Row>

        <Row title="Why it is special">
          <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
            A small, intentional detour—chosen to match your interests and the tempo of the day.
          </div>
        </Row>

        <Row title="What to expect">
          <div className="grid gap-2 text-sm text-slate-700">
            <div>Quiet arrival and a clear reason to stop.</div>
            <div>One highlight worth remembering.</div>
            <div>Easy to skip if the vibe changes.</div>
          </div>
        </Row>

        <Row title="Time commitment">
          <div className="text-sm text-slate-700">45 minutes (demo)</div>
        </Row>

        <Row title="Percy’s exclusive perk">
          <div className="text-sm text-slate-700">A tiny local detail Percy would surface here (placeholder).</div>
        </Row>

        <CTA>
          <Link href="/plan/map">Add to route</Link>
        </CTA>

        <Row title="Filters">
          <div className="flex flex-wrap gap-2">
            <Pill>{isPhoto ? "Photo spot" : "Historic marker"}</Pill>
            <Pill>Curated</Pill>
          </div>
        </Row>

        <BottomNav activeHref="/explore" />
        <Note>
          Note: Single-page confidence builder; clear CTA.
        </Note>
      </Phone>
    </main>
  );
}
