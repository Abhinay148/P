import React, { useState } from 'react';
import Image from './image.png';
import './About.css';

const About = () => {
  // Sample data
  const randomInfo = "Greetings! I'm Abhinay Mishra, an enthusiastic Full Stack Developer dedicated to pushing the boundaries of technology. Armed with a Bachelor's degree in Computer Science from CH. Devi Lal State Institute Of Engineering & Technology, I've immersed myself in a diverse range of coursework, from mastering Java and Data Structures to delving into the intricacies of Database Management Systems and Software Quality Testing. My journey into the world of programming began with a fascination for problem-solving, leading me to develop proficiency in languages like Core Java and DSA, as well as mastering front-end technologies like HTML, CSS, and JavaScript.Driven by a passion for creating seamless user experiences, I've delved into frameworks such as React.js and Node.js, leveraging their power to build dynamic and interactive web applications. One of my proudest achievements is the Doctor's Appointment Website, where I led a team to develop a robust platform that simplifies the appointment booking process for patients and streamlines report management for doctors. Utilizing a tech stack comprising MongoDB, Firebase, and Node.js.Beyond technical prowess, I'm a firm believer in the importance of soft skills in driving project success. With a knack for leadership and effective time management, I've successfully led teams through the development lifecycle, from ideation to deployment. Whether it's coordinating project milestones or managing stakeholder expectations, I thrive in dynamic environments where collaboration and innovation intersect.";

  // State for showing more text
  const [showMore, setShowMore] = useState(false);

  // Function to toggle showing more text
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container" id='about'>
      <div className="about-content">
        <h1>About Me</h1>
        <div className="content-wrapper">
          <div className="image-box">
            <img src={Image} alt="Person" className="person-image" />
          </div>
          <div className="text-content">
            <p>{randomInfo}</p>
            {showMore && (
              <p>
                My commitment to continuous growth is evident in my pursuit of additional training, such as the Web Development program by TechGyan Technologies, where I further honed my skills in HTML, CSS, and JavaScript. I'm always eager to expand my knowledge and embrace emerging technologies, staying at the forefront of the ever-evolving tech landscape.

                  In essence, I'm not just a coder—I'm a problem solver, a team player, and a visionary driven by the belief that technology has the power to transform lives. Let's connect and embark on a journey to turn ideas into reality!
              </p>
            )}
            <button onClick={toggleShowMore} className="read-more-btn">
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
