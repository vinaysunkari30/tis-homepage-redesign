# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the [Tulas International School](https://tis.edu.in/) homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## Live Demo

- **Live URL:** https://tis-homepage-redesign-phi-pearl.vercel.app/
- **Repository:** https://github.com/vinaysunkari30/tis-homepage-redesign

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## Standout Features Implemented

1. **Custom Cursor:** Spring-animated ring and dot following the pointer; scales on interactive elements; disabled on touch devices (`pointer: coarse`).
2. **Scroll-Triggered Reveals:** Section content enters with staggered `whileInView` animations (0.3–0.6s, `viewport.once`).
3. **Scroll Progress Bar:** Fixed top gradient bar tracking scroll depth via `useScrollProgress`.

## Getting Started Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinaysunkari30/tis-homepage-redesign
   cd Netpuppys
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (default `http://localhost:5173`).

4. **Production build:**

   ```bash
   npm run build
   npm run preview
   ```

## Component Architecture Overview

- `components/ui/` — Buttons, cards, section titles
- `components/layout/` — Navbar, Footer
- `components/sections/` — Hero, About, Academics, Beyond Academics, Events, Admission, Testimonials, CTA
- `components/animation/` — Custom cursor, scroll progress, reveal wrappers
- `hooks/` — `useMousePosition`, `useScrollProgress`, `useSectionUrl`
- `data/content.js` — Navigation, copy, and TIS asset URLs

## Brand Identity Retained

- TIS brand colors (maroon, teal, gold), official copy, and assets hosted on `tis.edu.in`.
