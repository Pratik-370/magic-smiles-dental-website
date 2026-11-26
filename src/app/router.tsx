import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { RoutePlaceholder } from '../pages/RoutePlaceholder';
import { ServicesPage } from '../pages/ServicesPage';

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/our-services',
        element: <ServicesPage />,
      },
      {
        path: '/about-us',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: (
          <RoutePlaceholder
            title="Contact Us"
            routePath="/contact"
            description="Temporary placeholder for the Contact page. Scheduled for the next implementation stage."
          />
        ),
      },
      {
        path: '*',
        element: (
          <RoutePlaceholder
            title="Page Not Found"
            routePath="*"
            description="We can’t seem to find the page you’re looking for."
            isNotFound
          />
        ),
      },
    ],
  },
]);
