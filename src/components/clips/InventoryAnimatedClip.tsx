import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Boxes, 
  RefreshCw, 
  ArrowRightLeft, 
  AlertOctagon, 
  CheckCircle2, 
  Building2, 
  TrendingDown, 
  Sparkles 
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function InventoryAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const [stockLevel, setStockLevel] = useState(14);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStockLevel((prev) => (prev <= 12 ? 180 : prev - 1));
    }, 1500 / playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const steps = [
    { title: 'Multi-Location Stock Telemetry & Visibility', subtitle: 'Real-time stock meters across Central Hubs, Regional DCs, and Retail Stores.' },
    { title: 'Automated Minimum Stock Threshold Trigger', subtitle: 'System detects SKU stock dip below safety buffer and raises alert.' },
    { title: 'Autonomous Purchase Requisition Generation', subtitle: 'Creates draft PO calculated from 30-day sales velocity and lead times.' },
    { title: 'Inter-Warehouse Stock Transfer Balancing', subtitle: 'Balances surplus inventory from nearby warehouses before buying new stock.' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
            ENTERPRISE INVENTORY BALANCING ENGINE
          </span>
          <span className="text-[10px] bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono px-2 py-0.5 rounded">
            SKU #INV-4902-PRO
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>GLOBAL BUFFER: <strong className="text-white">4,820 Units</strong></span>
          <span className="text-cyan-400 font-bold">ACCURACY: 99.9%</span>
        </div>
      </div>

      {/* Main Inventory Node Flow */}
      <div className="relative z-10 my-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Multi-Warehouse Node Network */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <ArrowRightLeft className="w-3.5 h-3.5 text-cyan-400" />
              Multi-Node Stock Distribution Network
            </span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">
              REAL-TIME REBALANCE
            </span>
          </div>

          {/* Node Grid */}
          <div className="my-3 grid grid-cols-3 gap-2">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
              <div className="text-[9px] text-slate-400 font-mono">CENTRAL HUB</div>
              <div className="text-sm font-bold text-white">Mumbai Central</div>
              <div className="text-xs text-emerald-400 font-mono font-bold">1,420 Units</div>
              <div className="text-[8px] text-slate-500">SURPLUS AVAILABLE</div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-cyan-500/50 text-center space-y-1 shadow-md shadow-cyan-500/10">
              <div className="text-[9px] text-cyan-400 font-mono">TRANSFER TARGET</div>
              <div className="text-sm font-bold text-white">Bangalore DC</div>
              <div className={`text-xs font-mono font-bold ${stockLevel < 20 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {stockLevel} Units
              </div>
              <div className="text-[8px] text-rose-400 font-bold">
                {stockLevel < 20 ? 'LOW STOCK REPLENISH' : 'OPTIMAL'}
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
              <div className="text-[9px] text-slate-400 font-mono">RETAIL STORE</div>
              <div className="text-sm font-bold text-white">Delhi Flagship</div>
              <div className="text-xs text-emerald-400 font-mono font-bold">340 Units</div>
              <div className="text-[8px] text-slate-500">OPTIMAL BUFFER</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs flex items-center justify-between text-cyan-300 font-mono">
            <span>INTER-HUB TRANSFER TRIGGERED</span>
            <span className="font-bold">TRANSFER +120 UNITS</span>
          </div>
        </div>

        {/* Right: Automated PO & Requisition Alert */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Auto-Generated Requisition</span>
              <span className="text-[10px] text-cyan-400 font-mono">AI ASSISTED</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">SAFETY STOCK LIMIT:</span>
                <span className="text-white font-bold">25 Units</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">SALES VELOCITY:</span>
                <span className="text-emerald-400 font-bold">8.2 Units/Day</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">RECOMMENDED PO:</span>
                <span className="text-cyan-300 font-bold">200 Units (Supplier Auto-Sync)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Caption */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            {currentStep + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{steps[currentStep]?.title}</span>
              <span className="text-[10px] text-cyan-400 font-normal">Active Simulation</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {steps[currentStep]?.subtitle}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onStepChange?.(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentStep === idx ? 'bg-cyan-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
