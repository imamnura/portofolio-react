# Development Status

**Last Updated:** 2026-05-03  
**Branch:** `develop`  
**Status:** Active Development

---

## Overview

Personal portfolio website for **Imam Nur Arifin** — a Frontend Engineer with 5+ years of experience specializing in React/Next.js. The site is production-ready, bilingual (Indonesian/English), and fully responsive.

**Live URL:** https://imamnura.online

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2.x |
| Build Tool | Vite | 8.x (Rolldown bundler) |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | 0.468.x |
| Language | TypeScript | 5.9.x |
| Compiler | React Compiler (Babel) | 1.0.x |
| Testing | Vitest + Testing Library | 4.x |

---

## Folder Structure

```
portofolio-react/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── logo.svg             # Navbar logo (SVG format)
│   └── robots.txt           # SEO robots config
│
├── src/
│   ├── components/          # All UI components
│   │   ├── icons/
│   │   │   └── WhatsAppIcon.tsx   # Custom SVG icon
│   │   ├── __tests__/       # Component unit tests
│   │   ├── AboutSection.tsx
│   │   ├── BackgroundBlobs.tsx    # Decorative animated blobs
│   │   ├── CertificationModal.tsx
│   │   ├── ContactModal.tsx       # Contact form (mock submit)
│   │   ├── EducationCertSection.tsx
│   │   ├── ExperienceSection.tsx  # Timeline layout
│   │   ├── FloatingWhatsApp.tsx   # Fixed WhatsApp button
│   │   ├── Footer.tsx
│   │   ├── GithubSection.tsx      # ghchart.rshah.org integration
│   │   ├── HeroCodeVisual.tsx     # Animated code block decoration
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx       # Image carousel + project details
│   │   ├── ProjectsSection.tsx
│   │   ├── SectionHeading.tsx     # Reusable heading with icon
│   │   └── SkillsSection.tsx
│   │
│   ├── constants/           # Static data and translations
│   │   ├── __tests__/
│   │   ├── data.ts          # All portfolio content (profile, projects, etc.)
│   │   ├── dictionary.ts    # i18n strings (id/en)
│   │   └── index.ts         # Re-exports
│   │
│   ├── types/
│   │   └── portfolio.ts     # TypeScript type definitions
│   │
│   ├── utils/
│   │   ├── __tests__/
│   │   ├── motionVariants.ts  # Shared Framer Motion variants
│   │   └── techIcons.ts       # devicons CDN URL mapper
│   │
│   ├── test/
│   │   └── setup.ts         # Vitest global setup (@testing-library/jest-dom)
│   │
│   ├── App.tsx              # Root component — state, modals, layout
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles, scrollbar, blob keyframes
│   └── main.tsx             # React entry point (createRoot)
│
├── docs/
│   └── DEVELOPMENT_STATUS.md   # This file
│
├── index.html               # HTML shell (SEO meta, OG tags, fonts)
├── package.json
├── vite.config.ts           # Vite 8 + Tailwind + React Compiler
├── vitest.config.ts         # Vitest test configuration
├── tsconfig.json
├── tsconfig.app.json        # Strict TypeScript for src/
└── tsconfig.node.json       # TypeScript for config files
```

---

## Features

### Core Sections
| Section | Component | Notes |
|---|---|---|
| Navigation | `Navbar` | Fixed, scrolled state, responsive mobile menu |
| Hero | `HeroSection` | Animated intro, CTA buttons, social links |
| About | `AboutSection` | Bio + 4 stat cards |
| Skills | `SkillsSection` | 8 categories, devicons, hover effects |
| Experience | `ExperienceSection` | Timeline with 3 companies |
| Projects | `ProjectsSection` | Grid cards → opens `ProjectModal` |
| GitHub | `GithubSection` | Contribution chart from ghchart.rshah.org |
| Education & Certs | `EducationCertSection` | Scrollable cert list → `CertificationModal` |
| Footer | `Footer` | 4-column grid with social/nav links |

### Global Features
- **Dark Mode** — toggled via Navbar, applied via `document.documentElement.classList`
- **Bilingual (i18n)** — Indonesian and English, toggled in real time; `lang` attribute set on `<html>`
- **Contact Modal** — `ContactModal` with 3 states: `idle` → `submitting` → `success`; no real backend
- **Image Carousel** — `ProjectModal` has prev/next navigation with animated transitions
- **Floating WhatsApp** — `FloatingWhatsApp` fixed button using profile WA number
- **Animated Background** — `BackgroundBlobs` with CSS keyframe animations

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels throughout (`aria-label`, `aria-expanded`, `aria-current`)
- Screen-reader-only text (`sr-only`)
- Focus-visible states on all interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- `alt` text on all `<img>` tags

---

## State Management

All state lives in `App.tsx` — no external store. State includes:

| State | Type | Purpose |
|---|---|---|
| `isScrolled` | `boolean` | Navbar background on scroll |
| `mobileMenuOpen` | `boolean` | Mobile nav toggle |
| `lang` | `"id" \| "en"` | Active language |
| `isDark` | `boolean` | Dark mode toggle |
| `selectedProject` | `Project \| null` | Opens `ProjectModal` |
| `selectedCert` | `Certification \| null` | Opens `CertificationModal` |
| `isContactModalOpen` | `boolean` | Opens `ContactModal` |
| `contactStatus` | `"idle" \| "submitting" \| "success"` | Contact form state |

---

## Content Data

