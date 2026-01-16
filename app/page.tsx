"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENT IMPORTS ---
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import BlobBackground from "./components/BlobBackground";
import MainSection from "./home/page";
import Hero from "./who-am-i/page"; 
import ExperienceSection from "./experience/page";
import PartnersSection from "./components/PartnersSection";
import Portfolio from "../app/portfolio/page";
import TestimonialsSection from "./testimonials/page";
import WhyUsSection from "./why-us/page";
import FAQSection from "./faq/page";
import Contact from "./contact/page";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("main");
  
  // Reference to the scrollable container
  const scrollContainerRef = useRef<HTMLElement>(null);

  // --- 1. SCROLL SPY LOGIC ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Select all direct children divs that have an ID (your sections)
    // We target the sections inside the scroll container
    const sections = container.querySelectorAll("div[id]");
    
    const observerOptions = {
      root: container, // Watch scrolling specifically within this container
      rootMargin: "0px",
      threshold: 0.5, // Update sidebar when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When a section comes into view, update the state
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // --- 2. CLICK NAVIGATION ---
  const scrollToSection = (id: string) => {
    setActiveSection(id); // Optimistically update the UI
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex h-screen w-full overflow-x-hidden bg-white font-sans">
      <BlobBackground />

      {/* Sidebar - Passing active state and scroll function */}
      <div className="hidden lg:flex shrink-0 z-50">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      </div>

      <MobileHeader onOpen={() => setIsMenuOpen(true)} />

      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>

      {/* MAIN SCROLLABLE AREA 
          1. Added ref={scrollContainerRef} so our observer knows what to watch
          2. Kept your existing classes
      */}
      <section 
        ref={scrollContainerRef}
        className="relative flex-1 h-full overflow-y-auto scroll-smooth snap-y snap-mandatory"
      >

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

        {/* SECTION: Partners (What we do) */}
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
          <Contact />
        </div>
      </section>
    </main>
  );
}