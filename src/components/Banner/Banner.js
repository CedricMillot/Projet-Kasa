import React from "react";
import "./Banner.css";

function Banner({ imageSrc, texte }) {
  return (
    <div className="bande">
      <img className="bande-image" src={imageSrc} alt="Bande" />
      {texte && <p>{texte}</p>}
    </div>
  );
}

export default Banner;
