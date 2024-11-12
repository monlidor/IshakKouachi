import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
        <header>
        <h5 className="name"><Link to="/" className="name">Ishak Kouachi portfolio</Link></h5>
        <nav>
          <ul className="navlink">
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/">TP's</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;