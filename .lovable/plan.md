## Global text changes

- Replace brand name "Gabys Design" → "Gabbys Design" everywhere it appears (Footer logo, Nav logo, About copy, page titles, meta tags in `index.html`, etc.).
- Replace designer name "Gaby Kerac" → "Gabriela Kerac" everywhere (About headline + body, Contact quote attribution, Footer, any meta description).
- Note: the Instagram handle `_gabbys_design_` and email `gabi.kerac@gmail.com` stay unchanged (they are external identifiers, not display names).

## Contact page

- Remove the closing quote block:
  > "Design, to me, is the quiet conversation between a woman and what she chooses to wear." — Gaby Kerac
- Do not replace it with new text.

## Portfolio — add new sketch images

Copy 7 uploaded files into `src/assets/projects/sketches/` and import them in `src/data/projects.ts`:

```
user-uploads://Project_1_drawing.png → 01-sketch.png   (used in Project 02)
user-uploads://Project_2_drawing.png → 02-sketch.png   (used in Project 04)
user-uploads://Project_3_drawing.png → 03-sketch.png   (used in Project 05)
user-uploads://Project_4_drawing.png → 04-sketch.png   (used in Project 06)
user-uploads://Project_5_drawing.png → 05-sketch.png   (used in Project 07)
user-uploads://Project_6_drawing.png → 06-sketch.png   (used in Project 03)
user-uploads://Project_7_drawing.png → 07-sketch.png   (used in Project 01)
```

## Portfolio — per-project edits in `src/data/projects.ts`

**Project 01 — Blue Fit-and-Flare**
- Rename first process item caption "Movement study" → "Digital Croquis".
- Replace its image with the new `Project_7_drawing.png` sketch.

**Project 02 — Navy Tailored Two-Piece**
- Hero image: shift focal point upward (use `object-[center_top]` / `object-top` for this project's hero so only the head area is cropped out — i.e., more of the head is visible, image moves up so currently "only the head" frame).
- Process tiles, currently:
  1. Vest detail · silver buttons (image)
  2. Silhouette study (image)
  3. Hand sketch (placeholder)
  4. Pattern making (placeholder)
- New order:
  1. **Project_1_drawing.png** with caption "Vest detail · silver buttons" *(new sketch in slot 1)*
  2. Vest detail · silver buttons (existing image, moved right by one)
  3. Silhouette study (existing image, moved right by one)
  4. Hand sketch (placeholder, dropped from list — only 4 tiles total)

  Note: the user said "move Vest detail and Silhouette one place right, and on place of Vest detail add Project_1_drawing". The "Pattern making" placeholder is removed to keep 4 tiles.

**Project 03 — Oriental-Inspired Fitted Dress**
- Replace the first process tile image (currently `orientalRender`, "Digital concept") with the new `Project_6_drawing.png` sketch. Caption stays "Digital concept".

**Project 04 — Structured Blazer (slug `tropical-floral-blouse`)**
- Process tiles, currently:
  1. Final, in motion (image)
  2. Print composition (placeholder)
  3. Hand sketch (placeholder)
  4. Pattern development (placeholder)
- New order:
  1. **Project_2_drawing.png** with caption "Print composition"
  2. Final, in motion (moved right by one)
  3. Hand sketch (placeholder)
  4. Pattern development (placeholder)

**Project 05 — Abstract Print Statement Shirt**
- Process tiles, currently:
  1. Cut pattern pieces (image)
  2. Back panel (image)
  3. Final, styled (image)
  4. Digital illustration (placeholder)
- New order:
  1. **Project_3_drawing.png** with caption "Digital illustration"
  2. Cut pattern pieces (moved right)
  3. Back panel (moved right)
  4. Final, styled (moved right)

**Project 06 — Geometric Two-Piece Ensemble**
- Hero image: shift focal point upward (object-top) so head is more visible.
- Process tiles, currently:
  1. Movement, full silhouette (image)
  2. Hand sketch (placeholder)
  3. Pattern coordination (placeholder)
  4. Design research (placeholder)
- New order:
  1. **Project_4_drawing.png** with caption "Hand sketch"
  2. Movement, full silhouette (moved right)
  3. Pattern coordination (placeholder)
  4. Design research (placeholder)

**Project 07 — Minimalist Structured Blazer**
- Process tiles, currently:
  1. Signature pin · gold detail (image)
  2. Fitting on dressform (image)
  3. Pinning, atelier (image)
  4. Final construction (placeholder)
- New order:
  1. **Project_5_drawing.png** with caption "Concept sketch"
  2. Signature pin · gold detail (moved right)
  3. Fitting on dressform (moved right)
  4. Pinning, atelier (moved right) — "Final construction" placeholder dropped to keep 4 tiles.

## Hero image positioning (Projects 2 and 6)

The Portfolio page currently applies `object-[center_25%]` to every project hero. To target only Projects 02 and 06, switch their hero `<img>` `object-position` to `object-[center_top]` via a per-project override (e.g., add an optional `imagePosition` field on `Project` and use it on the hero `<img>`).

## Files to change

- `src/components/Footer.tsx` — brand name
- `src/components/Nav.tsx` — brand logo text
- `src/pages/About.tsx` — designer name "Gaby" → "Gabriela"
- `src/pages/Contact.tsx` — remove quote block; update designer name in any other reference
- `src/pages/Portfolio.tsx` — support per-project hero `object-position`
- `src/data/projects.ts` — add new sketch imports, reorder process arrays, update captions, add `imagePosition` for projects 02 and 06
- `index.html` — title/meta description if they contain "Gabys Design" / "Gaby Kerac"
- New assets copied from uploads into `src/assets/projects/sketches/`
