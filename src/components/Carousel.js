import { Carousel } from 'react-bootstrap';
import React from 'react';

const CarouselComponent = ({ projectImages }) => {
    return (
        <div>
            <div className='projects-photos'>
                <Carousel fade>
                    {projectImages?.map((image, id) => (
                        <Carousel.Item interval='3000' key={id}>
                            <div className='img-container'>
                                <img src={image} alt='' />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            ;
        </div>
    );
};

export default CarouselComponent;
