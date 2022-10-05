import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  const particlesInit = React.useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    //await console.log(container);
  }, []);

  return (
    <header className="header">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          opacity: 0.3,
          fpsLimit: 80,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#20afff",
            },
            links: {
              color: "#20afff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <section className="hero_section">
        <img
          src="https://res.cloudinary.com/dgtgmqx08/image/upload/v1664201431/avatar/mainimage-removebg-preview_pqlleo.png"
          alt="logo"
        />
      </section>

      <section className="hero_description">
        <div className="title">
          <h1>
            {theme === "light" ? (
              <Typewriter
                options={{
                  strings: "Front-end developer",
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            ) : (
              <Typewriter
                options={{
                  strings: [
                    "Xcrypt Aces Head Developer and co-founder",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            )}
          </h1>
          {/* <h2>
           A 22 year old developer who found his passion on programming, based
            on Luna, La Union
          </h2> */}
          <h2>
            Don't limit your challenges, challenge your limits. It is always
            impossible until its done.
          </h2>
          <div className="hero_options">
            <a
              href="https://www.linkedin.com/in/alexander-micua-04657a217/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>Hire a freelancer</button>
            </a>
            {/* <button className='call_btn'>Schedule a call</button> */}
            <br id="projects" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
