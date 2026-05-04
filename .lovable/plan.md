
## Direction

Shift the brand voice from "quiet luxury / restraint" to **"structured femininity with bold color expression"** — neutral, minimal site chrome so the colorful garments carry the energy. Keep the typography system (Cormorant Garamond + Inter), color tokens, and Contact page exactly as they are.

---

## 1. Home (`src/pages/Index.tsx`)

Keep the current architecture (hero → marquee → editorial statement → selected works → CTA), update copy and tighten visuals to match the new positioning.

- **Hero subtitle**: change to `Fashion Designer` (currently "Fashion Designer" — keep).
- **Hero headline pairing** — replace the current single line with the brief's headline + intro:
  - Big line: *"Modern feminine design with a focus on elegance and structure."*
  - Right-column body: *"A fashion designer focused on structured silhouettes, bold color expression, and refined femininity. Her work combines artistic inspiration with wearable design — pieces that feel both distinctive and elegant."*
- **Editorial statement** (mid-page) — replace "considered pieces, refined, feminine, made to endure" with a color-forward line: *"Structured silhouettes, lived in color — designed to feel distinctive, feminine, and entirely wearable."*
- **Marquee keywords** — swap to: `Structured Femininity · Bold Color · Architectural Lines · Movement · Pattern · Modern Tailoring`.
- **Selected Works section** — keep 4 featured projects, but:
  - Reduce the bone/sand wash so images read at full saturation (drop the `bg-sand/40` section background to plain `bg-background`, or lighten to `bg-bone`).
  - Keep the asymmetric grid + animated underline.
- **CTA** — soften to match new tone: *"Designing what comes next — together."* with link "Get in touch".

## 2. Portfolio (`src/pages/Portfolio.tsx` + `src/data/projects.ts`) — biggest change

Turn each project from a single-image entry into a real **case study** with a process strip.

Per project add to the data model:
- `concept` (already there — rewrite to match new brief copy, 2–4 sentences).
- `process[]` — array of `{ image, caption, kind: 'sketch' | 'digital' | 'clo3d' | 'motion' | 'final' }`.
- Optional `motionSrc` (GIF / short mp4) for a hover or autoplay clip.

Layout per case study:
1. **Full-bleed hero image** of the final piece (edge-to-edge, no card chrome).
2. **Title block** — number, title, category, year, 2–4 sentence concept, small spec list (year, fabric, process tags).
3. **Process strip** — 3–4 thumbnails in a horizontal grid: hand sketch → digital flat → CLO 3D render → final / motion. Each with a tiny caption ("Hand sketch", "CLO 3D fitting", etc.). Hover zoom on each.
4. **Optional motion clip** — if `motionSrc` exists, a muted autoplay loop in 3:4 frame.
5. Generous whitespace between projects, hairline divider.

Updated project copy (matching your brief):
- 01 Blue Fit-and-Flare — "A feminine dress with a structured bodice and flowing skirt. Designed to create movement and elegance while keeping a refined silhouette. The bold blue brings energy and freshness."
- 02 Floral Two-Piece — "A modern structured set pairing a cropped top with a high-waisted pleated skirt. The floral pattern adds softness while the silhouette stays clean and architectural."
- 03 Oriental-Inspired Fitted Dress — "A fitted design inspired by traditional forms, with a high collar and asymmetrical neckline. Cultural reference meets precise modern tailoring."
- 04 Asymmetrical Wrap Skirt — "A high-waisted wrap skirt with layered construction and decisive lines. The structured drape and bold color create a confident modern statement."
- 05 Asymmetrical Color-Block Skirt — "A minimal, striking design built on black-and-white contrast and asymmetry. Focused on structure, movement, and visual impact."

> **Note on assets**: I'll wire the layout and use the existing single image as a tasteful placeholder for sketches / CLO renders / GIFs where you don't yet have files. To make the page truly land as a "professional case study," you'll want to drop in real hand sketches, digital flats, CLO 3D screenshots, and (ideally) one short motion clip per project. I'll show you exactly where to place them.

## 3. About (`src/pages/About.tsx`)

Keep the layout (portrait + editorial image + 3-column meta strip), rewrite copy to match the new brief verbatim:

- Lead: *"Gaby Kerac is the fashion designer behind Gabys Design — a womenswear practice creating feminine, structured pieces that balance elegance with bold visual expression. Her work is inspired by the relationship between color, form, and movement."*
- Body 1: *"She draws inspiration from nature and architecture, translating those influences into clean silhouettes enriched with pattern and color. Her designs aim to bring positive energy, confidence, and individuality while staying refined and wearable."*
- Body 2: *"Gaby combines traditional craftsmanship with modern tools — including CLO 3D and AI-assisted design processes — to create innovative, contemporary collections."*
- Closing / philosophy block: replace "Quiet luxury, lived in." with **"Structure, softened by color."** and update the supporting paragraph to mention growing within the fashion industry and the Boston market.
- Meta strip: keep, update Tools row to `CLO 3D · Adobe Suite · Hand patterning · AI-assisted design`.

## 4. Contact

**No changes** — per your request, leave exactly as-is.

## 5. Final polish

- Audit spacing on mobile (≤768px): reduce hero headline to `text-[18vw]`, tighten section paddings from `py-32 md:py-48` to `py-20 md:py-32` where it's currently too airy on small screens.
- Make sure colorful images render at full saturation — remove any tint overlays on Portfolio thumbnails, soften the hero gradient slightly (`from-bone/15 … to-bone/60`).
- Keep all existing animations (ken-burns, float-soft, marquee, fade-up, image-zoom, animated underline).
- Verify Nav + Footer still feel consistent — no changes expected.

---

## Files touched

- `src/pages/Index.tsx` — copy + small visual tweaks
- `src/pages/Portfolio.tsx` — restructured to full case studies with process strip
- `src/data/projects.ts` — extend type with `process[]` + optional `motionSrc`, rewrite concepts
- `src/pages/About.tsx` — copy rewrite, philosophy line
- *(no changes)* `src/pages/Contact.tsx`, `tailwind.config.ts`, `src/index.css`, Nav, Footer

## One question before I build

Do you want me to **wire the Portfolio case-study layout now using your existing single image as placeholders** for the sketch / CLO 3D / motion slots (so the structure is ready and you just drop files in later), or **wait until you can share real sketches, CLO renders, and GIFs** so the first build looks fully real? My recommendation is to build the layout now — it'll make it obvious what to send me next.
