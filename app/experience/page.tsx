"use client";

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard, { ExperienceItem } from '../components/ExperienceCard';

// Data defined outside component (Best for performance)
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    type: 'experience',
    role: 'Founder & CEO',
    location: 'Rank Faster',
    year: '2023 - Present',
    description: 'Founded a dedicated SEO agency to help brands rank faster. We specialize in high-authority link building and digital PR, serving agencies and SaaS founders globally.',
  },
  {
    id: 2,
    type: 'education',
    role: 'BS Computer Science (BSCS)',
    location: 'Virtual University of Pakistan',
    year: '2018 - 2021',
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
    description: 'Completed my intermediate education with a focus on Commerce. This foundation in business principles helps me understand client ROI and marketing budgets better.',
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

// Animation Variants (Static object)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ExperienceSection = () => {
  // Removed useMemo: Since EXPERIENCE_DATA is a constant outside the component, 
  // useMemo adds unnecessary overhead.

  return (
    <section 
      id="experience" 
      className="bg-[#f9f9fa] py-20 px-6 md:px-16 lg:px-24 selection:bg-purple-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[2px] w-10 bg-purple-600"></span>
            <h6 className="text-purple-600 font-bold tracking-widest text-xs uppercase">
              Resume
            </h6>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Education & <span className="text-purple-600">Experience</span>
          </motion.h2>
        </header>

        {/* Grid Layout with Stagger Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {EXPERIENCE_DATA.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <ExperienceCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ExperienceSection);