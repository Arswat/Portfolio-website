import "./Pricingcard.css";

import React from "react";

import { Link } from "react-router-dom";

const Pricingcard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>- 3 days -</p>
          <p>- 2 pages -</p>
          <p>- Featured -</p>
          <p>- R-esponsive deisgn -</p>
          <Link to="/contact" className="btn">PURHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$200</p>
          <p>- 5 days -</p>
          <p>- 4 pages -</p>
          <p>- Featured -</p>
          <p>- R-esponsive deisgn -</p>
          <Link to="/contact" className="btn">PURHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$300</p>
          <p>- 7 days -</p>
          <p>- 6 pages -</p>
          <p>- Featured -</p>
          <p>- R-esponsive deisgn -</p>
          <Link to="/contact" className="btn">PURHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default Pricingcard