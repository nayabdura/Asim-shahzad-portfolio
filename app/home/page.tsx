"use client";

import React, { memo, MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import '../styles/home.css';

const MainSection: React.FC = () => {
  // Explicitly typing the variants as 'Variants'
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" // Framer Motion prefers specific strings or easing arrays
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Typed 'e' as a React MouseEvent for an anchor element
  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-hero" id="main" aria-label="Introduction">
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <header className="hero-content">
          <motion.h2 variants={fadeInUp} className="sub-heading">
            Professional Link Building Services
          </motion.h2>
          
          <motion.h1 variants={fadeInUp} className="main-title">
            Hello, I'm <br />
            <span className="gradient-text">Asim, Local SEO Expert</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="description">
            I help businesses increase organic traffic and <strong>rank #1 on Google</strong> through 
            strategic <strong>Link Building</strong> and data-driven Local SEO. 
            Based in Pakistan, serving clients globally.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="cta-wrapper">
            <a 
            id='contact'
              href="/contact" 
              onClick={scrollToContact} 
              className="primary-btn" 
              title="Contact Asim for SEO Services"
            >
              Hire Me
            </a>
            <div className="exp-info" aria-label="3 years of experience">
              <span className="number">3+</span>
              <span className="label">Years of <br/>Proven Results</span>
            </div>
          </motion.div>
        </header>

        <span className="sr-only">
          Asim is a Pakistan-based SEO specialist providing backlink strategy, 
          Google Maps optimization, and search engine marketing services.
        </span>
      </motion.div>
    </section>
  );
};

export default memo(MainSection);