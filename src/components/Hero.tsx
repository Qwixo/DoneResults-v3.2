import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const dotsHighlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const dotsHighlight = dotsHighlightRef.current;

    if (!hero || !dotsHighlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Set CSS variables for the mask position
      dotsHighlight.style.setProperty('--mouse-x', `${mouseX}px`);
      dotsHighlight.style.setProperty('--mouse-y', `${mouseY}px`);
      
      // Show the effect
      dotsHighlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotsHighlight) {
        dotsHighlight.style.opacity = '0';
      }
    };

    // Add event listeners
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    // Clean up
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-dots"></div>
        <div className="hero-dots-highlight" ref={dotsHighlightRef}></div>
        <div className="hero-dots-fade"></div>
      </div>
      
      <div className="hero-content">
        <h1>
          <motion.span 
            className="hero-heading-part"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Want More Clients?
          </motion.span>
          <br />
          <motion.span 
            className="hero-heading-part highlight-guaranteed glitch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          >
            Guaranteed.
          </motion.span>
          <br />
          <motion.span 
            className="hero-heading-part"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
          >
            Or You Don't Pay.
          </motion.span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5, ease: 'easeOut' }}
        >
          We leverage AI-powered cold email to deliver warm, high-intent leads. If we fail, you don't pay.
        </motion.p>
        
        <motion.a 
          href="#contact" 
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5, ease: 'easeOut' }}
        >
          Book a Free Strategy Call
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
