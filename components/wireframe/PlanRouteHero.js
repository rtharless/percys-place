"use client";

import { useEffect, useMemo, useState } from "react";

import GoogleRouteMap from "@/components/wireframe/GoogleRouteMap";
import MapPreview from "@/components/wireframe/MapPreview";

export default function PlanRouteHero({ focusedStopId }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const stops = useMemo(
    () => [
      {
        id: "round-rock",
        label: "Percy’s Place — Round Rock",
        position: { lat: 30.5083, lng: -97.6789 },
        x: 120,
        y: 150,
      },
      {
        id: "junction",
        label: "Percy’s Place — Junction",
        position: { lat: 30.4896, lng: -99.7723 },
        x: 205,
        y: 95,
      },
    ],
    []
  );

  const start = useMemo(() => ({ lat: 30.2672, lng: -97.7431 }), []);
  const destination = useMemo(() => ({ lat: 30.3072, lng: -104.0206 }), []);

  const routePath = useMemo(
    () => [
      { lat: 30.2672, lng: -97.7431 },
      { lat: 30.4, lng: -98.3 },
      { lat: 30.4896, lng: -99.7723 },
      { lat: 30.45, lng: -101.2 },
      { lat: 30.35, lng: -102.6 },
      { lat: 30.3072, lng: -104.0206 },
    ],
    []
  );

  const [selectedStopId, setSelectedStopId] = useState(focusedStopId || "round-rock");

  useEffect(() => {
    if (!selectedStopId) return;
    const el = document.getElementById(`stop-${selectedStopId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedStopId]);

  return (
    <div className="my-2">
      {apiKey ? (
        <GoogleRouteMap
          apiKey={apiKey}
          height={280}
          start={start}
          destination={destination}
          routePath={routePath}
          stops={stops.map((s) => ({ id: s.id, position: s.position }))}
          focusedStopId={selectedStopId}
          onSelectStop={(stop) => {
            if (stop?.id) setSelectedStopId(stop.id);
          }}
        />
      ) : (
        <MapPreview
          height={280}
          stops={stops.map((s) => ({ id: s.id, label: s.label, x: s.x, y: s.y }))}
          focusedStopId={selectedStopId}
          onSelectStop={(stop) => {
            if (stop?.id) setSelectedStopId(stop.id);
          }}
        />
      )}

      <div className="mt-3 rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-xs text-slate-700 shadow-sm backdrop-blur">
        <div className="font-semibold text-slate-900">Next suggested stop</div>
        <div className="mt-0.5">
          {selectedStopId === "junction" ? "Percy’s Place — Junction" : "Percy’s Place — Round Rock"}
        </div>
        {!apiKey ? (
          <div className="mt-1 text-[11px] text-slate-600">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable the live map.</div>
        ) : null}
      </div>
    </div>
  );
}
