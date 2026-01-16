import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, TrendingUp, Settings, Leaf, Check, ArrowRight } from 'lucide-react';
import craftsmanshipImage from '../assets/craftsmanship_detail_weld.png';

const BlueprintTile = ({ children, style, label, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5 }}
        style={{
            background: 'white',
            border: '1px solid #e2e8f0', // slate-200
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            ...style
        }}
    >
        <div style={{
            position: 'absolute',
            top: '0.75rem',
            left: '1rem',
            fontFamily: 'monospace',
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
        <section id="return" className="section bg-alt" style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem', color: '#0f172a' }}>
                        Dit doen we anders
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
                        We bouwen websites die er goed uitzien én die verkopen. Voor een hoveniersbedrijf betekent dat prachtige foto's van tuinen met een lead-formulier dat werkt. Voor een keukenbouwer betekent dat een showroom waar je verliefd wordt, gecombineerd met duidelijkheid over prijs en proces.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    autoRows: 'minmax(250px, auto)'
                }}>
                    {/* Desktop Grid Layout Adjustment */}
                    <style>{`
                        @media (min-width: 1024px) {
                            .bento-grid {
                                grid-template-columns: repeat(4, 1fr) !important;
                                grid-template-rows: repeat(2, 300px) !important;
                            }
                            .tile-large { grid-column: span 2; }
                            .tile-tall { grid-row: span 2; }
                            .tile-wide { grid-column: span 2; }
                        }
                    `}</style>
                    {/* Note: Switched to 4-column layout for better hierarchy */}
                    <div className="bento-grid" style={{ display: 'grid', gap: '1.5rem', width: '100%' }}>

                        {/* 1. Large Tile: Lead Machine (Filtering Focus) */}
                        <BlueprintTile className="tile-large" style={{ gridColumn: 'span 2' }} label="MOD.01 // LEAD KWALI.">
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ padding: '0.75rem', background: '#eff6ff', borderRadius: '0.75rem' }}>
                                        <Bot size={32} color="#2563eb" />
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                                        De Afspraakmachine
                                    </h3>
                                </div>
                                <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '1.5rem', maxWidth: '90%' }}>
                                    Je site filtert onzin eruit. We bouwen formulieren en processen die zorgen dat alleen serieuze klanten langskomen.
                                </div>
                                <div style={{
                                    flexGrow: 1,
                                    background: '#f8fafc',
                                    borderRadius: '1rem',
                                    padding: '1rem',
                                    border: '1px solid #e2e8f0',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}>
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'line-through' }}>"Wat kost een warmtepomp?"</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                        <div style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 600 }}>"Offerte: Vrijstaande woning 1980"</div>
                                        <div style={{ marginLeft: 'auto', fontSize: '0.75rem', background: '#dcfce7', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>HIGH VALUE</div>
                                    </div>
                                </div>
                            </div>
                        </BlueprintTile>

                        {/* 2. Photo Tile: Technical Craft (Modern Dutch Design) */}
                        <BlueprintTile style={{ gridColumn: 'span 2' }} label="MOD.02 // TECHNISCH FUNDAMENT">
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
                                    <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 700 }}>DUURZAAMHEID</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                                    Digitaal Vakmanschap
                                </h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    3x zuiniger dan de industriestandaard (&lt; 1g CO2). WCAG-ready.
                                </p>
                            </div>
                        </BlueprintTile>

                        {/* 3. Medium Tile: ROI Dashboard */}
                        <BlueprintTile label="MOD.03 // LIVE ROI" delay={0.2}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>Omzet Monitor</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animate: 'pulse' }}></div>
                                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>LIVE</span>
                                    </div>
                                </div>
                                <div style={{ flexGrow: 1, background: '#0f172a', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
                                        <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Leads Sector X</span>
                                        <span style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 700 }}>+60%</span>
                                    </div>
                                    <div style={{ height: '4px', width: '100%', background: '#334155', borderRadius: '2px' }}>
                                        <div style={{ height: '100%', width: '60%', background: '#22c55e', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </BlueprintTile>

                        {/* 4. Medium Tile: AEO Visibility */}
                        <BlueprintTile style={{ gridColumn: 'span 2' }} label="MOD.04 // AEO DOMINANTIE" delay={0.1}>
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'inline-flex', padding: '0.5rem', background: '#fffbeb', borderRadius: '0.5rem', width: 'fit-content', marginBottom: '1rem' }}>
                                    <Sparkles size={24} color="#d97706" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>Vindbaar in AI</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.4, flexGrow: 1 }}>
                                    Niet alleen Google. Wij optimaliseren ook voor <strong>ChatGPT</strong> & <strong>Claude</strong>.
                                </p>
                            </div>
                        </BlueprintTile>

                        {/* 5. Small Tile: Smart Configurator (Tool) */}
                        <BlueprintTile label="MOD.05 // SMART TOOLS" delay={0.3}>
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Settings size={24} color="#2563eb" />
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>Ketel Kieshulp</h3>
                                </div>
                                <div style={{ background: '#f1f5f9', borderRadius: '0.5rem', padding: '0.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Tussenwoning</span>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1' }}></div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '0.5rem', borderRadius: '4px', border: '1px solid #2563eb', boxShadow: '0 2px 4px rgba(37,99,235,0.1)' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2563eb' }}>Vrijstaand</span>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '12px', height: '12px', borderRadius: '50%', background: '#2563eb' }}>
                                            <Check size={8} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BlueprintTile>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReturnSection;
