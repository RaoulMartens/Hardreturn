import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyBar = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '50%',
                        x: '-50%', // Use x instead of transform for better Framer Motion compat
                        background: 'var(--color-hard)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        zIndex: 50,
                        width: '90%',
                        maxWidth: '500px',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="flex items-center" style={{ gap: '0.5rem' }}>
                        <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.3)' }}></div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Beschikbaar voor nieuwe projecten</span>
                    </div>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-return-hover)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'var(--color-return)',
                            color: 'white',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '999px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'inline-block'
                        }}
                    >
                        Start Nu
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyBar;
