import React, { useState } from "react";
import { useParams } from "react-router-dom";
import stays from "../../data/stays.json";
import "./Carousel.scss";

const Carousel = () => {
  const { id } = useParams();
  const accommodation = stays.find((stay) => stay.id === id);
  const { pictures } = accommodation;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  if (!accommodation) {
    return <div className="carousel-error">Hébergement introuvable</div>;
  }

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
