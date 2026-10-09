import React from 'react';
import { motion } from 'motion/react';
import { CUSTOM_DEV_PROCESS, CUSTOM_SERVICES, COMPANY_INFO } from '../data/company';
import { useDemoModal } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { 
  Code2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  CalendarCheck,
  Globe,
  Smartphone,
  Layers,
  Building2,
  Workflow,
  BarChart3,
  Network,
  Zap,
  PackagePlus,
  Repeat,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const SERVICE_ICONS: Record<string, { Icon: LucideIcon; className: string }> = {
  Globe: { Icon: Globe, className: 'w-5 h-5 text-[#053674] dark:text-[#389BB5]' },
  Smartphone: { Icon: Smartphone, className: 'w-5 h-5 text-[#389BB5]' },
  Layers: { Icon: Layers, className: 'w-5 h-5 text-[#B4156E]' },
  Building2: { Icon: Building2, className: 'w-5 h-5 text-[#301157] dark:text-[#A4CE4F]' },
  Workflow: { Icon: Workflow, className: 'w-5 h-5 text-[#A4CE4F]' },
  BarChart3: { Icon: BarChart3, className: 'w-5 h-5 text-[#389BB5]' },
  Network: { Icon: Network, className: 'w-5 h-5 text-[#B4156E]' },
  Sparkles: { Icon: Sparkles, className: 'w-5 h-5 text-[#FFC412]' },
  Zap: { Icon: Zap, className: 'w-5 h-5 text-[#FFC412]' },
  PackagePlus: { Icon: PackagePlus, className: 'w-5 h-5 text-[#A4CE4F]' },
  Repeat: { Icon: Repeat, className: 'w-5 h-5 text-[#389BB5]' },
};

const DEFAULT_SERVICE_ICON = { Icon: Code2, className: 'w-5 h-5 text-[#053674] dark:text-[#389BB5]' };

function ServiceIcon({ name }: { name: string }) {
  const { Icon, className } = SERVICE_ICONS[name] ?? DEFAULT_SERVICE_ICON;
  return <Icon className={className} />;
}

export function CustomTechnologyPage() {
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Custom Technology Solutions' }]} />
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 lg:pt-10 lg:pb-24 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-[#053674] dark:text-[#389BB5] mb-4 shadow-sm">
              <WiproDotCluster />
              <span>Turnkey Consulting & Engineering</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#071326] dark:text-white tracking-tight leading-tight">
              Technology Built Around Your Business
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
              Every business has unique workflows. Codefest Studio designs and develops customised technology solutions around your exact operational requirements.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openDemoModal('Custom Technology Solution')}
                className="w-full sm:w-auto bg-[#053674] hover:bg-[#0066CC] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-xl shadow-[#053674]/20 cursor-pointer flex items-center justify-center gap-2 border border-[#389BB5]/40"
              >
                <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
                <span>Discuss Your Requirement</span>
              </motion.button>
            </div>
          </FadeIn>

          {/* Statement Banner */}
          <FadeIn delay={0.4}>
            <div className="mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 max-w-xl mx-auto text-xs text-slate-700 dark:text-slate-300 font-medium italic shadow-sm">
              "{COMPANY_INFO.brandMessage}"
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-[#071326] text-white relative overflow-hidden">
        {/* Top Multi-Color Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 wipro-multi-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#053674] border border-[#389BB5]/40 rounded-full text-xs font-bold text-[#389BB5] mb-2">
              <WiproDotCluster />
              <span>Engagement Methodology</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              How We Deliver Custom Engineering Projects
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              A disciplined, transparent 4-stage lifecycle from operational requirement analysis to production deployment.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOM_DEV_PROCESS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="bg-[#0b1c36] rounded-2xl border border-slate-700/80 p-6 space-y-3 relative group hover:border-[#389BB5]/50 transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#053674] border border-[#389BB5]/40 text-[#389BB5] font-mono font-bold flex items-center justify-center text-sm">
                    {step.number}
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

      {/* Custom Services Grid */}
      <section className="py-20 bg-white dark:bg-[#071326] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-2">
              <WiproDotCluster />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Bespoke Engineering Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              End-to-end software engineering spanning web portals, mobile native applications, IoT hardware integrations, and microservices backends.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOM_SERVICES.map((srv, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#071326] flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700 shadow-xs">
                      <ServiceIcon name={srv.icon} />
                    </div>
                    <h3 className="text-base font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => openDemoModal(srv.title)}
                      className="text-xs font-bold text-[#053674] dark:text-[#389BB5] hover:text-[#0066CC] dark:hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Scope Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFC412]" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Global CTA */}
      <GlobalCtaSection />
    </div>
  );
}

export default CustomTechnologyPage;
