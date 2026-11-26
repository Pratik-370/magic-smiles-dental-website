# Asset Rights & Reuse Authorization Register — Magic Smiles Dental & Orthodontics

**Document Date:** 2026-11-26  
**Project:** Magic Smiles Dental & Orthodontics Website Reconstruction  
**Source Site:** https://magicsmilesdentalandortho.com/  

---

## 1. Recorded User-Provided Authorization Statement

> **"The business owner/mentor has confirmed permission to reuse the 28 Getty photographs and five Picsart themed-story slides in the Magic Smiles Dental & Orthodontics website recreation."**

This register records the above confirmation as reported by the project stakeholder while clearly separating confirmed information from unresolved licensing, hosting, and scope details. **Reported verbal/mentor confirmation is not represented as independent legal or copyright clearance.**

---

## 2. Confirmed vs. Unresolved Information

### Confirmed
- The business owner/mentor has verbally/informally confirmed permission to reuse:
  - The **28 GoDaddy-bundled Getty Images** (`isteam/getty/*`) collected from `magicsmilesdentalandortho.com`
  - The **5 Picsart themed-story slides** (`Picsart_25-10-11_*`) collected from the Home page
- Local development copies of all 33 assets are stored intact in `public/assets/` and are actively protected from accidental Git commits/pushes via `.gitignore`.
- The remaining 18 project assets (`3` brand logo/emblem files, `5` SIL OFL 1.1 Raleway `.woff2` fonts, `9` Fun Zone clinic interior photos, and `1` Mobile Dental Outreach RV photo) are cleared/tracked in Git (`d502fc4`).

### Unresolved Scope Questions (Require Formal Documentation Before Public Deployment or GitHub Push)
1. **Independent React Hosting:** Does the existing GoDaddy Getty license cover displaying the 28 Getty photographs on an independently hosted React website outside GoDaddy Website Builder?
2. **Presentation Adjustments (Crop/Resize/Format):** Is cropping, aspect-ratio framing, responsive resizing, or WebP/JPEG optimization permitted for both the 28 Getty photographs and the 5 Picsart slides?
3. **Local Development Copies:** Are local unwatermarked copies permitted on developer workstations during development and testing?
4. **Private GitHub Repository Storage & Backup:** Is committing and storing the 33 files in the private GitHub repository (`Pratik-370/magic-smiles-dental-website`) permitted?
5. **Public Production Deployment:** Is public production serving/distribution of all 33 assets authorized without GoDaddy CDN hosting?
6. **Attribution or Licensing Notices:** Are specific Getty Images credits, license IDs, or copyright notices required anywhere on the site or in metadata?
7. **Third-Party Imagery Inside Picsart Slides:** Slides 2–4 (`story-02`, `story-03`, `story-04`) contain third-party moodboard photography and `"COMPARABLES"` cartoon thumbnails (e.g., *Dora the Explorer*, *Swiper*, *Spike* / animated characters). Should these slides be displayed verbatim, cropped to remove `"COMPARABLES"`, or converted into clean original character cards?
8. **Duration or Geographic Restrictions:** Are there any term limits, domain restrictions, or territorial limits on the reported reuse permission?

---

## 3. Mandatory Protection Rules Currently Active

Until the 8 unresolved scope questions above are formally answered and approved:
- All **33 protected assets** and **`docs/source-reference/`** remain excluded in `.gitignore`.
- None of the 33 protected assets are staged or pushed to GitHub.
- Original asset files inside `public/assets/` are **never modified, overwritten, or deleted** (presentation framing/cropping is handled non-destructively via CSS only).
- The website will not be publicly deployed.

---

## 4. Protected Assets Inventory (33 Files)

### A. GoDaddy-Bundled Getty Images (28 Assets)

