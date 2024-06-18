import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows11,
  SiFigma,
  SiGithub,
  SiLinux,
  SiGitlab,
  SiTrello,
  SiSlack,
  SiJirasoftware,
  SiNotion,
  SiPostman,
  SiInsomnia
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
