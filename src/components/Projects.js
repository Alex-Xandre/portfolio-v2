import React, { useEffect } from "react";
import { Project } from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <section className="project_section" data-aos="fade-up">
      <h1>
        <span>&#60;</span> My Projects <span> &#47;&#62;</span>
      </h1>
      {Project.map((proj, index) => {
        return (
          <div className="project" data-aos="flip-left" key={index}>
            <img src={proj.img} alt="screenshot" />
            <div className="overlay overlayLeft">
              <h1>
                <span>&#60;</span> {proj.title} <span>&#47;&#62; </span>
              </h1>
              <h2>{proj.description}</h2>
              <h2>
                Tech Stack used: <span>{proj.tech}</span>
              </h2>
              <button>
                <a href={proj.url} target="_blank" rel="noreferrer">
                  {proj.btn_txt}
                </a>
              </button>
            </div>
          </div>
        );
      })}
      <br id="about" />
    </section>
  );
};

export default Projects;
