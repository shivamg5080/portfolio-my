import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCards";
import Particle from "../Particle";
import IIT_Kharagpur_Logo from "../../Assets/Achievements/pp.png";
import NCO from "../../Assets/Achievements/NCO.png";
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
              imgPath={IIT_Kharagpur_Logo}
              index={0}
              isBlog={false}
              title="Mrs. Sagarika Mukherjee Memorial Award"
              description="Honored to receive the Mrs. Sagarika Mukherjee Memorial Award at IIT Kharagpur, a recognition bestowed upon me for outstanding academic achievements and active engagement in various facets of campus life. This prestigious accolade, instituted by respected alumnus Mr. Satyendranath Mukherjee (1976/B.Tech/ECE), reflects my dedication to excellence and holistic development. As I proudly carry this achievement, I am motivated to pursue further endeavors with a passion for knowledge and a commitment to making a positive impact."
            />
          </Row>

          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={IIT_Kharagpur_Logo}
              index={1}
              isBlog={false}
              title="Karuturi Ramamurty Endowmet Award"
              description="Privileged to receive the Karuturi Ramamurty Endowment Award at IIT Kharagpur's 20th Annual Alumni Meet, bestowed by respected alumnus Arjun Malhotra (1970/B.Tech/ECE) and the Director, Virendra Kumar Tewari. Acknowledged for academic excellence, I stand as the sole awardee among all departmental students. This accolade inspires continued dedication to scholarly pursuits and marks a significant milestone in my academic journey."
            />
          </Row>

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
              imgPath={IIT_Kharagpur_Logo}
              index={3}
              isBlog={false}
              title="Ritesh Ranjan Memorial Scholarship"
              description="Grateful recipient of the Ritesh Ranjan Memorial Scholarship at IIT Kharagpur, awarded by the Director on Homecoming 2022. This scholarship, initiated by Mr. Parijat Ghosh and his batchmates in memory of Ritesh Ranjan (1997 / B.Tech / ME), supports academically excellent undergraduate students in Mechanical Engineering. Grateful for the recognition, including the INR 2 lakh prize, this scholarship motivates me to continue excelling in my academic pursuits."
            />
          </Row>
          <Row md={12} className="project-card">
            <AchievementCard
              imgPath={NCO}
              index={4}
              isBlog={false}
              title="National Cyber Olympiad"
              description="Attained an international rank of 69 and secured a Zonal Rank of 5 among 1.2 million+ participants in the SOF National Cyber Olympiad 2019, demonstrating excellence in Computer Science and IT. "
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
