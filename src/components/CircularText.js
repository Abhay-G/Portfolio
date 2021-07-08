import React, { useEffect } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-right.svg';
import CircleType from 'circletype';
import $ from 'jquery';
const CircularText = ({ text }) => {
    useEffect(() => {
        const circleType = new CircleType(
            document.getElementById('rotated')
        ).radius(20);
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
                <span id='rotated'>{text}</span>
                <div className='arrow'>
                    <Arrow />
                </div>
            </div>
        </>
    );
};

export default CircularText;
