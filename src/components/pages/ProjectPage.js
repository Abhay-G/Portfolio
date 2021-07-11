import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import Contact from '../Contact';
import ProjectPageRow from '../ProjectPageRow';
import ProjectPageRowReverse from '../ProjectPageRowReverse';
import { Link, useParams, useHistory } from 'react-router-dom';
import projects from '../../utility/detaileddata';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { line, fadeUp, stagger, opacity } from '../../animation/basicAnimation';

const ProjectPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    let history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        setProject(projects.find((project) => project.id === projectId));
    }, [projectId]);
    const { ref, inView } = useInView({
        rootMargin: '-200px',
        triggerOnce: true,
    });
    const animation1 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation1.start('animate');
        }
    }, [inView, animation1]);
    function handleClick() {
        history.goBack();
    }
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
                    <button id='close' type='button' onClick={handleClick}>
                        close
                    </button>

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
                <ProjectPageRow
                    image={project.projectPlan}
                    text={project.plandesc}
                />
                <ProjectPageRowReverse project={project} />

                {project.formula && (
                    <ProjectPageRow
                        image={project.formula}
                        text={project.formuladesc}
                    />
                )}
                <div ref={ref} className='next-project'>
                    <div className='next-project-inner'>
                        <motion.div
                            className='line'
                            animate={animation1}
                            initial='initial'
                            variants={line}
                        ></motion.div>
                        <motion.p
                            id='next-category'
                            animate={animation1}
                            initial='initial'
                            variants={fadeUp(100, 1)}
                        >
                            {project.id === '4' ? 'Next' : 'Next Project'}
                        </motion.p>
                        <motion.div
                            animate={animation1}
                            initial='initial'
                            variants={fadeUp(250, 0.8)}
                        >
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
                        </motion.div>
                    </div>
                </div>
            </div>
            <Contact />
        </motion.div>
    );
};

export default ProjectPage;
