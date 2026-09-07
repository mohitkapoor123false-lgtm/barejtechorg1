import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & System Blueprint',
    desc: 'Deep-dive into your requirements, edge cases, target audience, and enterprise database schema before writing a line of code.',
    icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    num: '02',
    title: 'Interactive UX & System Design',
    desc: 'High-fidelity Figma prototypes, design tokens, and seamless user interaction design validated before engineering.',
    icon: <PenTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    num: '03',
    title: 'Agile Sprints & Test Cycles',
    desc: 'Bi-weekly builds with automated CI/CD staging URLs, type validation, unit tests, and rigorous multi-device verification.',
    icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    num: '04',
    title: 'Deployment & SLA Warranty',
    desc: 'Smooth cloud deployment with zero downtime, edge caching setups, and 30-day post-launch warranty support included.',
    icon: <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          A Deterministic 4-Step Engineering Sprint
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-sm transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 dark:bg-blue-500 w-1/3 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
