import React from 'react';

const GuaranteeSection = () => {
    return (
        <section className="section bg-white">
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    {/* Visual: Checklist/Process */}
                    <div style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -15, left: 20, background: 'var(--color-return)', color: 'white', padding: '0.25rem 1rem', fontWeight: 600, fontSize: '0.9rem' }}>
                            ETAPES NAAR WINST
                        </div>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
                            <li className="flex items-center" style={{ gap: '1rem' }}>
                                <div style={{ background: 'var(--color-hard)', color: 'white', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, borderRadius: '50%' }}>1</div>
                                <div>
                                    <strong>Audit & Analyse</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>We vinden de lekken in uw huidige site.</div>
                                </div>
                            </li>
                            <li className="flex items-center" style={{ gap: '1rem' }}>
                                <div style={{ background: 'var(--color-hard)', color: 'white', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, borderRadius: '50%' }}>2</div>
                                <div>
                                    <strong>Constructie & Design</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Wij bouwen uw digitale machine.</div>
                                </div>
                            </li>
                            <li className="flex items-center" style={{ gap: '1rem' }}>
                                <div style={{ background: 'var(--color-return)', color: 'white', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, borderRadius: '50%' }}>3</div>
                                <div>
                                    <strong>Lancering & Groei</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Direct rendement vanaf dag 1.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-hard)' }}>
                            Succes is geen toeval

                        </h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#64748b' }}>
                            In de digitale wereld wint niet de mooiste website, maar de website die het beste werkt voor de klant.
                            Wij garanderen een technisch perfecte, conversie-gerichte constructie die meetbaar bijdraagt aan uw bedrijfsresultaat.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-hard)' }}>100%</div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Technische Garantie</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-hard)' }}>&lt;3 sec</div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Laadtijd Garantie</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
