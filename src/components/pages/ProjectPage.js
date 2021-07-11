import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import Contact from '../Contact';
import { Link, useParams } from 'react-router-dom';
import projects from '../../utility/detaileddata';
import { motion } from 'framer-motion';
import { line, fadeUp, stagger, opacity } from '../../animation/basicAnimation';
const ProjectPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        setProject(projects.find((project) => project.id === projectId));
    }, [projectId]);
    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={opacity(0.8)}
        >
            <div className='projects-hero'>
                <div className='projects-header'>
                    <motion.h1 variants={fadeUp(30, 0.8)}>
                        {project.name}
                    </motion.h1>

                    <Link id='close' className='in-link' to='/'>
                        close
                    </Link>

                    <motion.div variants={line} className='line'></motion.div>
                    <div className='project-info'>
                        <motion.div
                            variants={stagger(0.2)}
                            className='info-container'
                        >
                            <motion.p
                                variants={fadeUp(100, 0.8)}
                                className='info-heading'
                            >
                                Date
                            </motion.p>
                            <motion.p
                                variants={fadeUp(200, 0.8)}
                                className='info-part'
                            >
                                {project.date}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={stagger}
                            className='info-container second'
                        >
                            <motion.p
                                variants={fadeUp(100, 0.8)}
                                className='info-heading'
                            >
                                Category
                            </motion.p>
                            <motion.ul variants={fadeUp(200, 0.8)}>
                                {project.categories &&
                                    project.categories.map((category, idx) => (
                                        <li key={idx} className='info-part'>
                                            {category}
                                        </li>
                                    ))}
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            variants={stagger(0.2, 0.8)}
                            className='info-container'
                        >
                            <motion.p
                                variants={fadeUp(100, 0.8)}
                                className='info-heading'
                            >
                                Location
                            </motion.p>
                            <motion.p
                                variants={fadeUp(200, 0.8)}
                                className='info-part'
                            >
                                {project.location}
                            </motion.p>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={stagger(0.2, 0.5)}
                        className='about-project'
                    >
                        <motion.h3 variants={fadeUp(100, 0.8)}>
                            The Brief
                        </motion.h3>
                        <motion.p variants={fadeUp(200, 0.8)}>
                            {project.brief}
                        </motion.p>
                    </motion.div>
                </div>

                <Carousel projectImages={project.images} />
                <div className='project-workflow'>
                    <div className='worflow-inner'>
                        <div className='workflow'>
                            <img
                                className='table-img'
                                src={project.projectPlan}
                                alt=''
                            />
                        </div>
                        <div className='workflow-text'>
                            <p>{project.plandesc}</p>
                        </div>
                    </div>
                </div>
                <div className='project-workflow'>
                    <div className='worflow-inner reverse'>
                        {project.codeSnippets &&
                            project.codeSnippets.map((code, idx) => (
                                <div key={idx} className='workflow'>
                                    <img
                                        className='table-img'
                                        src={code}
                                        alt=''
                                    />
                                </div>
                            ))}
                        <div className='workflow-text'>
                            <p>{project.codedesc}</p>
                        </div>
                    </div>
                </div>
                {project.formula && (
                    <div className='project-workflow'>
                        <div className='worflow-inner'>
                            <div className='workflow'>
                                <img
                                    className='table-img'
                                    src={project.formula}
                                    alt=''
                                />
                            </div>
                            <div className='workflow-text'>
                                <p>{project.formuladesc}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='next-project'>
                    <div className='next-project-inner'>
                        <div className='line'></div>
                        <p id='next-category'>
                            {project.id === '4' ? 'Next' : 'Next Project'}
                        </p>
                        <Link
                            className='in-link'
                            to={
                                project.id === '4'
                                    ? '/'
                                    : `/projects/${project.nextId}`
                            }
                        >
                            {project.nextProject}
                        </Link>
                    </div>
                </div>
            </div>
            <Contact />
        </motion.div>
    );
};

export default ProjectPage;
