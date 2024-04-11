import React from "react";
import "./Contact.css";
import { ThemeContext } from "../../Context/theme";
import { AiOutlineMedium, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title">
          Let&apos;s <span className="pink">Connect</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
          >
            <a
              href="https://www.linkedin.com/in/naledi-dikgale/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Naledi-Dikgale"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="github" />
            </a>
            <a
              href="mailto:nalediaccc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="email" />
            </a>
            <a
              href="https://wellfound.com/u/naledi-dikgale"
              target="_blank"
              rel="noreferrer"
            >
              <FaAngellist className="angellist" />
            </a>
            <a
              href="https://medium.com/@naledi1"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMedium className="medium" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};