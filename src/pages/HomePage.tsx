import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { HomeContactCta } from '../components/home/HomeContactCta';
import { PhotoGalleryCarousel } from '../components/home/PhotoGalleryCarousel';
import { PriorityMosaicGallery } from '../components/home/PriorityMosaicGallery';
import { ThemedStoryViewer } from '../components/home/ThemedStoryViewer';
import {
  ABOUT_PREVIEW,
  FUN_ZONE_GALLERY,
  HOME_HERO,
  HOME_SERVICES_PREVIEW,
  PRIORITY_GALLERY,
  WHY_CHOOSE,
} from '../data/home';
import '../components/home/home.css';

export function HomePage() {
  useEffect(() => {
    document.title = 'Magic Smiles Dental and Orthodontics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Discover top-notch dental services for your family\'s oral health at Magic Smiles Dental and Ortho. Book your appointment today!'
      );
    }
  }, []);

  return (
    <div className="home-page">
      {/* 1. Full-Width Editorial Split-Bleed Hero */}
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero__split">
          <div className="home-hero__copy-col">
            <div className="home-hero__content">
              <span className="home-hero__eyebrow">{HOME_HERO.eyebrow}</span>
              <h1 id="home-hero-heading" className="home-hero__title">
                {HOME_HERO.heading}
              </h1>
              <p className="home-hero__subtitle">{HOME_HERO.subtagline}</p>
              <div className="home-hero__actions">
                <Button variant="gold" to={HOME_HERO.primaryCtaTo}>
                  {HOME_HERO.primaryCtaLabel}
                </Button>
                <Link className="ui-inline-link" to={HOME_HERO.secondaryCtaTo}>
                  {HOME_HERO.secondaryCtaLabel} →
                </Link>
              </div>
            </div>
          </div>

          <div className="home-hero__media-col">
            <img
              className="home-hero__img"
              src={HOME_HERO.imageSrc}
              alt={HOME_HERO.imageAlt}
            />
            <div className="home-hero__inset-emblem">
              <img
                className="home-hero__inset-img"
                src={HOME_HERO.insetEmblemSrc}
                alt={HOME_HERO.insetEmblemAlt}
              />
            </div>
          </div>
        </div>

        <div className="home-hero__fact-strip" aria-label="Clinic hours, location, and phone">
          <div className="site-container home-hero__fact-bar">
            <div className="home-hero__fact">
              <span className="home-hero__fact-label">Hours</span>
              <span className="home-hero__fact-value">
                Office hours Mon-Sat: 9:00AM - 6:00PM
              </span>
            </div>
            <div className="home-hero__fact">
              <span className="home-hero__fact-label">Location</span>
              <span className="home-hero__fact-value">
                2935 Oswell St. Bakersfield, CA 93306
              </span>
            </div>
            <div className="home-hero__fact">
              <span className="home-hero__fact-label">Call Clinic</span>
              <a className="home-hero__fact-value" href={HOME_HERO.phoneHref}>
                {HOME_HERO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Preview + Numbered "Why Choose Us?" Split */}
      <section
        className="home-section home-section--subtle"
        aria-labelledby="about-preview-heading"
      >
        <div className="site-container about-why-grid">
          <article className="about-preview-card">
            <div className="about-preview-card__media">
              <img
                className="about-preview-card__img"
                src={ABOUT_PREVIEW.imageSrc}
                alt={ABOUT_PREVIEW.imageAlt}
              />
            </div>
            <div className="about-preview-card__body">
              <span className="about-preview-card__eyebrow">{ABOUT_PREVIEW.eyebrow}</span>
              <h2 id="about-preview-heading" className="about-preview-card__title">
                {ABOUT_PREVIEW.heading}
              </h2>
              <p className="about-preview-card__subheading">{ABOUT_PREVIEW.subheading}</p>
              {ABOUT_PREVIEW.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="about-preview-card__copy">
                  {paragraph}
                </p>
              ))}
              <Link className="ui-inline-link" to={ABOUT_PREVIEW.ctaTo}>
                {ABOUT_PREVIEW.ctaLabel} →
              </Link>
            </div>
          </article>

          <div className="why-choose-panel" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="why-choose-panel__heading">
              {WHY_CHOOSE.heading}
            </h2>
            <ol className="why-choose-list">
              {WHY_CHOOSE.bullets.map((bullet, idx) => (
                <li key={bullet.id} className="why-choose-row">
                  <span className="why-choose-num" aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="why-choose-text">
                    {bullet.segments.map((segment, segIdx) =>
                      segment.strong ? (
                        <strong key={segIdx}>{segment.text}</strong>
                      ) : (
                        <span key={segIdx}>{segment.text}</span>
                      )
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. Curated Services Preview Showcase */}
      <section
        className="home-section home-section--ivory"
        aria-labelledby="home-services-heading"
      >
        <div className="site-container">
          <div className="services-preview-header">
            <SectionHeading
              id="home-services-heading"
              eyebrow={HOME_SERVICES_PREVIEW.eyebrow}
              title={HOME_SERVICES_PREVIEW.heading}
              align="left"
            />
            <Link className="ui-inline-link" to={HOME_SERVICES_PREVIEW.ctaTo}>
              {HOME_SERVICES_PREVIEW.ctaLabel} →
            </Link>
          </div>

          <div className="services-preview-grid">
            {HOME_SERVICES_PREVIEW.featured.map((service, idx) => (
              <article
                key={service.id}
                className={
                  idx === 0
                    ? 'service-preview-card service-preview-card--lead'
                    : 'service-preview-card'
                }
              >
                <div className="service-preview__media">
                  <img
                    className={
                      service.cropPreset === 'doc-bus'
                        ? 'service-preview__img service-preview__img--doc-bus'
                        : 'service-preview__img'
                    }
                    src={service.imageSrc}
                    alt={service.imageAlt}
                  />
                </div>
                <div className="service-preview__body">
                  <span className="service-preview__index">{service.index}</span>
                  <h3 className="service-preview__title">{service.title}</h3>
                  <p className="service-preview__excerpt">{service.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="services-preview__footer-strip">
            <div className="services-preview__more-group">
              <p className="services-preview__more-label">
                {HOME_SERVICES_PREVIEW.additionalServicesNote}
              </p>
              <div className="services-preview__chips" aria-label="Additional services on Our Services page">
                {HOME_SERVICES_PREVIEW.additionalServiceNames.map((name) => (
                  <span key={name} className="services-preview__chip">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Priority Editorial Mosaic Gallery */}
      <PriorityMosaicGallery
        id="priority-mosaic"
        eyebrow={PRIORITY_GALLERY.eyebrow}
        heading={PRIORITY_GALLERY.heading}
        images={PRIORITY_GALLERY.images}
      />

      {/* 5. Deep Plum Fun Zone Theater Showcase */}
      <PhotoGalleryCarousel
        id="fun-zone"
        eyebrow={FUN_ZONE_GALLERY.eyebrow}
        heading={FUN_ZONE_GALLERY.heading}
        images={FUN_ZONE_GALLERY.images}
      />

      {/* 6. Warm Parchment Themed Story Interactive Viewer */}
      <ThemedStoryViewer />

      {/* 7. Compact Visit Us Today! Appointment & Location CTA Band */}
      <HomeContactCta />
    </div>
  );
}
