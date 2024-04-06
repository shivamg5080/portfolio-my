import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import search from "../../Assets/Projects/search.png";
import age from "../../Assets/Projects/age.png";
import sort from "../../Assets/Projects/sort.png";
import robo from "../../Assets/Projects/Robo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <br></br>
        <h3 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h3>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="HotelEase"
              description="Developed a website that offers details about hotels in the designated region, incorporating global state management for 100+ hotels and facilitating room reservations for specific dates. Integrated a Mongoose schema with ExpressJS for REST APIs, streamlining CRUD tasks with 5+ filters, and implemented JWT role-based authorization and middleware for error handling, enhancing security and stability."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="SearchX"
              description="Introduced a dynamic range querying and updating algorithm, enabling users to query data ranges with an average time of 0.02 seconds on 1000+ datasets. Implemented it with a Segment Tree data structure, ensuring efficient O(log n) time complexity, and validated accuracy through comprehensive testing, including complexity analysis and correctness comparison."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Age Progression System"
              description="Developed a Face Progression system utilizing a Face Recognition solution with a Genetic Adversarial Network (GAN). Incorporated fuzzy-based logic and image recognition parameters, and executed the backpropagation algorithm within the neural framework. This optimized image parameters, generating images tailored to specific input ages for accurate human face progression analysis."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              title="Sorting Visualizer"
              description="Developed a Sorting Visualizer, an educational tool designed to captivate students and enhance their understanding of sorting algorithms. The frontend, built with JavaScript, features adjustable sorting speed and array size variations. Incorporated 5 key sorting algorithms, showcasing their performance characteristics across diverse values and lengths for comprehensive algorithmic understanding through visual exploration."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Robotics Arm"
              description="Developed a two-degree-of-freedom Robotics Arm featuring a 15 lbs payload capacity, a wrist joint speed of 120 Deg/s, and a 24 V voltage inclusion. Crafted the working algorithm and implemented the system's functionality using Arduino IDE and Embedded C. Utilized Arduino UNO and electronic components for the successful setup of the Robotics Arm System, integrating IoT and Embedded C technologies."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
