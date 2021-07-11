import React from 'react';
import downArrow from '../assets/downArrow.svg';
import rightArrow from '../assets/arrow-right2.png';
import { Link } from 'react-scroll';
const Info = () => {
    return (
        <div className='info'>
            {/* <div className='info-inner'> */}
            <div className='info-left'>
                <div className='left-content'>
                    <h2 className='heading'>Full Stack Developer</h2>
                    <p className='info-content'>
                        I can handle the all the work of servers, routes,
                        databases and clients. I can also make wonderfull UIs
                        and amazing user experience and that's what make me a
                        Full Stack Developer.
                    </p>
                    <div className='hidden-more'>
                        <h3>More about me</h3>
                        <Link
                            to='about'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={2000}
                        >
                            <img src={rightArrow} alt='' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='right-content'>
                <h2>more about me</h2>
                <Link
                    to='about'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                >
                    <img src={downArrow} alt='' />
                </Link>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Info;
