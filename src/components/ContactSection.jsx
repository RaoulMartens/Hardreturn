import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Trees, Armchair, HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

const ContactSection = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});

    // Progress calculation: (Current Step - 1) / (Total Steps - 1) * 100
    const progress = ((step - 1) / 4) * 100;

    const handleAnswer = (key, value) => {
        setAnswers({ ...answers, [key]: value });
        // Automatically advance after selection (or logic for next button)
        if (step < 5) {
            setTimeout(() => setStep(step + 1), 300);
        }
    };

    const nextStep = () => {
        if (step < 5) setStep(step + 1);
    };

    const stepsData = {
        1: {
            question: "Welk meesterschap mogen wij digitaal versterken?",
            description: "We spreken de taal van jouw sector; dit helpt ons de juiste middelen te kiezen.",
            options: [
                { label: "Hovenier & Tuinarchitectuur", icon: <Trees size={20} />, value: "hovenier" },
                { label: "Duurzame Installatietechniek", icon: <Hammer size={20} />, value: "installatie" },
                { label: "Interieurbouw & Maatwerk", icon: <Armchair size={20} />, value: "interieur" },
                { label: "Anders", icon: <HelpCircle size={20} />, value: "anders" },
            ]
        },
        2: {
            question: "Waar verlies je op dit moment het meeste rendement?",
            description: "Helder, we begrijpen de sector. Nu de pijn.",
            options: [
                { label: "Te veel vrijblijvende leads", sub: "(geen filter)", value: "kwaliteit" },
                { label: "Onzichtbaar voor de juiste klant", sub: "(SEO/AEO)", value: "zichtbaarheid" },
                { label: "Een verouderde website", sub: "(doet vakmanschap tekort)", value: "verouderd" },
            ]
        },
        3: {
            question: "Wat is het doel van deze investering?",
            description: "Duidelijke focus. Waar staat de stip op de horizon?",
            options: [
                { label: "Een volle agenda", sub: "met high-end projecten", value: "agenda" },
                { label: "Lokale dominantie", sub: "in mijn regio", value: "lokaal" },
                { label: "Afspraakmachine", sub: "automatisering die tijd bespaart", value: "automatisering" },
            ]
        },
        4: {
            question: "Welk budget heb je gereserveerd voor deze digitale fundering?",
            description: "Wij denken in ROI, niet in kosten.",
            options: [
                { label: "€2.500 - €5.000", sub: "(Basis)", value: "basis" },
                { label: "€5.000 - €8.500", sub: "(Professioneel)", value: "pro" },
                { label: "€8.500+", sub: "(Strategische Groeipartner)", value: "partner" },
            ]
        }
    };

    return (
        <section id="contact" className="section bg-white" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '1rem' }}>
                        DIGITALE SCAN
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', maxWidth: '400px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            style={{ height: '100%', background: 'var(--color-return)' }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step <= 4 ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 style={{ fontSize: '2rem', textAlign: 'center', color: 'var(--color-hard)', marginBottom: '1rem' }}>
                                {stepsData[step].question}
                            </h2>
                            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '1.1rem' }}>
                                {step > 1 && <span style={{ color: 'var(--color-return)', fontWeight: 700, marginRight: '0.5rem' }}>✓</span>}
                                {stepsData[step].description}
                            </p>

                            <div className={`grid ${step === 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`} style={{ gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                                {stepsData[step].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(`step${step}`, option.value)}
                                        className="btn-option"
                                        style={{
                                            padding: '1.5rem',
                                            background: '#f8fafc',
                                            border: '2px solid transparent',
                                            borderRadius: '1rem',
                                            textAlign: 'left',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            color: '#1e293b'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-return)';
                                            e.currentTarget.style.background = '#fff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.background = '#f8fafc';
                                        }}
                                    >
                                        {option.icon && <div style={{ color: 'var(--color-return)' }}>{option.icon}</div>}
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{option.label}</div>
                                            {option.sub && <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{option.sub}</div>}
                                        </div>
                                        <div style={{ marginLeft: 'auto', opacity: 0.3 }}>
                                            <ArrowRight size={20} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '3rem', background: '#f0fdf4', borderRadius: '1rem', border: '1px solid #bbf7d0' }}
                        >
                            <CheckCircle size={64} color="#16a34a" style={{ margin: '0 auto 1.5rem auto' }} />
                            <h2 style={{ fontSize: '2rem', color: '#166534', marginBottom: '1rem' }}>Scan Voltooid!</h2>
                            <p style={{ fontSize: '1.2rem', color: '#15803d', marginBottom: '2rem' }}>
                                We hebben een duidelijk beeld van uw profiel. <br />
                                <span style={{ fontWeight: 700 }}>Eén van onze strategen neemt binnen 24 uur contact op.</span>
                            </p>
                            <button className="btn" style={{ background: '#16a34a', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 700, border: 'none' }} onClick={() => setStep(1)}>
                                Opnieuw scannen
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ContactSection;
