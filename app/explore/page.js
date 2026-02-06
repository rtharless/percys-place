"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import BottomNav from "@/components/wireframe/BottomNav";
import CTA from "@/components/wireframe/CTA";
import MapPreview from "@/components/wireframe/MapPreview";
import Note from "@/components/wireframe/Note";
import Phone from "@/components/wireframe/Phone";
import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";
import TopBar from "@/components/wireframe/TopBar";

import {
  getHistoricMarkers,
  getInterests,
  getInterestsFromLocal,
  getPhotoSpots,
} from "@/demo/data";

function badge(text) {
  return (
    <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
      {text}
    </span>
  );
}

export default function ExploreNearbyPage() {
  const [loading, setLoading] = useState(true);
  const [showHistoric, setShowHistoric] = useState(true);
  const [showPhoto, setShowPhoto] = useState(true);
  const [allInterests, setAllInterests] = useState([]);
  const [selectedInterestIds, setSelectedInterestIds] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [photoSpots, setPhotoSpots] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const [i, m, p] = await Promise.all([
          getInterests(),
          getHistoricMarkers(),
          getPhotoSpots(),
        ]);

        if (!mounted) return;
        setAllInterests(i);
        setMarkers(m);
        setPhotoSpots(p);
        setSelectedInterestIds(getInterestsFromLocal());
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  function toggleInterest(id) {
    setSelectedInterestIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  }

  function placeholderForKind(kind) {
    if (kind === "photo") return "/images/placeholders/trip-scenic.svg";
    if (kind === "historic") return "/images/placeholders/trip-historic.svg";
    return "/images/placeholders/trip-coastal.svg";
  }

  const curatedCards = useMemo(() => {
    const cards = [];

    if (showPhoto) {
      for (const spot of photoSpots) {
        cards.push({
          id: spot.id,
          kind: "photo",
          title: spot.name,
          subtitle: spot.description,
          badge: "Best photo stop",
          image: placeholderForKind("photo"),
          tags: ["photo-stops"],
        });
      }
    }

    if (showHistoric) {
      for (const marker of markers) {
        cards.push({
          id: marker.id,
          kind: "historic",
          title: marker.name,
          subtitle: marker.description,
          badge: "Historic marker",
          image: placeholderForKind("historic"),
          tags: ["historic-sites"],
        });
      }
    }

    const activeInterests = selectedInterestIds.length > 0 ? selectedInterestIds : [];

    cards.sort((a, b) => {
      const aScore = a.tags.some((t) => activeInterests.includes(t)) ? 1 : 0;
      const bScore = b.tags.some((t) => activeInterests.includes(t)) ? 1 : 0;
      return bScore - aScore;
    });

    return cards.slice(0, 8);
  }, [markers, photoSpots, selectedInterestIds, showHistoric, showPhoto]);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-start gap-4 p-8">
      <h1 className="text-xl font-semibold">6.1 Curated Experiences List</h1>

      <Phone>
        <TopBar left={<Link href="/home">Back</Link>} title="Explore Nearby" />

        <Row title="Map">
          <div className="text-sm text-slate-700">Along your demo route</div>
          <div className="mt-2 text-xs text-slate-500">Handpicked, finite discovery. No endless scrolling.</div>
          <div className="mt-3">
            <MapPreview height={220} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill onClick={() => setShowPhoto((v) => !v)}>
              <span className={showPhoto ? "font-semibold" : ""}>Photo spots</span>
            </Pill>
            <Pill onClick={() => setShowHistoric((v) => !v)}>
              <span className={showHistoric ? "font-semibold" : ""}>Historic markers</span>
            </Pill>
            <Pill>
              <Link href="/concierge?preset=cape-charles-dc">Build my trip</Link>
            </Pill>
          </div>
        </Row>

        <Row title="Your interests">
          <div className="text-sm text-slate-700">A few signals re-rank what you see.</div>
          <div className="mt-1 text-xs text-slate-500">Demo uses local interests if set during concierge.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {allInterests.slice(0, 10).map((interest) => {
              const active = selectedInterestIds.includes(interest.id);
              return (
                <Pill key={interest.id} onClick={() => toggleInterest(interest.id)}>
                  <span className={active ? "font-semibold" : ""}>{interest.label}</span>
                </Pill>
              );
            })}
          </div>
        </Row>

        <Row title="Handpicked nearby">
          <div className="text-sm text-slate-700">A curated set—{curatedCards.length} picks right now.</div>
          <div className="mt-1 text-xs text-slate-500">No infinite scroll. Tap a card to preview.</div>

          {loading ? (
            <div className="mt-3 rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              Gathering a few good options…
            </div>
          ) : curatedCards.length === 0 ? (
            <div className="mt-3 rounded-2xl border border-white/50 bg-white/60 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
              Nothing to show with the current filters.
              <div className="mt-3">
                <CTA>
                  <button type="button" className="w-full" onClick={() => {
                    setShowHistoric(true);
                    setShowPhoto(true);
                  }}>
                    Reset filters
                  </button>
                </CTA>
              </div>
            </div>
          ) : (
            <div className="mt-3 grid gap-3">
              {curatedCards.map((c) => (
                <Link
                  key={`${c.kind}-${c.id}`}
                  href={`/explore/experience?kind=${encodeURIComponent(c.kind)}&id=${encodeURIComponent(
                    c.id
                  )}&title=${encodeURIComponent(c.title)}`}
                  className="block overflow-hidden rounded-3xl border border-white/45 bg-gradient-to-b from-[#FFFEFA] to-[#F6F0E6] shadow-[0_14px_34px_rgba(2,6,23,0.10)] transition hover:shadow-[0_18px_44px_rgba(2,6,23,0.12)]"
                >
                  <div
                    className="relative h-[110px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${c.image})`,
                      filter: "saturate(1.15) contrast(1.08)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    <div className="absolute left-3 top-3">{badge(c.badge)}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-slate-900">{c.title}</div>
                    <div className="mt-1 text-xs text-slate-600">{c.subtitle}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.kind === "photo" ? badge("Photo spot") : badge("Historic")}
                      {selectedInterestIds.length > 0 ? badge("Personalized") : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Row>

        <BottomNav activeHref="/explore" />
        <Note>Note: Finite, curated discovery. Demo data only.</Note>
      </Phone>
    </main>
  );
}
