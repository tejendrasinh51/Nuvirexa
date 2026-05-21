# Nuvirexa Agency Website

Premium Next.js 14 agency website for **Nuvirexa Agency** — cinematic dark theme, Framer Motion animations, Gemini AI chatbot, and Cal.com scheduling.

## Quick Start

```bash
cd nuvirexa
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Google Gemini API key for Nuvix chatbot |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com booking link (e.g. `nuvirexa/discovery-call`) |
| `RESEND_API_KEY` | Resend API for contact form emails |
| `CONTACT_EMAIL` | Inbox for contact submissions |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://nuvirexa.com`) |

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run typecheck` — TypeScript check

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables from `.env.example`
4. Deploy

Built by Nuvirexa Agency · Founder: Tejendrasinh Sisodia
"# Nuvirexa" 
