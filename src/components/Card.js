import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, opacity } from '../animation/basicAnimation';
const Card = ({ content }) => {
    return (
        <motion.div variants={opacity(0.8)} initial='initial' animate='animate'>
            <motion.div variants={stagger(0.2)} className='card'>
                <motion.div className='card-content'>
                    <motion.h3 variants={fadeUp(100, 0.8)}>
                        {content?.name}
                    </motion.h3>
                    <motion.p variants={fadeUp(100, 0.8)}>
                        {content?.description}
                    </motion.p>
                    <motion.p variants={fadeUp(100, 0.8)}>
                        {content?.category}
                    </motion.p>
                    <motion.ul variants={fadeUp(100, 0.8)}>
                        <li>
                            <strong>Deployed Link: </strong>
                            <a href={content?.link}> Click Here</a>
                        </li>
                        <li>
                            <strong>Github Link: </strong>
                            <a href={content?.githublink}> Click Here</a>
                        </li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Card;
