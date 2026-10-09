import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS, SOLUTIONS_BY_ID } from '../data/solutions';
import { useDemoModal, useNavigation, PageRoute } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WiproDotCluster } from '../components/WiproBrandMark';
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  AlertCircle,
  Truck,
  Warehouse,
  Share2,
  Factory,
  ShoppingBag,
  Hotel,
  PackageCheck,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

const INDUSTRY_ICONS: Record<string, { Icon: LucideIcon; className: string }> = {
  Truck: { Icon: Truck, className: 'w-5 h-5 text-[#389BB5]' },
  Warehouse: { Icon: Warehouse, className: 'w-5 h-5 text-[#053674] dark:text-[#389BB5]' },
  Share2: { Icon: Share2, className: 'w-5 h-5 text-[#B4156E]' },
  Factory: { Icon: Factory, className: 'w-5 h-5 text-[#053674] dark:text-[#389BB5]' },
  ShoppingBag: { Icon: ShoppingBag, className: 'w-5 h-5 text-[#FFC412]' },
  Hotel: { Icon: Hotel, className: 'w-5 h-5 text-[#A4CE4F]' },
  PackageCheck: { Icon: PackageCheck, className: 'w-5 h-5 text-[#389BB5]' },
  Cpu: { Icon: Cpu, className: 'w-5 h-5 text-[#301157] dark:text-[#389BB5]' },
};

const DEFAULT_INDUSTRY_ICON = { Icon: Building2, className: 'w-5 h-5 text-[#053674] dark:text-[#389BB5]' };

function IndustryIcon({ name }: { name: string }) {
  const { Icon, className } = INDUSTRY_ICONS[name] ?? DEFAULT_INDUSTRY_ICON;
  return <Icon className={className} />;
}

export function SolutionsPage() {
  const { navigate, selectedIndustry } = useNavigation();
  const { openDemoModal } = useDemoModal();
  const [activeIndustryId, setActiveIndustryId] = useState<string>(selectedIndustry || 'logistics-transportation');

  const activeSolution = SOLUTIONS_BY_ID.get(activeIndustryId) || SOLUTIONS[0];

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 bg-white dark:bg-[#071326] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3">
            <WiproDotCluster />
            <span>Industry Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight">
            Technology Solutions Across Business Operations
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Every vertical has unique operational constraints. Explore how Codefest Studio software products and custom engineering solve complex industry workflows.
          </p>
        </motion.div>
      </section>

      {/* Industry Tabs Horizontal Bar */}
      <section className="bg-white dark:bg-[#0b1c36] border-y border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-xs transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-3">
          <div className="flex items-center gap-2 min-w-max">
            {SOLUTIONS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActiveIndustryId(sol.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeIndustryId === sol.id
                    ? 'bg-[#053674] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-[#071326] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52] border border-transparent dark:border-slate-700'
                }`}
              >
                <IndustryIcon name={sol.iconName} />
                <span>{sol.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Header Box */}
              <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#389BB5]">
                      <WiproDotCluster />
                      <span>Vertical Architecture Overview</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] dark:text-white">
                      {activeSolution.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {activeSolution.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <button
                      onClick={() => openDemoModal(activeSolution.title)}
                      className="bg-[#053674] hover:bg-[#0066CC] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md shadow-[#053674]/20 flex items-center gap-2 cursor-pointer border border-[#389BB5]/40"
                    >
                      <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
                      <span>Consult for this Industry</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Challenges vs Solutions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Industry Challenges */}
                <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#071326] dark:text-white">Critical Operational Challenges</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Bottlenecks commonly found across operations</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {(activeSolution.challenges || []).map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-100 dark:border-slate-800">
                        <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-500 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                          {ch}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Codefest Studio Solutions Provided */}
                <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#071326] dark:text-white">How Codefest Solves This</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise software & bespoke engineering workflows</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {(activeSolution.solutionsProvided || []).map((soln, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-100 dark:border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-[#A4CE4F] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                          {soln}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Platform Suites for this Industry */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#071326] dark:text-white">
                      Recommended Platform Modules
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Suites designed to operate independently or unified</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeSolution.recommendedProducts || []).map((prodItem) => (
                    <button
                      key={prodItem.slug}
                      onClick={() => navigate(prodItem.slug as PageRoute)}
                      className="p-6 bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[#053674] dark:hover:border-[#389BB5] shadow-sm hover:shadow-md transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-[#053674] dark:text-[#389BB5] bg-slate-100 dark:bg-[#071326] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {prodItem.code}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#053674] dark:group-hover:text-[#389BB5] group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="text-base font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5]">
                        {prodItem.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Click to explore operational architecture and live demonstration.
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Global CTA */}
      <GlobalCtaSection />
    </div>
  );
}

export default SolutionsPage;
