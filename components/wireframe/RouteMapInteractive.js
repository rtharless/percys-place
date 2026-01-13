"use client";

import { useEffect, useMemo, useState } from "react";

import MapPreview from "@/components/wireframe/MapPreview";

export default function RouteMapInteractive({ focusedStopId }) {
  const stops = useMemo(
    () => [
      { id: "round-rock", label: "Percy’s Place — Round Rock", x: 120, y: 150 },
      { id: "junction", label: "Percy’s Place — Junction", x: 205, y: 95 },
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
      <MapPreview
        height={280}
        stops={stops}
        focusedStopId={selectedStopId}
        onSelectStop={(stop) => {
          if (stop?.id) setSelectedStopId(stop.id);
        }}
      />

      <div className="mt-3 rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-xs text-slate-700 shadow-sm backdrop-blur">
        <div className="font-semibold text-slate-900">Next suggested stop</div>
        <div className="mt-0.5">
          {selectedStopId === "junction" ? "Percy’s Place — Junction" : "Percy’s Place — Round Rock"}
        </div>
      </div>
    </div>
  );
}
