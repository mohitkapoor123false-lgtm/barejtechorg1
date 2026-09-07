import React from 'react';
import { MapPin, Sparkles, Check } from 'lucide-react';

export default function CompanyStory() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            Rooted in Bihar • Serving India & Globally
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Building World-Class Software from Barej, Kaimur
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              We founded <strong>Al Barej Technologies</strong> with a direct conviction: enterprise-grade software development does not need to be restricted to tier-1 metro hubs.
            </p>
            <p>
              By assembling senior developers and designers directly, we eliminate heavy corporate agency markups while delivering faster sprint turnarounds, uncompromising code quality, and honest partnership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">01. Direct Communication</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Direct access to the engineers building your code.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">02. Honest Pricing</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Zero arbitrary hourly padding or surprise post-launch charges.</p>
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
            <Sparkles className="w-4 h-4" />
            Our Quality Guarantees
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mobile-first responsive on all devices</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Under 1.5s target Core Web Vitals score</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Non-Disclosure Agreement protection</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complete handover of intellectual property</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
            CIN: Registered IT Enterprise • Kaimur, Bihar
          </div>
        </div>

      </div>
    </section>
  );
}
