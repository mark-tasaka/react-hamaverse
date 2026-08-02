import React, { useState, useEffect, useCallback } from 'react';
import './css/Hero.css';

import slide1 from './img/hero/hero_1.jpg';
import slide2 from './img/hero/hero_2.jpg';
import slide3 from './img/hero/hero_3.jpg';
import slide4 from './img/hero/hero_4.jpg';
import slide5 from './img/hero/hero_5.jpg';
import slide6 from './img/hero/hero_6.jpg';
import slide7 from './img/hero/hero_7.jpg';
import slide8 from './img/hero/hero_8.jpg';
import slide9 from './img/hero/hero_9.jpg';

interface Slide {
  src: string;
  alt: string;
}

const SLIDES: Slide[] = [
  { src: slide1, alt: 'G.I. Joe: A Real American Hero – Featured Comic 1' },
  { src: slide2, alt: 'G.I. Joe: A Real American Hero – Featured Comic 2' },
  { src: slide3, alt: 'G.I. Joe: A Real American Hero – Featured Comic 3' },
  { src: slide4, alt: 'G.I. Joe: A Real American Hero – Featured Comic 4' },
  { src: slide5, alt: 'G.I. Joe: A Real American Hero – Featured Comic 5' },
  { src: slide6, alt: 'G.I. Joe: A Real American Hero – Featured Comic 6' },
  { src: slide7, alt: 'G.I. Joe: A Real American Hero – Featured Comic 7' },
  { src: slide8, alt: 'G.I. Joe: A Real American Hero – Featured Comic 8' },
  { src: slide9, alt: 'G.I. Joe: A Real American Hero – Featured Comic 9' },
];

const SLIDE_INTERVAL_MS = 6000;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const advance = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="hero" aria-label="Featured comic covers slideshow">
      <div className="hero-track">

        {SLIDES.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className={`hero-slide${i === activeIndex ? ' hero-slide--active' : ''}`}
            draggable={false}
          />
        ))}

        {/* ── Dot Navigation ── */}
        <div className="hero-dots" role="tablist" aria-label="Slideshow navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero-dot${i === activeIndex ? ' hero-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;