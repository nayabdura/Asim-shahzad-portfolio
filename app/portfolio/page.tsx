import React from 'react';
import { CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

const studies = [
  {
    id: 1,
    title: "How We Grew a Marketing Platform's Traffic 15% in 2 Months",
    traffic: "15% Traffic increase",
    dr: "DR 75-76",
  },
  {
    id: 2,
    title: "How 30 Backlinks Boosted Propello Cloud's SEO in 3 Months",
    traffic: "12% Traffic increase",
    dr: "DR 37-43",
  },
  {
    id: 3,
    title: "How We Grew a Marketing Platform's Traffic 15% in 2 Months",
    traffic: "15% Traffic increase",
    dr: "DR 75-76",
  },
  {
    id: 4,
    title: "How 30 Backlinks Boosted Propello Cloud's SEO in 3 Months",
    traffic: "12% Traffic increase",
    dr: "DR 37-43",
  }
];

const CaseStudies = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
        Featured <span className="text-cyan-500">Case Studies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map((study) => (
          <div key={study.id} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group">
            {/* Result Badges */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm bg-cyan-50 px-4 py-1.5 rounded-full">
                <CheckCircle2 size={16} /> {study.traffic}
              </div>
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm bg-cyan-50 px-4 py-1.5 rounded-full">
                <TrendingUp size={16} /> {study.dr}
              </div>
            </div>

            {/* Analytics Preview */}
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden mb-8 border border-gray-100 aspect-[16/10] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 to-transparent"></div>
               <p className="text-gray-400 font-medium text-sm">Analytics Preview</p>
            </div>

            <h3 className="text-gray-900 text-2xl font-extrabold mb-6 leading-tight group-hover:text-cyan-600 transition-colors">
              {study.title}
            </h3>
            
            <button className="flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:gap-4 transition-all">
              Read More <ArrowRight size={18} className="text-cyan-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;