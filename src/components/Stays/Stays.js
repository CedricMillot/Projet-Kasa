import React from "react";
import { Link } from "react-router-dom";
import "./Stays.css";
import stays from "../../data/stays.json";

function Stays() {
  return (
    <div className="image-container">
      {stays.map((item, index) => (
        <Link key={index} to={`/${item.id}`}>
          <div className="image">
            <img
              src={item.cover}
              alt={`Cover ${index}`}
              className="thumbnail"
            />
            <div className="title-style">
              <p className="image-title">{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Stays;
