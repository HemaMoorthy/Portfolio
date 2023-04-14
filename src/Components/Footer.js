import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaLinkedinIn, FaGithub, FaTwitter} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <FaHome size={20} style={{ color:"#fff",marginRight:"2rem"
                }}/>
                <div>
                    <p>123 Seenapuram</p>
                    <p>Erode</p>
                </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color:"#fff",marginRight:"2rem"}}/>63827 95704</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color:"#fff",marginRight:"2rem"}}/>hemamoorthy8@gmail.com</h4>
                </div>
            </div>


            <div className='right'>
                <h4>About Me</h4>
                <p>This is Hema Moorthy.Student of Kongu Engineering College. I enjoy Learning New things and Designing the Website.</p>
                <div className="social">
                <FaLinkedinIn size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                <FaGithub size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{ color:"#fff",marginRight:"1rem"}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer