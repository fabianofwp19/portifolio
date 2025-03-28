import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Python Developer",
          "Content Creator",
          "JavaScript Developer",
          "Freelancer",
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
