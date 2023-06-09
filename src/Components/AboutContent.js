import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react'
import react1 from '../assets/bg1.jpg';
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am Web Developer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react1} className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent