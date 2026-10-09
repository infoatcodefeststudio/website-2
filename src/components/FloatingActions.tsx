import React, { useState, useEffect } from 'react';
import { useDemoModal } from '../context/NavigationContext';
import { ArrowUp, CalendarCheck } from 'lucide-react';

export function FloatingActions() {
  const { openDemoModal } = useDemoModal();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      <button
        type="button"
        onMouseEnter={() => { void import('./DemoModal'); }}
        onFocus={() => { void import('./DemoModal'); }}
        onClick={() => openDemoModal()}
        className="bg-[#053674] hover:bg-[#0066CC] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-[#053674]/40 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#389BB5]/40 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFC412] animate-ping" />
        <CalendarCheck className="w-4 h-4 text-[#FFC412]" />
        <span className="hidden sm:inline">Schedule Consultation</span>
        <span className="sm:hidden">Consult</span>
      </button>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#071326] hover:bg-slate-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-slate-700 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default FloatingActions;
