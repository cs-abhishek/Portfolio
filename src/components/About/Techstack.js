import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiKotlin,
  SiJetpackcompose,
  SiTensorflow,
  SiAndroidstudio,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Android Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin title="Kotlin" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetpackcompose title="Jetpack Compose" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio title="Android Studio" />
      </Col>

      {/* Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Backend & Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>

      {/* Tools & Others */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi title="REST/GraphQL APIs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}

export default Techstack;