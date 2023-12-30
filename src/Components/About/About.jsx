import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Naledi Dikgale</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
            Based in Cape Town South Africa, I love to design and code things from scratch. I love swimming and traveling.
            I can help you build a product, feature or website. Look through some of my work and experience!
            If you like what you see and have a project you need coded, don&apos;t hesitate to contact me.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Naledi-Dikgale"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:nalediaccc@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="www.linkedin.com/in/naledi-dikgale"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1wR3kXk9uqbYAIzUEHH7A88pr0xJ_-VsMspL9PcTyViE/edit?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};