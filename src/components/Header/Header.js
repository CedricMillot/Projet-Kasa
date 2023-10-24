import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const logoPath = process.env.PUBLIC_URL + "/LOGO.jpg";

  return (
    <header className="header">
      <div className="logo">
        <img src={logoPath} alt="LOGO" className="logo-image" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="link">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="link">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
