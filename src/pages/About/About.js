import React, { useState } from "react";
import "./About.css";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const [menu3Open, setMenu3Open] = useState(false);
  const [menu4Open, setMenu4Open] = useState(false);

  return (
    <div>
      <Banner imageSrc="/Paysage2.jpg" />
      <div className="menu-container">
        <Collapse
          title={"Fiabilité"}
          description={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité
              totale.Les photos sont conformes aux logements,et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />
        <div>
          <label
            htmlFor="menu2"
            onClick={() => setMenu2Open(!menu2Open)}
            className="menu-button" // Appliquer la classe CSS
          >
            Respect
          </label>
          {menu2Open && (
            <p>
              La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="menu3"
            onClick={() => setMenu3Open(!menu3Open)}
            className="menu-button" // Appliquer la classe CSS
          >
            Service
          </label>
          {menu3Open && (
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="menu4"
            onClick={() => setMenu4Open(!menu4Open)}
            className="menu-button" // Appliquer la classe CSS
          >
            Sécurité
          </label>
          {menu4Open && (
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire,cela permet à nos équipes de vérifier que
              les standars sont bien respectés. Nous organison également des
              ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
