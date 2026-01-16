import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, delay = 0, id }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }} // Trigger when 10% of element is in view
            transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
