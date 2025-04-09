import React from 'react';

const skillsData = [
    {
        id: 1,
        name: 'HTML',
        icon: 'path/to/html-icon.png',
    },
    {
        id: 2,
        name: 'CSS',
        icon: 'path/to/css-icon.png',
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: 'path/to/js-icon.png',
    },
    {
        id: 4,
        name: 'React',
        icon: 'path/to/react-icon.png',
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>Compétences</h2>
            <div className="skills-container">
                {skillsData.map(skill => (
                    <div className="skill-card" key={skill.id}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;