import Link from "next/link";

import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function SavedTripsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">8.3 Saved Trips</h1>

      <Phone>
        <TopBar left={<Link href="/profile">Back</Link>} title="Saved Trips" />

        <Row title="Saved Trips List">
          <ListItem>Origin → Destination • date</ListItem>
          <ListItem>Origin → Destination • date</ListItem>
        </Row>

        <Note>
          Note: Finite list; tap to view route (reuses route map view).
        </Note>
      </Phone>
    </main>
  );
}
