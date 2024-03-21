import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/logo.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h5>
          <a href="#home" className="link">
            <span >
              <img src={Image} alt="N" className="roundImg" />
            </span>
            Naledi
          </a>
        </h5>
        <Navbar />
      </header>
    </>
  );
};