import React from 'react';
import Project from './Project';
import projects from '../utility/data';
const ProjectSection = () => {
    return (
        <div id='projects'>
            <div className='line'></div>
            <p id='next-category'>Next Category</p>
            <div className='sec-heading'>
                <h2>Selected</h2>
                <h2 id='projects'>Projects</h2>
            </div>
            {projects.map((project) => {
                return (
                    <Project
                        key={project.id}
                        project={project}
                        reverse={project.id % 2 === 0}
                    />
                );
            })}
        </div>
    );
};

export default ProjectSection;
