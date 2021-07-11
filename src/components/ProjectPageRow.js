import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation/basicAnimation';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
const ProjectPageRow = ({ image, text }) => {
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
    return (
        <div>
            <div ref={ref} className='project-workflow'>
                <motion.div
                    className='worflow-inner'
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(200, 1)}
                >
                    <div className='workflow'>
                        <img className='table-img' src={image} alt='' />
                    </div>
                    <div className='workflow-text'>
                        <p>{text}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectPageRow;
