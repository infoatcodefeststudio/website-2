import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_COMPARISON_MATRIX } from '../data/company';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { FadeIn } from './animations/MotionSection';
import { WiproDotCluster } from './WiproBrandMark';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function ProductComparison() {
  const { navigate, openDemoModal } = useNavigation();
  const [filter, setFilter] = useState<'all' | 'logistics' | 'facility' | 'hospitality'>('all');

  const filteredProducts = PRODUCT_COMPARISON_MATRIX.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'logistics') return ['wms', 'tms', 'inventory-management'].includes(item.slug);
    if (filter === 'facility') return ['gate-yard-management', 'vendor-management'].includes(item.slug);
    if (filter === 'hospitality') return ['hotel-erp', 'inventory-management'].includes(item.slug);
    return true;
  });

  return (
    <section className="py-20 bg-white dark:bg-[#071326] transition-colors duration-300 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
            <WiproDotCluster />
            <span>Enterprise Platform Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] dark:text-white tracking-tight">
            Compare Enterprise Platform Capabilities
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Evaluate purpose-built platforms configured for your exact industrial, logistics, and operational scope.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'bg-[#053674] text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52] border border-transparent dark:border-slate-700'
              }`}
            >
              All 6 Platforms
            </button>
            <button
              onClick={() => setFilter('logistics')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'logistics' 
                  ? 'bg-[#053674] text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52] border border-transparent dark:border-slate-700'
              }`}
            >
              Supply Chain & Freight (WMS / TMS / IMS)
            </button>
            <button
              onClick={() => setFilter('facility')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'facility' 
                  ? 'bg-[#053674] text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52] border border-transparent dark:border-slate-700'
              }`}
            >
              Facility & Gate Logistics (YMS / VMS)
            </button>
            <button
              onClick={() => setFilter('hospitality')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'hospitality' 
                  ? 'bg-[#053674] text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52] border border-transparent dark:border-slate-700'
              }`}
            >
              Hospitality & F&B (Hotel ERP)
            </button>
          </div>
        </FadeIn>

        {/* Desktop Comparison Table */}
        <FadeIn direction="up" delay={0.15}>
          <div className="hidden lg:block bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-black/60 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#071326] text-white text-xs uppercase tracking-wider font-bold">
                  <th className="py-4 px-6">Platform</th>
                  <th className="py-4 px-6">Primary Operational Scope</th>
                  <th className="py-4 px-6">Core Capability Modules</th>
                  <th className="py-4 px-6">Industry Fit</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredProducts.map((item) => (
                  <tr key={item.slug} className="hover:bg-slate-50 dark:hover:bg-[#0e2242]/80 transition-colors group">
                    <td className="py-5 px-6 font-bold text-[#071326] dark:text-white">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono bg-slate-100 dark:bg-[#071326] text-[#053674] dark:text-[#389BB5] font-bold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {item.code}
                        </span>
                        <button 
                          onClick={() => navigate(item.slug as PageRoute)}
                          className="hover:text-[#053674] dark:hover:text-[#389BB5] transition-colors text-left cursor-pointer font-bold"
                        >
                          {item.productName}
                        </button>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-600 dark:text-slate-300">
                      {item.primaryUse}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {item.keyModules.split(', ').map((mod: string, i: number) => (
                          <span key={i} className="text-[11px] bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-medium border border-slate-200/60 dark:border-slate-700">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-600 dark:text-slate-300 font-medium">
                      {item.bestFor}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => navigate(item.slug as PageRoute)}
                          className="text-xs font-bold text-[#053674] dark:text-[#389BB5] hover:text-[#0066CC] dark:hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => openDemoModal(item.productName)}
                          className="px-3 py-1.5 bg-[#053674] hover:bg-[#0066CC] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer border border-[#389BB5]/40"
                        >
                          Consult
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card-Based Comparison */}
          <div className="lg:hidden space-y-4">
            {filteredProducts.map((item) => (
              <div key={item.slug} className="bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-slate-100 dark:bg-[#071326] text-[#053674] dark:text-[#389BB5] font-bold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {item.code}
                    </span>
                    <h3 className="font-bold text-[#071326] dark:text-white text-base">{item.productName}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">{item.primaryUse}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {item.keyModules.split(', ').map((mod: string, i: number) => (
                    <span key={i} className="text-[10px] bg-slate-100 dark:bg-[#071326] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-700">
                      {mod}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <strong className="text-slate-700 dark:text-slate-200">Best for:</strong> {item.bestFor}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => navigate(item.slug as PageRoute)}
                    className="flex-1 py-2 text-xs font-bold text-[#071326] dark:text-slate-200 bg-slate-100 dark:bg-[#071326] hover:bg-slate-200 dark:hover:bg-[#122b52] rounded-lg text-center cursor-pointer border border-transparent dark:border-slate-700"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openDemoModal(item.productName)}
                    className="flex-1 py-2 text-xs font-bold text-white bg-[#053674] hover:bg-[#0066CC] rounded-lg text-center cursor-pointer"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ProductComparison;
