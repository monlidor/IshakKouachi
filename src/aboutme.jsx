import React from 'react';
import './infop.css';

const About = () => {
  return (
    <section id="about" className="containers">
      <div className="titletx">About Me</div>
      <div className="section-box">
            <div className="about-header">
                <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Profile" />
                <div className="about-details">
                    <h2>Kouachi Ishak</h2>
                    <p>Master 2, IDTW - Groupe 2</p>
                    <p>Université Ferhat Abbas Sétif 1</p>
                    <p>Email: ishakjbd@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
