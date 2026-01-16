import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Mail, Zap, TrendingUp, Image as ImageIcon } from 'lucide-react';

const PlaceholderPage = () => {
    const categories = [
        {
            title: 'Digitale Strategie & Rendement',
            subtitle: 'De "Return"-kant',
            icon: <TrendingUp size={24} color="#22c55e" />,
            articles: [
                {
                    title: "Van 'vrijblijvende beller' naar kwalitatieve klant",
                    description: "Hoe je met slimme filters en lead-kwalificatie voorkomt dat je tijd verliest aan prijsvechters en koopjesjagers."
                },
                {
                    title: "De psychologie van de keukenkoper en interieurklant",
                    description: "Waarom een digitale showroom draait om luxe, beleving en het opbouwen van langdurig vertrouwen."
                },
                {
                    title: "Lokale dominantie: Waarom landelijke SEO irrelevant is",
                    description: "De kracht van lokale vindbaarheid en 'Google Mijn Bedrijf' voor regiospecifieke vakmensen."
                }
            ]
        },
        {
            title: 'Technische Autoriteit & Innovatie',
            subtitle: 'De "Hard"-kant',
            icon: <Zap size={24} color="#2563eb" />,
            articles: [
                {
                    title: "AEO: Is jouw website klaar voor ChatGPT en Claude?",
                    description: "Hoe Answer Engine Optimization zorgt dat AI-modellen jou aanbevelen als autoriteit."
                },
                {
                    title: "Duurzaam Webdesign: Minder CO2, meer snelheid",
                    description: "Waarom een energiezuinige website (<1g CO2/view) goed is voor de planeet én je Google ranking."
                },
                {
                    title: "De 'Ketelkiezer' en andere conversiemonsters",
                    description: "Hoe technische tools de drempel voor offerte-aanvragen drastisch verlagen."
                }
            ]
        },
        {
            title: 'Visueel Meesterschap & Branding',
            subtitle: 'Portfolio & Identiteit',
            icon: <ImageIcon size={24} color="#d97706" />,
            articles: [
                {
                    title: "Waarom slechte fotografie je duurste marketingfout is",
                    description: "Het belang van high-end projectfotografie en video om vakmanschap tastbaar te maken."
                },
                {
                    title: "De perfecte 'Over Ons' pagina voor de vakman",
                    description: "Hoe je het 'Humanising Brands' principe toepast om vertrouwen te winnen."
                }
            ]
        }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-bg)' }}>

            {/* Hero Section */}
            <section className="section bg-white" style={{ paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.5rem 1rem', background: '#f1f5f9', borderRadius: '2rem', color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
                        <span>📚</span> HardReturn Kennisbank
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-hard)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Kennis is de fundering van elk meesterwerk.
                    </h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#64748b', marginBottom: '3rem' }}>
                        In de wereld van digitale constructie zijn data en innovatie de belangrijkste bouwmaterialen. Wij delen onze inzichten over lead-automatisering, duurzaam webdesign en de toekomst van online vakmanschap.
                    </p>

                    {/* Search Bar */}
                    <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                        <input
                            type="text"
                            placeholder="Doorzoek de fundering..."
                            style={{
                                width: '100%',
                                padding: '1.25rem 1.5rem',
                                paddingLeft: '3.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid #e2e8f0',
                                fontSize: '1.1rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                outline: 'none'
                            }}
                        />
                        <Search size={22} color="#94a3b8" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-alt" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid indent-grid" style={{ gap: '4rem' }}>
                        {categories.map((category, index) => (
                            <div key={index}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-hard)' }}>{category.title}</h2>
                                        <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category.subtitle}</span>
                                    </div>
                                </div>

                                <div className="grid bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    {category.articles.map((article, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ y: -5 }}
                                            style={{
                                                background: 'white',
                                                padding: '2rem',
                                                borderRadius: '1rem',
                                                border: '1px solid #e2e8f0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                textDecoration: 'none',
                                                height: '100%'
                                            }}
                                        >
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-hard)', marginBottom: '1rem', lineHeight: 1.4 }}>
                                                {article.title}
                                            </h3>
                                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                                                {article.description}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-return)', fontWeight: 600, fontSize: '0.9rem' }}>
                                                Lees Artikel <ArrowRight size={16} />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section bg-white">
                <div className="container">
                    <div style={{ background: '#1e293b', borderRadius: '2rem', padding: '4rem 2rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Mail size={48} color="#94a3b8" style={{ margin: '0 auto 1.5rem auto' }} />
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Blijf een stap voor.</h2>
                            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                                Ontvang maandelijks de nieuwste updates over digitale groei voor de vaksector. Geen spam, alleen constructieve inzichten.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Jouw e-mailadres"
                                    style={{
                                        flex: 1,
                                        padding: '1rem 1.5rem',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        outline: 'none',
                                        minWidth: '250px'
                                    }}
                                />
                                <button className="btn" style={{ background: 'var(--color-return)', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                                    Inschrijven
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlaceholderPage;
