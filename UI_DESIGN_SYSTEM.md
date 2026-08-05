# 🎨 UI DESIGN SYSTEM & VISUAL LANGUAGE

## 1. Color System

```css
:root {
  --color-navy: #082F57;         /* Primary Brand Navy */
  --color-navy-dark: #051E38;    /* Dark Surface & Heading Navy */
  --color-navy-light: #0D3D6E;   /* Interactive Navy Accent */
  --color-gold: #B97816;         /* Primary Accent Gold */
  --color-gold-light: #D4A32A;   /* Highlight Gold */
  --color-ivory: #F5F0E8;        /* Luxury Off-White Background */
  --color-surface-dark: #072444; /* Dark Section Background */
  --color-graphite: #3A3A3A;     /* Primary Copy Text */
  --color-mist: #8A9BAD;         /* Muted Subtitles & Borders */
}
```

## 2. Typography Rules
- **Display Headings (`font-display`):** `Cormorant Garamond`, Georgia, serif  
  *Usage:* Section headings (`h1`, `h2`, `h3`). Communicates prestige and athletic tradition.
- **Body & Controls (`font-sans` / `font-ui`):** `Inter` & `Manrope`, system-ui, sans-serif  
  *Usage:* Paragraph copy, input fields, navigation links, badges.

## 3. Button Standards

### `.btn-primary` (Gold Action Button)
- **Background:** `var(--color-gold)` (`#B97816`)
- **Text:** White (`#FFFFFF`), `font-weight: 700`, `font-size: 0.84rem`
- **Border Radius:** `10px`
- **Shadow:** `0 12px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(184,134,11,0.22)`
- **Hover:** `background: #9A700A`, `transform: translateY(-3px)`

### `.btn-secondary` (White / Outlined Button)
- **Background:** White (`#FFFFFF`)
- **Text:** Navy (`#0A2D5E`), `font-weight: 600`
- **Border:** `1.5px solid rgba(10,45,94,0.18)`
- **Hover:** `border-color: rgba(10,45,94,0.45)`, `background: rgba(10,45,94,0.03)`

## 4. Layout & Spacing
- **Container Max-Width:** `1400px` (`.section-container`)
- **Section Padding:** Fluid scaling `clamp(80px, 10vw, 120px) 0`
- **Grid Gaps:** `gap: clamp(16px, 2.5vw, 28px)`
