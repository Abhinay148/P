import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import './Education.css';

const Education = () => {
 return(
    <section className='education' id='education'>
        <h1 className='heading'> <span>My Education</span></h1>
        <div className='box-container'>
            <div className='box'>
                <FaGraduationCap className='icon' />
                <span>2019-2023</span>
                <h3>B.Tech CSE</h3>
                <h5> Grade: 7.5 CGPA</h5>
                <p>Ch.Devi Lal State Institute of Engineering & Technology, Sirsa, Haryana</p>
            </div>
            <div className='box'>
                <FaGraduationCap className='icon' />
                <span>2017-2018</span>
                <h3>Senior Secondary</h3>
                <h5> Grade: 82.6%</h5>
                <p>P.K.R Jain Sen. SEc. Public School Ambala City, Haryana</p>
            </div>
            <div className='box'>
                <FaGraduationCap className='icon' />
                <span>2015-2016</span>
                <h3>Matriculation</h3>
                <h5> Grade: 9.6 CGPA</h5>
                <p>P.K.R Jain Sen. SEc. Public School Ambala City, Haryana</p>
            </div>
        </div>
    </section>
 );
}

export default Education;
