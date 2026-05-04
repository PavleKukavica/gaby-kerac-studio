
## Honest read before we touch code

This new brief is a meaningful evolution — same designer, same pages, but a slightly different *positioning*.

### What's changed vs. the current site

- **Positioning shift**: pure "quiet luxury / restraint" → **"structured + bold color expression, joy, Pucci-adjacent artistic energy."** A real tonal change — the current Home and About lean very muted ("quiet authority of a well-cut line", "quiet luxury, lived in"). The new copy is more confident and color-forward.
- **Home**: new headline ("Modern feminine design with a focus on elegance and structure") and new intro paragraph. 3–5 project previews (currently 4 — fine).
- **Portfolio**: explicit ask for **process artifacts** — sketches (hand + digital), CLO 3D visuals, GIFs / motion clips. Right now each project shows only one final image + a text "Process" line. **Biggest gap.**
- **About**: new copy emphasizing color, nature, architecture, CLO 3D + AI.
- **Contact**: keep as-is. ✓
- **Visual strategy**: keep neutral base + black accents, but let colorful imagery *"stand out strongly"* — reduce the sand/bone wash over images, let color punch through.

### My honest opinion

- Direction is good and more distinctive than "quiet luxury" — "structured silhouettes + bold color" is a sharper, more memorable hook for the Boston job market.
- Tension to flag: "Pucci-inspired bold color" + "quiet luxury minimalism" can fight each other if overdone. The right move is **neutral architecture, loud images** — exactly what you wrote. Keep the chrome restrained, let the garments carry the color.
- The **Portfolio process artifacts** are the single highest-impact upgrade for "professional, not student." Without them it's just a lookbook. I can build the layout and use tasteful placeholders, but real sketches / CLO renders / GIFs from you will make or break this page.
- I'd **not** redesign Contact (you said keep) and **not** rip out the typography system — Cormorant + Inter still fits.

---

## What you uploaded

Four real photos of the designer wearing her own pieces — far stronger than stock imagery.

| File | What it shows | Best use |
|---|---|---|
| `blue-flare-dress.jpg` | Royal-blue fit-and-flare, Danube backdrop | **Project 01** real photo |
| `red-oriental-dress.jpg` | Red oriental brocade under cherry blossoms | **Project 03** real photo |
| `painted-shirt.jpg` | White shirt with hand-painted yellow back panel, sunset | **NEW Project 06** + Home color-story accent |
| `black-vest-set.jpg` | Black vest + tailored trouser set, sky silhouette | **Home hero secondary** + **About portrait** |

---

## Plan

### 1. Home (`src/pages/Index.tsx`)

- **Hero copy**: big line *"Modern feminine design with a focus on elegance and structure."* + right column *"A fashion designer focused on structured silhouettes, bold color expression, and refined femininity. Her work combines artistic inspiration with wearable design — pieces that feel both distinctive and elegant."*
- **Hero portrait**: replace the floating side image with `black-vest-set.jpg` (silhouette against sky), keep slow `float-soft` animation.
- **NEW Color Story strip** between marquee and editorial statement: 3-image horizontal collage — `blue-flare`, `painted-shirt`, `red-oriental` — with hairline captions ("Cobalt — SS24", "Hand-painted — FW24", "Brocade — SS23"). This is the brief's "let colorful images stand out strongly" moment.
- **Editorial statement**: *"Structured silhouettes, lived in color — designed to feel distinctive, feminine, and entirely wearable."*
- **Marquee**: `Structured Femininity · Bold Color · Architectural Lines · Movement · Pattern · Modern Tailoring`.
- **Selected Works**: 5 tiles in tight asymmetric grid; use real photos for 01 & 03, existing renders for 02/04/05, plus new Project 06.
- **CTA**: *"Designing what comes next — together."* → "Get in touch".
- Reduce sand/bone wash on Selected Works section so colors punch.

### 2. Portfolio (`src/pages/Portfolio.tsx` + `src/data/projects.ts`) — biggest change

Turn each project into a real **case study**.

- Extend `Project` type with `realPhoto?` and `process[]` (`{ image, caption, kind: 'sketch' | 'digital' | 'clo3d' | 'motion' | 'final' }`) plus optional `motionSrc`.
- Per-project layout:
  1. Full-bleed hero image (real photo where available, render otherwise)
  2. Title block — number, title, category, year, 2–4 sentence concept, spec list
  3. **Process strip** — 3–4 horizontal thumbnails: hand sketch → digital flat → CLO 3D → final, each with tiny caption + hover zoom
  4. Optional muted autoplay motion clip in 3:4 frame if `motionSrc` provided
