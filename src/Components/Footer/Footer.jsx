import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h5 className="footer">
           Copyright ©2024 Naledi Dikgale{" "}
           - All rights Reserved
            </h5>
          </div>
        </a>
      </div>
    </>
  );
};