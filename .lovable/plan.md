
## Goal

All photos for all 7 projects are now in. Rewrite the portfolio with the new titles, copy, and uploaded photos. Same 1-hero + 4-tile layout as Project 01 had before; alternating left/right title block stays.

## Photo inventory — complete ✅

| # | Title | Hero + tiles |
|---|---|---|
| 01 | Blue Fit-and-Flare *(text unchanged)* | Hero: existing `bluePhoto` · Tiles: `Priject_7_Photo3` (stairs twirl) · existing `blueRender` (digital flat) · `Priject_7_Photo1` (back, riverside) · `Priject_7_Photo2` (smiling, gate) |
| 02 | Black Tailored Two-Piece *(new)* | Hero: `Priject_1_Photo1` · Tiles: `Priject_1_Photo2` (vest detail) · `Priject_1_Photo3` (silhouette) · 2 sketch/pattern placeholders |
| 03 | Oriental-Inspired Fitted Dress *(text unchanged)* | Hero: `Priject_6_Photo1` · Tiles: existing `orientalRender` · `Priject_6_Photo2` (back) · `Priject_6_Photo3` (side) · 1 cultural-research placeholder |
| 04 | Tropical Floral Blouse *(new)* | Hero: `Priject_2_Photo1` · Tiles: `Priject_2_Photo2` · 2 print/sketch placeholders · final crop |
| 05 | Abstract Print Statement Shirt *(new)* | Hero: `Priject_3_Photo2` · Tiles: `Priject_3_Photo1` (cut pattern pieces — real artifact) · `Priject_3_Photo3` (back panel) · `Priject_3_Photo4` (seated) |
| 06 | Geometric Two-Piece Ensemble *(new)* | Hero: `Priject_4_Photo1` · Tiles: `Priject_4_Photo2` · 2 sketch/pattern placeholders |
| 07 | Minimalist Structured Blazer *(new)* | Hero: `Priject_5_Photo3` · Tiles: `Priject_5_Photo1` (gold "G" pin detail) · `Priject_5_Photo2` (fitting on dressform) · `Priject_5_Photo4` (pinning with sketches behind) |

## Per-project copy

Years and process meta come verbatim from your brief. Concepts: 01 and 03 unchanged; 02, 04, 05, 06, 07 use the new copy you sent.

| # | Title | Category | Year |
|---|---|---|---|
| 01 | Blue Fit-and-Flare Dress | Eveningwear | 2024 |
| 02 | Black Tailored Two-Piece | Contemporary Set | 2026 |
| 03 | Oriental-Inspired Fitted Dress | Couture Study | 2025 |
| 04 | Tropical Floral Blouse | Print / Daywear | 2026 |
| 05 | Abstract Print Statement Shirt | Wearable Art | 2026 |
| 06 | Geometric Two-Piece Ensemble | Coordinated Set | 2024 |
| 07 | Minimalist Structured Blazer | Tailoring | 2024 |

## Files touched

- **`src/assets/projects/`** — copy in 18 new photos with normalized names (e.g. `01-blue-3.jpg`, `02-black-set-1.jpg`, … `07-blazer-4.jpg`).
- **`src/data/projects.ts`** — full rewrite: 7 entries in the new order with new copy, hero image, and exactly 4 process tiles each (real photos where I have them, `kind: "placeholder"` otherwise).
- **`src/pages/Portfolio.tsx`** — header copy "Six case studies" → "Seven case studies"; drop the `grid-cols-3 / grid-cols-4` conditional (every project now has 4 tiles, so grid is always `md:grid-cols-4`).
- **`src/pages/Index.tsx`** — Signature Pieces and Selected Works on the home page reference projects by slug. Update slugs to the new ones (`black-tailored-two-piece`, `abstract-print-shirt`, `oriental-fitted`, `minimalist-blazer`) so the home page doesn't break, and pull hero images from the `projects` array instead of hard-coded imports.

## What's intentionally NOT changing

- Project 01 and 03 concept text — unchanged.
- Layout: alternating left/right title block, year/process meta row, hero-then-tiles rhythm — unchanged.
- Design system, About, Contact, Home structure — unchanged.

Project 07 hero choice (the smiling designer + blazer on dressform) is editorial and on-brand, but if you'd rather lead with a clean garment-only shot, say the word and I'll swap to `Priject_5_Photo2`.
