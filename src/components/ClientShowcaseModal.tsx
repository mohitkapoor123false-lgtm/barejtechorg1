'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

const deepDives = [
  {
    name: 'Mahi Botanical barrier care',
    tag: 'D2C Skincare & E-Commerce',
    metrics: '+210% checkout conversions',
    challenge: 'High cart drop-off and slow render times on mobile browsers.',
    solution: 'Re-architected headless Next.js frontend with automated image optimization and custom Razorpay/Stripe checkout hooks.',
    tech: ['Next.js 15', 'Tailwind', 'Stripe', 'Node.js'],
  },
  {
    name: 'Sharda Academy Centre Of Excellence',
    tag: 'EdTech & Enterprise Portal',
    metrics: '99.98% uptime during 15k+ exams',
    challenge: 'Concurrent examination load caused latency spikes on legacy servers.',
    solution: 'Engineered auto-scaling microservices with PostgreSQL connection pooling and offline-ready exam proctoring.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'AWS ECS'],
  },
];

export default function ClientShowcaseModal() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-10">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
          Client Transformations
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Deep Dive Into Our Proven Impact
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {deepDives.map((item, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  {item.tag}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {item.metrics}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.name}</h4>
              
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong className="text-slate-900 dark:text-slate-200">The Problem:</strong> {item.challenge}</p>
                <p><strong className="text-slate-900 dark:text-slate-200">Our Solution:</strong> {item.solution}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
              {item.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
