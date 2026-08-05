# 🧩 COMPONENT GUIDE & DEPENDENCY MAP

## 1. Section Components (`src/components/sections/`)

### `Hero.tsx`
- **Description:** Primary landing hero with custom SVG grain overlay, radial ambient glows, dual CTA buttons, and responsive logo placement.
- **Props:** None.
- **State:** `loaded` (boolean) triggers entrance keyframes.
- **Dependencies:** `lucide-react` (`ArrowRight`, `ChevronDown`), `next/image`.

### `WhoWeAre.tsx` ("Our Story")
- **Description:** Highlights club narrative in Petrolia & Wyoming, plus Vision, Year 1 Mission, and Community cards.
- **Dependencies:** `ScrollReveal`.

### `WhyChooseUs.tsx`
- **Description:** Displays key metrics (OVA Affiliated, Certified Coaches, 1:8 Ratio, Local Facilities).
- **Dependencies:** `ScrollReveal`, `AnimatedCounter`.

### `Programs.tsx`
- **Description:** Competitive & Grassroots program cards (U16/U18 Travel, Skill Camps, House Leagues).
- **Dependencies:** `ScrollReveal`, `lucide-react` (`CheckCircle`, `Users`, `Calendar`, `ChevronRight`).

### `PlayerJourney.tsx`
- **Description:** Visual 4-stage athlete progression roadmap.
- **Dependencies:** `ScrollReveal`, `lucide-react`.

### `Coaches.tsx`
- **Description:** Coaching roster displaying qualifications, OVA levels, and personal philosophy quotes.
- **Dependencies:** `ScrollReveal`, `lucide-react` (`Award`, `Quote`).

### `SuccessStories.tsx`
- **Description:** Parent and athlete testimonials grid.
- **Dependencies:** `ScrollReveal`, `lucide-react` (`Star`, `Quote`).

### `Values.tsx` ("Our Core Values")
- **Description:** 6 OVA-aligned core values (*Accountable, Excellence, Collaborative, Intentional, Sustainable, Integrity & Respect*).
- **Dependencies:** `ScrollReveal`, `lucide-react` (`CheckSquare`, `Star`, `Users`, `Compass`, `Sprout`, `Shield`).

### `FAQ.tsx`
- **Description:** Collapsible Q&A accordion categorized by topic with ARIA support.
- **State:** `openIndex` (number | null), `activeCategory` (string).
- **Dependencies:** `ScrollReveal`, `lucide-react` (`ChevronDown`, `HelpCircle`).

### `Contact.tsx`
- **Description:** Inquiry form with multi-select interest chips and contact detail cards.
- **State:** `form` (`{ name, email, inquiries, message }`), `status` (`'idle' | 'sending' | 'success' | 'error'`).
- **Dependencies:** `ScrollReveal`, `lucide-react` (`MapPin`, `Mail`, `Clock`, `Send`, `CheckCircle`).

---

## 2. Layout & UI Utilities (`src/components/layout/` & `src/components/ui/`)

- **`Header.tsx`**: Glassmorphic sticky nav bar, logo scroll-to-top button, slide-out mobile drawer.
- **`Footer.tsx`**: Multi-column quick links, newsletter signup form, social icons, 2026 copyright.
- **`ScrollReveal.tsx`**: `IntersectionObserver` wrapper supporting `fadeUp`, `fadeLeft`, `fadeRight`, `scaleIn`.
- **`AnimatedCounter.tsx`**: Number tick animation for section statistics.
- **`BackToTop.tsx`**: Floating button triggering smooth scroll to window top.
- **`LoadingScreen.tsx`**: Preloader screen preventing unstyled content flash during initial mount.

---

## 3. Component Dependency Map

```
page.tsx
 ├── LoadingScreen
 ├── Header
 ├── Hero
 ├── WhoWeAre ──> ScrollReveal
 ├── WhyChooseUs ──> ScrollReveal, AnimatedCounter
 ├── Programs ──> ScrollReveal
 ├── PlayerJourney ──> ScrollReveal
 ├── Coaches ──> ScrollReveal
 ├── SuccessStories ──> ScrollReveal
 ├── Values ──> ScrollReveal
 ├── FAQ ──> ScrollReveal
 ├── Contact ──> ScrollReveal
 ├── Footer
 └── BackToTop
```
