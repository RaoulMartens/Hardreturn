import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import casesBg from '../assets/craftsmanship_detail_weld.webp';

const CasesPage = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax & Scale effects for Hero
    const heroY = useTransform(scrollY, [0, 1000], [0, 200]);
    const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
            {/* Full Screen Hero with Image & Parallax */}
            <section style={{
                height: '100dvh',
                minHeight: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--color-hard-dark)'
            }}>
                {/* Background Image with Overlay */}
                <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, y: heroY, scale: heroScale }}>
                    <img src={casesBg} alt="" style={{ width: '100%', height: '120%', objectFit: 'cover', opacity: 0.2, filter: 'grayscale(100%)', marginTop: '-10%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8))' }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    style={{ position: 'relative', zIndex: 10, padding: '0 2rem' }}
                >
                    <span style={{
                        fontSize: '0.9rem',
                        fontWeight: 'var(--font-weight-heavy)',
                        color: 'var(--color-return)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem',
                        display: 'block',
                    }}>
                        Ons Werk
                    </span>
                    <h1 className="h1-xl" style={{ color: 'white' }}>
                        Projecten die<br />renderen
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        Ontdek hoe wij vakmensen hebben geholpen bij de transitie naar een moderne online autoriteit.
                    </p>
                </motion.div>
            </section>

            <section className="section bg-white" style={{ position: 'relative', minHeight: '600px' }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(4px)'
                }}>
                    <div style={{
                        background: 'var(--color-hard)',
                        color: 'white',
                        padding: '2rem 4rem',
                        borderRadius: '0.5rem',
                        textAlign: 'center',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white' }}>In Ontwikkeling</h2>
                        <p style={{ color: '#cbd5e1' }}>We leggen de laatste hand aan onze uitgebreide cases.</p>
                    </div>
                </div>

                <div className="container" style={{ filter: 'blur(12px)', userSelect: 'none', pointerEvents: 'none' }}>
                    <div className="grid" style={{ gap: '4rem' }}>

                        {/* Case 1: Hovenier */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '4rem' }}>
                            <div>
                                <div style={{ background: '#f0fdf4', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                    🌿
                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem' }}>Hovenier in Utrecht</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 'var(--font-weight-heavy)' }}>Sector: Tuinontwerp & Aanleg</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Uitdaging</h4>
                                    <p style={{ color: '#334155' }}>Had 400 bezoekers per maand maar nul afspraken. De website was een visitekaartje, geen verkoopkanaal.</p>
                                </div>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Hard-Oplossing</h4>
                                    <p style={{ color: '#334155' }}>Wij bouwden een 3D-tuinplanner en een interactieve lead-funnel die direct de behoefte van de klant filtert.</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#166534', marginBottom: '0.5rem' }}>De Return</h4>
                                    <p style={{ color: '#15803d', fontWeight: 'var(--font-weight-heavy)' }}>12 gekwalificeerde afspraken per maand (+€50k omzet/jaar).</p>
                                </div>
                            </div>
                        </div>

                        {/* Case 2: Installateur */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '4rem' }}>
                            <div>
                                <div style={{ background: '#f1f5f9', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                    🔧
                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem' }}>Duurzame Installateur</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 'var(--font-weight-heavy)' }}>Sector: Installatietechniek</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Uitdaging</h4>
                                    <p style={{ color: '#334155' }}>"Meeste bellers stelden nul vragen." Klanten begrepen de techniek niet en haakten af op prijs.</p>
                                </div>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Hard-Oplossing</h4>
                                    <p style={{ color: '#334155' }}>Een technische 'configurator' die klanten helpt kiezen en direct een prijsindicatie geeft.</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#166534', marginBottom: '0.5rem' }}>De Return</h4>
                                    <p style={{ color: '#15803d', fontWeight: 'var(--font-weight-heavy)' }}>Conversie van 8% naar 35%. Bellers zijn nu technisch onderlegd.</p>
                                </div>
                            </div>
                        </div>

                        {/* Case 3: Keukenbouwer */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <div style={{ background: '#fff7ed', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                    🪵
                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem' }}>Keukenbouwer</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 'var(--font-weight-heavy)' }}>Sector: Interieurbouw</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Uitdaging</h4>
                                    <p style={{ color: '#334155' }}>"Iedereen denkt dat ik goedkoop ben." De website straalde geen vakmanschap uit.</p>
                                </div>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Hard-Oplossing</h4>
                                    <p style={{ color: '#334155' }}>Een minimalistisch, 'gallery-style' design met focus op high-end fotografie en witruimte.</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#166534', marginBottom: '0.5rem' }}>De Return</h4>
                                    <p style={{ color: '#15803d', fontWeight: 'var(--font-weight-heavy)' }}>Gemiddelde offerteaanvraag steeg van €3k naar €8k.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CasesPage;
