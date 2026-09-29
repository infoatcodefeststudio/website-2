import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Film } from 'lucide-react';
import { ProductAnimatedClipPlayer } from './ProductAnimatedClipPlayer';
import { WiproDotCluster } from '../WiproBrandMark';

interface AnimatedClipModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId?: string;
}

export function AnimatedClipModal({ isOpen, onClose, productId = 'wms' }: AnimatedClipModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040b17]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0b1c36] border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/80 w-full max-w-5xl overflow-hidden relative my-auto z-10"
        >
          {/* Top Multi-Color Brand Line */}
          <div className="w-full h-1.5 wipro-multi-gradient" />

          {/* Top Bar */}
          <div className="bg-[#071326] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#053674] text-[#389BB5] border border-[#389BB5]/30 flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Interactive Enterprise Simulation Clip</span>
                  <span className="text-[10px] bg-emerald-500/20 text-[#A4CE4F] font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                    60 FPS Interactive
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Observe full operational lifecycle from ingestion to telematics and reporting.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close clip preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Player */}
          <div className="p-3 sm:p-6 bg-[#071326]">
            <ProductAnimatedClipPlayer initialProductId={productId} showProductTabs={true} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default AnimatedClipModal;
