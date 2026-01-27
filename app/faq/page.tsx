"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// --- Types ---
interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItemData[] = [
  {
    id: "01",
    question: "How long until I see results?",
    answer: "Most clients start seeing noticeable improvements in 6–10 weeks. For competitive niches, it may take 3–6 months to see strong ranking growth. You will get weekly updates and a clear timeline based on your goals.",
    category: "Strategy"
  },
  {
    id: "02",
    question: "Are backlinks safe after Google updates?",
    answer: "Yes. I only use white-hat, manual outreach and real editorial placements. No PBNs, no link farms, no spam. Links are built with relevant content and natural anchor text, keeping your profile safe even after Google updates.",
    category: "Safety"
  },
  {
    id: "03",
    question: "Do you replace links if removed?",
    answer: "Yes. If a link is removed within the agreed time frame, I will replace it with a similar or better placement. You will never lose value for your investment.",
    category: "Guarantee"
  },
  {
    id: "04",
    question: "Do you offer refunds?",
    answer: "Refunds depend on the project type and agreement. If I fail to deliver the promised number of backlinks or placements, I will either replace them or refund the amount as per our agreement.",
    category: "Policy"
  },
  {
    id: "05",
    question: "Do you offer monthly SEO packages?",
    answer: "Yes. I offer flexible packages based on your goals, budget, and niche. You can choose a monthly plan or one-time campaign.",
    category: "Flexibility"
  },
  {
    id: "06",
    question: "Can you guarantee rankings?",
    answer: "No ethical SEO agency can guarantee exact rankings. But I guarantee high-quality backlinks, manual outreach, and a proven strategy that increases your chances of ranking.",
    category: "Local SEO"
  }
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  const handleToggle = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq" className="w-full py-20 px-6 md:px-12 selection:bg-purple-100 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#b14bf4] font-bold tracking-[0.3em] uppercase text-[10px] block mb-3"
            >
              Common Inquiries
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-black tracking-tighter"
            >
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b14bf4] to-[#6d91fe]">
                Questions.
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base md:text-lg max-w-sm font-medium"
          >
            Everything you need to know about our practical approach to growth.
          </motion.p>
        </div>

        {/* --- FAQ List with Schema --- */}
        <div 
          className="border-t border-black/5"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {FAQ_DATA.map((faq) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={activeId === faq.id} 
              onToggle={handleToggle}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface FAQItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const FAQItem = memo(({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div 
      className={`group border-b border-black/5 transition-colors duration-500 ${
        isOpen ? "bg-slate-50/50" : "hover:bg-slate-50/30"
      }`}
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => onToggle(faq.id)}
        aria-expanded={isOpen}
        aria-controls={`answer-${faq.id}`}
        className="w-full py-8 md:py-10 flex items-start justify-between text-left px-4 md:px-6 cursor-pointer"
      >
        <div className="flex items-start gap-6 md:gap-12">
          <span className={`hidden md:block text-xs font-mono mt-2 transition-colors duration-500 ${
            isOpen ? "text-[#b14bf4]" : "text-slate-400"
          }`}>
            {faq.id}
          </span>
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#6d91fe]">
              {faq.category}
            </span>
            <h3 
              itemProp="name"
              className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${
                isOpen ? "text-black" : "text-slate-400 group-hover:text-slate-600"
              }`}
            >
              {faq.question}
            </h3>
          </div>
        </div>

        <div className={`mt-2 p-1.5 rounded-full border transition-all duration-500 shrink-0 ${
          isOpen ? "bg-gradient-to-r from-[#b14bf4] to-[#6d91fe] border-transparent text-white rotate-90" : "border-slate-200 text-slate-400"
        }`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`answer-${faq.id}`}
            itemScope 
            itemProp="acceptedAnswer" 
            itemType="https://schema.org/Answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 pl-4 md:pl-[104px] pr-4 md:pr-32">
              <motion.p 
                itemProp="text"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-4xl"
              >
                {faq.answer}
              </motion.p>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-full bg-gradient-to-r from-[#b14bf4]/30 to-transparent mt-8 origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

FAQItem.displayName = "FAQItem";

export default FAQSection;