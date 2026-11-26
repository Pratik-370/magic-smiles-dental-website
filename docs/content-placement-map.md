# Content Placement Map — Magic Smiles Dental & Orthodontics

**Document Date:** 2026-11-26  
**Purpose:** Maps every original content section and image asset from `docs/content-inventory.md` and `docs/source-audit.md` to its destination route in the redesigned React application so that the Homepage stays focused and scannable while **zero** original content or imagery is lost.  
**Note:** `docs/content-inventory.md` remains completely unmodified as the verbatim source record.

---

## 1. Global / Shared Elements

| Original Source Page | Original Section / Identifier | Content / Heading | Destination Route(s) | Related Original Asset(s) |
|---|---|---|---|---|
| All Pages | `BANNER_TEXT_RENDERED` | `"Office hours Mon-Sat: 9:00AM - 6:00PM"` | All routes (`AnnouncementBar`) | None |
| All Pages | `HEADER_LOGO_IMAGE_RENDERED`, `HEADER_NAV_RENDERED`, `HEADER_CTA_BTN` | Logo (`Magic Smiles Dental`), `Home`, `About Us`, `Our Services`, `Contact`, `"Book Your Appointment"` | All routes (`Header` & `MobileNavigation`) | `/assets/brand/logo/magic-smiles-logo.jpg`, `/assets/brand/logo/magic-smiles-favicon.jpg` |
| All Pages | `FOOTER_*` | Nav links, `Magic Smiles Dental and Orthodontics`, `2935 Oswell St. Bakersfield, CA 93306`, `661-516-2904`, `Copyright © 2025 Magic Smiles Dental - All Rights Reserved.`, `Designed by ZehoTech` | All routes (`Footer`) | None |
| All Pages | `FOOTER_COOKIE_BANNER_RENDERED` | `"This website uses cookies."`, message, `"Accept"` | All routes (`CookieBanner`) | None |

---

## 2. Homepage (`/`) vs. Dedicated Page Placement

