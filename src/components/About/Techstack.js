import React from "react";
import { Col, Row } from "react-bootstrap";

import {DiJavascript1,DiJava, DiReact, DiGit, DiPython } from "react-icons/di";
import {
  SiDocker,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiFramer,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFramer />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVite />
      </Col>
    </Row>
  );
}

export default Techstack;
