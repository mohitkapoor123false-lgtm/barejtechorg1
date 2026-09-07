// components/PortfolioSection.tsx
'use client';

import React from 'react';
import { ALL_PROJECTS } from '@/data/siteData';
import { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-slate-100/50 dark:bg-slate-950/50 border-t border-slate-200/80 dark:border-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Recent Engineering Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Engineered with modern architecture patterns, resilient infrastructure, and production reliability.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project: Project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="p-7 pt-0">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}