- Where you don't yet have real sketch / CLO files, a clearly labeled "Coming soon — process artifact" tile in soft sand, so the layout is real and you can drop files in later.
- Updated copy for all projects:
  - **01 Blue Fit-and-Flare** — *"A feminine dress with a structured bodice and flowing skirt. Designed to create movement and elegance while keeping a refined silhouette. The bold blue brings energy and freshness."*
  - **02 Floral Two-Piece** — *"A modern structured set pairing a cropped top with a high-waisted pleated skirt. The floral pattern adds softness while the silhouette stays clean and architectural."*
  - **03 Oriental-Inspired Fitted Dress** — *"A fitted design inspired by traditional forms, with a high collar and asymmetrical neckline. Cultural reference meets precise modern tailoring."*
  - **04 Asymmetrical Wrap Skirt** — *"A high-waisted wrap skirt with layered construction and decisive lines. The structured drape and bold color create a confident modern statement."*
  - **05 Asymmetrical Color-Block Skirt** — *"A minimal, striking design built on black-and-white contrast and asymmetry. Focused on structure, movement, and visual impact."*
  - **NEW 06 Painted Panel Shirt** — *"A crisp poplin shirt extended into a hand-painted back panel — brushwork in saffron, terracotta, and sage. The piece treats the garment as canvas while the front stays sharply tailored."*

### 3. About (`src/pages/About.tsx`)

- Replace `gaby-portrait.jpg` with `black-vest-set.jpg` — same person wearing her own design, more authentic.
- Add a small horizontal trio strip below the meta row: `blue-flare`, `red-oriental`, `painted-shirt` with caption "Selected pieces, worn by the designer."
- Rewrite copy:
  - Lead: *"Gaby Kerac is the fashion designer behind Gabys Design — a womenswear practice creating feminine, structured pieces that balance elegance with bold visual expression. Her work is inspired by the relationship between color, form, and movement."*
  - Body 1: *"She draws inspiration from nature and architecture, translating those influences into clean silhouettes enriched with pattern and color. Her designs aim to bring positive energy, confidence, and individuality while staying refined and wearable."*
  - Body 2: *"Gaby combines traditional craftsmanship with modern tools — including CLO 3D and AI-assisted design processes — to create innovative, contemporary collections."*
- Philosophy line: **"Structure, softened by color."**
- Tools row: `CLO 3D · Adobe Suite · Hand patterning · AI-assisted design`.

### 4. Contact

**No changes** — per your request, leave exactly as-is.

### 5. Visual treatment for the new photos

- The 4 phone photos are warm/outdoor — gorgeous but slightly inconsistent. I'll add a `.editorial-img` utility (`filter: contrast(1.03) saturate(0.97);`) and a soft sand vignette **only on Home tiles**.
- Portfolio case-study heroes stay **untouched** — full saturation, full color punch (the brief's "let images stand out").
- `object-position` per image (e.g., `object-[center_30%]` on the black-set hero so her face sits in the upper third).

### 6. Final polish

- Mobile (≤768px): hero headline `text-[18vw]`, tighten section paddings from `py-32 md:py-48` → `py-20 md:py-32` where too airy.
- Soften hero gradient (`from-bone/15 … to-bone/60`).
- Keep all existing animations (ken-burns, float-soft, marquee, fade-up, animated underline).

### Files touched

- `src/pages/Index.tsx` — copy + Color Story strip + real hero portrait
- `src/pages/Portfolio.tsx` — case-study layout with process strips
- `src/data/projects.ts` — add `realPhoto`, `process[]`, add Project 06
- `src/pages/About.tsx` — copy rewrite + real portrait + selected-pieces strip
- `src/index.css` — small `.editorial-img` utility
- *(no changes)* `src/pages/Contact.tsx`, Nav, Footer, `tailwind.config.ts`

---

## One question before I build

For **Project 06 (the painted shirt)**, frame it as:
- **A** — A standalone signature piece in its own category ("Hand-Painted / Wearable Art"), or
- **B** — Part of the same RTW lineup as the other 5, just with a different process note?

I'd lean **A** — it's the most distinctive piece and deserves its own label. Your call.
