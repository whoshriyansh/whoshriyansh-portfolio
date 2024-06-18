import React from "react";
import { Col, Row } from "react-bootstrap";

import { } from "react-icons/di";
import {
  SiDocker,
  SiRedux,
  SiKubernetes,
  SiAmazonaws,
  SiJenkins,
  SiAnsible,
  SiTerraform
} from "react-icons/si";

function KnownStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiDocker />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiRedux />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiKubernetes />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiAmazonaws />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiJenkins />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiAnsible />
      </Col> 
      <Col xs={4} md={1} className="tech-icons">
        <SiTerraform />
      </Col> 
    </Row>
  );
}

export default KnownStack;
