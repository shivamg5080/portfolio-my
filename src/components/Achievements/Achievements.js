import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCards";
import Particle from "../Particle";
import NSO from "../../Assets/Achievements/NSO.png";
import IMO from "../../Assets/Achievements/IMO.png";
import SCS from "../../Assets/Achievements/SCS.png";
import MCS from "../../Assets/Achievements/MCS.jpg";

function Achievements() {
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
        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={IMO}
              index={2}
              isBlog={false}
              title="International Mathematics Olympiad"
              description="Bagged an International Rank of 240 and a Zonal Rank of 45 (in Uttar Pradesh Zone) among 3.4 million students in the SOF International Mathematics Olympiad , showcasing my outstanding performance in the field of mathematics."
            />
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={NSO}
              index={4}
              isBlog={false}
              title="National Science Olympiad"
              description="Attained an international rank of 124 and secured a Zonal Rank of 70 among 1.2 million+ participants in the SOF National Science Olympiad 2, demonstrating excellence in science."
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={SCS}
              index={5}
              isBlog={false}
              title="Academic Excellence Award"
              description="Honored to receive the Academic Excellence Award in both Class 11 and 12, recognizing my outstanding performance. Commended for excellence in competitive exams like IIT JEE and scoring 90.8%, this accolade reflects my commitment to academic pursuits and success in challenging environments."
            />
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={MCS}
              index={6}
              isBlog={false}
              title="Academic Excellence Award"
              description="Recieved the Academic Excellence Award in Class 10, achieving a commendable 92.6% and securing the 8rd rank among 120 students in the tenth CBSE examination. This accomplishment reflects my commitment to academic excellence, highlighting my dedication and passion for learning."
            />
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default Achievements;
