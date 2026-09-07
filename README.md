# AAZHI | ஆழி — Rameswaram Fresh Seafood
> **"THE DEEP SEA TASTES DIFFERENT."**  
> *From the deep waters of Rameswaram to your home.*

AAZHI is a premium direct-to-consumer coastal seafood business sourcing wild open-sea catches from Rameswaram and delivering them directly to homes across Chennai. 

This repository contains the complete frontend web application built with **React (Vite)**, **Framer Motion**, **Bootstrap 5 / React-Bootstrap**, and **React Router DOM**. It is designed with an editorial, coastal luxury aesthetic (Apple/Tesla/lifestyle-grade) featuring deep marine palettes, dual-script typography (English & Tamil), sticky glassmorphic navigation, and pre-booking conversion flows.

---

## 🌊 Table of Contents
1. [Brand Identity & Design System](#-brand-identity--design-system)
2. [Tech Stack & Architecture Constraints](#-tech-stack--architecture-constraints)
3. [Repository File Structure](#-repository-file-structure)
4. [Getting Started (Local Development)](#-getting-started-local-development)
5. [Asset Architecture & Media Guidelines](#-asset-architecture--media-guidelines)
6. [Data Schema & Business Logic](#-data-schema--business-logic)
7. [Routing Architecture](#-routing-architecture)
8. [Responsive Breakpoints & Micro-Interactions](#-responsive-breakpoints--micro-interactions)
9. [Production Deployment](#-production-deployment)
10. [Strict Business Rules (Do Not Violate)](#-strict-business-rules-do-not-violate)

---

## 🎨 Brand Identity & Design System

The application deliberately rejects generic "bright blue fish market" templates in favor of an **editorial marine luxury aesthetic**.

### Color Palette (Configured in `src/index.css`)
| Color Name | Hex Code | CSS Variable | Purpose |
| :--- | :--- | :--- | :--- |
| **Deep Ocean Navy** | `#062B3A` | `--c-primary` | Dominant headers, dark containers, hero overlays |
| **Ocean Teal** | `#0B5563` | `--c-secondary` | Sub-headings, active states, secondary accents |
| **Warm Sand / Gold** | `#C99A4A` | `--c-accent` | Primary CTAs, gold accent lines, highlights |
| **Warm Coastal Ivory** | `#F5F1E8` | `--c-bg` | Editorial backgrounds, section alternating |
| **Coastal Night** | `#031820` | `--c-dark` | Footer, deep immersion sections, contrast backing |
| **Subtle Seafoam** | `#7FB7B3` | `--c-subtle` | Borders, badge accents, gradient transitions |
| **Pure White** | `#FFFFFF` | `--c-white` | Editorial card backgrounds, high-contrast text |

### Typography
* **Editorial / English Display:** `Playfair Display` (Serif) — used for major section titles and brand slogans.
* **Body / UI Labels:** `Manrope` (Sans-serif) — used for readability, UI micro-copy, and letter-spaced metadata.
* **Tamil Compatibility:** `Noto Sans Tamil` — native rendering for Tamil catch names (`வஞ்சிரம்`, `வாவல்`, `இறால்`, `நண்டு`, `கருவாடு`).

---

## 🛠 Tech Stack & Architecture Constraints

* **Build Tool:** [Vite](https://vitejs.dev/) (`@vitejs/plugin-react`)
* **Core Framework:** [React 18](https://react.dev/) (Functional components, Hooks)
* **Routing:** [React Router DOM v6](https://reactrouter.com/) (Browser history, top scroll restorations)
* **Styling:** Custom CSS Custom Properties + [Bootstrap 5.3](https://getbootstrap.com/) Grid & Utilities + [React-Bootstrap](https://react-bootstrap.github.io/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (cinematic staggered hero reveals, card elevations, layout transitions)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`, `react-icons/fa`)

> ⚠️ **Strict Constraint Note:** Do **NOT** install Tailwind CSS, Material UI, Next.js, or jQuery. The design relies on clean CSS variables, Bootstrap grid mechanics, and bespoke luxury utilities.

---

## 📁 Repository File Structure

```text
aazhi-seafood/
├── index.html                     # HTML5 Shell + Google Web Fonts imports
├── package.json                   # Dependencies and npm scripts
├── vite.config.js                 # Vite + React plugin configuration
└── src/
    ├── index.css                  # Global variables, luxury utilities, scroll behavior
    ├── main.jsx                   # React root mount + BrowserRouter wrapper
    ├── App.jsx                    # Root view with Global Navbar, Routes, Footer & Floating CTAs
    ├── data/
    │   └── seafoodData.js         # Single source of truth (Phone numbers, Fresh Fish, Prawns, Karuvadu)
    ├── assets/
    │   └── images/
    │       ├── logo.png           # Brand identity logo
    │       ├── hero-bg.jpg        # Cinematic ocean background for Hero
    │       ├── brand-intro.jpg    # Editorial fish spread for Brand Intro
    │       ├── cta-bg.jpg         # Atmospheric background for Final CTA
    │       └── seafood/           # Local seafood photos
    │           ├── vanjaram.jpg
    │           ├── vaval.jpg
    │           ├── vela-meen.jpg
    │           ├── parai.jpg
    │           ├── ooli.jpg
    │           ├── sankara.jpg
    │           ├── singi-eral.jpg
    │           ├── coonie-eral.jpg
    │           ├── king-prawn.jpg
    │           └── crab.jpg
    ├── components/
    │   ├── Navbar.jsx             # Sticky glassmorphic nav with scroll detector & mobile drawer
    │   ├── Hero.jsx               # Cinematic full-viewport hero with centered logo & staggered CTA
    │   ├── BrandIntro.jsx         # Editorial split section (Open sea statement & coastal origin)
    │   ├── SeafoodSection.jsx     # Grid of fresh sea catches with card zooms & Tamil nomenclature
    │   ├── PrawnsSection.jsx      # Dark ocean themed showcase for wild sea prawns
    │   ├── CrabSection.jsx        # Crab showcase with feature lists & asymmetric composition
    │   ├── KaruvaduSection.jsx    # Heritage sun-dried collection on warm coastal ivory
    │   ├── PreBookSection.jsx     # Dark ocean luxury cards explaining the 2-day prior model
    │   ├── HowItWorks.jsx         # 4-step logistics timeline (Pre-Book -> Deliver)
    │   ├── About.jsx              # Brand philosophy + Founders card (Lingeswari, Jyothish, Anand)
    │   ├── CTASection.jsx         # Full-width dramatic callout with one-tap order actions
    │   ├── Contact.jsx            # Direct touchpoints, Chennai coverage, and numbers
    │   ├── Footer.jsx             # Dark navy footer with full site navigation and copyright
    │   ├── FloatingActions.jsx    # Sticky bottom-right WhatsApp & Phone quick-dial triggers
    │   └── ScrollToTop.jsx        # Route change listener resetting window scroll to (0,0)
    └── pages/
        ├── Home.jsx               # Unified narrative scroll of the full brand experience
        ├── OurCatch.jsx           # Dedicated catch catalog (Fish, Prawns, Crab)
        ├── KaruvaduPage.jsx       # Dedicated heritage sun-dried fish catalog
        ├── HowItWorksPage.jsx     # Step-by-step breakdown of the cold-chain pre-book cycle
        ├── AboutPage.jsx          # Founder story and coastal ethics page
        └── ContactPage.jsx        # Direct contact and pre-booking desk
