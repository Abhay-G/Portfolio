import { useEffect } from 'react';
import Project from './Project';
import projects from '../utility/data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fadeUp, line } from '../animation/basicAnimation';
const ProjectSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });
    const animation1 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation1.start('animate');
        }
    }, [inView, animation1]);
    return (
        <div ref={ref} id='projects'>
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
                Next Category
            </motion.p>
            <div className='sec-heading'>
                <motion.h2
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(250, 0.8)}
                >
                    Selected
                </motion.h2>
                <motion.h2
                    id='projects'
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(350, 0.6)}
                >
                    Projects
                </motion.h2>
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
