import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import "../styles/App.css";

function Content() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClassName = `navbar${scrolled ? " scrolled" : ""}`;

  const [show, setShow] = useState("home");
  function handleNavClick(section) {
    window.scrollTo({ top: 0, left: 0 });
    setShow(section);
  }

  return (
    <div className="content">
      <nav className={navbarClassName}>
        <ul className="nav-links fade-in">
          <li>
            <p
              className={show === "home" ? "active" : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </p>
          </li>
          <li>
            <p
              className={show === "about" ? "active" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </p>
          </li>
          <li>
            <p
              className={show === "work" ? "active" : ""}
              onClick={() => handleNavClick("work")}
            >
              Work
            </p>
          </li>
          <li>
            <p
              className={show === "contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>

      {show === "home" ? <Home /> : null}
      {show === "about" ? <About /> : null}
      {show === "work" ? <Work /> : null}
      {show === "contact" ? <Contact /> : null}

      <div className="des-credits">
        <p className="des-by">
          Designed by <span className="name">Gaurav</span>
        </p>
      </div>
    </div>
  );
}

export default Content;
