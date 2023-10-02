import React from 'react';

import './Css/Footer.css'; // Importez le fichier CSS

function Footer() {

  const logoPath = process.env.PUBLIC_URL + '/LOGO.png';
  return (
    <footer className="footer black-bg">
      <div className="footer-content">
        <div className="logo-footer">
          <img src={logoPath} alt="LOGO" className="white-logo" />
        </div>
        <p className="white-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;