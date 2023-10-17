import React from "react";
import Banner from "../../components/Banner/Banner";
import Stays from "../../components/Stays/Stays";

function Home() {
  return (
    <div>
      <Banner
        imageSrc="/Paysage.jpg"
        texte="Chez vous, 
        partout et ailleurs"
      />
      <Stays />
    </div>
  );
}

export default Home;
