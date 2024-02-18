import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram
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
            I'm originally from Long Island, but currently living in upstate New York.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Typescript, JavaScript ES6+ </b>
                <span>and the</span>
                <b className="purple">  MEAN/MERN stack. </b>
                
              </i>
              Recently I have fallen in love with NestJs for my API's and server-side code. Though Nest uses Express under the hood, the MNAN stack just doesn't quite have a ring to it...
               <br/>
               <br/>
               I also have experience building applications using various AWS resources, including Amplify, EC2, S3, SES, and more.
               I am also familiar with various testing software and AGILE workflow applications. A more specific breakdown of tools I use can be found on the About page
              <br />
              
              <br />
              Potential future employers and new friends alike, please feel free to contact me by pressing the button below. My
              <i>
                <b className="purple">
                  {" "}
                  LinkedIn, Github, and Instagram{" "}
                </b>
              </i>
              are linked at the top & bottom of the page.
              &nbsp; 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fawlty22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matthewkeysprofile/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/matt_keys/"
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
