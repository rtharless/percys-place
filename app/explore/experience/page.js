import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function ExperienceDetailPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.2 Experience Detail</h1>

      <Phone>
        <TopBar left={<Link href="/explore">Back</Link>} title="Experience" />

        <Row>[Hero image placeholder]</Row>

        <Row title="Experience Name">
          <div>Distance + time impact</div>
        </Row>

        <Row title="Why it is special">
          <div>[Placeholder paragraph]</div>
        </Row>

        <Row title="What to expect">
          <div>[Short bullets / lines]</div>
        </Row>

        <Row title="Time commitment">
          <div>[e.g., 45 minutes]</div>
        </Row>

        <Row title="Percy’s exclusive perk">
          <div>[Placeholder perk]</div>
        </Row>

        <CTA>Add to route</CTA>

        <Note>
          Note: Single-page confidence builder; clear CTA.
        </Note>
      </Phone>
    </main>
  );
}
