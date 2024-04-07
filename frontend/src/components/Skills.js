import React from 'react';
import html from '../Images/html.png';
import css from '../Images/css.png';
import js from '../Images/javascript.png';
import react from '../Images/react.png';
import download from '../Images/node.png';
import dsa from '../Images/dsa.jpg';
import mongo from '../Images/mongo.png';
import android from '../Images/android.png';
import java from '../Images/java.png';
import xml from '../Images/xml.png';
import './Skills.css';
const Skills = () => {
  return (
    <div className="skills-container" id='skills'>
      <h1 className="skills-heading">My Technical Skills</h1>
      <div className="skills-grid">
        <div className="skill-card">
          <img src={java} alt="java" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={react} alt="React" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={html} alt="HTML" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={css} alt="css" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={js} alt="js" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={download} alt="nodejs" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={dsa} alt="dsa" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={mongo} alt="mongodb" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={android} alt="android" className="skill-image" />
        </div>
        <div className="skill-card">
          <img src={xml} alt="xml" className="skill-image" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
