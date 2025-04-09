import React from 'react';

const projectsData = [
    {
        title: 'Nom du Projet 1',
        description: 'Description du projet 1.',
        link: 'https://github.com/ton-utilisateur/nom-du-projet-1',
    },
    {
        title: 'Nom du Projet 2',
        description: 'Description du projet 2.',
        link: 'https://github.com/ton-utilisateur/nom-du-projet-2',
    },
    // Ajoutez d'autres projets ici
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projets</h2>
            {projectsData.map((project, index) => (
                <div className="project" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                </div>
            ))}
        </section>
    );
};

export default Projects;