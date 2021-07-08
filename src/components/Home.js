import React from 'react';
import VectorBG from './VectorBG';
import Banner from './Banner';
import Info from './Info';
import ProjectSection from './ProjectSection';
import More from './More';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
const Home = () => {
    return (
        <div>
            <VectorBG />
            <Banner />
            <Info />
            <ProjectSection />
            <More />
            <Skills />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
