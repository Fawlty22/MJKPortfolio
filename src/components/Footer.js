import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Fawlty22"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/matthewkeysprofile"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/matt_keys/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30}/>
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4">
          <a href="mailto:matthewjkeys22@gmail.com">e: matthewjkeys22@gmail.com</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;