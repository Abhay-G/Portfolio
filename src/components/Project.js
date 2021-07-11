import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fadeUp, zoomIn } from '../animation/basicAnimation';
const Project = ({ project, reverse }) => {
    const { id, name, description, techStack, img, category } = project;
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
        <div ref={ref} className='project-section-inner'>
            <div className={`project-row ${reverse ? 'reverse' : 'normal'}`}>
                <motion.div
                    className='project-desc'
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(200, 0.8)}
                >
                    <p>{description}</p>
                    <h3 className='tech-stack'>{techStack}</h3>
                </motion.div>
                <motion.div
                    className='project-img'
                    animate={animation1}
                    initial='initial'
                    variants={zoomIn}
                >
                    <img src={img} alt='' />
                    <div className='project-nav'>
                        <Link className='in-link' to={`/projects/${id}`}>
                            <h3>{name}</h3>
                        </Link>
                        <p>{category}</p>
                        <Link to={`/projects/${id}`}>
                            <RightArrow />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Project;
