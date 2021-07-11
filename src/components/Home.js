import React from 'react';
import VectorBG from './VectorBG';
import Navbar from './Navbar';
import Banner from './Banner';
import Info from './Info';
import ProjectSection from './ProjectSection';
import More from './More';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { motion } from 'framer-motion';
const homeVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 1 },
    },
    exit: {
        x: '-100vw',
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
};
const Home = () => {
    return (
        <motion.div
            variants={homeVariant}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <VectorBG />
            <Navbar />
            <Banner />
            <Info />
            <ProjectSection />
            <More />
            <Skills />
            <About />
            <Contact />
        </motion.div>
    );
};

export default Home;
