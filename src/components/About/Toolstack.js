import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAndroidstudio,
  SiFirebase,
  SiTensorflow,
  SiFigma,
  SiGooglecloud,
  SiDocker,
  SiGithub,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio title="Android Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud title="Google Cloud" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

    </Row>
  );
}

export default Toolstack;