import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col md={6}>
          <ul>
            <li className="foot-link">Elsewhere</li>
            <li>
              <a
                href="https://github.com/webgaurav02"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gauravjos02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gaur_.av/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li className="foot-link">Contact</li>
            <li>
              <a href="mailto:gauravcodes123@gmail.com" target="_blank" rel="noopener noreferrer">
                Message
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <p>
        <i className="fa-regular fa-copyright fa-2xs" /> 2023 Gaurav Joshi
      </p>
    </div>
  );
}

export default Footer;
