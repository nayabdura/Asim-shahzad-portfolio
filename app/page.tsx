"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";

// --- COMPONENT IMPORTS ---
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import BlobBackground from "./components/BlobBackground";

// Importing Sections (Assumed these are optimized components)
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

  // --- 1. SCROLL SPY LOGIC (Optimized) ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("div[id]");
    
    // Performance: Thoda threshold adjust kiya taake jaldi detect ho
    const observerOptions = {
      root: container,
      rootMargin: "-20% 0px -60% 0px", // Focus on the top-middle part of screen
      threshold: 0, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // --- 2. CLICK NAVIGATION (Memoized) ---
  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // --- 3. MEMOIZED SECTIONS (CRITICAL PERFORMANCE FIX) ---
  // Iska faida: Jab 'activeSection' change hoga, to ye bhari bharkam sections 
  // dobara re-render nahi honge. Sirf Sidebar update hoga.
  const renderedSections = useMemo(() => (
    <>
        {/* SECTION: Main */}
        <div id="main" className="relative overflow-x-hidden overflow-y-hidden h-screen flex items-center justify-center p-6 snap-start bg-transparent">
          <div className="w-full max-w-6xl flex justify-center">
            <MainSection />
          </div>
        </div>

        {/* SECTION: Who am I? */}
        <div id="who-am-i" className="snap-start overflow-x-hidden bg-transparent">
          <Hero />
        </div>

        {/* SECTION: Experience */}
        <div id="experience" className="min-h-screen overflow-x-hidden flex items-center justify-center snap-start bg-transparent">
          <ExperienceSection />
        </div>

        {/* SECTION: Partners */}
        <div id="what-we-do" className="min-h-screen overflow-x-hidden flex items-center justify-center snap-start bg-transparent">
          <PartnersSection />
        </div>

        {/* SECTION: Portfolio */}
        <div id="portfolio" className="min-h-screen flex overflow-x-hidden items-center justify-center snap-start bg-transparent">
          <Portfolio />
        </div>

        {/* SECTION: Testimonials */}
        <div id="testimonials" className="min-h-screen overflow-x-hidden flex items-center justify-center snap-start bg-transparent">
          <TestimonialsSection />
        </div>

        {/* SECTION: Why-Us */}
        <div id="why-us" className="min-h-screen overflow-x-hidden flex items-center justify-center snap-start bg-transparent">
          <WhyUsSection />
        </div>

        {/* SECTION: FAQ */}
        <div id="faq" className="min-h-screen flex overflow-x-hidden items-center justify-center snap-start bg-transparent">
          <FAQSection />
        </div>

        {/* SECTION: Contact-us */}
        <div id="contact-us" className="min-h-screen overflow-x-hidden flex items-center justify-center snap-start bg-transparent">
          <Contact />
        </div>
    </>
  ), []); // Empty dependency array = render once and stay static

  return (
    <main className="relative flex h-screen overflow-x-hidden w-full overflow-hidden bg-white font-sans text-slate-900">
      
      {/* Optimized Background */}
      <BlobBackground />

      {/* Sidebar - Updates independently thanks to memoization above */}
      <div className="hidden lg:flex shrink-0 z-50 h-full">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      </div>

      <MobileHeader onOpen={() => setIsMenuOpen(true)} />

      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>

      {/* MAIN SCROLLABLE AREA */}
      <section 
        ref={scrollContainerRef}
        className="relative flex-1 h-full overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory z-10"
      >
        {renderedSections}
      </section>
    </main>
  );
}