import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProductionsCards";
import Particle from "../Particle";
import Space_run from "../../Assets/Productions/sol.gif";
import Burger from "../../Assets/Productions/burger.png";
import Rolamento_fann from "../../Assets/Productions/duas.png";
import Lixuria from "../../Assets/Productions/Lixuria.png";
import Montserrat from "../../Assets/Productions/montserrat.png"

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
              imgPath={Burger}
              isBlog={false}
              title="Burger"
              ghLink="https://youtu.be/6LEAdC6moNQ?si=saOixfhwP_XOkkcn"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Montserrat}
              isBlog={false}
              title="Montserrat Restaurant Commercial"
              ghLink="https://youtu.be/Y2Ld980KJfU"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Rolamento_fann}
              isBlog={false}
              title="Rolamentos FANN"
              ghLink="https://www.youtube.com/shorts/f5wAA32DKus"
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

        </Row>
      </Container>
    </Container>
  );
}

export default Productions;
