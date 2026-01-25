"use client";

import Image from "next/image";
import Link from "next/link"; // For better navigation performance
import { ArrowUpRight, Monitor, Smartphone, Image as ImageIcon } from "lucide-react";
import asim from "../assets/asim.jpg";

// --- Data Arrays (To keep JSX clean) ---
const STATS = [
  { value: "1200+", label: "Live Links Delivered" },
  { value: "80+", label: "Projects Completed" },
  { value: "100+", label: "Authority Sites (DA80+)" },
];

const FLOATING_ICONS = [
  { Icon: Monitor, position: "top-[40%] -left-6" },
  { Icon: Smartphone, position: "top-10 right-4" },
  { Icon: ImageIcon, position: "bottom-10 right-4" },
];

const Hero = () => {
  return (
    <section id="who-am-i" className="relative w-full min-h-screen bg-transparent flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1f2d] leading-[1.1]">
              Secure {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b14bf4] to-[#6d91fe]">
                High-Authority
              </span>{" "}
              Backlinks For
              <br />
              Real Growth
            </h1>

            <p className="text-[#5e626f] text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Hi, I&apos;m Asim! With over 3 years of experience in SEO & Link Building, I am ready to help your brand dominate search results!
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-[#b14bf4] to-[#6d91fe] text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:opacity-90 transition-all"
            >
              Let&apos;s Connect
            </button>

            {/* Changed Button to Link for SEO & Performance */}
            <Link 
              href="#portfolio"
              className="flex items-center gap-2 text-[#5e626f] font-bold text-lg hover:text-[#1a1f2d] transition-colors"
            >
              See My Portfolio <ArrowUpRight size={20} />
            </Link>
          </div>

          {/* STATS (Mapped for cleaner code) */}
          <div className="flex gap-12 pt-8">
            {STATS.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-[#1a1f2d]">{stat.value}</h3>
                <p className="text-[#5e626f] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT - IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full p-[2px] bg-gradient-to-tr from-[#b14bf4] to-[#6d91fe]">

            <div className="w-full h-full rounded-full bg-transparent flex items-end justify-center border-[12px] border-white">
              <div className="relative w-full h-[110%]">
                <Image
                  src={asim}
                  alt="Asim SEO Profile" // Fixed Alt Text
                  fill
                  priority // Good for LCP
                  sizes="(max-width: 768px) 350px, 450px" // Optimized sizes
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* FLOATING ICONS (Mapped) */}
            {FLOATING_ICONS.map(({ Icon, position }, index) => (
              <div 
                key={index}
                className={`absolute ${position} w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl z-10`}
              >
                <Icon size={24} className="text-[#b14bf4]" />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;