// Portfolio.js
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "./navbar";

const Portfolio = () => {
  return (
    <div> 
       <Navbar />
      <h1 className="Wellcome">Welcome to Ishak's Portfolio</h1>

      <p className="textcont">
        TP1 is about creating a table and chairs using Blender: <Link className="gototp" to="/tp1">Click here</Link>
      </p>
      <img className="imgtp1" src={`${process.env.PUBLIC_URL}/Chaire.png`} alt="Chaire" />

      <p className="textcont">
        TP2 is about ... <Link className="gototp" to="#">Click here</Link>
      </p>
    </div>
  );
};

export default Portfolio;
