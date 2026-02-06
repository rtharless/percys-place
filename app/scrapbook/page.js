import ScrapbookClient from "./ScrapbookClient";

export default function ScrapbookPage({ searchParams }) {
  const tripId = typeof searchParams?.tripId === "string" ? searchParams.tripId : "";
  return <ScrapbookClient tripId={tripId} />;
}
