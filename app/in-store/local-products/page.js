import Link from "next/link";

import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function LocalProductsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.6 Recommended Local Products</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Local Products" />

        <Row title="Curated Product List">
          <ListItem>
            name • short note • price • Percy’s pick badge
          </ListItem>
          <ListItem>
            name • short note • price • Percy’s pick badge
          </ListItem>
          <ListItem>
            name • short note • price • Percy’s pick badge
          </ListItem>
        </Row>

        <Note>Note: Curated, finite list; no ratings/reviews.</Note>
      </Phone>
    </main>
  );
}
