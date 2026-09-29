import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS, TestimonialItem } from '../data/testimonials';
import { useNavigation } from '../context/NavigationContext';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/MotionSection';
import { WiproDotCluster } from './WiproBrandMark';
import { 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Users2,
  Building2
} from 'lucide-react';

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  limit?: number;
  showFilters?: boolean;
}

export function Testimonials({
  title = "Client Success & Transformation Stories",
  subtitle = "How leading global enterprises achieve operational excellence, eliminate supply chain friction, and realize their digital ambitions with Codefest Studio.",
  badge = "Enterprise Case Studies & Verified Results",
  limit,
  showFilters = true
}: TestimonialsProps) {
  const { openDemoModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSpotlightId, setActiveSpotlightId] = useState<string>(TESTIMONIALS[0].id);

  const categories = ['All', 'Logistics & 3PL', 'Manufacturing', 'FMCG & Retail', 'Hospitality'];

  const filteredTestimonials = TESTIMONIALS.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.companyCategory === selectedCategory;
  });

  const displayedList = limit ? filteredTestimonials.slice(0, limit) : filteredTestimonials;
  const activeSpotlight = TESTIMONIALS.find(t => t.id === activeSpotlightId) || TESTIMONIALS[0];

  return (
    <section className="py-14 lg:py-16 bg-slate-50/70 dark:bg-[#040c1a] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#053674]/5 dark:bg-[#053674]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#389BB5]/5 dark:bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
            <WiproDotCluster />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {subtitle}
          </p>

          {/* Social Proof Trust Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 py-2.5 px-6 bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs text-xs font-semibold text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFC412] text-[#FFC412]" />
              ))}
              <span className="ml-1 text-[#071326] dark:text-white font-bold">4.95 / 5.0</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#A4CE4F]" />
              <span>100% On-Time SLA Delivery</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
              <Users2 className="w-4 h-4 text-[#053674] dark:text-[#389BB5]" />
              <span>50,000+ Daily Floor Transactions</span>
            </div>
          </div>
        </FadeIn>

        {/* Category Filters */}
        {showFilters && (
          <FadeIn delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#053674] text-white shadow-md shadow-[#053674]/20 border border-[#053674]'
                      : 'bg-white dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#122b52] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </FadeIn>
        )}

        {/* Featured Case Study Hero Spotlight */}
        <FadeIn delay={0.15} className="mb-14">
          <div className="bg-[#071326] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
            {/* Top Multi-Color Brand Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 wipro-multi-gradient" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              {/* Left Column: Quote & Story */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#389BB5]">
                    {activeSpotlight.companyCategory}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1 text-[#A4CE4F] text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {activeSpotlight.verifiedTag}
                  </span>
                  <div className="flex items-center gap-0.5 ml-auto sm:ml-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFC412] text-[#FFC412]" />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
                    "{activeSpotlight.headline}"
                  </h3>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeSpotlight.quote}
                  </p>
                </div>

                {/* Author Info & Products */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={activeSpotlight.avatarUrl}
                      alt={activeSpotlight.clientName}
                      className="w-13 h-13 rounded-xl object-cover ring-2 ring-[#053674] shadow-md"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">
                        {activeSpotlight.clientName}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {activeSpotlight.role} • <span className="text-[#389BB5] font-medium">{activeSpotlight.companyName}</span>
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {activeSpotlight.companyLocation}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {activeSpotlight.productsUsed.map((prod, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#053674]/50 border border-slate-700 text-[11px] font-medium text-slate-300">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metric Card */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="bg-[#031b3b] rounded-2xl p-6 border border-slate-700/80 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#053674] text-[#389BB5] flex items-center justify-center border border-[#389BB5]/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#A4CE4F] tracking-tight">
                      {activeSpotlight.highlightStat}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                      {activeSpotlight.statLabel}
                    </div>
                  </div>
                  <div className="w-full pt-3 border-t border-slate-700/60">
                    <button
                      onClick={() => openDemoModal(activeSpotlight.productsUsed[0] || '')}
                      className="w-full py-2.5 px-4 bg-[#053674] hover:bg-[#0066CC] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border border-[#389BB5]/30"
                    >
                      <span>Request Case Study & Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFC412]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={selectedCategory}
            staggerDelay={0.06}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedList.map((item) => {
              const isSelectedSpotlight = item.id === activeSpotlightId;
              return (
                <StaggerItem key={item.id}>
                  <div
                    onClick={() => setActiveSpotlightId(item.id)}
                    className={`h-full bg-white dark:bg-[#0b1c36] rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer relative group ${
                      isSelectedSpotlight
                        ? 'border-[#053674] dark:border-[#389BB5] ring-2 ring-[#053674]/20 dark:ring-[#389BB5]/30 shadow-xl shadow-[#053674]/5'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Top Row: Company Logo Badge & Rating */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`px-2.5 py-1 rounded-lg text-[11px] font-black text-white tracking-wider uppercase shadow-xs ${item.companyLogoColor}`}>
                            {item.companyLogoText}
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            {item.companyCategory}
                          </span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#FFC412] text-[#FFC412]" />
                          ))}
                        </div>
                      </div>

                      {/* ROI Stat Callout Box */}
                      <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xl font-extrabold text-[#053674] dark:text-[#389BB5] tracking-tight">
                            {item.highlightStat}
                          </div>
                          <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                            {item.statLabel}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-300 font-mono text-right bg-white dark:bg-[#0b1c36] px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                          {item.verifiedTag}
                        </div>
                      </div>

                      {/* Quote Headline */}
                      <h4 className="text-base font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors line-clamp-2">
                        "{item.headline}"
                      </h4>

                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {item.quote}
                      </p>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.avatarUrl}
                          alt={item.clientName}
                          className="w-9 h-9 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-xs font-bold text-[#071326] dark:text-white">
                            {item.clientName}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">
                            {item.companyName}
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#053674] dark:text-[#389BB5] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Testimonials;
