import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { HomeContactSection } from '../components/home/HomeContactSection';
import { PhotoGalleryCarousel } from '../components/home/PhotoGalleryCarousel';
import { ThemedStoryViewer } from '../components/home/ThemedStoryViewer';
import {
  EXPERIENCE_MAGIC,
  FUN_ZONE_GALLERY,
  HOME_HERO,
  HOME_SERVICES,
  PRIORITY_GALLERY,
  WHY_CHOOSE,
} from '../data/home';
import '../components/home/home.css';

export function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="site-container home-hero__grid">
          <div className="home-hero__content">
            <span className="home-hero__eyebrow">Bakersfield, CA 93306</span>
            <h1 id="home-hero-title" className="home-hero__title">
              {HOME_HERO.heading}
            </h1>
            <p className="home-hero__subtagline">{HOME_HERO.subtagline}</p>
            <div className="home-hero__actions">
              <Button to={HOME_HERO.ctaTo} variant="gold">
                {HOME_HERO.ctaLabel}
              </Button>
              <a href={HOME_HERO.phoneHref} className="home-hero__phone">
                {HOME_HERO.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="home-hero__media">
            <img
              src={HOME_HERO.imageSrc}
              alt={HOME_HERO.imageAlt}
              className="home-hero__image"
            />
          </div>
        </div>
      </section>

      {/* 2. Your Smile, Our Priority Gallery */}
      <PhotoGalleryCarousel
        id="priority-gallery"
        heading={PRIORITY_GALLERY.heading}
        images={PRIORITY_GALLERY.images}
        variant="light"
      />

      {/* 3. Why Choose Magic Smiles Dental and Orthodontics */}
      <section className="home-section home-section--plum" aria-labelledby="why-choose-heading">
        <div className="site-container why-choose__grid">
          <div>
            <SectionHeading
              id="why-choose-heading"
              title={WHY_CHOOSE.heading}
              align="left"
              tone="dark"
            />
            <ul className="why-choose__list">
              {WHY_CHOOSE.bullets.map((bullet) => (
                <li key={bullet.id} className="why-choose__item">
                  {bullet.segments.map((segment, index) =>
                    segment.strong ? (
                      <strong key={index}>{segment.text}</strong>
                    ) : (
                      <span key={index}>{segment.text}</span>
                    ),
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-choose__emblem-frame">
            <img
              src={WHY_CHOOSE.imageSrc}
              alt={WHY_CHOOSE.imageAlt}
              className="why-choose__emblem"
            />
          </div>
        </div>
      </section>

      {/* 4. Our Services Overview */}
      <section className="home-section" aria-labelledby="home-services-heading">
        <div className="site-container">
          <SectionHeading id="home-services-heading" title={HOME_SERVICES.heading} />

          <div className="services-grid">
            {HOME_SERVICES.items.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card__media">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    loading="lazy"
                    className={`service-card__img${
                      service.cropPreset === 'doc-bus' ? ' service-card__img--doc-bus' : ''
                    }`}
                  />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Fun Zone for Little Smiles Gallery */}
      <PhotoGalleryCarousel
        id="fun-zone-gallery"
        heading={FUN_ZONE_GALLERY.heading}
        images={FUN_ZONE_GALLERY.images}
        variant="dark"
      />

      {/* 6. Experience the Magic of a Healthy Smile */}
      <section className="home-section home-section--plum" aria-labelledby="experience-magic-heading">
        <div className="site-container experience-magic__grid">
          <div className="experience-magic__media">
            <img
              src={EXPERIENCE_MAGIC.imageSrc}
              alt={EXPERIENCE_MAGIC.imageAlt}
              loading="lazy"
              className="experience-magic__img"
            />
          </div>

          <div>
            <SectionHeading
              id="experience-magic-heading"
              title={EXPERIENCE_MAGIC.heading}
              align="left"
              tone="dark"
            />
            <h3 className="experience-magic__subheading">{EXPERIENCE_MAGIC.subheading}</h3>
            {EXPERIENCE_MAGIC.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="experience-magic__copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Themed Dentistry Story Presentation (5 Picsart Slides) */}
      <ThemedStoryViewer />

      {/* 8. Contact Us & Map */}
      <HomeContactSection />
    </>
  );
}
