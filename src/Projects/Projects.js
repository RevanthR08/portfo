import React from 'react';
import './Projects.css';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>
        My recent <span className="highlight">works</span>
      </h1>
      
      <div className="filter-buttons">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">UI</button>
        <button className="filter-btn">UX</button>
        <button className="filter-btn">Web Design</button>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img src={proj1} alt="Project 1" />
          <div className="project-overlay">
            <h3>Dark Theme UI</h3>
            <p>Web Design</p>
          </div>
        </div>

        <div className="project-card">
          <img src={proj2} alt="Project 2" />
          <div className="project-overlay">
            <h3>Modern Design</h3>
            <p>UI/UX Design</p>
          </div>
        </div>

        <div className="project-card">
          <img src={proj3} alt="Project 3" />
          <div className="project-overlay">
            <h3>Minimal Interface</h3>
            <p>Web Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;