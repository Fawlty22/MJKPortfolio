import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import pawgers from "../../assets/Projects/pawgers.png";
import PhotoPort from "../../assets/Projects/PhotoPort.png";
import skiHaus from "../../assets/Projects/skiHaus.png";
import FlightPlan from "../../assets/Projects/FlightPlan.png";
import DeepThoughts from "../../assets/Projects/DeepThoughts.png";
import Chatterstorm from "../../assets/Projects/Chatterstorm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
    
      <Container>
        <h1 className="project-heading">
          Showcasing My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here is a selection of projects I've built. Please use the buttons to visit the live application and GitHub.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skiHaus}
              isBlog={false}
              title="skiHaus"
              description="SkiHaus is an application for tracking inventory, maintaining customer information, and creating contracts for ski and snowboard rental shops. This application was built with various React hooks and state management techniques, alongside complex back-end queries and mutations using GraphQL."
              githubLink="https://github.com/Fawlty22/skiHaus"
              siteLink="https://ski-haus.herokuapp.com/"
            />
          </Col>          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawgers}
              isBlog={false}
              title="Pawgers"
              description="Social network for posting pet photos and finding local adoptions. Users can create accounts, share their own photos, follow other users and view various custom feeds. Pawgers also has an adoption page where users can search for adoptable dogs in their area, returning links and photos to those adoption sites."
              githubLink="https://github.com/Thesselonian/Pawgers"
              siteLink="https://pawgers.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeepThoughts}
              isBlog={false}
              title="Deep Thoughts"
              description="Deep Thoughts is a basic social media app for sharing your own thoughts and reacting to those of other users. Make your own profile, follow friends, view your various feeds. This app has a simple front-end as this projects' purpose was to practice with more complex MongoDB structure."
              githubLink="https://github.com/Fawlty22/DeepThoughts"
              siteLink="https://cryptic-coast-81537.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlightPlan}
              isBlog={false}
              title="FlightPlan"
              description="FlightPlan was my first group project in my bootcamp. Using very basic technologies, this app asks where you would like to travel and returns all flights within your desired budget and dates. Unfortunately, the API this project relied on has since been disabled."
              githubLink="https://github.com/Fawlty22/FlightPlan"
              siteLink="https://fawlty22.github.io/FlightPlan/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PhotoPort}
              isBlog={false}
              title="Photo Port"
              description="Mock portfolio for a photographer. Built using React; meant to practice state and conditional rendering. This was practice for building my own portfolio."
              githubLink="https://github.com/Fawlty22/PhotoPort"
              siteLink="https://fawlty22.github.io/PhotoPort/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatterstorm}
              isBlog={false}
              title="Chatterstorm"
              description="A Twitter-like social media app for posting your own thoughts and viewing those of other users. This was my first dive into more complex MySQL database relationships. My other project, DeepThoughts, is an upgrade to this using React."
              githubLink="https://github.com/Fawlty22/Chatterstorm"
              siteLink="https://tranquil-taiga-29709.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