| # | Local Asset Path | Original Source URL | Source Page & Section | Third-Party / Reuse Notes |
|---|---|---|---|---|
| 1 | `public/assets/home/hero/hero-children-smiling-circle.jpg` | `https://img1.wsimg.com/isteam/getty/2096480418` | Home — Hero (`HEADER_SECTION`); All pages `og:image`/`twitter:image` | GoDaddy-bundled Getty photo `#2096480418`; external React hosting scope unverified |
| 2 | `public/assets/home/priority-gallery/priority-01.jpg` | `https://img1.wsimg.com/isteam/getty/2224873667` | Home — `"Your Smile, Our Priority"` Slide 1 | GoDaddy-bundled Getty photo `#2224873667` |
| 3 | `public/assets/home/priority-gallery/priority-02.jpg` | `https://img1.wsimg.com/isteam/getty/1369227710` | Home — `"Your Smile, Our Priority"` Slide 2 | GoDaddy-bundled Getty photo `#1369227710` |
| 4 | `public/assets/home/priority-gallery/priority-03.jpg` | `https://img1.wsimg.com/isteam/getty/469218682` | Home — `"Your Smile, Our Priority"` Slide 3 | GoDaddy-bundled Getty photo `#469218682` |
| 5 | `public/assets/home/priority-gallery/priority-04.jpg` | `https://img1.wsimg.com/isteam/getty/104822454` | Home — `"Your Smile, Our Priority"` Slide 4 | GoDaddy-bundled Getty photo `#104822454` |
| 6 | `public/assets/home/priority-gallery/priority-05.jpg` | `https://img1.wsimg.com/isteam/getty/187053188` | Home — `"Your Smile, Our Priority"` Slide 5 | GoDaddy-bundled Getty photo `#187053188` |
| 7 | `public/assets/home/priority-gallery/priority-06.jpg` | `https://img1.wsimg.com/isteam/getty/1307905857` | Home — `"Your Smile, Our Priority"` Slide 6 | GoDaddy-bundled Getty photo `#1307905857` |
| 8 | `public/assets/home/services-cards/home-service-general-preventive.jpg` | `https://img1.wsimg.com/isteam/getty/1512061804` | Home — `"OUR SERVICES"` Card 1 (`General and Preventive Dentistry`) | GoDaddy-bundled Getty photo `#1512061804` |
| 9 | `public/assets/home/services-cards/home-service-orthodontics.jpg` | `https://img1.wsimg.com/isteam/getty/1129200700` | Home — `"OUR SERVICES"` Card 2 (`Orthodontics`) | GoDaddy-bundled Getty photo `#1129200700` |
| 10 | `public/assets/home/services-cards/home-service-dental-implants.jpg` | `https://img1.wsimg.com/isteam/getty/2163954768` | Home — `"OUR SERVICES"` Card 3 (`Dental Implants`) | GoDaddy-bundled Getty photo `#2163954768` |
| 11 | `public/assets/home/services-cards/home-service-sedation-dentistry.jpg` | `https://img1.wsimg.com/isteam/getty/1030913578` | Home — `"OUR SERVICES"` Card 4 (`Sedation Dentistry`) | GoDaddy-bundled Getty photo `#1030913578` |
| 12 | `public/assets/home/services-cards/home-service-tooth-extractions.jpg` | `https://img1.wsimg.com/isteam/getty/187963930` | Home — `"OUR SERVICES"` Card 5 (`Tooth Extractions`) | GoDaddy-bundled Getty photo `#187963930` |
| 13 | `public/assets/home/experience-magic-family.jpg` | `https://img1.wsimg.com/isteam/getty/1455980269` | Home — `"Experience the Magic of a Healthy Smile"` | GoDaddy-bundled Getty photo `#1455980269` |
| 14 | `public/assets/services/services-general-preventive.jpg` | `https://img1.wsimg.com/isteam/getty/2159249241` | Our Services — Card 1 (`General & Preventive Dentistry`) | GoDaddy-bundled Getty photo `#2159249241` |
| 15 | `public/assets/services/services-orthodontics.jpg` | `https://img1.wsimg.com/isteam/getty/2161791135` | Our Services — Card 2 (`Orthodontics`) | GoDaddy-bundled Getty photo `#2161791135` |
| 16 | `public/assets/services/services-implants-restoration.jpg` | `https://img1.wsimg.com/isteam/getty/1919979072` | Our Services — Card 3 (`Dental Implants & Restoration`) | GoDaddy-bundled Getty photo `#1919979072` |
| 17 | `public/assets/services/services-sedation-dentistry.jpg` | `https://img1.wsimg.com/isteam/getty/1443316535` | Our Services — Card 4 (`Sedation Dentistry`) | GoDaddy-bundled Getty photo `#1443316535` |
| 18 | `public/assets/services/services-pediatric-dentistry.jpg` | `https://img1.wsimg.com/isteam/getty/479233495` | Our Services — Card 5 (`Pediatric Dentistry`) | GoDaddy-bundled Getty photo `#479233495` |
| 19 | `public/assets/services/services-contact-child-exam.jpg` | `https://img1.wsimg.com/isteam/getty/2149252378` | Our Services — `"Contact Us"` right photo | GoDaddy-bundled Getty photo `#2149252378` |
| 20 | `public/assets/about/about-expert-dental-care.jpg` | `https://img1.wsimg.com/isteam/getty/2207746963` | About Us — Section 1 Row 1 (`Expert Dental Care`) | GoDaddy-bundled Getty photo `#2207746963` |
| 21 | `public/assets/about/about-our-technology.jpg` | `https://img1.wsimg.com/isteam/getty/2007369895` | About Us — Section 1 Row 2 (`Our Technology`) | GoDaddy-bundled Getty photo `#2007369895` |
| 22 | `public/assets/about/about-our-community.jpg` | `https://img1.wsimg.com/isteam/getty/2183439400` | About Us — Section 1 Row 3 (`Our Community`) | GoDaddy-bundled Getty photo `#2183439400` |
| 23 | `public/assets/about/provider-comprehensive-services.jpg` | `https://img1.wsimg.com/isteam/getty/90201159` | About Us — Section 2 Card 1 (`Comprehensive Dental Services`) | GoDaddy-bundled Getty photo `#90201159` |
| 24 | `public/assets/about/provider-state-of-the-art-tech.jpg` | `https://img1.wsimg.com/isteam/getty/1483189188` | About Us — Section 2 Card 2 (`State-of-the-Art Technology`) | GoDaddy-bundled Getty photo `#1483189188` |
| 25 | `public/assets/about/provider-friendly-staff.jpg` | `https://img1.wsimg.com/isteam/getty/2181986289` | About Us — Section 2 Card 3 (`Friendly and Experienced Staff`) | GoDaddy-bundled Getty photo `#2181986289` |
| 26 | `public/assets/about/provider-flexible-scheduling.jpg` | `https://img1.wsimg.com/isteam/getty/1288230336` | About Us — Section 2 Card 4 (`Convenient and Flexible Scheduling`) | GoDaddy-bundled Getty photo `#1288230336` |
| 27 | `public/assets/about/provider-affordable-care.jpg` | `https://img1.wsimg.com/isteam/getty/2166227014` | About Us — Section 2 Card 5 (`Affordable Dental Care`) | GoDaddy-bundled Getty photo `#2166227014` |
| 28 | `public/assets/about/provider-patient-education.jpg` | `https://img1.wsimg.com/isteam/getty/2224054052` | About Us — Section 2 Card 6 (`Patient Education and Prevention`) | GoDaddy-bundled Getty photo `#2224054052` |

