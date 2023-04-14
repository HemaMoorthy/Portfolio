import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
const About = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="About" Text="I am a Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About