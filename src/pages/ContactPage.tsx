import { useEffect } from 'react';
import { Button } from '../components/common/Button';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInformation } from '../components/contact/ContactInformation';
import { CONTACT_LOCATION, CONTACT_META } from '../data/contact';
import '../components/contact/contact.css';

export function ContactPage() {
  useEffect(() => {
    document.title = CONTACT_META.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', CONTACT_META.description);
  }, []);

  return (
    <div className="contact-page">
      <ContactHero />

      <section
        id="contact-form-section"
        className="contact-workspace"
        aria-labelledby="contact-form-heading"
      >
        <div className="site-container contact-workspace__grid">
          <ContactForm />
          <ContactInformation />
        </div>
      </section>

      <section className="contact-map-section" aria-labelledby="contact-map-heading">
        <div className="site-container">
          <div className="contact-map-header">
            <div>
              <span className="contact-map-header__eyebrow">Bakersfield Office Map</span>
              <h2 id="contact-map-heading" className="contact-map-header__title">
                {CONTACT_LOCATION.businessName}
              </h2>
              <p className="contact-map-header__addr">{CONTACT_LOCATION.address}</p>
            </div>
            <Button
              variant="primary"
              href={CONTACT_LOCATION.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT_LOCATION.directionsLabel}
            </Button>
          </div>

          <div className="contact-map-frame-wrap">
            <div className="contact-map-stage">
              <div className="contact-map-fallback" aria-hidden="true">
                <span className="contact-map-fallback__eyebrow">Map Location Reference</span>
                <p className="contact-map-fallback__title">{CONTACT_LOCATION.businessName}</p>
                <p className="contact-map-fallback__addr">{CONTACT_LOCATION.address}</p>
                <p className="contact-map-fallback__coords">35.3999541, -118.9496722</p>
              </div>
              <iframe
                className="contact-map-iframe"
                title={CONTACT_LOCATION.mapTitle}
                src={CONTACT_LOCATION.mapEmbedUrl}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-map-caption">
              <span>{CONTACT_LOCATION.address}</span>
              <span>35.3999541, -118.9496722</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
