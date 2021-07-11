export const easing = [0.6, -0.05, 0.01, 0.99];
export const stagger = (stagger) => {
    return {
        animate: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };
};
export const fadeUpStagger = (y) => {
    return {
        initial: { opacity: 0, y: y },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: 'tween',
                ease: easing,
                staggerChildren: 1,
                when: 'beforeChildren',
            },
        },
    };
};
export const opacity = (duration) => {
    return {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: duration,
                type: 'tween',
                ease: easing,
                when: 'beforeChildren',
            },
        },
        exit: {
            x: '-100vw',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
    };
};
export const fadeUp = (y, d) => {
    return {
        initial: { opacity: 0, y: y },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: d,
                type: 'tween',
                ease: easing,
            },
        },
    };
};
export const zoomIn = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: { type: 'tween', ease: easing },
    },
};
export const line = {
    initial: { width: 0 },
    animate: {
        width: '100%',
        transition: { type: 'tween', ease: easing, duration: 0.5 },
    },
};
