import { NavLink, useLocation } from 'react-router-dom';

interface RoutePlaceholderProps {
  title: string;
  routePath: string;
  description: string;
  isNotFound?: boolean;
}

const ROUTES = [
  { path: '/', label: 'Home (/)' },
  { path: '/our-services', label: 'Our Services (/our-services)' },
  { path: '/about-us', label: 'About Us (/about-us)' },
  { path: '/contact', label: 'Contact (/contact)' },
];

export function RoutePlaceholder({
  title,
  routePath,
  description,
  isNotFound = false,
}: RoutePlaceholderProps) {
  const location = useLocation();

  return (
    <div className="foundation-shell">
      <section className="foundation-card" aria-labelledby="placeholder-heading">
        <span className="foundation-badge">
          {isNotFound ? '404 Fallback Placeholder' : 'Page Pending Implementation'}
        </span>
        <h1 id="placeholder-heading">{title}</h1>
        <p>{description}</p>
        <p>
          <strong>Expected route:</strong> <code>{routePath}</code>
          <br />
          <strong>Active URL:</strong> <code>{location.pathname}</code>
          <br />
          <strong>Status:</strong> Shared layout active; full page implementation pending approval
        </p>

        <nav className="foundation-nav" aria-label="Configured routes">
          {ROUTES.map((route) => (
            <NavLink key={route.path} to={route.path} end={route.path === '/'}>
              {route.label}
            </NavLink>
          ))}
        </nav>
      </section>
    </div>
  );
}
