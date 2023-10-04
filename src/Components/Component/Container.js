import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Css/Container.css';

// Importez votre fichier JSON (ajustez le chemin selon votre structure de fichiers)
import myData from './ApartmentDetails.json';

function Container() {
  // Accédez à la liste des couvertures dans votre objet JSON
  const covers = myData.map(item => item.cover).slice(0, 6);

  return (
    <div className="container">
      {/* Utilisez un conteneur avec flex-wrap */}
      <div className="image-container">
        {/* Parcourez les 6 premières couvertures et affichez-les en tant qu'éléments img avec des liens */}
        {covers.map((cover, index) => (
          <Link key={index} to="/Navigation"> {/* Ajoutez le lien */}
            <div className="image">
              <img
                src={cover}
                alt={`Cover ${index}`}
                className="thumbnail" // Ajoutez une classe CSS pour définir la taille de l'image
              />
            </div>
          </Link>
        ))}
      </div>
      {/* Vous pouvez également ajouter d'autres éléments ici */}
    </div>
  );
}

export default Container;