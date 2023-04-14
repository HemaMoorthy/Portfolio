import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
import AboutContent from '../Components/AboutContent';
const About = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="About" Text="I am a Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About