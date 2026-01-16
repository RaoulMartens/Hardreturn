'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function TextEffect({
    children,
    per = 'word',
    as = 'p',
    variants,
    className,
    preset,
    delay = 0,
    trigger = true,
    onAnimationComplete,
    segmentWrapperClassName,
    style,
}) {
    const Component = as || 'p'; // Polymorphic component
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Only animate once

    if (!children) return null;

    // Split logic
    const segments = per === 'line'
        ? children.split('\n')
        : per === 'word'
            ? children.split(/(\s+)/)
            : children.split('');

    // Default variants
    const defaultContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
        exit: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const defaultItemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5 },
        },
    };

    const finalContainerVariants = variants?.container || defaultContainerVariants;
    const finalItemVariants = variants?.item || defaultItemVariants;

    if (preset === 'blur') {
        finalItemVariants.hidden = { opacity: 0, filter: 'blur(4px)', y: 10 };
        finalItemVariants.visible = { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.4 } };
    }

    return (
        <Component ref={ref} className={className} style={style}>
            <motion.span
                initial="hidden"
                animate={trigger && isInView ? 'visible' : 'hidden'}
                variants={finalContainerVariants}
                onAnimationComplete={onAnimationComplete}
                aria-hidden
            >
                {segments.map((segment, index) => (
                    <motion.span
                        key={`${per}-${index}-${segment}`}
                        variants={finalItemVariants}
                        className={segmentWrapperClassName}
                        style={{ display: 'inline-block', whiteSpace: 'pre' }}
                    >
                        {segment}
                    </motion.span>
                ))}
            </motion.span>
        </Component>
    );
}
