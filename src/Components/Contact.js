import React, { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from "./Footer";

function Contact() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("fade-in-animation");
    });
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  // Formspree
  const loaderSc = () => {
    return (
      <div className="submit-loading">
        <span className="loader"></span>
      </div>
    )
  }


  const [state, handleSubmit] = useForm("meqyqqrb");

  if (state.succeeded) {
    return (
      <div className="contact">
        <div className="form-submitted">
          <p>Thanks for contacting! I'll get back to you soon.</p>
        </div>
        <Footer section="" />
      </div>
    );
  }

  return (
    <div id="contact">
      <div className="contact">
        <Row className="fade-in">
          <Col className="form-col">
            <h2>Write me a message</h2>
            {state.submitting && loaderSc()}
            <form
              className={`fade-in ${state.submitting ? 'submitting' : ''}`}
              name="contact"
              // method="post"
              onSubmit={handleSubmit}
              encType="text/plain"
              autoComplete="on"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name"></label>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message"></label>
                <textarea
                  ref={textareaRef}
                  placeholder="Message"
                  rows="1"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" disabled={state.submitting} onSubmit={loaderSc}>Submit</button>
            </form>
            <div className="contact-mail">
              <p><i className="fa-solid fa-location-dot"></i> Shillong, Meghalaya, India</p>
              <p><i className="fa-solid fa-graduation-cap"></i> National Institute of Technology Meghalaya</p>
              <p><i className="fa-solid fa-envelope"></i> gauravcodes123@gmail.com</p>
            </div>
          </Col>
          <Col className="contact-text" lg={6}>
            <h1 className="fade-in">Let's talk</h1>
            <br />
            <br />
            <p>Feel free to reach out and I'll get back to you promptly.</p>
            <br />
            <br />
            <p>
              Whether you have a specific project in mind or just want to
              discuss potential opportunities, I'm here to help.
            </p>
            <br />
            <br />
            <p>
              I'm excited to start this conversation and make a difference
              through our collaborative efforts.
            </p>
          </Col>
        </Row>
      </div>
      <Footer section="" />
    </div>
  );
}

export default Contact;