| Original Source Page | Original Section / Identifier | Heading / Content | Homepage (`/`) Role | Full-Content Destination | Related Original Asset(s) |
|---|---|---|---|---|---|
| **Home** | `HEADER_SECTION` (Hero) | `"Expert Dental Care for Your Family"`, `"Dental & Orthodontic Care  for a healthy smile in  Bakersfield, CA 93306"`, `"Book Your Appointment"`, `661-516-2904` | **Full Hero** on `/` (plus `"Explore Services"` secondary UI link to `/our-services`) | `/` | `/assets/home/hero/hero-children-smiling-circle.jpg`, `/assets/brand/magic-smiles-castle-emblem.png` |
| **Home** | `ABOUT_SECTION_TITLE_RENDERED` (`Experience the Magic of a Healthy Smile`) | `"Experience the Magic of a Healthy Smile"`, `"Highly Trained Dental Professionals"`, 2 verbatim paragraphs | **Concise About Preview** on `/` paired with `"Discover About Us"` → `/about-us` | `/about-us` (combined with full practice overview) | `/assets/home/experience-magic-family.jpg` |
| **Home** | `ABOUT_HEADLINE_RENDERED0` (`Why Choose Magic Smiles Dental and Orthodontics?`) | `"Why Choose Magic Smiles Dental and Orthodontics?"` + 4 verbatim bullet points (Comprehensive Care, Medi-Cal/PPO/Cash, Sedation Dentistry, Family-Friendly) | **Full Section** on `/` (editorial numbered highlights) | `/` | `/assets/brand/magic-smiles-castle-emblem.png` |
| **Home** & **Our Services** | `CONTENT_SECTION_TITLE_RENDERED` (`OUR SERVICES` / `Our Services`) | **6 Services:** `General and Preventive Dentistry`, `Orthodontics`, `Dental Implants` / `& Restoration`, `Sedation Dentistry` *(verbatim cosmetic text preserved)*, `Tooth Extractions`, `Pediatric Dentistry`, `Mobile Dental Outreach Programs` | **Curated 3-Service Preview** on `/` (`General and Preventive Dentistry`, `Orthodontics`, `Mobile Dental Outreach Programs` with verbatim Home excerpts) + index of remaining treatments + `"Explore All Services"` → `/our-services` | **`/our-services`** (full 6-service catalog, expanded descriptions, and all 6 service photos from `/our-services` + Home card photos) | Preview on `/`: `home-service-general-preventive.jpg`, `home-service-orthodontics.jpg`, `mobile-dental-outreach-bus.jpg`. Full catalog on `/our-services`: all `services-*.jpg` + `home-service-dental-implants.jpg`, `home-service-sedation-dentistry.jpg`, `home-service-tooth-extractions.jpg` |
| **Home** | `GALLERY_SECTION_TITLE_RENDERED` (`Your Smile, Our Priority`) | `"Your Smile, Our Priority"` — 6 patient/smile photographs | **Full Editorial Mosaic & Interactive Viewer** on `/` | `/` | `/assets/home/priority-gallery/priority-01.jpg` through `priority-06.jpg` |
| **Home** | `GALLERY_SECTION_TITLE_RENDERED` (`The Fun Zone for Little Smiles`) | `"The Fun Zone for Little Smiles"` — 9 clinic interior & kids arcade photographs | **Full Deep-Plum Showcase Carousel** on `/` | `/` | `/assets/home/fun-zone-gallery/fun-zone-01.jpg` through `fun-zone-09.jpg` |
| **Home** | `GALLERY_IMAGE0_RENDERED`–`4` (Themed Dentistry Story) | 5 illustrated slides (`Magic Smiles`, `Welcome`, `Billy & Moe`, `Gummy the Gum Goblin`, `Quest Allies: Eddie Enamel, Carie the Floss Fairy, Dentin the Viking`) | **Compact Interactive 5-Chapter Story Viewer** on `/` with full verbatim transcripts | `/` | `/assets/home/themed-story/story-01-magic-smiles-banner.png` through `story-05-quest-characters.jpg` |
| **Home** & **Contact** | `CONTACT_SECTION_TITLE_REND` (`Contact Us`) | `"Drop us a line!"` / `"Send us message!"` form (`Name`, `Email*`, `Message`, `Send`, reCAPTCHA notice), `"Visit Us Today!"`, `"Schedule your appointment today!"`, `2935 Oswell St, Bakersfield, CA 93306, USA`, `661-516-2904`, `"Get directions"`, embedded Google Map | **Compact Appointment & Location CTA** on `/` (payment acceptance line, address, hours, phone `661-516-2904`, `"Book Your Appointment"` & `"Contact Us"` → `/contact`, `"Get directions"`) | **`/contact`** (full inquiry form, appointment paragraphs, complete contact info, embedded Google Map, `"Get directions"`) | Global branding only (no unique Contact page photos) |
| **Our Services** | `CONTACT_SECTION_TITLE_REND` (Secondary Contact block) | `"Visit Us Today!"`, `"We provide a full range of dental and orthodontic treatments."`, `"South Oswell Street, Bakersfield, CA 93307, USA"` *(discrepancy preserved)*, `"Send a note"` form, child exam photo | Excluded from `/` (avoids homepage duplication) | **`/our-services`** | `/assets/services/services-contact-child-exam.jpg` |
| **About Us** | `ABOUT_SECTION_TITLE_RENDERED` (`About Magic Smiles Dental`) & `CONTENT_SECTION_TITLE_RENDERED` (`Your Trusted Dental Care Provider`) | `Expert Dental Care`, `Our Technology`, `Our Community` alternating blocks + 6-card Trust Grid (`Comprehensive Dental Services`, `State-of-the-Art Technology`, `Friendly and Experienced Staff`, `Convenient and Flexible Scheduling`, `Affordable Dental Care`, `Patient Education and Prevention`) | Previewed via Practice Intro + `"Discover About Us"` link on `/` | **`/about-us`** | `/assets/about/about-*.jpg` (3) & `/assets/about/provider-*.jpg` (6) |
| **404** | `SECTION_TITLE_RENDERED` | `"Page Not Found"`, `"We can’t seem to find the page you’re looking for."`, `"Go To Home Page"` | N/A | **`*` (Not Found fallback)** | Global header/footer |

---

## 3. Verification Summary

- **Homepage (`/`):** Features 7 focused, non-repetitive sections: Hero, Practice Intro & Why Choose, Curated 3-Service Preview, *Your Smile, Our Priority* Mosaic Gallery, *The Fun Zone for Little Smiles* Showcase, Interactive 5-Chapter Themed Story, and Compact Appointment/Location CTA.
- **Zero Orphaned Assets or Copy:** Every one of the 51 original assets and every paragraph from `docs/content-inventory.md` maps cleanly to `/`, `/our-services`, `/about-us`, `/contact`, or `*`.
- **Source Discrepancies Preserved:** `"Sedation Dentistry"` cosmetic copy, `/our-services` `93307` ZIP discrepancy, `2025` copyright year, and `+92` JSON-LD phone typo remain untouched pending business-owner approval.
