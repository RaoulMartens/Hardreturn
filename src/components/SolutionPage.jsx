import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SolutionPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const solutionData = {
        'hoveniers': {
            title: 'Hoveniers & Tuinarchitecten',
            headline: 'Laat uw vakmanschap online tot bloei komen.',
            focus: 'Visuele bewijsvoering en lokale dominantie.',
            copy: 'In een sector waar alles draait om esthetiek, is uw portfolio uw krachtigste wapen. Wij zorgen voor een Visual-First presentatie die uw mooiste tuinen en projecten laat spreken. Met lokale SEO zorgen we dat u bovenaan staat zodra iemand in uw regio zoekt naar tuinaanleg of onderhoud.',
            icon: '🌿'
        },
        'installateurs': {
            title: 'Duurzame Installateurs',
            headline: 'Technische autoriteit in de energietransitie.',
            focus: 'Lead-kwalificatie en technisch vertrouwen.',
            copy: 'Duurzaamheid is complexe materie; wij maken het eenvoudig en duidelijk voor uw klant. Met slimme tools zoals een Warmtepomp Check of Ketelkiezer kwalificeren we bezoekers voordat ze uw tijd opeisen. Wij stralen de betrouwbaarheid uit die nodig is voor grote investeringen in comfort.',
            icon: '⚡'
        },
        'interieurbouw': {
            title: 'Interieurbouw & Keukens',
            headline: 'Uw digitale showroom voor luxe en beleving.',
            focus: 'High-end presentatie en afspraakgeneratie.',
            copy: 'Uw klanten zoeken kwaliteit, geen prijsvechters. Wij bouwen een online ervaring die de kwaliteit van uw materialen en oog voor detail tastbaar maakt. Onze systemen zijn gericht op één doel: een volle agenda met showroomafspraken voor high-end projecten.',
            icon: '🪵'
        }
    };

    const content = solutionData[slug];

    useEffect(() => {
        if (!content) {
            navigate('/');
        }
    }, [content, navigate]);

    if (!content) return null;

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
            {/* Hero Section */}
            <section className="section bg-hard" style={{ paddingTop: 'calc(var(--header-height) + 6rem)', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: 0,
                            color: 'var(--color-return)',
                            fontSize: '0.9rem',
                            fontWeight: 'var(--font-weight-heavy)',
                            marginBottom: '1.5rem'
                        }}>
                            {content.title} {content.icon}
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '2rem'
                        }}>
                            {content.headline}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px' }}>
                            {content.copy}
                        </p>
                    </div>
                </div>
            </section>

            {/* Focus Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ color: 'var(--color-hard)', marginBottom: '1.5rem' }}>Focus: {content.focus}</h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Wij bouwen specifieke modules die uw dagelijkse praktijk ondersteunen. Van project-showcases tot automatische offerte-aanvragen.
                            </p>
                            <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li className="flex items-center" style={{ gap: '1rem', fontWeight: 'var(--font-weight-heavy)', color: 'var(--color-hard)' }}>
                                    <span style={{ color: 'var(--color-return)' }}>✓</span> Lead Kwalificatie
                                </li>
                                <li className="flex items-center" style={{ gap: '1rem', fontWeight: 'var(--font-weight-heavy)', color: 'var(--color-hard)' }}>
                                    <span style={{ color: 'var(--color-return)' }}>✓</span> Portfolio Showcase
                                </li>
                                <li className="flex items-center" style={{ gap: '1rem', fontWeight: 'var(--font-weight-heavy)', color: 'var(--color-hard)' }}>
                                    <span style={{ color: 'var(--color-return)' }}>✓</span> Lokale Vindbaarheid
                                </li>
                            </ul>
                            <div style={{ marginTop: '3rem' }}>
                                <a href="/contact" className="btn btn-primary">Start Strategische Sessie</a>
                            </div>
                        </div>
                        <div style={{
                            background: '#f1f5f9',
                            height: '400px',
                            borderRadius: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '5rem'
                        }}>
                            {content.icon}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionPage;
