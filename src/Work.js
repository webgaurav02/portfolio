import React, { useEffect } from "react";
import "./Work.css";
import Container from "react-bootstrap/Container";
import Footer from "./Footer"

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
        <h1 className="fade-in">Coming Soon...</h1>
      </Container>
      <Footer section=""/>
    </>
  );
}

export default Work;
