import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProductionsCards";
import Particle from "../Particle";
import Space_run from "../../Assets/Productions/sol.gif";
import Franksauro from "../../Assets/Productions/Franksauro.png";
import Nota_voz from "../../Assets/Productions/nota de voz.png";
import Lixuria from "../../Assets/Productions/Lixuria.png";

function Productions() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Productions </strong>
        </h1>
{/* 
        <p style={{ color: "white" }}>
          Here are a few Productions I've worked on recently.
        </p>
*/}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={Space_run}
              isBlog={false}
              ghLink="https://youtube.com/@fabianomiguel4300?si=HJtib1V_yHgvenKp"
              // demoLink="https://youtube.com/@fabianomiguel4300?si=HJtib1V_yHgvenKp"      
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Franksauro}
              isBlog={false}
              title="Franksauro"
              ghLink="https://youtu.be/Dd3uhwNBIGU?si=zF098Q7x5PMXvMDQ"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Lixuria}
              isBlog={false}
              title="Lixúria: Ribeirão Preto Sob Uma Pespectiva Social e Urbana"
              ghLink="https://youtu.be/Flsva2dXGDM?si=iULsbn11BGNxvwYG"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Nota_voz}
              isBlog={false}
              title="Só Mais Uma Nota de Voz"
              ghLink="https://youtu.be/oc_qpdh9Cok?si=t6JKwKVTJXwXPVjA"
              // demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Productions;
