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
          Here are the project I have worked on during my experience in the field.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
            
              isBlog={false}
              title="AI Prompt NextJS app"
              description="Promptopia, an AI-sharing app, uses Next.js to connect seamlessly to MongoDB, eliminating the need for a backend server. The project features straightforward route configuration, and authentication is handled efficiently with Next.js Auth, connecting to Google Cloud for enhanced security."
              ghLink="https://github.com/whoshriyansh/Promptopia"
              demoLink="https://promptopia-seven-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
            
              isBlog={false}
              title="Codepen Clone"
              description="
              This is a straightforward CodePen clone tailored for composing raw HTML, CSS, and JavaScript. With CodeMirror configuration, it not only provides a fully functional editor but also offers a seamless and intuitive coding experience."
              ghLink="https://github.com/whoshriyansh/codepen_clone"
              demoLink="https://drive.google.com/file/d/1J9ceo4NgNmfiBdPNXBcyH2B6hIjF6ZR-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
            
              isBlog={false}
              title="To-Do List"
              description="Experience a classic with this HTML, CSS, and JavaScript-powered Tic Tac Toe game. This sleek project offers an intuitive interface for timeless gaming fun. Enjoy responsive design and smooth interactions in this reimagined digital version of the beloved game."
              ghLink="https://github.com/whoshriyansh/To_Do_List-React"
              demoLink="https://to-do-list-react-beryl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              
              isBlog={false}
              title="TIC-TAC-TOE Game"
              description="Experience a classic with this HTML, CSS, and JavaScript-powered Tic Tac Toe game. This sleek project offers an intuitive interface for timeless gaming fun. Enjoy responsive design and smooth interactions in this reimagined digital version of the beloved game."
              ghLink="https://github.com/whoshriyansh/Tit-Tac-Toe"
              demoLink="https://tit-tac-toe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              
              isBlog={false}
              title="Fighting Game"
              description="This game is exclusively crafted using JavaScript and stands as my most challenging project to date, as I ventured into employing proper JS for the first time. It takes the form of a thrilling fighting game, with controls utilizing {up, down, right, left} keys for the Blue Player and {a, s, d, w} for the Red Player."
              ghLink="https://github.com/whoshriyansh/Fighting-Game-JS"
              demoLink="https://katanazero.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              
              isBlog={false}
              title="Portfolio"
              description="Introducing my React portfolio, a dynamically animated and fully responsive showcase. Built with Tailwind CSS, it encompasses various pages, including a homepage, project details, blogs, and a tech stack overview. Offering a concise yet comprehensive view of my skills and projects, this portfolio invites you to explore my professional journey seamlessly."
              ghLink="https://github.com/whoshriyansh/Fighting-Game-JS"
              demoLink="https://katanazero.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
