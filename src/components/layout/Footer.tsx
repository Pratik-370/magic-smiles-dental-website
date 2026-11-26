import { Link } from 'react-router-dom';
import { NAV_ITEMS, SITE_INFO } from '../../data/site';
import './layout.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__main">
          <nav aria-label="Footer navigation">
            <ul className="site-footer__nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__info">
            <p className="site-footer__biz">{SITE_INFO.businessName}</p>
            <p className="site-footer__address">{SITE_INFO.addressHomeAndFooter}</p>
            <p className="site-footer__address">
              <a href={SITE_INFO.phoneHref} className="site-footer__phone">
                {SITE_INFO.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{SITE_INFO.copyright}</p>
          <p>{SITE_INFO.designedBy}</p>
        </div>
      </div>
    </footer>
  );
}
