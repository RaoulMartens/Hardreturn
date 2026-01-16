import React from 'react';
import { motion } from 'framer-motion';

const MethodPage = () => {
    const steps = [
        {
            number: '01',
            title: 'De Blauwdruk (Strategie & Inzicht)',
            description: 'Elk renderend project begint bij een scherpe blauwdruk. Wij duiken diep in jouw business case en de specifieke klantreis binnen jouw niche om te bepalen waar de groeikansen liggen. In plaats van te mikken op "zoveel mogelijk kliks", richten we ons op het elimineren van vrijblijvende leads door jouw ideale klantprofiel scherp te definiëren. We leggen een strategisch fundament dat gericht is op lokale dominantie en autoriteitsopbouw.',
            icon: '📐'
        },
        {
            number: '02',
            title: 'De Fundering (De "Hard"-kant)',
            description: 'Een website zonder solide techniek is als een huis zonder fundering. Wij bouwen op bewezen technieken zoals WordPress en Elementor Pro, wat zorgt voor een unieke interface zonder de noodzaak voor complexe, trage code. Onze technische standaarden zijn onwrikbaar:',
            points: [
                'Snelheid: Websites die in minder dan 3 seconden laden, cruciaal voor mobiele gebruikers en SEO.',
                'Duurzaamheid: Wij pionieren in duurzaam webdesign, waarbij we de CO2-uitstoot per paginabezoek vaak onder de 1 gram houden.',
                'Toegankelijkheid: Als WCAG-specialist zorgen we voor een logische structuur die bruikbaar is voor iedereen.'
            ],
            icon: '🏗️'
        },
        {
            number: '03',
            title: 'De Afwerking (Visual-First Design)',
            description: 'In sectoren waar het resultaat esthetisch is, zoals bij hoveniers en interieurarchitecten, is de visuele kracht van je portfolio de doorslaggevende factor voor succes. Wij hanteren een "Visual First" strategie, waarbij hoogwaardige projectfotografie en video\'s jouw vakmanschap tastbaar maken voor de klant. Het design is modern, nuchter en sophisticated: het straalt autoriteit uit zonder arrogantie.',
            icon: '🎨'
        },
        {
            number: '04',
            title: 'De Machine (De "Return"-kant)',
            description: 'Zodra de constructie staat, activeren we de systemen die zorgen voor rendement. We bouwen niet alleen een site, maar implementeren slimme business tools zoals lead-automatisering en sector-specifieke calculators (bijv. een Warmtepomp Check of Ketelkiezer).',
            points: [
                'Kwalificatie: Onze systemen filteren aanvragen op basis van budget en termijn, zodat je alleen nog maar aan tafel zit bij serieuze klanten.',
                'AEO (AI Optimization): Wij optimaliseren je content zodat je niet alleen in Google, maar ook in AI-modellen zoals ChatGPT en Claude naar voren komt.',
                'Meetbaarheid: Via real-time dashboards maken we jouw online succes inzichtelijk, zodat meesterschap ook echt meetbaar wordt.'
            ],
            icon: '⚙️'
        }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-bg)' }}>
            {/* Hero / Intro Section */}
            <section className="section bg-white" style={{ padding: '6rem 0 4rem 0' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-hard)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        De Digitale Hoofdaannemer
                    </h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#64748b' }}>
                        HardReturn werkt niet als een standaard marketingbureau; wij fungeren als jouw digitale hoofdaannemer. Waar jij de expert bent op de bouwplaats of in de studio, coördineren wij de volledige digitale constructie—van de technische fundering tot de esthetische afwerking. Wij begrijpen de "vaktaal" van het Nederlandse vakmanschap en vertalen jouw meesterschap naar een afspraakmachine die staat als een huis.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="section bg-alt" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="grid highlight-grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:grid md:grid-cols-[min-content_1fr]" style={{
                                position: 'relative',
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0',
                                gap: '2rem',
                                alignItems: 'start'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-return)', lineHeight: 1 }}>
                                        {step.number}
                                    </div>
                                    <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                                </div>

                                <div>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-hard)', fontSize: '1.5rem' }}>{step.title}</h3>
                                    <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: step.points ? '1rem' : '0' }}>{step.description}</p>

                                    {step.points && (
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
                                            {step.points.map((point, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: '#475569' }}>
                                                    <span style={{ color: 'var(--color-return)', fontWeight: 'bold' }}>•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Closing / CTA */}
                    <div style={{ marginTop: '6rem', background: '#1e293b', padding: '4rem 2rem', borderRadius: '1rem', textAlign: 'center', color: 'white' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Klaar voor de bouw?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
                            Ben jij een ambitieuze vakspecialist die de transitie wil maken naar een moderne onderneming? Laten we samen bouwen aan een digitale fundering die net zo sterk is als jouw eigen werk.
                        </p>
                        <a href="#contact" className="btn btn-primary" style={{
                            display: 'inline-block',
                            background: 'var(--color-return)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            fontSize: '1.1rem'
                        }}>
                            Plan een Strategische Sessie
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MethodPage;
