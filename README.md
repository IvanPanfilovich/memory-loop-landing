# Memory Loop — Landing Page

The marketing site for **Memory Loop**, the app that turns YouTube videos and documents into
recaps, audio summaries and flashcards. This repository contains the public landing page only;
the product itself lives in a separate app repository.

> **Status:** the hosted deployment is currently offline, so run the site locally with the steps
> below — nothing here depends on the hosted instance being up. The "Try it now" buttons point at
> `NEXT_PUBLIC_APP_URL` (default `https://app.memoryloop.co`), so a local run can point them
> anywhere.

## What's here

A single-page, statically-rendered marketing site built with the Next.js App Router:

| Section | Component | Purpose |
| --- | --- | --- |
| Hero | `components/landing/Hero.tsx` | Headline, subhead and primary call to action |
| Product preview | `components/landing/HeroPreview.tsx` | Mock of the recap / flashcard experience |
| How it works | `components/landing/HowItWorks.tsx` | Three-step explanation of the workflow |
| Call to action | `components/landing/CallToAction.tsx` | Closing conversion block |

Supporting pieces:

- `components/Header.tsx` / `components/Footer.tsx` — shared chrome, rendered from `app/layout.tsx`.
- `components/BubbleBackground.tsx` — the ambient animated background.
- `components/AnalyticsConsent.tsx` — cookie-consent banner that gates GA4 and Smartlook until the
  visitor opts in.
- `lib/appUrl.ts` — single source of truth for the app URL used by every "Try it now" button.
- `lib/analytics.ts` — analytics IDs (public by design), overridable through environment variables.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 3 with an OKLCH design-token theme |
| Icons | lucide-react |
| Analytics | react-ga4 (GA4) + Smartlook, loaded only after consent |
| Lint/format | ESLint 9 (flat config) + Prettier |

## Project structure

```
app/            # App Router: layout, page, global styles, icons, error/404
components/     # Header, Footer, background, analytics, landing sections
lib/            # appUrl and analytics helpers
public/         # favicons, web manifest, OG image
scripts/        # start-standalone.js (runs the standalone server build)
```

## Getting started

Requirements: **Node.js ≥ 20** and **npm ≥ 10**.

```bash
npm install
npm run dev        # http://localhost:5000
```

The site runs on its own with the defaults baked into the code — no environment variables are
required for local development. Copy `.env.example` to `.env.local` only if you want to override
the app URL or point the analytics at a different property.

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Clear caches and start the dev server on port 5000 |
| `npm run build` | Production build (standalone output) |
| `npm run start` | Run the standalone production server |
| `npm run lint` | ESLint (flat config) over the project |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |

## Deployment

The build uses Next.js `output: 'standalone'`. The repository ships a Docker setup and an nginx
reverse proxy for self-hosting:

```bash
docker compose up --build      # app on :5000 behind nginx on :80/:443
```

Or run the image directly:

```bash
docker build -t memory-loop-landing .
docker run -p 5000:5000 memory-loop-landing
```

`next.config.js`, `Dockerfile` and `docker-compose.yml` describe the full pipeline; `nginx.conf`
terminates TLS and proxies to the app container.

## License

Copyright (c) Ivan Panfilovich. All rights reserved.
