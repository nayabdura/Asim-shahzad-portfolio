"use client";

import { motion } from "framer-motion";

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
    { name: "Contacts", id: "contacts" },
];

interface SidebarProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    return (
        <aside className="z-20 flex h-full w-64 flex-col border-r border-gray-100 bg-brand-sidebar/80 backdrop-blur-md px-8 py-10">
            <nav className="flex flex-col gap-y-6">
                {navItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        whileHover={{ x: 5 }}
                        className="group relative flex items-center cursor-pointer"
                    >
                        {/* Active Indicator Dot */}
                        {activeSection === item.id && (
                            <motion.span
                                layoutId="activeDot"
                                className="absolute -left-5 h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_10px_rgba(165,243,252,0.8)]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        {/* Nav Text */}
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                            activeSection === item.id 
                            ? "text-brand-dark" 
                            : "text-gray-400 group-hover:text-brand-dark"
                        }`}>
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </nav>
        </aside>
    );
}