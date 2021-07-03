import React from 'react';
import vector1 from '../assets/vector1.svg';
import vector2 from '../assets/vector2.svg';
const VectorBG = () => {
    return (
        <div className='vectors-bg'>
            <img className='vector1' src={vector1} alt='' />
            <img className='vector2' src={vector2} alt='' />
        </div>
    );
};

export default VectorBG;
