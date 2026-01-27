# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Scapa Technologies** corporate website - a React + TypeScript + Vite single-page application (SPA) showcasing enterprise infrastructure and application delivery performance solutions. The site uses a custom client-side routing system to navigate between Home, Solutions, Services, Success, and Contact pages.

## Development Commands

```bash
# Start development server with hot module replacement
npm run dev

# Production build (TypeScript compile + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build locally
npm run preview
```

## Technology Stack

- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4 with `@vitejs/plugin-react`
- **Styling**: Tailwind CSS 3.4.19 with custom CSS variables for theming
- **UI Components**: Radix UI primitives (accordion, dialog, dropdown-menu, etc.)
- **Icons**: Lucide React
- **Utilities**:
  - `clsx` and `tailwind-merge` for conditional classes
  - `class-variance-authority` for component variants
  - React Hook Form with Zod validation
- **Dev Tools**:
  - `kimi-plugin-inspect-react` for React inspection

## Architecture & Structure

### Client-Side Routing
The application uses a custom state-based routing system (not React Router). The `App.tsx` component maintains `currentPage` state and renders different page components accordingly:

- `home`: Renders homepage with all sections (Hero, Welcome, Products, Features, etc.)
- `solutions`: Renders `SolutionsPage`
- `services`: Renders `ServicesPage`
- `success`: Renders `SuccessPage`
- `contact`: Renders `ContactPage`

All navigation goes through the `onPageChange` callback prop, which updates the state and scrolls to top.

### Directory Layout

```
src/
├── components/       # Reusable shared components
│   ├── Header.tsx   # Main navigation header with mobile menu
│   └── ui/          # Radix UI primitive components (50+ components)
├── sections/        # Homepage-specific sections
│   ├── HeroSection.tsx
│   ├── WelcomeSection.tsx
│   ├── ProductsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── pages/           # Full page components
│   ├── SolutionsPage.tsx
│   ├── ServicesPage.tsx
│   ├── SuccessPage.tsx
│   └── ContactPage.tsx
├── hooks/           # Custom React hooks
│   └── use-mobile.ts
├── lib/             # Utility functions
│   └── utils.ts
├── App.tsx          # Main app with routing logic
├── main.tsx         # Application entry point
└── index.css        # Global styles + CSS variables
```

## Brand Colors & Theming

All Scapa brand colors are defined as CSS custom properties in `src/index.css`:

```css
--scapa-blue: #0077b3;
--scapa-red: #e31837;
--scapa-dark-blue: #005a8a;
--scapa-light-blue: #e6f2f8;
--scapa-white: #ffffff;
--scapa-black: #000000;
```

Use these via `style={{ backgroundColor: 'var(--scapa-blue)' }}` or Tailwind utilities like `className="bg-scapa-blue"`. Additional design tokens include animation easing functions in `--ease-expo-out`, `--ease-spring`, etc.

## Import Aliases

The `@` alias is configured in `vite.config.ts` to point to `./src`. Use this for imports:

```tsx
import { Component } from '@/components/Component';
import { utility } from '@/lib/utils';
```

## Component Patterns

- All components use TypeScript with explicit interfaces for props
- Conditional classes use `clsx` or `cn()` utility (from `lib/utils.ts`)
- Mobile responsiveness handled via Tailwind breakpoints (`md:`, `lg:`)
- Scroll position resets on page navigation via `window.scrollTo({ top: 0, behavior: 'smooth' })`

## Special Features

- **Scroll-to-top button**: Appears after scrolling 500px, fixed position bottom-right
- **Mobile menu**: Full-screen overlay with hamburger icon toggle in Header
- **Smooth animations**: Custom CSS easing variables for transitions
- **Container utility**: `.container-scapa` class for consistent content padding/max-width
