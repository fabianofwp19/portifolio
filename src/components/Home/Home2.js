import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Perfil from "../../Assets/perfil.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            My name is Fabiano Miguel, I am 22 years old, and I am in my final semester of a Bachelor's degree in Library and Information Science at the University of São Paulo, where I also enhance my skills in Computer Science. 🚀
              <br />
              <br />
              I am passionate about design and web creation, exploring programming tools such as
              <i>
                <b className="purple"> Python, Javascript, and C#. </b>
              </i>
              <br />
              <br />
              I constantly seek to automate my <i><b className="purple">daily academic and professional tasks</b></i>,
              using available technological solutions. Learning is what I love the most.
              <br />
              <br />
              As a good librarian, I am an avid reader, always acquiring relevant information to improve my skills. I enjoy a good walk and have a deep love for music—plus, I am an enthusiastic singer haha!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Perfil} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fabianofwp19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fabianofwp19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fabianofwp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
