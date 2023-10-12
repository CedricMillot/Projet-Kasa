import React from "react";
import { Link } from "react-router-dom";
import "./Stays.css";
import stays from "../../data/stays.json";

function Stays() {
  // Accédez à la liste des couvertures dans votre objet JSON

  return (
    <div className="image-container">
      {stays.map((item, index) => (
        <Link key={index} to={`/${item.id}`}>
          {" "}
          {/* Ajoutez le lien */}
          <div className="image">
            <img
              src={item.cover}
              alt={`Cover ${index}`}
              className="thumbnail"
            />
            <p className="image-title">{item.title}</p>{" "}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Stays;
