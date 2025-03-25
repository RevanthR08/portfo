import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialText = "I am a passionate and detail-oriented professional with expertise in UI/UX design and frontend development. With a strong eye for aesthetics and usability, I create intuitive and visually appealing digital experiences. My skills include designing wireframes, prototypes, and high-fidelity interfaces using tools like Figma, Adobe XD, and Sketch. On the development side, I bring designs to life with clean, responsive code using HTML, CSS, JavaScript, and modern frameworks like React or Vue.js. Combining creativity with technical proficiency, I strive to build seamless, user-centric web applications that balance form and function.";
  
  const expandedText = "I thrive in collaborative environments, working closely with developers, product managers, and stakeholders to ensure cohesive and impactful solutions. With a user-first mindset, I conduct research, usability testing, and iterative design improvements to enhance accessibility and engagement. My frontend development expertise allows me to bridge the gap between design and functionality, ensuring pixel-perfect implementations and smooth interactions. Passionate about staying ahead of industry trends, I continuously explore new tools, design systems, and best practices to deliver innovative and scalable digital products. Whether crafting a minimalist interface or optimizing performance, I am committed to delivering high-quality experiences that resonate with users and drive business success.";

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1>
          <span className="title-about">About</span>
          <span className="title-me">me</span>
        </h1>
        <p className="about-text">
          {isExpanded ? expandedText : initialText}
        </p>
        <button 
          className="read-more-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

export default About;