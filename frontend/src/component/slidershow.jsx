import { useState, useCallback, useEffect, useRef } from 'react';
import '../styles/slidershow.css';


export default function Slidershow({ pictures = [], title = '' }) {
  const [index, setIndex] = useState(0);
  const hasMany = pictures?.length > 1;
  const containerRef = useRef(null);

  const go = useCallback(
    (dir) => {
      if (!hasMany) return;
      setIndex((i) => (i + dir + pictures.length) % pictures.length);
    },
    [hasMany, pictures.length]
  );

  // Clavier ← → // 
  useEffect(() => {
    const onKey = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.matches(':focus-within')) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // swipe mobile //
  const startX = useRef(0);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    const threshold = 30;
    if (dx > threshold) go(-1);
    else if (dx < -threshold) go(1);
  };

  if (!pictures?.length) return null;

  return (
    <div
      className="carousel"
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carrousel"
    >
      <img
        className="carousel__img"
        src={pictures[index]}
        alt={`${title} - photo ${index + 1}`}
      />

      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Image précédente"
            className="carousel__btn carousel__btn--prev"
            onClick={() => go(-1)}
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Image suivante"
            className="carousel__btn carousel__btn--next"
            onClick={() => go(1)}
          >
            ›
          </button>

          <div className="carousel__counter">
            {index + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}