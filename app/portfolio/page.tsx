'use client';

import React, { useState, useCallback, memo, useMemo } from 'react';
import { CheckCircle2, TrendingUp, ArrowRight, X, BarChart3, PieChart as PieIcon, LineChart as LineIcon } from 'lucide-react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Link from 'next/link';

// --- 1. TYPES & INTERFACES ---
interface TrafficSource {
  id: number;
  value: number;
  label: string;
}

interface Study {
  id: number;
  title: string;
  traffic: string;
  dr: string;
  chartData: number[];
  monthlyLeads: number[];
  trafficSources: TrafficSource[];
}

// --- 2. STATIC DATA (Moved outside component) ---
const STUDIES_DATA: Study[] = [
  {
    id: 1,
    title: "How We Grew a Marketing Platform's Traffic 15% in 2 Months",
    traffic: "15% Traffic increase",
    dr: "DR 75-76",
    chartData: [2000, 2100, 2300, 2250, 2600, 2900, 3100, 3400],
    monthlyLeads: [40, 55, 45, 70, 90, 110],
    trafficSources: [
      { id: 0, value: 45, label: 'Organic' },
      { id: 1, value: 30, label: 'Direct' },
      { id: 2, value: 25, label: 'Social' },
    ]
  },
  {
    id: 2,
    title: "How 30 Backlinks Boosted Propello Cloud's SEO in 3 Months",
    traffic: "12% Traffic increase",
    dr: "DR 37-43",
    chartData: [15, 18, 25, 22, 30, 38, 42, 48],
    monthlyLeads: [10, 15, 12, 25, 30, 45],
    trafficSources: [
      { id: 0, value: 60, label: 'Organic' },
      { id: 1, value: 20, label: 'Referral' },
      { id: 2, value: 20, label: 'Email' },
    ]
  },
  {
    id: 3,
    title: "ScaleUp SaaS: From Zero to Hero in Q4",
    traffic: "25% Traffic increase",
    dr: "DR 20-45",
    chartData: [4500, 4600, 4900, 4800, 5200, 5600, 5900, 6200],
    monthlyLeads: [120, 140, 135, 180, 210, 250],
    trafficSources: [
      { id: 0, value: 30, label: 'Ads' },
      { id: 1, value: 50, label: 'Organic' },
      { id: 2, value: 20, label: 'Social' },
    ]
  },
  {
    id: 4,
    title: "FinTech App: Dominating High-Volume Keywords",
    traffic: "12% Traffic increase",
    dr: "DR 37-43",
    chartData: [120, 125, 135, 130, 145, 155, 160, 175],
    monthlyLeads: [20, 22, 28, 35, 40, 52],
    trafficSources: [
      { id: 0, value: 70, label: 'Mobile' },
      { id: 1, value: 30, label: 'Desktop' },
    ]
  }
];

// --- 3. MAIN COMPONENT ---
const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  // Handlers memoized to prevent re-renders of child components
  const handleOpen = useCallback((study: Study) => setSelectedStudy(study), []);
  const handleClose = useCallback(() => setSelectedStudy(null), []);

  return (
    <div id="portfolio" className="max-w-7xl mx-auto px-6 py-12 relative">
      
      {/* Global SVG Definition for Gradients (Define once, use everywhere) */}
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="cyanGradientModal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
        Featured <span className="text-cyan-500">Case Studies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {STUDIES_DATA.map((study) => (
          <StudyCard key={study.id} study={study} onSelect={handleOpen} />
        ))}
      </div>

      {/* Modal is strictly separated */}
      {selectedStudy && (
        <StudyModal study={selectedStudy} onClose={handleClose} />
      )}
    </div>
  );
};

// --- 4. MEMOIZED SUB-COMPONENTS ---

