import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
import './Navbar.css'; 

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    }

    return (
      <header className="header">
          <nav className={`navbar ${isMobile && 'mobile'}`}>
              <div className="navbar-left">
                  {"< ABHINAY MISHRA />"}
              </div>
              <div className="navbar-right">
                  <div id="menu-btn" className="menu-icon" onClick={toggleMobileMenu}>
                      {mobileMenuOpen ? <RxCross1 /> : <IoMenu />}
                  </div>
                  <ul className={`navbar-links ${isMobile && mobileMenuOpen ? 'active' : ''}`}>
                      <li><Link to="home" smooth={true} duration={500} onClick={toggleMobileMenu}>Home</Link></li>
                      <li><Link to="about" smooth={true} duration={500} onClick={toggleMobileMenu}>About</Link></li>
                      <li><Link to="education" smooth={true} duration={500} onClick={toggleMobileMenu}>Education</Link></li>
                      <li><Link to="skills" smooth={true} duration={500} onClick={toggleMobileMenu}>Skills</Link></li>
                      <li><Link to="project" smooth={true} duration={500} onClick={toggleMobileMenu}>Projects</Link></li>
                      <li><Link to="contact" smooth={true} duration={500} onClick={toggleMobileMenu}>Contact Me</Link></li>
                  </ul>
              </div>
          </nav>
      </header>
  );
}

export default Navbar;
