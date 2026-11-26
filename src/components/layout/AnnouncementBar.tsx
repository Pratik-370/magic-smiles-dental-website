import { SITE_INFO } from '../../data/site';
import './layout.css';

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="site-container announcement-bar__inner">
        <p className="announcement-bar__text">{SITE_INFO.announcementText}</p>
        <a
          className="announcement-bar__phone"
          href={SITE_INFO.phoneHref}
          aria-label={`Call Magic Smiles Dental at ${SITE_INFO.phoneDisplay}`}
        >
          Call {SITE_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
