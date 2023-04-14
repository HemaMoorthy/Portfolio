import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
import WorkCard from '../Components/WorkCard';
const Project = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="PROJECTS" text="Some of my recent Works"/> 
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project;