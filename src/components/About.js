import React from 'react';
import Myphoto from '../assets/myphoto.jpeg';
const About = () => {
    return (
        <div id='about' className='about-section'>
            <div className='heading'>
                <div className='line'></div>
                <p id='next-category'>Next Category</p>
                <h2>About me</h2>
            </div>
            <div className='about-content'>
                <div className='about-img'>
                    <img src={Myphoto} alt='' />
                </div>
                <div className='about-text'>
                    <p>
                        I am a developer who is in final year of studying at
                        Vellore Insititue of Technology Bhopal India. I have
                        been fascinated by web development and design since
                        before I even knew what it meant. It started for me at
                        the age of seventeen, when i realised how technology can
                        change buisnesses. I believe that visual communication
                        have the opportunity of conveying the abstract in a way
                        that is not possible through other means of
                        communication. The results that people see in your
                        website sways them in your favour. Nowadays, people are
                        busy and also smart. They have no time to visit the
                        shop. They search the internet to know about the product
                        or service before purchasing. So I love to create
                        memorable and beautiful experience for them. The genre
                        do not matter as long as I can create something that
                        others find meaningful.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
