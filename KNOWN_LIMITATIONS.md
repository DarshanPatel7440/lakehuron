# ⚠️ KNOWN LIMITATIONS & ARCHITECTURAL CONSIDERATIONS

## 1. Contact Form Submissions
- **Current Behavior:** The contact form in `Contact.tsx` simulates submission using an asynchronous timeout (`await new Promise(r => setTimeout(r, 1400))`).
- **Action Required:** Integrate a serverless API route (`app/api/contact/route.ts`) or Formspree endpoint before launching live email handling.

## 2. Static Content Management
- **Current Behavior:** Coaches, programs, and testimonials are defined inline as static JavaScript objects within their respective section components.
- **Action Required:** Content edits require modifying `.tsx` files. In Phase 3, migrating to a Headless CMS (Sanity / Contentful) is recommended.

## 3. Season Calendar Blueprint
- **Current Behavior:** The Season Calendar feature lives in `future-features/season-calendar/` and is deliberately not imported into the active build to prevent unused bundle weight.
- **Action Required:** When the club expands its event schedule, follow `future-features/season-calendar/IMPLEMENTATION.md` to activate it.
