# AI for the Finance Function — Training Site

Marketing / companion site for a 2.5–3 hour in-person, hands-on AI training program for finance and controller teams at international financial institutions (current edition: the controller's function of an Asia-based multilateral development bank).

**English is the default edition; a full Chinese edition is built in** (toggle in the nav, persisted in `localStorage`).

## What's on the page

- **Program** — objectives, the two delivery paths (AI-written VBA/Office Scripts vs AI agents), four prompt principles, a minute-by-minute agenda
- **The six cases** — split / merge / clean / analyze / report / review, with verified output numbers, real reference charts, and a live sample flash report (`public/demo/`)
- **Insights** — a sourced briefing on the AI regulatory and adoption landscape for bank finance teams (EU AI Act, NIST AI RMF, IAASB/FRC, Deloitte State of AI 2026, et al.)
- **Governance** — the four data-safety rules the training drills
- **Materials** — the delivered kit and how the program adapts to other institutions

All training data shown is **simulated**; the page names no client and contains no confidential material. Insight figures trace to their cited publications (verified July 2026).

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react. Fully static output (`dist/`), deployed on Vercel.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # type-checkable production build -> dist/
npm run preview   # serve the built site
```

## Notes

- Case charts in `public/charts/` and the sample report in `public/demo/` are actual reference outputs of the training package's solution scripts (fixed random seed).
- Scroll-reveal animations use an in-view trigger with a timeout fallback, so content can never remain invisible in unusual embedding contexts.
