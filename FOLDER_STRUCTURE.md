# 📁 FOLDER STRUCTURE & DIRECTORY TREE

```
lakehuron/
├── favicon/                     # Favicon assets & web manifest files
├── public/                      # Static assets served at domain root
│   ├── logo.png                 # Primary official crest logo
│   ├── site.webmanifest         # PWA Web Application Manifest
│   └── web-app-manifest-*.png   # PWA launcher icons
├── src/                         # Core application source code
│   ├── app/                     # Next.js App Router root
│   │   ├── globals.css          # Design system tokens, utilities, responsive rules
│   │   ├── layout.tsx           # Global RootLayout, font loader & metadata config
│   │   └── page.tsx             # Main landing page assembling section components
│   └── components/              # Modular React components
│       ├── layout/              # Structural chrome components
│       │   ├── Header.tsx       # Glassmorphism sticky header & mobile drawer
│       │   └── Footer.tsx       # Multi-column footer & copyright bar
│       ├── sections/            # Feature section components
│       │   ├── Hero.tsx         # Brand hero section with grain & animations
│       │   ├── WhoWeAre.tsx     # Our Story narrative & vision/mission cards
│       │   ├── WhyChooseUs.tsx  # Key value propositions & stats
│       │   ├── Programs.tsx     # Competitive & grassroots program cards
│       │   ├── PlayerJourney.tsx# Step-by-step athlete development timeline
│       │   ├── Coaches.tsx      # Roster of certified technical coaches
│       │   ├── SuccessStories.tsx# Testimonials & quotes
│       │   ├── Values.tsx       # OVA Core Values 6-pillar grid
│       │   ├── FAQ.tsx          # Collapsible category Q&A accordion
│       │   └── Contact.tsx      # Multi-select inquiry form & office details
│       └── ui/                  # Generic UI utilities & micro-components
│           ├── AnimatedCounter.tsx# Smooth counter animation utility
│           ├── BackToTop.tsx    # Smooth scroll-to-top floating trigger
│           ├── LoadingScreen.tsx# Pre-loader transition overlay
│           └── ScrollReveal.tsx # IntersectionObserver animation wrapper
└── future-features/             # Dormant, production-ready future blueprints
    └── season-calendar/         # Modular Season Calendar feature workspace
        ├── README.md            # Feature documentation & integration guide
        ├── PROMPT.md            # Re-generation prompt spec
        ├── DESIGN.md            # Visual & UX specification
        ├── DATA.md              # Mock data schema documentation
        ├── IMPLEMENTATION.md    # Integration checklist & CMS roadmap
        ├── sample-events.json   # 25+ production-ready mock schedule events
        ├── season-calendar.css  # Scoped component stylesheet
        ├── season-calendar.tsx  # Complete React interactive calendar component
        └── assets/              # Planned asset documentation
```

## Folder Roles & Isolation
- **`src/app/`**: Next.js App Router root. Contains global CSS and layout wrappers.
- **`src/components/sections/`**: Section-level presentation components. Each section is self-contained with modular markup and styling.
- **`src/components/layout/`**: Structural components (`Header`, `Footer`) persistent across user navigation.
- **`src/components/ui/`**: Reusable interactive helper components (`ScrollReveal`, `AnimatedCounter`, `BackToTop`, `LoadingScreen`).
- **`future-features/`**: Completely decoupled workspace for future feature blueprints (e.g. `season-calendar`). Keeps current production builds light and zero-overhead.
