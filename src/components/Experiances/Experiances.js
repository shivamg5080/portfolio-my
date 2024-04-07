import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperianceCard from "./ExperianceCards";
import Particle from "../Particle";
import Honeywell from "../../Assets/Experiances/hon.png";
import AZ from "../../Assets/Experiances/AZ.png";
import SWG from "../../Assets/Experiances/SWG.png";
import sam from "../../Assets/Experiances/sam.png";

function Experiances() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperianceCard
              imgPath={Honeywell}
              isBlog={false}
              title="Honeywell International Inc."
              description="During my internship at Honeywell as a Software Engineer, I contributed to a project aimed at enhancing the user experience and efficiency of the Advanced Customer Tracking Portal within the Honeywell Connected Enterprise unit—a SaaS-based solution utilized by over 1000 European Pharma distributors. I developed a customized React interface with eight pages, showcasing product compliance status over time through interactive graphs. Additionally, I worked on optimizing transaction and transloading processes by incorporating filtering options and product attributes. Ultimately, I integrated Localytics, enabling comprehensive tracking and analysis of user behavior during A/B testing and contributing to the overall website performance assessment."
            />
          </Col>

          <Col md={12} className="project-card">
            <ExperianceCard
              imgPath={AZ}
              isBlog={false}
              title="AlgoZenith"
              description="As a Mentor at AlgoZenith, I actively contribute to the Ed-Tech platform's mission of revolutionizing programming education in India and beyond. Engaging with over 500 students, I guide them on their journey through Data Structures and Algorithms, providing support through chats and calls. Additionally, we conducted insightful guest sessions for 200+ students, offering valuable advice on technical rounds and interviews. During the beta testing phase, I rigorously tested and verified solutions for 100+ questions on the mock test platform, ensuring thorough coverage of all edge cases."
            />
          </Col>

          <Col md={12} className="project-card">
            <ExperianceCard
              imgPath={SWG}
              isBlog={false}
              title="Student Welfare Group, IIT Kharagpur"
              description="As a mentor and guide, my journey includes serving as a Student Academic Mentor, where I became the go-to person for five freshmen in the junior batch, offering support on academic and personal fronts within the campus. Concurrently, I took on the role of a Mentor for Programming and Data Structures, leading over 500 first-year UG students from diverse backgrounds in PDS Doubt Sessions. Together, we navigated through the intricacies of the C Programming language, covering fundamental concepts such as Arrays, Pointers, Structures, and Linked Lists."
            />
          </Col>
          <Col md={12} className="project-card">
            <ExperianceCard
              imgPath={sam}
              isBlog={false}
              title="Samudra Manthan, IIT Kharagpur "
              description="As an Associate Member at Samudramanthan in IIT Kharagpur, I actively contributed to the annual technical meet for Ocean Engineering and Naval Architecture. In my role, I planned and executed the first hybrid Samudramanthan, achieving a remarkable 25% YoY increase in participation through the development of a comprehensive publicity plan. Additionally, I played a crucial role in coordinating with 23 associates, efficiently managing a budget for logistics across more than 8 events and coordinating arrangements for guest speakers."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experiances;
