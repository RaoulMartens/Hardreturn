import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const PlaceholderPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#f8fafc', // Light/White background
            paddingTop: 'calc(var(--header-height) + 4rem)',
            paddingBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                {/* Flex Container for Desktop Side-by-Side */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>

                    {/* Left: Form Card (White) */}
                    <div style={{
                        flex: '2 1 600px',
                        background: 'white',
                        padding: '3rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                        position: 'relative'
                    }}>
                        {/* Title */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2rem',
                                margin: 0,
                                color: 'var(--color-hard)',
                                fontWeight: 'var(--font-weight-heavy)',
                                letterSpacing: 'var(--font-letter-spacing-tight)'
                            }}>
                                Wij helpen je graag!
                            </h2>
                        </div>

                        {/* Form */}
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{
                                    display: 'block', marginBottom: '0.5rem',
                                    fontSize: '0.8rem', // Slightly increased for readability
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: '#94a3b8',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Naam</label>
                                <input type="text" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: 'none',
                                    borderRadius: 0,
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-body)',
                                    outline: 'none',
                                    background: '#f1f5f9',
                                    color: 'var(--color-text)'
                                }} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label style={{
                                        display: 'block', marginBottom: '0.5rem',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        color: '#94a3b8',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>E-mail</label>
                                    <input type="email" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        border: 'none',
                                        borderRadius: 0,
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-body)',
                                        outline: 'none',
                                        background: '#f1f5f9',
                                        color: 'var(--color-text)'
                                    }} />
                                </div>
                                <div>
                                    <label style={{
                                        display: 'block', marginBottom: '0.5rem',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        color: '#94a3b8',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>Telefoonnummer (Optioneel)</label>
                                    <input type="tel" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        border: 'none',
                                        borderRadius: 0,
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-body)',
                                        outline: 'none',
                                        background: '#f1f5f9',
                                        color: 'var(--color-text)'
                                    }} />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block', marginBottom: '0.5rem',
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: '#94a3b8',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Bericht</label>
                                <textarea rows="6" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: 'none',
                                    borderRadius: 0,
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-body)',
                                    outline: 'none',
                                    background: '#f1f5f9',
                                    color: 'var(--color-text)',
                                    resize: 'vertical'
                                }}></textarea>
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <button type="submit" className="btn btn-primary" style={{
                                    padding: '1rem 3rem',
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-heading)',
                                    background: 'var(--color-return)'
                                }}>
                                    VERSTUUR
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Sidebar Info */}
                    <div style={{ flex: '1 1 300px', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                            <div>
                                <h4 style={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: '#94a3b8',
                                    marginBottom: '0.5rem'
                                }}>Mail Ons:</h4>
                                <a href="mailto:info@hardreturn.nl" style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-hard)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    textDecoration: 'none',
                                    letterSpacing: 'var(--font-letter-spacing-tight)'
                                }}>info@hardreturn.nl</a>
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: '#94a3b8',
                                    marginBottom: '0.5rem'
                                }}>Bel Ons:</h4>
                                <a href="tel:+310630433623" style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-hard)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    textDecoration: 'none',
                                    letterSpacing: 'var(--font-letter-spacing-tight)'
                                }}>06 304 336 23</a>
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: '#94a3b8',
                                    marginBottom: '0.5rem'
                                }}>Bezoek Ons:</h4>
                                <a href="#" style={{
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-hard)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    lineHeight: 1.3,
                                    display: 'block',
                                    textDecoration: 'none',
                                    letterSpacing: 'var(--font-letter-spacing-tight)'
                                }}>
                                    Arnhem<br />
                                    Gelderland
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
