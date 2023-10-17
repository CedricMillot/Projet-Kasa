import React from "react";

import "./Footer.scss";

function Footer() {
  const logoPath = process.env.PUBLIC_URL + "/LOGO.png";
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
