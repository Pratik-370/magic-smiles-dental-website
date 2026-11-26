import { useState } from 'react';
import type { GalleryImageItem } from '../../data/home';
import { SectionHeading } from '../common/SectionHeading';
import './home.css';

interface PhotoGalleryCarouselProps {
  id: string;
  heading: string;
  eyebrow?: string;
  images: readonly GalleryImageItem[];
  variant?: 'light' | 'dark';
}

export function PhotoGalleryCarousel({
  id,
  heading,
  eyebrow,
  images,
  variant = 'light',
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
      className={`home-section${variant === 'dark' ? ' home-section--subtle' : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="site-container">
        <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} title={heading} />

        <div
          className={`gallery-carousel${variant === 'dark' ? ' gallery-carousel--dark' : ''}`}
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
          <div className="gallery-carousel__stage">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="gallery-carousel__image"
            />
            <button
              type="button"
              className="gallery-carousel__arrow gallery-carousel__arrow--prev"
              onClick={handlePrev}
              aria-label={`Previous photo in ${heading}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-carousel__arrow gallery-carousel__arrow--next"
              onClick={handleNext}
              aria-label={`Next photo in ${heading}`}
            >
              ›
            </button>
          </div>

          <div className="gallery-carousel__meta" aria-live="polite">
            <p className="gallery-carousel__caption">{activeImage.alt}</p>
            <p className="gallery-carousel__counter">
              {activeIndex + 1} / {total}
            </p>
          </div>

          <div className="gallery-carousel__thumbs" role="group" aria-label={`${heading} thumbnails`}>
            {images.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`gallery-carousel__thumb-btn${
                    isActive ? ' gallery-carousel__thumb-btn--active' : ''
                  }`}
                  aria-label={`View photo ${idx + 1} of ${total}: ${item.alt}`}
                  aria-pressed={isActive}
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="gallery-carousel__thumb-img"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
