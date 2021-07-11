import React from 'react';
import { Link } from 'react-router-dom';
import arrowright from '../assets/arrow-right2.png';
const More = () => {
    return (
        <div className='more-section'>
            <div className='more-inner'>
                <div className='more-content'>
                    <Link className='in-link' to='/more/morework'>
                        <h2>More Work</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
                <div className='more-content'>
                    <Link className='in-link' to='/more/focus'>
                        <h2>Current Focus</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
                <div className='more-content'>
                    <Link className='in-link' to='/more/education'>
                        <h2>Education</h2>
                    </Link>
                    <h4>Learn more</h4>
                    <img src={arrowright} alt='' />
                </div>
            </div>
        </div>
    );
};

export default More;
