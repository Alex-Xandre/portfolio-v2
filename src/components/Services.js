import React, { useEffect } from "react";
import { Service } from "./Service";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <section className="services_section" id="service" data-aos="fade-up">
      <h1>
        <span>&#60;</span> Services <span> &#47;&#62;</span>
      </h1>

      {Service.map((serc, index) => {
        return (
          <div className={`services_item services_item`} key={index}>
            <h1>{serc.title}</h1>
            <h2> {serc.description}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
