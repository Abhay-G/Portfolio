import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Card from '../Card';
import Focus from '../Focus';
import Contact from '../Contact';
import Education from '../Education';
import projects from '../../utility/smallProjects';
import focus from '../../utility/currentFocus';
import education from '../../utility/education';
import { motion } from 'framer-motion';
import { line, fadeUp, opacity } from '../../animation/basicAnimation';
const Options = () => {
    const { optionId } = useParams();
    const [content, setContent] = useState([]);
    const [heading, setHeading] = useState('');
    let history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (optionId === 'morework') {
            setContent(projects);
            setHeading('Extras');
        } else if (optionId === 'focus') {
            setContent(focus);
            setHeading('Focus');
        } else if (optionId === 'education') {
            setContent(education);
            setHeading('Education');
        }
    }, [optionId]);
    function handleClick() {
        history.goBack();
    }
    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={opacity(0.8)}
        >
            <div className='projects-hero'>
                <div className='projects-header'>
                    <motion.h1 variants={fadeUp(30, 1)}>{heading}</motion.h1>

                    <button id='close' type='button' onClick={handleClick}>
                        close
                    </button>
                    <motion.div variants={line} className='line'></motion.div>
                </div>
                {optionId === 'morework' && (
                    <motion.div
                        variants={opacity(0.8)}
                        className='content-info'
                    >
                        {content.map((c) => {
                            return <Card key={c.id} content={c} />;
                        })}
                    </motion.div>
                )}
                {optionId === 'focus' && <Focus content={content[0]} />}
                {optionId === 'education' && (
                    <div className='education-content'>
                        {content.map((c) => {
                            return (
                                <Education
                                    reverse={c.id % 2 === 0}
                                    key={c.id}
                                    content={c}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
            <Contact />
        </motion.div>
    );
};

export default Options;
