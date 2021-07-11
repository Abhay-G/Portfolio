import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animation/basicAnimation';
const Navbar = () => {
    return (
        <div className='nav'>
            <motion.div
                variants={fadeUp(100, 0.8)}
                initial='initial'
                animate='animate'
            >
                <img src={logo} alt='AG logo' />
            </motion.div>
            <div className='middle'>
                <motion.ul variants={stagger(0.2)}>
                    <motion.div variants={fadeUp(100, 0.8)}>
                        <Link
                            to='projects'
                            className='in-nav-link nav-items'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                        >
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div variants={fadeUp(100, 0.8)}>
                        <Link
                            to='about'
                            className='in-nav-link nav-items'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={2000}
                        >
                            About
                        </Link>
                    </motion.div>

                    <motion.a
                        href='/resume.pdf'
                        target='_blank'
                        rel='noreferrer'
                        className='in-nav-link nav-items'
                        variants={fadeUp(100, 0.8)}
                    >
                        Resume
                    </motion.a>
                    <motion.div variants={fadeUp(100, 0.8)}>
                        <Link
                            to='contact'
                            className='in-nav-link nav-items'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={2500}
                        >
                            Contact Me.
                        </Link>
                    </motion.div>
                </motion.ul>
            </div>
            <motion.div id='right' variants={fadeUp(100, 0.8)}>
                <Link
                    to='contact'
                    className='in-nav-link nav-items'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2500}
                >
                    Contact Me.
                </Link>
            </motion.div>
        </div>
    );
};

export default Navbar;
