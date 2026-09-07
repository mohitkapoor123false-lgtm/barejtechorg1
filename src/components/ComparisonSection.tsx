import React from 'react';
import { COMPARISON_DATA } from '@/data/siteData';
import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
          Al Barej Tech vs The Alternatives
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          See exactly how our dedicated sprint model outclasses traditional outsourced agencies.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px] sm:min-w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-slate-900 dark:text-white w-1/3">What Matters</th>
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30 w-1/3">
                  ✓ Al Barej Tech
                </th>
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 w-1/3">
                  ✕ Typical Agency / Freelancers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 sm:p-6 font-semibold text-slate-900 dark:text-slate-200">{row.feature}</td>
                  <td className="p-4 sm:p-6 bg-indigo-50/30 dark:bg-indigo-950/20 font-medium text-slate-800 dark:text-indigo-200">
                    <span className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.ourWay}</span>
                    </span>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-500 dark:text-slate-400">
                    <span className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
