import React from "react";
import "./StayDetails.css"; // Assurez-vous d'importer le fichier CSS
import { useParams } from "react-router-dom";
import stays from "../../data/stays.json";
import Collapse from "../../components/Collapse/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function StayDetails() {
  const { id } = useParams();
  const stay = stays.find((s) => s.id === id);

  // Convertir le rating en icônes d'étoiles
  const ratingStars = [];
  for (let i = 0; i < stay.rating; i++) {
    ratingStars.push(
      <FontAwesomeIcon key={i} icon={solidStar} style={{ color: "#FF6060" }} />
    );
  }
  for (let i = stay.rating; i < 5; i++) {
    ratingStars.push(
      <FontAwesomeIcon key={i} icon={solidStar} style={{ color: "#E3E3E3" }} />
    );
  }

  const tags = stay.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));

  return (
    <div className="navigation">
      <div className="image-gallery"></div>
      <div className="title-and-host">
        <p className="title">{stay.title}</p>
        <div className="host-and-picture">
          <p className="host-name">{stay.host.name}</p>
          <img
            src={stay.host.picture}
            alt={stay.host.name}
            className="host-image"
          />
        </div>
      </div>
      <div className="location-rating">
        <p className="location">{stay.location}</p>
        <div className="rating">{ratingStars}</div>
      </div>
      <div className="tags">{tags}</div>
      <div className="menu-buttons-flex">
        <Collapse
          title="Description"
          description={<p className="description">{stay.description}</p>}
          className="custom-collapse"
        />

        <Collapse
          title="Équipements"
          description={<p className="equipments">{stay.equipments}</p>}
          className="custom-collapse"
        />
      </div>
    </div>
  );
}

export default StayDetails;
