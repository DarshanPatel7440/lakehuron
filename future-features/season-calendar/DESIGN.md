# 🎨 Season Calendar — Design Specification

> Complete design document for the Season Calendar section.  
> Every visual decision is documented here so future designers and developers can implement without guesswork.

---

## 1. Section Hierarchy

The Season Calendar section lives within the main homepage flow. Its position in the page hierarchy:

```
Header
├── Hero
├── WhoWeAre (Our Story)
├── WhyChooseUs
├── Programs
├── ──────────────────────────
├── 🏐 Season Calendar  ← HERE (replaces or complements Events)
├── ──────────────────────────
├── PlayerJourney
├── Coaches
├── SuccessStories
├── Values
├── FAQ
├── Contact
Footer
```

**Rationale:** Placing the calendar after Programs creates a natural flow: "Here are our programs → Here's when they happen." This answers the immediate parent question: "What's the schedule?"

### Internal Section Hierarchy

```
Section (id="calendar")
├── Header Row
│   ├── Overline ("Season Calendar")
│   ├── Heading ("Your Complete Season at a Glance")
│   ├── Subtitle paragraph
│   └── CTA Button ("Subscribe to Calendar")
├── Filter Bar (sticky)
│   └── Category chips (All | Tryouts | Travel | ...)
├── Month Navigation
│   └── Month pills (SEP | OCT | NOV | ...)
├── Timeline Body
│   ├── Month Group: "September 2027"
│   │   ├── Event Card
│   │   ├── Event Card
│   │   └── Event Card
│   ├── Month Group: "October 2027"
│   │   ├── Event Card
│   │   └── ...
│   └── ...
└── Bottom CTA
    └── "Have Questions? Contact Us" link
```

---

## 2. Spacing

All spacing follows the project's 8px grid system.

| Element | Spacing | Token |
|---|---|---|
| Section vertical padding | `clamp(80px, 10vw, 120px)` | — |
| Header to filter bar | 48px | `--space-5` |
| Filter bar to month nav | 24px | `--space-3` |
| Month nav to timeline | 48px | `--space-5` |
| Between month groups | 64px | `--space-6` |
| Month header to first card | 24px | `--space-3` |
| Between event cards | 16px | `--space-2` |
| Card internal padding | 24px 28px | `--space-3` / custom |
| Filter chip padding | 8px 20px | `--space-1` / custom |
| Month pill padding | 8px 16px | `--space-1` / `--space-2` |
| CTA button padding | 12px 28px | custom |

---

## 3. Typography

| Element | Font Family | Weight | Size | Color | Letter Spacing |
|---|---|---|---|---|---|
| Overline | Manrope | 700 | 0.7rem | `--color-gold` | 0.15em |
| Section heading | Cormorant Garamond | 700 | `clamp(2rem, 4vw, 3.5rem)` | `--color-navy-dark` | -0.03em |
| Subtitle | Inter | 400 | 1rem | `--color-graphite` | normal |
| Month group header | Cormorant Garamond | 600 | `clamp(1.5rem, 3vw, 2rem)` | `--color-navy` | -0.02em |
| Event title | Cormorant Garamond | 700 | 1.3rem | `--color-navy-dark` | -0.01em |
| Date — month abbr | Manrope | 800 | 0.65rem | `--color-gold` | 0.12em |
| Date — day number | Cormorant Garamond | 700 | 2.5rem | `--color-navy` | normal |
| Category tag | Manrope | 700 | 0.65rem | category-specific | 0.06em |
| Location / time text | Manrope | 500 | 0.8rem | `--color-graphite` | normal |
| Filter chip text | Manrope | 600 | 0.8rem | varies | 0.04em |
| CTA button text | Manrope | 700 | 0.8rem | white | 0.07em |
| Countdown digits | Cormorant Garamond | 700 | 1.1rem | `--color-gold` | normal |
| Status badge | Manrope | 700 | 0.6rem | varies | 0.08em |

---

## 4. Component Sizes

| Component | Dimensions |
|---|---|
| Event card | Full width, min-height ~100px |
| Date badge column | 80px width |
| Filter chip | Auto width, 36px height |
| Month pill | Auto width, 36px height |
| CTA button (primary) | Auto width, 44px height |
| CTA button (secondary) | Auto width, 36px height |
| Timeline dot | 12px diameter |
| Timeline line | 2px width |
| Category tag pill | Auto width, 22px height |
| Status badge | Auto width, 20px height |

