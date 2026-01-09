import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function PaymentMethodsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">8.4 Payment Methods</h1>

      <Phone>
        <TopBar left={<Link href="/profile">Back</Link>} title="Payment Methods" />

        <Row title="Payment List">
          <ListItem>**** 1234</ListItem>
          <ListItem>**** 5678</ListItem>
        </Row>

        <CTA>Add payment method</CTA>

        <Note>Note: Simple list; no dense tables.</Note>
      </Phone>
    </main>
  );
}
