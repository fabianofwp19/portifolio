import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hand_detection from "../../Assets/Projects/lorenz.png";
import telegram_button from "../../Assets/Projects/tele_bot.png";
import flags_main from "../../Assets/Projects/triade_telas.png";
import solar_simulation from "../../Assets/Projects/solar_system.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={flags_main}
              isBlog={false}
              title="Responsive Website Company"
              description="A fully responsive institutional website with integrated automations for WhatsApp communication and seamless self-service support."
              ghLink="https://github.com/fabianofwp19/Triade-Consig"
              demoLink="https://triadeconsig.com.br/"
            />
          </Col>
          
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={telegram_button}
              isBlog={false}
              title="Telegram Interactive Button Bot"
              description="A Telegram bot designed to offer interactive button functionalities, providing easy access to log queries, customizable commands, and more."
              ghLink="https://github.com/fabianofwp19/Tele_bot"
              // demoLink="#"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={hand_detection}
              isBlog={false}
              title="Lorenz Attractive System"
              description="This project animates the Lorenz Attractor in Python using NumPy, Matplotlib, and SciPy, solving its differential equations and visualizing the 3D trajectory with a dark background and cyan highlights."
              ghLink="https://github.com/fabianofwp19/Lorenz_Attractive_System"
              // demoLink="#"      
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={solar_simulation}
              isBlog={false}
              title="Solar System Simulation"
              description="This project is an open-source interactive animation of the Solar System using Python with Matplotlib and NumPy. It simulates the orbits of planets and the Moon around the Sun, creating an engaging and visually appealing experience."
              ghLink="https://github.com/fabianofwp19/Solar_System_Simulation"
              // demoLink="#"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
