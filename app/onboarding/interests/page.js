import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function InterestsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.3 Travel Style & Interests</h1>

      <Phone>
        <OnboardingSplash>
          <TopBar
            left={<Link href="/onboarding/persona">Back</Link>}
            title="Step 3 of 5"
            right={null}
          />

          <Row title="What do you enjoy?">
            <div>[Select multiple]</div>
            <div className="mt-1">
              <Pill>Scenic routes</Pill>
              <Pill>Local food</Pill>
              <Pill>Nature & parks</Pill>
              <Pill>History & culture</Pill>
              <Pill>Art & music</Pill>
              <Pill>Shopping</Pill>
              <Pill>Outdoor activities</Pill>
            </div>
          </Row>

          <CTA>
            <Link href="/onboarding/route-preferences">Continue</Link>
          </CTA>

          <Note>Note: Chip UI reduces form friction.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
