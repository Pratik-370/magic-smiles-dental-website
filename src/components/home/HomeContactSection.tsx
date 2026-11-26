import { useState, type FormEvent } from 'react';
import { HOME_CONTACT } from '../../data/home';
import { SITE_INFO } from '../../data/site';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import './home.css';

export function HomeContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'error' | 'unconnected'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormState('error');
      setFeedback('Please enter a valid email address before sending.');
      return;
    }

    setFormState('unconnected');
    setFeedback(
      `Online form submission is not yet connected to a clinic backend. Please call us directly at ${HOME_CONTACT.phoneDisplay} to schedule your appointment.`,
    );
  };

  return (
    <section className="home-section" aria-labelledby="home-contact-heading">
      <div className="site-container">
        <SectionHeading id="home-contact-heading" title={HOME_CONTACT.heading} />

        <div className="home-contact__grid">
          <div className="home-contact__card">
            <h3 className="home-contact__card-title">{HOME_CONTACT.formTitle}</h3>
            <form className="home-contact__form" onSubmit={handleSubmit} noValidate>
              <div className="home-contact__field">
                <label htmlFor="home-contact-name" className="home-contact__label">
                  Name
                </label>
                <input
                  id="home-contact-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="home-contact__input"
                  autoComplete="name"
                />
              </div>

              <div className="home-contact__field">
                <label htmlFor="home-contact-email" className="home-contact__label">
                  Email*
                </label>
                <input
                  id="home-contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="home-contact__input"
                  autoComplete="email"
                />
              </div>

              <div className="home-contact__field">
                <label htmlFor="home-contact-message" className="home-contact__label">
                  Message
                </label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Message"
                  className="home-contact__textarea"
                />
              </div>

              {formState !== 'idle' && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`home-contact__notice${
                    formState === 'error' ? ' home-contact__notice--error' : ''
                  }`}
                >
                  {feedback}
                </div>
              )}

              <Button type="submit" variant="primary">
                {HOME_CONTACT.submitLabel}
              </Button>

              <p className="home-contact__legal">
                {HOME_CONTACT.recaptchaNoticePrefix}
                <a href={HOME_CONTACT.privacyUrl} target="_blank" rel="noopener noreferrer">
                  {HOME_CONTACT.privacyLabel}
                </a>{' '}
                and{' '}
                <a href={HOME_CONTACT.termsUrl} target="_blank" rel="noopener noreferrer">
                  {HOME_CONTACT.termsLabel}
                </a>{' '}
                apply.
              </p>
            </form>
          </div>

          <div className="home-contact__card home-contact__info">
            <h3 className="home-contact__card-title">{HOME_CONTACT.introHeading}</h3>
            <p className="home-contact__info-p">
              We accept <strong>{HOME_CONTACT.paymentHighlight}</strong>, so that high-quality care
              is accessible for every patient.
            </p>

            <h4 className="home-contact__biz">{HOME_CONTACT.businessTitle}</h4>
            <p className="home-contact__info-p">{HOME_CONTACT.address}</p>
            <p className="home-contact__info-p">
              📞 Call us at{' '}
              <a href={HOME_CONTACT.phoneHref} className="home-contact__phone-link">
                {HOME_CONTACT.phoneDisplay}
              </a>{' '}
              to schedule your appointment today!
            </p>

            <div>
              <Button
                href={SITE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {HOME_CONTACT.directionsLabel}
              </Button>
            </div>
          </div>
        </div>

        <div className="home-contact__map-wrap">
          <iframe
            title="Map of Magic Smiles Dental & Orthodontics at 2935 Oswell St, Bakersfield, CA 93306"
            src={SITE_INFO.mapEmbedUrl}
            className="home-contact__map"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
