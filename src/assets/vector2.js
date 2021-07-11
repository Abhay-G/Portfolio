import React from 'react';
import { motion } from 'framer-motion';
const vector2 = () => {
    return (
        <svg
            id='vector2'
            width='846'
            height='662'
            viewBox='0 0 846 662'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.path
                d='M16.5635 -6C-43.5406 249.713 38.2009 738.995 846 650.418'
                stroke='#DEE1E2'
                initial={{
                    strokeOpacity: 0,
                    pathLength: 0,
                    strokeWidth: 4,
                }}
                animate={{ strokeOpacity: 1, pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />
        </svg>
    );
};
export default vector2;
