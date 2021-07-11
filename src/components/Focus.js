import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, opacity } from '../animation/basicAnimation';
const Focus = ({ content }) => {
    return (
        <motion.div variants={opacity(0.8)} initial='initial' animate='animate'>
            <motion.div variants={stagger(0.2)} className='about-project'>
                <motion.h3 variants={fadeUp(100, 0.8)}>
                    {content?.name}
                </motion.h3>
                <motion.p variants={fadeUp(100, 0.8)}>
                    {content?.description}
                </motion.p>
            </motion.div>
            <div className='project-workflow'>
                <motion.div variants={stagger(0.2)} className='worflow-inner'>
                    <motion.div
                        variants={fadeUp(100, 0.8)}
                        className='workflow'
                    >
                        <img className='table-img' src={content?.img} alt='' />
                    </motion.div>
                    <motion.div
                        variants={stagger(0.2)}
                        className='workflow-text'
                    >
                        <motion.h3 variants={fadeUp(100, 0.8)}>
                            {content?.heading2}
                        </motion.h3>
                        <motion.h4 variants={fadeUp(100, 0.8)}>
                            {content?.subheading}
                        </motion.h4>
                        <motion.p variants={fadeUp(100, 0.8)}>
                            {content?.about}
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Focus;
