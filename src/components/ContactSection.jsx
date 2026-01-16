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
            question: "Wat voor bedrijf heb je?",
            description: "We snappen jouw wereld.",
            options: [
                { label: "Hovenier / Groen", icon: <Trees size={20} />, value: "hovenier" },
                { label: "Installatietechniek / Duurzaam", icon: <Hammer size={20} />, value: "installatie" },
                { label: "Interieurbouw / Maatwerk", icon: <Armchair size={20} />, value: "interieur" },
                { label: "Anders", icon: <HelpCircle size={20} />, value: "anders" },
            ]
        },
        2: {
            question: "Wat is je grootste frustratie?",
            description: "Waarom ben je hier?",
            options: [
                { label: "Mijn site levert niks op", sub: "(Geen leads)", value: "geen_leads" },
                { label: "Ik krijg alleen maar prijszoekers", sub: "(Slechte leads)", value: "slechte_leads" },
                { label: "Mijn site past niet meer bij mijn niveau", sub: "(Uitstraling)", value: "uitstraling" },
            ]
        },
        3: {
            question: "Waar wil je staan over 12 maanden?",
            description: "Wat is het doel?",
            options: [
                { label: "Volle agenda", sub: "(Meer werk)", value: "meer_werk" },
                { label: "Beter werk", sub: "(Hogere marges)", value: "betere_marges" },
                { label: "Meer rust", sub: "(Automatisering)", value: "rust" },
            ]
        },
        4: {
            question: "Wat is je budget?",
            description: "Geen verrassingen.",
            options: [
                { label: "€3.000 - €5.000", sub: "(Start)", value: "start" },
                { label: "€5.000 - €10.000", sub: "(Groei)", value: "groei" },
                { label: "€10.000+", sub: "(Maatwerk)", value: "maatwerk" },
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
                            <h2 style={{ fontSize: '2rem', color: '#166534', marginBottom: '1rem' }}>Bericht ontvangen.</h2>
                            <p style={{ fontSize: '1.2rem', color: '#15803d', marginBottom: '2rem' }}>
                                We bellen je binnen 1 werkdag. <br />
                                <span style={{ fontWeight: 700 }}>Geen sales-praatje, gewoon even kennismaken.</span>
                            </p>
                            <button className="btn" style={{ background: '#16a34a', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 700, border: 'none' }} onClick={() => setStep(1)}>
                                Terug naar home
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ContactSection;
