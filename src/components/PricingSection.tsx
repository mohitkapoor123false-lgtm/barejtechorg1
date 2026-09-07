import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Fixed Scope MVP',
    badge: 'Standard',
    desc: 'Ideal for founders with defined PRDs who want a guaranteed milestone-based delivery.',
    features: [
      'Deterministic timeline & scope',
      'Detailed project blueprint',
      'Milestone-based stage payments',
      '100% full source code ownership',
      '30-Day post-launch warranty',
    ],
    cta: 'Get Fixed Price Quote',
    popular: false,
  },
  {
    name: 'Time & Sprint Velocity',
    badge: 'Most Popular',
    desc: 'Tailored for evolving startups and fast pivots that require flexible scope adjustments.',
    features: [
      'Billed per bi-weekly sprint cycle',
      'Live staging access & daily reports',
      'Flexible scope & backlog pivots',
      'Dedicated lead full-stack engineer',
      'Priority WhatsApp/Slack channel',
    ],
    cta: 'Start Sprint Cycle',
    popular: true,
  },
  {
    name: 'Dedicated Squad Retainer',
    badge: 'Enterprise',
    desc: 'Hire an embedded team of senior designers and developers dedicated to your product roadmap.',
    features: [
      'Full-time senior engineers & PM',
      'Direct daily sync & Slack integration',
      'Zero timezone friction overlap',
      'Elastic scale up/down with 15-day notice',
      'Enterprise SLA & 24/7 incident coverage',
    ],
    cta: 'Build Dedicated Team',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          Transparent Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
          Flexible Engagement Models
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
              p.popular
                ? 'bg-white dark:bg-slate-900 border-indigo-600 ring-2 ring-indigo-600/20 shadow-xl lg:scale-105 z-10 md:col-span-2 lg:col-span-1'
                : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.badge}</span>
                {p.popular && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-600 text-white">
                    Recommended
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{p.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              
              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className={`mt-6 sm:mt-8 w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                p.popular
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white hover:opacity-95 shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {p.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
