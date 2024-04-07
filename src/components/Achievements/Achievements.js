import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCards";
import Particle from "../Particle";
import IMO from "../../Assets/Achievements/IMO.png";
import NSO from "../../Assets/Achievements/NSO.png";
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
              description="Bagged an International Rank of 104 and a Zonal Rank of 5 (in Jharkhand Zone) among 3.4 million students in the SOF International Mathematics Olympiad 2020, showcasing my outstanding performance in the field of mathematics."
            />
          </Row>
                <Row md={12} className="project-card">
            <AchievementCard
              imgPath={NSO}
              index={2}
              isBlog={false}
              title="International Science Olympiad"
              description="Bagged an International Rank of 104 and a Zonal Rank of 5 (in Jharkhand Zone) among 3.4 million students in the SOF International Mathematics Olympiad 2020, showcasing my outstanding performance in the field of mathematics."
            />
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={SCS}
              index={5}
              isBlog={false}
              title="Academic Excellence Award"
              description="Honored to receive the Academic Excellence Award in both Class 11 and 12, recognizing my outstanding performance. Commended for excellence in competitive exams like IIT JEE and inter-school competitions, this accolade reflects my commitment to academic pursuits and success in challenging environments."
            />
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={MCS}
              index={6}
              isBlog={false}
              title="Academic Excellence Award"
              description="Recieved the Academic Excellence Award in Class 10, achieving a commendable 94.2% and securing the 3rd rank among 250 students in the tenth ICSE examination. This accomplishment reflects my commitment to academic excellence, highlighting my dedication and passion for learning."
            />
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default Achievements;
