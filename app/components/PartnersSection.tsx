"use client";
import React, { memo } from 'react';

// --- CSS Keyframes for GPU Scroll ---
const styles = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    display: flex;
    width: fit-content;
    animation: scroll-left 30s linear infinite;
    will-change: transform; /* Forces GPU usage */
  }
  /* Pause animation on hover for better UX (Optional, keeps native feel) */
  .group:hover .animate-scroll {
    animation-play-state: paused;
  }
`;

const LOGOS = [
  "airfocus", "Trackunit", "SuperAnnotate", "deliverect", "Dexatel", 
  "Qooper", "tecla", "intellect", "ConversionCow", "workhero", 
  "backlinkmanager.io", "EASYDMARC", "clearout", "BrandCrowd", "DesignCrowd"
];

// Memoized Logo Item to reduce render cost inside loop
const LogoItem = memo(({ logo }: { logo: string }) => (
  <div className="mx-4 flex items-center justify-center min-w-[200px] h-20 border border-gray-100 rounded-2xl px-8 bg-black-50/50 shadow-sm flex-shrink-0">
    <span className="text-black-400 font-bold text-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
      {logo}
    </span>
  </div>
));
LogoItem.displayName = "LogoItem";

const PartnersSection = () => {
  // Pre-calculate the doubled list once
  const doubledLogos = React.useMemo(() => [...LOGOS, ...LOGOS], []);

  return (
    <section id="what-we-do" className="bg-transparent w-full py-20 overflow-hidden">
      <style>{styles}</style>
      
      <div className="text-center mb-16">
        <h6 className="text-purple-600 uppercase tracking-widest text-xs font-bold mb-4">Our Partners</h6>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">
          20+ Leading Companies Trust Us
        </h2>
      </div>

      {/* Row 1 */}
      <div className="relative flex overflow-hidden bg-transparent group mb-6">
        {/* CSS Animation Class applied here */}
        <div className="animate-scroll">
          {doubledLogos.map((logo, index) => (
            <LogoItem key={`r1-${index}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative flex overflow-hidden bg-none pt-2 group">
        <div className="animate-scroll" style={{ animationDuration: '35s', animationDirection: 'reverse' }}> 
          {/* Added reverse direction for visual variety, remove style if you want same direction */}
          {doubledLogos.map((logo, index) => (
            <LogoItem key={`r2-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PartnersSection);