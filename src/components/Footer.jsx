import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-hard" style={{ padding: '4rem 0', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container footer-grid">
                {/* Column 1: Brand */}
                <div className="footer-col">
                    <div style={{ fontFamily: 'Nanobananapro, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.02em', marginBottom: '0' }}>
                        Hardreturn
                    </div>
                    <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        We maken websites die zowel mooi als effectief zijn. Voor vakmannen die willen groeien.
                    </p>
                    <div className="flex" style={{ gap: '1rem' }}>
                        {/* Social Placeholders */}
                        <div style={{ width: '2rem', height: '2rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}></div>
                        <div style={{ width: '2rem', height: '2rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}></div>
                    </div>
                </div>

                {/* Column 2: Oplossingen */}
                <div className="footer-col">
                    <h4>Oplossingen</h4>
                    <ul>
                        <li><a href="/oplossingen/hoveniers">Hoveniers & Tuinarchitecten</a></li>
                        <li><a href="/oplossingen/installateurs">Duurzame Installateurs</a></li>
                        <li><a href="/oplossingen/interieurbouw">Interieurbouw & Keukens</a></li>
                        <li><a href="/cases">Project Portfolio</a></li>
                    </ul>
                </div>

                {/* Column 3: Bedrijf */}
                <div className="footer-col">
                    <h4>HardReturn</h4>
                    <ul>
                        <li><a href="/methode">Onze Methode</a></li>
                        <li><a href="/kennisbank">Kennisbank</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Certifications */}
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul style={{ marginBottom: '2rem' }}>
                        <li className="flex items-center" style={{ gap: '0.5rem', alignItems: 'center', display: 'flex' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-return)' }}></span>
                            <a href="mailto:info@hardreturn.nl" style={{ color: 'white' }}>info@hardreturn.nl</a>
                        </li>
                        <li className="flex items-center" style={{ gap: '0.5rem', alignItems: 'center', display: 'flex' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-return)' }}></span>
                            <span>+31 (06) 304 336 23</span>
                        </li>
                        <li className="flex items-center" style={{ gap: '0.5rem', alignItems: 'center', display: 'flex' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-return)' }}></span>
                            <span>Arnhem, NL</span>
                        </li>
                    </ul>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', opacity: 0.5 }}>
                            {/* Mock Certifications */}
                            <div style={{ height: '2rem', width: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            <div style={{ height: '2rem', width: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', fontSize: '0.75rem' }}>
                <p>&copy; {new Date().getFullYear()} Hardreturn Digital Architecture. Alle rechten voorbehouden.</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: '#94a3b8' }}>Algemene Voorwaarden</a>
                    <a href="#" style={{ color: '#94a3b8' }}>Privacybeleid</a>
                    <a href="#" style={{ color: '#94a3b8' }}>Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
