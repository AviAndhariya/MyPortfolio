import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Semrush from "../../Assets/Projects/Semrush.png";
import Sugar from "../../Assets/Projects/Sugar.png";
import Kimaye from "../../Assets/Projects/Kimaye.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sugar}
              isBlog={false}
              title="Sugar"
              description="Sugar is an Online Cosmetic & Beauty Website with different Categories like Makeup, Brush, Eyeliner, etc.,It is a Collaborative Project. We build this Application using Html, CSS, Javascript"
              link="https://reliable-haupia-18150c.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kimaye}
              isBlog={false}
              title="Kimaye"
              description="Kimaye is online platform that sells fresh fruits in Delhi & Mumbai. It is a Collaborative Project We build this Application using Html, CSS,Advanced Javascript"
              link="https://whimsical-gingersnap-c9aa58.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Semrush}
              isBlog={false}
              title="Semrush"
              description="Semrush Inc is an American public company that offers a SaaS platform known as Semrush. The platform is often used for keyword research and online ranking data. It is an Individual project So I build this project by using React-Js, Javascript, Html, VanillaCSS."
              link="https://semrushcom.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
