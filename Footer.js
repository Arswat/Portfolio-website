import "./Footerstyle.css";

import React from "react";

import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
                <p>123 Housing society </p>
                <p>India</p>
            </div>
         </div>
         <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                 1-123-1234-123</h4>
         </div>
         <div className="location">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                info@gmail.com </h4>
         </div>
        </div>
        <div className="right">
         <h4>About me</h4>
         <p>This is a dn-vf fsdn mdsvn jlsdv jsvn dsnvkslk slvsk slvsn sdlnvsl lsvdnlvsn.</p>
         <div className="social">
         <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
         <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
         <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer