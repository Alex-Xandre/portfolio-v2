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
      <div class="star"></div>
      <div class="meteor-1"></div>
      <div class="meteor-2"></div>
      <div class="meteor-3"></div>
      <div class="meteor-4"></div>
      <div class="meteor-5"></div>
      <div class="meteor-6"></div>
      <div class="meteor-7"></div>
      <div class="meteor-8"></div>
      <div class="meteor-9"></div>
      <div class="meteor-10"></div>
      <div class="meteor-11"></div>
      <div class="meteor-12"></div>
      <div class="meteor-13"></div>
      <div class="meteor-14"></div>
      <div class="meteor-15"></div>

      {Project.map((proj, index) => {
        return (
          <div className="project" data-aos="flip-left" key={index}>
            <img src={proj.img} alt="screenshot" />
            <div className="overlay overlayLeft">
              <h1>{proj.title}</h1>
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
