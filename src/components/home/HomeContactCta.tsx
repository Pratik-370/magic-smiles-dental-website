import { HOME_CONTACT_PREVIEW } from '../../data/home';
import { SITE_INFO } from '../../data/site';
import { Button } from '../common/Button';
import './home.css';

export function HomeContactCta() {
  return (
    <section className="home-section home-contact-cta-section" aria-labelledby="home-contact-cta-heading">
      <div className="site-container">
        <div className="contact-cta-band">
          <div className="contact-cta-band__main">
            <span className="contact-cta-band__eyebrow">{HOME_CONTACT_PREVIEW.eyebrow}</span>
            <h2 id="home-contact-cta-heading" className="contact-cta-band__title">
              {HOME_CONTACT_PREVIEW.heading}
            </h2>
            <p className="contact-cta-band__copy">
              We accept <strong>{HOME_CONTACT_PREVIEW.paymentHighlight}</strong>, so that
              high-quality care is accessible for every patient.
            </p>
            <div className="contact-cta-band__actions">
              <Button to={HOME_CONTACT_PREVIEW.ctaTo} variant="gold">
                {HOME_CONTACT_PREVIEW.primaryCtaLabel}
              </Button>
              <Button to={HOME_CONTACT_PREVIEW.ctaTo} variant="inverse">
                {HOME_CONTACT_PREVIEW.secondaryCtaLabel}
              </Button>
            </div>
          </div>

          <aside className="contact-cta-band__details" aria-label="Clinic location and phone">
            <h3 className="contact-cta-band__biz">{HOME_CONTACT_PREVIEW.businessTitle}</h3>
            <dl className="contact-cta-band__list">
              <div className="contact-cta-band__row">
                <dt>Address</dt>
                <dd>{HOME_CONTACT_PREVIEW.address}</dd>
              </div>
              <div className="contact-cta-band__row">
                <dt>Hours</dt>
                <dd>{HOME_CONTACT_PREVIEW.hours}</dd>
              </div>
              <div className="contact-cta-band__row">
                <dt>Telephone</dt>
                <dd>
                  <a href={HOME_CONTACT_PREVIEW.phoneHref} className="contact-cta-band__phone">
                    {HOME_CONTACT_PREVIEW.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={SITE_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-band__directions"
            >
              {HOME_CONTACT_PREVIEW.directionsLabel} →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
