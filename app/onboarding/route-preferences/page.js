import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RoutePreferencesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.4 Route Preferences</h1>

      <Phone>
        <OnboardingSplash>
          <TopBar
            left={<Link href="/onboarding/interests">Back</Link>}
            title="Step 4 of 5"
            right={null}
          />

          <Row title="Vehicle">
            <div>Select EV model</div>
          </Row>

          <Row title="Charging Preference">
            <Pill>Fast charging</Pill>
            <Pill>Standard</Pill>
          </Row>

          <Row title="Typical Stop Duration">
            <Pill>15–30 min</Pill>
            <Pill>30–60 min</Pill>
            <Pill>60+ min</Pill>
          </Row>

          <CTA>
            <Link href="/onboarding/safety">Continue</Link>
          </CTA>

          <Note>
            Note: Only preferences needed for routing + charging planning.
          </Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
