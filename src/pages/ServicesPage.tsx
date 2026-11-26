import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ServiceDirectoryNav } from '../components/services/ServiceDirectoryNav';
import { ServiceNoteForm } from '../components/services/ServiceNoteForm';
import {
  MOBILE_OUTREACH_PROGRAM,
  SERVICES_CLINICAL_LIST,
  SERVICES_CONTACT_SECTION,
  SERVICES_HERO,
  SERVICES_META,
} from '../data/services';
import '../components/services/services.css';

export function ServicesPage() {
  useEffect(() => {
    document.title = SERVICES_META.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', SERVICES_META.description);
  }, []);

  const [generalService, orthoService, implantsService, sedationService, pediatricService] =
    SERVICES_CLINICAL_LIST;

  return (
    <div className="services-page">
      {/* 1. Services Hero */}
      <section className="services-hero" aria-labelledby="services-hero-heading">
        <div className="site-container services-hero__grid">
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">{SERVICES_HERO.eyebrow}</span>
            <h1 id="services-hero-heading" className="services-hero__title">
              {SERVICES_HERO.heading}
            </h1>
            <p className="services-hero__subtitle">{SERVICES_HERO.intro}</p>
            <p className="services-hero__meta">{SERVICES_HERO.paymentSummary}</p>
            <div className="services-hero__actions">
              <Button variant="gold" to={SERVICES_HERO.primaryCtaTo}>
                {SERVICES_HERO.primaryCtaLabel}
              </Button>
              <a className="ui-inline-link" href={SERVICES_HERO.phoneHref}>
                Call {SERVICES_HERO.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="services-hero__media">
            <div className="services-hero__frame">
              <img
                className="services-hero__img"
                src={SERVICES_HERO.imageSrc}
                alt={SERVICES_HERO.imageAlt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick-Jump Treatment & Outreach Directory */}
      <ServiceDirectoryNav />

      {/* 3. Feature Split — 01 General & Preventive Dentistry */}
      <section
        className="services-band services-band--subtle"
        aria-labelledby="general-preventive-heading"
      >
        <div className="site-container">
          <article
            id={generalService.anchorId}
            className="service-feature-split service-anchor-target"
          >
            <div className="service-feature-split__body">
              <div className="service-meta-row">
                <span className="service-num-badge">{generalService.index}</span>
                <span className="service-category-label">{generalService.categoryBadge}</span>
              </div>
              <h2 id="general-preventive-heading" className="service-title">
                {generalService.title}
              </h2>
              <p className="service-copy">
                <strong>{generalService.leadTerm}</strong>
                {generalService.descriptionBody}
              </p>
              <ul className="service-highlights" aria-label="Included preventive care">
                {generalService.highlights.map((item) => (
                  <li key={item} className="service-highlight-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-feature-split__media">
              <img
                className="service-feature-split__img"
                src={generalService.imageSrc}
                alt={generalService.imageAlt}
                style={{ objectPosition: generalService.imagePosition }}
              />
            </div>
          </article>
        </div>
      </section>

      {/* 4. Paired Treatment Grid — 02 Orthodontics & 03 Dental Implants & Restoration */}
      <section
        className="services-band services-band--ivory"
        aria-label="Orthodontics and Dental Implants & Restoration"
      >
        <div className="site-container service-pair-grid">
          {[orthoService, implantsService].map((service) => (
            <article
              key={service.id}
              id={service.anchorId}
              className="service-pair-card service-anchor-target"
            >
              <div className="service-pair-card__media">
                <img
                  className="service-pair-card__img"
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  style={{ objectPosition: service.imagePosition }}
                />
              </div>
              <div className="service-pair-card__body">
                <div className="service-meta-row">
                  <span className="service-num-badge">{service.index}</span>
                  <span className="service-category-label">{service.categoryBadge}</span>
                </div>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-copy">
                  <strong>{service.leadTerm}</strong>
                  {service.descriptionBody}
                </p>
                <ul className="service-highlights" aria-label={`${service.title} highlights`}>
                  {service.highlights.map((item) => (
                    <li key={item} className="service-highlight-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Alternating Editorial Showcase — 04 Sedation Dentistry & 05 Pediatric Dentistry */}
      <section
        className="services-band services-band--parchment"
        aria-label="Specialized Smile and Pediatric Care"
      >
        <div className="site-container service-editorial-stack">
          <article
            id={sedationService.anchorId}
            className="service-editorial-row service-anchor-target"
          >
            <div className="service-editorial-row__media">
              <img
                className="service-editorial-row__img"
                src={sedationService.imageSrc}
                alt={sedationService.imageAlt}
                style={{ objectPosition: sedationService.imagePosition }}
              />
            </div>
            <div className="service-editorial-row__body">
              <div className="service-meta-row">
                <span className="service-num-badge">{sedationService.index}</span>
                <span className="service-category-label">{sedationService.categoryBadge}</span>
              </div>
              <h2 className="service-title">{sedationService.title}</h2>
              <p className="service-copy">
                <strong>{sedationService.leadTerm}</strong>
                {sedationService.descriptionBody}
              </p>
              <ul className="service-highlights" aria-label="Included treatments">
                {sedationService.highlights.map((item) => (
                  <li key={item} className="service-highlight-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            id={pediatricService.anchorId}
            className="service-editorial-row service-editorial-row--reverse service-anchor-target"
          >
            <div className="service-editorial-row__media">
              <img
                className="service-editorial-row__img"
                src={pediatricService.imageSrc}
                alt={pediatricService.imageAlt}
                style={{ objectPosition: pediatricService.imagePosition }}
              />
            </div>
            <div className="service-editorial-row__body">
              <div className="service-meta-row">
                <span className="service-num-badge">{pediatricService.index}</span>
                <span className="service-category-label">{pediatricService.categoryBadge}</span>
              </div>
              <h2 className="service-title">{pediatricService.title}</h2>
              <p className="service-copy">
                <strong>{pediatricService.leadTerm}</strong>
                {pediatricService.descriptionBody}
              </p>
              <ul className="service-highlights" aria-label="Pediatric care focus">
                {pediatricService.highlights.map((item) => (
                  <li key={item} className="service-highlight-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* 6. Community Outreach Showcase — 06 Mobile Dental Outreach Programs */}
      <section
        className="services-band services-band--plum"
        aria-labelledby="mobile-outreach-heading"
      >
        <div className="site-container">
          <article
            id={MOBILE_OUTREACH_PROGRAM.anchorId}
            className="outreach-showcase service-anchor-target"
          >
            <div className="outreach-showcase__media">
              <img
                className="outreach-showcase__img"
                src={MOBILE_OUTREACH_PROGRAM.imageSrc}
                alt={MOBILE_OUTREACH_PROGRAM.imageAlt}
              />
            </div>
            <div className="outreach-showcase__body">
              <div className="service-meta-row">
                <span className="service-num-badge">{MOBILE_OUTREACH_PROGRAM.index}</span>
                <span className="service-category-label">
                  {MOBILE_OUTREACH_PROGRAM.categoryBadge}
                </span>
              </div>
              <h2 id="mobile-outreach-heading" className="outreach-showcase__title">
                {MOBILE_OUTREACH_PROGRAM.title}
              </h2>
              <p className="outreach-showcase__copy">
                <strong>{MOBILE_OUTREACH_PROGRAM.leadTerm}</strong>
                {MOBILE_OUTREACH_PROGRAM.descriptionBody}
              </p>
              <ul className="outreach-showcase__pillars" aria-label="Community outreach scope">
                {MOBILE_OUTREACH_PROGRAM.pillars.map((pillar) => (
                  <li key={pillar} className="outreach-showcase__pillar">
                    {pillar}
                  </li>
                ))}
              </ul>
              <Link className="ui-inline-link ui-inline-link--on-dark" to={MOBILE_OUTREACH_PROGRAM.ctaTo}>
                {MOBILE_OUTREACH_PROGRAM.ctaLabel} →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 7. Bottom Visit Us Today! & Expandable Note Section */}
      <section className="services-contact-section" aria-labelledby="services-contact-heading">
        <div className="site-container">
          <div className="services-contact-card">
            <div>
              <span className="services-contact-card__eyebrow">
                {SERVICES_CONTACT_SECTION.eyebrow}
              </span>
              <h2 id="services-contact-heading" className="services-contact-card__title">
                {SERVICES_CONTACT_SECTION.heading}
              </h2>
              <p className="services-contact-card__desc">
                {SERVICES_CONTACT_SECTION.description}
              </p>

              <div className="services-contact-card__info">
                <h3 className="services-contact-card__biz">
                  {SERVICES_CONTACT_SECTION.businessName}
                </h3>
                <p className="services-contact-card__addr">{SERVICES_CONTACT_SECTION.address}</p>
                <a
                  className="services-contact-card__phone"
                  href={SERVICES_CONTACT_SECTION.phoneHref}
                >
                  {SERVICES_CONTACT_SECTION.phoneDisplay}
                </a>
              </div>
            </div>

            <ServiceNoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
