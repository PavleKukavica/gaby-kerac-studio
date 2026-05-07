
## Goal

Make the Home page feel **clearly structured**, not like one long editorial scroll. Right now the sections blend (Hero → marquee → Color Story → statement → staggered Selected Works → CTA), and the heavy asymmetric grid with `md:mt-40` offsets reads as chaotic rather than considered. We will introduce a clear, repeatable rhythm so a visitor immediately understands: *who she is → what she designs → selected work → about preview → contact*.

## New Home structure

```
01  HERO              — name, title, one-line intro, hero portrait
02  INTRO STRIP       — small "About / In short" block, 3 stat-style facts
03  SIGNATURE PIECES  — 3-up Color Story, equal grid, numbered 01/02/03
04  SELECTED WORKS    — clean 2-column editorial grid (no staggered offsets)
05  PHILOSOPHY QUOTE  — single editorial statement, centered
06  ABOUT PREVIEW     — short paragraph + portrait + link to /about
07  CTA / CONTACT     — single bold line + "Get in touch"
```

Every section gets:
- a small **section index** label top-left (`01 — Introduction`, `02 — Signature`, etc.) in tracked uppercase
- consistent vertical rhythm (`py-24 md:py-32`)
- a hairline divider between sections so structure is visible

This is the single biggest change — it replaces the current "free-flow editorial" with a numbered chapter system, which is exactly what high-end designer portfolios (Phoebe Philo, The Row, Khaite) use to feel professional.

## Section-by-section

### 01 — Hero (simplified)
- Keep the giant `Gaby Kerac` headline and floating portrait of the black-vest set.
- Remove the two-column intro paragraph from the hero — move it into Section 02 so the hero is purely a statement.
- Keep `Collection / SS 26` and `Boston — New York` corner labels.

### 02 — Introduction strip (NEW)
- Replaces the in-hero paragraph.
- Left: short bio paragraph ("A fashion designer focused on structured silhouettes…").
- Right: a 3-item meta row — `Based · Boston` / `Focus · Womenswear` / `Tools · CLO 3D, Adobe, Hand patterning`.
- Keeps the marquee directly under it as a visual breath.

### 03 — Signature Pieces (was "Color Story")
- Same 3 photos (`blue-flare`, `painted-shirt`, `red-oriental`).
- Equal-width grid, each tile numbered `01 / 02 / 03` with title + year underneath (not just a tiny caption). Reads as a real lineup.

### 04 — Selected Works (restructured)
- **Drop the staggered `md:mt-40` offsets** — that's the main source of "messy".
- New layout: clean **2-column grid** of 4 projects (3:4 tiles, equal heights). Optional 5th project as a full-width feature row at the bottom.
- Keep hover zoom + animated underline on title.
- Keep "View all" link top-right.

### 05 — Philosophy quote
- Keep the centered editorial statement, but trim it: *"Structure, softened by color."* (the one-liner from the brief) — much stronger than the current long sentence.
- Hairline rules above and below stay.

### 06 — About preview (NEW)
- Two-column: left = `black-vest-set.jpg` portrait at modest size; right = 3-sentence bio + "Read more →" link to `/about`.
- Gives the home page a clear identity moment without forcing visitors to navigate.

### 07 — CTA
- Keep current "Designing what comes next — together." + "Get in touch" link, but tighten padding so it doesn't feel like a third hero.

## Files touched

- `src/pages/Index.tsx` — full restructure into 7 numbered sections, remove staggered grid offsets, add Intro strip + About preview.
- *(no changes)* `src/data/projects.ts`, `Portfolio.tsx`, `About.tsx`, `Contact.tsx`, `index.css`, nav, footer.

## What's intentionally NOT changing

- Typography system (Cormorant + Inter) — unchanged.
- Color palette and `editorial-img` treatment — unchanged.
- Marquee, ken-burns hero animation, float-soft portrait — unchanged.
- Portfolio and About pages — unchanged this round.

## Open question

Do you want **section numbers visible** to the visitor (`01 — Introduction`, `02 — Signature Pieces`, …) as small tracked labels? This is what makes the structure *feel* structured. Two options:

- **A** — Yes, show numbered section labels. More editorial, more "designer monograph". *(my recommendation)*
- **B** — Keep labels but unnumbered (just `Introduction`, `Signature Pieces`). Slightly softer.
