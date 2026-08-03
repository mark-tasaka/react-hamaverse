import React, { useState, useEffect, useCallback } from 'react';
import './css/Hero.css';

import slide1 from './img/hero/image_1.png';
import slide2 from './img/hero/image_2.png';
import slide3 from './img/hero/image_3.png';
import slide4 from './img/hero/image_4.png';
import slide5 from './img/hero/image_5.png';
import slide6 from './img/hero/image_6.png';

interface Slide {
  src: string;
  alt: string;
}

const SLIDES: Slide[] = [
  { src: slide1, alt: 'G.I. Joe: A Real American Hero Issues 1 and 10' },
  { src: slide2, alt: 'G.I. Joe: A Real American Hero Issues 21 and 26' },
  { src: slide3, alt: 'G.I. Joe: A Real American Hero Issues 63 and 66' },
  { src: slide4, alt: 'G.I. Joe: A Real American Hero Issues 95 and 96' },
  { src: slide5, alt: 'G.I. Joe: A Real American Hero Issues 91 and 104' },
  { src: slide6, alt: 'G.I. Joe: A Real American Hero Compendium 1 and Volume 1' },
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
      </div>

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
    </section>
  );
};

export default Hero;