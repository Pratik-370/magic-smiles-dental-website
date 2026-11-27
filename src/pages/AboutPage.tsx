import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  ABOUT_CLOSING_CTA,
  ABOUT_COMMUNITY_CHAPTER,
  ABOUT_HERO,
  ABOUT_META,
  ABOUT_PRACTICE_CHAPTERS,
  TRUSTED_PROVIDER_SECTION,
} from '../data/about';
import { SITE_INFO } from '../data/site';
import '../components/about/about.css';

export function AboutPage() {
  useEffect(() => {
    document.title = ABOUT_META.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', ABOUT_META.description);
  }, []);

  const topPair = TRUSTED_PROVIDER_SECTION.pillars.slice(0, 2);
  const spotlightPillar = TRUSTED_PROVIDER_SECTION.pillars[2];
  const bottomTrio = TRUSTED_PROVIDER_SECTION.pillars.slice(3, 6);

  return (
    <div className="about-page">
      {/* 1. Full-Width Asymmetric Split Practice Masthead */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero__split">
          <div className="about-hero__copy-col">
            <div className="about-hero__content">
              <span className="about-hero__eyebrow">{ABOUT_HERO.eyebrow}</span>
              <h1 id="about-hero-heading" className="about-hero__title">
                {ABOUT_HERO.heading}
              </h1>
              <p className="about-hero__subheading">{ABOUT_HERO.subheading}</p>
              <p className="about-hero__lead">{ABOUT_HERO.introParagraph}</p>
              <div className="about-hero__actions">
                <Button variant="gold" to={ABOUT_HERO.primaryCtaTo}>
                  {ABOUT_HERO.primaryCtaLabel}
                </Button>
                <Link className="ui-inline-link" to={ABOUT_HERO.secondaryCtaTo}>
                  {ABOUT_HERO.secondaryCtaLabel} →
                </Link>
              </div>
            </div>
          </div>

          <aside className="about-hero__facts-col" aria-label="Bakersfield office facts">
            <div className="about-hero__facts-inner">
              <h2 className="about-hero__fact-title">{SITE_INFO.businessName}</h2>
              <dl className="about-hero__fact-list">
                <div className="about-hero__fact-row">
                  <dt>Location</dt>
                  <dd>{SITE_INFO.addressHomeAndFooter}</dd>
                </div>
                <div className="about-hero__fact-row">
                  <dt>Hours</dt>
                  <dd>{SITE_INFO.announcementText}</dd>
                </div>
                <div className="about-hero__fact-row">
                  <dt>Phone</dt>
                  <dd>
                    <a className="about-hero__phone" href={SITE_INFO.phoneHref}>
                      {SITE_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="about-hero__fact-row">
                  <dt>Options</dt>
                  <dd>Medi-Cal, PPO insurance, and cash</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Founding Story Chapters — 01 Expert Dental Care & 02 Our Technology */}
      <section
        className="about-band about-band--subtle"
        aria-label="Practice philosophy and technology"
      >
        <div className="site-container about-chapters-stack">
          {ABOUT_PRACTICE_CHAPTERS.map((chapter, idx) => (
            <article
              key={chapter.id}
              id={chapter.anchorId}
              className={
                idx % 2 === 1
                  ? 'about-chapter-row about-chapter-row--reverse'
                  : 'about-chapter-row'
              }
            >
              <div className="about-chapter-row__body">
                <div className="about-chapter__meta">
                  <span className="about-chapter__num">{chapter.index}</span>
                  <span className="about-chapter__eyebrow">{chapter.eyebrow}</span>
                </div>
                <h2 className="about-chapter__title">{chapter.heading}</h2>
                <p className="about-chapter__copy">{chapter.body}</p>
              </div>

              <div className="about-chapter-row__media">
                <img
                  className="about-chapter-row__img"
                  src={chapter.imageSrc}
                  alt={chapter.imageAlt}
                  style={{ objectPosition: chapter.imagePosition }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Deep Plum Narrative Spotlight — 03 Our Community */}
      <section className="about-band about-band--plum" aria-labelledby="about-community-heading">
        <div className="site-container about-community-grid">
          <div className="about-community__media" id={ABOUT_COMMUNITY_CHAPTER.anchorId}>
            <img
              className="about-community__img"
              src={ABOUT_COMMUNITY_CHAPTER.imageSrc}
              alt={ABOUT_COMMUNITY_CHAPTER.imageAlt}
              style={{ objectPosition: ABOUT_COMMUNITY_CHAPTER.imagePosition }}
            />
          </div>

          <div className="about-community__body">
            <div className="about-chapter__meta">
              <span className="about-chapter__num">{ABOUT_COMMUNITY_CHAPTER.index}</span>
              <span className="about-chapter__eyebrow">{ABOUT_COMMUNITY_CHAPTER.eyebrow}</span>
            </div>
            <h2 id="about-community-heading" className="about-community__title">
              {ABOUT_COMMUNITY_CHAPTER.heading}
            </h2>
            <p className="about-community__copy">{ABOUT_COMMUNITY_CHAPTER.body}</p>
            <div className="about-community__actions">
              <Link
                className="ui-inline-link ui-inline-link--on-dark"
                to="/our-services#mobile-dental-outreach-programs"
              >
                Mobile Dental Outreach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trusted Dental Care Provider — 2 + 1 + 3 Editorial Magazine Showcase */}
      <section
        className="about-band about-band--parchment"
        aria-labelledby="trusted-provider-heading"
      >
        <div className="site-container">
          <div className="trusted-header">
            <SectionHeading
              id="trusted-provider-heading"
              eyebrow={TRUSTED_PROVIDER_SECTION.eyebrow}
              title={TRUSTED_PROVIDER_SECTION.heading}
              align="left"
            />
          </div>

          <div className="trusted-mosaic">
            <div className="trusted-row-two">
              {topPair.map((pillar) => (
                <article key={pillar.id} id={pillar.id} className="trusted-pillar-card">
                  <div className="trusted-pillar-card__media">
                    <img
                      className="trusted-pillar-card__img"
                      src={pillar.imageSrc}
                      alt={pillar.imageAlt}
                      style={{ objectPosition: pillar.imagePosition }}
                    />
                  </div>
                  <div className="trusted-pillar-card__body">
                    <span className="trusted-pillar__index">{pillar.index}</span>
                    <h3 className="trusted-pillar__title">{pillar.heading}</h3>
                    <p className="trusted-pillar__copy">{pillar.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <article id={spotlightPillar.id} className="trusted-spotlight">
              <div className="trusted-spotlight__media">
                <img
                  className="trusted-spotlight__img"
                  src={spotlightPillar.imageSrc}
                  alt={spotlightPillar.imageAlt}
                  style={{ objectPosition: spotlightPillar.imagePosition }}
                />
              </div>
              <div className="trusted-spotlight__body">
                <span className="trusted-pillar__index">{spotlightPillar.index}</span>
                <h3 className="trusted-pillar__title">{spotlightPillar.heading}</h3>
                <p className="trusted-pillar__copy">{spotlightPillar.body}</p>
              </div>
            </article>

            <div className="trusted-row-three">
              {bottomTrio.map((pillar) => (
                <article key={pillar.id} id={pillar.id} className="trusted-pillar-card">
                  <div className="trusted-pillar-card__media">
                    <img
                      className="trusted-pillar-card__img"
                      src={pillar.imageSrc}
                      alt={pillar.imageAlt}
                      style={{ objectPosition: pillar.imagePosition }}
                    />
                  </div>
                  <div className="trusted-pillar-card__body">
                    <span className="trusted-pillar__index">{pillar.index}</span>
                    <h3 className="trusted-pillar__title">{pillar.heading}</h3>
                    <p className="trusted-pillar__copy">{pillar.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Appointment CTA */}
      <section className="about-cta-band-section" aria-labelledby="about-closing-heading">
        <div className="site-container">
          <div className="about-cta-band">
            <div className="about-cta-band__main">
              <span className="about-cta-band__eyebrow">{ABOUT_CLOSING_CTA.eyebrow}</span>
              <h2 id="about-closing-heading" className="about-cta-band__title">
                {ABOUT_CLOSING_CTA.heading}
              </h2>
              <p className="about-cta-band__copy">{ABOUT_CLOSING_CTA.description}</p>
            </div>

            <div className="about-cta-band__actions">
              <Button variant="gold" to={ABOUT_CLOSING_CTA.primaryCtaTo}>
                {ABOUT_CLOSING_CTA.primaryCtaLabel}
              </Button>
              <Link
                className="ui-inline-link ui-inline-link--on-dark"
                to={ABOUT_CLOSING_CTA.secondaryCtaTo}
              >
                {ABOUT_CLOSING_CTA.secondaryCtaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
