import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function AchievementCards(props) {
  const isEvenIndex = props.index % 2 === 0;

  return (
    <Card className="project-card-view">
      <div className={`row ${isEvenIndex ? "flex-row" : "flex-row-reverse"}`}>
        <div className="col-md-3">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" id="wid"/>
        </div>
        <div className="col-md-9">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            {"\n"}
            {"\n"}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default AchievementCards;