// A. Study Card Component (Optimized for List View)
const StudyCard = memo(({ study, onSelect }: { study: Study; onSelect: (s: Study) => void }) => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <Badge icon={CheckCircle2} text={study.traffic} />
        <Badge icon={TrendingUp} text={study.dr} />
      </div>

      <div 
        className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 p-2 cursor-pointer" 
        onClick={() => onSelect(study)}
      >
        {/* Simplified Chart for Preview: No tooltips, no axis listeners for performance */}
        <LineChart
          series={[{ data: study.chartData, area: true, showMark: false, color: '#06b6d4' }]}
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8], scaleType: 'point', disableTicks: true, disableLine: true }]}
          yAxis={[{ disableTicks: true, disableLine: true }]}
          grid={{ horizontal: false, vertical: false }}
          margin={{ top: 20, bottom: 0, left: 0, right: 0 }}
          sx={{ 
            '.MuiAreaElement-root': { fill: "url('#cyanGradient')", opacity: 0.3 },
            pointerEvents: 'none' // Important: Disables heavy hover calculations in list view
          }}
        />
      </div>

      <h3 className="text-gray-900 text-2xl font-extrabold mb-6 leading-tight group-hover:text-cyan-600 transition-colors">
        {study.title}
      </h3>

      <button
        onClick={() => onSelect(study)}
        className="flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:gap-4 transition-all mt-auto outline-none"
      >
        Read More <ArrowRight size={18} className="text-cyan-500" />
      </button>
    </div>
  );
});

// B. Modal Component (Isolated Heavy Rendering)
const StudyModal = memo(({ study, onClose }: { study: Study; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-[32px] w-full max-w-5xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 md:p-8 border-b border-gray-100 flex justify-between items-start z-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              {study.title}
            </h3>
            <div className="flex gap-4">
              <Badge icon={CheckCircle2} text={study.traffic} />
              <Badge icon={TrendingUp} text={study.dr} variant="gray" />
            </div>
          </div>
          <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50">
          
          {/* Main Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 md:col-span-2">
            <ChartHeader icon={LineIcon} color="text-cyan-600" bg="bg-cyan-100" title="Traffic Growth Trajectory" />
            <div className="h-[300px] w-full">
              <LineChart
                series={[{ data: study.chartData, area: true, color: '#06b6d4', label: 'Visitors' }]}
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8], scaleType: 'point' }]}
                grid={{ horizontal: true }}
                sx={{ '.MuiAreaElement-root': { fill: "url('#cyanGradientModal')", opacity: 0.2 } }}
              />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <ChartHeader icon={BarChart3} color="text-purple-600" bg="bg-purple-100" title="Monthly Leads Generated" />
            <div className="h-[250px] w-full">
              <BarChart
                series={[{ data: study.monthlyLeads, color: '#8b5cf6', label: 'Leads' }]}
                xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }]}
                borderRadius={8}
              />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <ChartHeader icon={PieIcon} color="text-orange-600" bg="bg-orange-100" title="Traffic Source Breakdown" />
            <div className="h-[250px] w-full flex items-center justify-center">
              <PieChart
                series={[{
                  data: study.trafficSources,
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                }]}
                sx={{ "& .MuiChartsLegend-root": { display: "none !important" } }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-white border-t border-gray-100 text-center mt-auto">
          <p className="text-gray-500 mb-4">Want results like these?</p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
});

// --- Helper UI Components (Reusable) ---

const Badge = ({ icon: Icon, text, variant = 'cyan' }: { icon: any, text: string, variant?: 'cyan' | 'gray' }) => (
  <div className={`flex items-center gap-2 font-bold text-sm px-4 py-1.5 rounded-full ${
    variant === 'cyan' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-500 bg-gray-100'
  }`}>
    <Icon size={16} /> {text}
  </div>
);

const ChartHeader = ({ icon: Icon, color, bg, title }: { icon: any, color: string, bg: string, title: string }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className={`p-2 rounded-lg ${bg} ${color}`}><Icon size={20} /></div>
    <h4 className="font-bold text-gray-800">{title}</h4>
  </div>
);

StudyCard.displayName = "StudyCard";
StudyModal.displayName = "StudyModal";

export default CaseStudies;