"use client";

import React, { useState, useCallback, memo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Icons imports 
import SearchIcon from "../icons/SearchLogo";
import MessageSquareIcon from "../icons/MessageSquareIcon";
import LineChartIcon from "../icons/LineChartIcon";
import PenToolIcon from "../icons/PenToolIcon";

// --- CSS for GPU Accelerated Animations (Performance Boost) ---
// JavaScript thread bachane ke liye infinite loops CSS mein define kiye hain
const style = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0; transform: scale(1.4); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
    will-change: transform;
  }
  .animate-glow {
    animation: glow-pulse 2s ease-in-out infinite;
    will-change: transform, opacity;
  }
`;

interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const STEPS: Step[] = [
  {
    id: "step-1",
    label: "Step 1",
    title: "Deep Niche Research",
    description: "We map out high-authority websites and competitor backlink profiles in your niche.",
    icon: <SearchIcon />,
  },
  {
    id: "step-2",
    label: "Step 2",
    title: "100% Manual Outreach",
    description: "No bots. We pitch original, topic-relevant ideas directly to real editors.",
    icon: <MessageSquareIcon />,
  },
  {
    id: "step-3",
    label: "Step 3",
    title: "Authority-First Strategy",
    description: "Designed to build sustainable Domain Authority and improve organic rankings.",
    icon: <LineChartIcon />,
  },
  {
    id: "step-4",
    label: "Step 4",
    title: "SEO-Optimized Content",
    description: "We write high-value, SEO-safe articles that satisfy strict editorial guidelines.",
    icon: <PenToolIcon />,
  },
];

// --- Memoized Child Component (Step Indicator) ---
const StepIndicator = memo(({ 
  step, 
  index, 
  isActive, 
  onClick 
}: { 
  step: Step; 
  index: number; 
  isActive: boolean; 
  onClick: (index: number) => void;
}) => (
  // 'initial' aur 'whileInView' use kiya hai GSAP ki jagah
  <motion.li 
    className="relative list-none" 
    role="presentation"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
  >
    <button
      onClick={() => onClick(index)}
      role="tab"
      aria-selected={isActive}
      aria-label={`Select Step ${index + 1}: ${step.title}`}
      aria-controls={`step-panel-${step.id}`}
      className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 border-4 relative z-10 outline-none focus-visible:ring-4 focus-visible:ring-[#582066]/50 ${
        isActive 
          ? "bg-[#582066] border-white text-white shadow-[0_20px_50px_rgba(88,32,102,0.3)] scale-115" 
          : "bg-white border-white text-slate-400 shadow-xl hover:shadow-2xl hover:text-[#582066] scale-100"
      }`}
    >
      {step.icon}
      
      {/* Active Indicator Pulse (CSS Optimized) */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-[#582066] animate-glow pointer-events-none" />
      )}
    </button>
    
    {/* Active Dot Marker */}
    {isActive && (
      <motion.div 
        layoutId="indicator"
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#582066] rounded-full"
      />
    )}
  </motion.li>
));

StepIndicator.displayName = "StepIndicator";

const WhyUsSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Note: GSAP poori tarah hata diya hai performance ke liye.
  // Ab animations Framer Motion ke 'whileInView' se handle ho rahi hain.

  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  }, []);

  return (
    // FIX: bg-transparent rakha hai taake aapka GLOBAL BLOB BACKGROUND nazar aaye.
    // min-h-screen hata kar py-20 kiya hai taake scrolling smooth rahe aur layout tute nahi.
    <section id="why-us" className="py-20 relative font-sans w-full bg-transparent z-10">
      <style>{style}</style>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <motion.div 
          className="text-center text-black mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#582066] font-bold tracking-widest text-sm uppercase mb-4">Our Methodology</p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Let's Get Practical on <br /> Our <span className="text-[#582066]">Approach!</span>
          </h2>
        </motion.div>

        {/* --- Interactive Step Icons (Navigation) --- */}
        <nav aria-label="Process Steps" className="flex justify-center items-center mb-24 relative">
          
          {/* Connecting Line Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[2px] bg-slate-200 hidden md:block" />
          
          <ul role="tablist" className="flex justify-center items-center gap-6 md:gap-14 relative z-10 m-0 p-0">
            {STEPS.map((step, index) => (
              <StepIndicator 
                key={step.id} 
                step={step} 
                index={index} 
                isActive={activeStep === index} 
                onClick={setActiveStep} 
              />
            ))}
          </ul>
        </nav>

        {/* --- Content Card Section --- */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 -left-16 md:-left-24 flex items-center z-20">
            <button 
              onClick={handlePrev}
              aria-label="Previous Step"
              className="group p-4 text-slate-300 hover:text-[#582066] transition-all outline-none focus-visible:text-[#582066]"
            >
              <ChevronLeft size={64} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-16 md:-right-24 flex items-center z-20">
            <button 
              onClick={handleNext}
              aria-label="Next Step"
              className="group p-4 text-slate-300 hover:text-[#582066] transition-all outline-none focus-visible:text-[#582066]"
            >
              <ChevronRight size={64} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Animated Card */}
          <div role="tabpanel" id={`step-panel-${STEPS[activeStep].id}`} aria-labelledby={`step-${activeStep}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111827] text-white rounded-[4rem] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/10 will-change-transform"
              >
                {/* Inner Card Blob Gradient (Ye wala card ke andar ka design hai, isay rakha hai).
                  Isay CSS animation 'animate-spin-slow' de di hai performance ke liye.
                */}
                <div 
                  className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent blur-[120px] pointer-events-none animate-spin-slow" 
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

      </div>
    </section>
  );
};

export default memo(WhyUsSection);