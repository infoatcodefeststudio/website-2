import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  FileCheck2, 
  Scale, 
  TrendingUp, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  ShieldCheck,
  Percent
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function VmsAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const steps = [
    { title: 'Digital Onboarding & Statutory Compliance', subtitle: 'Automated GST, PAN, MSME, and bank verification in minutes.' },
    { title: 'Dynamic RFQ & Live Reverse Bidding', subtitle: 'Transparent price discovery with structured contract rate cards.' },
    { title: 'Automated 3-Way Invoice Reconciliation', subtitle: 'System reconciles PO, GRN (Goods Receipt), and vendor Tax Invoice.' },
    { title: 'Vendor Scorecard & SLA Ranking', subtitle: 'Continuous grading on delivery timeliness, fill-rate, and material quality.' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
            VENDOR MANAGEMENT & AUDIT ENGINE
          </span>
          <span className="text-[10px] bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono px-2 py-0.5 rounded">
            AUDIT RUN #VMS-4819
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>ACTIVE VENDORS: <strong className="text-white">128 Suppliers</strong></span>
          <span className="text-emerald-400 font-bold">COMPLIANCE: 99.8%</span>
        </div>
      </div>

      {/* Main VMS Visualizer */}
      <div className="relative z-10 my-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: 3-Way Match Verification Flow */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-purple-400" />
              Automated 3-Way Matching Engine
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
              100% MATCH VERIFIED
            </span>
          </div>

          {/* 3 Pillars Connection Animation */}
          <div className="my-4 grid grid-cols-3 gap-2 text-center relative">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-mono">1. PURCHASE ORDER</div>
              <div className="text-xs font-bold text-white">PO-88402</div>
              <div className="text-[10px] text-emerald-400 font-mono">₹4,85,000</div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mx-auto mt-1" />
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-mono">2. GOODS RECEIPT</div>
              <div className="text-xs font-bold text-white">GRN-49102</div>
              <div className="text-[10px] text-emerald-400 font-mono">500 Units Recd</div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mx-auto mt-1" />
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-mono">3. TAX INVOICE</div>
              <div className="text-xs font-bold text-white">INV-2026-99</div>
              <div className="text-[10px] text-emerald-400 font-mono">₹4,85,000 + GST</div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mx-auto mt-1" />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs flex items-center justify-between text-emerald-300 font-mono">
            <span>DISCREPANCY: 0.00%</span>
            <span className="font-bold">STATUS: CLEARED FOR ERP DISBURSEMENT</span>
          </div>
        </div>

        {/* Right: Vendor Performance Scorecard */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Supplier KPI Matrix</span>
              <span className="text-[10px] text-purple-400 font-mono">TIER-1 SUPPLIER</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span>ON-TIME DISPATCH (OTD)</span>
                  <span className="text-white font-bold">98.6%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[98%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span>QUALITY ACCEPTANCE RATE</span>
                  <span className="text-white font-bold">99.4%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-[99%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span>SLA COMPLIANCE</span>
                  <span className="text-white font-bold">100%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Caption */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            {currentStep + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{steps[currentStep]?.title}</span>
              <span className="text-[10px] text-purple-400 font-normal">Active Simulation</span>
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
                currentStep === idx ? 'bg-purple-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
