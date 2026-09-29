import React from 'react';
import { motion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO } from '../data/company';
import { FadeIn } from './animations/MotionSection';
import { WiproDotCluster } from './WiproBrandMark';
import { CalendarCheck, ArrowRight, ShieldCheck, Mail, Globe2 } from 'lucide-react';

export function GlobalCtaSection() {
  const { navigate, openDemoModal } = useNavigation();

  return (
    <section className="py-20 bg-[#071326] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div 
        animate={{ 
          scale: [1, 1.06, 1],
          opacity: [0.35, 0.5, 0.35]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#053674]/40 via-[#389BB5]/30 to-[#B4156E]/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="bg-[#031b3b]/90 backdrop-blur-2xl rounded-3xl border border-slate-700/80 shadow-2xl text-center space-y-6 overflow-hidden relative p-8 sm:p-12 md:p-16">
            {/* Top Multi-Color Connecting Dots Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 wipro-multi-gradient" />

            {/* Wipro Brand Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#053674]/60 border border-[#389BB5]/40 text-[#389BB5] text-xs font-bold tracking-wide">
              <WiproDotCluster />
              <span>AMBITIONS REALIZED • DIGITAL EXCELLENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Ready to Accelerate Your Enterprise Transformation?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our ready-to-deploy enterprise platforms or collaborate with our technology consulting architects to build a bespoke digital solution engineered for global scale.
            </p>

            {/* Brand Statement Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#071326]/80 border border-[#389BB5]/30 max-w-2xl mx-auto text-xs sm:text-sm text-slate-200 font-medium italic">
              "{COMPANY_INFO.brandMessage}"
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('products-showcase');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('home');
                  }
                }}
                className="btn-inverse w-full sm:w-auto"
              >
                <span>Explore Platforms</span>
                <ArrowRight className="w-4 h-4 text-[#053674]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openDemoModal()}
                className="btn-primary w-full sm:w-auto"
              >
                <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
                <span>Schedule Consultation</span>
              </motion.button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A4CE4F]" />
                Enterprise Security & ISO Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#389BB5]" />
                Global Architecture Standards
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#FFC412]" />
                {COMPANY_INFO.email}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default GlobalCtaSection;
