import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiExpress,
  SiBootstrap,
  SiHtml5,
  SiMysql,
  SiGraphql,
  SiCss3,
  SiJest,
  SiHandlebarsdotjs,
  SiAmazonaws,
  SiJquery,
  SiApollographql,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHandlebarsdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
      </Col>
    </Row>
  );
}

export default Techstack;
