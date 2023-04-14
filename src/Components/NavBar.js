import "./NavBar.css";
import React from 'react'
import {Link} from 'react-router-dom';

import {FaBars} from "react-icons/fa";
const NavBar = () => {
    const blueStyle = { color: 'rgb(44, 187, 248)' };
  return (
    <div className="header">
         <Link to="/"> 
         <h1><span style={blueStyle}>Hema</span>Moorthy<span style={blueStyle}>.com</span></h1>
         
         </Link> 
         <ul className="nav-menu">  
            <li>
                <Link to="/">Home</Link>
            </li> 
            <li>
                <Link to="/about">About</Link>
            </li> 
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            
         </ul>

         <div className="hamburger">
            <FaBars size={20} style={{color:"white"}}/>
         </div>
    </div>
  )
}

export default NavBar