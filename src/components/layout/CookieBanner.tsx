import { useState } from 'react';
import { COOKIE_BANNER } from '../../data/site';
import { Button } from '../common/Button';
import './layout.css';

function readCookieConsent(): boolean {
  try {
    return window.localStorage.getItem(COOKIE_BANNER.storageKey) === 'accepted';
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean>(() => readCookieConsent());

  if (accepted) {
    return null;
  }

  const handleAccept = () => {
    try {
      window.localStorage.setItem(COOKIE_BANNER.storageKey, 'accepted');
    } catch {
      // Ignore storage failures in restricted browser contexts
    }
    setAccepted(true);
  };

  return (
    <aside
      className="cookie-banner"
      role="region"
      aria-labelledby="cookie-banner-title"
    >
      <h2 id="cookie-banner-title" className="cookie-banner__title">
        {COOKIE_BANNER.title}
      </h2>
      <p className="cookie-banner__text">{COOKIE_BANNER.message}</p>
      <Button
        variant="inverse"
        className="cookie-banner__btn"
        onClick={handleAccept}
      >
        {COOKIE_BANNER.acceptLabel}
      </Button>
    </aside>
  );
}
