import { useRef } from 'react';
import { TextEffect } from './ui/text-effect';


import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero.webp';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Subtle parallax - reduced movement for elegance
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  // Gentle zoom-in effect for depth
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);



  return (
    <section ref={containerRef} className="section bg-hard" style={{
      height: '100dvh', // Mobile browser friendly
      minHeight: '600px', // Prevent squashing on landscape
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay - Subtle Parallax + Zoom */}
      <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, y, scale }}>
        <img src={heroBg} alt="" style={{ width: '100%', height: '120%', objectFit: 'cover', opacity: 0.2, filter: 'grayscale(100%)', marginTop: '-10%' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgb(2,6,23,0.8), rgba(2,6,23,0.6), rgba(2,6,23,0.4))' }} />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Centered Layout */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <h1 className="h1-xl" style={{
            color: 'white',
            marginBottom: '1.5rem',
            textAlign: 'center',
            width: '100%',
            textTransform: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.2rem, 1vw, 0.5rem)'
          }}>
            <TextEffect as="span" per="word" preset="blur" delay={0.1}>
              Uw vakmanschap verdient meesterschap
            </TextEffect>
          </h1>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            color: 'var(--color-return)',
            fontWeight: 'var(--font-weight-heavy)',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            flexWrap: 'wrap'
          }}>
            <TextEffect as="span" per="word" preset="blur" delay={0.3}>
              Meetbaar • Zichtbaar • Winstgevend
            </TextEffect>
          </div>

          <motion.div
            className="flex flex-row flex-wrap"
            style={{ gap: '0.75rem', justifyContent: 'center', width: '100%' }}
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              style={{
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1rem, 2vw, 2.5rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                justifyContent: 'center',
                minWidth: 'auto',
                flex: '1 1 auto',
                maxWidth: '300px'
              }}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: { y: -3 }
              }}
            >
              Plan een Groeisessie
              <motion.span
                variants={{
                  hover: { x: 5, opacity: 1 }
                }}
                transition={{ duration: 0.1 }}
                style={{ display: 'inline-flex' }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#return"
              className="btn"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                background: 'rgba(255,255,255,0.05)',
                fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1rem, 2vw, 2.5rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                justifyContent: 'center',
                minWidth: 'auto',
                flex: '1 1 auto',
                maxWidth: '300px'
              }}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: { y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Bekijk resultaten
              <motion.span
                variants={{
                  hover: { x: 3 }
                }}
                transition={{ duration: 0.1 }}
                style={{ display: 'inline-flex' }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default Hero;
