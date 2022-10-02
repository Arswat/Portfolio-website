import "./Aboutcontent.css";

import React from 'react'
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react developer.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={react1} className="img" alt="true"/>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent