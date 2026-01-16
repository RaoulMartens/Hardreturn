import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from './ContactSection';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/hero.webp';

const PlaceholderPage = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-bg)' }}>

            {/* Header / Intro */}
            <section className="section text-white relative overflow-hidden" style={{
                padding: '10rem 0 8rem 0',
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '80%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)',
                    pointerEvents: 'none'
                }}></div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px' }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', lineHeight: 1.1, color: 'white', fontWeight: 700, letterSpacing: '-0.02em' }}>
                            Wij zijn <span style={{ color: 'var(--color-return)' }}>HardReturn</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '650px', fontWeight: 400 }}>
                            Wij bouwen websites die er goed uitzien én die verkopen. Geen templates, geen loze beloftes, maar meetbaar resultaat voor vakmensen die willen groeien.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Us & Info */}
            <section className="section bg-white" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="grid lg:grid-cols-12 items-start" style={{ gap: '6rem' }}>

                        {/* Text Content */}
                        <div className="lg:col-span-7" style={{ maxWidth: '720px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-hard)', marginBottom: '2rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                                Waarom wij dit doen
                            </h2>
                            <div style={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <p>
                                    Wij zagen te veel vakmensen met prachtige projecten maar waardeloze websites. Websites die traag waren, niet gevonden werden, of eruitzagen alsof ze in 2010 waren gebouwd.
                                </p>
                                <p>
                                    Daarom zijn wij HardReturn gestart. Wij combineren <strong>technisch vakmanschap</strong> (snelheid, SEO, data) met <strong>visueel meesterschap</strong> (design, fotografie, beleving).
                                </p>
                            </div>

                            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <a href="mailto:info@hardreturn.nl" className="group flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors no-underline">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>info@hardreturn.nl</span>
                                </a>
                                <a href="tel:+310630433623" className="group flex items-center gap-4 text-slate-600 hover:text-green-600 transition-colors no-underline">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>+31 (06) 304 336 23</span>
                                </a>
                                <div className="flex items-center gap-4 text-slate-600">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Arnhem, NL</span>
                                </div>
                            </div>
                        </div>

                        {/* Promise Visual */}
                        <div className="lg:col-span-5">
                            <div style={{
                                background: 'var(--color-hard)',
                                padding: '3rem',
                                borderRadius: '1.5rem',
                                color: 'white',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>

                                <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: 700, color: 'white' }}>Onze Belofte</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        'Geen "uurtje-factuurtje", maar vaste prijzen.',
                                        'Wij spreken jouw taal, niet jargon.',
                                        'Je website is pas af als hij geld oplevert.'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                                            <CheckCircle2 size={24} style={{ color: 'var(--color-return)', flexShrink: 0, marginTop: '2px' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>
                                        "Wij bouwen geen kostenposten, maar investeringen."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default PlaceholderPage;
