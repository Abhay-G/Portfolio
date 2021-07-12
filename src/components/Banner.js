import github from '../assets/github.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeUp, zoomIn, stagger } from '../animation/basicAnimation';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <motion.div
                    variants={stagger(0.2)}
                    initial='initial'
                    animate='animate'
                    className='banner-inner'
                >
                    <motion.div variants={fadeUp(100, 1)} className='name'>
                        Abhay Gupta
                    </motion.div>
                    <motion.div
                        variants={fadeUp(100, 1)}
                        className='heading one'
                    >
                        <Link
                            to='projects'
                            className='in-link'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            Web developer
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeUp(100, 1)}
                        className='heading two'
                    >
                        <Link
                            to='projects'
                            className='in-link'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                        >
                            UI developer
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={stagger(0.2)}
                    initial='initial'
                    animate='animate'
                >
                    <motion.div
                        variants={zoomIn}
                        className='cover cover-github'
                    >
                        <a
                            href='https://github.com/Abhay-G'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='github'
                                src={github}
                                alt='github link'
                            />
                        </a>
                    </motion.div>
                    <motion.div variants={zoomIn} className='cover cover-mail'>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='mailto:abhayg.0704@gmail.com'
                        >
                            <img className='mail' src={mail} alt='mail link' />
                        </a>
                    </motion.div>
                    <motion.div
                        variants={zoomIn}
                        className='cover cover-linkedin'
                    >
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.linkedin.com/in/abhay-g07/'
                        >
                            <img
                                className='linkedin'
                                src={linkedin}
                                alt='linkedin link'
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
