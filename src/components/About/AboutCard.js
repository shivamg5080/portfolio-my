import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Mihir Raj</span>, a final-year
            student at <span className="purple"> IIT Kharagpur</span> diving
            into the world of software engineering and problem-solving.
            Originating from the city of waterfalls, Ranchi,
            Jharkhand, my journey includes gaining experience as a software
            engineering intern at <span className="purple"> Honeywell</span>.{" "}
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
          <footer className="blockquote-footer">Mihir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
