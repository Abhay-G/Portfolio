import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, opacity } from '../animation/basicAnimation';
const Education = ({ content, reverse }) => {
    return (
        <motion.div
            variants={opacity(0.8)}
            initial='initial'
            animate='animate'
            className={`education-info ${reverse && 'reverse'}`}
        >
            <motion.div variants={stagger(0.2)} className={'ed-heading'}>
                <motion.h3 variants={fadeUp(100, 0.8)}>
                    {content.name}
                </motion.h3>
                <motion.h4 variants={fadeUp(200, 0.8)}>
                    {content.date}
                </motion.h4>
                <motion.h5 variants={fadeUp(300, 0.8)}>
                    {content.category}
                </motion.h5>
                <motion.h6 variants={fadeUp(400, 0.8)}>
                    {content.grade}
                </motion.h6>
            </motion.div>
            <motion.p variants={fadeUp(150, 1)}>{content.description}</motion.p>
        </motion.div>
    );
};

export default Education;
