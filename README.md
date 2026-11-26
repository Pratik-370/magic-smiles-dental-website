# Magic Smiles Dental & Orthodontics — Website Reconstruction

**Business:** Magic Smiles Dental & Orthodontics (`2935 Oswell St, Bakersfield, CA 93306`)  
**Source Website:** https://magicsmilesdentalandortho.com/  
**GitHub Repository:** https://github.com/Pratik-370/magic-smiles-dental-website (Private)  

---

## Project Objective

Reconstruct the Magic Smiles Dental & Orthodontics website into a modern, responsive, accessible React + Vite + TypeScript web application while preserving all real business details, verbatim original content, and verified clinic imagery.

## Current Project Status

- **Phase 1 (Complete):** Full source website audit, verbatim content extraction, original asset collection (`51/51` verified locally), reference screenshots, and design direction.
- **Phase 2 (Complete):** Git repository initialization on `main`, private GitHub repository creation, and `.gitignore` protection for review-required assets.
- **Phase 3 (Current):** Minimal **React + Vite + TypeScript** application foundation initialized (routing, temporary route placeholders, centralized tokens, local Raleway font configuration, and global base styles).
- **Phase 4 (Pending Approval):** Full website pages (`Home`, `Our Services`, `About Us`, `Contact`, `Not Found`) have **not yet been implemented**.

---

## Technology Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Standard CSS with centralized CSS custom properties (`src/styles/tokens.css`, `src/styles/fonts.css`, `src/styles/global.css`)

## Prerequisites

- **Node.js:** `>= 22.12.0` (verified on `v24.20.0`)
- **npm:** Verified on `11.19.0`

## Installation & Commands

Install dependencies from the project root:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Create a TypeScript-checked production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
Magic Smiles Dental & Orthodontics/
├── public/
│   └── assets/                         # 51 verified local assets (18 cleared in Git, 33 protected via .gitignore)
│       ├── brand/                      # Clinic logo, favicon, and castle emblem
│       ├── fonts/                      # 5 local Raleway v37 WOFF2 subsets
│       ├── home/                       # Fun Zone gallery (tracked) + Hero/Priority/Services/Story (ignored)
│       ├── services/                   # DOC outreach bus (tracked) + Getty service photos (ignored)
│       └── about/                      # Getty about/provider photos (ignored)
├── src/
│   ├── app/
│   │   ├── App.tsx                     # Root RouterProvider shell
│   │   └── router.tsx                  # Discovered routes (/, /our-services, /about-us, /contact, *)
│   ├── pages/
│   │   └── RoutePlaceholder.tsx        # Temporary placeholder component for unimplemented routes
│   ├── styles/
│   │   ├── fonts.css                   # Local @font-face declarations for Raleway v37
│   │   ├── tokens.css                  # Observed source tokens + provisional redesign CSS variables
│   │   └── global.css                  # Base resets, accessibility, and placeholder styles
│   ├── main.tsx                        # Application entry point
│   └── vite-env.d.ts                   # Vite TypeScript client types
├── docs/
│   ├── source-audit.md                 # Page discovery, URL status, section structure, and interactive audit
│   ├── content-inventory.md            # Verbatim copy extracted page by page
│   ├── asset-manifest.md               # Technical catalog of all 51 local assets
│   ├── asset-coverage-report.md        # Page/section asset coverage mapping & reuse review flags
│   ├── design-direction.md             # Observed source styling, proposed direction, and execution plan
│   └── source-reference/               # (Git-ignored) Source website screenshots (1440x900 & 390x844)
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

---

## Documentation & Local Asset Notes

- **`docs/`:** Contains the complete source audit, verbatim content inventory, asset manifest, asset coverage report, and design direction.
- **`public/assets/`:** All `51` collected original assets remain intact locally inside `public/assets/` and are served from `/assets/...`.
- **Protected Assets:** `33` assets requiring permission/reuse review (`28` GoDaddy-bundled Getty Images + `5` themed-dentistry concept slides) and `docs/source-reference/` remain excluded from Git/GitHub via `.gitignore`.
