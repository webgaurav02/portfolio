import React, { useEffect } from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const disp = "</>"

function About() {
  return (
    <>
      <Container fluid className="about" id="about">
          <h1>I'm Gaurav.</h1>
          <h2>
            Welcome to my portfolio website! I'm a <a className="a-big">Student</a> at the National
            Institute of Technology Meghalaya and a <a className="a-big">Web Developer.</a>
          </h2>
          <p>I rock at HTML, CSS, and JavaScript, and I'm not too shabby with React.js either.</p>
          <p>Oh, and did I mention I dabble in <a className="a-big">graphic design</a> too?</p>
          <p>Take a peek at my portfolio and see the magic I can create with a mix of creativity and coding skills. Let's make something awesome together!</p>
          <h1 className="code-logo">{disp}</h1>
      </Container>
    </>
  );
}

export default About;
