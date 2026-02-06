import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";

export default function PermissionsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.4 Location permissions</h1>

      <Phone>
        <OnboardingSplash>
          <div className="flex items-center justify-between">
            <Link
              href="/onboarding/interests"
              className="inline-flex items-center rounded-2xl border border-white/60 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_22px_rgba(2,6,23,0.06)] backdrop-blur transition hover:bg-white/65 hover:shadow-[0_12px_26px_rgba(2,6,23,0.08)] active:scale-[0.99]"
            >
              Back
            </Link>
            <div className="text-xs font-semibold text-[#475569]">Adventure setup</div>
          </div>

          <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#E6EBF2]">
            <div className="h-full w-[80%] bg-[#1E3A8A]" />
            <div
              className="absolute top-0 h-full w-[2px] bg-[#C8102E]"
              style={{ left: "70%" }}
            />
          </div>

          <div className="mt-5 text-[20px] font-semibold tracking-tight text-slate-900">
            Location helps Percy suggest better stops.
          </div>
          <div className="mt-2 text-[13px] leading-6 text-slate-600">
            We use your location to show what’s nearby and keep your trip feeling effortless.
            This demo doesn’t track you in the background.
          </div>

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              <div className="font-semibold text-slate-900">What we’d use it for</div>
              <div className="mt-2 text-xs text-slate-600">
                Nearby discovery, arrival moments, and route-timed suggestions.
              </div>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              <div className="font-semibold text-slate-900">What we won’t do</div>
              <div className="mt-2 text-xs text-slate-600">
                No selling data. No ad profiles. No social sharing.
              </div>
            </div>
          </div>

          <div className="mt-4">
            <CTA>
              <Link href="/onboarding/route-preferences">Continue</Link>
            </CTA>
            <CTA variant="secondary">
              <Link href="/onboarding/route-preferences">Not now</Link>
            </CTA>
          </div>

          <Note>Note: Plain language. Demo-safe. No real permission prompt.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
