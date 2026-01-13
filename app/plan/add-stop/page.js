import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function AddStopPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">3.3 Add Stop + Reserve Charger</h1>

      <Phone>
        <TopBar left={<Link href="/plan/map">Back</Link>} title="Add Stop" />

        <Row title="Search Percy’s places">
          <div>[Search field]</div>
        </Row>

        <Row title="A few good finds nearby">
          <ListItem>
            Percy’s place • a tiny detour • chargers/amenities
          </ListItem>
          <CTA>Add to route</CTA>

          <ListItem>
            Percy’s place • a tiny detour • chargers/amenities
          </ListItem>
          <CTA>Add to route</CTA>
        </Row>

        <Row>
          <Link href="/location">Stop details</Link>
        </Row>

        <Note>Note: Quick picks for when you want a little surprise.</Note>
      </Phone>
    </main>
  );
}
