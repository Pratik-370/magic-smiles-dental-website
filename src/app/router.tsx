import { createBrowserRouter } from 'react-router-dom';
import { RoutePlaceholder } from '../pages/RoutePlaceholder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RoutePlaceholder
        title="Magic Smiles Dental & Orthodontics — Home"
        routePath="/"
        description="Temporary route placeholder for the Home page. Original copy and verified local assets are documented in docs/ and ready for implementation upon approval."
      />
    ),
  },
  {
    path: '/our-services',
    element: (
      <RoutePlaceholder
        title="Our Services"
        routePath="/our-services"
        description="Temporary route placeholder for the Our Services page (6 dental & orthodontic service areas + Contact Us block)."
      />
    ),
  },
  {
    path: '/about-us',
    element: (
      <RoutePlaceholder
        title="About Us"
        routePath="/about-us"
        description="Temporary route placeholder for the About Us page (practice overview and 6-pillar care grid)."
      />
    ),
  },
  {
    path: '/contact',
    element: (
      <RoutePlaceholder
        title="Contact Us"
        routePath="/contact"
        description="Temporary route placeholder for the Contact page (appointment inquiry form, address, phone, and map)."
      />
    ),
  },
  {
    path: '*',
    element: (
      <RoutePlaceholder
        title="Page Not Found"
        routePath="*"
        description="Temporary fallback placeholder for unmatched routes, preserving the source /404 behavior."
        isNotFound
      />
    ),
  },
]);
