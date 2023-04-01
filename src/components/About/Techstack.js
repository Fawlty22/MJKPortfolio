import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  SiTypescript,
  SiNestjs
} from "react-icons/si";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiAngularSimple } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>TypeScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>JavaScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>HTML 5</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>CSS 3</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Bootstrap</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>MongoDB</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Express</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>NestJS</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs/>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Angular</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiAngularSimple />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>React</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>NodeJS</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>GraphQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>MySQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Handlebars</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiHandlebarsdotjs />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Jest</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiJest />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Apollo</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiApollographql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>JSON Webtokens</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiJsonwebtokens />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
