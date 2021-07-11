import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation/basicAnimation';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
const ProjectPageRowReverse = ({ project }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const animation1 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation1.start('animate');
        }
    }, [inView, animation1]);
    return (
        <div ref={ref} className='project-workflow'>
            <motion.div
                className='worflow-inner reverse'
                animate={animation1}
                initial='initial'
                variants={fadeUp(200, 1)}
            >
                {project.codeSnippets &&
                    project.codeSnippets.map((code, idx) => (
                        <div key={idx} className='workflow'>
                            <img className='table-img' src={code} alt='' />
                        </div>
                    ))}
                <div className='workflow-text'>
                    <p>{project.codedesc}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectPageRowReverse;
