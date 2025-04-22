import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="ReelView"
              description="A movie browsing/review app for Android, and iOS using Kotlin Multiplatform and Compose, sharing 90%+ code reuse. Integrated TMDB API for real-time movie data and integrated Ktor, Koin DI, and Jetpack Compose to create responsive UIs."
              ghLink="https://github.com/cs-abhishek/ReelView.git"
//              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flipkart Clone"
              description="A scalable Flipkart-inspired platform with JWT authentication, admin dashboard (user CRUD), and real-time inventory tracking. Integrated Paytm payments, Cloudinary media uploads, and SendGrid emails, achieving high order success rate in testing."
              ghLink="https://github.com/cs-abhishek/Flipkart-Clone.git"
//              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FoodLoop"
              description="Food Waste Reducing app developed with HTML, CSS, and Javascript on Apache Maven Platform. My SQL being used as Database. Total four modules available, Admin, Donar, Delivery and Reciever. Currently at developing stage."
              ghLink="https://github.com/cs-abhishek/Foodloop.git"
//              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
