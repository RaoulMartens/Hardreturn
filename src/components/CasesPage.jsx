import React from 'react';

const CasesPage = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-bg)' }}>
            <section className="section bg-hard" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.5rem' }}>
                        Projecten die renderen
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
                        Ontdek hoe wij vakmensen hebben geholpen bij de transitie naar een moderne online autoriteit.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid" style={{ gap: '4rem' }}>

                        {/* Case 1 */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '4rem', position: 'relative', opacity: 0.7 }}>
                            <div style={{
                                position: 'absolute', inset: 0,
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.4)',
                                backdropFilter: 'blur(2px)'
                            }}>
                                <span style={{
                                    color: 'var(--color-hard)',
                                    background: 'white',
                                    border: '1px solid var(--color-hard)',
                                    padding: '0.5rem 1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                                }}>
                                    In Ontwikkeling
                                </span>
                            </div>

                            <div>
                                <div style={{ background: '#e2e8f0', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>

                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem', filter: 'blur(5px)', userSelect: 'none' }}>Project Titel Verborgen</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 600, filter: 'blur(5px)', userSelect: 'none' }}>Sector: Verborgen</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Uitdaging</h4>
                                    <p style={{ color: '#334155', filter: 'blur(4px)', userSelect: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Hard-Oplossing</h4>
                                    <p style={{ color: '#334155', filter: 'blur(4px)', userSelect: 'none' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#166534', marginBottom: '0.5rem' }}>De Return</h4>
                                    <p style={{ color: '#15803d', fontWeight: 600, filter: 'blur(4px)', userSelect: 'none' }}>+XX% conversie en significante groei.</p>
                                </div>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', position: 'relative', opacity: 0.7 }}>
                            <div style={{
                                position: 'absolute', inset: 0,
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.4)',
                                backdropFilter: 'blur(2px)'
                            }}>
                                <span style={{
                                    color: 'var(--color-hard)',
                                    background: 'white',
                                    border: '1px solid var(--color-hard)',
                                    padding: '0.5rem 1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                                }}>
                                    In Ontwikkeling
                                </span>
                            </div>
                            <div>
                                <div style={{ background: '#e2e8f0', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>

                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem', filter: 'blur(5px)', userSelect: 'none' }}>Project Titel Verborgen</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 600, filter: 'blur(5px)', userSelect: 'none' }}>Sector: Verborgen</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Uitdaging</h4>
                                    <p style={{ color: '#334155', filter: 'blur(4px)', userSelect: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>De Hard-Oplossing</h4>
                                    <p style={{ color: '#334155', filter: 'blur(4px)', userSelect: 'none' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
                                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', color: '#166534', marginBottom: '0.5rem' }}>De Return</h4>
                                    <p style={{ color: '#15803d', fontWeight: 600, filter: 'blur(4px)', userSelect: 'none' }}>+XX% conversie en significante groei.</p>
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
