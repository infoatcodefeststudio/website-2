import React from 'react';

interface WiproBrandMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

/**
 * WiproBrandMark
 * Inspired by Wipro's signature multi-colored concentric connecting dots motif
 * representing connection, fluid innovation, and "Ambitions Realized".
 */
export function WiproBrandMark({ size = 'md', className = '', animate = false }: WiproBrandMarkProps) {
  const sizeMap = {
    sm: { box: 'w-7 h-7', dot: 'w-1.5 h-1.5' },
    md: { box: 'w-9 h-9', dot: 'w-2 h-2' },
    lg: { box: 'w-12 h-12', dot: 'w-2.5 h-2.5' },
    xl: { box: 'w-16 h-16', dot: 'w-3.5 h-3.5' }
  };

  const { box } = sizeMap[size];

  return (
    <div className={`relative ${box} flex items-center justify-center ${className}`}>
      {/* Dynamic 6-dot concentric orbital ring */}
      <svg viewBox="0 0 100 100" className={`w-full h-full ${animate ? 'animate-spin [animation-duration:18s]' : ''}`}>
        {/* Ring 1 - Outer Dots */}
        <circle cx="50" cy="12" r="7.5" fill="#301157" />
        <circle cx="83" cy="31" r="7.5" fill="#B4156E" />
        <circle cx="83" cy="69" r="7.5" fill="#FFC412" />
        <circle cx="50" cy="88" r="7.5" fill="#A4CE4F" />
        <circle cx="17" cy="69" r="7.5" fill="#389BB5" />
        <circle cx="17" cy="31" r="7.5" fill="#053674" />
        
        {/* Inner Ring Dots */}
        <circle cx="50" cy="30" r="5" fill="#053674" />
        <circle cx="67" cy="40" r="5" fill="#389BB5" />
        <circle cx="67" cy="60" r="5" fill="#A4CE4F" />
        <circle cx="50" cy="70" r="5" fill="#FFC412" />
        <circle cx="33" cy="60" r="5" fill="#B4156E" />
        <circle cx="33" cy="40" r="5" fill="#301157" />

        {/* Center Nucleus */}
        <circle cx="50" cy="50" r="4.5" fill="#053674" />
      </svg>
    </div>
  );
}

export function WiproDotCluster({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-[#301157]" />
      <span className="w-2 h-2 rounded-full bg-[#B4156E]" />
      <span className="w-2 h-2 rounded-full bg-[#FFC412]" />
      <span className="w-2 h-2 rounded-full bg-[#A4CE4F]" />
      <span className="w-2 h-2 rounded-full bg-[#389BB5]" />
      <span className="w-2 h-2 rounded-full bg-[#053674]" />
    </div>
  );
}
