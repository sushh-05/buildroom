# Buildroom

**Don't just learn AI. Build something useful.**

Buildroom is a fictional EdTech platform. It reimagines online AI/tech education around **shipped proof of work** instead of course completion - students join a four-week build sprint, solve one realistic business mission, and leave with a deployed project and a public GitHub history instead of a certificate.

**Live app:** https://melodious-chimera-d15da6.netlify.app/

**Source code:** https://github.com/sushh-05/buildroom

---

## Overview

The product brief asked for an original EdTech identity benchmarked against [Outskill](https://www.outskill.com) for visual polish, but not cloned from it. Buildroom's differentiator is a specific point of view: **project evidence over course completion**. Every section on the page reinforces that one idea - most notably the **Mission Explorer**, which lets a visitor pick one of three realistic missions and interact with a genuinely working, embedded preview of what a student would build in that mission.

### The three missions

| Mission | Real-world problem | What the live preview does |
|---|---|---|
| **Recover** | Small businesses lose weeks chasing overdue invoices | A working invoice board — add invoices, toggle paid/pending, auto-flags overdue accounts by date, computes live totals, and generates a rule-based follow-up message |
| **Navigate** | Disrupted travel bookings force manual itinerary rebuilding | A rebooking copilot that ranks alternative itineraries live using a weighted price/directness scoring formula, and lets you confirm a rebooking |
| **Forecast** | Retailers restock by instinct, causing stockouts or overstock | An inventory monitor that calculates real days-until-stockout from a 6-week sales trend per product, with a live SVG bar chart and low-stock filtering |

These are not screenshots or mockups - they are functioning React components with real state, real derived calculations, and real user interaction, built to prove the platform's promise rather than just describe it.

---

## Tech stack

- **React 19 + TypeScript** : component structure and type safety
- **Vite** : build tooling and dev server
- **Tailwind CSS v4** : styling, using the official Vite plugin (no legacy `tailwind.config.js`/PostCSS setup needed)
- **motion** (successor to Framer Motion) : scroll reveals, hero entrance stagger, animated tab transitions, animated accordion, animated modal
- **lucide-react** : icon set (used sparingly, not as decorative circle-icons)
- **ESLint** : linting
- **CSS custom properties** : full light/dark theme system with a persistent toggle (`localStorage`-backed, respects `prefers-color-scheme` on first load)

No backend, authentication, payment flow, or database is used — per the brief, all such interactions are mocked. The application form is explicitly labeled to the user as a mocked submission.

---

## Local setup

```bash
git clone <your-repo-url>
cd buildroom
npm install
npm run dev
```

Open the printed local address (typically `http://localhost:5173/`).

To verify the production build locally before deploying:

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, MissionExplorer, Process, SprintTimeline,
│   │                  # Proof, Mentors, FAQ, FinalCTA, LiveDemo,
│   │                  # NavigateDemo, ForecastDemo
│   └── ui/             # Logo, Button, ApplicationModal, ThemeToggle, Reveal
├── data/                # missions.ts, faq.ts — editable content, not hardcoded in components
├── hooks/               # useTheme.ts
├── types/               # Shared TypeScript interfaces
├── App.tsx
├── index.css            # Design tokens (light/dark CSS variables) + base styles
└── main.tsx
```

---

## Key design and engineering decisions

- **One interactive centerpiece, not ten shallow sections.** Rather than spreading effort thin across many decorative sections, most of the engineering investment went into the Mission Explorer and its three embedded live demos, since that is what actually demonstrates "product thinking" and "engineering quality" rather than describing them in copy.
- **Token-based theming, not hardcoded colors.** All colors route through CSS custom properties (`--color-bg`, `--color-text`, `--color-accent`, etc.), defined once for light and dark mode, so the entire UI re-themes consistently via a single `data-theme` attribute rather than per-component overrides.
- **Real computed logic in every demo**, not hardcoded labels:
  - Recover: overdue status is derived from comparing the stored due date to the current date, not a static tag.
  - Navigate: the "best" alternative is computed with a weighted formula (60% price, 40% directness), so the ranking changes if the underlying data changes.
  - Forecast: days-until-stockout is calculated from the average of each product's 6-week sales history, and the bar chart heights are generated from that same array — the visual and the number are mathematically linked.
- **Data/type separation.** Mission content, FAQ content, and seed data live in `src/data/` and `src/types/`, so content changes don't require touching component logic — a deliberate maintainability choice.
- **Accessibility as a first-class requirement**, not an afterthought: semantic headings, `aria-expanded`/`aria-controls` on the FAQ accordion, a labeled `role="dialog"` modal, visible focus outlines, 44px-minimum touch targets, and `prefers-reduced-motion` support on all animations.
- **Honest mocking.** The application form explicitly tells the user its submission is mocked for the assessment, rather than presenting fake success messaging that implies a real backend exists.

---

## AI tools used

AI-assisted tools (Perplexity, used conversationally for planning, code generation, and debugging guidance) were used throughout this project's development, in line with the brief's explicit allowance for AI-assisted tools. Their use included:

- Structuring the initial React + TypeScript + Tailwind v4 scaffold and troubleshooting setup issues (linter prompt selection, Tailwind v4 Vite plugin configuration, a Button component class-override bug caused by conflicting Tailwind utility classes).
- Drafting component code for each section (Hero, Mission Explorer, Process, SprintTimeline, Proof, Mentors, FAQ, FinalCTA) and the three live demo components (LiveDemo, NavigateDemo, ForecastDemo), which was then reviewed, tested, and adjusted in the browser at each step.
- Designing the light/dark theme token system and the motion/animation pass (scroll reveals, hero stagger, tab transitions, animated accordion, animated modal).
- Debugging a real layout bug in the Mentors section (an alternating-row `order-2` flip that broke column widths), which was diagnosed from a screenshot and fixed by removing the fragile approach in favor of a fixed-column grid.

All code was reviewed, run, and tested locally at each step before committing, and I can walk through, explain, and modify any part of this implementation live.

---

## Three intentional differences from Outskill

1. **Educational philosophy.** Outskill's positioning centers on cohort-based courses and instructor-led learning; Buildroom instead centers on solving one realistic business mission and shipping proof of work. This changes the entire information architecture - instead of a course catalog, the hero feature is an interactive Mission Explorer with embedded working previews.
2. **Proof over credentials.** Where course platforms typically emphasize certificates and completion badges, Buildroom's "Proof, not certificates" section explicitly lists tangible artifacts (GitHub repo, live deployment, architecture note, recorded walkthrough) and deliberately avoids fabricated placement statistics or logo walls, since those weren't verifiable and would undercut the platform's own message about evidence over claims.
3. **Interaction model.** Rather than static feature cards or a course-preview carousel, the core interaction is three functioning mini-applications embedded directly in the marketing page - a real invoice board, a real rebooking ranker, and a real inventory forecaster - so visitors experience a sample of the product rather than reading a description of it.

---

## What I would build next with more time

- Full CRUD persistence (`localStorage`) and CSV export for the Recover invoice demo.
- A fourth mission and matching live demo.
- Automated component tests (Vitest + React Testing Library) for the derived-logic functions (`getEffectiveStatus`, `rankAlternatives`, `daysUntilStockout`).
- Image-based mentor avatars and a custom illustration for the hero section.
