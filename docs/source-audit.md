# Source Website Audit — Magic Smiles Dental & Orthodontics

**Audit Date:** 2026-11-26  
**Source URL:** https://magicsmilesdentalandortho.com/  
**Platform / Generator:** GoDaddy Website Builder 8.0.0000 (`Starfield Technologies; Go Daddy Website Builder 8.0.0000`, `Server: DPS/2.0.0+sha-d094b0a`, `X-SiteId: ap-south-1`)  

---

## 1. Website Overview

Magic Smiles Dental & Orthodontics is a family, pediatric, and orthodontic dental clinic located in Bakersfield, California (`2935 Oswell St, Bakersfield, CA 93306`). The live website is a 4-page GoDaddy Website Builder marketing site (`Home`, `About Us`, `Our Services`, `Contact`) plus a custom `/404` page, PWA manifest (`/manifest.webmanifest`), and GoDaddy Online Store (`ols`) residual endpoints (`/ols/products` serving a duplicate of Home, and `/ols/cart` redirecting to `/?openCart=true`).

Key technical characteristics observed:
- **Static + Client-Hydrated Widgets:** Base page HTML is server-rendered with inline Glamor CSS (`data-glamor="cxs-media-sheet"`), while interactive photo carousels on the homepage (`Your Smile, Our Priority`, `The Fun Zone for Little Smiles`, and the 5-slide themed storybook gallery) and the interactive Google Map on Home & Contact are hydrated by GoDaddy's `blobby/go/.../script.js` bundles and Google Maps API (`client=gme-godaddycom`).
- **Lazy Loading Behavior:** Images below the fold initially render with `transparent_placeholder.png` or `data:image/gif` placeholders and swap in via IntersectionObserver as the user scrolls.
- **No Blog, Patient Portal, or Online Booking Engine:** The `"Book Your Appointment"` CTA links directly to `/contact`, which provides a GoDaddy contact form (`Name`, `Email*`, `Message`, Google reCAPTCHA badge), clinic phone (`tel:6615162904`), and Google Maps `"Get directions"`.

---

## 2. Discovery Sources Checked

| Discovery Method | URL / Source | Findings |
|---|---|---|
| Robots.txt | `https://magicsmilesdentalandortho.com/robots.txt` | Allows all (`User-agent: *`), `Disallow: /404`, declares `Sitemap: https://magicsmilesdentalandortho.com/sitemap.xml` |
| Sitemap Index | `https://magicsmilesdentalandortho.com/sitemap.xml` | Lists 2 child sitemaps: `sitemap.website.xml` and `sitemap.ols.xml` |
| Website Sitemap | `https://magicsmilesdentalandortho.com/sitemap.website.xml` | Lists 4 pages (`lastmod: 2026-07-28`): `/`, `/our-services`, `/about-us`, `/contact` |
| OLS Sitemap | `https://magicsmilesdentalandortho.com/sitemap.ols.xml` | Lists 1 URL: `/ols/products` (`changefreq: always`) |
| Main Navigation & Drawer | Header `<nav>` & Mobile Drawer | 4 links: `Home` (`/`), `About Us` (`/about-us`), `Our Services` (`/our-services`), `Contact` (`/contact`), plus `"More"` overflow dropdown mirroring the same 4 links |
| Footer Navigation | Footer link list | Same 4 links: `Home`, `About Us`, `Our Services`, `Contact` |
| Web App Manifest | `https://magicsmilesdentalandortho.com/manifest.webmanifest` | Declares PWA name, `theme_color: #800080`, `background_color: #800080`, and 192x192 / 512x512 icons |
| Internal CTA & Phone Links | Body & Contact sections | `/contact` (`Book Your Appointment`), `tel:6615162904` (`661-516-2904`), external Google reCAPTCHA Privacy/Terms links |
| Probed Common Paths | Direct HTTP probes | `/ols/cart` -> `302` to `/?openCart=true`; `/404` -> `200`; `/ols/categories`, `/m/account`, `/home`, `/services`, `/about`, `/contact-us`, `/appointments`, `/team`, `/privacy-policy`, `/terms-and-conditions` -> `404` |

---

## 3. Complete Page Inventory

