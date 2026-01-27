# Scapa Technologies Website

Corporate website for Scapa Technologies - enterprise infrastructure and application delivery performance specialists.

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run preview
```

## Project Structure

- **Client-side routing**: Custom SPA routing (home, solutions, services, success, contact)
- **Components**: React + TypeScript with Radix UI primitives
- **Styling**: Tailwind CSS with Scapa brand colors
- **Forms**: POST to n8n webhook (`formType` distinguishes contact-page vs footer)

## Deployment

GitHub Pages auto-deploys from `master` branch via GitHub Actions. Build output: `./dist`

## Monitoring

- **Lighthouse CI**: Runs on PRs and pushes to `master`
- **Uptime**: Checks site health every 6 hours, opens issue if down

## Analytics

- GA4: `G-V3B0R30TEW`
- GSC: Verified

## Tech Stack

React 19, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide Icons
