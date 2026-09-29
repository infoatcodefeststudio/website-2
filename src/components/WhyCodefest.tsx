import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/company';
import { FadeIn, StaggerContainer, StaggerItem } from './animations/MotionSection';
import { WiproDotCluster } from './WiproBrandMark';
import { 
  Target, 
  Rocket, 
  Code2, 
  Scale, 
  Eye, 
  Sparkles 
} from 'lucide-react';

export function WhyCodefest() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-[#053674] dark:text-[#389BB5]" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-[#389BB5]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#301157] dark:text-[#A4CE4F]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#A4CE4F]" />;
      case 'Eye': return <Eye className="w-6 h-6 text-[#B4156E]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#FFC412]" />;
      default: return <Sparkles className="w-6 h-6 text-[#053674] dark:text-[#389BB5]" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#040c1a] transition-colors duration-300 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-xs">
            <WiproDotCluster />
            <span>Enterprise Value Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] dark:text-white tracking-tight">
            Why Industry Leaders Choose Codefest Studio
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            We bridge the gap between complex physical operations and modern digital engineering, delivering resilient systems engineered for zero downtime and exponential scale.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <StaggerItem key={idx}>
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-7 shadow-sm hover:shadow-xl hover:shadow-[#053674]/5 dark:hover:shadow-[#389BB5]/5 transition-all duration-300 group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#071326] group-hover:bg-slate-100 dark:group-hover:bg-[#0e2242] flex items-center justify-center mb-5 transition-colors border border-slate-200/70 dark:border-slate-700">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default WhyCodefest;
