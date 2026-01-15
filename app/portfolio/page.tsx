'use client';

import React, { useState } from 'react';
import { CheckCircle2, TrendingUp, ArrowRight, X, BarChart3, PieChart as PieIcon, LineChart as LineIcon } from 'lucide-react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Link from 'next/link';

// --- 1. DEFINE INTERFACES ---
// This tells TypeScript exactly what your data looks like
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

const studies: Study[] = [
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

const CaseStudies = () => {
  // --- 2. FIX STATE TYPING ---
  // Using the generic <Study | null> fixes the "not assignable to null" and "property does not exist" errors
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  const handleClose = () => setSelectedStudy(null);

  return (
    <div id= "portfolio" className="max-w-7xl mx-auto px-6 py-12 relative">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">
        Featured <span className="text-cyan-500">Case Studies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm bg-cyan-50 px-4 py-1.5 rounded-full">
                <CheckCircle2 size={16} /> {study.traffic}
              </div>
              <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm bg-cyan-50 px-4 py-1.5 rounded-full">
                <TrendingUp size={16} /> {study.dr}
              </div>
            </div>

            {/* --- 3. FIX CHART PROPS --- 
                Removed leftAxis={null} and bottomAxis={null}.
                Moved visibility control to xAxis and yAxis props.
            */}
            <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 p-2 cursor-pointer" onClick={() => setSelectedStudy(study)}>
              <LineChart
                series={[{ data: study.chartData, area: true, showMark: false, color: '#06b6d4' }]}
                // Hide X Axis via config
                xAxis={[{
                  data: [1, 2, 3, 4, 5, 6, 7, 8],
                  scaleType: 'point',
                  disableTicks: true,
                  disableLine: true
                }]}
                // Hide Y Axis via config
                yAxis={[{
                  disableTicks: true,
                  disableLine: true
                }]}
                grid={{ horizontal: false, vertical: false }}
                margin={{ top: 20, bottom: 0, left: 0, right: 0 }}
                sx={{ '.MuiAreaElement-root': { fill: "url('#cyanGradient')", opacity: 0.3 } }}
              >
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </LineChart>
            </div>

            <h3 className="text-gray-900 text-2xl font-extrabold mb-6 leading-tight group-hover:text-cyan-600 transition-colors">
              {study.title}
            </h3>

            <button
              onClick={() => setSelectedStudy(study)}
              className="flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:gap-4 transition-all mt-auto outline-none"
            >
              Read More <ArrowRight size={18} className="text-cyan-500" />
            </button>
          </div>
        ))}
      </div>

      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleClose}
          ></div>

          <div className="bg-white rounded-[32px] w-full max-w-5xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl animate-in fade-in zoom-in duration-200">

            <div className="sticky top-0 bg-white/90 backdrop-blur-md p-8 border-b border-gray-100 flex justify-between items-start z-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {selectedStudy.title}
                </h3>
                <div className="flex gap-4">
                  <span className="text-cyan-600 font-semibold bg-cyan-50 px-3 py-1 rounded-full text-sm">
                    {selectedStudy.traffic}
                  </span>
                  <span className="text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {selectedStudy.dr}
                  </span>
                </div>
              </div>
              <button onClick={handleClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50">

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600"><LineIcon size={20} /></div>
                  <h4 className="font-bold text-gray-800">Traffic Growth Trajectory</h4>
                </div>
                <div className="h-[300px] w-full">
                  <LineChart
                    series={[{ data: selectedStudy.chartData, area: true, color: '#06b6d4', label: 'Visitors' }]}
                    xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8], scaleType: 'point' }]}
                    grid={{ horizontal: true }}
                    sx={{ '.MuiAreaElement-root': { fill: "url('#cyanGradientModal')", opacity: 0.2 } }}
                  >
                    <defs>
                      <linearGradient id="cyanGradientModal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><BarChart3 size={20} /></div>
                  <h4 className="font-bold text-gray-800">Monthly Leads Generated</h4>
                </div>
                <div className="h-[250px] w-full">
                  <BarChart
                    series={[{ data: selectedStudy.monthlyLeads, color: '#8b5cf6', label: 'Leads' }]}
                    xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }]}
                    borderRadius={8}
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><PieIcon size={20} /></div>
                  <h4 className="font-bold text-gray-800">Traffic Source Breakdown</h4>
                </div>
                <div className="h-[250px] w-full flex items-center justify-center">
                  <PieChart
                    series={[
                      {
                        data: selectedStudy.trafficSources,
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                      },
                    ]}
                    // --- 4. FIX LEGEND TYPE ---
                    // Using sx to hide the legend is safer than 'hidden: true' which sometimes triggers type errors on older versions
                    sx={{
                      "& .MuiChartsLegend-root": {
                        display: "none !important"
                      }
                    }}
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer Call to Action */}
            <div className="p-8 bg-white border-t border-gray-100 text-center">
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
      )}
    </div>
  );
};

export default CaseStudies;