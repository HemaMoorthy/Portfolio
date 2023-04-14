import "./NavBar.css";
import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="header">
         <Link to="/"> 
         <h1>Portfolio</h1>
         </Link> 
         <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Project</Link>
                <Link to="/">Contact</Link>
            </li>
         </ul>
    </div>
  )
}

export default NavBar