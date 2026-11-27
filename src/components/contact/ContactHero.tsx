import { CONTACT_HERO } from '../../data/contact';

export function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-heading">
      <div className="contact-hero__split">
        <div className="contact-hero__copy-col">
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
        </div>

        <aside className="contact-hero__call-col" aria-label="Direct clinic call and hours">
          <div className="contact-hero__call-inner">
            <span className="contact-hero__card-label">Direct Appointment Line</span>
            <a className="contact-hero__phone-big" href={CONTACT_HERO.phoneHref}>
              {CONTACT_HERO.phoneDisplay}
            </a>
            <p className="contact-hero__card-meta">{CONTACT_HERO.hoursText}</p>
            <p className="contact-hero__card-addr">{CONTACT_HERO.address}</p>
            <a className="ui-inline-link ui-inline-link--on-dark" href="#contact-form-section">
              Send us message! ↓
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
