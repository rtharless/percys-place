import Link from "next/link";

import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function StoreLayoutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.2 Store Layout Overview</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Store Layout" />

        <Row>[Simple floor plan placeholder]</Row>

        <Row title="Key Areas">
          <List>
            <ListItem>Restrooms: status (available/busy/cleaning)</ListItem>
            <ListItem>Cafe Counter: location</ListItem>
            <ListItem>Seating Area: table availability</ListItem>
          </List>
        </Row>

        <Note>Note: Reduce wandering; quick answers.</Note>
      </Phone>
    </main>
  );
}
