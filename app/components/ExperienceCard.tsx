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

  // Schema Type Selection: JobPosting vs EducationalOrganization
  const schemaType = isExperience ? "https://schema.org/JobPosting" : "https://schema.org/EducationalOrganization";

  return (
    <article 
      className="bg-transparent rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex h-full border border-transparent hover:border-purple-100 transition-colors duration-300"
      // --- SEO SCHEMA MARKUP ---
      itemScope 
      itemType={schemaType}
    >
      
      {/* Left Column: Icon and Line */}
      <div className="flex flex-col items-center mr-5">
        {/* Icon Circle */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white shrink-0 z-10 shadow-md"
          aria-hidden="true" 
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
          <h3 
            className="text-lg md:text-xl font-bold text-gray-800 leading-tight"
            itemProp={isExperience ? "title" : "name"} // Schema Property
          >
            {item.role} 
            <span 
              className="block md:inline font-medium text-gray-500 md:ml-1 text-base"
              itemProp={isExperience ? "hiringOrganization" : "alumniOf"} // Schema Property
            >
              <span className="hidden md:inline">@</span> {item.location}
            </span>
          </h3>
          <time 
            className="text-sm font-semibold text-purple-600/80 uppercase tracking-wider block mt-1"
            itemProp={isExperience ? "datePosted" : "foundingDate"} // Schema Property
          >
            {item.year}
          </time>
        </header>
        
        <p 
          className="text-gray-500 leading-relaxed text-[15px]"
          itemProp="description" // Key for SEO Keywords
        >
          {item.description}
        </p>
      </div>
    </article>
  );
});

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;