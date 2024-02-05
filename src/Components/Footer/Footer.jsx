// import React from "react";
// import "./Footer.css";
// import { ThemeContext } from "../../Context/theme";

// export const Footer = () => {
//   const [{ themename }] = React.useContext(ThemeContext);

//   return (
//     <>
//       <div className={"section " + themename}>
//         <a href="/" rel="noreferrer" target="_blank">
//           <div className="footerBox">
//             <h5 className="footer">
//            Copyright ©2024 Naledi Dikgale{" "}
//            - All rights Reserved
//             </h5>
//           </div>
//         </a>
//       </div>
//     </>
//   );
// };

import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/logo.png";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className={"footer-container " + themename}>
      <div className="footer-section">
        {/* Logo and name section */}
        <div className="logo-section">
          <img src={Image} alt="N" className="logo" />
          <h5 className="company-name">Naledi Dikgale</h5>
        </div>
      </div>
      <div className="footer-section">
        {/* Social links section */}
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-section">
        {/* Copyright section */}
        <div className="copyright">
          <p>Copyright © 2024 Naledi Dikgale - All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
