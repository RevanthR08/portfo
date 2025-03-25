import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <a href="#home" className="nav-link">
            <i className="nav-icon">🏠</i>
            Home
          </a>
          <a href="#about" className="nav-link">
            <i className="nav-icon">👤</i>
            About me
          </a>
          <a href="#contact" className="nav-link">
            <i className="nav-icon">📞</i>
            Contact
          </a>
        </div>

        <div className="social-links">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className="footer-legal">
          <a href="#">Terms of Service</a>
          <span>-</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;