import React from 'react';
import downArrow from '../assets/downArrow.svg';
const Info = () => {
    return (
        <div className='info'>
            <div className='info-inner'>
                <div className='info-left'>
                    <div className='left-content'>
                        <h2 className='heading'>Full Stack Developer</h2>
                        <p className='info-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla gravida nisl tellus, eu vulputate justo
                            sodales quis.{' '}
                        </p>
                    </div>
                </div>
                <div className='info-right'>
                    <div className='right-content'>
                        <h2>more about me</h2>
                    </div>
                    <img src={downArrow} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Info;
