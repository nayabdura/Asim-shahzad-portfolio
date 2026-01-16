"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Removed empty 'avatar' field, we generate it dynamically now
const TESTIMONIALS = [
    { id: 1, name: "Julian C", role: "SEO Manager", company: "conversioncow.com", content: "Asim is a strategic partner, not just a link builder. We saw a 40% increase in organic traffic within 3 months of his outreach campaign." },
    { id: 2, name: "Emmaree Lozada", role: "SEO Team Lead", company: "sortlist.com", content: "Finding a reliable white-label partner is hard, but Asim made it easy. His team handles our agency's entire link-building fulfillment." },
    { id: 3, name: "Tiago Caramuru", role: "Head of Marketing", company: "millionlabs.co.uk", content: "We needed high-authority trust signals for our Series B funding round. Asim delivered placements on top-tier publications." },
    { id: 4, name: "Andrei Tiburca", role: "Co-Founder", company: "videodeck.co", content: "I was skeptical about guest posting, but Asim proved its value. Our main product keywords moved from Page 3 to Top 3." },
    { id: 5, name: "Sarah Jenkins", role: "Product Lead", company: "techflow.io", content: "Most link builders write terrible content, but Asim is different. The articles his team writes are well-researched." },
    { id: 6, name: "Hina Malik", role: "SEO Director", company: "Global Tech Solutions", content: "We have strict vetting criteria for backlinks—no PBNs, no link farms. Asim passed our audit with flying colors." },
];

const LOOP_DATA = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

// --- CUSTOM AVATAR COMPONENT ---
// Generates initials and a consistent background color based on the name
const Avatar = ({ name, size = 56 }: { name: string; size?: number }) => {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    // Palette of nice muted colors that fit a professional theme
    const colors = [
        "bg-blue-500", "bg-emerald-500", "bg-violet-500", 
        "bg-amber-500", "bg-rose-500", "bg-cyan-500", 
        "bg-indigo-500", "bg-teal-500", "bg-fuchsia-500"
    ];

    // Simple hash function to get the same color for the same name every time
    const charCodeSum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colorClass = colors[charCodeSum % colors.length];

    return (
        <div
            className={`flex items-center justify-center rounded-full text-white font-bold shadow-sm border-2 border-white ${colorClass}`}
            style={{ width: size, height: size, fontSize: size * 0.4 }}
        >
            {initials}
        </div>
    );
};

const TestimonialsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
    const [isPaused, setIsPaused] = useState(false);
    const x = useMotionValue(0);
    const scrollProgress = useSpring(0, { stiffness: 100, damping: 30 });

    const updateConstraints = useCallback(() => {
        if (sliderRef.current && containerRef.current) {
            const cardWidth = sliderRef.current.scrollWidth / 3;
            const visibleWidth = containerRef.current.offsetWidth;
            setDragConstraints({
                left: -(cardWidth * 2 - visibleWidth),
                right: -cardWidth
            });
            x.set(-cardWidth);
        }
    }, [x]);

    useEffect(() => {
        updateConstraints();
        window.addEventListener("resize", updateConstraints);

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => {
            window.removeEventListener("resize", updateConstraints);
            ctx.revert();
        };
    }, [updateConstraints]);

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (sliderRef.current) {
                const cardWidth = sliderRef.current.scrollWidth / 3;
                if (latest <= -(cardWidth * 2)) x.set(latest + cardWidth);
                if (latest >= -cardWidth + 100) x.set(latest - cardWidth);
                const relativeX = Math.abs(latest + cardWidth);
                const progress = Math.min(Math.max(relativeX / cardWidth, 0), 1);
                scrollProgress.set(progress);
            }
        });
        return () => unsubscribe();
    }, [x, scrollProgress]);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            animate(x, x.get() - 400, {
                type: "spring",
                stiffness: 40,
                damping: 20,
                restDelta: 0.5
            });
        }, 4500);
        return () => clearInterval(interval);
    }, [isPaused, x]);

    return (
        <section id="testimonials"
            ref={containerRef}
            className="relative py-24 bg-transparent overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-[1440px] mx-auto px-6">
                <div ref={headerRef} className="relative z-10 text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Hear It Straight from <span className="text-[#582066]">Clients</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Real feedback from clients who’ve seen results.
                    </p>
                </div>
                <div className="relative cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={sliderRef}
                        drag="x"
                        dragConstraints={dragConstraints}
                        onDragStart={() => setIsPaused(true)}
                        style={{ x }}
                        className="flex gap-6 md:gap-8 items-stretch"
                    >
                        {LOOP_DATA.map((item, idx) => (
                            <TestimonialCard key={`${item.id}-${idx}`} data={item} />
                        ))}
                    </motion.div>
                </div>
                <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                        <motion.div
                            style={{ scaleX: scrollProgress, transformOrigin: "left" }}
                            className="absolute inset-0 bg-[#582066]"
                        />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Clients Testimonials
                    </span>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ data }: { data: typeof TESTIMONIALS[0] }) => {
    return (
        <motion.div
            className="min-w-[300px] md:min-w-[450px] bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 flex flex-col"
        >
            <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#FFB800" className="text-[#FFB800]" />
                    ))}
                </div>
                <Quote size={40} className="text-[#582066] opacity-10" />
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow">
                &quot;{data.content}&quot;
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                {/* Replaced Next/Image with Custom Avatar Component */}
                <Avatar name={data.name} />
                
                <div>
                    <h4 className="text-slate-900 font-bold text-lg leading-tight">{data.name}</h4>
                    <p className="text-slate-400 text-sm font-medium">
                        {data.role} @ <span className="text-[#582066]">{data.company}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;