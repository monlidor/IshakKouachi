// TP3.js
import React from "react";
import ThreeScenetp3 from "./ThreeScenetp3"; // Adjust the path if needed
import Navbar from "./navbar";
import './tp.css';


const TP3 = () => {
  return (
    <div>
      <Navbar />
      <div className="titletx">TP3</div>
      <div className="paragraph">
  In this TP, we use three js
</div>

      <div className="titletx">3D Model Viewer</div>
      <div className="wrapper">
      <div className="view"><ThreeScenetp3 /></div>
      </div>
      
    </div>
  );
};

export default TP3;
