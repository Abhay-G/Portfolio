import { useEffect } from 'react';
import Myphoto from '../assets/myphoto.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fadeUp, line, zoomIn } from '../animation/basicAnimation';
const About = () => {
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
        <div ref={ref} id='about' className='about-section'>
            <div className='heading'>
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
                    About me
                </motion.h2>
            </div>
            <div className='about-content'>
                <motion.div
                    className='about-img'
                    animate={animation1}
                    initial='initial'
                    variants={zoomIn}
                >
                    <img src={Myphoto} alt='' />
                </motion.div>
                <div className='about-text'>
                    <motion.p
                        animate={animation1}
                        initial='initial'
                        variants={fadeUp(250, 0.8)}
                    >
                        I am a developer who is in final year of studying at
                        Vellore Institute of Technology Bhopal India. I have
                        been fascinated by web development and design since
                        before I even knew what it meant. It started for me at
                        the age of seventeen, when i realised how technology can
                        change businesses. I believe that visual communication
                        have the opportunity of conveying the abstract in a way
                        that is not possible through other means of
                        communication. The results that people see in your
                        website sways them in your favour. Nowadays, people are
                        busy and also smart. They have no time to visit the
                        shop. They search the internet to know about the product
                        or service before purchasing. So I love to create
                        memorable and beautiful experience for them. The genre
                        does not matter as long as I can create something that
                        others find meaningful.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;
