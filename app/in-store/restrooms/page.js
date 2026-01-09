import Link from "next/link";

import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function RestroomStatusPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">5.5 Restroom Status</h1>

      <Phone>
        <TopBar left={<Link href="/in-store">Back</Link>} title="Restrooms" />

        <Row title="Restroom Status">
          <div>Status: [available / busy / cleaning]</div>
          <div>Nearest location: [e.g., back left]</div>
        </Row>

        <Note>Note: High priority info, quick to read.</Note>
      </Phone>
    </main>
  );
}
