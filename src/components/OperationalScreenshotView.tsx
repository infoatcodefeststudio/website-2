import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { OperationalViewConfig } from '../data/operationalScreenshots';

const statusToneClasses = {
  emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  indigo: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

interface OperationalScreenshotViewProps {
  config: OperationalViewConfig;
}

export function OperationalScreenshotView({ config }: OperationalScreenshotViewProps) {
  const [activeId, setActiveId] = useState(config.screens[0]?.id ?? '');
  const activeScreen = config.screens.find((screen) => screen.id === activeId) ?? config.screens[0];

  if (!activeScreen) {
    return null;
  }

  const tone = statusToneClasses[config.statusTone];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/95 text-slate-100 shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl">
      <div className="flex items-center justify-between border-b border-slate-700/60 bg-slate-800/80 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="truncate font-mono text-[11px] font-semibold text-slate-400 sm:text-xs">
            {config.windowTitle}
          </span>
        </div>
        <span className={`hidden shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-medium sm:inline-flex ${tone}`}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-80" />
          {config.statusLabel}
        </span>
      </div>

      <div className="border-b border-slate-800 bg-slate-900 px-2 py-2 sm:px-4">
        <div className="flex gap-1 overflow-x-auto pb-0.5 [scrollbar-width:thin]">
          {config.screens.map((screen) => {
            const isActive = screen.id === activeScreen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveId(screen.id)}
                className={`focus-ring shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-colors sm:text-xs ${
                  isActive
                    ? 'bg-[#053674] text-white shadow-sm dark:bg-[#389BB5] dark:text-[#071326]'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {screen.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative bg-slate-950 p-2 sm:p-3">
        <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-white shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={activeScreen.src}
                alt={activeScreen.alt}
                className="block h-auto w-full max-h-[min(420px,58vh)] object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mt-2 truncate px-1 text-[10px] text-slate-500 sm:text-[11px]">
          {activeScreen.label} · captured from production UI
        </p>
      </div>
    </div>
  );
}

export default OperationalScreenshotView;
