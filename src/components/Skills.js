import { useEffect } from 'react';
import { ReactComponent as Circle1 } from '../assets/blob.svg';
import { ReactComponent as Circle2 } from '../assets/blob2.svg';
import ReactLogo from '../assets/react.gif';
import Java from '../assets/java.gif';
import Nodejs from '../assets/nodejs.svg';
import JS from '../assets/javascript.svg';
import Express from '../assets/Expressjs.svg';
import TS from '../assets/typescript.svg';
import Mongodb from '../assets/mongodb.svg';
import Sass from '../assets/sass.svg';
import API from '../assets/api.png';
import Git from '../assets/git.svg';
import Postman from '../assets/postman.svg';
import Bootstrap from '../assets/bootstrap.svg';
import Figma from '../assets/figma.svg';
import Unity from '../assets/unity.svg';
import Gsap from '../assets/gsap.png';
import FM from '../assets/motion.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fadeUp, line, fadeUpDelay } from '../animation/basicAnimation';
const Skills = () => {
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
        <div ref={ref} id='skill-section'>
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
            <motion.h2
                animate={animation1}
                initial='initial'
                variants={fadeUp(250, 0.8)}
            >
                My Skills
            </motion.h2>
            <motion.div
                className='skills'
                animate={animation1}
                initial='initial'
                variants={fadeUpDelay(300, 1, 1)}
            >
                <ul className='skill-list'>
                    <li>
                        <img src={ReactLogo} alt='NodeJS' />
                        <h4>React</h4>
                    </li>
                    <li>
                        <img src={Nodejs} alt='NodeJS' />
                        <h4>NodeJS</h4>
                    </li>
                    <li>
                        <img className='express' src={Express} alt='Express' />
                        <h4>Express</h4>
                    </li>
                    <li>
                        <img src={Mongodb} alt='MongoDB' />
                        <h4>MongoDB</h4>
                    </li>
                </ul>
                <ul className='skill-list'>
                    <li>
                        <img src={Java} alt='Java' />
                        <h4>Java</h4>
                    </li>
                    <li>
                        <img src={JS} alt='Javascript' />
                        <h4>Javascript</h4>
                    </li>
                    <li>
                        <img src={TS} alt='Typescript' />
                        <h4>Typescript</h4>
                    </li>
                    <li>
                        <img src={API} alt='Rest API' />
                        <h4>Rest API</h4>
                    </li>
                </ul>
                <ul className='skill-list'>
                    <li>
                        <img src={Sass} alt='Sass' />
                        <h4>Sass</h4>
                    </li>
                    <li>
                        <img src={Git} alt='Git' />
                        <h4>Git</h4>
                    </li>
                    <li>
                        <img src={Unity} alt='Material UI' />
                        <h4>Unity</h4>
                    </li>
                    <li>
                        <img src={Postman} alt='Postman' />
                        <h4>Postman</h4>
                    </li>
                </ul>
                <ul className='skill-list'>
                    <li>
                        <img src={Gsap} alt='GSAP' />
                        <h4>GSAP</h4>
                    </li>

                    <li>
                        <img src={Figma} alt='Figma' />
                        <h4>Figma</h4>
                    </li>
                    <li>
                        <img src={Bootstrap} alt='Bootstrap' />
                        <h4>Bootstrap</h4>
                    </li>
                    <li>
                        <img src={FM} alt='Framer Motion' />
                        <h4>Framer Motion</h4>
                    </li>
                </ul>
                <Circle1 id='c1' />
                <Circle2 id='c2' />
            </motion.div>
            <h5>and Learning ...</h5>
        </div>
    );
};

export default Skills;
