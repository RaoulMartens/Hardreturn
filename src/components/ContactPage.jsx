import React from 'react';
import ContactSection from './ContactSection';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-bg)' }}>
            <ContactSection />
        </div>
    );
};

export default ContactPage;
