import React from 'react';
import Image from '../Images/doc.jpg';
import Image1 from '../Images/music.jpg';
import Image2 from '../Images/todo.jpg';
import Image3 from '../Images/job.jpg';
import './Project.css';
const Project = () => {
  return (
    <div className="projects-container" id='project'>
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src={Image} alt="Project 1" className="project-image" />
          <div className="project-content">
            <h2 className="project-title">Doctor Appointment Website</h2>
            <div className="btn-box">
              <button className="btn">GitHub</button>
              {/* <button className="website-btn">Website</button> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Image1} alt="Project 1" className="project-image" />
          <div className="project-content">
            <h2 className="project-title">Music Player Application</h2>
            <div className="btn-box">
              <button className="btn">GitHub</button>
              {/* <button className="website-btn">Website</button> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Image2} alt="Project 1" className="project-image" />
          <div className="project-content">
            <h2 className="project-title">Todo Application</h2>
            <div className="btn-box">
              <button className="btn">GitHub</button>
              {/* <button className="website-btn">Website</button> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Image3} alt="Project 1" className="project-image" />
          <div className="project-content">
            <h2 className="project-title">Task Management Application</h2>
            <div className="btn-box">
              <button className="btn">GitHub</button>
              {/* <button className="website-btn">Website</button> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Image} alt="Project 1" className="project-image" />
          <div className="project-content">
            <h2 className="project-title">Project Title</h2>
            <div className="btn-box">
              <button className="btn">GitHub</button>
              {/* <button className="website-btn">Website</button> */}
            </div>
          </div>
        </div>
        
        
        </div>
    </div>
  );
};

export default Project;
