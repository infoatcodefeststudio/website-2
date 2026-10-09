import React, { memo } from 'react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useDemoModal, useNavigation, PageRoute } from '../context/NavigationContext';
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
  type LucideIcon,
} from 'lucide-react';

const PRODUCT_ICONS: Record<string, { Icon: LucideIcon; className: string }> = {
  Warehouse: { Icon: Warehouse, className: 'w-6 h-6 text-[#053674] dark:text-[#389BB5]' },
  Truck: { Icon: Truck, className: 'w-6 h-6 text-[#389BB5]' },
  ShieldCheck: { Icon: ShieldCheck, className: 'w-6 h-6 text-[#A4CE4F]' },
  Users: { Icon: Users, className: 'w-6 h-6 text-[#B4156E]' },
  Hotel: { Icon: Hotel, className: 'w-6 h-6 text-[#FFC412]' },
  Boxes: { Icon: Boxes, className: 'w-6 h-6 text-[#301157] dark:text-[#A4CE4F]' },
};

const DEFAULT_PRODUCT_ICON = { Icon: Boxes, className: 'w-6 h-6 text-[#053674] dark:text-[#389BB5]' };

export const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  const { navigate } = useNavigation();
  const { openDemoModal } = useDemoModal();
  const { Icon, className } = PRODUCT_ICONS[product.iconName] ?? DEFAULT_PRODUCT_ICON;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-7 shadow-lg shadow-slate-200/40 dark:shadow-black/50 hover:shadow-xl hover:shadow-[#053674]/10 dark:hover:shadow-[#389BB5]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 wipro-multi-gradient opacity-90" />

      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 dark:bg-[#071326] group-hover:bg-slate-100 dark:group-hover:bg-[#0e2242] flex items-center justify-center shadow-sm border border-slate-200/80 dark:border-slate-700 transition-colors">
            <Icon className={className} />
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

        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
          {product.shortDescription}
        </p>

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
        <span className="inline-block text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#071326] px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
          {product.shortCode}
        </span>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => navigate(product.slug as PageRoute)}
            className="btn-secondary btn-sm flex-1"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => openDemoModal(product.name)}
            className="btn-primary btn-sm"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#FFC412]" />
            <span>Consult</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default ProductCard;
