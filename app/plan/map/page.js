import MapClient from "./MapClient";

export default function RouteMapPage({ searchParams }) {
  const focus = typeof searchParams?.focus === "string" ? searchParams.focus : undefined;
  return <MapClient focus={focus} />;
}
