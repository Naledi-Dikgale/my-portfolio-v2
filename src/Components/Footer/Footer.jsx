import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/logo.png";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className={"footer-container " + themename}>
      <div className="footer-section">
        <div className="logo-section">
          <img src={Image} alt="N" className="logo" />
          <h5 className="company-name">Naledi Dikgale</h5>
        </div>
      </div>
      <div className="footer-section">
        <div className="copyright">
          <p>Copyright © 2025 Naledi - All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
