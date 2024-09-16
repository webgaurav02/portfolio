import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const disp = "</>";

function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    const aboutElement = aboutRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Adjust this threshold value as per your needs
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-animation");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = aboutElement.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Container fluid className="about" id="about" ref={aboutRef}>
        <h1 className="fade-in">I'm Gaurav.</h1>
        <h2 className="fade-in">
          Welcome to my portfolio website! I'm a{" "}
          <span className="a-big fade-in">Student</span> at the National
          Institute of Technology Meghalaya and a{" "}
          <span className="a-big fade-in">Web Developer.</span>
        </h2>
        <div>
          <Row>
            <Col lg={6}>
              <p className="fade-in">
                I've built some cool stuff like the Durand Cup 2024 ticketing system and the Onlybees event platform, mixing creativity and cutting-edge tech like <span className="a-big fade-in">React, Next.js</span> and <span className="a-big fade-in">MongoDB</span>.
              </p>
              <p className="fade-in">
                Oh, and did I mention I dabble in{" "}
                <span className="a-big fade-in">graphic design</span> too?
              </p>
              <p className="fade-in">
                Take a peek at my portfolio and see the magic I can create with
                a mix of creativity and coding skills. Let's make something
                awesome together!
              </p>
            </Col>
            <Col lg={6} className="img-colm">
              <h1 className="code-logo fade-in">{disp}</h1>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer section="" />
    </>
  );
}

export default About;
