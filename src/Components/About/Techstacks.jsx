import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiRubyonrails,
  SiTailwindcss,
  SiNetlify,
  SiPostgresql,
  SiWebpack,
  SiPostman
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRubyonrails />
            <h5>Ruby on Rails</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiPostgresql />
            <h5>Postgresql</h5>
          </div>
          <div>
            <SiWebpack />
            <h5>Webpack</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
        </div>
      </div>
    </>
  );
};