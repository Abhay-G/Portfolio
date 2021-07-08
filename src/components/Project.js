import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Project = ({ project, reverse }) => {
    const { id, name, description, techStack, img, category } = project;
    return (
        <div className='project-section-inner'>
            <div className={`project-row ${reverse ? 'reverse' : 'normal'}`}>
                <div className='project-desc'>
                    <p>{description}</p>
                    <h3 className='tech-stack'>{techStack}</h3>
                </div>
                <div className='project-img'>
                    <img src={img} alt='' />
                    <div className='project-nav'>
                        <Link className='in-link' to={`/projects/${id}`}>
                            <h3>{name}</h3>
                        </Link>
                        <p>{category}</p>
                        <RightArrow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
