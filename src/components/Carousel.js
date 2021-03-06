import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation/basicAnimation';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
const CarouselComponent = ({ projectImages }) => {
    const { ref, inView } = useInView({
        rootMargin: '-200px',
        triggerOnce: true,
    });
    const animation1 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation1.start('animate');
        }
    }, [inView, animation1]);
    return (
        <div ref={ref}>
            <motion.div
                className='projects-photos'
                animate={animation1}
                initial='initial'
                variants={fadeUp(200, 1)}
            >
                <Carousel fade>
                    {projectImages?.map((image, id) => (
                        <Carousel.Item interval='3000' key={id}>
                            <div className='img-container'>
                                <img src={image} alt='' />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </motion.div>
            ;
        </div>
    );
};

export default CarouselComponent;