All portfolio content is hardcoded in `src/constants/data.ts`:
- **Profile** — personal info, links, bilingual summary
- **Skills** — 8 categories, 40+ skills
- **Experiences** — 3 companies (Telkom Indonesia, Blanja.com, SALT Indonesia)
- **Projects** — 6 projects with images from Unsplash (placeholders)
- **Certifications** — 9 certifications

To update content for a new developer: edit `src/constants/data.ts`. All sections except `EducationCertSection` (hardcoded university data) pull from this file.

### Known Placeholder Values
- `cvUrl: "#"` in `DATA.profile` — no actual CV file uploaded yet
- `demoUrl: "#"` on several projects — no live demo available

---

## Internationalization

Dictionary in `src/constants/dictionary.ts` (`DICT` constant). Supports:
- `id` — Indonesian
- `en` — English

`Lang` type and `Dictionary` type are derived directly from the `DICT` object (no separate type file needed).

---

## Testing

**Runner:** Vitest 4.x  
**Environment:** jsdom  
**Setup:** `@testing-library/jest-dom` matchers

### Test Files

| File | Coverage |
|---|---|
| `src/utils/__tests__/techIcons.test.ts` | `getTechIcon()` — known skills, unknown skills, case-insensitivity |
| `src/utils/__tests__/motionVariants.test.ts` | `staggerContainer`, `fadeInUp` structure |
| `src/constants/__tests__/dictionary.test.ts` | Both languages present, required keys, non-empty strings |
| `src/constants/__tests__/data.test.ts` | Profile fields, skills, experiences, projects, certifications |
| `src/components/__tests__/SectionHeading.test.tsx` | Render, heading level, icon |
| `src/components/__tests__/CertificationModal.test.tsx` | Render, language switch, close callbacks, aria-label |
| `src/components/__tests__/ContactModal.test.tsx` | idle/submitting/success states, form submit, field disable |
| `src/components/__tests__/Navbar.test.tsx` | Render, lang/dark toggle, mobile menu, contact callback |

### Commands
```bash
pnpm test          # Interactive watch mode
pnpm test:run      # Single run (CI)
pnpm test:coverage # Coverage report
```

---

## Build & Development

```bash
pnpm install       # Install dependencies
pnpm dev           # Dev server (Vite HMR)
pnpm build         # TypeScript check + production build
pnpm preview       # Preview production build
pnpm lint          # ESLint check
```

### Vite 8 + React Compiler
`vite.config.ts` uses:
1. `@tailwindcss/vite` — Tailwind CSS v4 integration
2. `@vitejs/plugin-react` — JSX transform + Fast Refresh
3. `@rolldown/plugin-babel` with `reactCompilerPreset` — React 19 Compiler optimizations (auto-memoization)

This dual-plugin pattern is required for Vite 8 (Rolldown bundler).

---

## What Needs To Be Updated / Known Issues

### High Priority
1. **CV File** — `DATA.profile.cvUrl` is `"#"`. Upload the actual CV and update the URL.
2. **Contact Form Backend** — `ContactModal` currently mocks form submission with a `setTimeout`. Integrate a real backend (e.g., Resend, EmailJS, Formspree) for production.
3. **Project Demo URLs** — Several projects have `demoUrl: "#"` (MoLea Wiz, Blanja.com, Aetra, Corporate Landing Pages). Update or remove the Live Demo button for these.
4. **Project Images** — All project images use Unsplash stock photos as placeholders. Replace with actual screenshots.

### Medium Priority
5. **Education Hardcoding** — University name, period, and GPA are hardcoded directly in `EducationCertSection.tsx`. Move to `DATA` constant for consistency.
6. **Dark Mode Persistence** — Dark mode preference resets on page reload. Add `localStorage` persistence.
7. **Language Persistence** — Language choice resets on page reload. Add `localStorage` persistence.
8. **Scroll Behavior on Mobile Menu Close** — Clicking a nav link in mobile menu navigates but may not close the menu reliably across all browsers.

### Low Priority / Nice To Have
9. **Animation Preference** — No `prefers-reduced-motion` media query support. Users who prefer reduced motion still see all animations.
10. **`BackgroundBlobs` Component** — Pure CSS animations without Framer Motion; inconsistent with other animation approach.
11. **GitHub Chart Fallback** — `GithubSection` embeds an `<img>` from `ghchart.rshah.org`. No fallback if the service is down.
12. **TypeScript Strict `null` on `cvUrl`** — `cvUrl: "#"` is a workaround. Consider making `cvUrl` optional (`cvUrl?: string`) in the `Profile` type.

---

## ESLint Configuration

`eslint.config.js` (flat config, ESLint 9.x):
- `@eslint/js` recommended rules
- `typescript-eslint` strict mode
- `eslint-plugin-react-hooks` (rules of hooks)
- `eslint-plugin-react-refresh` (component exports)

---

## Performance Notes

- `loading="lazy"` on all non-critical images
- `loading="eager"` + `fetchPriority="high"` on the logo (LCP candidate)
- Devicons fetched from `cdn.jsdelivr.net` (cached CDN, no bundle impact)
- GitHub contribution chart image from external service (lazy loaded)
- React Compiler enabled — automatic memoization in production build

---

## Deployment

Currently deployed at **https://imamnura.online**. The build output is `dist/` from `pnpm build`. Deployment method is not tracked in this repository (likely Vercel, Netlify, or similar static host).

No CI/CD pipeline is configured in this repo.
