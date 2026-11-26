import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, SITE_INFO } from '../../data/site';
import { Button } from '../common/Button';
import './layout.css';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="mobile-nav-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile site navigation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div id="mobile-nav-drawer" className="mobile-nav-drawer">
        <div className="mobile-nav-drawer__top">
          <span className="mobile-nav-drawer__title">{SITE_INFO.shortBusinessName}</span>
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-nav-drawer__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <nav aria-label="Mobile navigation links">
          <ul className="mobile-nav-drawer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `mobile-nav-drawer__link${
                      isActive ? ' mobile-nav-drawer__link--active' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav-drawer__actions">
          <Button to={SITE_INFO.headerCtaTo} variant="primary" onClick={onClose}>
            {SITE_INFO.headerCtaLabel}
          </Button>
          <Button href={SITE_INFO.phoneHref} variant="outline">
            Call {SITE_INFO.phoneDisplay}
          </Button>
          <p className="mobile-nav-drawer__hours">{SITE_INFO.announcementText}</p>
        </div>
      </div>
    </div>
  );
}
