## Homepage Redesign — More Elegant, Modern, Cinematic

Goal: refine `src/pages/Index.tsx` so the homepage feels more elegant, more modern, with cleaner imagery, more motion, and remove the "Studio Note — 01" label. No other pages affected.

### 1. Hero — slower, more cinematic

- Replace the current static hero image with a **slow Ken-Burns zoom** (subtle 1.0 → 1.08 over ~12s) on `hero-fashion.jpg` for constant gentle motion.
- Soften the gradient overlay so the image reads cleaner (less wash, more contrast at top/bottom only).
- Refine the headline: keep "Gaby Kerac" but reduce to `text-[14vw] md:text-[9vw]` so it feels less shouty and more editorial.
- Replace the hero subhead copy with a tighter, more modern line:
  - **Old**: "Modern feminine design with a focus on elegance and structure."
  - **New**: "Womenswear shaped by restraint, movement, and the quiet authority of a well-cut line."
- Replace the right column copy with:
  - **New**: "A Boston-based design practice working between tailoring, drape, and digital craft — pieces made to be worn, not just seen."
- Floating portrait: add a soft float animation (gentle 6s up/down) and a thin frame line.

### 2. Remove "Studio Note — 01" intro section

- Delete the entire "Studio Note — 01" block (left label + right large serif paragraph).
- Replace with a much cleaner **single centered editorial statement**, no label, no grid:
  - "A wardrobe of considered pieces — refined, feminine, and made to endure."
  - Set in `font-display text-3xl md:text-5xl`, centered, max-w-4xl, generous vertical padding, with a thin hairline divider above and below.

### 3. Marquee — more refined

- Slow the marquee speed (currently fast). Switch to a softer pace (~40s loop).
- Reduce the keyword list to tighter, more modern words: "Quiet Luxury · Womenswear · Tailoring · Drape · Modern Femininity · Editorial".
- Use lighter italic and reduce size slightly so it reads as a whisper, not a banner.

### 4. Selected Works — cleaner grid + more motion

- Keep the asymmetric magazine layout but tighten:
  - Increase vertical rhythm between rows.
  - Each image gets a longer, smoother zoom-in on hover (`duration-[1800ms]`) plus a subtle parallax-style fade-up as it enters the viewport.
  - Add a thin animated underline that draws in under the project title on hover.
- Update section label copy:
  - **Old**: "Selected Works" / "The Portfolio"
  - **New**: "Selected Work — 2024 / 2025" / "Recent Pieces"
- Add a small caption line under the section title: "Five garments from an ongoing study of feminine silhouette."

### 5. CTA — more modern, less heavy

- Reduce headline size from `text-8xl` to `text-5xl md:text-7xl` so it feels refined, not loud.
- Update copy:
  - **Old**: "Crafting the next chapter of femininity."
  - **New**: "Let's shape what she wears next."
- Update CTA link copy: "Begin a conversation →" → "Start a conversation".
- Add a subtle hover micro-interaction: the arrow slides right and the underline expands.

### 6. Global motion polish (homepage only)

- Add three new keyframes in `tailwind.config.ts` (scoped use on Index): `ken-burns`, `float-soft`, `marquee-slow`.
- Use the existing `useReveal` hook for fade-up entry on every major block — already in place, just extend to the new sections.

### Technical notes

- File touched: `src/pages/Index.tsx` (primary), `tailwind.config.ts` (add 3 keyframes/animations), `src/index.css` (optional: add a `.hairline` divider utility).
- No new images needed — reuse `hero-fashion.jpg`, `gaby-portrait.jpg`, and existing project images.
- No changes to routing, data, Nav, Footer, About, Portfolio, or Contact pages.
- Preserve color tokens (`bone`, `sand`, `stone`, `ink`) and typography (Cormorant Garamond + Inter).

### Resulting flow

```text
─────────────────────────────────────────────
 HERO — slow Ken-Burns image, floating portrait
 Gaby Kerac · refined headline · two-column intro
─────────────────────────────────────────────
 Marquee (slow, whispered)
─────────────────────────────────────────────
 Single centered editorial statement
 (replaces Studio Note — 01)
─────────────────────────────────────────────
 Selected Work — 2024 / 2025
 Asymmetric grid · slow zoom · animated underlines
─────────────────────────────────────────────
 CTA — "Let's shape what she wears next."
─────────────────────────────────────────────
```
