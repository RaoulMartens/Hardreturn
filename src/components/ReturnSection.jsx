import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, TrendingUp, Settings, Leaf, Check, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import craftsmanshipImage from '../assets/craftsmanship_detail_weld.webp';

const BlueprintTile = ({ children, style, label, delay = 0, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5 }}
        style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            ...style
        }}
        className={className}
    >
        <div style={{
            position: 'absolute',
            top: '0.75rem',
            left: '1rem',
            fontSize: '0.7rem',
            color: '#94a3b8', // slate-400
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
        }}>
            {label}
        </div>
        <div style={{ marginTop: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</div>
    </motion.div>
);

const ReturnSection = () => {
    return (
        <section id="return" className="section bg-alt">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-hard-dark)', fontWeight: 'var(--font-weight-bold)' }}>
                        Dit doen we anders
                    </h2>
                    <p>
                        Een goede website ziet er niet alleen strak uit, maar werkt actief voor je bedrijf.
                        Wij bouwen geen pagina’s, maar samenhangende tools die bezoekers sturen, kwalificeren en omzetten in afspraken.
                    </p>
                </div>

                <div style={{
                    width: '100%'
                }}>
                    {/* Desktop Grid Layout Adjustment */}
                    <style>{`
                        /* Mobile Styles */
                        .tile-large {
                            height: 380px; /* Truncate on mobile */
                        }

                        @media (min-width: 1024px) {
                            .bento-grid {
                                grid-template-columns: repeat(4, 1fr) !important;
                                grid-template-rows: repeat(2, 300px) !important;
                            }
                            .tile-large { 
                                grid-column: span 2; 
                                height: auto; /* Full height on desktop */
                            }
                            .tile-tall { grid-row: span 2; }
                            .tile-wide { grid-column: span 2; }
                        }
                    `}</style>
                    {/* Note: Switched to 4-column layout for better hierarchy */}
                    <div className="bento-grid" style={{ display: 'grid', gap: '1.5rem', width: '100%' }}>

                        {/* 1. Large Tile: Smart Tool (Lead Gen Focus) */}
                        <BlueprintTile className="tile-large" label="01 // SMART CONFIGURATOR">
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <TrendingUp size={32} color="#d97706" />
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1e293b', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                                        Interactieve Tools
                                    </h3>
                                </div>
                                <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '1.5rem', maxWidth: '90%' }}>
                                    Verander passieve kijkers in actieve leads. Wij bouwen tools die waarde bieden én kwalificeren.
                                </div>
                                <div style={{
                                    flexGrow: 1,
                                    background: '#ffffff',
                                    borderRadius: 0,
                                    padding: '1.5rem',
                                    border: '1px solid #e2e8f0',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 400 }}>Stap 2: Type woning</div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {['Tussenwoning', 'Vrijstaand', '2-onder-1-kap'].map((option, i) => (
                                            <motion.div
                                                key={option}
                                                initial={{ y: 5, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 + (i * 0.1) }}
                                                style={{
                                                    padding: '0.6rem 1rem',
                                                    borderRadius: 0,
                                                    border: i === 1 ? '1px solid #d97706' : '1px solid #e2e8f0',
                                                    background: i === 1 ? '#fffbeb' : '#ffffff',
                                                    color: i === 1 ? '#d97706' : '#64748b',
                                                    fontSize: '0.85rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                {option}
                                                {i === 1 && <Check size={14} />}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Gereserveerd Besparingspotentieel</span>
                                                <span style={{ fontSize: '1.1rem', color: '#1e293b' }}>€ 1.450 / jaar</span>
                                            </div>
                                            <div style={{ padding: '0.5rem 1rem', background: '#0f172a', color: '#ffffff', borderRadius: 0, fontSize: '0.8rem' }}>
                                                Check Resultaat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '0.5rem' }} /> {/* Spacing spacer */}
                            </div>
                        </BlueprintTile>

                        {/* 2. Photo Tile: Technical Craft (Modern Dutch Design) */}
                        <BlueprintTile className="tile-wide" label="MOD.02 // TECHNISCH FUNDAMENT">
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${craftsmanshipImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0
                            }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 100%)',
                                zIndex: 1
                            }} />
                            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Leaf size={20} color="#4ade80" />
                                    <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 400 }}>DUURZAAMHEID</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                                    Digitaal Vakmanschap
                                </h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    3x zuiniger dan de industriestandaard (&lt; 1g CO2). WCAG-ready.
                                </p>
                            </div>
                        </BlueprintTile>

                        {/* 3. Medium Tile: AI Chatbot Tool */}
                        <BlueprintTile label="03 // WEB INTELLIGENCE" delay={0.2}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Bot size={20} color="#22c55e" />
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 400, color: '#1e293b' }}>AI-Klantenservice</h3>
                                </div>

                                <div style={{
                                    flexGrow: 1,
                                    background: '#ffffff',
                                    borderRadius: 0,
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    border: '1px solid #e2e8f0',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    {/* Chat Bubble: Customer */}
                                    <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                                        <div style={{ background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: 0, fontSize: '0.75rem', color: '#475569' }}>
                                            Komen jullie naar Utrecht?
                                        </div>
                                    </div>

                                    {/* Chat Bubble: AI Response */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.4 }}
                                        style={{ alignSelf: 'flex-end', maxWidth: '85%' }}
                                    >
                                        <div style={{ background: '#0f172a', padding: '0.5rem 0.75rem', borderRadius: 0, fontSize: '0.75rem', color: '#ffffff' }}>
                                            Zeker! We zijn er dinsdag. Zal ik een afspraak inplannen?
                                        </div>
                                    </motion.div>

                                    {/* AI Typing Indicator */}
                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '2px' }}>
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                    style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#94a3b8' }}
                                                />
                                            ))}
                                        </div>
                                        <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>AI is aan het typen...</span>
                                    </div>

                                    {/* Glint effect */}
                                    <motion.div
                                        animate={{ x: ['-200%', '200%'] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            width: '50%',
                                            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.01), transparent)',
                                            transform: 'skewX(-20deg)',
                                            pointerEvents: 'none'
                                        }}
                                    />
                                </div>
                                <div style={{ height: '0.5rem' }} /> {/* Spacing spacer */}
                            </div>
                        </BlueprintTile>

                        {/* 4. Medium Tile: AEO Visibility */}
                        <BlueprintTile className="tile-wide" label="04 // AEO DOMINANTIE" delay={0.1}>
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Sparkles size={20} color="var(--color-return)" />
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-hard-dark)', fontWeight: 400 }}>Vindbaar in AI </h3>
                                </div>

                                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                                    Klanten vragen ChatGPT & Claude om advies. Wij zorgen dat uw bedrijf als antwoord wordt gegeven.
                                </p>

                                {/* Perfectly Centered Concentrated Signal Visual */}
                                <div style={{
                                    height: '160px',
                                    background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)',
                                    borderRadius: 0,
                                    border: '1px solid #e2e8f0',
                                    marginBottom: '1.5rem', // Increased margin to prevent touching edge
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center', // Centered vertically
                                    justifyContent: 'center'
                                }}>
                                    {/* Subtle Tech Grid Background */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px',
                                        opacity: 0.15,
                                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)' // Centered mask
                                    }} />

                                    {/* Unified Centered Signal Group */}
                                    <div style={{ position: 'relative', width: '20px', height: '20px', zIndex: 10 }}>
                                        {/* Signal Origin Point (The Core) - Increased size */}
                                        <div className="rounded-circle-force" style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '14px',
                                            height: '14px',
                                            background: 'var(--color-return)',
                                            borderRadius: '50%',
                                            zIndex: 15,
                                            boxShadow: '0 0 20px var(--color-return)'
                                        }} />

                                        {/* Pulsing Heartbeat - Adjusted for larger core */}
                                        <motion.div
                                            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0.1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '32px',
                                                height: '32px',
                                                marginLeft: '-16px', // Updated half-width
                                                marginTop: '-16px',  // Updated half-height
                                                background: 'var(--color-return)',
                                                borderRadius: '50%',
                                                filter: 'blur(10px)',
                                                zIndex: 11
                                            }}
                                            className="rounded-circle-force"
                                        />

                                        {/* Signal Waves - Uses margin centering to avoid Framer transform conflict */}
                                        {[0, 1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    scale: [0, 4], // Grow from absolute center
                                                    opacity: [0, 0.7, 0]
                                                }}
                                                transition={{
                                                    duration: 10,
                                                    repeat: Infinity,
                                                    delay: i * 2.5,
                                                    ease: [0.16, 1, 0.3, 1]
                                                }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    width: '200px',
                                                    height: '200px',
                                                    marginLeft: '-100px', // Half of width
                                                    marginTop: '-100px',  // Half of height
                                                    border: `2px solid var(--color-return)`,
                                                    borderRadius: '50%',
                                                    pointerEvents: 'none',
                                                    filter: 'blur(0.5px)',
                                                    boxShadow: '0 0 15px rgba(249, 115, 22, 0.2)',
                                                    zIndex: 10 - i // Stacking order
                                                }}
                                                className="rounded-circle-force"
                                            />
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </BlueprintTile>

                        {/* 5. Small Tile: Afspraak Machine (Booking Flow) */}
                        <BlueprintTile label="05 // AFSPRAAK MACHINE" delay={0.3}>
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Calendar size={20} color="#3b82f6" />
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 400, color: '#1e293b' }}>Conversie op Autopiloot</h3>
                                </div>

                                <div style={{
                                    flexGrow: 1,
                                    background: '#ffffff',
                                    borderRadius: 0,
                                    padding: '1rem',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.6rem',
                                    overflow: 'hidden',
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    {/* Mini Calendar Header */}
                                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Vandaag - 17 Jan</div>

                                    {/* Slot 1: Closed */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.5rem',
                                        background: '#f8fafc',
                                        borderRadius: 0,
                                        border: '1px solid #f1f5f9',
                                        opacity: 0.6
                                    }}>
                                        <div style={{ width: '4px', height: '16px', background: '#cbd5e1', borderRadius: 0 }}></div>
                                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>10:00 - Bezet</div>
                                    </div>

                                    {/* Slot 2: Active Booking */}
                                    <motion.div
                                        initial={{ x: 10, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.55rem',
                                            background: '#eff6ff',
                                            borderRadius: 0,
                                            border: '1px solid #bfdbfe'
                                        }}
                                    >
                                        <div style={{ width: '4px', height: '16px', background: '#3b82f6', borderRadius: 0 }}></div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ fontSize: '0.7rem', color: '#1e3a8a' }}>14:30 - Adviesgesprek</div>
                                            <div style={{ fontSize: '0.6rem', color: '#3b82f6' }}>NIEUWE BOEKING</div>
                                        </div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.4, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            style={{ marginLeft: 'auto', width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%' }}
                                        />
                                    </motion.div>

                                    {/* Notification Toast */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                        style={{
                                            marginTop: 'auto',
                                            background: '#ffffff',
                                            border: '1px solid #e2e8f0',
                                            padding: '0.4rem 0.6rem',
                                            borderRadius: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            alignSelf: 'center',
                                            marginBottom: '0.5rem' // Ensure toast doesn't touch bottom of its container
                                        }}
                                    >
                                        <CheckCircle2 size={12} color="#22c55e" />
                                        <span style={{ fontSize: '0.65rem', color: '#1e293b' }}>Agenda bijgewerkt</span>
                                    </motion.div>
                                </div>
                                <div style={{ height: '0.5rem' }} /> {/* Spacing spacer */}
                            </div>
                        </BlueprintTile>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReturnSection;
