import { CONTACT_HERO } from '../../data/contact';
import { Button } from '../common/Button';

export function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-heading">
      <div className="site-container contact-hero__grid">
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">{CONTACT_HERO.eyebrow}</span>
          <h1 id="contact-hero-heading" className="contact-hero__title">
            {CONTACT_HERO.heading}
          </h1>
          <h2 className="contact-hero__subheading">{CONTACT_HERO.introHeading}</h2>
          {CONTACT_HERO.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="contact-hero__lead">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="contact-hero__card" aria-label="Direct clinic call and hours">
          <span className="contact-hero__card-label">Direct Appointment Line</span>
          <a className="contact-hero__phone-big" href={CONTACT_HERO.phoneHref}>
            {CONTACT_HERO.phoneDisplay}
          </a>
          <p className="contact-hero__card-meta">{CONTACT_HERO.hoursText}</p>
          <p className="contact-hero__card-addr">{CONTACT_HERO.address}</p>
          <div className="contact-hero__card-actions">
            <Button variant="gold" href={CONTACT_HERO.phoneHref}>
              Call {CONTACT_HERO.phoneDisplay}
            </Button>
            <Button variant="inverse" href="#contact-form-section">
              Send us message!
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
