import React from 'react';
import ExperienceCard, { ExperienceItem } from '../components/ExperienceCard';

// Sample Data based on the image
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    type: 'experience',
    role: 'Founder & CEO',
    location: 'Rank Faster',
     year: '2023 - Present',
    description: ' Founded a dedicated SEO agency to help brands rank faster. We specialize in high-authority link building and digital PR, serving agencies and SaaS founders globally.',
   
  },
  {
    id: 2,
    type: 'education',
    role: ' BS Computer Science (BSCS)',
    location: 'Virtual University of Pakistan',
    year: ' 2018 - 2021',
    description: 'Graduated with a strong technical background. My CS degree helps me understand the technical side of SEO, including site structure and web development.',
  },
  {
    id: 3,
    type: 'experience',
    role: 'SEO & Outreach Specialist',
    location: 'Fiverr, Upwork & Adsy',
    year: '2022 - Present',
    description: 'Successfully managing projects on top platforms including Contentmanager.io and Adsy. I provide white-hat guest posting and content marketing services to international clients.',
  },
  {
    id: 4,
    type: 'education',
    role: 'I.Com (Intermediate)',
    location: 'Islamia College',
    year: '2015 - 2017',
    description: ' Completed my intermediate education with a focus on Commerce. This foundation in business principles helps me understand client ROI and marketing budgets better.',
  },
  {
    id: 5,
    type: 'experience',
    role: 'SEO Trainee / Associate',
    location: 'Ghulam Ali SEO',
    year: '2021 - 2022',
    description: 'Started my professional journey learning from industry experts. Gained hands-on experience in off-page SEO fundamentals, keyword research, and manual outreach strategies.',
  },
  {
    id: 6,
    type: 'education',
    role: 'Professional SEO Training',
    location: 'Ghulam Ali SEO Mentorship',
    year: '2021 - 2022',
    description: 'Completed intensive practical training in Search Engine Optimization. Mastered the art of link building, content optimization, and Google algorithm updates.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 md:py-10 bg-[#f9f9fa] px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
             {/* Small purple horizontal line */}
            <span className="h-[2px] w-8 bg-purple-600 inline-block"></span>
            <h6 className="text-purple-600 font-semibold tracking-wider text-sm uppercase">
              Experience & Education
            </h6>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Experience
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;