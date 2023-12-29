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
            <h4 className="footer">
            ©All rights Reserved{" "}
              Naledi Dikgale 2023
            </h4>
          </div>
        </a>
      </div>
    </>
  );
};