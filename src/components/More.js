import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowright from '../assets/arrow-right2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { opacity, rightReveal } from '../animation/basicAnimation';
const More = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const animation1 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation1.start('animate');
        }
    }, [inView, animation1]);
    return (
        <motion.div
            ref={ref}
            className='more-section'
            animate={animation1}
            initial='initial'
            variants={opacity}
        >
            <div className='more-inner'>
                <motion.div
                    className='more-content'
                    animate={animation1}
                    initial='initial'
                    variants={rightReveal(300, 1, 0)}
                >
                    <Link className='in-link' to='/more/morework'>
                        <h2>More Work</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <Link to='/more/morework'>
                        <img id='img-link' src={arrowright} alt='' />
                    </Link>
                </motion.div>
                <motion.div
                    className='more-content'
                    animate={animation1}
                    initial='initial'
                    variants={rightReveal(300, 1.2, 0.2)}
                >
                    <Link className='in-link' to='/more/focus'>
                        <h2>Current Focus</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <Link to='/more/focus'>
                        <img id='img-link' src={arrowright} alt='' />
                    </Link>
                </motion.div>
                <motion.div
                    className='more-content'
                    animate={animation1}
                    initial='initial'
                    variants={rightReveal(300, 1.4, 0.4)}
                >
                    <Link className='in-link' to='/more/education'>
                        <h2>Education</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <Link to='/more/education'>
                        <img id='img-link' src={arrowright} alt='' />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default More;
