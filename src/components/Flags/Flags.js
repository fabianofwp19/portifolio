import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import FlagQuiz from "./FlagQuiz";
import bandeiras from './FlagsNames';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Flags</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a project I created to learn and memorize flags.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5}>
            <FlagQuiz flags={bandeiras} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
