import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fabiano</span>.
            <br />
            I am a passionate web developer with a love for building innovative solutions and exploring new technologies.
            <br />
            Besides development, I also have a passion for music, singing, and outdoor hiking.
            <br />
            <br />
            Here are a few things I enjoy doing in my spare time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music production using FL Studio
            </li>
            <li className="about-activity">
              <ImPointRight /> Vocal and singing study
            </li>
            <li className="about-activity">
              <ImPointRight /> To take long walks outdoors
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new programming challenges
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I can do anything!"{" "}
          </p>
          <footer className="blockquote-footer">Fabiano</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
