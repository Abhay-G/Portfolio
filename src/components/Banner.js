import React from 'react';
import github from '../assets/github.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <div className='banner-inner'>
                    <div className='name'>Abhay Gupta</div>
                    <div className='heading one'>Web developer</div>
                    <div className='heading two'>UI developer</div>
                </div>
                <div className='cover cover-github'>
                    <img className='github' src={github} alt='github link' />
                </div>
                <div className='cover cover-mail'>
                    <img className='mail' src={mail} alt='mail link' />
                </div>
                <div className='cover cover-linkedin'>
                    <img
                        className='linkedin'
                        src={linkedin}
                        alt='linkedin link'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
