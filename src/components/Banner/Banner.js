import React from "react";
import "./Banner.scss";

function Banner({ imageSrc, texte }) {
  return (
    <div className="banner">
      <img className="banner-picture" src={imageSrc} alt="Bande" />

      {texte && <p>{texte}</p>}
    </div>
  );
}

export default Banner;
