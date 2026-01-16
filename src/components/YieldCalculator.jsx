import React, { useState } from 'react';
import { motion } from 'framer-motion';

const YieldCalculator = () => {
    const [visitors, setVisitors] = useState(1000);
    const [orderValue, setOrderValue] = useState(250);
    const [conversion, setConversion] = useState(1.5);

    // Realistic optimization lift (e.g., +35% improvement is a solid, honest benchmark for UX/Speed improvements)
    const liftFactor = 1.35;
    const newConversion = (conversion * liftFactor).toFixed(1);

    const currentRevenue = Math.round(visitors * (conversion / 100) * orderValue);
    const newRevenue = Math.round(visitors * (newConversion / 100) * orderValue);
    const extraRevenue = newRevenue - currentRevenue;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <motion.h2 variants={itemVariants} style={{ color: 'var(--color-hard)', marginBottom: '1rem' }}>Wat zou je kunnen verdienen?</motion.h2>
                    <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
                        Geen giswerk. Je geeft 3 getallen in, we laten zien waar je zou kunnen staan.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                    style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}
                >
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Inputs */}
                        <motion.div variants={itemVariants}>
                            {/* Visitors Slider */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div className="flex justify-between items-end" style={{ marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: 600 }}>Bezoekers / maand</label>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-hard)' }}>{visitors}</span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    step="100"
                                    value={visitors}
                                    onChange={(e) => setVisitors(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--color-return)' }}
                                />
                            </div>

                            {/* Order Value Slider */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div className="flex justify-between items-end" style={{ marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: 600 }}>Orderwaarde</label>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-hard)' }}>€{orderValue}</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="2500"
                                    step="10"
                                    value={orderValue}
                                    onChange={(e) => setOrderValue(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--color-return)' }}
                                />
                            </div>

                            {/* Current Conversion Slider */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div className="flex justify-between items-end" style={{ marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: 600 }}>Conversie %</label>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-hard)' }}>{conversion}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="5.0"
                                    step="0.1"
                                    value={conversion}
                                    onChange={(e) => setConversion(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--color-return)' }}
                                />
                                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                                    *Gemiddelde MKB website zit rond de 1-2%
                                </div>
                            </div>

                            {/* Calculation Explanation */}
                            <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', borderLeft: '3px solid var(--color-return)' }}>
                                <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                                    <span>Huidige Omzet:</span>
                                    <div style={{ color: '#64748b', fontSize: '0.9rem' }}>€{currentRevenue.toLocaleString('nl-NL')}</div>
                                </div>
                                <div className="flex justify-between text-strong" style={{ color: 'var(--color-hard-dark)' }}>
                                    <span>Optimale Performance (+35%):</span>
                                    <span><strong>€{newRevenue.toLocaleString('nl-NL')}</strong></span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Result */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
                            {/* Vertical divider separate from grid gap if needed, but grid gap handles spacing well */}
                            <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1rem' }}>Schatting extra omzet</div>
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--color-return)', lineHeight: 1, marginBottom: '0.5rem' }}>
                                +€{extraRevenue.toLocaleString('nl-NL')}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '2rem' }}>per maand</div>

                            <div style={{
                                background: '#fff7ed',
                                color: '#c2410c',
                                padding: '0.5rem 1rem',
                                borderRadius: '99px',
                                display: 'inline-block',
                                margin: '0 auto 2rem auto',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}>
                                Jaarlijks: +€{(extraRevenue * 12).toLocaleString('nl-NL')}
                            </div>

                            <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
                                Bereken je potentieel
                            </button>
                            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '1rem' }}>
                                *Dit is gebaseerd op wat we gemiddeld zien. Jouw site is anders, dus jouw resultaat ook.
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default YieldCalculator;
