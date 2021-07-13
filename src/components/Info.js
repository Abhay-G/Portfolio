import { useEffect } from 'react';
import downArrow from '../assets/downArrow.svg';
import rightArrow from '../assets/arrow-right2.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fadeUp, opacity } from '../animation/basicAnimation';
const Info = () => {
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
        <motion.div
            ref={ref}
            className='info'
            animate={animation1}
            initial='initial'
            variants={opacity(1.2)}
        >
            <div className='info-left'>
                <div className='left-content'>
                    <motion.h2
                        className='heading'
                        animate={animation1}
                        initial='initial'
                        variants={fadeUp(100, 1)}
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.p
                        className='info-content'
                        animate={animation1}
                        initial='initial'
                        variants={fadeUp(200, 1)}
                    >
                        I can handle all the work of servers, routes, databases
                        and clients. I can also make wonderful UIs and amazing
                        user experience and that's what makes me a Full Stack
                        Developer.
                    </motion.p>
                    <div className='hidden-more'>
                        <motion.h3
                            animate={animation1}
                            initial='initial'
                            variants={fadeUp(100, 1)}
                        >
                            More about me
                        </motion.h3>
                        <motion.div
                            animate={animation1}
                            initial='initial'
                            variants={fadeUp(200, 1.2)}
                        >
                            <Link
                                to='about'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2000}
                            >
                                <img src={rightArrow} alt='' />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='right-content'>
                <motion.h2
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(100, 1)}
                >
                    more about me
                </motion.h2>
                <motion.div
                    animate={animation1}
                    initial='initial'
                    variants={fadeUp(200, 1.2)}
                >
                    <Link
                        to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}
                    >
                        <img src={downArrow} alt='' />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Info;
