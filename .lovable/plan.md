## Contact Page Redesign

The current Contact page uses oversized display type (text-5xl) for email, LinkedIn and Instagram, making it feel heavy and unbalanced. I'll simplify it into a clean, modern, card-based layout with Lucide icons.

### Changes to `src/pages/Contact.tsx`

**1. Tone down the hero**
- Reduce headline from `text-9xl` to `text-6xl/7xl` for a more refined feel
- Tighten the intro paragraph

**2. Replace oversized contact rows with icon cards**
- Use Lucide icons: `Mail`, `Linkedin`, `Instagram` (and `MapPin` for location)
- Three-column grid (stacks on mobile) of minimal cards:
  - Icon (small, 20px, stone color)
  - Tiny uppercase label ("Email" / "LinkedIn" / "Instagram")
  - Value at `text-base` / `text-lg` (not display serif, just clean Inter) — e.g. `gabi.kerac@gmail.com`
  - Subtle hover: background shifts to `sand/40`, icon + arrow slide right
- Each card is a full anchor link with thin border, generous padding, no oversized type

**3. Add a refined location + availability strip**
- `MapPin` icon + "Boston, MA · Available worldwide" in small editorial type
- Sits above or beside the cards, not as a giant display heading

**4. Keep the closing quote**
- Slightly smaller (`text-xl md:text-2xl`) so it doesn't compete

### Resulting layout

```text
─────────────────────────────────────────────
 CONTACT — STUDIO
 Let's create.                          (smaller)
 Short intro paragraph.
─────────────────────────────────────────────
 [MapPin] Boston, MA · Available worldwide
─────────────────────────────────────────────
 ┌──────────┐  ┌──────────┐  ┌──────────┐
 │ ✉ Email  │  │ in LinkedIn│ │ ◉ Instagram│
 │ gabi.k…  │  │ in/gabri… │  │ @_gabbys… │
 └──────────┘  └──────────┘  └──────────┘
─────────────────────────────────────────────
 "Design, to me, is the quiet conversation…"
 — Gaby Kerac
─────────────────────────────────────────────
```

### Technical notes
- Import `Mail, Linkedin, Instagram, MapPin, ArrowUpRight` from `lucide-react`
- Keep `useReveal` animations and existing color tokens (`stone`, `sand`, `border`, `ink`)
- Cards: `border border-border p-8 hover:bg-sand/40 transition-all duration-500 group`
- Values render in Inter (sans), not Cormorant — keeps it modern and readable
- Fully responsive: `grid-cols-1 md:grid-cols-3 gap-4`

No other files need changes.
