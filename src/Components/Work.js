import React, { useEffect } from "react";
import "../styles/Work.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Footer from "./Footer"
import WorkData from "../WorkData.json"
import ProjectItem from "./ProjectItem";

function Work() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

  return (
    <>
      <Container fluid className="work">
        <h3 className="fade-in">My Recent Projects</h3>
        <Row className="fade-in">
          {WorkData.recent.map(ele => {
            return (
                <ProjectItem
                  key={ele.key}
                  title={ele.title}
                  description={ele.description}
                  image={ele.image}
                  link={ele.link}
                  github={ele.github}
                />
            );
          })}
        </Row>
        {/* <h3 className="fade-in">Clients</h3>
        <Row className="fade-in">
          {WorkData.clients.map(ele => {
            return (
                <ProjectItem
                  key={ele.key}
                  title={ele.title}
                  description={ele.description}
                  image={ele.image}
                  link={ele.link}
                  github={ele.github}
                />
            );
          })}
        </Row> */}
        <h3 className="fade-in">Fun</h3>
        <Row className="fade-in">
          {WorkData.projects.map(ele => {
            return (
                <ProjectItem
                  key={ele.key}
                  title={ele.title}
                  description={ele.description}
                  image={ele.image}
                  link={ele.link}
                  github={ele.github}
                />
            );
          })}
        </Row>
      </Container>
      <Footer section="" />
    </>
  );
}

export default Work;
