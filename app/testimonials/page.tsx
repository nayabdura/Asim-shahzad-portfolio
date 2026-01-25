"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import { 
  motion, 
  useMotionValue, 
  animate, 
  useMotionValueEvent,
  PanInfo 
} from "framer-motion";
import { Star, Quote } from "lucide-react";

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  color: string;
}

const COLORS = ["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500", "bg-rose-500", "bg-cyan-500", "bg-indigo-500"];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Julian C", role: "SEO Manager", company: "conversioncow.com", content: "Asim is a strategic partner. We saw a 40% increase in organic traffic within 3 months.", color: COLORS[0] },
  { id: 2, name: "Emmaree Lozada", role: "SEO Team Lead", company: "sortlist.com", content: "Finding a reliable white-label partner is hard, but Asim made it easy. Reliable fulfillment.", color: COLORS[1] },
  { id: 3, name: "Tiago Caramuru", role: "Head of Marketing", company: "millionlabs.co.uk", content: "We needed high-authority trust signals for our Series B funding. Asim delivered top-tier placements.", color: COLORS[2] },
  { id: 4, name: "Andrei Tiburca", role: "Co-Founder", company: "videodeck.co", content: "Skeptical at first, but Asim proved value. Main keywords moved from Page 3 to Top 3.", color: COLORS[3] },
  { id: 5, name: "Sarah Jenkins", role: "Product Lead", company: "techflow.io", content: "Most link builders write terrible content, but Asim is different. Well-researched articles.", color: COLORS[4] },
  { id: 6, name: "Hina Malik", role: "SEO Director", company: "Global Tech", content: "Strict vetting criteria—no PBNs, no link farms. Asim passed our audit perfectly.", color: COLORS[5] },
];

// --- Memoized Sub-Components ---

const Avatar = memo(({ name, color }: { name: string; color: string }) => (
  <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-xs shadow-sm border-2 border-white flex-shrink-0 ${color}`}>
    {name.substring(0, 2).toUpperCase()}
  </div>
));
Avatar.displayName = "Avatar";

const TestimonialCard = memo(({ data }: { data: Testimonial }) => {
  return (
    // FIX: Fixed width (w-[...]) instead of min-width to keep them boxy
    <div className="w-[280px] md:w-[350px] bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none flex-shrink-0">
      
      {/* Header with Stars */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex text-[#FFB800]">
          {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <Quote size={24} className="text-[#582066] opacity-20" />
      </div>

      {/* Content Area */}
      <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-grow">
        &quot;{data.content}&quot;
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
        <Avatar name={data.name} color={data.color} />
        <div className="overflow-hidden">
          <h4 className="text-slate-900 font-bold text-sm truncate">{data.name}</h4>
          <p className="text-slate-400 text-xs font-medium truncate">
            {data.role} @ <span className="text-[#582066]">{data.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
});
TestimonialCard.displayName = "TestimonialCard";

// --- Main Section ---

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  
  // Create enough duplicates to ensure smooth looping
  const LOOP_DATA = React.useMemo(() => [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS], []);

  useEffect(() => {
    let controls: any;
    const speed = 35; // Thoda slow kiya taake users parh sakein

    const startAnimation = () => {
      if (isPaused) return;
      controls = animate(x, x.get() - speed, {
        ease: "linear",
        duration: 1,
        onComplete: startAnimation
      });
    };

    startAnimation();
    return () => controls?.stop();
  }, [isPaused, x]);

  // Seamless Loop Reset Logic (Updated for new Width)
  useMotionValueEvent(x, "change", (latest) => {
     // Width Calculation:
     // Desktop: 350px width + 24px gap = 374px
     // Mobile logic is handled by ensuring we have enough buffer, but let's base it on larger width to be safe.
     const itemWidth = 350 + 24; 
     const totalWidth = itemWidth * TESTIMONIALS.length;
     
     if (latest <= -totalWidth) {
       x.set(0);
     }
  });

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsPaused(false);
  };

  return (
    <section id="testimonials" className="relative py-20 bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Client <span className="text-[#582066]">Feedback</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            Trusted by SaaS founders and Agencies worldwide.
          </p>
        </motion.div>

        {/* Slider Area */}
        <div 
          className="relative -mx-6 md:mx-0" // Mobile mein edge-to-edge karne ke liye
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradients for fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#f9f9fa] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#f9f9fa] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 0 }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            className="flex gap-6 pl-6 md:pl-0 w-max cursor-grab active:cursor-grabbing py-4"
          >
            {LOOP_DATA.map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} data={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default memo(TestimonialsSection);