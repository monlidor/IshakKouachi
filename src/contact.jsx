import React from 'react';
import './infop.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    return (
        <section id="contact">
            <div className="titletx">Contact</div>
            <div className="contact-container">
            <div className="social-links">
                <a href="https://www.instagram.com/ishak_kouachi/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://www.facebook.com/Monlidor/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
                <a href="https://github.com/monlidor" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href="ishakjbd@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                </a>
            </div>
        </div>
        </section>
    );
}

export default Contact;