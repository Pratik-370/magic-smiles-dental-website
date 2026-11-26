import { SERVICES_DIRECTORY_ITEMS } from '../../data/services';

export function ServiceDirectoryNav() {
  return (
    <nav className="services-directory" aria-label="Services and outreach program directory">
      <div className="site-container services-directory__inner">
        <span className="services-directory__label">Jump to:</span>
        <ul className="services-directory__list">
          {SERVICES_DIRECTORY_ITEMS.map((item) => (
            <li key={item.id} className="services-directory__item">
              <a className="services-directory__link" href={`#${item.anchorId}`}>
                <span className="services-directory__num" aria-hidden="true">
                  {item.index}
                </span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
