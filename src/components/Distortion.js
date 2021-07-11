import { LiquidDistortionText } from 'react-text-fun';
import React from 'react';

const Distortion = ({ text }) => {
    return (
        <>
            <LiquidDistortionText
                text={text}
                fontSize={112}
                fontFamily='Raleway'
                fontWeight={500}
                speed={0.5}
                fill='#000'
                paddingLeft={10}
                paddingRight={10}
            />
        </>
    );
};

export default Distortion;
