import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have made recently using different Tech
          Stacks
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="YouTube Clone"
              subtitle="Mern Stack Application"
              description="
              A full-stack web application replicating YouTube’s core features, with a responsive frontend built using React, Tailwind CSS, and various libraries for smooth user experience. The backend, powered by Node.js, Express, and MongoDB, manages video uploads, user authentication, and interactions. Integrates Cloudinary for image storage and handles secure user sessions and data management."
              ghLinkServer="https://github.com/whoshriyansh/youtube_web_app_server"
              ghLinkClient="https://github.com/whoshriyansh/youtube_web_app_client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="X Clone"
              subtitle="Mern Stack Application"
              description="This web app offers a social platform experience with a frontend built in React and styled with Tailwind CSS. Users can authenticate via GitHub, manage profiles, and interact with content. The backend, using Node.js and Express, handles GitHub OAuth authentication, repository search, and user interactions, integrating with GitHub’s API for real-time data."
              ghLinkServer="https://github.com/whoshriyansh/x_webapp_clone_server"
              ghLinkClient="https://github.com/whoshriyansh/x_web_app_clone_client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="GitHub Look-Alike"
              subtitle="Mern Stack Application"
              description="A streamlined application mimicking GitHub’s functionality, featuring a React frontend with Tailwind CSS for responsive design and smooth interactions. The backend leverages Node.js and Passport for GitHub OAuth authentication, allowing users to search, like repositories, and view repository details directly from GitHub’s API."
              ghLinkServer="https://github.com/whoshriyansh/github_repo_app_server"
              ghLinkClient="https://github.com/whoshriyansh/github_repo_app_client"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
