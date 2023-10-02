import React, { useState } from 'react';
import './About.css'; // Importer le fichier CSS

function About() {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const [menu3Open, setMenu3Open] = useState(false);
  const [menu4Open, setMenu4Open] = useState(false);

  return (
    <div className='menu-container'>
      <div>
        <label
          htmlFor="menu1"
          onClick={() => setMenu1Open(!menu1Open)}
          className="menu-button" // Appliquer la classe CSS
        >
          FIabilité
        </label>
        {menu1Open && <p>Explication pour le Menu 1</p>}
      </div>
      <div>
        <label
          htmlFor="menu2"
          onClick={() => setMenu2Open(!menu2Open)}
          className="menu-button" // Appliquer la classe CSS
        >
          Respect
        </label>
        {menu2Open && <p>Explication pour le Menu 2</p>}
      </div>
      <div>
        <label
          htmlFor="menu3"
          onClick={() => setMenu3Open(!menu3Open)}
          className="menu-button" // Appliquer la classe CSS
        >
          Service 
        </label>
        {menu3Open && <p>Explication pour le Menu 3</p>}
      </div>
      <div>
        <label
          htmlFor="menu4"
          onClick={() => setMenu4Open(!menu4Open)}
          className="menu-button" // Appliquer la classe CSS
        >
          Sécurité
        </label>
        {menu4Open && <p>Explication pour le Menu 4</p>}
      </div>
    </div>
  );
}

export default About;