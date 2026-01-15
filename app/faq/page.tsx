"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    id: "01",
    question: "Why do I need to hire a link building agency?",
    answer: "Building high-quality links requires deep industry relationships and technical SEO knowledge. An agency provides the infrastructure to scale your organic growth without the overhead of an in-house team.",
    category: "Strategy"
  },
  {
    id: "02",
    question: "How long does it take to see results from our campaigns?",
    answer: "SEO is a long-term investment. While technical changes show impact quickly, link building typically begins to significantly move the needle on rankings within 3 to 6 months of consistent activity.",
    category: "Timeline"
  },
  {
    id: "03",
    question: "Do I need link building if I already have great content?",
    answer: "Content is king, but links are the votes of confidence that tell search engines your content is authoritative. In competitive niches, even the best content needs high-authority links to outrank competitors.",
    category: "Necessity"
  },
  {
    id: "04",
    question: "What exactly does a SaaS link building agency do?",
    answer: "We specialize in the SaaS ecosystem, focusing on getting your product mentioned in high-traffic tech blogs, resource pages, and integration lists that your target customers actually read.",
    category: "Service"
  }
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="w-full  py-32 px-6 md:px-12 selection:bg-transparent/30">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#2CCBFF] font-bold tracking-[0.3em] uppercase text-xs block mb-4"
            >
              Common Inquiries
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-black tracking-tighter"
            >
              Frequently Asked <br />
              <span className="text-black bg-clip-text bg-gradient-to-r from-white to-slate-500">
                Questions.
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg md:text-xl max-w-sm font-medium"
          >
            Everything you need to know about our practical approach to growth.
          </motion.p>
        </div>

        {/* --- FAQ List --- */}
        <div className="border-t border-black/10">
          {FAQ_DATA.map((faq) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={activeId === faq.id} 
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div  id="faq"
      className={`group border-b border-black/10 transition-colors duration-500 ${
        isOpen ? "bg-black/[0.02]" : "hover:bg-black/[0.01]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-10 md:py-14 flex items-start justify-between text-left px-4 md:px-8"
      >
        <div className="flex items-start gap-8 md:gap-16">
          <span className={`hidden md:block text-sm font-mono mt-2 transition-colors duration-500 ${
            isOpen ? "text-black" : "text-slate-600"
          }`}>
            {faq.id}
          </span>
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
              {faq.category}
            </span>
            <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-500 ${
              isOpen ? "text-black" : "text-slate-400 group-hover:text-slate-200"
            }`}>
              {faq.question}
            </h3>
          </div>
        </div>

        <div className={`mt-2 p-2 rounded-full border transition-all duration-500 ${
          isOpen ? "bg-[#2CCBFF] border-[#2CCBFF] text-[#0F172A] rotate-90" : "border-white/10 text-white"
        }`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-14 md:pb-20 pl-4 md:pl-[120px] pr-4 md:pr-32">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-slate-400 text-lg md:text-2xl leading-relaxed font-medium max-w-4xl"
              >
                {faq.answer}
              </motion.p>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="h-px w-full bg-gradient-to-r from-[#2CCBFF]/50 to-transparent mt-12 origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQSection;