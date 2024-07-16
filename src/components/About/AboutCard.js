import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karan Shah </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently pursuiing <b>Bachlor's in Engineering</b> in <b>Computer Engineering</b>
            <br />
            At Vishwakarma Government Engineering College, Ahmedabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New TECH-Stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Why be normal, when you can be Best"{" "}
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
