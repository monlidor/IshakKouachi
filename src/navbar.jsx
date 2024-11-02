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
            <li><Link to="/tp1">TP1</Link></li>
            <li><Link to="#">TP2</Link></li>
            <li><Link to="#">TP3</Link></li>
            <li><Link to="#">TP4</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;