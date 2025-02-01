import React from 'react';
import { Link } from 'react-router-dom';
import './boxs.css';

const Tpbox = () => {
  return (
    <section id="tp">
              <div className="titletx">TP's Works</div>
    <div className="container">
      <div className="box">
        <img src={`${process.env.PUBLIC_URL}/Chaire.png`} alt="Image 1" />
        <h2>TP1</h2>
        <p>creating a table and chairs using Blender</p>
        <Link className="button" to="/tp1">Go to TP1</Link>
      </div>
      <div className="box">
        <img src={`${process.env.PUBLIC_URL}/Waterimg.jpg`} alt="Image 2" />
        <h2>TP2</h2>
        <p>water sumilation</p>
        <Link className="button" to="/tp2">Go to TP2</Link>
      </div>
      <div className="box">
        <img src={`${process.env.PUBLIC_URL}/cube.png`} alt="Image 3" />
        <h2>TP3</h2>
        <p>three js cube</p>
        <Link className="button" to="/tp3">Go to TP3</Link>
      </div>
      <div className="box">
        <img src="image4.jpg" alt="Image 4" />
        <h2>TP4</h2>
        <p>This is the description for box 4.</p>
        <Link className="button" to="/tp1">Go to TP4</Link>
      </div>
    </div>
    </section>
  );
};

export default Tpbox;
