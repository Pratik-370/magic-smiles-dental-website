import { useState } from 'react';
import { THEMED_STORY } from '../../data/home';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import './home.css';

export function ThemedStoryViewer() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = THEMED_STORY.slides;
  const current = slides[slideIndex];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="home-section home-section--parchment"
      aria-labelledby="themed-story-heading"
    >
      <div className="site-container">
        <SectionHeading
          id="themed-story-heading"
          eyebrow={THEMED_STORY.eyebrow}
          title={THEMED_STORY.heading}
          align="left"
        />

        <div
          className="story-viewer"
          role="region"
          aria-roledescription="story viewer"
          aria-label="Magic Smiles themed dentistry story"
        >
          <div
            className="story-viewer__tabs"
            role="tablist"
            aria-label="Story chapters"
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
            {slides.map((slide, idx) => {
              const isSelected = idx === slideIndex;
              return (
                <button
                  key={slide.id}
                  id={`story-tab-${slide.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`story-panel-${slide.id}`}
                  className={`story-viewer__tab${
                    isSelected ? ' story-viewer__tab--active' : ''
                  }`}
                  onClick={() => setSlideIndex(idx)}
                >
                  <span className="story-viewer__tab-num">{slide.stepNumber}</span>
                  <span>{slide.stepLabel}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`story-panel-${current.id}`}
            className="story-viewer__panel"
            role="tabpanel"
            aria-labelledby={`story-tab-${current.id}`}
            aria-live="polite"
          >
            <div className="story-viewer__media">
              <img
                src={current.imageSrc}
                alt={current.imageAlt}
                className="story-viewer__img"
              />
            </div>

            <div className="story-viewer__transcript">
              <h3 className="story-viewer__slide-title">{current.title}</h3>
              {current.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="story-viewer__text">
                  {paragraph}
                </p>
              ))}

              {current.characters && (
                <div className="story-viewer__characters">
                  {current.characters.map((character) => (
                    <div key={character.name} className="story-viewer__character-card">
                      <h4 className="story-viewer__character-name">{character.name}</h4>
                      <ul className="story-viewer__character-traits">
                        {character.traits.map((trait) => (
                          <li key={trait}>{trait}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="story-viewer__controls">
            <Button variant="outline" onClick={handlePrev}>
              ← Previous Slide
            </Button>
            <span className="story-viewer__counter">
              Slide {slideIndex + 1} of {slides.length}
            </span>
            <Button variant="primary" onClick={handleNext}>
              Next Slide →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
