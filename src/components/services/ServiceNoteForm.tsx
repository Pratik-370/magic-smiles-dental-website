import { useState, type FormEvent } from 'react';
import { SERVICES_CONTACT_SECTION } from '../../data/services';
import { Button } from '../common/Button';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ServiceNoteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState<{ tone: 'error' | 'info'; text: string } | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setNotice(null);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setNotice(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setNotice({
        tone: 'error',
        text: 'Please enter a valid email address before submitting.',
      });
      return;
    }

    setNotice({
      tone: 'info',
      text: `Online message delivery is not yet connected in this preview. Please call ${SERVICES_CONTACT_SECTION.phoneDisplay} or use the Contact page to reach our clinic directly.`,
    });
  };

  return (
    <div className="services-note">
      <div className="services-note__actions">
        <Button to={SERVICES_CONTACT_SECTION.primaryCtaTo} variant="gold">
          {SERVICES_CONTACT_SECTION.primaryCtaLabel}
        </Button>
        <Button
          type="button"
          variant="inverse"
          aria-expanded={isOpen}
          aria-controls="services-note-panel"
          onClick={handleToggle}
        >
          {SERVICES_CONTACT_SECTION.toggleButtonLabel}
        </Button>
      </div>

      {isOpen && (
        <form
          id="services-note-panel"
          className="services-note__panel"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="services-note__panel-header">
            <h3 className="services-note__panel-title">{SERVICES_CONTACT_SECTION.formTitle}</h3>
          </div>

          <div className="services-note__fields">
            <div className="services-note__field">
              <label htmlFor="services-note-name">Name</label>
              <input
                id="services-note-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div className="services-note__field">
              <label htmlFor="services-note-email">Email*</label>
              <input
                id="services-note-email"
                type="email"
                required
                aria-required="true"
                aria-invalid={notice?.tone === 'error' ? 'true' : 'false'}
                aria-describedby={notice ? 'services-note-notice' : undefined}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (notice?.tone === 'error') setNotice(null);
                }}
                autoComplete="email"
              />
            </div>

            <div className="services-note__field services-note__field--full">
              <label htmlFor="services-note-message">Message</label>
              <textarea
                id="services-note-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {notice && (
            <p
              id="services-note-notice"
              role={notice.tone === 'error' ? 'alert' : 'status'}
              className={`services-note__notice services-note__notice--${notice.tone}`}
            >
              {notice.text}
            </p>
          )}

          <p className="services-note__legal">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            apply.
          </p>

          <div className="services-note__form-buttons">
            <Button type="submit" variant="primary">
              {SERVICES_CONTACT_SECTION.submitLabel}
            </Button>
            <Button type="button" variant="outline" onClick={handleCancel}>
              {SERVICES_CONTACT_SECTION.cancelLabel}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
