import React from 'react';
import Vector1 from '../assets/vector1.js';
import Vector2 from '../assets/vector2.js';
const VectorBG = () => {
    return (
        <div className='vectors-bg'>
            <Vector1 />
            <Vector2 />
            {/* <img id='vector1' src={vector1} alt='' />
            <img id='vector2' src={vector2} alt='' /> */}
        </div>
    );
};

export default VectorBG;
