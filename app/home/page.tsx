"use client";

import React, { memo } from 'react';
import '../styles/home.css';

const MainSection = () => {
  return (
    // 'home image' class suggests background image. 
    // Ensure styles/home.css is optimized for LCP.
    <section className="home image" id="main">
      <div>
        <div className="position-relative"> 
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
                Local SEO Expert & Link Builder with 3 years of experience, <br/> Based in Pakistan 🇵🇰
              </span>
            </span>
            <span>
              <span className="animated-layer">Asim </span>
            </span>
          </h1>
        </div>
      </div>
      
      {/* CALL TO ACTION */}
      {/* Added aria-label for accessibility since span has no text */}
      <span 
        className="animated-layer animated-btn cta" 
        id="cta" 
        role="button" 
        aria-label="Scroll down"
      >
        <span></span>
      </span>
    </section>
  );
};

export default memo(MainSection);