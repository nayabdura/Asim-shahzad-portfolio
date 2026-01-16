"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // For the top image
import { Linkedin,  Mail, ExternalLink, Instagram } from "lucide-react"; // Icons for the bottom
import logo from '../assets/logo.png'

interface NavItem {
    name: string;
    id: string;
}

const navItems: NavItem[] = [
    { name: "Main", id: "main" },
    { name: "Who am I?", id: "who-am-i" },
    { name: "Experience", id: "experience" },
    { name: "What we do?", id: "what-we-do" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Why us?", id: "why-us" },
    { name: "Faq", id: "faq" },
    { name: "Contact Us", id: "contact-us" },
];

interface SidebarProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    return (
        <aside className="z-20 flex h-full w-64 flex-col justify-between border-r border-gray-100 bg-white/80 backdrop-blur-md px-6 py-8 ">
            
            {/* --- TOP SECTION: Brand / Logo --- */}
            <div className="mb-8 flex items-center gap-3 px-2">
                {/* Replace '/profile-pic.jpg' with your actual image path in public folder */}
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cyan-100 shadow-sm">
                    <Image 
                        src={logo} // PUT YOUR IMAGE PATH HERE
                        alt="Asim SEO"
                        fill
                        className="object-cover color-black"
                    />
                </div>
                <div>
                    <h1 className="font-bold text-gray-900 leading-tight">Asim SEO</h1>
                    <p className="text-[10px] font-medium text-cyan-600 tracking-wider uppercase">Rank Your Website Faster</p>
                </div>
            </div>

            {/* --- MIDDLE SECTION: Navigation --- */}
            <nav className="flex flex-1 flex-col gap-y-4 overflow-y-auto overflow-x-hidden  scrollbar-hide">
                {navItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        whileHover={{ x: 5 }}
                        className="group relative flex items-center cursor-pointer py-1"
                    >
                        {/* Active Indicator Dot */}
                        {activeSection === item.id && (
                            <motion.span
                                layoutId="activeDot"
                                className="absolute -left-4 h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        {/* Nav Text */}
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                            activeSection === item.id 
                            ? "text-gray-900 font-semibold" 
                            : "text-gray-400 group-hover:text-cyan-600"
                        }`}>
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </nav>

            {/* --- BOTTOM SECTION: "Cool" Card --- */}
            <div className="mt-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg text-white">
                    
                    {/* Decorative blurred circle behind */}
                    <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-cyan-500 blur-2xl opacity-40"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Available Now</span>
                        </div>
                        
                        <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                            Need help ranking #1? Let's discuss your project.
                        </p>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-3">
                            <a href="https://www.linkedin.com/in/asim-shahzad-seo-linkbuilding/" className="p-1.5 rounded-lg bg-white/10 hover:bg-cyan-500 transition-colors text-white">
                                <Linkedin size={14} />
                            </a>
                            <a href="https://www.instagram.com/backlinks.asim/" className="p-1.5 rounded-lg bg-white/10 hover:bg-cyan-500 transition-colors text-white">
                                <Instagram size={14} />
                            </a>
                            <a id="contact-us" className="p-1.5 rounded-lg bg-white/10 hover:bg-cyan-500 transition-colors text-white">
                                <Mail size={14} />
                            </a>
                            <a href="mailto:asimseoweb@gmail.com" className="ml-auto flex items-center gap-1 text-[10px] font-bold hover:text-cyan-400 transition-colors">
                                Book <ExternalLink size={10} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}