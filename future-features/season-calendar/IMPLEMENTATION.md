# 🔧 Season Calendar — Implementation Guide

> Step-by-step guide for a future developer to integrate the Season Calendar into the live website.

---

## 1. Where to Import

Add the import to `src/app/page.tsx`:

```tsx
import SeasonCalendar from '@/components/sections/SeasonCalendar';
```

---

## 2. Where to Place It

### Suggested Homepage Location

Insert `<SeasonCalendar />` **after Programs** and **before PlayerJourney**:

```tsx
<main id="main-content" suppressHydrationWarning>
  <Hero />
  <WhoWeAre />
  <WhyChooseUs />
  <Programs />
  <SeasonCalendar />       {/* ← NEW */}
  <PlayerJourney />
  <Coaches />
  <SuccessStories />
  <Events />               {/* Consider removing or simplifying */}
  <Values />
  <FAQ />
  <Contact />
</main>
```

> **Note:** You may want to remove or simplify the existing `Events.tsx` section since the Season Calendar supersedes it. Alternatively, keep Events as a "highlights" teaser and let the Calendar show the full schedule.

---

## 3. File Placement

Copy these files from `future-features/season-calendar/` into the project:

| Source | Destination |
|---|---|
| `season-calendar.tsx` | `src/components/sections/SeasonCalendar.tsx` |
| `season-calendar.css` | `src/components/sections/SeasonCalendar.module.css` |
| `sample-events.json` | `src/data/season-events.json` (or fetch from API) |

---

## 4. Navigation Updates

### Header.tsx

Add to the `navLinks` array in `src/components/layout/Header.tsx`:

```tsx
const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Calendar', href: '#calendar' },  // ← NEW
  { label: 'Coaches',  href: '#coaches' },
  { label: 'Events',   href: '#events' },     // Remove if Events section is removed
  { label: 'Contact',  href: '#contact' },
];
```

### Footer.tsx

Add to the `quickLinks` array in `src/components/layout/Footer.tsx`:

```tsx
const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Season Calendar', href: '#calendar' },  // ← NEW
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
];
```

---

## 5. Required Assets

| Asset | Status | Notes |
|---|---|---|
| `lucide-react` icons | ✅ Already installed | Calendar, MapPin, Clock, Tag, ChevronRight, Filter, Users, Star, Bell, CalendarX |
| `ScrollReveal` component | ✅ Already exists | At `@/components/ui/ScrollReveal` |
| Google Fonts | ✅ Already loaded | Cormorant Garamond, Manrope, Inter |
| CSS custom properties | ✅ Already defined | In `globals.css` |
| Event data | ⚠️ Needs real data | Replace `sample-events.json` with actual season schedule |

---

## 6. Optional Backend Integration

### Phase 1: Static JSON (Immediate)
- Use `sample-events.json` with real data
- Import directly into the component
- Update manually each season

### Phase 2: CMS Integration (Recommended)

**Sanity.io** (recommended for this project size):

```typescript
// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Query
const events = await sanityClient.fetch(`
  *[_type == "seasonEvent"] | order(date asc) {
    _id, title, description, date, time,
    location, venue, coach, ageGroup,
    category, skillLevel, registrationStatus,
    capacity, tags, featured
  }
`);
```

**Contentful** (alternative):
```typescript
import { createClient } from 'contentful';

const client = createClient({
  space: 'your-space-id',
  accessToken: 'your-access-token',
});

const entries = await client.getEntries({
  content_type: 'seasonEvent',
  order: 'fields.date',
});
```

### Phase 3: Custom API (Advanced)

REST endpoints:
```
GET  /api/events              → All events
GET  /api/events?month=9      → Events for September
GET  /api/events?category=tryouts → Filtered
GET  /api/events/:id          → Single event
POST /api/events/:id/register → Registration
```

---

## 7. Google Calendar Integration

### Subscribe Link (iCal feed)

Generate an `.ics` feed that parents can subscribe to:

