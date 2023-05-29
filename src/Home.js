import React, {useEffect, useState} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePhoto from './images/Gaurav_3.png';


function Home(){




    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element) => {
          element.classList.add('fade-in-animation');
        });
      }, []);
    
    
    
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const navbarClassName = `navbar${scrolled ? ' scrolled' : ''}`;
    
    
    
    
    
      return (
        <div>
          <Container fluid className='home' id='home'>
            <div>
              <nav className={navbarClassName}>
                <ul className="nav-links fade-in">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#skills">My Skills</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <Row>
                <Col xs={6} className='head fade-in'>
                    <h3>Hi there, I'm</h3>
                    <div>
                      <h1>Gaurav Joshi</h1>
                      <hr className='name-line' />
                    </div>
                    <p>Student, National Institute of Technology Meghalaya</p>
                    <div className='social-links'>
                      <a
                        href='https://www.linkedin.com/in/gauravjos02/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link'
                      >
                      <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        href='https://github.com/webgaurav02'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link'
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a
                        href='https://www.instagram.com/gaur_.av/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                  </div>
                </Col>
                <Col>
                  {/* <img src={profilePhoto} alt="My Photo" className='profile'></img> */}
                  <div
                    className='profile slide-in-left'
                    style={{ backgroundImage: `url(${profilePhoto})` }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
          <p className='des-by'>Designed by <a className='name'>Gaurav</a></p>
        </div>
      );
}

export default Home;