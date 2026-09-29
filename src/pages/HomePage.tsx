import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { PRODUCTS } from '../data/products';
import { SOLUTIONS } from '../data/solutions';
import { CUSTOM_DEV_PROCESS, CUSTOM_SERVICES, COMPANY_INFO } from '../data/company';
import { ProductCard } from '../components/ProductCard';
import { WhyCodefest } from '../components/WhyCodefest';
import { ProductComparison } from '../components/ProductComparison';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WmsDashboardMockup } from '../components/dashboards/WmsDashboardMockup';
import { TmsDashboardMockup } from '../components/dashboards/TmsDashboardMockup';
import { HotelErpDashboardMockup } from '../components/dashboards/HotelErpDashboardMockup';
import { ProductAnimatedClipPlayer } from '../components/clips/ProductAnimatedClipPlayer';
import { AnimatedClipModal } from '../components/clips/AnimatedClipModal';
import { Testimonials } from '../components/Testimonials';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { 
  ArrowRight, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  HelpCircle,
  ChevronDown,
  Workflow,
  Play,
  Film
} from 'lucide-react';

export function HomePage() {
  const { navigate, openDemoModal } = useNavigation();
  const [heroMockupTab, setHeroMockupTab] = useState<'wms' | 'tms' | 'hotel'>('wms');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroClipModalOpen, setHeroClipModalOpen] = useState(false);

  const homeFaqs = [
    {
      question: 'Can Codefest Studio platforms be customized for our specific business workflows?',
      answer: 'Yes. Every Codefest Studio enterprise module can be customized to your exact operational parameters, warehouse topologies, dispatch routing models, billing rules, and approval matrices.'
    },
    {
      question: 'Do you offer both ready-to-deploy platforms and ground-up digital engineering?',
      answer: 'Yes. You can deploy our ready-to-use enterprise suites (WMS, TMS, YMS, VMS, Hotel ERP, IMS) for immediate operational speed, or engage our technology consulting architects to engineer bespoke cloud architectures.'
    },
    {
      question: 'Can your systems integrate with existing ERP backbones (SAP, Oracle, Tally, NetSuite)?',
      answer: 'Yes. Our architectures feature enterprise-grade REST APIs and real-time middleware connectors that synchronize bidirectional inventory, financial ledgers, purchase orders, and customs manifests.'
    },
    {
      question: 'What is the standard timeline for enterprise onboarding and rollout?',
      answer: 'Standard enterprise configurations typically take 2 to 4 weeks including master data migration, employee certification, and pilot testing. Bespoke software engineering follows disciplined agile sprint milestones.'
    },
    {
      question: 'How do we schedule a personalized enterprise architecture consultation?',
      answer: 'Click "Schedule Consultation" to connect directly with our enterprise solution architects for a tailored 30-minute operational walkthrough.'
    }
  ];

  return (
    <div className="space-y-0 transition-colors duration-300">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION - WIPRO INSPIRED EDITORIAL DESIGN */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        {/* Subtle Connecting Dots Mesh */}
        <div className="absolute inset-0 bg-wipro-dots pointer-events-none opacity-40 dark:opacity-20" />

        {/* Soft Ambient Radiance */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#053674]/5 dark:bg-[#053674]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#389BB5]/5 dark:bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Wipro Connecting Dots Brand Kicker */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-100 dark:bg-[#0b1c36] rounded-full border border-slate-200 dark:border-slate-700">
                <WiproDotCluster />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5]">
                  Ambitions Realized • Digital Transformation
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071326] dark:text-white tracking-tight leading-[1.12]">
                Engineering{' '}
                <span className="text-[#053674] dark:text-[#389BB5]">
                  Intelligent
                </span>{' '}
                Enterprise Operations.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Codefest Studio delivers resilient technology platforms and high-velocity digital engineering that connect supply chains, eliminate manual friction, and realize operational ambitions.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const el = document.getElementById('products-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Explore Platforms</span>
                  <ArrowRight className="w-4 h-4 text-[#FFC412]" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setHeroClipModalOpen(true)}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-[#389BB5] text-[#389BB5]" />
                  <span>Interactive Simulation</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openDemoModal()}
                  className="btn-ghost w-full sm:w-auto"
                >
                  <CalendarCheck className="w-4 h-4 text-[#053674] dark:text-[#389BB5]" />
                  <span>Schedule Consultation</span>
                </motion.button>
              </div>

              {/* Trust micro-banner */}
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A4CE4F]" />
                <span>Zero vendor lock-in • SLA-backed 24/7 support • Hybrid Cloud & On-Premise</span>
              </div>
            </motion.div>

            {/* Right Interactive Mockup Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              {/* Selector Tabs for Hero Mockup */}
              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                  Operational View:
                </span>
                {([
                  ['wms', 'WMS Platform'],
                  ['tms', 'TMS Telematics'],
                  ['hotel', 'Hotel PMS Flow'],
                ] as const).map(([tab, label]) => (
                  <button
                    key={tab}
                    onClick={() => setHeroMockupTab(tab)}
                    className={`focus-ring min-h-11 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      heroMockupTab === tab
                        ? 'bg-[#053674] text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-[#0b1c36] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#122b52]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Render Selected Mockup with animation */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroMockupTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {heroMockupTab === 'wms' && <WmsDashboardMockup />}
                    {heroMockupTab === 'tms' && <TmsDashboardMockup />}
                    {heroMockupTab === 'hotel' && <HotelErpDashboardMockup />}
                  </motion.div>
                </AnimatePresence>

                {/* Floating Metric Callout */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="hidden sm:flex absolute bottom-4 left-4 z-20 bg-white dark:bg-[#0b1c36] p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-300/50 dark:shadow-black/60 items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#071326] text-[#053674] dark:text-[#389BB5] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5 text-[#053674] dark:text-[#389BB5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071326] dark:text-white">99.94% Dispatch Accuracy</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Autonomous Barcode & IoT Telemetry</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VALUE PROPOSITION STRIP */}
      {/* ========================================================================= */}
      <section className="py-8 bg-slate-50 dark:bg-[#040c1a] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-5 gap-px overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
            {[
              { label: 'Ready-to-Deploy Suites', detail: 'Rapid modular onboarding', dot: 'bg-[#053674] dark:bg-[#389BB5]' },
              { label: 'Custom Engineering', detail: 'Bespoke operational systems', dot: 'bg-[#389BB5]' },
              { label: 'Enterprise Architecture', detail: 'High concurrency & microservices', dot: 'bg-[#B4156E]' },
              { label: 'Secure & Compliant', detail: 'RBAC & multi-cloud security', dot: 'bg-[#A4CE4F]' },
              { label: 'Process-Led Design', detail: 'Engineered around floor workflows', dot: 'bg-[#FFC412]' },
            ].map((point, index) => (
              <StaggerItem
                key={point.label}
                className={`flex flex-col items-center text-center bg-slate-50 dark:bg-[#040c1a] px-4 py-4 ${
                  index === 4 ? 'min-[520px]:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full mb-2 ${point.dot}`} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#071326] dark:text-slate-200">{point.label}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{point.detail}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT SHOWCASE */}
      {/* ========================================================================= */}
      <section id="products-showcase" className="py-20 lg:py-28 bg-white dark:bg-[#071326] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
              <WiproDotCluster />
              <span>Enterprise Platform Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] dark:text-white tracking-tight">
              Enterprise Software Built for Real Business Operations
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Modular, mission-critical platforms designed to eliminate operational silos, provide real-time supply chain telemetry, and enable data-driven governance.
            </p>
          </FadeIn>

          {/* 6 Products Grid */}
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((prod) => (
              <StaggerItem key={prod.id}>
                <ProductCard product={prod} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.15} className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openDemoModal()}
              className="btn-primary"
            >
              <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
              <span>Schedule an Enterprise Architectural Walkthrough</span>
            </motion.button>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.5. SIMULATION THEATER */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden">
        {/* Top Multi-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 wipro-multi-gradient" />

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#053674]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#053674]/60 border border-[#389BB5]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#389BB5] mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Interactive Workflow Theater</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Simulate Operational Workflows in Real Time
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Experience how our autonomous workflows execute barcoding, dispatch routing, gate security, and PMS check-in to check-out cycles.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ProductAnimatedClipPlayer initialProductId="wms" showProductTabs={true} />
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CUSTOM TECHNOLOGY & CONSULTING SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#031b3b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 wipro-multi-gradient" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#053674] border border-[#389BB5]/30 rounded-full text-xs font-bold text-[#389BB5]">
                <WiproDotCluster />
                <span>Custom Engineering & Consulting</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Digital Systems Engineered Around Your Business
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every business ecosystem has unique nuances. Codefest Studio designs and builds high-scale custom technology platforms tailored to your exact operational parameters.
              </p>

              <div className="p-4 rounded-xl bg-[#071326] border border-slate-700 text-xs sm:text-sm text-slate-200 font-medium italic">
                "{COMPANY_INFO.brandMessage}"
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('custom-technology')}
                  className="btn-primary"
                >
                  <span>Explore Consulting & Delivery Framework</span>
                  <ArrowRight className="w-4 h-4 text-[#FFC412]" />
                </button>
              </div>
            </FadeIn>

            {/* Right 4 Process Step Cards */}
            <StaggerContainer staggerDelay={0.08} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CUSTOM_DEV_PROCESS.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="bg-[#071326] rounded-xl border border-slate-700/80 p-5 space-y-2 hover:border-[#389BB5]/50 transition-colors h-full">
                    <div className="w-8 h-8 rounded-lg bg-[#053674] text-[#389BB5] font-mono font-bold flex items-center justify-center text-xs">
                      {step.number}
                    </div>
                    <h3 className="text-sm font-bold text-white">{step.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRODUCT COMPARISON MATRIX */}
      {/* ========================================================================= */}
      <ProductComparison />

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE CODEFEST STUDIO */}
      {/* ========================================================================= */}
      <WhyCodefest />

      {/* ========================================================================= */}
      {/* 7. SOLUTIONS ACROSS OPERATIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#071326] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3">
              <WiproDotCluster />
              <span>Industry Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] dark:text-white tracking-tight">
              Technology Solutions Across Core Verticals
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Transforming critical nodes across industrial manufacturing, 3PL cold logistics, retail supply chains, and hospitality.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol) => (
              <StaggerItem key={sol.id}>
                <div className="bg-slate-50 dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#071326] text-[#053674] dark:text-[#389BB5] flex items-center justify-center font-bold border border-slate-200 dark:border-slate-700 shadow-xs">
                        <Workflow className="w-5 h-5 text-[#053674] dark:text-[#389BB5]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-[#071326] px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
                        {sol.recommendedProducts?.length || 0} Platforms Linked
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                      {(sol.solutionsProvided || []).slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#053674] dark:text-[#A4CE4F] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => navigate('solutions')}
                      className="w-full text-xs font-bold text-[#053674] dark:text-[#389BB5] hover:text-[#0066CC] dark:hover:text-white flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Explore Vertical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFC412]" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ ACCORDION SECTION */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-16 bg-slate-50 dark:bg-[#040c1a] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-[#053674] dark:text-[#389BB5] mb-2 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Operational & Technical Answers
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              Key considerations regarding Codefest Studio platforms, architecture, integration, and security.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-3">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200 bg-white dark:bg-[#0b1c36]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-[#071326] dark:text-white text-sm sm:text-base flex justify-between items-center gap-4 hover:text-[#053674] dark:hover:text-[#389BB5] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 ' + (openFaq === index ? 'text-[#053674] dark:text-[#389BB5]' : '') : ''
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
      {/* 9. TESTIMONIALS & CLIENT SUCCESS STORIES */}
      {/* ========================================================================= */}
      <Testimonials />

      {/* ========================================================================= */}
      {/* 10. GLOBAL CTA BANNER */}
      {/* ========================================================================= */}
      <GlobalCtaSection />

      {/* Hero Animated Clip Modal */}
      <AnimatedClipModal
        isOpen={heroClipModalOpen}
        onClose={() => setHeroClipModalOpen(false)}
        productId="wms"
      />
    </div>
  );
}

export default HomePage;
