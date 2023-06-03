import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import "./App.css";


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
    setShow(section);
  }

  return (
    <div className="content">
      <nav className={navbarClassName}>
        <ul className="nav-links fade-in">
          <li>
            <p onClick={() => handleNavClick("home")}>Home</p>
          </li>
          <li>
            <p onClick={() => handleNavClick("about")}>About</p>
          </li>
          <li>
            <p onClick={() => handleNavClick("work")}>Work</p>
          </li>
          <li>
            <p onClick={() => handleNavClick("contact")}>Contact</p>
          </li>
        </ul>
      </nav>

      {show === "home" ? <Home /> : null}
      {show === "about" ? <About /> : null}
      {show === "work" ? <Work /> : null}
      {show === "contact" ? <Contact /> : null}

      <p className="des-by">
        Designed by <p className="name">Gaurav</p>
      </p>
    </div>
  );
}

export default Content;
