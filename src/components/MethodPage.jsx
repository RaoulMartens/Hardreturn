import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import methodBg from '../assets/method_vision_blueprint.webp';

const MethodModule = React.forwardRef(({ number, title, description, features, index, isMobile }, ref) => {
    return (
        <div
            ref={ref}
            className="method-module"
            style={{
                padding: isMobile ? '4rem 0' : '8vw 0',
                borderBottom: '1px solid var(--color-border)',
                background: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-alt)',
                position: 'relative'
            }}
        >
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '60px 1.2fr 1.5fr',
                gap: isMobile ? '2rem' : '4rem',
                alignItems: 'start',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Left Gutter: Number only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <span style={{
                        fontSize: '0.9rem',
                        fontWeight: 'var(--font-weight-heavy)',
                        color: 'white',
                        background: 'var(--color-hard-dark)',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 10
                    }}>
                        {number}
                    </span>
                </motion.div>

                {/* Middle: Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h2>{title}</h2>
                </motion.div>

                {/* Right: Description & Pillars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                    <p style={{ marginBottom: '3rem' }}>{description}</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '0.75rem'
                    }}>
                        {features.map((feature, fIndex) => (
                            <div
                                key={fIndex}
                                style={{
                                    padding: '0.85rem 1.25rem',
                                    border: '1px solid var(--color-border)',
                                    fontSize: '0.8rem',
                                    fontWeight: 'var(--font-weight-heavy)',
                                    color: 'var(--color-hard-dark)',
                                    background: 'var(--color-bg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                <span style={{ color: 'var(--color-return)', fontSize: '1rem' }}>+</span>
                                {feature}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

const MethodPage = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Parallax & Scale effects for Hero
    const heroY = useTransform(scrollY, [0, 1000], [0, 200]);
    const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]);

    const lastModuleRef = useRef(null);
    const [lastModuleHeight, setLastModuleHeight] = React.useState(0);

    React.useEffect(() => {
        const updateHeight = () => {
            if (lastModuleRef.current) {
                setLastModuleHeight(lastModuleRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const modules = [
        {
            number: '01',
            title: 'Analyse & Strategie',
            description: 'We beginnen met een diepe duik in jouw bedrijf. Wie ben je, wat doe je, en wie wil je bereiken? Geen giswerk, maar data-gedreven keuzes die de basis leggen voor succes.',
            features: ['Business Analyse', 'Doelgroep Segmentatie', 'Concurrentie Onderzoek', 'Conversie Strategie']
        },
        {
            number: '02',
            title: 'Krachtig Bouwen',
            description: 'Jouw digitale fundering moet onverwoestbaar zijn. We bouwen met de nieuwste technieken voor maximale snelheid, veiligheid en een systeem dat met je meegroeit.',
            features: ['Performance Optimalisatie', 'Clean Code Architectuur', 'SEO-Ready Structuur', 'Beveiliging & Schaalbaarheid']
        },
        {
            number: '03',
            title: 'Visueel Meesterschap',
            description: 'Uiterlijk is meer dan een mooi plaatje. Het is de vertaling van jouw vakmanschap naar een visuele taal die direct vertrouwen wekt en jouw kwaliteit uitstraalt.',
            features: ['High-End UI/UX Design', 'Brand Identity Alignment', 'Mobile-First Ervaring', 'Psychologische Conversie']
        },
        {
            number: '04',
            title: 'Meetbare Groei',
            description: 'Een website is een instrument, geen eindstation. We monitoren de resultaten continu en sturen bij waar nodig om jouw business naar het volgende niveau te tillen.',
            features: ['Real-time Analytics', 'A/B Testen & Optimalisatie', 'Harde KPI Rapportage', 'Continue Doorontwikkeling']
        }
    ];

    return (
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
            {/* Full Screen Hero with Image & Parallax */}
            <section style={{
                height: '100dvh',
                minHeight: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--color-hard-dark)'
            }}>
                {/* Background Image with Overlay */}
                <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, y: heroY, scale: heroScale }}>
                    <img src={methodBg} alt="" style={{ width: '100%', height: '120%', objectFit: 'cover', opacity: 0.25, filter: 'grayscale(100%)', marginTop: '-10%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9))' }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    style={{ position: 'relative', zIndex: 10, padding: '0 2rem' }}
                >
                    <span style={{
                        fontSize: '0.9rem',
                        fontWeight: 'var(--font-weight-heavy)',
                        color: 'var(--color-return)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem',
                        display: 'block',
                    }}>
                        Onze Methode
                    </span>
                    <h1 className="h1-xl" style={{ color: 'white' }}>
                        Systeem voor<br />zichtbaar resultaat
                    </h1>
                </motion.div>
            </section>

            {/* Modules with Journey Line */}
            <section ref={containerRef} style={{ position: 'relative', paddingBottom: '10rem' }}>
                {!isMobile && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        <div className="container" style={{ position: 'relative', height: '100%' }}>
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    left: 'calc(var(--spacing-sm) + 30px)',
                                    top: 'calc(8vw + 20px)',
                                    bottom: isMobile ? 0 : `calc(${lastModuleHeight}px - (8vw + 20px) + 10rem)`,
                                    width: '1px',
                                    background: 'var(--color-border)'
                                }}
                            />
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    left: 'calc(var(--spacing-sm) + 29px)',
                                    top: 'calc(8vw + 20px)',
                                    bottom: isMobile ? 0 : `calc(${lastModuleHeight}px - (8vw + 20px) + 10rem)`,
                                    width: '3px',
                                    background: 'var(--color-return)',
                                    scaleY,
                                    transformOrigin: 'top'
                                }}
                            />
                        </div>
                    </div>
                )}

                {modules.map((module, index) => (
                    <MethodModule
                        key={index}
                        ref={index === modules.length - 1 ? lastModuleRef : null}
                        {...module}
                        index={index}
                        isMobile={isMobile}
                    />
                ))}
            </section>
        </div>
    );
};

export default MethodPage;
