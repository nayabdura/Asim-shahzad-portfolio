import React, { memo } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

// --- Types ---
export interface ExperienceItem {
  id: number;
  type: 'experience' | 'education';
  role: string;
  location: string;
  description: string;
  year?: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

// --- Memoized Component ---
const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ item }) => {
  const isExperience = item.type === 'experience';

  return (
    <article className="bg-transparent rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex h-full border border-transparent hover:border-purple-100 transition-colors duration-300">
      
      {/* Left Column: Icon and Line */}
      <div className="flex flex-col items-center mr-5">
        {/* Icon Circle */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white shrink-0 z-10 shadow-md"
          aria-hidden="true" // Decorative icon, ignore for screen readers
        >
          {isExperience ? (
            <Briefcase size={20} strokeWidth={2} />
          ) : (
            <GraduationCap size={20} strokeWidth={2} />
          )}
        </div>
        
        {/* Vertical Line */}
        <div className="w-[2px] bg-purple-200 flex-grow -mt-4 pt-4 rounded-b-full"></div>
      </div>

      {/* Right Column: Text Content */}
      <div className="pt-1 pb-4">
        <header className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
            {item.role} 
            <span className="block md:inline font-medium text-gray-500 md:ml-1 text-base">
              {/* Conditional render for comma only on desktop to allow stacking on mobile */}
              <span className="hidden md:inline">@</span> {item.location}
            </span>
          </h3>
          <time className="text-sm font-semibold text-purple-600/80 uppercase tracking-wider block mt-1">
            {item.year}
          </time>
        </header>
        
        <p className="text-gray-500 leading-relaxed text-[15px]">
          {item.description}
        </p>
      </div>
    </article>
  );
});

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;