import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from '../../assets/pinkhair.png';


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="pink">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, My name is{" "}
                <span className="pink">Naledi Dikgale </span> and I am from{" "}
                <span className="pink">
                  {" "}
                  Cape Town, South Africa{" "}
                </span>
                . I have completed my graduation in Full Stack (Software Engineering)
                from{" "}
                <span className="pink">
                  Microverse
                </span>
                . I love to design and code things from scratch.{" "}
                <span className="pink">DIY</span>  And fix Broken things.
              </h4>
              <h4>Apart from Coding I love:</h4>
              <h4 className="pink">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Dogs{" "}
              </h4>
              <h4 className="pink">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              <h4 className="pink">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing 30 Seconds{" "}
              </h4>
              <h4 className="pink">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Swimming{" "}
              </h4>
              <h4 className="pink">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Hiking{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};