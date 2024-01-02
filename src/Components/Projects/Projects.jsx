import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiRubyonrails,
} from "react-icons/si";
import { projectsData } from "./projectConstants";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title pink">Projects</h2>
        <div className="allProjects">
          {projectsData.map((project, index) => (
            <div className="projectsContainer" >
              <div className="project">
                <div className="projectImageContainer">
                  <div>
                    <img src={project.imageSrc} alt={project.title} />
                  </div>
                </div>
                <div className="projectInfo">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div>
                    {project.stack.map((tech, techIndex) => {
                      const Icon = getIconComponent(tech);
                      return <Icon key={techIndex} />;
                    })}
                  </div>
                  <div>
                    <a
                      href={project.livePreviewLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live Preview
                      </span>
                    </a>
                    <a
                      href={project.viewCodeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const getIconComponent = (tech) => {
  switch (tech) {
    case 'html5':
      return SiHtml5;
    case 'css3':
      return SiCss3;
    case 'javascript':
      return SiJavascript;
    case 'react':
      return FaReact;
    case 'rubyonrails':
      return SiRubyonrails;
    case 'tailwindcss':
      return SiTailwindcss;
    default:
      return null;
  }
};
