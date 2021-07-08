import React from 'react';
import downArrow from '../assets/downArrow.svg';
import rightArrow from '../assets/arrow-right2.png';
const Info = () => {
    return (
        <div className='info'>
            {/* <div className='info-inner'> */}
            <div className='info-left'>
                <div className='left-content'>
                    <h2 className='heading'>Full Stack Developer</h2>
                    <p className='info-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla gravida nisl tellus, eu vulputate justo sodales
                        quis.{' '}
                    </p>
                    <div className='hidden-more'>
                        <h3>More about me</h3>
                        <img src={rightArrow} alt='' />
                    </div>
                </div>
            </div>
            <div className='right-content'>
                <h2>more about me</h2>
                <img src={downArrow} alt='' />
            </div>
            {/* </div> */}
        </div>
    );
};

export default Info;
