import ConciergeClient from "./ConciergeClient";

export default function ConciergePage({ searchParams }) {
  const preset = typeof searchParams?.preset === "string" ? searchParams.preset : undefined;
  return <ConciergeClient preset={preset} />;
}
