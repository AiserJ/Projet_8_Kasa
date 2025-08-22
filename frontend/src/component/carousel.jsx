import { useState } from "react";

export default function Carousel({ pictures = [], title = "" }) {
  const [index, setIndex] = useState(0);
  if (!pictures?.length) return null;

  const go = (dir) => {
    setIndex((i) => (i + dir + pictures.length) % pictures.length);
  };


  /// Récupération d'image, condition si plus d'une seule photo, go bouton
  /// et le compteur ///

  return (
    <div className="carousel">
      <img
        className="carousel__img"
        src={pictures[index]}
        alt={`${title} - photo ${index + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <button
            aria-label="Précédent"
            className="carousel__btn carousel__btn--prev"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            aria-label="Suivant"
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