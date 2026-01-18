import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Calculate dropdown position based on button location
    const updatePosition = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + 28, // 1.8rem gap
                left: rect.left + rect.width / 2,
            });
        }
    };

    useEffect(() => {
        if (isSolutionsOpen) {
            updatePosition();
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition, true);
        }
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isSolutionsOpen]);

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
        { name: 'Contact', path: '/contact' },
    ];

    const solutions = [
        { name: 'Hoveniers & Tuinarchitecten', path: '/oplossingen/hoveniers' },
        { name: 'Duurzame Installateurs', path: '/oplossingen/installateurs' },
        { name: 'Interieurbouw & Keukens', path: '/oplossingen/interieurbouw' },
    ];

    // Dropdown rendered via Portal
    const dropdownMenu = isSolutionsOpen && createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.99, x: '-50%' }}
                animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                exit={{ opacity: 0, y: 8, scale: 0.99, x: '-50%' }}
                className="dropdown-menu"
                style={{
                    position: 'fixed',
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                }}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
            >
                <div className="dropdown-container">
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {solutions.map((solution) => (
                            <li key={solution.path}>
                                <Link
                                    to={solution.path}
                                    className="dropdown-item"
                                >
                                    {solution.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );

    return (
        <>
            <header className="site-header">
                <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', maxWidth: '100%' }}>
                    {/* Logo */}
                    <Link to="/" style={{
                        fontFamily: 'var(--font-logo)',
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        letterSpacing: '-0.02em',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        position: 'relative'
                    }}>
                        Hardreturn
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        {/* Dropdown Trigger for Solutions */}
                        <div
                            style={{ position: 'relative' }}
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            <button
                                ref={buttonRef}
                                className="nav-link"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: isSolutionsOpen ? 'white' : '#cbd5e1',
                                    transition: 'color 0.2s ease',
                                    padding: '0 0.5rem'
                                }}
                            >
                                Oplossingen
                                <ChevronDown
                                    size={14}
                                    style={{
                                        opacity: 0.6,
                                        transform: isSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </button>
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
                                height: '100dvh',
                                backgroundColor: 'rgba(15, 23, 42, 0.98)',
                                backdropFilter: 'blur(20px)',
                                zIndex: 900,
                                padding: '10rem 2rem 2rem 2rem',
                                overflowY: 'auto'
                            }}
                        >
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h3 style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'var(--font-weight-heavy)', letterSpacing: '0.1em' }}>Oplossingen</h3>
                                    {solutions.map((solution) => (
                                        <Link
                                            key={solution.path}
                                            to={solution.path}
                                            onClick={toggleMenu}
                                            style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-heavy)', color: 'white' }}
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
                                            style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-heavy)', color: 'white' }}
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

            {/* Dropdown Portal */}
            {dropdownMenu}
        </>
    );
};

export default Header;
