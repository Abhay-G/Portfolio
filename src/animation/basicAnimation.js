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
export const fadeUpDelay = (y, d, delay) => {
    return {
        initial: { opacity: 0, y: y },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: d,
                type: 'tween',
                ease: easing,
            },
        },
    };
};
export const zoomIn = {
    initial: { scale: 0, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, type: 'tween', ease: easing },
    },
};
export const rightReveal = (x, duration, delay) => {
    return {
        initial: { opacity: 0, x: x },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: delay,
                duration: duration,
                type: 'tween',
                ease: easing,
            },
        },
    };
};
export const line = {
    initial: { width: 0 },
    animate: {
        width: '100%',
        transition: { type: 'tween', ease: easing, duration: 0.8 },
    },
};
export const noanimation = {
    initial: false,
    animate: {
        opacity: 1,
        y: 0,
    },
};
export const exitVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 1 },
    },
    exit: {
        x: '-100vw',
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
};
