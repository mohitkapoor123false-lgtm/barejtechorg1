import React from 'react';
import { Target, Eye, Gauge, Compass, HeartHandshake, CheckCheck } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Ownership Mindset',
    desc: 'We treat your product as if it were our own. No hand-holding required — we take full responsibility from kickoff to launch.',
  },
  {
    icon: <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Radical Transparency',
    desc: 'No surprises or hidden fees. We provide fixed-price breakdowns, weekly progress Loom videos, and real-time repo access.',
  },
  {
    icon: <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Speed Without Shortcuts',
    desc: 'We move fast with typed contracts, linting, modular designs, and scalable architectures that never compromise maintainability.',
  },
  {
    icon: <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Continuous Innovation',
    desc: 'Technology evolves rapidly. We constantly upskill our stack with latest Next.js features, AI agents, and edge optimizations.',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Long-Term Partnerships',
    desc: 'We do not disappear after deployment. We back you up with proactive post-launch maintenance, SLAs, and growth consulting.',
  },
  {
    icon: <CheckCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Results Over Hours Logged',
    desc: 'We measure velocity through shipped features and conversion gains rather than inflated hourly invoices.',
  },
];

export default function CultureSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
          Our Culture & Principles
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          How We Think, Work & Deliver
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div
            key={i}
            className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 shadow-sm transition-all space-y-3"
          >
            <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800">
              {v.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
