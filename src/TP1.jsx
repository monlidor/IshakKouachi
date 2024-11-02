// TP1.js
import React from "react";
import ThreeDViewer from "./Chairemodule"; // Adjust the path if needed
import Navbar from "./navbar";


const TP1 = () => {
  return (
    <div>
      <Navbar />
      <div id="info">This is my 3D Model Viewer</div>
      <ThreeDViewer /> {/* Render the 3D viewer here */}
      <p>Hello to zater web</p>
    </div>
  );
};

export default TP1;
