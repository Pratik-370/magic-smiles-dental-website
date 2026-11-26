# Magic Smiles Dental & Orthodontics — Website Reconstruction

**Business:** Magic Smiles Dental & Orthodontics (`2935 Oswell St, Bakersfield, CA 93306`)  
**Source Website:** https://magicsmilesdentalandortho.com/  
**Planned Frontend Stack:** React + Vite + TypeScript  

---

## Project Objective

Reconstruct the existing Magic Smiles Dental & Orthodontics website into a modern, responsive, high-contrast React + Vite + TypeScript web application while preserving all real business information, verbatim service/practice content, and original clinic imagery.

## Current Project Status

- **Phase 1 (Complete):** Full source website discovery, verbatim content extraction, original asset collection & verification (`51/51` assets locally verified), visual reference capture, and design/architecture planning.
- **Phase 2 (Current):** Git & GitHub repository baseline initialization, with unapproved/review-required third-party assets protected via `.gitignore`.
- **Phase 3 (Pending Approval):** React + Vite + TypeScript application scaffolding and UI implementation. **The React application has not yet been initialized.**

---

## Repository Structure

### `docs/` — Audit, Content & Asset Documentation
- `docs/source-audit.md` — Discovered pages, URL inventory, HTTP statuses, section structures, and interactive features.
- `docs/content-inventory.md` — Verbatim page-by-page copy, metadata, forms, and embedded story slide transcripts.
- `docs/asset-manifest.md` — Technical catalog of all 51 collected original assets (dimensions, formats, hashes, licensing notes).
- `docs/asset-coverage-report.md` — Page-and-section asset mapping (`100.0%` local verification coverage) and reuse review flags.
- `docs/design-direction.md` — Observed source characteristics, proposed UI/UX direction, tool evaluation, and implementation roadmap.
- `docs/source-reference/` *(excluded from Git)* — Local desktop (`1440x900`) and mobile (`390x844`) reference screenshots of the source site.

### `public/assets/` — Verified Local Asset Library (51 Assets Locally)
- **Tracked in Git (18 cleared assets):**
  - `public/assets/brand/` — Clinic logo, favicon, and castle emblem (`3` files).
  - `public/assets/fonts/` — Self-hosted `Raleway v37` `.woff2` subsets (`5` files, SIL OFL 1.1).
  - `public/assets/home/fun-zone-gallery/` — Original clinic interior & kids waiting area photos (`9` files).
  - `public/assets/services/mobile-dental-outreach-bus.jpg` — Mobile dental outreach RV photo (`1` file).
- **Protected Locally via `.gitignore` (33 review-required assets):**
  - `28` GoDaddy-bundled Getty Images across `public/assets/home/`, `public/assets/services/`, and `public/assets/about/`.
  - `5` themed-dentistry concept slides (`public/assets/home/themed-story/`) containing moodboard imagery and third-party `"COMPARABLES"` thumbnails.
  - All 33 excluded files remain intact locally for reference and will only be staged or replaced once reuse clearance is confirmed.
