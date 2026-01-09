export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 p-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Percy&apos;s Place — Wireframe Demo</h1>
        <p className="text-slate-600">
          Route index for the low-fidelity mobile wireframes.
        </p>
      </header>

      <section className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur">
        <h2 className="text-lg font-medium">Onboarding</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a className="rounded-lg border bg-white px-3 py-2" href="/onboarding/welcome">1.1 Welcome</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/onboarding/persona">1.2 Persona Selection</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/onboarding/interests">1.3 Travel Style & Interests</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/onboarding/route-preferences">1.4 Route Preferences</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/onboarding/safety">1.5 Safety & Comfort</a>
        </div>
      </section>

      <section className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur">
        <h2 className="text-lg font-medium">Core</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a className="rounded-lg border bg-white px-3 py-2" href="/home">2.1 Home Dashboard</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/plan">3.1 Plan: Start & Destination</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/plan/map">3.2 Plan: Route Map</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/plan/add-stop">3.3 Plan: Add Stop</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/location">4.1 Stop Detail</a>
        </div>
      </section>

      <section className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur">
        <h2 className="text-lg font-medium">In‑Store Companion</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store">5.1 Live Charging Countdown</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store/store-layout">5.2 Store Layout</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store/menu">5.3 Menu + Order Ahead</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store/tables">5.4 Table Availability</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store/restrooms">5.5 Restroom Status</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/in-store/local-products">5.6 Local Products</a>
        </div>
      </section>

      <section className="rounded-2xl border border-white/50 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur">
        <h2 className="text-lg font-medium">Explore + Rewards + Profile</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a className="rounded-lg border bg-white px-3 py-2" href="/explore">6.1 Explore Nearby</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/explore/experience">6.2 Experience Detail</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/rewards">7.1 Rewards</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/profile">8.1 Profile & Settings</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/profile/preferences">8.2 Preferences</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/profile/saved-trips">8.3 Saved Trips</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/profile/payment-methods">8.4 Payment Methods</a>
          <a className="rounded-lg border bg-white px-3 py-2" href="/profile/support">8.5 Support & Feedback</a>
        </div>
      </section>
    </main>
  );
}
