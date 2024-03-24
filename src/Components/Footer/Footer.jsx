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
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";

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
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/naledi-dikgale/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin className="linkedin" />
            <span className="social-media-name">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Naledi-Dikgale"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <VscGithub className="github" />
            <span className="social-media-name">GitHub</span>
          </a>
          <a
            href="mailto:nalediaccc@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <CgMail className="email" />
            <span className="social-media-name">Email</span>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <div className="copyright">
          <p>Copyright © 2024 Naledi Dikgale - All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};