import React from 'react';
import vector1 from '../assets/vector1.svg';
import vector2 from '../assets/vector2.svg';
const VectorBG = () => {
    return (
        <div className='vectors-bg'>
            <img id='vector1' src={vector1} alt='' />
            <img id='vector2' src={vector2} alt='' />
        </div>
    );
};

export default VectorBG;
