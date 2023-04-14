import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProjImg from '../Components/ProjImg';
import Form1 from '../Components/Form1';
const Contact = () => {
  return (
    <div>
      <NavBar/>
      <ProjImg heading="Contact" Text="Let's Have a Chat"/>
      <Form1/>
      <Footer/>
    </div>
  )
}

export default Contact