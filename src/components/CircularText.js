import React, { useEffect } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-right.svg';
import CircleType from 'circletype';
import $ from 'jquery';
const CircularText = ({ text }) => {
    useEffect(() => {
        new CircleType(document.getElementById('rotated')).radius(20);
        $(window).on('scroll', function () {
            var offset = $(window).scrollTop();
            offset = offset * 0.4;
            $('.circular-text').css({
                '-moz-transform': 'rotate(' + offset + 'deg)',
                '-webkit-transform': 'rotate(' + offset + 'deg)',
                '-o-transform': 'rotate(' + offset + 'deg)',
                '-ms-transform': 'rotate(' + offset + 'deg)',
                transform: 'rotate(' + offset + 'deg)',
            });
        });
    }, []);

    return (
        <>
            <div className='circular-text'>
                <span id='rotated'> {text}</span>
                <div className='arrow'>
                    <a
                        className='cover-link'
                        href='mailto:abhayg.0704@gmail.com'
                    >
                        {''}
                    </a>
                    <Arrow />
                </div>
            </div>
        </>
    );
};

export default CircularText;
