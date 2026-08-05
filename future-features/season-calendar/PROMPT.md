# 🤖 AI Prompt — Recreate the Season Calendar Component

> **Usage:** If this component is ever lost, damaged, or needs to be rebuilt from scratch, paste this entire document as a prompt into an AI coding assistant. It contains every specification needed to recreate the Season Calendar at production quality.

---

## System Context

You are building a **Season Calendar** section for the **Lake Huron Volleyball Club (Ospreys)** website.

**Tech Stack:**
- Next.js 15 (App Router, `'use client'` components)
- TypeScript (`.tsx` files)
- CSS Modules or inline style objects (NO Tailwind utility classes in JSX — the project uses a CSS design system with custom properties)
- `lucide-react` for icons
- A custom `ScrollReveal` component at `@/components/ui/ScrollReveal` for scroll-based entrance animations
- Google Fonts: Cormorant Garamond (display), Playfair Display (editorial), Inter (body), Manrope (UI/labels)

**Brand Identity:**
- Primary: Navy `#082F57`, Dark Navy `#051E38`
- Accent: Gold `#B97816`, Light Gold `#D4960E`, Pale Gold `#F0D080`
- Bronze: `#8B5E10`
- Neutral: Ivory `#F5F0E8`, Charcoal `#1C1C1C`, Graphite `#3A3A3A`, Mist `#8A9BAD`
- Surface Dark: `#071525`

**Design Tone:** Premium, institutional, luxury sports academy. Think Stanford Athletics meets a private boarding school. Not flashy or startup-like — dignified, confident, and polished.

---

## Full Prompt

Create a **Season Calendar** component (`SeasonCalendar.tsx`) for the Lake Huron Volleyball Club website. This is a full-page section that displays all events for the club's season in a visually stunning, interactive, and accessible timeline.

### Layout

1. **Section wrapper:**
   - `id="calendar"`
   - Background: `var(--color-ivory)` (light sections) with subtle grain texture overlay at 3% opacity
   - Vertical padding: `clamp(80px, 10vw, 120px) 0`
   - Uses `section-container` class for max-width and horizontal padding

2. **Header area:**
   - Left-aligned overline label: "Season Calendar" with gold decorative line
   - Large serif heading (Cormorant Garamond, 700): "Your Complete Season at a Glance"
   - Subtitle paragraph: muted description text
   - Right side: "Subscribe to Calendar" CTA button (gold gradient, pill shape)

3. **Filter bar:**
   - Horizontal scrollable row of filter chips
   - Categories: All, Tryouts, Travel, Skill Camps, House Leagues, Tournaments, Community, Workshops
   - Active chip: gold background with navy text
   - Inactive chips: ivory/white background with subtle border
   - Smooth transition on active state change
   - Sticky at top when scrolling past it (with subtle shadow)

4. **Month navigation:**
   - Horizontal row of month pills: SEP, OCT, NOV, DEC, JAN, FEB, MAR, APR, MAY, JUN
   - Active month highlighted with navy background and white text
   - Clicking scrolls to that month's section
   - Current month auto-highlighted on load

5. **Timeline body:**
   - Grouped by month with prominent month header (e.g., "September 2027")
   - Each month contains event cards in a vertical list
   - Left vertical timeline line in gold connecting events
   - Timeline dots (gold circles) at each event node

6. **Event cards:**
   - Grid layout: `[Date Badge] [Event Details] [CTA]`
   - Date badge: Month abbreviation (gold, small caps) + day number (navy, large serif)
   - Event details:
     - Category tag pill (color-coded)
     - Event title (Cormorant Garamond, 700, navy)
     - Location with MapPin icon
     - Time with Clock icon
     - Age group with Users icon
     - Coach name (if applicable)
     - Registration status badge ("Open", "Closing Soon", "Full", "Coming Soon")
   - CTA column: "Register Now" button + "Add to Calendar" secondary button
   - Countdown timer for events within 30 days (using the existing Countdown pattern)
   - Featured events get a subtle gold left border glow and a "Featured" badge

7. **Empty states:**
   - When no events match filters: Friendly message with illustration
   - "No events found for this category. Try a different filter or check back soon."

