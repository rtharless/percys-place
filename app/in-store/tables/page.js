import Link from "next/link";

import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function TableAvailabilityPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.4 Table Availability</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Tables" />

        <Row title="Table Status Summary">
          <div>Indoor: [X available]</div>
          <div>Outdoor: [X available]</div>
          <div>Wait estimate (if any): [placeholder]</div>
        </Row>

        <Note>Note: Simple status (no table grid).</Note>
      </Phone>
    </main>
  );
}
