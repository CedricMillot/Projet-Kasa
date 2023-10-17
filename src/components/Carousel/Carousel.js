import React, { useState } from "react";
import { useParams } from "react-router-dom";
import stays from "../../data/stays.json";
import "./Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={goToPrevious}
        className="icon-button icon-left"
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={goToNext}
        className="icon-button icon-right"
      />
    </div>
  );
};

export default Carousel;
