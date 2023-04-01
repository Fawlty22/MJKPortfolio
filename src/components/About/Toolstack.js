import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiGit,
  SiVisualstudiocode,
  SiGithub,
  SiHeroku,
  SiTrello,
  SiInsomnia,
  SiAmazonaws,
  SiJquery,
  SiPostman,
  SiJira,
  SiBitbucket,
  SiConfluence
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Git</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>VS Code</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>GitHub</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>BitBucket</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiBitbucket />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Heroku</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>AWS</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Trello</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiTrello />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Jira</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Confluence</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiConfluence />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Postman</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Insomnia</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiInsomnia />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>jQuery</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiJquery />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
