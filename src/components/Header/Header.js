import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  // Utilisez le chemin relatif vers le logo dans le dossier public
  const logoPath = process.env.PUBLIC_URL + "/LOGO.jpg";

  return (
    <header className="header">
      <div className="logo">
        <img src={logoPath} alt="LOGO" className="logo-image" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
