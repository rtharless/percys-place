import Link from "next/link";

import CTA from "@/components/wireframe/CTA";
import { ListItem } from "@/components/wireframe/List";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

export default function LocationDetailPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">4.1 Percy’s Place Location Detail</h1>

      <Phone>
        <TopBar left={<Link href="/plan/add-stop">Back</Link>} title="Location" />

        <Row>[Hero image placeholder]</Row>

        <Row title="Location Name">
          <div>Distance/time away</div>
        </Row>

        <Row title="Charging Availability">
          <div>Availability: [X available / limited]</div>
          <div>Connector types: [placeholder]</div>
          <CTA>Reserve charger</CTA>
        </Row>

        <Row title="Estimated Stop Duration">
          <div>[30–45 minutes] (based on your vehicle)</div>
        </Row>

        <Row title="Amenities Overview">
          <Pill>Amenity</Pill>
          <Pill>Amenity</Pill>
          <Pill>Amenity</Pill>
        </Row>

        <Row title="Food & Drink Preview">
          <ListItem>Preview item 1</ListItem>
          <ListItem>Preview item 2</ListItem>
        </Row>

        <Row title="Your Trip Story">
          <div className="rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] p-5 shadow-[0_14px_34px_rgba(2,6,23,0.10)] backdrop-blur">
            <div className="text-xs font-semibold text-slate-700">Trip Scrapbook (preview)</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              A little visual story—made as you go.
            </div>
            <div className="mt-1 text-xs text-slate-600">
              Percy quietly collects moments, stops, and tiny highlights. After the trip, it becomes a
              shareable keepsake.
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-2xl border border-white/55 bg-white/60" />
              <div className="h-16 rounded-2xl border border-white/55 bg-white/55" />
              <div className="h-16 rounded-2xl border border-white/55 bg-white/50" />
            </div>
          </div>
        </Row>

        <CTA>Get directions</CTA>
        <CTA variant="secondary">Add stop to trip</CTA>

        <Note>
          Note: High-confidence decision screen; key info above fold.
        </Note>
      </Phone>
    </main>
  );
}