8. **Loading state:**
   - Skeleton cards with shimmer animation matching card dimensions

### Responsive Behavior

| Breakpoint | Layout Changes |
|---|---|
| ≥1280px | Full 3-column event cards, side-by-side filter and month nav |
| 1024px | Event cards stack CTA below details |
| 768px | Single-column cards, filter chips scroll horizontally, month nav wraps |
| 480px | Compact cards, smaller date badges, full-width buttons |
| 375px | Tight spacing, reduced font sizes |
| ≤320px | Minimal padding, single column, no timeline line |

### Animations

- Section entrance: `ScrollReveal` `fadeUp` on header, `scaleIn` on filter bar
- Event cards: Staggered `fadeLeft` with 70ms delay between cards
- Filter transitions: 300ms ease with subtle scale bounce on active chip
- Month scroll: Smooth scroll with `behavior: 'smooth'`
- Countdown: Live-updating every second with no layout shift
- Hover on cards: `translateX(4px)` with elevated shadow
- Timeline dots: Subtle pulse animation on the next upcoming event

### Accessibility

- `aria-labelledby="calendar-heading"` on section
- Filter chips use `role="tablist"` with `role="tab"` on each chip
- `aria-selected` on active filter/month
- Event list uses `role="list"` with `role="listitem"` on each card
- Countdown timers use `aria-live="polite"`
- All interactive elements have visible focus indicators (`:focus-visible` with gold outline)
- Color is never the only indicator — text labels accompany colored badges
- Minimum touch target: 44×44px
- Supports `prefers-reduced-motion` — disables animations

### Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Section heading | Cormorant Garamond | 700 | `clamp(2rem, 4vw, 3.5rem)` |
| Month group header | Cormorant Garamond | 600 | `clamp(1.5rem, 3vw, 2rem)` |
| Event title | Cormorant Garamond | 700 | `1.3rem` |
| Category tag | Manrope | 700 | `0.65rem` |
| Meta text (location/time) | Manrope | 500 | `0.8rem` |
| Filter chip | Manrope | 600 | `0.8rem` |
| Month pill | Manrope | 700 | `0.75rem` |
| Day number | Cormorant Garamond | 700 | `2.5rem` |
| Countdown digits | Cormorant Garamond | 700 | `1.1rem` |

### Color Coding for Categories

```typescript
const categoryColors: Record<string, string> = {
  'Tryouts':      '#B97816',   // Gold
  'Travel':       '#082F57',   // Navy
  'Skill Camps':  '#0D3D6E',   // Mid-Navy
  'House Leagues': '#3A3A3A',  // Graphite
  'Tournaments':  '#051E38',   // Dark Navy
  'Community':    '#8A9BAD',   // Mist
  'Workshops':    '#8B5E10',   // Bronze
  'Championship': '#051E38',   // Dark Navy
};
```

### Sample Content

Generate at least 25 events across a September–June season, covering:
- U16 and U18 travel team tryouts (3 rounds each in September)
- Weekly training sessions (select weeks)
- Skill camps for U10, U12, U14 (October)
- House league sessions for U12, U14, U16 (October onward)
- 3–4 regional tournaments
- 1 provincial championship
- Community events (parent nights, fundraisers)
- Coach development workshops
- Season-end banquet

### Future Improvements to Mention in Comments

- Google Calendar integration (subscribe link)
- CMS-powered events (Sanity, Contentful, or Strapi)
- Real-time registration status from backend API
- iCal export for individual events (already partially implemented)
- Admin dashboard for event management
- Email/push notification reminders
- Venue map integration (Google Maps embed)
- Multi-season archive view

### Code Style

- Use `'use client'` directive
- Use React hooks (`useState`, `useEffect`, `useMemo`)
- Use TypeScript interfaces for all data shapes
- Follow the existing component pattern: inline `style={{}}` objects using CSS custom properties
- Use `<style>{``}` blocks for hover effects and responsive overrides (matching existing pattern)
- Use `ScrollReveal` for entrance animations
- Add thorough JSDoc comments on the main component and key functions
- Export as default function component
- Do NOT import this component anywhere — it lives in `future-features/` until needed
