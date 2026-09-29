import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { AnimatedClipModal } from './clips/AnimatedClipModal';
import { 
  Warehouse, 
  Truck, 
  ShieldCheck, 
  Users, 
  Hotel, 
  Boxes, 
  ArrowRight, 
  CalendarCheck, 
  CheckCircle2,
  Play
} from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { navigate, openDemoModal } = useNavigation();
  const [clipModalOpen, setClipModalOpen] = useState(false);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse': return <Warehouse className="w-6 h-6 text-[#053674] dark:text-[#389BB5]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#389BB5]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#A4CE4F]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#B4156E]" />;
      case 'Hotel': return <Hotel className="w-6 h-6 text-[#FFC412]" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-[#301157] dark:text-[#A4CE4F]" />;
      default: return <Boxes className="w-6 h-6 text-[#053674] dark:text-[#389BB5]" />;
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
        className="bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-7 shadow-lg shadow-slate-200/40 dark:shadow-black/50 hover:shadow-xl hover:shadow-[#053674]/10 dark:hover:shadow-[#389BB5]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
      >
        {/* Top Wipro Multi-Color Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 wipro-multi-gradient opacity-90"></div>

        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 dark:bg-[#071326] group-hover:bg-slate-100 dark:group-hover:bg-[#0e2242] flex items-center justify-center shadow-sm border border-slate-200/80 dark:border-slate-700 transition-colors">
              {getProductIcon(product.iconName)}
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-[#389BB5] uppercase tracking-wider">
                {product.category}
              </div>
              <h3 className="text-xl font-bold text-[#071326] dark:text-white mt-1 group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                {product.name}
              </h3>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Benefits */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
              Key Operational Impact
            </div>
            {product.keyBenefits.slice(0, 4).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#053674] dark:text-[#A4CE4F] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#071326] px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
              {product.shortCode}
            </span>
            <button
              onClick={() => setClipModalOpen(true)}
              className="btn-ghost btn-sm"
              title="Watch Animated Workflow Clip"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulation Clip</span>
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigate(product.slug as PageRoute)}
              className="btn-secondary btn-sm flex-1"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => openDemoModal(product.name)}
              className="btn-primary btn-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#FFC412]" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatedClipModal
        isOpen={clipModalOpen}
        onClose={() => setClipModalOpen(false)}
        productId={product.slug}
      />
    </>
  );
}

export default ProductCard;
