import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container" id="home">
      <nav className="navbar">
        <div className="logo"><span className='lio'>REV</span>PORTFOLIO</div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} spy={true} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} spy={true} onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="projects" smooth={true} duration={500} spy={true} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} spy={true} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="title-creative">CREATIVE UI</span>
            <span className="title-designer">DESIGNER</span>
          </h1>
          <div className="cta-buttons">
            <button className="btn hire-btn">Hire me</button>
            <button className="btn download-btn">Download CV</button>
          </div>
        </div>
        <div className="hero-image">
          {/* We'll add the illustration here */}
        </div>
      </main>
    </div>
  );
};

export default Home;