| Page Name | Original URL | Purpose | Discovery Source | HTTP Status | Canonical URL | Redirect Destination | Inspection Status |
|---|---|---|---|---|---|---|---|
| **Home** | `https://magicsmilesdentalandortho.com/` | Primary landing page: clinic value props, service summary cards, patient/clinic photo carousels, themed dentistry storybook slides, contact form, map | Sitemap, Main Nav, Footer | `200 OK` | `https://magicsmilesdentalandortho.com/` | None | **Fully Inspected** (HTML, live DOM, desktop & mobile screenshots) |
| **Our Services** | `https://magicsmilesdentalandortho.com/our-services` | Detailed 6-service breakdown + secondary `"Contact Us"` block with `"Send a note"` modal/reveal form | Sitemap, Main Nav, Footer | `200 OK` | `https://magicsmilesdentalandortho.com/our-services` | None | **Fully Inspected** (HTML, live DOM, desktop & mobile screenshots) |
| **About Us** | `https://magicsmilesdentalandortho.com/about-us` | Practice philosophy (`Expert Dental Care`, `Our Technology`, `Our Community`) + 6-card `"Your Trusted Dental Care Provider"` grid | Sitemap, Main Nav, Footer | `200 OK` | `https://magicsmilesdentalandortho.com/about-us` | None | **Fully Inspected** (HTML, live DOM, desktop & mobile screenshots) |
| **Contact** | `https://magicsmilesdentalandortho.com/contact` | Dedicated contact form (`Send us message!`), appointment prompt, address, phone, interactive Google Map | Sitemap, Main Nav, Footer, Hero CTA | `200 OK` | `https://magicsmilesdentalandortho.com/contact` | None | **Fully Inspected** (HTML, live DOM, desktop & mobile screenshots) |
| **OLS Products (Duplicate Alias)** | `https://magicsmilesdentalandortho.com/ols/products` | Residual GoDaddy Online Store endpoint; serves byte-for-byte identical HTML to `/` | `sitemap.ols.xml` | `200 OK` | `https://magicsmilesdentalandortho.com/` | None (canonical points to `/`) | **Fully Inspected** (confirmed byte-for-byte identical to `home.html`) |
| **OLS Cart (Redirect)** | `https://magicsmilesdentalandortho.com/ols/cart` | Residual GoDaddy Online Store cart endpoint | URL probe | `302 Found` | N/A | `https://magicsmilesdentalandortho.com/?openCart=true` | **Inspected (Redirect)** — unused e-commerce route |
| **Custom 404 Page** | `https://magicsmilesdentalandortho.com/404` | Fallback `"Page Not Found"` error page with `"Go To Home Page"` CTA | `robots.txt` (`Disallow: /404`) | `200 OK` | `https://magicsmilesdentalandortho.com/404` | None | **Fully Inspected** (HTML & parsed content) |
| **Web App Manifest** | `https://magicsmilesdentalandortho.com/manifest.webmanifest` | PWA metadata & icon definitions | `<link rel="manifest">` in HTML | `200 OK` | N/A | None | **Fully Inspected** |

### Unavailable / Broken / 404 Probed Routes

