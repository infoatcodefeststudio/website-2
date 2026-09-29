import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Camera, 
  Clock, 
  CheckCircle2, 
  Truck, 
  AlertTriangle, 
  UserCheck, 
  DoorOpen,
  Sparkles
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function YardAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const [barrierOpen, setBarrierOpen] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setBarrierOpen((prev) => !prev);
    }, 2500 / playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const steps = [
    { title: 'ANPR License Plate & KYC Scan', subtitle: 'High-speed OCR cameras identify incoming trucks and verify driver credentials.' },
    { title: 'Automated Boom Barrier Clearance', subtitle: 'Zero manual gate register logs; paperless QR pass authorization.' },
    { title: 'Dock Bay Allocation & Turnaround Timer', subtitle: 'Dynamic bay scheduler guides driver directly to available loading dock.' },
    { title: 'Outward Tare-Weight Audit & Gate Pass', subtitle: 'Integrated weighbridge reconciliation prevents unauthorized cargo leaks.' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
            GATE / YARD AUTOMATION ENGINE
          </span>
          <span className="text-[10px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono px-2 py-0.5 rounded">
            MAIN GATE INWARD-01
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>GATE PASS: <strong className="text-white">GP-2026-9810</strong></span>
          <span className="text-emerald-400 font-bold">CLEARANCE: 2.1s</span>
        </div>
      </div>

      {/* Main Gate Visualizer */}
      <div className="relative z-10 my-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Animated Barrier Gate Simulation */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              ANPR OCR & Barrier Gate Visualizer
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
              barrierOpen ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {barrierOpen ? 'BARRIER OPEN - PASS' : 'SCANNING VEHICLE'}
            </span>
          </div>

          {/* Animated Gate Viewport */}
          <div className="my-3 relative h-36 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between px-6 overflow-hidden">
            {/* Truck approaching */}
            <motion.div 
              animate={isPlaying ? { x: barrierOpen ? [0, 40] : [0, 5, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-2"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 shadow-lg">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-mono">
                <div className="text-white font-bold">GJ-01-CX-4921</div>
                <div className="text-slate-400">Tare: 8,420 kg</div>
              </div>
            </motion.div>

            {/* OCR Laser Scanner effect */}
            <div className="relative flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping mb-1" />
              <div className="px-2 py-0.5 bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[9px] font-mono rounded">
                KYC VERIFIED
              </div>
            </div>

            {/* Barrier Gate Arm */}
            <div className="relative w-20 flex flex-col items-end">
              <div className="w-4 h-14 bg-slate-800 border border-slate-600 rounded-sm relative">
                {/* Rotating Boom Barrier Arm */}
                <motion.div
                  animate={{ rotate: barrierOpen ? -70 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ originX: 0.1, originY: 0.1 }}
                  className="absolute top-1 left-2 w-24 h-2 rounded bg-gradient-to-r from-rose-500 via-white to-rose-500 shadow-md shadow-rose-500/50"
                />
              </div>
            </div>
          </div>

          {/* Telemetry Bottom */}
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">DRIVER ID</span>
              <span className="text-white font-bold">Devendra S. (Aadhaar Verified)</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">ASSIGNED DOCK</span>
              <span className="text-emerald-400 font-bold">BAY #04 (UNLOAD)</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">AVG TURNAROUND</span>
              <span className="text-cyan-400 font-bold">24 Mins (-42%)</span>
            </div>
          </div>
        </div>

        {/* Right: Dock Bay Status Board */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Live Dock Bay Matrix</span>
              <span className="text-[10px] text-emerald-400 font-mono">6 BAYS ACTIVE</span>
            </div>

            <div className="space-y-1.5">
              {[
                { bay: 'Bay 01', status: 'Available', type: 'Unloading', color: 'emerald' },
                { bay: 'Bay 02', status: 'Occupied (12m left)', type: 'Loading', color: 'amber' },
                { bay: 'Bay 03', status: 'Occupied (24m left)', type: 'Unloading', color: 'amber' },
                { bay: 'Bay 04', status: 'Allocated to GJ-01', type: 'Unloading', color: 'indigo' },
              ].map((b, idx) => (
                <div key={b.bay} className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white">{b.bay}</span>
                  <span className="text-slate-400 text-[10px]">{b.type}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                    b.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                    b.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step Caption */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            {currentStep + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{steps[currentStep]?.title}</span>
              <span className="text-[10px] text-emerald-400 font-normal">Active Simulation</span>
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
                currentStep === idx ? 'bg-emerald-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
