import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

const imageStyles = {
  width: '100%',
  height: '250px',
  objectFit: 'cover'
};

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={imageStyles} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      { props.githubLink && <Button className="m-1" variant="primary" href={props.githubLink} target="_blank">
                <BiLinkExternal /> &nbsp;
                {"View Github"}
              </Button>}
              <Button className="m-1" variant="primary" href={props.siteLink} target="_blank">
                <BiLinkExternal /> &nbsp;
                {"View Site"}
              </Button>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
