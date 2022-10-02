import "./Workcard.css";
import Workcard from "./Workcard";
import Workcarddata from "./Workcarddata";

import React from 'react';

const work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {Workcarddata.map((val,ind)=>{
        return (
            <Workcard
             key={ind}
             imgsrc={val.imgsrc}
             title={val.title}
             />
        );
       })}
      </div>
    </div>
  )
}

export default work