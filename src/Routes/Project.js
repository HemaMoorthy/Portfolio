import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
const Project = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="PROJECTS" text="Some of my recent Works"/> 
      <Footer/>
    </div>
  )
}

export default Project;