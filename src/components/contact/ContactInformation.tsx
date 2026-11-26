import { CONTACT_LOCATION } from '../../data/contact';
import { Button } from '../common/Button';

export function ContactInformation() {
  return (
    <aside className="contact-info-card" aria-labelledby="contact-info-heading">
      <span className="contact-info-card__eyebrow">Clinic Details</span>
      <h2 id="contact-info-heading" className="contact-info-card__title">
        {CONTACT_LOCATION.businessName}
      </h2>

      <dl className="contact-info-card__list">
        <div className="contact-info-card__row">
          <dt>Phone</dt>
          <dd>
            <a className="contact-info-card__phone" href={CONTACT_LOCATION.phoneHref}>
              {CONTACT_LOCATION.phoneDisplay}
            </a>
          </dd>
        </div>

        <div className="contact-info-card__row">
          <dt>Address</dt>
          <dd>{CONTACT_LOCATION.address}</dd>
        </div>

        <div className="contact-info-card__row">
          <dt>Hours</dt>
          <dd>{CONTACT_LOCATION.hoursText}</dd>
        </div>

        <div className="contact-info-card__row">
          <dt>Payment Options</dt>
          <dd>{CONTACT_LOCATION.paymentNote}</dd>
        </div>
      </dl>

      <div className="contact-info-card__actions">
        <Button
          variant="primary"
          href={CONTACT_LOCATION.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT_LOCATION.directionsLabel}
        </Button>
        <Button variant="outline" to="/our-services">
          Our Services
        </Button>
      </div>
    </aside>
  );
}
