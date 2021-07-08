import React from 'react';
import arrowright from '../assets/arrow-right2.png';
const More = () => {
    return (
        <div className='more-section'>
            <div className='more-inner'>
                <div className='more-content'>
                    <a className='in-link' href=''>
                        <h2>More Work</h2>
                    </a>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
                <div className='more-content'>
                    <a className='in-link' href=''>
                        <h2>Education</h2>
                    </a>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
                <div className='more-content'>
                    <a className='in-link' href=''>
                        <h2>Internship</h2>
                    </a>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
            </div>
        </div>
    );
};

export default More;
