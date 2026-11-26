import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/site';
import './layout.css';

export function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="site-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
