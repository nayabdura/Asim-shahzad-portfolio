import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

// Define the interface for the data prop
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const isExperience = item.type === 'experience';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex h-full">
      {/* Left Column: Icon and Line */}
      <div className="flex flex-col items-center mr-5">
        {/* Icon Circle */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white shrink-0 z-10">
          {isExperience ? (
            <Briefcase size={20} strokeWidth={2} />
          ) : (
            <GraduationCap size={20} strokeWidth={2} />
          )}
        </div>
        {/* Vertical Line */}
        <div className="w-[2px] bg-purple-200 flex-grow -mt-4 pt-4"></div>
      </div>

      {/* Right Column: Text Content */}
      <div className="pt-1 pb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
          {item.role} <span className="font-medium text-gray-500 ml-1">{item.location}</span>
        </h3>
        <h2 className="text-gray-500 font-medium mb-2">{item.year}</h2>
        <p className="text-gray-500 leading-relaxed text-[15px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;