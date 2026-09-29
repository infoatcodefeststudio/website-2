import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Barcode, 
  Box, 
  CheckCircle2, 
  ScanLine, 
  Layers, 
  ArrowRight, 
  QrCode, 
  Sparkles,
  Zap,
  Check,
  PackageCheck
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function WmsAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const [internalTime, setInternalTime] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setInternalTime((prev) => (prev + 1) % 100);
    }, 100 / playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const steps = [
    { title: 'Inbound Ingest & Barcode Scan', subtitle: 'Automated optical laser scan detects SKU and dimensions in 0.2s.' },
    { title: 'AI-Assisted Slotting & Putaway', subtitle: 'Algorithms assign optimal rack bin based on velocity and weight.' },
    { title: 'Forklift Picking & Batch Assembly', subtitle: 'Pick routes organized with minimal path traversal.' },
    { title: 'Quality Verification & Dispatch', subtitle: 'Automated shipping label generated with courier sync.' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
            LIVE WMS ENGINE SIMULATION
          </span>
          <span className="text-[10px] bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono px-2 py-0.5 rounded">
            FACILITY: BLR-HUB-01
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>THROUGHPUT: <strong className="text-white">1,480 SKUs/Hr</strong></span>
          <span className="text-emerald-400 font-bold">ACCURACY: 99.98%</span>
        </div>
      </div>

      {/* Animated Visual Canvas */}
      <div className="relative z-10 my-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Conveyor & Inward Scan Visualizer */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <ScanLine className="w-3.5 h-3.5 text-indigo-400" />
              Automated Inbound Sorter Conveyor
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
              STAGE {currentStep + 1} OF 4
            </span>
          </div>

          {/* Animated Conveyor Track */}
          <div className="my-6 relative py-6 px-2 bg-slate-950/80 border border-slate-800/60 rounded-xl overflow-hidden">
            {/* Moving track stripes */}
            <motion.div 
              animate={isPlaying ? { x: [0, -32] } : {}}
              transition={{ repeat: Infinity, duration: 1 / playbackSpeed, ease: 'linear' }}
              className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#6366f1,#6366f1_10px,transparent_10px,transparent_20px)]"
            />

            {/* Laser Scan Beam */}
            <motion.div 
              animate={isPlaying ? { x: ['10%', '85%', '10%'] } : {}}
              transition={{ repeat: Infinity, duration: 2.4 / playbackSpeed, ease: 'easeInOut' }}
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-300 to-emerald-400 shadow-[0_0_12px_#10b981] z-20 pointer-events-none"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 px-1.5 py-0.5 bg-emerald-500 text-slate-950 text-[9px] font-bold font-mono rounded whitespace-nowrap shadow-lg">
                LASER SCAN ACTIVE
              </div>
            </motion.div>

            {/* Parcels on Conveyor */}
            <div className="flex justify-around items-center relative z-10 py-2">
              {[
                { id: 'PKG-8491', sku: 'SKU-ELEC-401', status: 'SCANNED', color: 'indigo' },
                { id: 'PKG-8492', sku: 'SKU-FMCG-109', status: 'PUTAWAY', color: 'emerald' },
                { id: 'PKG-8493', sku: 'SKU-AUTO-782', status: 'IN_TRANSIT', color: 'cyan' },
              ].map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  animate={isPlaying ? { y: [0, -4, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.3 }}
                  className={`p-3 rounded-lg border text-center relative ${
                    idx === 1 
                      ? 'bg-indigo-950/80 border-indigo-500/80 shadow-lg shadow-indigo-500/20' 
                      : 'bg-slate-900 border-slate-700'
                  }`}
                >
                  <Box className={`w-6 h-6 mx-auto mb-1 ${idx === 1 ? 'text-indigo-400' : 'text-slate-400'}`} />
                  <div className="text-[10px] font-mono font-bold text-white">{pkg.id}</div>
                  <div className="text-[9px] font-mono text-slate-400">{pkg.sku}</div>
                  <span className={`inline-block mt-1 text-[8px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    idx === 1 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {pkg.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Real-time Decoded Telemetry */}
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">WEIGHT & VOL</span>
              <span className="text-white font-bold">14.2 kg (0.04 m³)</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">DESTINATION BIN</span>
              <span className="text-indigo-400 font-bold">ZONE-B / RACK-04</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">SLOTTING SCORE</span>
              <span className="text-emerald-400 font-bold">OPTIMAL 98.4%</span>
            </div>
          </div>
        </div>

        {/* Right: Automated Putaway & Dispatch Card */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {/* Dynamic Putaway Visualizer */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Warehouse Bin Allocation Grid
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">AUTONOMOUS</span>
            </div>

            {/* 3x3 Bin Matrix */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {['A-01', 'A-02', 'A-03 (Allocated)', 'B-01', 'B-02', 'B-03', 'C-01', 'C-02', 'C-03'].map((bin, idx) => (
                <motion.div
                  key={bin}
                  animate={idx === 2 ? { borderColor: ['#6366f1', '#10b981', '#6366f1'] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`p-2 rounded text-center border text-[10px] font-mono ${
                    idx === 2 
                      ? 'bg-indigo-950 border-indigo-500 text-white font-bold shadow-inner' 
                      : idx % 2 === 0 
                      ? 'bg-slate-950/60 border-slate-800 text-slate-500' 
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-600'
                  }`}
                >
                  <div className="text-[9px]">{bin.split(' ')[0]}</div>
                  {idx === 2 ? (
                    <span className="text-[8px] text-emerald-400 flex items-center justify-center gap-0.5">
                      <Check className="w-2.5 h-2.5" /> PUTAWAY
                    </span>
                  ) : (
                    <span className="text-[8px] text-slate-600">OCCUPIED</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Instant Dispatch Label Generator */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                e-AWB Label Generated
              </div>
              <p className="text-[10px] text-slate-400">
                Direct API sync with FedEx / Bluedart logistics courier.
              </p>
              <div className="font-mono text-[9px] text-indigo-300">
                AWB: 8892-4910-3849
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shrink-0 shadow-md">
              <QrCode className="w-9 h-9 text-slate-900" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Step Caption Banner */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            {currentStep + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{steps[currentStep]?.title}</span>
              <span className="text-[10px] text-indigo-400 font-normal">Active Execution</span>
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
                currentStep === idx ? 'bg-indigo-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
