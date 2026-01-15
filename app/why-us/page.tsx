"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MessageSquare, 
  LineChart, 
  PenTool, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    id: "step-1",
    label: "Step 1",
    title: "Deep Niche Research",
    description: "We don't rely on guesswork. We map out the highest-authority websites and competitor backlink profiles in your specific niche to identify opportunities that drive real power to your domain.",
    icon: <Search className="w-7 h-7" />,
  },
  {
    id: "step-2",
    label: "Step 2",
    title: "100% Manual Outreach",
    description: "No bots and no spammy templates. We pitch original, topic-relevant ideas directly to real editors and journalists. This personalized approach secures genuine placements on trusted sites.",
    icon: <MessageSquare className="w-7 h-7" />,
  },
  {
    id: "step-3",
    label: "Step 3",
    title: "Authority-First Strategy",
    description: "We focus on impact, not just volume. Our strategy is designed to build sustainable Domain Authority (DA) and improve your organic search rankings through high-quality link equity.",
    icon: <LineChart className="w-7 h-7" />,
  },
  {
    id: "step-4",
    label: "Step 4",
    title: "SEO-Optimized Content",
    description: "Content is king, but context is queen. We write high-value, SEO-safe articles that align with your brand’s goals while satisfying the strict editorial guidelines of top-tier publications.",
    icon: <PenTool className="w-7 h-7" />,
  },
];

const WhyUsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header and steps entrance
      gsap.from(".reveal-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".reveal-step", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".reveal-step",
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleNext = () => setActiveStep((prev) => (prev + 1) % STEPS.length);
  const handlePrev = () => setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
// ref={containerRef}
  return (
    <section id= "why-us" className="py-10 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div ref={headerRef} className="text-center text-black mb-10 reveal-header">
          <p className="text-[#582066]  font-bold tracking-widest text-sm uppercase mb-4">Our Methodology</p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Let's Get Practical on <br /> Our <span className="text-[#582066]">Approach!</span>
          </h2>
        </div>

        {/* --- Interactive Step Icons --- */}
        <div className="flex justify-center items-center gap-6 md:gap-14 mb-24 relative">
          {/* Connecting Line Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[2px] bg-slate-200 hidden md:block" />
          
          {STEPS.map((step, index) => (
            <div key={step.id} className="reveal-step relative">
              <button
                onClick={() => setActiveStep(index)}
                className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 border-4 relative z-10 ${
                  activeStep === index 
                    ? "bg-[#582066] border-white text-white shadow-[0_20px_50px_rgba(88,32,102,0.3)] scale-115" 
                    : "bg-white border-white text-slate-400 shadow-xl hover:shadow-2xl hover:text-[#582066] scale-100"
                }`}
              >
                {step.icon}
                
                {/* Active Indicator Pulse */}
                {activeStep === index && (
                    <motion.div 
                        layoutId="active-glow" 
                        className="absolute inset-0 rounded-full bg-[#582066] opacity-20"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                )}
              </button>
              
              {/* Active Dot Marker */}
              {activeStep === index && (
                <motion.div 
                  layoutId="indicator"
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#582066] rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* --- Content Card Section --- */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Custom Stylized Navigation Arrows */}
          <div className="absolute inset-y-0 -left-16 md:-left-24 flex items-center">
            <button 
                onClick={handlePrev}
                className="group p-4 text-slate-300 hover:text-[#582066] transition-all"
            >
                <ChevronLeft size={64} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-16 md:-right-24 flex items-center">
            <button 
                onClick={handleNext}
                className="group p-4 text-slate-300 hover:text-[#582066] transition-all"
            >
                <ChevronRight size={64} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Animated Card with Inner Shadow and Depth */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111827] text-white rounded-[4rem] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/10"
            >
              {/* Subtle Animated Background Gradient */}
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent blur-[120px] pointer-events-none" 
              />

              <span className="relative z-10 inline-block text-[#2CCBFF] font-bold tracking-[0.5em] uppercase text-xs mb-10 opacity-80">
                &mdash; {STEPS[activeStep].label} &mdash;
              </span>
              
              <h3 className="relative z-10 text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                {STEPS[activeStep].title}
              </h3>
              
              <p className="relative z-10 text-slate-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium opacity-90">
                {STEPS[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;