'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';
import { LIVE_PROJECT_WIDGETS } from '@/data/siteData';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const typedRole = useTypewriter([
    'Web Development',
    'Mobile Apps (Flutter & React Native)',
    'Full-Stack Cloud Architecture',
    'UI/UX & Product Design',
    'AI & Automation Workflows',
  ]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 transition-colors duration-300 scroll-mt-24"
    >
      {/* Soft Ambient Spotlight Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-400/25 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-sky-300/30 dark:bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-[11px] sm:text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              NOW ACCEPTING PROJECTS
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
                We Build Websites &{' '}
                <span className="text-indigo-600 dark:text-sky-400">
                  Apps
                </span>{' '}
                That Drive Results.
              </h1>

              {/* Typewriter Banner */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300">
                  Experts in
                </span>
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono font-bold text-indigo-600 dark:text-sky-400 bg-white/80 dark:bg-slate-900/80 px-3.5 py-1 rounded-xl border border-indigo-200 dark:border-indigo-900/60 shadow-sm max-w-full break-words">
                  {typedRole}
                  <span className="animate-pulse ml-0.5 text-indigo-600 dark:text-sky-400 font-bold">|</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Al Barej Technologies Pvt. Ltd. is an IT company rooted in Barej, Kaimur, Bihar – delivering custom web & mobile solutions for startups, SMEs, and enterprises across India and beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-indigo-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-900 dark:text-slate-200 font-semibold hover:bg-indigo-50/60 dark:hover:bg-slate-800 transition-colors shadow-sm text-center"
              >
                Start a Project
              </Link>
            </div>

            {/* Credibility Stats */}
            <div className="pt-6 sm:pt-7 border-t border-indigo-200/70 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-indigo-100 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 dark:text-sky-400">60+</div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">Projects Delivered</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-indigo-100 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 dark:text-sky-400">40+</div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">Happy Clients</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-indigo-100 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 dark:text-sky-400">8+</div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">Countries Served</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-indigo-100 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 dark:text-sky-400">4.9★</div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Live Active Card Widget */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white dark:bg-[#0F1C30] rounded-3xl p-6 sm:p-7 space-y-5 border border-indigo-100/80 dark:border-slate-800 shadow-xl shadow-indigo-950/5">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">Active Projects • Al Barej Tech</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  2 Live
                </span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                {LIVE_PROJECT_WIDGETS.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/50 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">{item.title}</span>
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                          item.status === 'LIVE'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : item.status === 'BUILDING'
                            ? 'bg-indigo-500/10 text-indigo-600 dark:text-sky-400 border border-indigo-500/20'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="truncate mr-2">{item.metrics}</span>
                      <span className="font-mono shrink-0 font-bold text-indigo-600 dark:text-sky-400">{item.progress}%</span>
                    </div>

                    <div className="w-full bg-slate-200/80 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-700"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col xs:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0" />
                  <span>99.97% operational uptime</span>
                </div>
                <Link href="#portfolio" className="text-indigo-600 dark:text-sky-400 hover:underline font-bold">
                  View All Projects →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}