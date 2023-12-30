import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiRubyonrails,
  SiNextdotjs,
} from "react-icons/si";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title pink">Projects</h2>
        <div className="allProjects">
          <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img
                    src="wine.PNG"
                    alt="Wine Tasting Invite"
                  />
                </div>
              </div>
              <div className="projectInfo">
                <h2>Wine Tasting Invite</h2>
                <p>
                A Wine Tasting Party invitation is a two page website providing details about an extravagant wine tasting event.
                </p>
                <div>
                  <SiHtml5 />
                  <SiTailwindcss />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://naledi-dikgale.github.io/capstone1-project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href="https://github.com/Naledi-Dikgale/capstone1-project.git"
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
          {/* <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img
                    src="todolist.png"
                    alt="To Do List App"
                  />
                </div>
              </div>
              <div className="projectInfo">
                <h2>To Do List App</h2>
                <p>
                This Todo-list app was created using JavaScript, Items can be added, edited, stored and deleted from the list.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://naledi-dikgale.github.io/todo-list/dist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href="hhttps://github.com/Naledi-Dikgale/react-todo.git"
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
          </div> */}
          <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img src="math.PNG" alt="Math Magicians" />
                </div>
              </div>
              <div className="projectInfo">
                <h2>Math Magicians</h2>
                <p>
                A website for all fans of mathematics, it allows users to make simple calculations and displays random motivational quotes.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://naledis-calculator.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href="https://github.com/Naledi-Dikgale/math-magician-project"
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

          <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img
                    src="console.PNG"
                    alt="Console Hub"
                  />
                </div>
              </div>
              <div className="projectInfo">
                <h2>Console Hub</h2>
                <p>
                A Full Stack app for Gaming consoles rentals. It provides users with amazing experience and beautiful UI.
                </p>
                <div>
                  <FaReact />
                  <SiRubyonrails />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://consolehub.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href="https://github.com/stephenkati/gaming_console_reservation_front_end"
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
          <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img
                    src="stock.PNG"
                    alt="Stock Market App"
                  />
                </div>
              </div>
              <div className="projectInfo">
                <h2>Stock Market App</h2>
                <p>
                This is an application that displays a list of businesses and allows the user to filter and search for details of the business.
                </p>
                <div>
                  <SiJavascript />
                  <FaReact />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://stock-market-2xyl.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href="https://github.com/Naledi-Dikgale/react-capstone.git"
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
          {/* <div className="projectsContainer" data-aos="fade-right">
            <div className="project">
              <div className="projectImageContainer">
                <div>
                  <img
                    src=""
                    alt="Home Finder"
                  />
                </div>
              </div>
              <div className="projectInfo">
                <h2>Home Finder</h2>
                <p>
                Home Finder.
                </p>
                <div>
                  <SiRubyonrails />
                  <SiNextdotjs />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Preview
                    </span>
                  </a>
                  <a
                    href=""
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
          </div> */}
        </div>
      </div>
      
    </>
  );
};