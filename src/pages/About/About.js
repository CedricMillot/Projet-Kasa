import "./About.css";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <div className="menu-collapse">
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
        <Collapse
          title={"Respect"}
          description={
            <p>
              La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title={"Service"}
          description={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          }
        />
        <Collapse
          title={"Sécurité"}
          description={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire,cela permet à nos équipes de vérifier que
              les standars sont bien respectés. Nous organison également des
              ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </div>
    </div>
  );
}

export default About;
