import React from 'react';
import Common from './Common';
import web from '../img/1.jpg'; 
const About = () => {
  return (
    <>
      <Common 
    name ='Welcome To About Page'
    imgsrc={web}
    btname ='Contact Us'
    visit ='/contact'/>
    </>
    
  )
}

export default About
