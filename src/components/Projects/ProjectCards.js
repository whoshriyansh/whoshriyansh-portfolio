import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const showGitServerBtn = props.ghLinkServer ? true : false;
  const showGitClientBtn = props.ghLinkClient ? true : false;
  const showDemoButton = !props.isBlog && props.demoLink ? true : false;

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title
          style={{
            textAlign: "left",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Subtitle
          style={{
            textAlign: "left",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          Tech Stack: {props.subtitle}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {showGitServerBtn && (
          <Button
            variant="primary"
            href={props.showGitServerBtn}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Server"}
          </Button>
        )}

        {showGitClientBtn && (
          <Button
            variant="primary"
            href={props.ghLinkClient}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Client"}
          </Button>
        )}

        {showDemoButton && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
