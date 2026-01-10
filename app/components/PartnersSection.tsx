"use client";
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "airfocus", "Trackunit", "SuperAnnotate", "deliverect", "Dexatel", 
  "Qooper", "tecla", "intellect", "ConversionCow", "workhero", 
  "backlinkmanager.io", "EASYDMARC", "clearout", "BrandCrowd", "DesignCrowd"
];

const PartnersSection = () => {
  return (
    <section className="bg-white w-full py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h6 className="text-purple-600 uppercase tracking-widest text-xs font-bold mb-4">Our Partners</h6>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">
          20+ Leading Companies Trust Us
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {/* Duplicate the list to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="mx-4 flex items-center justify-center min-w-[200px] h-20 border border-gray-100 rounded-2xl px-8 bg-black-50/50 shadow-sm"
            >
              <span className="text-black-400 font-bold text-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative flex overflow-hidden pt-2 group">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {/* Duplicate the list to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="mx-4 flex items-center justify-center min-w-[200px] h-20 border border-gray-100 rounded-2xl px-8 bg-black-50/50 shadow-sm"
            >
              <span className="text-black-400 font-bold text-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;