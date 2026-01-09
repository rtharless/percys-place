import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function InStoreMenuPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.3 Menu + Order Ahead</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Menu" />

        <Row title="Tabs">
          <Pill>Food</Pill>
          <Pill>Drinks</Pill>
          <Pill>Snacks</Pill>
        </Row>

        <Row title="Menu List">
          <ListItem>name • short description • price</ListItem>
          <ListItem>name • short description • price</ListItem>
          <ListItem>name • short description • price</ListItem>
        </Row>

        <CTA>Order ahead</CTA>

        <Note>Note: Simple readable list; no heavy browsing.</Note>
      </Phone>
    </main>
  );
}
