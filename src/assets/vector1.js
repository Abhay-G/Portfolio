import React from 'react';
import { motion } from 'framer-motion';
const vector1 = () => {
    return (
        <svg
            id='vector1'
            width='447'
            height='499'
            viewBox='0 0 447 499'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.path
                d='M382 0C382 0 522.5 187.5 382 382.5C241.5 577.5 -137 462.5 -137 462.5'
                stroke='#DEE1E2'
                stroke-width='2'
                initial={{ strokeOpacity: 0, pathLength: 0, strokeWidth: 4 }}
                animate={{ strokeOpacity: 1, pathLength: 1 }}
                transition={{ duration: 2.2 }}
            />
        </svg>
    );
};

export default vector1;
