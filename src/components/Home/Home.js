import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import About from "../About/About";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
     <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                नमस्ते!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙏
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHRIYANSH LOHIA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Experience/>
      <Projects />
      <About />
    </section>
  );
}

export default Home;
