import { useState } from 'react';
import type { GalleryImageItem } from '../../data/home';
import { SectionHeading } from '../common/SectionHeading';
import './home.css';

interface PriorityMosaicGalleryProps {
  id: string;
  eyebrow: string;
  heading: string;
  images: readonly GalleryImageItem[];
}

export function PriorityMosaicGallery({
  id,
  eyebrow,
  heading,
  images,
}: PriorityMosaicGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const total = images.length;
  const active = images[selectedIndex];

  const handlePrev = () => setSelectedIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % total);

  return (
    <section className="home-section" aria-labelledby={`${id}-heading`}>
      <div className="site-container">
        <div className="priority-mosaic__header">
          <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} title={heading} align="left" />
          <div className="priority-mosaic__nav">
            <button
              type="button"
              className="mosaic-arrow-btn"
              onClick={handlePrev}
              aria-label={`Previous photo in ${heading}`}
            >
              ←
            </button>
            <span className="priority-mosaic__counter" aria-live="polite">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="mosaic-arrow-btn"
              onClick={handleNext}
              aria-label={`Next photo in ${heading}`}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="priority-mosaic"
          role="region"
          aria-roledescription="gallery"
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
          <figure className="priority-mosaic__featured">
            <div className="priority-mosaic__stage">
              <img
                src={active.src}
                alt={active.alt}
                className="priority-mosaic__featured-img"
              />
            </div>
            <figcaption className="priority-mosaic__caption">{active.alt}</figcaption>
          </figure>

          <div className="priority-mosaic__grid" role="group" aria-label="Select patient smile photo">
            {images.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  aria-pressed={isSelected}
                  aria-label={`Select photo ${idx + 1}: ${item.alt}`}
                  className={`priority-mosaic__tile${
                    isSelected ? ' priority-mosaic__tile--active' : ''
                  }`}
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="priority-mosaic__tile-img"
                  />
                  <span className="priority-mosaic__tile-index">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
