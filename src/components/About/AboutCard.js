import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Shivam Gupta</span>, a second-year
            student at <span className="purple"> IIIT BHOPAL</span> diving
            into the world of software engineering and problem-solving.
            Originating from the city Jhansi,
            Uttar Pradesh,.
            <br />
            <br />
            Outside the tech realm, catch me :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> On the cricket field
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying cartoon movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Flipping through social media
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by creativity, fueled by coffee."{" "}
          </p>
          <footer className="blockquote-footer">Shivam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
