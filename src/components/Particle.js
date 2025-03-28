import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 300, 
            density: {
              enable: true,
              value_area: 1300, 
            },
          },
          line_linked: {
            enable: false, 
          },
          move: {
            direction: "none", 
            speed: 0.07, 
          },
          size: {
            value: 2, 
            random: true, 
          },
          opacity: {
            value: 0.8,
            random: true, 
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3, 
            },
          },
          color: {
            value: ["#ffffff", "#00aaff", "#aa00ff"],
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1, 
            },
          },
        },
        retina_detect: true, 
      }}
    />
  );
}

export default Particle;