---

## 5. Grid & Layout

### Event Card Grid

```
Desktop (≥1024px):
┌──────────┬──────────────────────────────────┬──────────────┐
│ Date     │ Event Details                    │ CTA Buttons  │
│ Badge    │ (category, title, meta, status)  │              │
│ (80px)   │ (1fr)                            │ (auto)       │
└──────────┴──────────────────────────────────┴──────────────┘

Tablet (768–1023px):
┌──────────┬──────────────────────────────────┐
│ Date     │ Event Details                    │
│ Badge    │ (title, meta, status)            │
│ (80px)   │ (1fr)                            │
├──────────┴──────────────────────────────────┤
│ CTA Buttons (full width row)               │
└────────────────────────────────────────────┘

Mobile (≤767px):
┌──────────┬──────────────────────┐
│ Date     │ Event Details        │
│ (60px)   │ (1fr)                │
├──────────┴──────────────────────┤
│ CTA Buttons (stacked)          │
└────────────────────────────────┘
```

### Filter Bar Layout

```
Desktop: Flex row, gap 8px, centered or left-aligned
Mobile:  Horizontal scroll, padding 0 20px, overflow-x auto, scroll-snap
```

---

## 6. Icons

All icons from `lucide-react`. Sizes follow the existing pattern:

| Context | Icon | Size |
|---|---|---|
| Location meta | `MapPin` | 12px |
| Time meta | `Clock` | 12px |
| Category tag | `Tag` | 10px |
| Age group | `Users` | 12px |
| Coach | `User` | 12px |
| CTA arrow | `ChevronRight` | 12–14px |
| Calendar export | `Calendar` | 11px |
| Filter active | `Check` | 12px |
| Featured badge | `Star` | 10px |
| Subscribe | `Bell` | 14px |
| Empty state | `CalendarX` | 48px |

---

## 7. Color Palette

### Section Colors

| Element | Color | Value |
|---|---|---|
| Section background | Ivory | `#F5F0E8` |
| Card background | White | `#FFFFFF` |
| Card border | Navy 8% | `rgba(8,47,87,0.08)` |
| Card hover shadow | Navy 10% | `rgba(8,47,87,0.10)` |
| Timeline line | Gold 30% | `rgba(185,120,22,0.30)` |
| Timeline dot | Gold | `#B97816` |
| Timeline dot (next event) | Gold with glow | `#B97816` + shadow |
| Featured card left border | Gold | `#B97816` |

### Category Color Map

| Category | Color | Usage |
|---|---|---|
| Tryouts | `#B97816` (Gold) | High-visibility, important |
| Travel | `#082F57` (Navy) | Core program identity |
| Skill Camps | `#0D3D6E` (Mid Navy) | Educational, development |
| House Leagues | `#3A3A3A` (Graphite) | Community, recreational |
| Tournaments | `#051E38` (Dark Navy) | Competitive, prestigious |
| Community | `#8A9BAD` (Mist) | Friendly, open |
| Workshops | `#8B5E10` (Bronze) | Professional development |
| Championship | `#051E38` (Dark Navy) | Elite, final events |

### Registration Status Colors

| Status | Background | Text |
|---|---|---|
| Open | `rgba(16,185,22,0.10)` | `#0B8A12` |
| Closing Soon | `rgba(255,165,0,0.10)` | `#CC8400` |
| Full | `rgba(220,38,38,0.10)` | `#DC2626` |
| Coming Soon | `rgba(138,155,173,0.10)` | `#8A9BAD` |

---

## 8. Responsive Behavior

### Breakpoint Summary

| Breakpoint | Key Changes |
|---|---|
| **≥1536px** | Max container width 1440px, comfortable spacing |
| **≥1280px** | Default desktop layout, 3-column card grid |
| **≤1024px** | CTA column moves below event details |
| **≤900px** | Filter bar becomes scrollable, month nav wraps to 2 rows |
| **≤768px** | Single-column cards, date badge shrinks to 60px |
| **≤600px** | Compact cards, reduced padding, smaller date typography |
| **≤480px** | Full-width stacked buttons, timeline line hidden |
| **≤375px** | Tight 12px section padding, minimal spacing |
| **≤320px** | Maximum compression, everything single-column |

### Filter Bar Responsive

