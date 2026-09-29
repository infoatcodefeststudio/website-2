import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Navigation, 
  MapPin, 
  Fuel, 
  Gauge, 
  CheckCircle2, 
  FileCheck, 
  Radio, 
  Sparkles,
  Phone,
  ShieldAlert
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function TmsAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 10 : prev + 2));
    }, 150 / playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const steps = [
    { title: 'Dynamic Multi-Drop Route Optimization', subtitle: 'AI computes fuel-optimal trajectory avoiding congested toll clusters.' },
    { title: 'Live GPS Telemetry & Geo-fence Tracking', subtitle: 'Real-time vehicle speed, engine diagnostics, and ETA recalculations.' },
    { title: 'Electronic Proof of Delivery (e-POD)', subtitle: 'Driver collects receiver digital signature and tamper-proof photos.' },
    { title: 'Automated Trip Billing & Transporter Payout', subtitle: 'Zero manual freight auditing with auto-reconciled diesel slips.' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
            FLEET TELEMATICS & GPS ENGINE
          </span>
          <span className="text-[10px] bg-blue-950/80 border border-blue-500/40 text-blue-300 font-mono px-2 py-0.5 rounded">
            TRIP #TR-9042
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>VEHICLE: <strong className="text-white">MH-04-AZ-8812</strong></span>
          <span className="text-emerald-400 font-bold">STATUS: ON-TIME (ETA 18m)</span>
        </div>
      </div>

      {/* Main Map & HUD Interface */}
      <div className="relative z-10 my-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Vector Map Canvas */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-blue-400" />
              Dynamic Route Corridor (Mumbai → Pune Express Corridor)
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
              GPS LIVE (5s Interval)
            </span>
          </div>

          {/* SVG Map Path with Animated Truck */}
          <div className="my-3 relative h-40 bg-slate-950/90 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-[size:16px_16px]" />

            <svg className="w-full h-full" viewBox="0 0 400 120" fill="none">
              {/* Route line background */}
              <path
                d="M 30 60 Q 120 20 200 60 T 370 60"
                stroke="#1e293b"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Traversed route line */}
              <path
                d="M 30 60 Q 120 20 200 60 T 370 60"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset={400 - (progress / 100) * 340}
              />

              {/* Waypoints */}
              <circle cx="30" cy="60" r="5" fill="#10b981" />
              <text x="25" y="85" fill="#94a3b8" fontSize="9" fontFamily="monospace">ORIGIN HUB</text>

              <circle cx="200" cy="60" r="4" fill="#6366f1" />
              <text x="180" y="85" fill="#94a3b8" fontSize="9" fontFamily="monospace">TOLL PLAZA</text>

              <circle cx="370" cy="60" r="5" fill="#f43f5e" />
              <text x="340" y="85" fill="#94a3b8" fontSize="9" fontFamily="monospace">CLIENT DOCK</text>
            </svg>

            {/* Floating Animated Truck HUD */}
            <motion.div
              style={{ left: `${progress}%` }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
              <div className="px-2 py-0.5 bg-blue-600 text-white rounded text-[9px] font-mono font-bold shadow-lg shadow-blue-500/40 flex items-center gap-1 mb-1 whitespace-nowrap">
                <Radio className="w-2.5 h-2.5 animate-spin" /> 62 km/h
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Truck className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Telemetry Gauge Cards */}
          <div className="grid grid-cols-4 gap-2 text-[10px] font-mono">
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">SPEED</span>
              <span className="text-white font-bold">62.4 km/h</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">FUEL LEVEL</span>
              <span className="text-emerald-400 font-bold">86% (Optimal)</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">DISTANCE LEFT</span>
              <span className="text-cyan-400 font-bold">14.8 km</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-slate-500 block">TEMPERATURE</span>
              <span className="text-blue-400 font-bold">-18°C Cold Chain</span>
            </div>
          </div>
        </div>

        {/* Right: Driver ePOD Digital Signoff Preview */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                Mobile ePOD Signoff
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                GEO-VERIFIED
              </span>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 space-y-1.5 text-xs">
              <div className="text-[10px] text-slate-400 flex justify-between">
                <span>Receiver:</span>
                <strong className="text-white">Rajesh Verma (Store Mgr)</strong>
              </div>
              <div className="text-[10px] text-slate-400 flex justify-between">
                <span>Timestamp:</span>
                <span className="text-slate-300 font-mono">14:32:08 IST</span>
              </div>
              
              {/* Simulated Customer Signature */}
              <div className="h-12 bg-slate-900 rounded border border-dashed border-slate-700 p-1 flex items-center justify-center relative">
                <span className="font-serif italic text-sm text-cyan-300 opacity-90">
                  R. Verma
                </span>
                <div className="absolute bottom-1 right-1 text-[8px] font-mono text-slate-500">
                  DIGITALLY SIGNED
                </div>
              </div>
            </div>

            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Invoice triggered to ERP automatically
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 rounded-xl p-3 text-xs flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-[11px]">
              <strong className="text-white block font-semibold">Instant ERP Sync</strong>
              <span className="text-slate-300">Syncs with SAP, Oracle, and Tally in real time.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step Caption */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            {currentStep + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{steps[currentStep]?.title}</span>
              <span className="text-[10px] text-blue-400 font-normal">Active Simulation</span>
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
                currentStep === idx ? 'bg-blue-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
