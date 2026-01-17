import { useRef, useState, useEffect } from 'react';
import { TextEffect } from './ui/text-effect';


import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero.webp';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Subtle parallax - reduced movement for elegance
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  // Gentle zoom-in effect for depth
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const words = ['Meetbaar', 'Zichtbaar', 'Winstgevend'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="section bg-hard" style={{
      height: '100vh',
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
            marginBottom: '2rem',
            textAlign: 'center',
            width: '100%',
            textTransform: 'none'
          }}>
            <span className="block whitespace-normal sm:whitespace-nowrap">
              <TextEffect as="span" per="word" preset="blur" delay={0.1}>
                Uw vakmanschap verdient
              </TextEffect>
            </span>

            <div
              className="grid gap-x-0 sm:gap-x-1"
              style={{
                gridTemplateColumns: 'auto auto',
                marginTop: '0.5rem',
                alignItems: 'baseline',
                justifyContent: 'center'
              }}
            >
              <AnimatePresence mode="wait">
                <TextEffect
                  key={words[currentWordIndex]}
                  per="word"
                  preset="blur"
                  variants={{
                    item: {
                      exit: { opacity: 0, filter: 'blur(4px)', y: -10, transition: { duration: 0.4 } }
                    }
                  }}
                  className="whitespace-nowrap text-right"
                  style={{ color: '#f97316' }}
                >
                  {words[currentWordIndex]}
                </TextEffect>
              </AnimatePresence>

              <TextEffect
                as="span"
                per="word"
                preset="blur"
                delay={0.2}
                className="whitespace-nowrap text-left"
                segmentWrapperClassName="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              >
                Meesterschap
              </TextEffect>
            </div>
          </h1>

          <div style={{ maxWidth: '700px', marginBottom: '3rem' }}>
            <TextEffect per="word" preset="blur" delay={0.4} className="text-lg text-slate-400">
              We bouwen websites die er goed uitzien én goed werken.
            </TextEffect>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row"
            style={{ gap: '1rem', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              style={{ fontSize: '0.9rem', padding: '1.2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
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
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#return"
              className="btn"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                background: 'rgba(255,255,255,0.05)',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center'
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
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default Hero;
