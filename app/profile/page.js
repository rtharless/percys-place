import Link from "next/link";

import BottomNav from "@/components/wireframe/BottomNav";
import { List, ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function ProfilePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">8.1 Profile & Settings</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Profile" />

        <Row title="User">
          <div className="text-base font-semibold">Richard H.</div>
          <div className="mt-1 text-xs text-slate-500">richard@example.com</div>
        </Row>

        <Row title="Settings List">
          <List>
            <ListItem>
              <Link href="/profile/preferences">Preferences</Link>
            </ListItem>
            <ListItem>
              <Link href="/profile/saved-trips">Saved Trips</Link>
            </ListItem>
            <ListItem>
              <Link href="/profile/payment-methods">Payment Methods</Link>
            </ListItem>
            <ListItem>
              <Link href="/profile/support">Support &amp; Feedback</Link>
            </ListItem>
          </List>
        </Row>

        <BottomNav activeHref="/profile" />
        <Note>Note: Simple list navigation, one level deep.</Note>
      </Phone>
    </main>
  );
}