The following standard candidate paths returned `404` (served GoDaddy's 404 template) and do **not** exist on the source site:
- `/ols/categories`, `/m/account`, `/home`, `/services`, `/about`, `/contact-us`, `/appointments`, `/team`, `/privacy-policy`, `/terms-and-conditions`

Note: No dedicated `/privacy-policy`, `/terms`, `/team`, `/testimonials`, `/faq`, or `/blog` pages exist on the source website.

---

## 4. Page-by-Page Section Structure & Functional Summary

### A. Home (`/`)
1. **Header & Promo Banner (`HEADER_SECTION`)**
   - Top bar (`#000000` / `#161616`): `"Office hours Mon-Sat: 9:00AM - 6:00PM"`
   - Navigation bar (`#FFFFFF`): Logo image (`Magic Smiles Dental`), desktop nav links (`Home`, `About Us`, `Our Services`, `Contact`), mobile hamburger drawer trigger.
   - Split Hero (`50/50` image left + `#800080` purple panel right on desktop; stacked on mobile):
     - `h1`: `"Expert Dental Care for Your Family"`
     - Subtagline: `"Dental & Orthodontic Care for a healthy smile in Bakersfield, CA 93306"`
     - Primary CTA button: `"Book Your Appointment"` -> `/contact`
     - Clickable phone link: `"661-516-2904"` -> `tel:6615162904`
2. **Carousel 1 — `"Your Smile, Our Priority"` (`SectionBanner`)**
   - Interactive horizontal image carousel with left/right arrows and 6 clickable thumbnail dots (6 Getty dental/family images).
3. **Why Choose Split Section (`SectionSplit`, `#800080` purple background)**
   - Left column: Heading `"Why Choose Magic Smiles Dental and Orthodontics?"` + 4 bullet points (`Comprehensive Dental & Orthodontic Care`, `Flexible Payment Options`, `Comfort Comes First`, `Family-Friendly Dentistry`).
   - Right column: Full-bleed Magic Smiles castle emblem (`blob-d6a31a2.png`).
4. **Services Overview Grid (`OUR SERVICES`, `#FFFFFF` background)**
   - 3x2 grid (6 cards) with photo + `h4` title + short description:
     1. `General and Preventive Dentistry`
     2. `Orthodontics`
     3. `Dental Implants`
     4. `Sedation Dentistry` *(note: body text says `"Teeth whitening, veneers to keep you comfortable and relaxed"` — preserved verbatim)*
     5. `Tooth Extractions`
     6. `Mobile Dental Outreach Programs` *(uses real photo of the DOC mobile dental RV)*
5. **Carousel 2 — `"The Fun Zone for Little Smiles"` (`SectionBanner`)**
   - Interactive horizontal carousel with left/right arrows and 9 clickable thumbnails showcasing the clinic's themed interior waiting area, gaming consoles, and murals.
6. **About Highlight Banner (`"Experience the Magic of a Healthy Smile"`, `#800080` purple background)**
   - 2-column feature: Getty family smile photo left; `"Highly Trained Dental Professionals"` + 2 paragraphs right.
7. **Themed Dentistry Storybook Gallery (`#F6F6F6` background)**
   - Vertical stack of 5 illustrated concept/story slides (`Picsart_25-10-11_...`):
     1. Title scroll (`Magic Smiles — where every visit is a new adventure... a themed dentistry`)
     2. `WELCOME` (`Good Morrow young travelers!...`)
     3. `BILLY & MOE` (character intro + `Comparables`)
     4. `GUMMY THE GUM GOBLIN` (villain intro + `Comparables`)
     5. `Billy and Moe encounter many characters to help them on their quest...` (`Eddie Enamel`, `Carie the Floss Fairy`, `Dentin the Viking`)
8. **Contact Us & Embedded Map (`#FFFFFF` background)**
   - Left column: `"Drop us a line!"` form (`Name`, `Email*`, `Message`, hidden `_app_id` honeypot, `Send` submit button, Google reCAPTCHA Privacy/Terms notice).
   - Right column: `"Visit Us Today!"`, payment info, `"Magic Smiles Dental & Orthodontics"`, `"2935 Oswell St. Bakersfield, CA 93306"`, `"📞 Call us at 661-516-2904 to schedule your appointment today!"`.
   - Below: Full-width embedded Google Map centered at `35.3999541, -118.9496722` with `"Get directions"` button.
9. **Footer (`#000000` / `#161616` background) & Cookie Banner**
   - Footer nav links (`Home`, `About Us`, `Our Services`, `Contact`), business name, address, clickable phone, `"Copyright © 2025 Magic Smiles Dental - All Rights Reserved."`, `"Designed by ZehoTech"`.
   - Floating purple cookie notice card (`"This website uses cookies."` + `"Accept"`).

### B. Our Services (`/our-services`)
1. **Header & Promo Banner** (same shared header without full-bleed hero)
2. **`h1` `"Our Services"` (`#FFFFFF`)** — 3x2 grid of 6 detailed service cards:
   - `General & Preventive Dentistry`
   - `Orthodontics`
   - `Dental Implants & Restoration`
   - `Sedation Dentistry` *(note: paragraph text describes cosmetic dentistry — whitening, veneers, smile makeovers — under the `"Sedation Dentistry"` heading)*
   - `Pediatric Dentistry`
   - `Mobile Dental Outreach Programs` *(shares the DOC bus image with Home)*
3. **`"Contact Us"` (`#F6F6F6`)** — Left column: `"Visit Us Today!"`, `"We provide a full range of dental and orthodontic treatments."`, `"Magic Smiles Dental and Orthodontics"`, `"South Oswell Street, Bakersfield, CA 93307, USA"` *(discrepancy vs `2935 Oswell St, Bakersfield, CA 93306` elsewhere)*, `"661-516-2904"`, `"Send a note"` toggle button that reveals an inline form (`Name`, `Email*`, `Message`, `Send`, `Cancel`). Right column: child dental exam photo (`getty/2149252378`).
4. **Footer & Cookie Banner**

### C. About Us (`/about-us`)
1. **Header & Promo Banner**
2. **`h1` `"About Magic Smiles Dental"` (`#FFFFFF`)** — 3 alternating image/text rows:
   - Row 1 (image left, text right): `Expert Dental Care`
   - Row 2 (text left, image right): `Our Technology`
   - Row 3 (image left, text right): `Our Community`
3. **`h2` `"Magic Smiles Dental - Your Trusted Dental Care Provider"` (`#F6F6F6`)** — 3x2 grid of 6 pillar cards:
   - `Comprehensive Dental Services`
   - `State-of-the-Art Technology`
   - `Friendly and Experienced Staff`
   - `Convenient and Flexible Scheduling`
   - `Affordable Dental Care`
   - `Patient Education and Prevention`
4. **Footer & Cookie Banner**

### D. Contact (`/contact`)
1. **Header & Promo Banner**
2. **`h1` `"Contact Us"` (`#FFFFFF`)** — 2-column layout:
   - Left: `"Send us message!"` form (`Name`, `Email*`, `Message`, `Send`, reCAPTCHA notice)
   - Right: `"Schedule your appointment today!"` + 2 paragraphs + `"Magic Smiles Dental & Orthodontics"`, `"2935 Oswell St, Bakersfield, CA 93306, USA"`, `"661-516-2904"`
   - Below: Full-width embedded Google Map + `"Get directions"` button
3. **Footer & Cookie Banner**

### E. Custom 404 (`/404`)
1. **Header & Promo Banner**
2. **`h1` `"Page Not Found"`** — `"We can’t seem to find the page you’re looking for."` + `"Go To Home Page"` button linking to `/`
3. **Footer & Cookie Banner**

---

## 5. Interactive Functionality & Technical Observations

- **Contact Forms:** 3 instances exist (Home inline form, Contact inline form, Our Services `"Send a note"` expandable form). All submit to GoDaddy's hosted form backend with Google reCAPTCHA protection and an `_app_id` honeypot field. In the future React app, form submission will need a replacement handler (e.g., Formspree, Netlify Forms, EmailJS, or a backend API endpoint) or clear submission feedback.
- **Google Maps & Directions:** Powered by Google Maps JS API (`35.3999541, -118.9496722`, `2935 Oswell St, Bakersfield, CA 93306`) with a `"Get directions"` button.
- **Phone Links:** `tel:6615162904` across Hero, Contact sections, and Footer. (Note: JSON-LD structured data in `home.html` contains a country-code bug: `"telephone":"+92 6615162904"` — `+92` is Pakistan instead of `+1` for Bakersfield, CA, USA.)
- **Missing Standard Clinic Content (Confirmed Absent from Source Site):**
  - No dentist/doctor or staff biographies or individual headshots.
  - No clinic email address published on any page.
  - No patient testimonials or reviews widget.
  - No FAQ section.
  - No social media profile links.
  - No privacy policy or terms of service pages on the domain (only Google's reCAPTCHA Privacy/Terms links).

---

## 6. Inspection Limitations

- **Chrome DevTools MCP Server:** Not connected to a live Chrome instance (`DevToolsActivePort` missing) and lacks `navigate_page` / `take_screenshot` tools in this session.
- **Workaround Used:** Local Google Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`) was launched cleanly in headless mode via Node.js CDP (`scratch/capture_site.mjs`) to render all pages with full JavaScript hydration, inspect live DOM metrics/styles, and capture full-page desktop (`1440x900`) and mobile (`390x844`) PNG screenshots saved in `docs/source-reference/`.
- **Form Submission:** Forms were inspected in DOM and visuals only; live form submissions were intentionally NOT triggered so as not to spam the clinic's inbox.
