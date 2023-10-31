import React from "react";
import "./StayDetails.scss";
import { useParams } from "react-router-dom";
import stays from "../../data/stays.json";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import NotFound from "../NotFound/NotFound";

function StayDetails() {
  const { id } = useParams();
  const stay = stays.find((s) => s.id === id);

  if (!stay) {
    return <NotFound />;
  }
  const ratingStars = [];
  for (let i = 0; i < stay.rating; i++) {
    ratingStars.push(
      <img key={i} src="/Star-red.png" className="Star" alt="Star" />
    );
  }
  for (let i = stay.rating; i < 5; i++) {
    ratingStars.push(
      <img key={i} src="/Star.png" className="Star" alt="Star" />
    );
  }

  const tags = stay.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));

  const equipmentList = stay.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div className="navigation">
      <Carousel pictures={stay.pictures} />

      <div className="description-picture">
        <div className="title-and-host">
          <p className="title">{stay.title}</p>
          <p className="location">{stay.location}</p>
          <p className="tags">{tags}</p>
        </div>
        <div className="Picture-rating">
          <div className="picture-name">
            <p className="host-name">{stay.host.name}</p>
            <img
              src={stay.host.picture}
              alt={stay.host.name}
              className="host-image"
            />
          </div>
          <p className="rating">{ratingStars}</p>
        </div>
      </div>
      <div className="menu-buttons-flex">
        <div className="collapse-button">
          <Collapse
            title="Description"
            description={<p className="description">{stay.description}</p>}
          />
        </div>
        <div className="collapse-button">
          <Collapse
            title="Équipements"
            description={<ul className="equipments-list">{equipmentList}</ul>}
          />
        </div>
      </div>
    </div>
  );
}

export default StayDetails;
