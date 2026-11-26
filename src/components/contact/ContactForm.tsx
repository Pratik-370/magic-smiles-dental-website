import { useState, type FormEvent } from 'react';
import { CONTACT_FORM_DATA, CONTACT_LOCATION } from '../../data/contact';
import { Button } from '../common/Button';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [deliveryNotice, setDeliveryNotice] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setEmailError(CONTACT_FORM_DATA.requiredEmailError);
      setDeliveryNotice(null);
      return;
    }

    setEmailError(null);
    setDeliveryNotice(CONTACT_FORM_DATA.unconnectedNotice);
  };

  return (
    <div className="contact-form-card">
      <h2 id="contact-form-heading" className="contact-form-card__title">
        {CONTACT_FORM_DATA.title}
      </h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__field">
          <label htmlFor="contact-name">{CONTACT_FORM_DATA.nameLabel}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">{CONTACT_FORM_DATA.emailLabel}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={emailError ? 'true' : 'false'}
            aria-describedby={emailError ? 'contact-email-error' : undefined}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(null);
            }}
            autoComplete="email"
          />
          {emailError && (
            <p id="contact-email-error" role="alert" className="contact-form__error">
              {emailError}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-message">{CONTACT_FORM_DATA.messageLabel}</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {deliveryNotice && (
          <div role="status" className="contact-form__notice">
            <p>{deliveryNotice}</p>
            <p className="contact-form__notice-phone">
              Direct phone:{' '}
              <a href={CONTACT_LOCATION.phoneHref}>{CONTACT_LOCATION.phoneDisplay}</a>
            </p>
          </div>
        )}

        <p className="contact-form__legal">
          This site is protected by reCAPTCHA and the Google{' '}
          <a
            href={CONTACT_FORM_DATA.recaptchaPrivacyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href={CONTACT_FORM_DATA.recaptchaTermsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{' '}
          apply.
        </p>

        <div className="contact-form__actions">
          <Button type="submit" variant="primary">
            {CONTACT_FORM_DATA.submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}