### B. Picsart Themed-Story Slides (5 Assets)

| # | Local Asset Path | Original Source URL | Source Page & Section | Third-Party / Reuse Notes |
|---|---|---|---|---|
| 29 | `public/assets/home/themed-story/story-01-magic-smiles-banner.png` | `https://img1.wsimg.com/isteam/ip/998de974-6c47-43ea-ba53-2432e8340766/Picsart_25-10-11_22-09-57-912.png` | Home — Themed Dentistry Story Slide 1 | Client-uploaded `Picsart` title banner (`Magic Smiles — a themed dentistry`) |
| 30 | `public/assets/home/themed-story/story-02-welcome-faraway-land.jpg` | `https://img1.wsimg.com/isteam/ip/998de974-6c47-43ea-ba53-2432e8340766/Picsart_25-10-11_22-10-17-499.jpg` | Home — Themed Dentistry Story Slide 2 | **Third-party concern:** Includes concept moodboard photographs (theme-park/fantasy architecture & library) |
| 31 | `public/assets/home/themed-story/story-03-billy-and-moe.jpg` | `https://img1.wsimg.com/isteam/ip/998de974-6c47-43ea-ba53-2432e8340766/Picsart_25-10-11_22-10-31-882.jpg` | Home — Themed Dentistry Story Slide 3 | **Third-party concern:** Includes `"COMPARABLES"` thumbnails of copyrighted animated characters (*Dora*, *Spike*, etc.) |
| 32 | `public/assets/home/themed-story/story-04-gummy-the-gum-goblin.jpg` | `https://img1.wsimg.com/isteam/ip/998de974-6c47-43ea-ba53-2432e8340766/Picsart_25-10-11_22-11-09-811.jpg` | Home — Themed Dentistry Story Slide 4 | **Third-party concern:** Includes `"COMPARABLES"` thumbnails of copyrighted cartoon villains (*Swiper*, etc.) |
| 33 | `public/assets/home/themed-story/story-05-quest-characters.jpg` | `https://img1.wsimg.com/isteam/ip/998de974-6c47-43ea-ba53-2432e8340766/Picsart_25-10-11_22-11-16-570.jpg` | Home — Themed Dentistry Story Slide 5 | Client-uploaded character quest slide (`Eddie Enamel`, `Carie the Floss Fairy`, `Dentin the Viking`) |

---

## 5. Non-Destructive Display Adjustments Applied During Local Development

- **Mobile Dental Outreach RV (`public/assets/services/mobile-dental-outreach-bus.jpg`):** Original image is a `943x2048` iPhone screenshot containing iOS status bar and photo viewer toolbar. Applied CSS `object-fit: cover` and vertical positioning (`object-position: 50% 42%` inside a `16:10` / `3:2` card frame) to display only the outreach RV without modifying the underlying image file.
- **Themed Story Slides (`story-01`–`story-05`):** Presented in an interactive 5-slide story viewer preserving full uncropped slide images (`object-fit: contain`) alongside verbatim HTML transcripts for accessibility.
