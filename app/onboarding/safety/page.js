import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function SafetyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.5 Safety & Comfort</h1>

      <Phone>
        <OnboardingSplash>
          <TopBar
            left={<Link href="/onboarding/route-preferences">Back</Link>}
            title="Step 5 of 5"
            right={null}
          />

          <Row title="What matters most while stopping?" />

          <List>
            <ListItem>Well-lit parking (on/off)</ListItem>
            <ListItem>Clean restrooms (on/off)</ListItem>
            <ListItem>Indoor seating (on/off)</ListItem>
            <ListItem>Pet-friendly (on/off)</ListItem>
          </List>

          <CTA>
            <Link href="/home">Complete setup</Link>
          </CTA>

          <Note>Note: Simple toggles; no long form.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
