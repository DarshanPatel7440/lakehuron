# 🏐 Season Calendar — Future Feature Blueprint

> **Status:** 🟡 Planned · Not Currently Active  
> **Target Launch:** Season 2027–28 (approximately Fall 2027)  
> **Last Updated:** August 2026  
> **Author:** Development Team

---

## Purpose

The **Season Calendar** is a comprehensive, interactive timeline section for the Lake Huron Volleyball Club website. It will display the full season schedule — including tournaments, tryouts, training sessions, camps, championships, community events, and coach workshops — in a visually stunning, filterable, and accessible interface.

This component is designed to replace the current static **Events** section (`src/components/sections/Events.tsx`) when the club has enough recurring events to justify a dedicated calendar experience.

---

## Why It Is Not Currently Used

Lake Huron Volleyball Club launched in the **2026–27 season** as a brand-new club serving Petrolia, Wyoming, and surrounding small Lambton County communities. During Year 1, the club is focused on:

- Establishing its first U16 and U18 travel teams
- Running introductory Skill Camps and House Leagues
- Building community awareness and trust
- Developing coaching infrastructure

The current **Events** section adequately covers the Year 1 schedule with 6–10 events. A full Season Calendar would be premature and create an impression of empty content.

---

## When to Implement

Implement the Season Calendar when **all** of the following conditions are met:

| Condition | Threshold |
|---|---|
| Active programs | ≥ 6 distinct programs running |
| Seasonal events | ≥ 20 events per season |
| Recurring events | Weekly training sessions scheduled |
| Age groups | ≥ 4 age groups with separate schedules |
| Club membership | ≥ 100 registered athletes |
| Website traffic | Regular parent/athlete engagement |

**Estimated timeline:** Fall 2027 or Spring 2028.

---

## Files in This Feature

| File | Purpose |
|---|---|
| `README.md` | This overview document |
| `PROMPT.md` | AI prompt to recreate/improve the component |
| `DESIGN.md` | Complete design specification |
| `DATA.md` | Realistic sample content for a full season |
| `IMPLEMENTATION.md` | Step-by-step integration guide |
| `season-calendar.tsx` | Production-ready React component |
| `season-calendar.css` | Companion stylesheet (CSS Module) |
| `sample-events.json` | Machine-readable event data |
| `assets/` | Placeholder asset references |

---

## Implementation Checklist

When the time comes to go live, follow this checklist:

- [ ] Review `IMPLEMENTATION.md` for step-by-step integration instructions
- [ ] Copy `season-calendar.tsx` to `src/components/sections/SeasonCalendar.tsx`
- [ ] Copy `season-calendar.css` to `src/components/sections/SeasonCalendar.module.css`
- [ ] Import and add `<SeasonCalendar />` to `src/app/page.tsx` (suggested position: after `Programs`, before `PlayerJourney`)
- [ ] Add `{ label: 'Calendar', href: '#calendar' }` to `navLinks` in `Header.tsx`
- [ ] Add `{ label: 'Season Calendar', href: '#calendar' }` to `quickLinks` in `Footer.tsx`
- [ ] Replace sample data in the component with real season data (or connect to a CMS/API)
- [ ] Update `sample-events.json` with actual dates and venues
- [ ] Test across all breakpoints (320px → 2560px)
- [ ] Test keyboard navigation and screen reader compatibility
- [ ] Verify countdown timers are accurate
- [ ] Consider removing or simplifying the old `Events.tsx` section to avoid redundancy
- [ ] Run Lighthouse audit for performance impact
- [ ] Deploy to staging, get stakeholder approval
- [ ] Deploy to production

---

## Quick Start (for future developer)

```bash
# 1. Copy component files
cp future-features/season-calendar/season-calendar.tsx src/components/sections/SeasonCalendar.tsx
cp future-features/season-calendar/season-calendar.css src/components/sections/SeasonCalendar.module.css

# 2. Update page.tsx — add import and component
# See IMPLEMENTATION.md for exact code

# 3. Update navigation
# See IMPLEMENTATION.md for Header.tsx and Footer.tsx changes

# 4. Replace sample data with real events
# See DATA.md for content structure

# 5. Test and deploy
npm run dev
```

---

## Questions?

Contact the development team or use `PROMPT.md` to regenerate or improve this feature with AI assistance.
