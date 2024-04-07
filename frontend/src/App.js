import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Education id="Education" />
      <Skills id="skills" />
      <Project id="project" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
