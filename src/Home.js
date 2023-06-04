import React, { useEffect } from "react";
import "./Home.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePhoto from "./images/Gaurav_3.png";
import Footer from "./Footer";

function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

  return (
    <>
      <Container fluid className="home" id="home">
        <div>
          <Row>
            <Col lg={6} className="head fade-in">
              <h3>Hi there, I'm</h3>
              <div>
                <h1>Gaurav Joshi</h1>
                <hr className="name-line" />
              </div>
              <p>Student, National Institute of Technology Meghalaya</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/gauravjos02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/webgaurav02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/gaur_.av/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </Col>
            <Col class="profile-col">
              {/* <img src={profilePhoto} alt="My Photo" className='profile'></img> */}
              <div
                className="profile slide-in-left"
                style={{ backgroundImage: `url(${profilePhoto})` }}
              ></div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer section="footer-home"/>
    </>
  );
}

export default Home;
