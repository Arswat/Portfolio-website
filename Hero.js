import "./Herostyle.css";

import React from 'react';
import introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={introimg} alt="introimg"/>
        </div>
        <div className="content">
          <p>Hi, I'm a freelancer</p>
          <h1>React developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero