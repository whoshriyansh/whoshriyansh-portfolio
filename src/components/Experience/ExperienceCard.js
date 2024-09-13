import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
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
          Time: {props.time} | Role: {props.role}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
