"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";


const navItems = ["Main", "What we do?", "How we work?", "Jobs", "Sponsorship", "Why us?", "Contacts"];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-brand-dark/20 backdrop-blur-sm lg:hidden"
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-sm bg-white p-8 shadow-2xl lg:hidden"
      >

        <nav className="flex flex-col gap-y-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              href="#"
              className={`text-xl font-medium ${i === 0 ? "text-brand-light" : "text-gray-600"}`}
              onClick={onClose}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}