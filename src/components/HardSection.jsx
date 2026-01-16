import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Gauge } from 'lucide-react';

const HardSection = () => {
    return (
        <section id="hard" className="section bg-white" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-hard)' }}>
                            IJzersterke techniek als basis
                        </h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#64748b' }}>
                            Onze websites staan als een huis. Wij bouwen met de nieuwste frameworks en AI-integraties voor ongekende snelheid en schaalbaarheid. Geen verouderde systemen, maar een unieke digitale constructie die uw autoriteit in de markt bevestigt.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                            {['Razendsnelle prestaties', 'Duurzame hosting (CO2 Neutraal)', 'Schaalbare architectuur'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center"
                                    style={{ gap: '0.5rem', fontWeight: 600 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                >
                                    <span style={{ color: 'var(--color-return)', fontSize: '1.2rem' }}>■</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual: Performance Score Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: '1rem',
                            border: '1px solid #e2e8f0',
                            position: 'relative',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.5rem', background: '#dcfce7', borderRadius: '0.5rem' }}>
                                <Zap size={24} color="#16a34a" />
                            </div>
                            <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.2rem' }}>Google PageSpeed</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, color: '#16a34a', letterSpacing: '-0.05em' }}>
                                100
                            </div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.75rem' }}>
                                / 100
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem' }}>
                                <CheckCircle size={20} color="#16a34a" />
                                <span style={{ fontWeight: 600, color: '#334155' }}>Core Web Vitals Passed</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem' }}>
                                <Gauge size={20} color="#16a34a" />
                                <span style={{ fontWeight: 600, color: '#334155' }}>&lt; 0.5s Laadtijd</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HardSection;
