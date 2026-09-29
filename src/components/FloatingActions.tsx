import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { AnimatedClipModal } from './clips/AnimatedClipModal';
import { ArrowUp, CalendarCheck, Play } from 'lucide-react';

export function FloatingActions() {
  const { openDemoModal } = useNavigation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [clipModalOpen, setClipModalOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Watch Clip Pill */}
        <button
          onClick={() => setClipModalOpen(true)}
          className="bg-[#071326] hover:bg-slate-900 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-xl font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-slate-700 backdrop-blur-md"
          title="Watch Animated Product Clips"
        >
          <Play className="w-3.5 h-3.5 fill-[#389BB5] text-[#389BB5]" />
          <span className="hidden sm:inline">Simulations</span>
          <span className="sm:hidden">Clip</span>
        </button>

        {/* Floating Demo Trigger Pill */}
        <button
          onClick={() => openDemoModal()}
          className="bg-[#053674] hover:bg-[#0066CC] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-[#053674]/40 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#389BB5]/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFC412] animate-ping" />
          <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
          <span className="hidden sm:inline">Schedule Consultation</span>
          <span className="sm:hidden">Consult</span>
        </button>

        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#071326] hover:bg-slate-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-slate-700 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatedClipModal
        isOpen={clipModalOpen}
        onClose={() => setClipModalOpen(false)}
        productId="wms"
      />
    </>
  );
}

export default FloatingActions;
