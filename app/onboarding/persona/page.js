import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import OnboardingSplash from "@/components/wireframe/OnboardingSplash";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function PersonaPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">1.2 Persona Selection</h1>

      <Phone>
        <OnboardingSplash>
          <TopBar
            left={<Link href="/onboarding/welcome">Back</Link>}
            title="Step 2 of 5"
            right={null}
          />

          <Row title="Who are you traveling as?">
            <div>[Select one]</div>
          </Row>

          <List>
            <ListItem>EV Driver (default)</ListItem>
            <ListItem>Family</ListItem>
            <ListItem>Retiree</ListItem>
            <ListItem>Adventurous Couple / Solo</ListItem>
          </List>

          <CTA>
            <Link href="/onboarding/interests">Continue</Link>
          </CTA>

          <Note>Note: Large cards for easy selection while traveling.</Note>
        </OnboardingSplash>
      </Phone>
    </main>
  );
}
