"use client";

export default function MapPreview({
  startLocation,
  destination,
  routePolyline,
  stops = [],
  focusedStopId,
  onSelectStop,
  height = 180,
}) {
  const start =
    startLocation ??
    {
      id: "start",
      label: "Start",
      x: 40,
      y: 230,
    };

  const end =
    destination ??
    {
      id: "destination",
      label: "Destination",
      x: 350,
      y: 35,
    };

  const polyline =
    routePolyline ??
    [
      { x: 40, y: 230 },
      { x: 85, y: 175 },
      { x: 120, y: 150 },
      { x: 175, y: 120 },
      { x: 210, y: 85 },
      { x: 270, y: 60 },
      { x: 310, y: 40 },
      { x: 350, y: 35 },
    ];

  const defaultStops = [
    { id: "round-rock", label: "Percy’s Place — Round Rock", x: 120, y: 132, kind: "stop" },
    { id: "junction", label: "Percy’s Place — Junction", x: 196, y: 72, kind: "stop" },
  ];

  const plottedStops = stops.length ? stops : defaultStops;

  const isFocused = (id) => focusedStopId && id === focusedStopId;

  const handleSelect = (stop) => {
    if (typeof onSelectStop === "function") onSelectStop(stop);
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/50 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_56%),radial-gradient(circle_at_bottom,_rgba(200,16,46,0.14),_transparent_62%),linear-gradient(180deg,_rgba(255,255,255,0.72),_rgba(255,255,255,0.28))] shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
      style={{ height }}
    >
      <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply [background-image:linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <svg viewBox="0 0 390 280" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d={
            "M" +
            polyline
              .map((p, idx) => {
                if (idx === 0) return `${p.x},${p.y}`;
                return `C${p.x},${p.y} ${p.x},${p.y} ${p.x},${p.y}`;
              })
              .join(" ")
          }
          fill="none"
          stroke="rgba(37,99,235,0.85)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d={
            "M" +
            polyline
              .map((p, idx) => {
                if (idx === 0) return `${p.x},${p.y}`;
                return `C${p.x},${p.y} ${p.x},${p.y} ${p.x},${p.y}`;
              })
              .join(" ")
          }
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <button
        type="button"
        onClick={() => handleSelect(start)}
        className="absolute h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(255,255,255,0.75)]"
        style={{ left: start.x - 7, top: start.y - 7 }}
        aria-label={start.label}
      />

      {plottedStops.map((stop) => (
        <button
          key={stop.id}
          type="button"
          onClick={() => handleSelect(stop)}
          className={
            "absolute h-5 w-5 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.75)] transition " +
            (isFocused(stop.id)
              ? "bg-[#C8102E] ring-2 ring-[#C8102E]/25"
              : "bg-[#C8102E]")
          }
          style={{ left: stop.x - 8, top: stop.y - 8 }}
          aria-label={stop.label}
        />
      ))}

      <button
        type="button"
        onClick={() => handleSelect(end)}
        className="absolute h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_4px_rgba(255,255,255,0.75)]"
        style={{ left: end.x - 7, top: end.y - 7 }}
        aria-label={end.label}
      />
    </div>
  );
}
