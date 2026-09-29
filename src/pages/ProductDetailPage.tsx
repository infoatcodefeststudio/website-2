import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, PRODUCTS } from '../data/products';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { AnimatedDemo } from '../components/AnimatedDemo';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WmsDashboardMockup } from '../components/dashboards/WmsDashboardMockup';
import { TmsDashboardMockup } from '../components/dashboards/TmsDashboardMockup';
import { YardDashboardMockup } from '../components/dashboards/YardDashboardMockup';
import { VmsDashboardMockup } from '../components/dashboards/VmsDashboardMockup';
import { HotelErpDashboardMockup } from '../components/dashboards/HotelErpDashboardMockup';
import { InventoryDashboardMockup } from '../components/dashboards/InventoryDashboardMockup';
import { ProductAnimatedClipPlayer } from '../components/clips/ProductAnimatedClipPlayer';
import { AnimatedClipModal } from '../components/clips/AnimatedClipModal';
import { ProductDetailSkeleton } from '../components/skeletons/ProductDetailSkeleton';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { 
  ArrowRight, 
  CalendarCheck, 
  ChevronDown, 
  Sparkles, 
  HelpCircle,
  Play,
  Film,
  Monitor,
  Zap
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  isLoading?: boolean;
}

export function ProductDetailPage({ product, isLoading: externalLoading }: ProductDetailPageProps) {
  const { openDemoModal } = useNavigation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroViewMode, setHeroViewMode] = useState<'clip' | 'mockup'>('clip');
  const [clipModalOpen, setClipModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Transition skeleton on product switch for smooth perceived performance
  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [product.slug]);

  if (externalLoading || isTransitioning) {
    return <ProductDetailSkeleton />;
  }

  const renderDashboardMockup = () => {
    switch (product.slug) {
      case 'wms': return <WmsDashboardMockup />;
      case 'tms': return <TmsDashboardMockup />;
      case 'gate-yard-management': return <YardDashboardMockup />;
      case 'vendor-management': return <VmsDashboardMockup />;
      case 'hotel-erp': return <HotelErpDashboardMockup />;
      case 'inventory-management': return <InventoryDashboardMockup />;
      default: return <WmsDashboardMockup />;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      {/* Top Banner with Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs 
          items={[
            { label: 'Platforms', page: 'home' },
            { label: product.name }
          ]} 
        />
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-[#053674] dark:text-[#389BB5]">
                <WiproDotCluster />
                <span>{product.category}</span>
                <span className="text-slate-400">•</span>
                <span className="font-mono text-slate-600 dark:text-slate-300">{product.shortCode}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight leading-tight">
                {product.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {product.shortDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openDemoModal(product.name)}
                  className="bg-[#053674] hover:bg-[#0066CC] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-[#053674]/20 cursor-pointer flex items-center justify-center gap-2 border border-[#389BB5]/40"
                >
                  <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
                  <span>{product.ctaText}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setClipModalOpen(true)}
                  className="bg-[#071326] dark:bg-[#0b1c36] hover:bg-slate-800 dark:hover:bg-[#122b52] text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-transparent dark:border-slate-700"
                >
                  <Play className="w-4 h-4 fill-[#389BB5] text-[#389BB5]" />
                  <span>Watch Simulation</span>
                </motion.button>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {product.stats.map((st, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                    className="bg-slate-50 dark:bg-[#0b1c36] p-3 rounded-xl border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-[#053674] dark:text-[#389BB5]">{st.value}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">{st.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Interactive Mockup / Animated Clip */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-7 relative"
            >
              {/* Toggle Ribbon */}
              <div className="flex items-center justify-between mb-3 bg-slate-100 dark:bg-[#0b1c36] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setHeroViewMode('clip')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      heroViewMode === 'clip' 
                        ? 'bg-[#071326] text-white shadow-sm' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Film className="w-3.5 h-3.5 text-[#389BB5]" />
                    <span>Autonomous Simulation</span>
                  </button>
                  <button
                    onClick={() => setHeroViewMode('mockup')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      heroViewMode === 'mockup' 
                        ? 'bg-[#053674] text-white shadow-sm' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Interactive Console</span>
                  </button>
                </div>

                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline pr-2">
                  {heroViewMode === 'clip' ? 'Live Flow Execution' : 'Clickable UI Mode'}
                </span>
              </div>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {heroViewMode === 'clip' ? (
                    <motion.div
                      key="animated-clip-view"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductAnimatedClipPlayer 
                        initialProductId={product.slug} 
                        showProductTabs={false} 
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="interactive-mockup-view"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderDashboardMockup()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW & POSITIONING */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 dark:bg-[#040c1a] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
              <WiproDotCluster />
              <span>Platform Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] dark:text-white">
              Why Global Operations Deploy {product.name}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed max-w-3xl mx-auto">
              {product.longDescription || product.shortDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5. HOW IT WORKS - INTERACTIVE ANIMATED DEMO SECTION */}
      {/* ========================================================================= */}
      <section id="how-it-works-section" className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden">
        {/* Top Multi-Color Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 wipro-multi-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#053674] border border-[#389BB5]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#389BB5] mb-3">
              <Zap className="w-3.5 h-3.5 text-[#FFC412]" />
              <span>Operational Flow Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience the Lifecycle Architecture in Motion
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Step through each critical operational phase of {product.name} with real-time telemetry metrics and telemetry indicators.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatedDemo product={product} />
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE FEATURES GRID */}
      {/* ========================================================================= */}
      <section id="features-section" className="py-20 bg-white dark:bg-[#071326] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3">
              <WiproDotCluster />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Engineered with Mission-Critical Precision
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              Every feature module is architected to eliminate paper bottlenecks and ensure 100% operational auditability.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(product.features || []).map((feat: string, idx: number) => (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-xs hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#071326] text-[#053674] dark:text-[#389BB5] flex items-center justify-center font-bold mb-4 border border-slate-200 dark:border-slate-700 shadow-xs">
                      <Sparkles className="w-5 h-5 text-[#053674] dark:text-[#389BB5]" />
                    </div>
                    <h3 className="text-base font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                      {feat}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      High-throughput enterprise module with automated validation, event audit logs, and real-time ERP synchronization.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WORKFLOW PROCESS STEPS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#031b3b] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#053674] border border-[#389BB5]/40 rounded-full text-xs font-bold text-[#389BB5] mb-2">
              <WiproDotCluster />
              <span>Execution Framework</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              End-to-End Operational Lifecycle
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Standardized step-by-step pipeline from event trigger to verification, dispatch, and financial reconciliation.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.workflowSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="bg-[#071326] rounded-2xl border border-slate-700/80 p-6 space-y-3 relative group hover:border-[#389BB5]/50 transition-colors h-full">
                  <div className="w-9 h-9 rounded-xl bg-[#053674] border border-[#389BB5]/40 text-[#389BB5] font-mono font-bold flex items-center justify-center text-sm">
                    {step.step.toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-700/50">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTEGRATIONS & HARDWARE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#071326] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-2">
              <WiproDotCluster />
              <span>Enterprise Integration Ecosystem</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Hardware & ERP Connectors
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              Pre-built bidirectional integration modules for global enterprise backbones.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['SAP S/4HANA', 'Oracle SCM', 'Tally Prime', 'Zebra Scanners', 'GPS IoT Telematics', 'GraphQL & REST'].map((item: string, idx: number) => (
              <StaggerItem key={idx}>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 hover:border-[#053674] dark:hover:border-[#389BB5] hover:bg-white dark:hover:bg-[#0e2242] transition-all shadow-xs">
                  <div className="text-xs font-bold text-[#071326] dark:text-slate-200">{item}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#040c1a] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-[#053674] dark:text-[#389BB5] mb-2 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Questions Regarding {product.name}
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-3">
            {product.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1c36] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-[#071326] dark:text-white text-sm sm:text-base flex justify-between items-center gap-4 hover:text-[#053674] dark:hover:text-[#389BB5] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#053674] dark:text-[#389BB5]' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GLOBAL CTA */}
      {/* ========================================================================= */}
      <GlobalCtaSection />

      {/* Standalone Fullscreen Clip Modal */}
      <AnimatedClipModal
        isOpen={clipModalOpen}
        onClose={() => setClipModalOpen(false)}
        productId={product.slug}
      />
    </div>
  );
}

export default ProductDetailPage;
