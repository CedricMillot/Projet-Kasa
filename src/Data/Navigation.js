import React, { useState } from 'react';
import './Data-css/Navigation.css'; 

function Navigation() {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);

  return (
    <div className="navigation">
      <div className="banner">
        {/* Votre contenu de la bannière ici */}
      </div>
      <div className="image-gallery">
        {/* Votre galerie d'images ici */}
        {/* Par exemple, vous pouvez afficher les images dans une liste */}
      </div>
      <div className="menu-buttons-container">
        <div>
          <label
            htmlFor="menu1"
            onClick={() => setMenu1Open(!menu1Open)}
            className="menu-button-Nav" 
          >
            Description
          </label>
          {menu1Open && <p>Explication pour le Menu 1</p>}
        </div>
        <div>
          <label
            htmlFor="menu2"
            onClick={() => setMenu2Open(!menu2Open)}
            className="menu-button-Nav"
          >
            Équipements
          </label>
          {menu2Open && <p>Explication pour le Menu 2</p>}
        </div>
      </div>
    </div>
  );
}

export default Navigation;