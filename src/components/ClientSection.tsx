import React from 'react';
import { CLIENT_PARTNERS } from '@/data/siteData';
import { ShieldCheck } from 'lucide-react';

export default function ClientSection() {
  return (
    <section className="py-14 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
            Enterprise Client Partnerships
          </p>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Trusted By High-Impact Organizations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CLIENT_PARTNERS.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {client.name}
                  </h4>
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {client.tagline}
                </p>
              </div>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 shrink-0">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
