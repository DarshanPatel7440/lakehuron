# 🏗️ PROJECT ARCHITECTURE & TECHNICAL SPECIFICATION

## 1. Architectural Overview
The **Lake Huron Volleyball Club Platform** is structured as a modern, high-performance Web Application built on **Next.js 15 App Router**, **React 19**, **TypeScript 5.5**, and **Tailwind CSS 3.4**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NEXT.JS 15 APP ROUTER                           │
│                                                                        │
│   Root Layout (src/app/layout.tsx)                                     │
│     ├── Font Loader (Cormorant Garamond, Inter, Manrope)               │
│     ├── SEO & OpenGraph Metadata                                       │
│     └── Global CSS Design System (src/app/globals.css)                 │
│                                                                        │
│   Main Page (src/app/page.tsx)                                         │
│     ├── LoadingScreen                                                  │
│     ├── Header (Sticky Glassmorphic Navigation & Mobile Drawer)        │
│     ├── Main Content Sections                                          │
│     │     ├── Hero                                                     │
│     │     ├── WhoWeAre (Our Story, Vision, Mission)                    │
│     │     ├── WhyChooseUs (Stats & Values)                             │
│     │     ├── Programs (U16/U18, Camps, Leagues)                       │
│     │     ├── PlayerJourney (Development Timeline)                     │
│     │     ├── Coaches (Roster & OVA Credentials)                       │
│     │     ├── SuccessStories (Testimonials)                            │
│     │     ├── Values (OVA 6-Pillar Core Values)                        │
│     │     ├── FAQ (Accordion Q&A)                                      │
│     │     └── Contact (Multi-Select Form & Info Cards)                 │
│     ├── Footer                                                         │
│     └── BackToTop Button                                               │
└────────────────────────────────────────────────────────────────────────┘
```

## 2. Technical Decisions & Rationale

### 2.1 Next.js 15 App Router
- **Why Chosen:** Offers static rendering, optimal font optimization, zero-config route handling, and automatic asset minification out of the box.
- **Server vs Client Strategy:** The application shell is server-rendered for SEO, while interactive components use Client Directive (`'use client'`) for animation triggers and stateful interaction.

### 2.2 Styling Strategy
- **Vanilla CSS Custom Properties (`globals.css`):** Provides central token management (`--color-navy`, `--color-gold`, etc.) ensuring consistent design tokens across all components.
- **Scoped Inline & Utility Styles:** Enables component-level isolation without style pollution.

### 2.3 Animation Philosophy
- **ScrollReveal Utility (`IntersectionObserver`):** Lightweight, GPU-accelerated scroll animations without heavy JavaScript runtime weight.
- **CSS Transitions:** Micro-interactions (hover elevation, button glows, tab switches) use standard hardware-accelerated CSS `transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1)`.

## 3. Data Flow & State Management
- **Local Component State (`useState`):** Form field inputs, mobile drawer toggles, FAQ accordions.
- **DOM Event Observers:** Managed statelessly via `IntersectionObserver` to trigger entrance animations.
