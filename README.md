# Percys-Place-Demo

Percy’s Place is a **demo build** (not production) that showcases the approved product direction:

- Image-first, calm, curated discovery
- An AI concierge that **builds the trip first** (mocked)
- Edits through preferences/tags (not configuration)
- Each trip creates a **Scrapbook** “memory artifact”
- Finite discovery (no infinite scrolling)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000

## Route index

If you want to browse all screens quickly, open:

- `/` (route index)

## Demo flow (recommended)

This flow is designed to run end-to-end with no dead ends.

- **Start here**
  - `/home` for the updated Home dashboard, or
  - `/onboarding` for the interests + permissions setup flow

- **AI concierge trip building (primary path)**
  - Go to `/concierge?preset=cape-charles-dc`
  - Tap `Generate my itinerary`
  - You’ll land on a generated trip detail: `/trips/[id]`

  What happens here:
  - Start/end locations are prefilled for the demo preset
  - Dates + duration presets are editable
  - Interests are stored locally and used for Explore re-ranking

- **Trip lifecycle + scrapbook artifact**
  - On `/trips/[id]`, tap `Mark as completed → Generate scrapbook`
  - This routes to `/scrapbook?tripId=...`
  - View all trips at `/trips` (Upcoming / Aspirational / Past)
  - Optional: on `/trips/[id]`, tap `Edit interests` to tweak preference tags (stored locally)

  Notes:
  - Completed trips link directly to scrapbooks from the `Past` tab
  - Featured trips opened from Home can be saved into your trip list (Aspirational)

- **Explore (finite, curated discovery)**
  - `/explore` is image-first and finite (no infinite scroll)
  - Filters include Photo spots + Historic markers (mocked)
  - Saved interests (from onboarding or concierge) re-rank results
  - Cards are tappable and route to a preview: `/explore/experience?kind=...&id=...`

  Tips:
  - Toggle `Photo spots` and `Historic markers` to see curated overlays
  - Set interests during onboarding to see personalization kick in

- **Arrival moment**
  - From `/trips/[id]`, open `/arriving?tripId=...` for the arrival transition screen

- **In-car mode (placeholder)**
  - Open `/in-car` for the planned CarPlay / Android Auto style layout direction (UI only)

## Key routes

- `/home` — Home dashboard (Featured + Seasonal trips + Build my trip)
- `/onboarding/*` — Interests + permissions (plain-language) + setup steps
- `/concierge?preset=cape-charles-dc` — One-click demo route preset (Cape Charles → Washington, DC)
- `/trips` — Trip lifecycle (Upcoming / Aspirational / Past)
- `/trips/[id]` — Trip detail (overview, itinerary, safety + contact concierge)
- `/scrapbook?tripId=...` — Generated scrapbook artifact (Ready to post = UI only)
- `/explore` — Curated discovery (finite list)
- `/explore/experience?...` — Experience preview (from Explore cards)
- `/arriving?tripId=...` — Arriving at Percy’s Place moment
- `/in-car` — In-car mode placeholder

## Data + state

- **Mock fixtures** live in `demo/data/*.json`
  - Featured trips, seasonal trips, interests, itinerary template, historic markers, photo spots

- **Demo data accessor** lives in `demo/data/index.js`
  - Contains mocked "AI" trip generation and scrapbook generation

- **Local demo state** is stored in `localStorage`
  - Trips: `percy_trips`
  - Interests: `percy_interests`

### Resetting demo state

If you need a clean run:

- Clear `localStorage` keys `percy_trips` and `percy_interests` in your browser devtools, or
- Hard refresh after clearing site data

## Constraints (demo-safe)

- No real payments
- No real third-party APIs
- No real sharing/export (UI only)
- Single player only (no social feeds / leaderboards)

## Troubleshooting

- If routes look stale:
  - Stop and restart the dev server
  - Refresh the page
- If a screen shows “No trips here yet”:
  - Run the concierge preset to generate a trip: `/concierge?preset=cape-charles-dc`
- If Explore isn’t personalized:
  - Complete onboarding interests (`/onboarding`) or set interests in concierge
