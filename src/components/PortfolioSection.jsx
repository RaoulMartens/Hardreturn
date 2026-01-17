import React from 'react';

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="section bg-white">
            <div className="container">
                <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <div>
                        <h2 style={{ color: 'var(--color-hard-dark)' }}>Gerealiseerde Contructies</h2>
                        <p>Winstgevend webdesign voor technische sectoren.</p>
                    </div>
                    <div>
                        <button className="btn btn-secondary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Binnenkort meer</button>
                    </div>
                </header>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

                    {/* Project 1 */}
                    <div style={{ position: 'relative', height: '400px', background: '#e2e8f0', overflow: 'hidden', borderRadius: '1rem' }}>
                        {/* Coming Soon Overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <span style={{
                                color: 'white',
                                border: '1px solid white',
                                padding: '0.5rem 1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.9rem',
                                fontWeight: 'var(--font-weight-heavy)'
                            }}>
                                Binnenkort Live
                            </span>
                        </div>

                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(45deg, #1e293b, #334155)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', opacity: 0.8
                        }}>
                            {/* Placeholder for Drone Image */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
                                <div style={{ filter: 'blur(4px)' }}>[Dronebeeld: bouwplaats vogelvlucht]</div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                            <h3 style={{ color: 'white', filter: 'blur(6px)', userSelect: 'none' }}>Project Titel Verborgen</h3>
                            <div style={{ color: 'var(--color-return)', fontWeight: 'var(--font-weight-heavy)', filter: 'blur(6px)', userSelect: 'none' }}>+XX% Resultaat behaald</div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div style={{ position: 'relative', height: '400px', background: '#e2e8f0', overflow: 'hidden', borderRadius: '1rem' }}>
                        {/* Coming Soon Overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <span style={{
                                color: 'white',
                                border: '1px solid white',
                                padding: '0.5rem 1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.9rem',
                                fontWeight: 'var(--font-weight-heavy)'
                            }}>
                                Binnenkort Live
                            </span>
                        </div>

                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(45deg, #0f172a, #1e293b)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', opacity: 0.8
                        }}>
                            {/* Placeholder for Drone Image */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
                                <div style={{ filter: 'blur(4px)' }}>[Dronebeeld: Luxe Tuinontwerp]</div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                            <h3 style={{ color: 'white', filter: 'blur(6px)', userSelect: 'none' }}>Project Titel Verborgen</h3>
                            <div style={{ color: 'var(--color-return)', fontWeight: 'var(--font-weight-heavy)', filter: 'blur(6px)', userSelect: 'none' }}>Resultaat Verborgen</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
