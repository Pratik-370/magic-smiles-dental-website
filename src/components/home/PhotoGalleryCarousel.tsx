import { useState } from 'react';
import type { GalleryImageItem } from '../../data/home';
import { SectionHeading } from '../common/SectionHeading';
import './home.css';

interface PhotoGalleryCarouselProps {
  id: string;
  heading: string;
  eyebrow?: string;
  images: readonly GalleryImageItem[];
}

export function PhotoGalleryCarousel({
  id,
  heading,
  eyebrow,
  images,
}: PhotoGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const activeImage = images[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      className="home-section home-section--deep-plum"
      aria-labelledby={`${id}-heading`}
    >
      <div className="site-container">
        <div className="fun-zone__layout">
          <div className="fun-zone__sidebar">
            <SectionHeading
              id={`${id}-heading`}
              eyebrow={eyebrow}
              title={heading}
              align="left"
              tone="dark"
            />
            <p className="fun-zone__caption" aria-live="polite">
              {activeImage.alt}
            </p>
            <div className="fun-zone__controls">
              <button
                type="button"
                className="fun-zone__arrow-btn"
                onClick={handlePrev}
                aria-label={`Previous photo in ${heading}`}
              >
                ←
              </button>
              <span className="fun-zone__counter">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="fun-zone__arrow-btn"
                onClick={handleNext}
                aria-label={`Next photo in ${heading}`}
              >
                →
              </button>
            </div>
          </div>

          <div
            className="fun-zone__theater"
            role="region"
            aria-roledescription="carousel"
            aria-label={heading}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault();
                handlePrev();
              } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                handleNext();
              }
            }}
          >
            <div className="fun-zone__stage">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="fun-zone__image"
              />
            </div>

            <div className="fun-zone__thumbs" role="group" aria-label={`${heading} thumbnails`}>
              {images.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`fun-zone__thumb-btn${
                      isActive ? ' fun-zone__thumb-btn--active' : ''
                    }`}
                    aria-label={`View clinic photo ${idx + 1} of ${total}: ${item.alt}`}
                    aria-pressed={isActive}
                  >
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      className="fun-zone__thumb-img"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
