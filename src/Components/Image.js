import "./Image.css";
import React from 'react';
import IntroImg from "../assets/home1.jpg";
import {Link} from "react-router-dom";
const Image = () => {
  return (
    <div className="homeimage">
        <div className="mask">
            <img className="intro-img" src={IntroImg}></img>
        </div>
        <div className="content">
            <p>HI, I AM HEMA</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light ">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Image