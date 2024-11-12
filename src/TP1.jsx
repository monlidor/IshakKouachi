// TP1.js
import React from "react";
import ThreeDViewer from "./Chairemodule"; // Adjust the path if needed
import Navbar from "./navbar";
import './tp.css';


const TP1 = () => {
  return (
    <div>
      <Navbar />
      <div className="titletx">TP1</div>
      <div className="paragraph">
  In this TP, we created a 3D model of a table and chair using Blender, 
  a powerful 3D creation suite. The process involved modeling the objects with precise geometry,
   applying textures to enhance realism, and rendering the final scene. Blender's intuitive sculpting 
   tools and robust material editor allowed us to bring the furniture to life with detailed textures 
   and realistic lighting. The end result is a high-quality, realistic 3D representation of a table 
   and chair that can be used for various applications such as interior design visualization or 3D printing.
</div>

      <div className="titletx">3D Model Viewer</div>
      <div className="wrapper">
      <div className="view"><ThreeDViewer /></div>
      </div>
      <div className="titletx">Render Image</div>
      <div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/Chaire.png`}></img>
      </div>
      <div className="titletx">Download File Blender</div>
      <div className="wrapper">
        <a 
          href={`${process.env.PUBLIC_URL}/ChairAndTable.blend`} 
          download="ChairAndTable.blend" 
          className="download-button"
        >
          Download Blender File
        </a>
      </div>
    </div>
  );
};

export default TP1;
