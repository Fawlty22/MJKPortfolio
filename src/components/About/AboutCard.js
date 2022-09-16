import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello , my name is <span className="purple">Matthew Keys </span>
            from <span className="purple"> Beacon, New York.</span>
          </p>
              In my free time, I am an avid&nbsp;
              <i>
                <b className="purple">ultimate frisbee player, disc golfer and skier. </b> 
              </i>
              Anything that gets me outside, or even better, in the woods! 
              <br />
              <br />
              When im in the office, I enjoy
                <i><b className="purple"> learning new technologies and building projects,&nbsp;</b></i>
              especially when they involve skis or discs. If you've got some cool projects that need extra hands, I'd love to help out!
              <br />
              <br />
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The essence of an independent mind lies not in what it thinks, but how it thinks."{" "}
          </p>
          <footer style={{marginTop: "5px"}} className="blockquote-footer">Christopher Hitchens</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
