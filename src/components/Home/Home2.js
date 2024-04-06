import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from 'react';

function Home2() {
  return (
    <div className="home-about">
      <h1>Hello, I'm User</h1>
      <p className="home-about-content">Welcome to my website!</p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/shivamg5080"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/shivam-gupta-870243250/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home2;

