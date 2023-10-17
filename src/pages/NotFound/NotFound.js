import React from "react";
import { Link } from "react-router-dom"; // Si vous utilisez React Router pour gérer les routes
import "./NotFound.css"; // Importez le fichier SASS

const NotFound = () => {
  return (
    <div>
      <h1 className="not-found">404</h1>
      <p className="not-found-paragraph">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="link-to-home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
