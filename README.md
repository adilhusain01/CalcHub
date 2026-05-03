<div align="center">
  <h1>CalcHub</h1>
  <p>Free embeddable calculators for finance, health, business, and everyday workflows.</p>
</div>

## Overview

CalcHub is a Next.js app that serves a library of niche calculators with enhanced SEO and social preview support. It includes dynamic calculator pages, embed-friendly views, and responsive layouts across mobile, tablet, and desktop.

### Highlights

- Free calculator library with embeddable widgets
- SEO-ready metadata for Open Graph and Twitter cards
- Public discovery files: `robots.txt`, `llms.txt`, and `sitemap.xml`
- Responsive Tailwind UI across all devices
- Search-friendly sharing at `https://calchub.adilhusain.xyz`

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Run production build

```bash
npm run start
```

### Additional commands

```bash
npm run lint
npm run clean
```

## SEO & Sharing Files

This app includes built-in support for standard discovery and share metadata:

- `public/robots.txt`
- `public/llms.txt`
- `app/sitemap.ts` → generates `/sitemap.xml`
- `app/layout.tsx` → root metadata, OG/Twitter preview settings
- `public/og.png` → shared preview image

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — UI building blocks and calculator components
- `lib/` — shared calculator metadata and helpers
- `public/` — static assets and SEO files

## Notes

If you are using AI Studio or any Google Gemini integration, configure `.env.local` as needed. Otherwise, CalcHub runs without additional environment variables.

---

Built with Next.js, React, and Tailwind CSS.
