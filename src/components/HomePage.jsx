import React from 'react';
import Hero from './Hero';
import HardSection from './HardSection';
import ReturnSection from './ReturnSection';
import PortfolioSection from './PortfolioSection';
import YieldCalculator from './YieldCalculator';

import ContactSection from './ContactSection';
import AnimatedSection from './AnimatedSection';



const HomePage = () => {
    return (
        <main>
            {/* Hero usually handles its own entry, but we can wrap it if desired. 
                Let's keep Hero unwrapped for instant LCP or wrap with fast fade. 
                User asked for "based animations for entire", let's wrap all.
            */}
            <AnimatedSection>
                <Hero />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <HardSection />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <ReturnSection />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <YieldCalculator />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <PortfolioSection />
            </AnimatedSection>



            <AnimatedSection delay={0.1}>
                <ContactSection />
            </AnimatedSection>
        </main>
    );
};

export default HomePage;
