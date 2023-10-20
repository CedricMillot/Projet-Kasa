import React from "react";
import { Link } from "react-router-dom";
import "./Stays.scss";
import stays from "../../data/stays.json";

function Stays() {
  return (
    <div className="image-container">
      {stays.map((item, index) => (
        <Link className="stay-container" key={index} to={`/${item.id}`}>
          <p className="image-title">{item.title}</p>
          <div className="veil"></div>
          <img src={item.cover} alt={`Cover ${index}`} className="thumbnail" />
        </Link>
      ))}
    </div>
  );
}

export default Stays;
