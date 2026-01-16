import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Onze Methode', path: '/methode' },
        { name: 'Cases', path: '/cases' },
        { name: 'Kennisbank', path: '/kennisbank' },
    ];

    const solutions = [
        { name: 'Hoveniers & Tuinarchitecten', path: '/oplossingen/hoveniers' },
        { name: 'Duurzame Installateurs', path: '/oplossingen/installateurs' },
        { name: 'Interieurbouw & Keukens', path: '/oplossingen/interieurbouw' },
    ];

    return (
        <header className="site-header">
            <div className="container" style={{ position: 'relative', zIndex: 100, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link to="/" style={{
                    fontFamily: 'Nanobananapro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none'
                }}>
                    Hardreturn
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    {/* Dropdown for Solutions */}
                    <div
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <button
                            className="nav-link"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Oplossingen
                            <ChevronDown size={14} />
                        </button>

                        <AnimatePresence>
                            {isSolutionsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="dropdown-menu"
                                    style={{ display: 'block' }}
                                >
                                    <ul style={{ listStyle: 'none', margin: 0, padding: '0.5rem 0' }}>
                                        {solutions.map((solution) => (
                                            <li key={solution.path}>
                                                <Link
                                                    to={solution.path}
                                                    style={{ display: 'block', padding: '0.75rem 1rem', color: '#cbd5e1', fontSize: '0.875rem', textDecoration: 'none' }}
                                                    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                                                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                                >
                                                    {solution.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Regular Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="nav-mobile-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="no-scrollbar"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '100dvh', // Dynamic viewport height
                            backgroundColor: '#1e293b',
                            zIndex: 90, // Below the container (100)
                            padding: '8rem 2rem 2rem 2rem',
                            overflowY: 'auto'
                        }}
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>Oplossingen</h3>
                                {solutions.map((solution) => (
                                    <Link
                                        key={solution.path}
                                        to={solution.path}
                                        onClick={toggleMenu}
                                        style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}
                                    >
                                        {solution.name}
                                    </Link>
                                ))}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={toggleMenu}
                                        style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
