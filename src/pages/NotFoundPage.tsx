import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Magic Smiles Dental';
  }, []);

  return (
    <section className="not-found-section" aria-labelledby="not-found-heading">
      <div className="site-container">
        <div className="not-found-card">
          <span className="not-found-card__eyebrow">Error 404</span>
          <h1 id="not-found-heading" className="not-found-card__title">
            Page Not Found
          </h1>
          <p className="not-found-card__copy">
            We can’t seem to find the page you’re looking for.
          </p>
          <div className="not-found-card__actions">
            <Button variant="primary" to="/">
              Go To Home Page
            </Button>
            <Button variant="outline" to="/contact">
              Contact Us
            </Button>
          </div>
          <nav className="not-found-card__links" aria-label="Main website sections">
            <Link to="/our-services">Our Services</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