- **Desktop (≥768px):** All chips visible, flex-wrap if needed
- **Mobile (<768px):** Horizontal scroll with `overflow-x: auto`, `scroll-snap-type: x mandatory`, subtle fade gradient on edges

### Month Navigation Responsive

- **Desktop:** Single row of pills
- **Tablet:** Wraps to 2 rows
- **Mobile:** Horizontal scroll

---

## 9. Hover Effects

| Element | Hover Effect |
|---|---|
| Event card | `translateX(4px)`, shadow elevation `0 8px 32px rgba(8,47,87,0.1)` |
| Filter chip | Background opacity increase, subtle scale `1.02` |
| Month pill | Background color shift to gold-pale |
| CTA button (primary) | `translateY(-2px) scale(1.03)`, gold glow shadow |
| CTA button (secondary) | Background fill `rgba(8,47,87,0.04)` |
| Timeline dot | Scale `1.3` with gold glow |
| Category tag | Slight darkening of background |

**Transition timing:** `300ms cubic-bezier(0.16, 1, 0.3, 1)` (matches project's `--ease-expo`)

---

## 10. Animation Ideas

### Entrance Animations (via ScrollReveal)

| Element | Variant | Delay |
|---|---|---|
| Section header | `fadeUp` | 0ms |
| Subtitle | `fadeUp` | 100ms |
| CTA button | `fadeRight` | 200ms |
| Filter bar | `scaleIn` | 150ms |
| Month nav | `fadeUp` | 200ms |
| Month group headers | `fadeUp` | 0ms (per group) |
| Event cards | `fadeLeft` | staggered 70ms |

### Interactive Animations

- **Filter switch:** Smooth CSS transition on chip backgrounds, no layout shift
- **Month scroll:** `scrollIntoView({ behavior: 'smooth', block: 'start' })` with 80px offset for sticky header
- **Countdown timer:** Digit changes with no flicker (use monospace-like display)
- **Timeline dot pulse:** CSS `@keyframes` pulse on the next upcoming event's dot

### Micro-interactions

- Card press: Subtle `scale(0.995)` on `:active`
- Button press: `scale(0.97)` on `:active`
- Filter chip select: Brief `scale(1.05)` → `scale(1.0)` spring

---

## 11. Accessibility Considerations

| Requirement | Implementation |
|---|---|
| Section landmark | `aria-labelledby="calendar-heading"` |
| Filter semantics | `role="tablist"` with `role="tab"` children |
| Active filter | `aria-selected="true"` |
| Event list | `role="list"` with `role="listitem"` |
| Countdown | `aria-live="polite"` with descriptive label |
| Focus indicators | `:focus-visible` with `2px solid var(--color-gold)`, `3px` offset |
| Reduced motion | `prefers-reduced-motion: reduce` disables all transitions |
| Touch targets | Minimum 44×44px on all interactive elements |
| Color independence | Text labels accompany all color-coded badges |
| Screen reader | Category, status, and time information in logical reading order |
| Skip links | Calendar section reachable via existing skip-to-main |
| Keyboard nav | Tab through filters → months → event cards → CTAs |

---

## 12. Visual Inspiration

The design draws from these reference styles:

1. **Stanford Athletics season schedule** — Clean timeline, prestigious feel
2. **Wimbledon event calendar** — Elegant typography, gold accents on navy
3. **Apple Events page** — Minimalist cards, generous whitespace, clear hierarchy
4. **Premier League fixtures page** — Category filtering, date grouping
5. **Notion calendar view** — Clean month navigation, smooth transitions

The overall aesthetic should feel like a **premium boarding school brochure** — parents should feel their child is joining an elite, well-organized institution.

---

## 13. Future Enhancements

### Phase 2 (Year 2–3)
- **Google Calendar subscribe link** — iCal feed URL for auto-sync
- **Map integration** — Venue locations on embedded Google Map
- **Photo attachments** — Event recap photos after completion
- **Results tab** — Tournament results and standings

### Phase 3 (Year 3+)
- **CMS integration** — Events managed via Sanity/Contentful dashboard
- **Real-time capacity** — Live registration counts from backend
- **Personalization** — Filter by "My programs" based on login
- **Push notifications** — Browser push for upcoming events
- **Multi-season archive** — Browse past seasons
- **Print stylesheet** — Optimized for printing the full schedule
- **PDF export** — Download season as formatted PDF
