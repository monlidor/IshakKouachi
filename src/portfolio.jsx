// Portfolio.js
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Navbar from "./navbar";
import Tpbox from "./box";
import About from './aboutme';
import Skills from './skills';
import Contact from './contact';

const Portfolio = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div> 
        <header>
        <h5 className="name"><Link to="/" className="name">Ishak Kouachi portfolio</Link></h5>
        <nav>
          <ul className="navlink">
            <li><Link to="#about">About Me</Link></li>
            <li><Link to="#tp">TP's</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header> 
       <About />
      <Tpbox />
      <Skills />
      <Contact />

    </div>
  );
};

export default Portfolio;
