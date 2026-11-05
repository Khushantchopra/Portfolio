# Khushant Chopra, portfolio

Next.js (App Router, static export), Tailwind v4, Motion and Lenis.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # writes the static site to out/
npm start          # serves out/ at http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, go to Add New, then Project, and import the repo. Vercel detects Next.js; keep the defaults.
3. Deploy. `metadataBase` reads `VERCEL_PROJECT_PRODUCTION_URL`, so the OG image URLs are correct on the production domain.

From the terminal instead: `npx vercel` for a preview, then `npx vercel --prod`.

## Where things live

- Copy, projects, services and process: `app/page.tsx`
- Email and LinkedIn: `lib/site.ts` (change them once, every link follows)
- Colours, type scale and spacing: `app/tokens.css`; resets in `app/base.css`; page styles in `app/globals.css`
- Font: General Sans (Fontshare, free for commercial use), self-hosted in `app/fonts/`
- Images and videos: `public/media/`
- The OG image is `public/og.png`, a 1200x630 capture of the hero. The favicon is `app/icon.svg`.
