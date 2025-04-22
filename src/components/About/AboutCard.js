import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Kumar </span>
            from <span className="purple"> Greater Noida, India.</span>
            <br />
            I am currently doing B.Tech CSE at Galgotias University.
            <br />
            My journey began when I realized “Hello World” wasn’t just a program – it was an invitation to build universes where pixels dance and APIs whisper secrets.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Guitar & Jamming
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading (Fiction)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding to make the world a better place to live in!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
