import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">
            Hey there, I'm Shriyansh Kumar Lohia! 
            </span>
            <br />
            Experience: Leading projects at StarOps Technologies, where I've
            boosted performance by 30% and user engagement by 20%. At Gateway
            Car Rental, I crafted entire front ends with a 25% speed boost and
            32% traffic increase. Passionate about React, React Native, and
            weaving designs with Tailwind CSS and Material UI. Let's create
            something amazing together!
            <b className="purple"> </b>
          </p>
          {/* <ul>
            <li className="about-activity purple">
            React JS Developer 
            </li>
            <li className="about-activity purple">
           Contact: +91 6397544812
            </li>
            <li className="about-activity purple">
           Email: shriyanshlohia0@gmail.com
            </li>
            <li className="about-activity purple">
           LinkedIn: linkedin.com/in/whoshriyansh/
            </li>
            <li className="about-activity purple">
           And when I'm not deep into coding, you'll often find me
              immersed in the captivating worlds of anime and manga.
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
