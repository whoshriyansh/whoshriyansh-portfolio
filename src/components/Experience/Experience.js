import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the project I have worked on during my experience in the
          field.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              isBlog={false}
              title="StarOps Technologies, Greater Noida"
              time="6 months"
              role="Full-Time"
              description="Lead frontend development for over three major projects, demonstrating exceptional leadership and technical skills."
              ghLink="https://github.com/whoshriyansh/Promptopia"
              demoLink="https://promptopia-seven-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              isBlog={false}
              title="Gateway Car Rental, Dubai"
              time="8 months"
              role="Full-Time"
              description="
              Developed the entire frontend of the website, including a booking system, contact us feature, and admin dashboard."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
