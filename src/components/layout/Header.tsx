import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_INFO } from '../../data/site';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import './layout.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <div className="site-container site-header__inner">
          <Link to="/" className="site-header__brand" aria-label="Magic Smiles Dental Home">
            <img
              src={SITE_INFO.logoSrc}
              alt={SITE_INFO.logoAlt}
              width={50}
              height={50}
              className="site-header__logo"
            />
            <span className="site-header__brand-text">
              <span className="site-header__brand-name">Magic Smiles</span>
              <span className="site-header__brand-sub">Dental &amp; Orthodontics</span>
            </span>
          </Link>

          <div className="site-header__desktop-actions">
            <Navigation />
          </div>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileNavigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
