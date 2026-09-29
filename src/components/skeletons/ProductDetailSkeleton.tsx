import React from 'react';
import { motion } from 'motion/react';

/**
 * ProductDetailSkeleton
 * High-fidelity skeleton loading screen for product detail pages to improve
 * perceived performance during data transitions and asynchronous fetching.
 */
export function ProductDetailSkeleton() {
  return (
    <div className="bg-slate-50 min-h-screen animate-pulse overflow-hidden" aria-busy="true" aria-label="Loading product details...">
      {/* Top Banner / Breadcrumbs Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 w-16 bg-slate-200/90 rounded-md"></div>
          <div className="h-4 w-3 bg-slate-200/60 rounded"></div>
          <div className="h-4 w-28 bg-slate-200/90 rounded-md"></div>
          <div className="h-4 w-3 bg-slate-200/60 rounded"></div>
          <div className="h-4 w-36 bg-indigo-200/80 rounded-md"></div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION SKELETON */}
      {/* ========================================================================= */}
      <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content Skeleton */}
            <div className="lg:col-span-5 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-200/80 rounded-full w-48 h-7"></div>

              {/* Headline (3 lines) */}
              <div className="space-y-3 pt-1">
                <div className="h-9 sm:h-11 bg-slate-300/80 rounded-xl w-11/12"></div>
                <div className="h-9 sm:h-11 bg-slate-300/80 rounded-xl w-3/4"></div>
              </div>

              {/* Subtitle / Paragraph */}
              <div className="space-y-2 pt-2">
                <div className="h-4 bg-slate-200 rounded-md w-full"></div>
                <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
                <div className="h-4 bg-slate-200 rounded-md w-4/6"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <div className="h-12 w-44 bg-indigo-300/70 rounded-xl shadow-sm"></div>
                <div className="h-12 w-40 bg-slate-300/70 rounded-xl"></div>
              </div>

              {/* Stat Cards Strip (4 items) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-sm space-y-2">
                    <div className="h-6 w-16 bg-slate-300/80 rounded"></div>
                    <div className="h-3 w-12 bg-slate-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Interactive Dashboard Skeleton */}
            <div className="lg:col-span-7">
              {/* Mockup Top Tab Bar */}
              <div className="flex items-center justify-between mb-3 bg-white/90 p-2 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-28 bg-slate-300/80 rounded-xl"></div>
                  <div className="h-7 w-32 bg-slate-200/70 rounded-xl"></div>
                </div>
                <div className="h-4 w-20 bg-slate-200/60 rounded"></div>
              </div>

              {/* Dashboard Frame */}
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 space-y-4">
                {/* Window Top Controls */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40"></div>
                    <div className="h-4 w-32 bg-slate-800 rounded ml-2"></div>
                  </div>
                  <div className="h-5 w-20 bg-slate-800 rounded-full"></div>
                </div>

                {/* Simulated Dashboard Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-xl space-y-2">
                    <div className="h-3 w-16 bg-slate-700 rounded"></div>
                    <div className="h-6 w-20 bg-slate-600 rounded"></div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl space-y-2">
                    <div className="h-3 w-16 bg-slate-700 rounded"></div>
                    <div className="h-6 w-20 bg-slate-600 rounded"></div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl space-y-2">
                    <div className="h-3 w-16 bg-slate-700 rounded"></div>
                    <div className="h-6 w-20 bg-slate-600 rounded"></div>
                  </div>
                </div>

                {/* Simulated Chart & Workflow Area */}
                <div className="h-48 sm:h-64 bg-slate-800/50 rounded-xl border border-slate-800/80 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-36 bg-slate-700 rounded"></div>
                    <div className="h-4 w-16 bg-slate-700 rounded"></div>
                  </div>
                  
                  {/* Chart Wave / Bars */}
                  <div className="flex items-end justify-between gap-2 h-28 pt-4 px-2">
                    {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85].map((height, idx) => (
                      <div 
                        key={idx} 
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-indigo-500/30 rounded-t-md"
                      ></div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-2 border-t border-slate-800">
                    <div className="h-3 w-20 bg-slate-700/60 rounded"></div>
                    <div className="h-3 w-24 bg-slate-700/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HOW IT WORKS / ANIMATED DEMO SECTION SKELETON */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="h-6 w-32 bg-indigo-200/80 rounded-full mx-auto"></div>
          <div className="h-8 w-72 bg-slate-300 rounded-xl mx-auto"></div>
          <div className="h-4 w-96 max-w-full bg-slate-200 rounded mx-auto"></div>
        </div>

        {/* Big Interactive Flow Box Skeleton */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
          {/* Workflow Tabs */}
          <div className="flex flex-wrap gap-2 justify-center pb-4 border-b border-slate-100">
            {[1, 2, 3, 4, 5].map((tab) => (
              <div key={tab} className="h-10 w-28 bg-slate-100 rounded-xl"></div>
            ))}
          </div>

          {/* Interactive Screen Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-5 space-y-4">
              <div className="h-6 w-24 bg-indigo-100 rounded-full"></div>
              <div className="h-7 w-56 bg-slate-300 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
              </div>
              <div className="pt-2 flex gap-3">
                <div className="h-9 w-28 bg-slate-200 rounded-lg"></div>
                <div className="h-9 w-28 bg-slate-200 rounded-lg"></div>
              </div>
            </div>

            <div className="lg:col-span-7 h-64 bg-slate-100 rounded-2xl border border-slate-200/80 flex items-center justify-center p-6">
              <div className="w-full space-y-4">
                <div className="flex items-center justify-around">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-200/70"></div>
                  <div className="h-1 w-16 bg-slate-300 rounded"></div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-300"></div>
                  <div className="h-1 w-16 bg-slate-300 rounded"></div>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-200/70"></div>
                </div>
                <div className="h-4 w-48 bg-slate-300 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAPABILITIES / FEATURES GRID SKELETON */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-100/60 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-28 bg-indigo-200 rounded"></div>
              <div className="h-7 w-64 bg-slate-300 rounded-lg"></div>
            </div>
            <div className="h-9 w-32 bg-slate-200 rounded-xl hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div key={card} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100"></div>
                <div className="h-5 w-40 bg-slate-300 rounded"></div>
                <div className="space-y-2">
                  <div className="h-3.5 w-full bg-slate-200 rounded"></div>
                  <div className="h-3.5 w-4/5 bg-slate-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailSkeleton;
