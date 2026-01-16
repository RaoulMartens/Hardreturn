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

                        {/* Case 1: Hovenier */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '4rem' }}>
                            <div>
                                <div style={{ background: '#f0fdf4', height: '300px', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                    🌿
                                </div>
                                <h2 style={{ color: 'var(--color-hard)', marginBottom: '0.5rem' }}>Hovenier in Utrecht</h2>
                                <div style={{ color: 'var(--color-return)', fontWeight: 600 }}>Sector: Tuinontwerp & Aanleg</div>
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
                                    <p style={{ color: '#15803d', fontWeight: 600 }}>12 gekwalificeerde afspraken per maand (+€50k omzet/jaar).</p>
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
                                <div style={{ color: 'var(--color-return)', fontWeight: 600 }}>Sector: Installatietechniek</div>
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
                                    <p style={{ color: '#15803d', fontWeight: 600 }}>Conversie van 8% naar 35%. Bellers zijn nu technisch onderlegd.</p>
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
                                <div style={{ color: 'var(--color-return)', fontWeight: 600 }}>Sector: Interieurbouw</div>
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
                                    <p style={{ color: '#15803d', fontWeight: 600 }}>Gemiddelde offerteaanvraag steeg van €3k naar €8k.</p>
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
