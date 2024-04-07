import React, { useEffect } from 'react';
import image from '../Images/land.jpg';
import './Home.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Home = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:mishraabhinay814@example.com';
    };

    const handleDownloadResumeClick = () => {
        const resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/github-da89c.appspot.com/o/Resume.pdf?alt=media&token=49bf9c4d-ce5c-4e80-8a44-71b6e923b806';
        window.open(resumeUrl, '_blank');
    };
    const handleHireMeClick = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";

        let changeText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        changeText();
        const intervalId = setInterval(changeText, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='home' id='home'>
            <div className='home-content'>
                <h1>Hi! I'm Abhinay Mishra</h1>
                <div className='change-text'>
                    <h3>And I'm</h3>
                    <h3>
                        <span className='word'>Software &nbsp; Engineer</span>
                        <span className='word'>Web &nbsp; Developer</span>
                        <span className='word'>Mern &nbsp; Developer</span>
                    </h3>
                </div>
                <div className='btn-box'>
                    <button className='btn' onClick={handleDownloadResumeClick}> Download Resume </button>
                    <button className='btn' onClick={handleHireMeClick}>Hire Me Now</button>
                </div>
                <div className='social-icons'>
                    <a href='https://www.instagram.com/abhinay_mishra?igsh=dXNiend0MXgxNnAx' target="_blank" rel="noopener noreferrer" className='icon-box'><FaInstagram /></a>
                    <div className='icon-box' onClick={handleMailClick} ><IoMail /></div>
                    <a href='https://github.com/Abhinay148' target="_blank" rel="noopener noreferrer" className='icon-box'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/abhinay-mishra-32bb38241/' target="_blank" rel="noopener noreferrer" className='icon-box'><FaLinkedin /></a>
                </div>
            </div>
            <div className='home-image'>
                <div className='img-box'>
                    <img src={image} alt="home" />
                </div>
            </div>
        </div>
    );
}

export default Home;
