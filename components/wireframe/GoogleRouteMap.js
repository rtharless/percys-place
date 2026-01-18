"use client";

import { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 30.2672, lng: -97.7431 };

function loadGoogleMaps(apiKey) {
  if (!apiKey) return Promise.reject(new Error("Missing Google Maps API key"));
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  if (window.google?.maps) return Promise.resolve(window.google.maps);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-google-maps="1"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google.maps));
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.dataset.googleMaps = "1";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.onload = () => resolve(window.google.maps);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function GoogleRouteMap({
  apiKey,
  start,
  destination,
  stops = [],
  routePath = [],
  focusedStopId,
  onSelectStop,
  height = 280,
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef(new Map());
  const polylineRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const maps = await loadGoogleMaps(apiKey);
      if (cancelled) return;

      const styledMapType = new maps.StyledMapType(
        [
          { elementType: "geometry", stylers: [{ color: "#f5f1ea" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#0f172a" }, { lightness: 20 }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }, { weight: 2 }] },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
          { featureType: "road", stylers: [{ visibility: "simplified" }, { saturation: -80 }, { lightness: 30 }] },
          { featureType: "water", stylers: [{ color: "#d7e9ff" }] },
        ],
        { name: "Percy" }
      );

      const map = new maps.Map(containerRef.current, {
        center: start ?? DEFAULT_CENTER,
        zoom: 7,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: "greedy",
        backgroundColor: "transparent",
      });

      map.mapTypes.set("percy", styledMapType);
      map.setMapTypeId("percy");

      mapRef.current = map;

      const bounds = new maps.LatLngBounds();
      const points = [start, ...stops.map((s) => s.position), destination].filter(Boolean);
      points.forEach((p) => bounds.extend(p));
      if (!bounds.isEmpty()) map.fitBounds(bounds, 48);

      const makeMarker = (id, position, color) => {
        const marker = new maps.Marker({
          position,
          map,
          clickable: true,
          optimized: true,
          icon: {
            path: maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            scale: 8,
          },
        });

        marker.addListener("click", () => {
          if (typeof onSelectStop === "function") onSelectStop({ id });
        });

        markersRef.current.set(id, marker);
        return marker;
      };

      if (start) makeMarker("start", start, "#10b981");
      stops.forEach((s) => {
        if (s?.id && s?.position) makeMarker(s.id, s.position, "#C8102E");
      });
      if (destination) makeMarker("destination", destination, "#0f172a");

      if (routePath.length) {
        polylineRef.current = new maps.Polyline({
          path: routePath,
          strokeColor: "#1E3A8A",
          strokeOpacity: 0.85,
          strokeWeight: 5,
          geodesic: true,
          map,
        });

        new maps.Polyline({
          path: routePath,
          strokeColor: "#ffffff",
          strokeOpacity: 0.85,
          strokeWeight: 2,
          geodesic: true,
          map,
        });
      }
    }

    init().catch(() => {
      // If load fails, fallback is handled by parent.
    });

    return () => {
      cancelled = true;
    };
  }, [apiKey, destination, onSelectStop, routePath, start, stops]);

  useEffect(() => {
    const maps = window.google?.maps;
    const map = mapRef.current;
    if (!maps || !map || !focusedStopId) return;

    const marker = markersRef.current.get(focusedStopId);
    if (!marker) return;

    map.panTo(marker.getPosition());
  }, [focusedStopId]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/50 bg-[linear-gradient(180deg,_rgba(255,255,255,0.70),_rgba(255,255,255,0.25))] shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
      style={{ height }}
    >
      <div ref={containerRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:linear-gradient(to_right,rgba(15,23,42,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
    </div>
  );
}