```typescript
// src/app/api/calendar/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const events = await fetchEvents(); // from DB or CMS

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lake Huron VC//Season Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Lake Huron Volleyball Club',
    ...events.map(e => [
      'BEGIN:VEVENT',
      `DTSTART:${formatICSDate(e.date)}`,
      `SUMMARY:${e.title}`,
      `DESCRIPTION:${e.description}`,
      `LOCATION:${e.venue}`,
      `UID:${e.id}@lakehuronvc.ca`,
      'END:VEVENT',
    ].join('\r\n')),
    'END:VCALENDAR',
  ].join('\r\n');

  return new NextResponse(icsContent, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="lakehuron-season.ics"',
    },
  });
}
```

### Google Calendar Add Link

```typescript
const googleCalUrl = (event: SeasonEvent) => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatGCal(event.startDate)}/${formatGCal(event.endDate)}`,
    details: event.description,
    location: event.venue,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
};
```

---

## 8. Database Schema (if using custom backend)

```sql
CREATE TABLE season_events (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         VARCHAR(200) NOT NULL,
  description   TEXT,
  date          DATE NOT NULL,
  start_time    TIME,
  end_time      TIME,
  location      VARCHAR(200),
  venue         VARCHAR(200),
  coach         VARCHAR(100),
  age_group     VARCHAR(50),
  category      VARCHAR(50) NOT NULL,
  skill_level   VARCHAR(50),
  reg_status    VARCHAR(20) DEFAULT 'coming_soon',
  capacity      INTEGER,
  registered    INTEGER DEFAULT 0,
  tags          TEXT[],
  featured      BOOLEAN DEFAULT false,
  season        VARCHAR(10) NOT NULL,  -- e.g. '2027-28'
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_events_date ON season_events(date);
CREATE INDEX idx_events_category ON season_events(category);
CREATE INDEX idx_events_season ON season_events(season);
```

---

## 9. Performance Considerations

| Concern | Solution |
|---|---|
| Large event list | Virtualize with `react-window` if > 50 visible cards |
| Countdown timers | Use a single `setInterval` for all countdowns, not one per card |
| Image loading | Use `next/image` with lazy loading for any event images |
| Filter transitions | Use CSS transitions, not JS-driven re-renders |
| Initial load | Consider loading events via `useSWR` or React Query for caching |
| Bundle size | The component uses only `lucide-react` icons (tree-shakeable) |

---

## 10. Accessibility Checklist

- [ ] Section has `aria-labelledby` pointing to heading
- [ ] Filter bar uses `role="tablist"` and `role="tab"`
- [ ] Active filter has `aria-selected="true"`
- [ ] Event list uses `role="list"` / `role="listitem"`
- [ ] All buttons have descriptive `aria-label`
- [ ] Countdown uses `aria-live="polite"`
- [ ] Focus indicators visible on all interactive elements
- [ ] Color is not the only means of conveying information
- [ ] All touch targets ≥ 44×44px
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation works: Tab through filters → months → cards
- [ ] Screen reader announces filter changes

---

## 11. Testing Checklist

- [ ] Component renders without errors
- [ ] All filters work correctly (including "All")
- [ ] Month navigation scrolls to correct section
- [ ] Countdown timer updates every second
- [ ] "Add to Calendar" generates valid `.ics` file
- [ ] Empty state shows when no events match filter
- [ ] Responsive layout correct at: 320, 375, 480, 768, 1024, 1280, 1920px
- [ ] Hover effects work on desktop
- [ ] Touch interactions work on mobile
- [ ] ScrollReveal animations fire correctly
- [ ] No horizontal overflow at any breakpoint
- [ ] Lighthouse accessibility score ≥ 95
- [ ] Lighthouse performance score ≥ 90

---

## 12. Deployment Checklist

- [ ] Real event data replaces sample data
- [ ] All dates verified with club administration
- [ ] Venues confirmed and addresses accurate
- [ ] Coach names up-to-date
- [ ] Registration links functional
- [ ] Tested on staging environment
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (iOS Safari, Android Chrome)
- [ ] Stakeholder approval received
- [ ] Old Events section decision made (keep/remove/simplify)
- [ ] Navigation links updated in Header and Footer
- [ ] SEO meta updated if needed
- [ ] Deployed to production
- [ ] Post-deploy smoke test completed
