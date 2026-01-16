import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Gauge } from 'lucide-react';
import lighthouseImg from '../assets/lighthouse.jpg';

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
                            Herken je dit?
                        </h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#64748b' }}>
                            Je website staat er mooi bij, maar je agenda blijft halfleeg. Of je krijgt veel reacties, maar 9 van de 10 zijn niet serieus. Je weet niet eens hoeveel bezoekers je maandelijks haalt. Je ziet dat je concurrenten beter vindbaar zijn. En ja, jij bent beter in je vak dan zij.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                            {['Je mailbox stroomt vol met koopjesjagers en vrijblijvende aanvragen', 'Je ziet concurrenten boven jou eindigen in Google en ChatGPT', 'Je website is een statisch visitekaartje dat geld kost'].map((item, i) => (
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ position: 'relative', height: '100%', minHeight: '400px', overflow: 'hidden' }}
                    >
                        <img
                            src={lighthouseImg}
                            alt="Vuurtoren in mist"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(15,23,42,0.4), transparent)'
                        }}></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HardSection;
