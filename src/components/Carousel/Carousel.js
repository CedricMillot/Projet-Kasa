import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialise un état local pour suivre l'index de l'image actuellement affichée.

  // Fonction pour passer à l'image suivante.
  const goToNext = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Fonction pour passer à l'image précédente.
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1);
    }
  };

  // Affiche la galerie d'images.
  return (
    <div className="image-gallery">
      <img
        src={pictures[currentIndex]}
        alt={`Gallery ${currentIndex + 1}`}
        className="carousel-image"
      />
      {pictures.length > 1 ? (
        <img
          src="/Vector-left.png"
          alt="Previous"
          onClick={goToPrevious}
          className="icon-button icon-left"
        />
      ) : null}
      {pictures.length > 1 ? (
        <img
          src="/Vector-right.png"
          alt="Next"
          onClick={goToNext}
          className="icon-button icon-right"
        />
      ) : null}
      {pictures.length > 1 ? (
        <span className="counter">
          {currentIndex + 1}/{pictures.length}
        </span>
      ) : null}
    </div>
  );
};

export default Carousel;
