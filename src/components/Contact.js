import React from 'react';
import CircularText from './CircularText';
const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='contact-inner'>
                <div className='contact-heading'>
                    {/* <div className='line'></div> */}
                    <p id='next-category'>Contact Me</p>
                    <h2>Still Curious</h2>
                    <p id='next-category'>Lets hang out</p>
                    <a className='in-link' href='mailto:abhayg.0704@gmail.com'>
                        abhayg.0704@gmail.com
                    </a>

                    <div className='line'></div>
                    <CircularText
                        text={'· Get in touch ·· Lets collaborate · '}
                    />
                    <ul>
                        <div className='links'>
                            <a
                                className='in-nav-link'
                                href='https://www.instagram.com/a_b_h_a_y_77/'
                            >
                                <li>Instagram</li>
                            </a>
                            <a
                                className='in-nav-link'
                                href='https://www.linkedin.com/in/abhay-g07/'
                            >
                                <li>Linkedin</li>
                            </a>
                            <a
                                className='in-nav-link'
                                href='https://github.com/Abhay-G'
                            >
                                <li>Github</li>
                            </a>
                        </div>
                        <p>Designed and developed by Abhay Gupta</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
