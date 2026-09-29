import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollProgressBarProps {
  className?: string;
}

/**
 * ScrollProgressBar component
 * Renders a subtle, fixed horizontal scroll progress bar at the very top of the screen
 * directly beneath the navbar, providing visual feedback of page scroll depth.
 */
export function ScrollProgressBar({ className = '' }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className={`fixed top-[65px] sm:top-[73px] left-0 right-0 z-40 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-[2.5px] bg-slate-100/30 overflow-hidden">
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        />
      </div>
    </div>
  );
}

export default ScrollProgressBar;
