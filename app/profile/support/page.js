import Link from "next/link";

import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function SupportPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">8.5 Support & Feedback</h1>

      <Phone>
        <TopBar left={<Link href="/profile">Back</Link>} title="Support" />

        <Row title="Support Options">
          <List>
            <ListItem>Contact Support</ListItem>
            <ListItem>Send Feedback</ListItem>
          </List>
        </Row>

        <Note>Note: Minimal, travel-friendly help entry points.</Note>
      </Phone>
    </main>
  );
}
