// Portfolio.js
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Portfolio = () => {
  return (
    <div>
      <header>
        <h5 className="name">Ishak Kouachi portfolio</h5>
        <nav>
          <ul className="navlink">
            <li><Link to="/tp1">TP1</Link></li>
            <li><Link to="#">TP2</Link></li>
            <li><Link to="#">TP3</Link></li>
            <li><Link to="#">TP4</Link></li>
          </ul>
        </nav>
      </header>

      <h1 className="Wellcome">Welcome to Ishak's Portfolio</h1>

      <p className="textcont">
        TP1 is about creating a table and chairs using Blender: <Link className="gototp" to="/tp1">Click here</Link>
      </p>
      <img className="imgtp1" src="/public/Chaire.png" alt="Chair for TP1" />

      <p className="textcont">
        TP2 is about ... <Link className="gototp" to="#">Click here</Link>
      </p>
    </div>
  );
};

export default Portfolio;
