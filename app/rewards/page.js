import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RewardsPage() {
  const discoveredCount = 1240;
  const progressTotal = 2000;
  const progressPct = Math.min(100, Math.round((discoveredCount / progressTotal) * 100));

  const onboardingComplete = true;
  const builtAdventure = true;
  const viewedFeaturedJourney = true;

  const earnedBadges = [
    ...(onboardingComplete ? [{ name: "First Journey" }] : []),
    ...(builtAdventure ? [{ name: "Curious Explorer" }] : []),
    ...(viewedFeaturedJourney ? [{ name: "Inspired Wanderer" }] : []),
    { name: "Quiet Explorer" },
    { name: "Scenic Seeker" },
  ].slice(0, 5);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">7.1 Rewards</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Rewards" />

        <Row title="Your journey so far">
          <div className="text-3xl font-semibold text-slate-900">{discoveredCount.toLocaleString()}</div>
          <div className="mt-1 text-xs text-slate-500">Things you've discovered</div>

          <div className="mt-3">
            <div className="h-[6px] w-full overflow-hidden rounded-full bg-slate-900/10">
              <div
                className="h-full bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A]"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </Row>

        <Row title="Badges earned">
          <div className="grid grid-cols-2 gap-3">
            {earnedBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-3 py-3 shadow-sm backdrop-blur"
              >
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#0B1F3A] to-[#1E3A8A] text-xs font-semibold text-white shadow-[0_10px_22px_rgba(30,58,138,0.18)]">
                  ✦
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-800">{badge.name}</div>
                  <Link
                    href="/plan/map?focus=round-rock"
                    className="mt-1 block text-[11px] font-semibold text-slate-600"
                  >
                    View on route
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Your scrapbook">
          <div className="text-sm text-slate-700">A quiet record of what you found</div>

          <div className="mt-3 grid gap-3">
            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Round Rock</div>
              <div className="mt-0.5 text-xs text-slate-600">Jan 6</div>
              <div className="mt-2 text-xs text-slate-700">
                Morning light, a calm stop, and a tiny detail worth keeping.
              </div>
              <Link href="/plan/map?focus=round-rock" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Georgetown</div>
              <div className="mt-0.5 text-xs text-slate-600">Jan 2</div>
              <div className="mt-2 text-xs text-slate-700">
                A quiet detour that felt like it belonged to the day.
              </div>
              <Link href="/plan/map?focus=junction" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-3 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-800">Percy’s Place — Bastrop</div>
              <div className="mt-0.5 text-xs text-slate-600">Dec 28</div>
              <div className="mt-2 text-xs text-slate-700">
                The kind of place you’d pass by twice—just to notice more.
              </div>
              <Link href="/plan/map?focus=round-rock" className="mt-2 inline-block text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>
          </div>

          <CTA variant="secondary">
            <Link href="/scrapbook">View scrapbook</Link>
          </CTA>
        </Row>

        <Row title="Recent discoveries (finite list)">
          <ListItem>
            <div className="flex items-center justify-between gap-3">
              <div>Percy’s Place — Round Rock • Jan 6 • +120</div>
              <Link href="/plan/map?focus=round-rock" className="text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between gap-3">
              <div>Percy’s Place — Georgetown • Jan 2 • +80</div>
              <Link href="/plan/map?focus=junction" className="text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center justify-between gap-3">
              <div>Percy’s Place — Bastrop • Dec 28 • +140</div>
              <Link href="/plan/map?focus=round-rock" className="text-[11px] font-semibold text-slate-600">
                View on route
              </Link>
            </div>
          </ListItem>
        </Row>

        <BottomNav activeHref="/rewards" />
        <Note>Note: Clear, calm rewards. No gamified extras.</Note>
      </Phone>
    </main>
  );
}
