import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Header.css';

function Header() {
  // Utilisez le chemin relatif vers le logo dans le dossier public
  const logoPath = process.env.PUBLIC_URL + '/LOGO.jpg';

  return (
    <header className="header">
      <div className="logo">
       
        <img src={logoPath} alt="LOGO" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="link">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="link">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;