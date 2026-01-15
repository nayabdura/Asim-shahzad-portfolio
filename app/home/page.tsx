"use client";

import React from "react";
import '../styles/home.css'; // Importing the CSS file for home styles

const MainSection = () => {

  return (
    <section className="home image " id="main">
      <div>
        <div className="position-relative "> 
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer ">
                Local SEO Expert & Link Builder with 3 years of experience, <br/> Based in Pakistan 🇵🇰
              </span>
            </span>
            <span>
              <span className="animated-layer">Asim </span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};

export default MainSection;