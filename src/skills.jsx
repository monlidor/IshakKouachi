import React from 'react';
import './infop.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faVideo } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skills = [
        { name: 'Design', description: 'Using Adobe photoshop , illustrator , Blender.', icon: faPaintBrush },
        { name: 'Programming', description: 'Using HTML , CSS , JS , PHP (Laravel framework) , C++ .', icon: faCode },
        { name: 'Editing', description: 'Using Adobe premier pro , After effects , Davinci resolve.', icon: faVideo }
    ];

    return (
        <section id="skills">
            <div className="titletx">Skills</div>
            <div className="skills-container">
            <div className="skills-boxes">
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Skills;
