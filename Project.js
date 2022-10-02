import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/Work";
import Pricingcard from "../components/Pricingcard";

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="Projects" text="Some of my most recent works"/>
      <Work/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default Project