import React from "react";
import Navbar from "./navbar";
import './tp.css';


const TP2 = () => {
  return (
    <div>
      <Navbar />
      <div className="titletx">TP2</div>
      <div className="paragraph">
  In this TP2, we explored the simulation of water in 3D environments using Blender.
   By utilizing Blender’s advanced fluid simulation tools, we were able to replicate the physical
    properties of water, including its flow, behavior, and interaction with other objects. 
    The process involved setting up fluid domains, adjusting viscosity, and fine-tuning the 
    resolution to achieve realistic water movement. This simulation is essential for creating dynamic,
     lifelike scenes in animation, game development, and visual effects, providing a deeper 
     understanding of how fluids behave in real-world scenarios.
</div>


      <div className="titletx">Render Video</div>
      <div className="wrapper">
      <div className="view"><video width="100%" controls>
  <source src={`${process.env.PUBLIC_URL}/WaterRend.mp4`} type="video/mp4" />
  Your browser does not support the video tag.
</video></div>
      </div>
      <div className="titletx">Render Image</div>
      <div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/Waterimg.jpg`}></img>
      </div>
      <div className="titletx">Some tips</div>
      <div className="paragraph">
  <b>1 - </b>If you want to simulate substances like <b>honey, slime, or other viscous materials</b>, 
  you can adjust the <b>Viscosity</b> parameter in the <b>Fluid Domain</b> settings in Blender.
   To do this, go to the Fluid panel in the Physics Properties, select the <b>"Domain"</b> object,
    and then modify the <b>"Viscosity"</b> value under the "Fluid" settings. A higher viscosity
     value will make the fluid behave more like honey or syrup, while a lower value will
      make it flow more like water.
</div>
<div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/Viscos.jpg`}></img>
      </div>

<div className="paragraph">
<b>2 - </b>If you want a more <b>realistic rendering of water</b>, with better <b>reflections and light bounces</b>,
   go to the "Light Paths" section in the Render settings. Increase the <b>"Max Bounces"</b> value to
    <b>32 or higher</b> to allow for more accurate light interactions.
     Additionally, adjust the <b>"Transmission"</b> value under the <b>"Light Paths"</b> settings to 
     enhance the transparency and improve the quality of light reflections on the water surface.
</div>
<div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/lightIncres.jpg`}></img>
      </div>

      <div className="paragraph">
      <b>3 - </b> If you want to achieve more detailed and <b>realistic physics simulation</b>, you should increase the
      <b>"Max Samples"</b> in the <b>Render settings</b> and raise the <b>"Resolution Divisions"</b> in the <b>Domain settings</b>.
    Higher values for these parameters will <b>enhance the detail and accuracy of the simulation</b>, 
    but keep in mind that this <b>requires a powerful computer</b> to handle the increased processing demands.
</div>
<div className="paragraph">This in Render Setting</div>
<div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/Maxsamp.jpg`}></img>
      </div>
      <div className="paragraph">This in Domain Setting</div>
      <div className="wrapper">
      <img className="view" src={`${process.env.PUBLIC_URL}/ResDiv.jpg`}></img>
      </div>

      <div className="titletx">Download File Blender</div>
      <div className="wrapper">
        <a 
          href={`${process.env.PUBLIC_URL}/water.blend`} 
          download="water.blend" 
          className="download-button"
        >
          Download Blender File Without Bake
        </a>
      </div>
    </div>
  );
};

export default TP2;
