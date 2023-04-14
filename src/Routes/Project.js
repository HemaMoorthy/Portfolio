import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
import Work from '../Components/Work';
const Project = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="PROJECTS" text="Some of my recent Works"/> 
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;