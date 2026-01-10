"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
// import MobileHeader from "./components/MobileHeader";
// import MobileMenu from "./components/MobileMenu";
import BlobBackground from "./components/BlobBackground";
import MainSection from "./home/page";
import Hero from "./who-am-i/page"; // Move your 'who-am-i' code to this component
import ExperienceSection from "./experience/page";
import PartnersSection from "./components/PartnersSection";
import Portfolio from "../app/portfolio/page";
import TestimonialsSection from "./testimonials/page";
import WhyUsSection from "./why-us/page";
import FAQSection from "./faq/page";
import ContactSection from "./contact/page";
import './styles/home.css';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main className="relative flex h-screen w-full overflow-hidden bg-white font-sans">
      <BlobBackground />

      {/* Sidebar - Passing state and scroll function */}
      <div className="hidden lg:flex shrink-0 z-50">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      </div>

      {/* <MobileHeader onOpen={() => setIsMenuOpen(true)} /> */}

      {/* <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence> */}

      {/* MAIN SCROLLABLE AREA 
          'scroll-smooth' handles the transition animation
      */}
      <section className="relative flex-1 h-full overflow-y-auto scroll-smooth snap-y snap-mandatory">

        {/* SECTION: Main */}
        <div
          id="main"
          className="relative h-screen flex items-center justify-center p-6 snap-start bg-transparent"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl flex justify-center"
          >
            <MainSection />
          </motion.div>
        </div>

        {/* SECTION: Who am I? */}
        <div id="who-am-i" className="snap-start bg-transparent">
          <Hero />
        </div>

        {/* SECTION: Experience */}
        <div id="experience" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <ExperienceSection />
        </div>

        {/* SECTION: Partners */}
        <div id="what-we-do" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <PartnersSection />
        </div>

        {/* SECTION: Portfolio */}
        <div id="portfolio" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <Portfolio />
        </div>

        {/* SECTION: Testimonials */}
        <div id="testimonials" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <TestimonialsSection />
        </div>

        {/* SECTION: Why-Us */}
        <div id="why-us" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <WhyUsSection />
        </div>

        {/* SECTION: FAQ */}
        <div id="faq" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <FAQSection />
        </div>

          {/* SECTION: Contact-us */}
        <div id="contact-us" className="min-h-screen flex items-center justify-center snap-start bg-transparent">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}