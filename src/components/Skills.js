import React from 'react';
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
const Skills = () => {
    return (
        <div id='skill-section'>
            <div className='line'></div>
            <p id='next-category'>Next Category</p>
            <h2>My Skills</h2>
            <div className='skills'>
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
            </div>
            <h5>and Learning ...</h5>
        </div>
    );
};

export default Skills;
