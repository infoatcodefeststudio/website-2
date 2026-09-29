import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/company';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhyCodefest } from '../components/WhyCodefest';
import { Testimonials } from '../components/Testimonials';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn } from '../components/animations/MotionSection';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { 
  Building2, 
  Target, 
  Eye
} from 'lucide-react';

export function AboutPage() {
  const { openDemoModal } = useNavigation();

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 lg:pt-10 lg:pb-24 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
              <WiproDotCluster />
              <span>About Codefest Studio</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight">
              {COMPANY_INFO.aboutHeadline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story & Positioning */}
      <section className="py-16 bg-slate-50 dark:bg-[#040c1a] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-sm space-y-6">
              <div className="text-lg sm:text-xl text-[#071326] dark:text-white leading-relaxed font-medium space-y-4">
                <p>
                  Codefest Studio is a technology solutions and enterprise digital engineering company focused on building resilient, scalable and business-driven systems.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base">
                  From ready-to-deploy enterprise platforms to bespoke digital engineering, Codefest Studio helps organizations connect operational nodes, enhance real-time visibility and realize their long-term digital ambitions.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 dark:bg-[#071326] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2"
                >
                  <div className="flex items-center gap-2 text-[#053674] dark:text-[#389BB5] font-bold text-xs uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    Our Mission
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 leading-relaxed">
                    "{COMPANY_INFO.mission}"
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 dark:bg-[#071326] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2"
                >
                  <div className="flex items-center gap-2 text-[#389BB5] font-bold text-xs uppercase tracking-wider">
                    <Eye className="w-4 h-4" />
                    Our Vision
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 leading-relaxed">
                    "{COMPANY_INFO.vision}"
                  </p>
                </motion.div>
              </div>

              {/* Brand Message Banner */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 text-center text-xs sm:text-sm text-[#053674] dark:text-[#389BB5] font-bold italic">
                "{COMPANY_INFO.brandMessage}"
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Codefest */}
      <WhyCodefest />

      {/* Client Success Testimonials Showcase */}
      <Testimonials 
        title="Proven Track Record Across Industries"
        subtitle="Discover how logistics, manufacturing, FMCG, and hospitality leaders realize their ambitions with our enterprise platforms."
        badge="Enterprise Case Studies & Metrics"
        showFilters={true}
      />

      {/* Global CTA */}
      <GlobalCtaSection />
    </div>
  );
}

export default AboutPage;
