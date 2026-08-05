# 📘 LAKE HURON VOLLEYBALL CLUB PLATFORM — ALL-IN-ONE MASTER DOCUMENTATION

> **Role & Perspective:** Senior Software Architect, Tech Lead, UI/UX Reviewer, Documentation Engineer, and Full Stack Developer  
> **Application:** Lake Huron Volleyball Club Official Web Application  
> **Target Audience:** Future Developers, Tech Leads, Designers, and Stakeholders  
> **Last Updated:** August 2026  
> **Tech Stack:** Next.js 15.1 (App Router) | React 19 | TypeScript 5.5 | Tailwind CSS 3.4  

---

## 📑 TABLE OF CONTENTS
1. [Project Overview & Business Logic](#1-project-overview--business-logic)
2. [Complete Folder Structure & Directory Tree](#2-complete-folder-structure--directory-tree)
3. [Deep-Dive File & Component Analysis](#3-deep-dive-file--component-analysis)
4. [Page Architecture & User Journey Flow](#4-page-architecture--user-journey-flow)
5. [Routing & Navigation Engine](#5-routing--navigation-engine)
6. [UI Design System & Visual Specification](#6-ui-design-system--visual-specification)
7. [Responsiveness Strategy (19 Breakpoints)](#7-responsiveness-strategy-19-breakpoints)
8. [Styling & CSS Architecture](#8-styling--css-architecture)
9. [State Management & Data Flow](#9-state-management--data-flow)
10. [Data Schemas & Assets Inventory](#10-data-schemas--assets-inventory)
11. [Dependencies & Package Analysis](#11-dependencies--package-analysis)
12. [Configuration Files Reference](#12-configuration-files-reference)
13. [Performance, SEO & Accessibility (a11y) Review](#13-performance-seo--accessibility-a11y-review)
14. [Security & Risk Assessment](#14-security--risk-assessment)
15. [Code Quality & Architectural Review](#15-code-quality--architectural-review)
16. [Implemented Feature Inventory](#16-implemented-feature-inventory)
17. [Future Roadmap & Modular Season Calendar Blueprint](#17-future-roadmap--modular-season-calendar-blueprint)
18. [Developer Handbook & Onboarding Guide](#18-developer-handbook--onboarding-guide)
19. [Known Limitations & Maintenance Checklist](#19-known-limitations--maintenance-checklist)

---

## 1. PROJECT OVERVIEW & BUSINESS LOGIC

### 1.1 What This Project Is
The **Lake Huron Volleyball Club Platform** is a bespoke, luxury-tier digital institution web application designed and built for the **Lake Huron Volleyball Club (Ospreys)** based in Petrolia, Wyoming, and surrounding Lambton County communities in Ontario, Canada.

### 1.2 Business Purpose
The platform serves as the central hub for athlete recruitment, program promotion, community engagement, and brand identity. It communicates the club's alignment with the **Ontario Volleyball Association (OVA)** core values and gives prospective families clear pathways to join competitive youth teams (U16/U18 Travel), skill development camps, and house leagues.

### 1.3 Target Users
1. **Youth Athletes (Ages 10–18):** Looking for skill building, competitive travel teams, and high-performance development.
2. **Parents & Guardians:** Evaluating club credibility, OVA affiliation, certified coaching staff, transparent program expectations, and safety commitments.
3. **Coaches & Administrative Volunteers:** Seeking leadership roles or operational involvement.
4. **Sponsors & Community Partners:** Seeking youth sports alignment within Lambton County.

### 1.4 Development Philosophy & Tech Stack
- **Framework:** Next.js 15.1 with App Router.
- **Core Library:** React 19 (Client Components with strict hydration boundaries).
- **Type Safety:** TypeScript 5.5 in strict mode.
- **Styling:** Vanilla CSS Custom Properties for tokens, combined with modular CSS & Tailwind utilities.
- **Iconography:** Lucide React for consistent vector symbols.
- **Zero-Bloat Rule:** No heavy monolithic UI frameworks (e.g. Material UI); built with custom lightweight CSS.

---

## 2. COMPLETE FOLDER STRUCTURE & DIRECTORY TREE

```
lakehuron/
├── .eslintrc.json               # ESLint code quality configuration
├── .gitignore                   # Version control ignore rules
├── README.md                    # Repository introduction
├── MASTER_DOCUMENTATION.md      # Consolidated All-In-One Documentation File
├── next-env.d.ts                # Next.js TypeScript environmental types
├── next.config.ts               # Server & image optimization configuration
├── package-lock.json            # Deterministic dependency lockfile
├── package.json                 # Node dependencies and project scripts
├── postcss.config.js            # PostCSS plugin pipeline (Tailwind & Autoprefixer)
├── tailwind.config.ts           # Custom Tailwind theme extensions & token mapping
├── tsconfig.json                # TypeScript strict configuration & alias paths (@/*)
├── favicon/                     # Web app manifest icons and favicon files
├── public/                      # Static assets served at domain root
│   ├── logo.png                 # Official crest logo
│   ├── site.webmanifest         # PWA Web Manifest file
│   └── web-app-manifest-*.png   # Maskable app launch icons
├── src/                         # Application source code
│   ├── app/                     # Next.js App Router root
│   │   ├── globals.css          # Design system variables, responsive utilities, CSS reset
│   │   ├── layout.tsx           # Root HTML layout, Google Font loader, SEO metadata
│   │   └── page.tsx             # Main landing page assembling section components
│   └── components/              # Component library
│       ├── layout/              # Structural chrome components
│       │   ├── Header.tsx       # Glassmorphism header, smooth scroll logo, mobile menu
│       │   └── Footer.tsx       # Footer links, newsletter form, 2026 copyright notice
│       ├── sections/            # Feature page sections
│       │   ├── Hero.tsx         # Brand entrance hero with grain filter & dual CTAs
│       │   ├── WhoWeAre.tsx     # Our Story narrative & Vision/Mission/Community cards
│       │   ├── WhyChooseUs.tsx  # Key value metrics & animated counters
│       │   ├── Programs.tsx     # Competitive & Grassroots program cards
│       │   ├── PlayerJourney.tsx# Step-by-step athlete development roadmap
│       │   ├── Coaches.tsx      # Roster of technical staff with OVA credentials
│       │   ├── SuccessStories.tsx# Testimonials & social proof cards
│       │   ├── Values.tsx       # OVA 6-Pillar Core Values grid
│       │   ├── FAQ.tsx          # Collapsible categorization Q&A accordion
│       │   └── Contact.tsx      # Multi-select inquiry contact form & office info
│       └── ui/                  # Generic UI helper utilities
│           ├── AnimatedCounter.tsx# Smooth number counter animation
│           ├── BackToTop.tsx    # Floating scroll-to-top button
│           ├── LoadingScreen.tsx# Preloader overlay screen
│           └── ScrollReveal.tsx # IntersectionObserver animation wrapper
└── future-features/             # Isolated dormant blueprints
    └── season-calendar/         # Complete Season Calendar feature workspace
        ├── README.md            # Feature documentation & integration guide
        ├── PROMPT.md            # Re-creation prompt spec
        ├── DESIGN.md            # UX and visual spec
        ├── DATA.md              # Mock data schema documentation
        ├── IMPLEMENTATION.md    # Integration guide & CMS roadmap
        ├── sample-events.json   # 25+ production-ready schedule events
        ├── season-calendar.css  # Scoped component CSS module
        ├── season-calendar.tsx  # Interactive React calendar component
        └── assets/              # Planned asset documentation
```

---

## 3. DEEP-DIVE FILE & COMPONENT ANALYSIS

### 3.1 App Shell Files (`src/app/`)

#### `src/app/layout.tsx`
- **Purpose:** Root HTML document wrapper.
- **Responsibilities:** Loads Google Fonts (`Cormorant Garamond`, `Inter`, `Manrope`), defines metadata (`title`, `description`, `openGraph`), sets viewport settings, renders `globals.css`.
- **Key Logic:** Configures `font-display: swap` to eliminate Cumulative Layout Shift (CLS).

#### `src/app/page.tsx`
- **Purpose:** Landing page orchestrator.
- **Responsibilities:** Renders `LoadingScreen`, `Header`, section components in conversion order, `Footer`, and `BackToTop`.
- **Key Logic:** Manages initial load state (`loaded`) to fade in page smoothly after preloader completes.

#### `src/app/globals.css`
- **Purpose:** Central design system stylesheet.
- **Responsibilities:** CSS variable definitions (`--color-navy`, `--color-gold`, etc.), typography setup, custom button utility classes (`.btn-primary`, `.btn-secondary`), section containers (`.section-container`), and responsive utility classes.

---

### 3.2 Layout Components (`src/components/layout/`)

#### `Header.tsx`
- **Purpose:** Persistent top navigation bar.
- **State:** `scrolled` (boolean for background glassmorphism effect), `menuOpen` (boolean for mobile drawer menu).
- **Key Logic:** Logo click handles `window.scrollTo({ top: 0, behavior: 'smooth' })`. Nav links (`#about`, `#programs`, `#coaches`, `#contact`) smoothly scroll to anchor IDs.

#### `Footer.tsx`
- **Purpose:** Global footer.
- **State:** `email` (string), `subscribed` (boolean).
- **Key Logic:** Includes quick links, program tags, newsletter subscription box, social icons, and `© 2026 Lake Huron Volleyball Club` copyright notice.

---

### 3.3 Section Components (`src/components/sections/`)

#### `Hero.tsx`
- **Purpose:** High-impact hero section.
- **Features:** SVG paper-grain texture, dual ambient radial glows, dual CTA buttons ("Join Our Club" -> `#contact`, "Learn More" -> `#about`), responsive layout (swaps logo to top on mobile `<860px`), scroll indicator arrow.

#### `WhoWeAre.tsx` ("Our Story")
- **Purpose:** Establishes club identity serving Petrolia, Wyoming, and Lambton County.
- **Features:** 3 grid cards: *Our Vision*, *Our Mission (Year 1: 2026-27)*, and *Our Community*.

#### `WhyChooseUs.tsx`
- **Purpose:** Highlights 4 core statistics (OVA Affiliated, Certified Coaches, 1:8 Player Ratio, Local Facilities).
- **Dependencies:** Uses `AnimatedCounter` to count up values when scrolled into view.

#### `Programs.tsx`
- **Purpose:** Displays offered volleyball programs.
- **Cards:** *U16 & U18 Travel Teams*, *Skill Development Camps*, *House & Rec Leagues*.

#### `PlayerJourney.tsx`
- **Purpose:** Displays an athlete's 4-stage progression pathway (Grassroots ➔ Skill Building ➔ OVA Competitive ➔ Post-Secondary).

#### `Coaches.tsx`
- **Purpose:** Coaching staff roster showing OVA certifications, coaching experience, and personal quotes.

#### `SuccessStories.tsx`
- **Purpose:** Testimonials from parents and athletes highlighting player growth, sportsmanship, and positive club culture.

#### `Values.tsx` ("Our Core Values")
- **Purpose:** 6-pillar grid aligned with Ontario Volleyball Association core values:
  1. *Accountable*
  2. *Excellence*
  3. *Collaborative*
  4. *Intentional*
  5. *Sustainable*
  6. *Integrity & Respect*

#### `FAQ.tsx`
- **Purpose:** Categorized collapsible accordion for common parent/player questions.
- **State:** `openIndex` (number | null) tracks open question; `activeCategory` filters questions by topic.

#### `Contact.tsx`
- **Purpose:** Lead generation form and contact information.
- **Features:** Multi-select inquiry options (optional selection), location details, office hours, and mock async submit handler.

---

### 3.4 UI Helper Components (`src/components/ui/`)

- **`ScrollReveal.tsx`**: Uses `IntersectionObserver` to trigger entrance animations (`fadeUp`, `fadeLeft`, `fadeRight`, `scaleIn`).
- **`AnimatedCounter.tsx`**: Smoothly increments numbers using `requestAnimationFrame`.
- **`BackToTop.tsx`**: Floating action button that appears after 400px scroll and returns user to top smoothly.
- **`LoadingScreen.tsx`**: Brand pre-loader overlay with animated progress bar.

---

## 4. PAGE ARCHITECTURE & USER JOURNEY FLOW

The single-page architecture guides users down a conversion funnel:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO                                                     │
│    Brand statement, luxury visual impact, main CTAs         │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. OUR STORY & CORE VALUES                                  │
│    Establishes trust, community roots & OVA values alignment│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. PROGRAMS & PLAYER JOURNEY                                │
│    Details age-group offerings and long-term athlete path   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. COACHES & TESTIMONIALS                                   │
│    Validates technical staff credentials and parental trust │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. FAQ & CONTACT FORM                                       │
│    Resolves questions and converts lead via inquiry form    │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. ROUTING & NAVIGATION ENGINE

- **Routing Model:** Single-page anchor navigation system.
- **Anchor Routes:** `#hero`, `#about`, `#programs`, `#coaches`, `#contact`.
- **Navigation Behavior:** Clicking a nav link triggers native CSS/JS smooth scrolling (`behavior: 'smooth'`).
- **Logo Behavior:** Clicking header logo triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## 6. UI DESIGN SYSTEM & VISUAL SPECIFICATION

### 6.1 Color Palette Tokens

```css
:root {
  --color-navy: #082F57;         /* Primary Brand Navy */
  --color-navy-dark: #051E38;    /* Heading & Surface Navy */
  --color-navy-light: #0D3D6E;   /* Card Border Accent */
  --color-gold: #B97816;         /* Primary Gold Accent */
  --color-gold-light: #D4A32A;   /* Highlight Gold */
  --color-ivory: #F5F0E8;        /* Off-white luxury background */
  --color-surface-dark: #072444; /* Dark section background */
  --color-graphite: #3A3A3A;     /* Body text */
  --color-mist: #8A9BAD;         /* Muted subtitles & icons */
}
```

### 6.2 Typography System
- **Display Headings (`font-display`):** `Cormorant Garamond`, Georgia, serif.
- **Body & Controls (`font-sans` / `font-ui`):** `Inter` & `Manrope`, sans-serif.

---

## 7. RESPONSIVENESS STRATEGY (19 BREAKPOINTS)

Optimized and tested across **19 responsive breakpoints**:
`320px`, `375px`, `390px`, `414px`, `480px`, `576px`, `640px`, `768px`, `820px`, `900px`, `1024px`, `1200px`, `1280px`, `1366px`, `1440px`, `1536px`, `1728px`, `1920px`, `2560px`.

### Key Responsive Rules:
- Zero horizontal scroll (`overflow-x: hidden`).
- Fluid typography using `clamp()`.
- Mobile hero stacks logo above headline (`<860px`).
- Mobile menu drawer activates below `<768px`.

---

## 8. STYLING & CSS ARCHITECTURE

- **`globals.css`**: Defines CSS tokens, global resets, animation keyframes, and shared button styles.
- **Component Scoped Styles**: Inline styles and `<style>` blocks provide scoped component customization without class name collisions.

---

## 9. STATE MANAGEMENT & DATA FLOW

- **Local Component State (`useState`):** Form field inputs, mobile drawer toggles, FAQ accordions.
- **Observer States:** `ScrollReveal` and `AnimatedCounter` use `IntersectionObserver` to trigger animations dynamically on scroll entry.

---

## 10. DATA SCHEMAS & ASSETS INVENTORY

### Form Data Schema (`Contact.tsx`)
```typescript
interface FormState {
  name: string;
  email: string;
  inquiries: string[];
  message: string;
}
```

### Asset Manifest
- `/public/logo.png`: Official club crest.
- `/public/site.webmanifest`: Web Application Manifest for PWA installation.
- `/public/web-app-manifest-*.png`: PWA launcher icons.

---

## 11. DEPENDENCIES & PACKAGE ANALYSIS

| Package | Version | Purpose |
|---|---|---|
| `next` | `^15.1.0` | React Framework with App Router |
| `react` / `react-dom` | `^19.0.0` | UI Library |
| `lucide-react` | `^0.400.0` | Vector Icon System |
| `tailwindcss` | `^3.4.6` | Utility Styling Framework |
| `typescript` | `^5.5.3` | Type Compiler |

---

## 12. CONFIGURATION FILES REFERENCE

- **`next.config.ts`**: Enables React strict mode and server binding (`0.0.0.0`) for mobile testing over local network.
- **`package.json`**: Script runner (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run type-check`).
- **`tsconfig.json`**: Strict compiler options with path alias mapping `@/*` ➔ `src/*`.

---

## 13. PERFORMANCE, SEO & ACCESSIBILITY (a11y) REVIEW

- **Performance:** Hardware-accelerated CSS animations, font swapping (`display: swap`), Next.js optimized images.
- **SEO:** Structured title and meta descriptions, single `<h1>` tag in Hero, semantic HTML5 section markup.
- **Accessibility:** `aria-expanded` and `aria-controls` on interactive accordions and drawers; WCAG AA contrast compliance.

---

## 14. SECURITY & RISK ASSESSMENT

- **Input Handling:** React controlled state prevents inline script injection.
- **Type Safety:** Strict mode enabled in TypeScript.
- **No Hardcoded Secrets:** Zero API keys or private credentials stored in public source code.

---

## 15. CODE QUALITY & ARCHITECTURAL REVIEW

- Clear component structure separating Layout, Sections, and UI utilities.
- Standardized naming conventions across components and design system tokens.

---

## 16. IMPLEMENTED FEATURE INVENTORY

1. Hero Brand Experience with SVG grain layer & dual CTAs.
2. Our Story section highlighting Petrolia & Wyoming community focus.
3. OVA Core Values grid (*Accountable, Excellence, Collaborative, Intentional, Sustainable, Integrity & Respect*).
4. Competitive & Grassroots Program cards.
5. Athlete Progression Journey timeline.
6. Coaching Staff roster with OVA credentials.
7. Parent & Athlete Testimonials.
8. Interactive Categorized FAQ Accordion.
9. Multi-Select Inquiry Contact Form.
10. Glassmorphism Sticky Header & Slide-out Mobile Menu Drawer.
11. Animated Scroll-to-Top Header Logo interaction.
12. Dormant Season Calendar Blueprint under `future-features/season-calendar/`.

---

## 17. FUTURE ROADMAP & MODULAR SEASON CALENDAR BLUEPRINT

- **Future Activation:** Activate Season Calendar feature stored in `future-features/season-calendar/` when event volume increases.
- **Backend Integration:** Connect `Contact.tsx` to Formspree, Resend, or SendGrid API.
- **Headless CMS:** Optional migration of roster and program data to Sanity.io or Strapi.

---

## 18. DEVELOPER HANDBOOK & ONBOARDING GUIDE

### Local Development Setup:
```bash
# 1. Clone repository
git clone <repo-url>
cd lakehuron

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Run type check & linter
npm run type-check
npm run lint

# 5. Build for production
npm run build
```

---

## 19. KNOWN LIMITATIONS & MAINTENANCE CHECKLIST

- **Contact Form:** Currently simulates async delivery with a timeout. Connect to a live email handler endpoint upon launch.
- **Data Editing:** Roster and program data are static objects in `.tsx` files; edit directly in code or migrate to a Headless CMS in Phase 3.

---
*End of Master Documentation.*
